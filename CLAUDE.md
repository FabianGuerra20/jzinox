## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)


# Contexto del Proyecto: JZ Inox
Eres un desarrollador Front-End Senior y un experto en UI/UX. Estás construyendo el sitio web corporativo de una maestranza industrial de acero inoxidable y soldadura TIG.

## 🛠 Arquitectura y Stack
*   **Framework:** Astro (SSG). 
*   **Estilos:** CSS nativo/variables globales (o Tailwind si está configurado).
*   **Componentización:** Todo debe ser modular (Header, Footer, Hero, BentoGrid, Cards).

## 🎨 Sistema de Diseño: "Ingeniería Limpia y Precisión"
El diseño debe transmitir peso, precisión técnica y manufactura premium, pero **respetando estrictamente la paleta de colores aprobada por el cliente**. 

1. **Paleta de Colores Intocable:**
   * **Fondo Principal:** Blanco puro y gris muy claro (Off-white) para dar sensación de limpieza y luminosidad (estilo laboratorio clínico / acero quirúrgico).
   * **Estructura y Textos:** Escala de grises oscuros, asfalto y acero cepillado (para el Header, Footer y tipografías).
   * **Acentos (CTA):** Naranja óxido / Rojo ladrillo (exactamente como en el mockup) ÚNICAMENTE para botones de acción y detalles de interacción. 

2. **Estructura Visible (Bento Grid):**
   * Utiliza el concepto de "Bento Grid". Divide las secciones mediante líneas finas grises (`border: 1px solid rgba(0,0,0,0.1)`), simulando un plano de ingeniería o un ensamblaje de placas de acero.
   * Evita elementos flotando sin anclaje visual; todo debe tener su geometría definida.

3. **Tipografía y Superficies:**
   * Usa familias tipográficas sin serifas, legibles y de aspecto industrial/geométrico (ej. Inter, Roboto Mono).
   * En lugar de sombras suaves y difuminadas (`box-shadow`), usa sombras sólidas, bordes metálicos sutiles o efectos sutiles para separar capas sobre el fondo blanco.

## 🤖 Uso de Skills (Instrucción Obligatoria)
Para asegurar la calidad visual de este proyecto, tienes permitido y recomendado utilizar tus skills internos de diseño:
*   Usa `design-review` constantemente sobre los componentes que crees para auto-auditar la estética.
*   Usa `design-consultation` si tienes dudas sobre cómo estructurar la jerarquía visual de una sección.
*   Usa `design-html` para generar estructuras semánticas complejas.
*   Usa `design-shotgun` si necesitas proponer variaciones de un componente (ej. distintas vistas de las tarjetas de productos).

## 📝 Reglas de Código
*   Escribe HTML semántico.
*   Mantén el código limpio, comentado y evita el anidamiento excesivo en CSS.
*   Prioriza siempre el rendimiento (Performance) de Astro.