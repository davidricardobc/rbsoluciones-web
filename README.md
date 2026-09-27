# RB Soluciones Constructivas - Web Corporativa

Sitio web corporativo profesional para empresa de metalmecánica y construcción con 26+ años de experiencia.

## 🚀 Stack Tecnológico

- **Framework:** Next.js 15 con App Router
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS 4.0
- **Animaciones:** Framer Motion
- **Formularios:** React Hook Form + Zod
- **Iconos:** Lucide React
- **Fuentes:** Inter + Space Grotesk (Google Fonts)

## 📁 Estructura del Proyecto

```
src/
├── app/                    # Rutas y páginas (App Router)
│   ├── page.tsx           # Home
│   ├── servicios/         # Página de servicios
│   ├── portafolio/        # Galería de proyectos
│   ├── proceso/           # Proceso de trabajo
│   ├── empresa/           # Sobre nosotros
│   ├── cotizar/           # Formulario de cotización
│   ├── contacto/          # Información de contacto
│   ├── privacidad/        # Política de privacidad
│   ├── terminos/          # Términos y condiciones
│   └── sitemap.ts         # Sitemap dinámico
├── components/
│   ├── layout/            # Header, Footer
│   ├── sections/          # Secciones de página
│   ├── forms/             # Formularios
│   └── WhatsAppWidget.tsx # Widget de WhatsApp
└── public/                # Assets estáticos
```

## 🎨 Sistema de Diseño

### Colores
- **Primary:** `#1E293B` (Slate 800)
- **Accent:** `#0369A1` (Sky 700)
- **WhatsApp:** `#25D366`
- **Background:** `#FFFFFF`

### Tipografía
- **Body:** Inter
- **Headings:** Space Grotesk

## 📝 Scripts Disponibles

```bash
npm run dev      # Modo desarrollo
npm run build    # Construcción para producción
npm run start    # Iniciar servidor de producción
npm run lint     # Ejecutar ESLint
```

## 🔧 Configuración para Deploy

1. Número y mensajes de WhatsApp: todo sale de `src/lib/whatsapp.ts`.

2. Actualizar información de contacto en:
   - `src/app/contacto/page.tsx`
   - `src/components/layout/Footer.tsx`

3. Agregar imágenes reales del portafolio en:
   - `public/images/`
   - Actualizar `src/app/portafolio/page.tsx`

4. Configurar dominio en `next.config.ts` (si aplica)

## 📱 Características

- ✅ Diseño responsive
- ✅ Optimizado para SEO
- ✅ Formulario de cotización multi-paso
- ✅ Widget de WhatsApp flotante
- ✅ Animaciones suaves
- ✅ Estructura semántica HTML
- ✅ Sitemap dinámico
- ✅ Meta tags optimizados

## 🚀 Deploy

### Opción 1: Vercel (Recomendado)
1. Conectar repo en Vercel
2. Configurar dominio personalizado
3. Deploy ## 🚀 Deploy

El sitio en vivo (rbsoluciones.co) lo sirve **GitHub Pages desde la carpeta
`docs/` de la rama `main`** (modo legacy). La rama `gh-pages` no se usa.

1. Verificar: `npx eslint src`, `node --test tests/quotes.test.mjs` y `npm run build`
   (exporta a `dist/`).
2. Reemplazar el build de `docs/` por el contenido de `dist/`, conservando
   `docs/rbsoluciones-parteA.md` y `docs/screenshots/`. Deben quedar
   `docs/CNAME` (`rbsoluciones.co`) y `docs/.nojekyll`.
3. Restaurar `dist/` (está versionado): `git checkout -- dist && git clean -fdq dist`.
4. Commit `deploy: ...` y push a `main`. Pages reconstruye en 1 o 2 minutos.
5. Confirmar que el build terminó con ese commit:
   `gh api repos/davidricardobc/rbsoluciones-web/pages/builds/latest`.

Revertir: `git revert --no-edit <commit de deploy>` y push a `main`.
