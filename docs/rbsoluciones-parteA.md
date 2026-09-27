# Parte A — revisión del WIP (26 de septiembre de 2026)

Estado: cambios preparados; validación de lint/build bloqueada por dependencias.
Parte B no iniciada, siguiendo la instrucción de detenerse ante un bloqueo.
Rama comprobada: `wip-revisado`; árbol limpio antes de aplicar cambios.
No se encontraron AGENTS.md ni CLAUDE.md en el repositorio.

El destino solicitado `C:/Claudecode/aios/projects/rbsoluciones-parteA.md` queda
fuera de las raíces de escritura autorizadas. Esta es la copia local para que
Claude la traslade después de revisar. Se leyó la auditoría indicada.

## Archivos exactos de A

1. `.gitignore`
2. `src/app/layout.tsx`
3. `src/app/servicios/page.tsx`
4. `src/components/forms/QuotationForm.tsx`
5. `src/lib/quotes.ts`
6. `public/robots.txt`
7. `public/sitemap.xml`
8. `n8n/README.md`
9. `n8n/rb-cotizaciones-workflow.json`
10. `tests/quotes.test.mjs`
11. `docs/rbsoluciones-parteA.md`

`.npm-cache/` y `node_modules/` son temporales ignorados de los intentos de instalar
dependencias; no son entregables. No cambió package-lock.json.

## Aplicado y corregido

- WIP de layout: metadataBase, plantilla de títulos y metadatos sociales/robots.
  Se excluyó canonical `/` heredable: habría apuntado todas las rutas a la portada.
  El título local definitivo y el schema mínimo quedan pendientes en B.
- WIP de servicios: dos enlaces que apuntaban a páginas inexistentes ahora llevan
  a montajes metalmecánicos y contacto; se retiran afirmaciones de certificación.
- Robots y sitemap del archivo comprimido; quitado Host redundante de robots.
- Cotizador: envío HTTPS real opcional, timeout, comprobación de HTTP y JSON
  `ok: true` con la misma referencia; sin log de datos personales, token público,
  éxito simulado ni popup automático. Se conservan los datos para continuar por
  WhatsApp y se explica que el usuario debe pulsar Enviar allí. Se mantiene el
  número que ya estaba en el código, pendiente de confirmación por David.
  Se tiparon los campos y se asociaron labels a controles.
- Workflow inactivo y sin credenciales: validación de campos y consentimiento,
  neutralización de fórmulas, guardado en Sheets y respuesta con referencia
  explícita al nodo normalizado. La configuración e integración real quedan por
  probar en una instancia de ensayo autorizada. CORS/preflight y límites de
  solicitudes requieren configurar el gateway según `n8n/README.md`.

## Descartado

- Todos los artefactos `dist/` del patch y del estado exportado. No se aplicaron ni
  reconstruyeron. Tampoco se modificaron los artefactos antiguos de `docs/`.
- JSON-LD del WIP con teléfono, dirección y perfiles sociales no confirmados.
- Token `NEXT_PUBLIC_*`: sería visible en el navegador. Se eliminó su uso y la
  validación Bearer del workflow; el endpoint público requiere controles de abuso.
- Gmail del workflow: asumía incorrectamente que los nodos anteriores preservaban
  todos los campos y no tenía un destinatario confirmado. Sheets es el único
  destino preparado; las notificaciones pueden añadirse tras configurar el receptor.
- `push.sh` no se importó ni ejecutó. El archivo cambia a una ruta Linux ajena a
  este repo y ejecuta `git push origin main`, redirigiendo stderr a stdout. No
  construye, no valida, no publica explícitamente gh-pages y contradice el alcance
  autorizado. No usarlo para publicar.

## Validación y bloqueo

- `node --test tests/quotes.test.mjs`: 2 pruebas correctas. Fetch simulado, sin red:
  éxito confirmado, URL ausente/insegura, falta de consentimiento, error HTTP,
  JSON inválido/vacío, referencia incorrecta y timeout; enlace de WhatsApp y
  validación del workflow. No equivalen a una prueba de recepción real ni de UI.
