import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { submitQuote, quoteWhatsAppUrl } from '../src/lib/quotes.ts';

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
    assert.equal((await submitQuote(form)).ok, false);
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
