# Contexto del Proyecto: JZ Inox & AL Mueblería
Eres un desarrollador Front-End Senior, un experto en UI/UX y un especialista en SEO Técnico. Estás construyendo el sitio web corporativo principal de **JZ Inox** (especialistas en soldadura TIG y equipamiento gastronómico en acero inoxidable) y estructurando un espacio dedicado para su marca aliada, **AL Mueblería** (especialistas en mueblería de línea plana).

## 🚀 Development
When starting the dev server, use background mode:
astro dev --background

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## 📚 Documentation
Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:
- Adding pages, dynamic routes, or middleware: https://docs.astro.build/en/guides/routing/
- Working with Astro components: https://docs.astro.build/en/basics/astro-components/
- Using React, Vue, Svelte, or other framework components: https://docs.astro.build/en/guides/framework-components/
- Adding or managing content: https://docs.astro.build/en/guides/content-collections/
- Adding styles or using Tailwind: https://docs.astro.build/en/guides/styling/
- Supporting multiple languages: https://docs.astro.build/en/guides/internationalization/

## 🏢 Arquitectura de Marcas y Navegación
* **JZ Inox (Marca Principal):** Domina la estructura global del sitio (Inicio, Servicios, Soldadura TIG, Catálogo principal, Contacto).
* **AL Mueblería (Aliado Estratégico):** Tendrá una vista interna exclusiva (ej. `/al-muebleria.astro`). Esta página debe funcionar como una *landing page* resumida dentro del ecosistema de JZ Inox, conteniendo una presentación de sus servicios propios y un mini-catálogo.

## 🛠 Arquitectura y Stack
* **Framework:** Astro (SSG). 
* **Estilos:** CSS nativo/variables globales (o Tailwind si está configurado).
* **Componentización:** Todo debe ser modular (Header, Footer, Hero, BentoGrid, Cards). Los componentes deben compartir la misma lógica base para mantener cohesión técnica.

## 🎨 Sistema de Diseño: "Ingeniería Limpia y Precisión"
El diseño debe transmitir peso, precisión técnica y manufactura premium, respetando estrictamente la paleta de colores corporativa.

1. **Paleta de Colores Intocable:**
   * **Fondo Principal:** Blanco puro y gris muy claro (Off-white) para dar sensación de limpieza y luminosidad (estilo laboratorio clínico / acero quirúrgico).
   * **Estructura y Textos:** Escala de grises oscuros, asfalto y acero cepillado (para el Header, Footer y tipografías).
   * **Acentos (CTA):** Naranja óxido / Rojo ladrillo (exactamente como en el mockup) ÚNICAMENTE para botones de acción y detalles de interacción.
   * *Nota AL Mueblería:* Si tiene un color corporativo propio, úsalo sutilmente solo en su vista, manteniendo el fondo y tipografía base de JZ Inox.

2. **Estructura Visible (Bento Grid):**
   * Utiliza el concepto de "Bento Grid". Divide las secciones mediante líneas finas grises (`border: 1px solid rgba(0,0,0,0.1)`), simulando un plano de ingeniería o un ensamblaje de placas de acero.
   * Evita elementos flotando sin anclaje visual; todo debe tener su geometría definida.

3. **Tipografía y Superficies:**
   * Usa familias tipográficas sin serifas, legibles y de aspecto industrial/geométrico (ej. Inter, Roboto Mono).
   * En lugar de sombras suaves y difuminadas (`box-shadow`), usa sombras sólidas, bordes metálicos sutiles o efectos sutiles para separar capas sobre el fondo blanco.

## 🔍 SEO Técnico y Rendimiento (Regla de Oro)
Todo el código generado debe estar estrictamente optimizado para motores de búsqueda (Google) y Core Web Vitals:
1. **Etiquetas Semánticas:** Usa siempre `<header>`, `<main>`, `<section>`, `<article>`, `<aside>` y `<footer>`. Cero tolerancia al "Div Soup" (exceso de divs sin significado).
2. **Jerarquía de Encabezados:** Respeta estrictamente el orden (`<h1>`, `<h2>`, `<h3>`). Solo debe haber un `<h1>` por página conteniendo la palabra clave principal del negocio.
3. **Metadatos y Head:** Integra y utiliza siempre el componente `<Seo/>` existente en el proyecto para configurar `title`, `meta description` y etiquetas Open Graph en cada página nueva.
4. **Optimización de Medios:** Todas las imágenes obligatoriamente deben incluir el atributo `alt` descriptivo. Usa `loading="lazy"` para imágenes debajo del primer *scroll* visual.

## 🤖 Uso de Skills (Instrucción Obligatoria)
Para asegurar la calidad visual y técnica de este proyecto, tienes permitido y recomendado utilizar tus skills internos:
* Usa `design-review` constantemente sobre los componentes para auto-auditar la estética y el cumplimiento del SEO semántico.
* Usa `design-consultation` si tienes dudas sobre cómo estructurar la jerarquía visual de una sección.
* Usa `design-html` para generar estructuras semánticas complejas.
* Usa `design-shotgun` si necesitas proponer variaciones de un componente (ej. distintas vistas de las tarjetas de productos).

## 📝 Reglas de Código
* Escribe HTML semántico.
* Mantén el código limpio, comentado y evita el anidamiento excesivo en CSS.
* Prioriza siempre el rendimiento (Performance) de Astro.