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

1. Actualizar número de WhatsApp en:
   - `src/components/WhatsAppWidget.tsx`
   - `src/components/layout/Header.tsx`
   - `src/components/layout/Footer.tsx`
   - `src/app/contacto/page.tsx`

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
3. Deploy automático con cada push

### Opción 2: GitHub Pages
```bash
npm run build
# Subir carpeta `dist` a GitHub Pages
```

### Opción 3: Netlify
- Drag & drop de la carpeta `dist`

## 📄 Licencia

© 2026 RB Soluciones Constructivas. Todos los derechos reservados.

---

Desarrollado con ❤️ para RB Soluciones Constructivas