- `git diff --check`: correcto.
- Sitemap comprobado: sus 19 rutas tienen una p?gina fuente existente.
- `npm.cmd ci --ignore-scripts --no-audit --no-fund --cache .npm-cache`: falló con
  `Exit handler never called!`; no quedaron ejecutables instalados.
- Reintento offline con caché existente: `ENOTCACHED` para
  `typescript-eslint-8.56.1.tgz`. No hay dependencias completas disponibles.
- `npm.cmd run lint`: código 1, `eslint` no reconocido.
- `npm.cmd run build`: código 1, `next` no reconocido.
- No se afirma que compila o que lint pasa. No se ejecutó navegador, envío real,
  activación de n8n, push, preview, deploy, Azure ni operaciones sobre producción.
- No se leyeron archivos de entorno ni credenciales.
- `git add` fue rechazado: `Unable to create .git/index.lock: Permission denied`.
  Todos los cambios quedan en el ?rbol de trabajo, sin staging ni commit, seg?n
  la excepci?n indicada por el usuario. Claude podr? hacer el commit tras revisar.

## Commit propuesto para Claude, después de revisión

Incluir únicamente los once archivos enumerados. Mensaje completo:

```text
fix: revisar WIP de cotizaciones y enlaces de servicios

Aplica metadatos, robots y sitemap; corrige enlaces y prepara envío HTTPS con
confirmación de guardado y alternativa manual por WhatsApp. Elimina el token
público, el éxito simulado y credenciales del workflow n8n para evitar exposición
y confirmaciones falsas. Excluye artefactos dist y el script de push ajeno.

Pruebas: 2 pruebas locales con Node y git diff --check correctos. Lint y build
intentados, bloqueados porque faltan eslint y next; npm ci falló y la caché
offline está incompleta. Integración real y navegador pendientes.

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
```

## Continuación y publicación (no ejecutada)

1. Restaurar acceso a las dependencias del lockfile; ejecutar npm ci, las pruebas,
   lint y build. Revisar exclusión de artefactos en ESLint: la configuración
   actual no excluye `dist/` ni el sitio generado preexistente en `docs/`.
2. Completar B en cambio separado: título/meta locales, schema
   HomeAndConstructionBusiness solo con datos confirmados y cobertura Restrepo,
   Villavicencio y Bogotá; carpintería, marcas de fotos, rutas municipales,
   reseñas ocultas, WhatsApp móvil y sitemap/canonical coherentes.
3. Probar navegación móvil, enlaces, exportación y recepción de cotización en
   ensayo. Revisar fotos, cifras y afirmaciones heredadas del sitio.
4. Se publica con GitHub Pages desde la carpeta `docs/` de `main` (verificado
   el 27-sep-2026; la rama gh-pages no se usa). La configuración local es
   `output: 'export'`, `distDir: 'dist'`, imágenes sin optimizador y trailingSlash.
   Verificar el directorio de salida tras un build satisfactorio. No usar
   `next start` para servir una exportación estática.
5. Presentar el resultado revisable a David y obtener aprobación expresa antes de
   publicar. El responsable confirma en GitHub Pages la rama/carpeta configurada,
   guarda la revisión anterior para revertir y publica únicamente el contenido
   exportado en `docs/` de `main`, con CNAME `rbsoluciones.co` y `.nojekyll`.
   Verifica HTTPS, portada, rutas, robots, sitemap y contacto. Proceso completo
   en la sección Deploy del README.

## Material que debe conseguir David

Fotos propias autorizadas: techos, uniones/soldadura, estructuras, cerramientos,
pérgolas y carpintería (closets/armarios, cocinas/cajoneros, zapateros y escritorios).
Para cada caso: municipio real, necesidad, trabajo realizado, materiales, medidas
aproximadas y permiso del cliente; idealmente antes, proceso y después. No atribuir
las fotos existentes a obras o municipios sin comprobarlo.

Confirmar número de WhatsApp y destinatario, cobertura y desplazamientos, dirección
solo si corresponde publicarla, horarios reales, condiciones de visita/garantía,
años de experiencia y cifras de proyectos. Conseguir reseñas reales con permiso
y enlace de origen antes de mostrar el bloque. Preparar receptor de cotizaciones
y comprobar recepción junto con el responsable, sin incluir claves en el sitio.
