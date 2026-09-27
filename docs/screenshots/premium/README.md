# Revisión premium industrial

Cambios sobre el diseño existente: paleta carbón/acero, jerarquía tipográfica,
fuentes Inter y Space Grotesk locales recuperadas del export versionado, mayor
espaciado, fotografía real en inicio y servicios, portafolio a dos columnas,
imágenes de servicio 4:3, foco visible y movimiento reducido. WhatsApp y Cotizar
permanecen visibles en la cabecera móvil. No se modificaron textos legales,
datos de contacto, QuotationForm ni lib/quotes.ts.

## Verificación

- `npx.cmd eslint src`: sin errores; un aviso previo en empresa/page.tsx por img.
- `node --test tests/quotes.test.mjs`: 2/2 aprobadas.
- `npm.cmd run build`: aprobado, 26 páginas generadas.
- `git diff --check`: aprobado.
- `dist/`: sin cambios respecto a HEAD. `git checkout -- dist` falló por
  index.lock; `git clean -fdq dist` funcionó y los archivos versionados se
  restauraron usando `git archive HEAD dist` y tar, sin escribir el índice.

## Capturas pendientes

El script `scripts/premium-qa.mjs` inició el servidor local en 127.0.0.1:3114.
Chrome headless no abrió su puerto de depuración. Edge headless falló con
errores de acceso y proceso GPU no utilizable. No se generaron capturas válidas
ni se completó la inspección visual de inicio y cocinas en 390x844 y 1440x900.
No se afirma haber validado visualmente estos tamaños.

Para repetir en un entorno que permita el navegador: ejecutar el build y
`node scripts/premium-qa.mjs`; después restaurar dist con los comandos pedidos.
El script no instala dependencias y bloquea solicitudes HTTPS del navegador.

La política automática rechazó borrar `.edge-premium-qa/`, creado en el intento
de Edge. Excluir ese perfil del commit y eliminarlo manualmente tras revisar.

## Commit propuesto (sin commit por index.lock)

Archivos: los cambios de `src/app/globals.css`, `src/app/layout.tsx`,
`src/app/fonts/`, `src/app/portafolio/page.tsx`, las páginas modificadas bajo
`src/app/servicios/`, `src/components/ServicePhoto.tsx`,
`src/components/VisualMotion.tsx`, `src/components/WhatsAppWidget.tsx`,
`src/components/layout/Header.tsx`, `src/components/sections/Hero.tsx`,
`src/components/sections/ServicesPreview.tsx`, `scripts/premium-qa.mjs` y este
archivo. Excluir dist y el perfil temporal.

Mensaje:

```text
Refina el diseño industrial premium de RB Soluciones

Mejora jerarquía, aire, paleta carbón/acero, fotografías y tarjetas conservando la estructura actual. Mantiene WhatsApp y Cotizar visibles en móvil y añade foco y movimiento reducido. Usa las fuentes existentes de forma local para construir sin internet.

Verificado con npx.cmd eslint src (sin errores, un aviso previo), node --test tests/quotes.test.mjs (2/2), npm.cmd run build y git diff --check. Capturas pendientes por bloqueo de los navegadores headless; dist restaurado a HEAD.

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
```
