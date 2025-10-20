# Nippon Routes - Landing Page

🇯🇵 Landing page optimizada para SEO de Nippon Routes - Tu guía personalizada de viajes a Japón

## 🚀 Características SEO Implementadas

### ✅ Meta Tags Completos
- **Title y Description**: Optimizados con keywords principales
- **Open Graph**: Completo para Facebook y redes sociales
- **Twitter Cards**: Para compartir en Twitter/X
- **Canonical URLs**: Previene contenido duplicado
- **Geo Tags**: Especifica región geográfica (Japón)

### ✅ Schema.org (Datos Estructurados)
- **Organization Schema**: Información de la empresa
- **WebSite Schema**: Detalles del sitio web
- **BreadcrumbList Schema**: Navegación estructurada
- **FAQPage Schema**: Preguntas frecuentes
- **TouristDestination**: Para Tokyo, Kyoto y Osaka

### ✅ Archivos SEO Esenciales
- `robots.txt` - Control de rastreo de bots
- `sitemap.xml` - Generado automáticamente con @astrojs/sitemap
- `humans.txt` - Transparencia y créditos
- `manifest.json` - PWA y app móvil
- `.htaccess` - Optimización de servidor

### ✅ Optimizaciones Técnicas
- **HTML Semántico**: `<header>`, `<nav>`, `<main>`, `<article>`, `<aside>`, `<footer>`
- **Atributos Alt**: Descriptivos en todas las imágenes
- **Loading Strategy**: `eager` para hero, `lazy` para el resto
- **ARIA Labels**: Accesibilidad completa
- **Responsive Images**: Width y height especificados
- **Preconnect**: DNS prefetch para recursos externos
- **Compresión**: HTML minificado en producción

### ✅ Keywords Principales
```
viaje a Japón, itinerario Japón 7 días, guía Japón, Tokyo, Kyoto, Osaka, 
viaje personalizado Japón, turismo Japón, planificar viaje Japón, 
experiencias auténticas Japón, cultura japonesa, cerezos en flor
```

## 📋 Comandos

| Comando | Acción |
| :--- | :--- |
| `pnpm install` | Instala dependencias |
| `pnpm dev` | Inicia servidor local en `localhost:4321` |
| `pnpm build` | Construye el sitio para producción en `./dist/` |
| `pnpm preview` | Vista previa del build local |

## 🔧 Configuración SEO

### Actualizar dominio
Edita `astro.config.mjs`:
```javascript
export default defineConfig({
  site: 'https://tu-dominio.com', // ⚠️ Cambiar por tu dominio real
  // ...
});
```

### Personalizar meta tags
Edita `src/config/seo.ts` para actualizar:
- Información de contacto
- Redes sociales
- Keywords
- FAQs

### Verificación de Search Console
1. Añade tu sitio en [Google Search Console](https://search.google.com/search-console)
2. Verifica la propiedad
3. Envía el sitemap: `https://tu-dominio.com/sitemap-index.xml`

## 📊 Monitoreo SEO

### Herramientas Recomendadas
- **Google Search Console**: Indexación y rendimiento
- **Google Analytics**: Tráfico y comportamiento
- **PageSpeed Insights**: Velocidad y Core Web Vitals
- **Lighthouse**: Auditoría completa (SEO, Performance, Accessibility)
- **Schema Markup Validator**: Validar datos estructurados
- **Mobile-Friendly Test**: Optimización móvil

### Checklist Post-Despliegue
- [ ] Verificar sitemap accesible: `/sitemap-index.xml`
- [ ] Verificar robots.txt: `/robots.txt`
- [ ] Probar en PageSpeed Insights (puntuación >90)
- [ ] Validar Schema.org en [Schema Markup Validator](https://validator.schema.org/)
- [ ] Verificar Open Graph con [OpenGraph.xyz](https://www.opengraph.xyz/)
- [ ] Test de móviles en [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [ ] Configurar Google Analytics y Search Console
- [ ] Generar y enviar sitemap a Bing Webmaster Tools

## 🎯 Próximos Pasos para SEO

1. **Contenido de Blog**: Crear artículos sobre viajes a Japón
2. **Páginas de Destinos**: Páginas individuales para Tokyo, Kyoto, Osaka
3. **Galería de Imágenes**: Con alt text optimizado
4. **Testimonios Reales**: Con Schema.org Review
5. **Multilingual**: Inglés como segundo idioma
6. **Backlinks**: Estrategia de enlaces entrantes

## 🌐 Tecnologías

- [Astro](https://astro.build) - Framework principal
- [React](https://react.dev) - Componentes interactivos
- [TailwindCSS](https://tailwindcss.com) - Estilos
- [Cloudinary](https://cloudinary.com) - CDN de imágenes

## 📱 PWA Ready

El sitio incluye:
- `manifest.json` configurado
- Theme colors para móviles
- Apple touch icons
- Responsive design completo

## 🔐 Seguridad

Headers de seguridad en `.htaccess`:
- X-Content-Type-Options
- X-Frame-Options
- X-XSS-Protection
- Referrer-Policy
- Permissions-Policy

---

**Hecho con ❤️ para amantes de Japón**
