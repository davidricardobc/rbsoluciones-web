import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { submitQuote, quoteWhatsAppUrl } from '../src/lib/quotes.ts';
import { whatsAppUrl, generalWhatsAppMessage, serviceWhatsAppMessage, municipalityWhatsAppMessage } from '../src/lib/whatsapp.ts';

const form = {category:'hogar',homeServices:['closets'],structServices:[],projectDescription:'Un closet a medida para habitación',projectStage:'idea',timeline:'indefinido',city:'restrepo',cityOther:'',neighborhood:'Balcones de la Colina',fullName:'Persona de prueba',email:'persona@example.invalid',whatsapp:'3000000000',preferWhatsApp:true,source:'google',additionalComments:'Medidas por confirmar',acceptTerms:true};

test('contrato de envío sin red ni claves', async () => {
  const original = globalThis.fetch;
  let calls = 0;
  globalThis.fetch = async (_url, options) => {
    calls++;
    assert.deepEqual(options.headers, {'Content-Type':'application/json'});
    assert.equal(options.credentials, 'omit');
    const lead = JSON.parse(options.body);
    assert.equal(lead.project.city, 'Restrepo (Meta)');
    assert.equal(lead.consent, true);
    return Response.json({ok:true,reference:lead.reference});
  };
  try {
    assert.equal((await submitQuote(form)).ok, true);
    assert.equal((await submitQuote(form,'http://example.invalid')).ok,false);
    assert.equal((await submitQuote({...form,acceptTerms:false},'https://example.invalid')).ok,false);
    assert.equal(calls,0);
    assert.equal((await submitQuote(form,'https://example.invalid')).ok,true);
    for (const response of [Response.json({ok:false}),Response.json({ok:true,reference:'wrong'}),Response.json({ok:true},{status:500}),new Response('not json'),new Response(null,{status:204})]) {
      globalThis.fetch = async () => response;
      assert.equal((await submitQuote(form,'https://example.invalid')).ok,false);
    }
    globalThis.fetch = async () => { throw new DOMException('Timeout','TimeoutError'); };
    assert.equal((await submitQuote(form,'https://example.invalid')).ok,false);
    const text = new URL(quoteWhatsAppUrl(form)).searchParams.get('text');
    assert.ok(text.includes(form.projectDescription));
    assert.ok(text.includes(form.fullName));
    assert.ok(text.includes('pendiente de envío'));
  } finally { globalThis.fetch = original; }
});

test('enlaces contextuales conservan tildes y caracteres especiales', () => {
  for (const message of [generalWhatsAppMessage, serviceWhatsAppMessage('techos y cubiertas'), municipalityWhatsAppMessage('Bogotá'), 'Medidas: 3 × 2 m & acabado #1 + PVC\n¿Asesoría?']) {
    const url = new URL(whatsAppUrl(message));
    assert.equal(url.origin, 'https://wa.me');
    assert.equal(url.pathname, '/573183773905');
    assert.equal(url.searchParams.get('text'), message);
    assert.equal(url.hash, '');
    assert.equal([...url.searchParams].length, 1);
  }
  assert.equal(new URL(whatsAppUrl()).searchParams.get('text'), generalWhatsAppMessage);
  assert.equal(municipalityWhatsAppMessage('Restrepo'), 'Hola RB Soluciones, vi su página y quiero cotizar un proyecto en Restrepo.');
});

test('sin webhook prepara WhatsApp durante el gesto de envío, sin referencia falsa', async () => {
  for (const webhook of [undefined, '', '  ']) {
    const opened = [];
    const pending = submitQuote(form, webhook, url => opened.push(url));
    assert.deepEqual(opened, [quoteWhatsAppUrl(form)]);
    const result = await pending;
    assert.equal(result.ok, true);
    assert.equal(result.channel, 'whatsapp');
    assert.equal(result.reference, undefined);
    assert.equal(result.message, 'Tu solicitud está lista en WhatsApp, solo presiona enviar');
  }
  let opened = false;
  const result = await submitQuote({...form, acceptTerms:false}, undefined, () => { opened = true; });
  assert.equal(result.ok, false);
  assert.equal(opened, false);
});

test('cotización completa, servicios legibles, municipio libre y referencia de respaldo', () => {
  const data = {...form, category:'estructuras', structServices:['techos','montajes'], city:'otro', cityOther:'Acacías', projectDescription:'Cubierta de 6 × 4 m & pérgola', additionalComments:'Presupuesto: $8 millones. Fecha: diciembre.'};
  const text = new URL(quoteWhatsAppUrl(data, 'RB-prueba')).searchParams.get('text');
  for (const line of ['Referencia recibida: RB-prueba', `Nombre: ${data.fullName}`, `WhatsApp: +57${data.whatsapp}`, `Correo: ${data.email}`, 'Servicios: Techos y cubiertas, Montajes metalmecánicos', 'Tipo de proyecto: Estructuras', `Medidas y detalles: ${data.projectDescription}`, 'Municipio: Acacías', `Sector: ${data.neighborhood}`, 'Etapa: Solo tengo la idea', 'Plazo: Aún no lo tengo definido', `Notas: ${data.additionalComments}`, 'Contacto preferido: WhatsApp', 'Nos conoció por: Google / Búsqueda web']) {
    assert.ok(text.split('\n').includes(line), line);
  }
  assert.ok(!text.includes('pendiente de envío'));
  const homeText = new URL(quoteWhatsAppUrl({...form, neighborhood:'', additionalComments:''})).searchParams.get('text');
  assert.ok(homeText.includes('Servicios: Closets a medida'));
  assert.ok(homeText.includes('Tipo de proyecto: Hogar'));
  assert.ok(!homeText.includes('Notas:'));
  assert.ok(!homeText.includes('Sector:'));
});

test('workflow inactivo: validación, consentimiento y fórmulas', () => {
  const workflow = JSON.parse(readFileSync(new URL('../n8n/rb-cotizaciones-workflow.json',import.meta.url),'utf8'));
  assert.equal(workflow.active,false);
  assert.ok(workflow.nodes.every(node => !node.credentials));
  const code = workflow.nodes.find(node => node.name === 'Validar solicitud').parameters.jsCode;
  const run = new Function('$input',code);
  const lead = {reference:'RB-20260926-12345',contact:{fullName:'=formula',email:form.email,whatsapp:'+573000000000'},project:{category:'hogar',description:form.projectDescription,city:'Restrepo',services:['closets'],stage:'idea',timeline:'indefinido'},consent:true};
  const result = body => run({first:()=>({json:{body}})})[0].json;
  assert.equal(result(lead).valid,true);
  assert.equal(result(lead).body.contact.fullName,"'=formula");
  assert.equal(result({...lead,consent:false}).valid,false);
  assert.equal(result({}).valid,false);
  assert.equal(result({...lead,project:{...lead.project,services:[]}}).valid,false);
});
