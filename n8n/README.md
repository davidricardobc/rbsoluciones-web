# Cotizaciones: receptor opcional, sin credenciales exportadas

El sitio es una exportación estática para GitHub Pages. El formulario usa una URL
pública HTTPS (`NEXT_PUBLIC_RB_QUOTES_WEBHOOK_URL`, fijada al construir) o permite
continuar manualmente por WhatsApp si falta el receptor o no confirma el guardado.
No se debe poner ningún secreto en una variable `NEXT_PUBLIC_*` ni en esa URL.
No hay envío real probado ni workflow activado en esta revisión.

## Preparación por el responsable, después de aprobación

1. Importar `rb-cotizaciones-workflow.json`, que está inactivo y sin credenciales.
2. Seleccionar una credencial de Google Sheets dentro de n8n y reemplazar el ID
   de documento. Crear la pestaña `Cotizaciones` con columnas Referencia, Fecha,
   Nombre, Correo, WhatsApp, Ciudad, Servicios, Etapa, Tiempo, Descripcion, Fuente,
   Notas, Consentimiento y Sector. Tratar las celdas como texto; el validador
   también neutraliza prefijos de fórmulas.
3. Configurar el gateway para aceptar OPTIONS y POST desde
   `https://rbsoluciones.co`, cabecera Content-Type, cuerpo máximo 16 KB y límites
   de solicitudes. Verificar el preflight real: añadir cabeceras a la respuesta
   POST por sí solo no implementa OPTIONS. CORS no autentica ni detiene bots.
4. Probar en una instancia de ensayo con datos ficticios: campos inválidos y sin
   consentimiento deben devolver 400; un fallo de Sheets no debe devolver éxito.
   Una solicitud válida debe crear una fila y devolver
   `{"ok":true,"reference":"misma referencia recibida"}`.
5. Confirmar el dominio receptor, configurar solo su URL pública en el build y
   activar el workflow únicamente tras autorización. Para autenticación privada,
   usar un gateway de servidor; nunca un token en el navegador.

Se conserva el flujo webhook → validación → normalización → Sheets → respuesta.
Se descartó el correo del WIP: asumía que Sheets preservaba el payload y que Gmail
devolvía la referencia. La respuesta ahora referencia explícitamente el nodo
normalizado y se ejecuta solo después de guardar. Configurar alertas de errores
en n8n, retención limitada de datos e idempotencia por referencia antes de escalar.
Si una petición vence tras guardarse, el usuario debe verificar por WhatsApp antes
de repetirla. El navegador nunca declara éxito por un simple HTTP 200.

Fuentes: [exportación estática de Next.js](https://nextjs.org/docs/app/guides/static-exports)
y [Webhook de n8n](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/).
