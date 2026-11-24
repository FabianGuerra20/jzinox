# JZ INOX & AL Mueblería

Sitio corporativo de **JZ INOX**, taller de fabricación, reparación y mantención en acero
inoxidable de San Miguel (Santiago de Chile) que equipa cocinas de restaurantes, comida rápida
e industria alimentaria. Incluye una página propia para su marca aliada **AL Mueblería**
(muebles a medida).

**En producción:** https://jzinox.vercel.app

## El encargo

El cliente necesitaba presentar el taller, sus servicios y un catálogo de piezas a medida, y
recibir cotizaciones sin publicar precios. El trabajo se hizo por etapas, con entregas
revisadas por el cliente: maqueta, textos, fotos, elección de diseño y material final.

## Qué se construyó

- **7 páginas:** Inicio, Nosotros, Servicios, Productos (catálogo), Contacto, AL Mueblería y
  una página de soldadura pensada para la búsqueda local «soldadura santiago».
- **Catálogo de 20 piezas** en 7 categorías, sin precios: cada pieza se cotiza por WhatsApp.
  Galería de varias fotos por producto, barra de categorías que marca dónde estás y visor de
  fotos.
- **Formulario de contacto** con validación accesible, adjuntos y mensajes de error
  escritos para personas.
- **Selector de diseño para el cliente** (`scripts/generar-selector.mjs`): un solo archivo
  HTML con el sitio completo y paneles para elegir paleta, modo, letras, portada, listado,
  estilo y esquinas, que envía la elección por WhatsApp. El cliente eligió ahí el diseño
  actual.
- **Videos del taller** en bucle, sin sonido, que solo se reproducen cuando están a la vista.

## Decisiones de diseño

- **Paleta «Azul arco» en modo claro**, elegida por el cliente, con la cabecera y el pie
  oscuros. El azul se reserva para acciones y estados.
- **Estilo blando:** tarjetas sin borde, con sombra suave y cantos de 10 px. Se aplicó a todo
  el sitio tras una auditoría que detectó partes con el estilo anterior.
- **Fotos siempre enteras:** casi todas son fotos de celular verticales. En vez de recortarlas,
  se muestran completas sobre una versión desenfocada de sí mismas, generada como miniatura
  de 24 px en base64 para no descargar dos veces cada foto.
- **Todo lo que abre WhatsApp lo dice**, va en verde y lleva su ícono.
- **Contenido con procedencia:** cada texto en `src/data/` está marcado como `[PDF]` (literal
  del cliente), `[CLIENTE]` (lista o instrucción suya) o `[PROPUESTA]` (redactado por
  nosotros, pendiente de validar). No se inventan cifras, clientes ni garantías.

El sistema completo está en [`DESIGN.md`](DESIGN.md).

## Calidad verificada

- Contraste AA calculado en todo el texto; controles táctiles de 44 px como mínimo.
- Sin desbordes en 390, 768, 1100 y 1440 px, revisado con Playwright.
- Movimiento solo con `transform`, `opacity` y `clip-path`, y reducido con
  `prefers-reduced-motion`.
- SEO técnico: título y descripción propios por página, datos estructurados
  (`LocalBusiness`, `FAQPage`, `BreadcrumbList`), sitemap, URLs sin barra final y
  redirecciones 301.
- En laboratorio, LCP entre 0,2 y 0,8 s y CLS de 0 en todas las páginas.
- Auditorías de diseño, accesibilidad, animaciones y SEO; los hallazgos y arreglos están en
  [`CHANGELOG.md`](CHANGELOG.md).

## Tecnología

Astro 7 (sitio estático) · CSS nativo con tokens, sin framework de UI ni Tailwind · sin fuentes
de terceros · Lenis para el desplazamiento suave (solo con mouse) · Vercel.

## Comandos

| Comando | Qué hace |
|---|---|
| `npm install` | Instala dependencias |
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Genera el sitio estático en `dist/` |
| `npm run preview` | Sirve `dist/` localmente |
| `node scripts/agregar-foto.mjs <original> <nombre>` | Convierte una foto a WebP, crea sus variantes y la registra |
| `node scripts/generar-desenfoque.mjs` | Regenera los fondos desenfocados de las fotos |
| `npm run build && node scripts/generar-selector.mjs` | Arma el selector de diseño para el cliente |

Requiere Node 22.12 o superior.

## Estructura

```
src/
  pages/        index · nosotros · servicios · catalogo · contacto
                al-muebleria · soldadura-santiago · gracias · 404
  components/   Header · Footer · Seo · BrandShowcase (carrusel) · MediaPair
                ClientLogos · FloatingContact · WeldingCursor
  layouts/      Layout.astro (cabecera, pie, menú, visor de fotos)
  data/         site · company · brands · services · catalog · welding (todo el contenido)
  styles/       global.css (tokens, componentes compartidos, movimiento)
public/
  img/          fotos en WebP con variantes de 800 y 1200 px
  video/        videos del taller (mp4 sin audio, con portada)
scripts/        fotos, desenfoque y selector de diseño
```

## Documentación

- [`DESIGN.md`](DESIGN.md): sistema de diseño y decisiones.
- [`CHANGELOG.md`](CHANGELOG.md): qué se hizo y cuándo.
- [`MEJORAS.md`](MEJORAS.md): pendientes técnicos y de SEO.
- [`SEO-LOCAL.md`](SEO-LOCAL.md): pasos para la ficha de Google y el posicionamiento local.
- [`CLAUDE.md`](CLAUDE.md): reglas de trabajo del proyecto.
