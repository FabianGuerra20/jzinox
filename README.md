# JZ Inox & AL Mueblería

Sitio corporativo de **JZ Inox** (soldadura TIG y equipamiento gastronómico en acero
inoxidable) con una landing interna para su marca aliada **AL Mueblería**.

Astro 7 · sitio estático · CSS nativo · sin framework de UI.

## Comandos

| Comando | Qué hace |
|---|---|
| `npm install` | Instala dependencias |
| `npm run dev` | Servidor de desarrollo (`astro dev --background` para dejarlo en segundo plano) |
| `npm run build` | Genera el sitio estático en `dist/` |
| `npm run preview` | Sirve `dist/` localmente |

Requiere Node 22.12 o superior.

## Estructura

```
src/
  pages/        index · nosotros · servicios · catalogo · contacto
                al-muebleria · gracias · 404
  components/   Header · Footer · Seo · BrandCard · MediaPlaceholder
                ServiceIcon · FloatingContact · WeldingCursor
  layouts/      Layout.astro (header, footer, scroll suave, accesibilidad)
  data/         site · company · brands · services · catalog   ← TODO el copy
  styles/       global.css (tokens, tema, componentes compartidos, movimiento)
public/
  img/          fotos optimizadas (WebP, máx. 1600 px)
```

Las páginas no llevan texto hardcodeado: el contenido sale de `src/data/`. Cada bloque
marca su procedencia, `[PDF]` (texto literal del cliente) o `[PROPUESTA]` (redactado por
nosotros, pendiente de validar).

## Fotos

Las originales viven en `fotos-originales/` (fuera de git y de `public/`). Para publicar
una foto nueva: optimizarla a WebP de hasta 1600 px en `public/img/` y referenciarla desde
`src/data/` con `src`, `alt` y, si hace falta recortar, `position` (un `object-position`).

## Documentación del proyecto

- `CLAUDE.md` — contexto, reglas y registro de trabajo.
- `DESIGN.md` — el sistema de diseño (paleta, tipografía, componentes, movimiento).
- `MEJORAS.md` — backlog técnico y de SEO.
- `propuestas/paletas.html` — maqueta de las paletas evaluadas.

## Reglas que no se rompen

1. **Radio cero**: ningún `border-radius` en el sitio.
2. **La junta es de 1px** y siempre `var(--color-border)`.
3. **El acento solo en acciones y estados**; el error va en `--color-error`.
4. Controles de **44 px** mínimo, contraste **4.5:1** calculado y `prefers-reduced-motion`
   respetado.
