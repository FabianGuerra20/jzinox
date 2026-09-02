# Mejoras pendientes — JZ Inox & AL Mueblería

> Auditoría de estructura, SEO técnico, accesibilidad y rendimiento.
> Fecha: 2026-09-02 · Base: commit `23acbe9` · Astro 7.2.1
>
> Cada punto está verificado contra el código y el `dist/` generado, no inferido.

---

## Estado del proyecto

```
8 páginas estáticas · 7 componentes · 5 archivos de datos · 1 layout · 522 líneas de CSS global

src/pages/       index (portal de 2 marcas) · nosotros · servicios · productos
                 catalogo · contacto · gracias · al-muebleria
src/components/  Header · Footer · Seo · BrandCard · ServiceIcon
                 FloatingContact · WeldingCursor
src/data/        site · company · brands · services · catalog
```

Build limpio en 2.4 s. **Cero archivos JS externos**: los tres scripts se inlinean
(~4 KB en total) y solo se sirven 2 hojas de CSS (19,7 KB). El punto de partida de
Core Web Vitals es muy bueno; las mejoras de abajo no lo comprometen.

### Lo que ya está bien resuelto (no tocar)

- **Bento grid correcto**: `gap: 1px` sobre fondo `--color-border` en lugar de bordes
  por celda. Evita los 2 px dobles entre celdas contiguas y las esquinas desalineadas
  al colapsar el layout.
- **Semántica limpia**: `header`/`main`/`section`/`article`/`aside`/`footer`, un solo
  `<h1>` por página, `aria-labelledby` en las secciones. Sin div soup.
- **Objetivos táctiles de 44 px** aplicados de forma sistemática vía `--tap`, incluso
  en los puntos del carrusel (con `::before` para no engordar la barra visible).
- **Carrusel en progressive enhancement**: funciona con scroll-snap sin JS; flechas y
  puntos nacen `hidden` y solo se revelan cuando el script confirma que sirven.
- `font-size: 16px` en los inputs, para evitar el zoom automático de iOS al enfocar.
- `prefers-reduced-motion` respetado en botones, tarjetas, carrusel, nav y cursor.

---

## 1. Prioridad alta — bloqueantes para publicar

### 1.1 `og:image` es un SVG y no se renderiza al compartir

**Dónde:** `src/data/site.js:32` → `ogImage: "/og-image.svg"`

Facebook, WhatsApp, LinkedIn y X **no renderizan SVG** en Open Graph. Hoy, cada vez
que alguien comparte cualquier URL del sitio, la vista previa sale sin imagen.

**Arreglo:** exportar un **PNG o JPG de 1200×630** desde el SVG existente
(`public/og-image.svg` ya tiene ese viewBox) y apuntar `site.ogImage` al archivo nuevo.
Conservar el SVG como fuente editable.

---

### 1.2 No existe página 404

**Dónde:** falta `src/pages/404.astro`

Cualquier URL rota (enlace viejo, error de tipeo, rastreador) cae en la página de error
por defecto del hosting, fuera de la marca y sin salida hacia el sitio.

**Arreglo:** crear `src/pages/404.astro` usando `Layout`, con el mismo tratamiento
visual que `gracias.astro`, y enlaces de vuelta a Inicio, Catálogo y Contacto.

---

### 1.3 `/gracias` es indexable y está en el sitemap

**Dónde:** `dist/sitemap-0.xml` la incluye; `src/pages/gracias.astro` no la excluye.

La página de agradecimiento puede aparecer en resultados de Google (mala experiencia:
el usuario llega a un "gracias" sin haber enviado nada) y, si mides conversiones por
visitas a esa URL, las cifras quedan infladas por tráfico orgánico.

**Arreglo:**

1. Excluirla del sitemap en `astro.config.mjs`:

   ```js
   sitemap({ filter: (page) => !page.endsWith('/gracias/') })
   ```

2. Añadir soporte de `noindex` en `Layout.astro` (nueva prop `noindex`) y activarlo en
   `gracias.astro`. Aplicar lo mismo a la futura 404.

---

### 1.4 `/productos` y `/catalogo` son contenido casi duplicado

**Dónde:** `src/pages/productos.astro` y `src/pages/catalogo.astro`

Ambas recorren el mismo array `catalog` agrupado por las mismas `catalogCategories`,
con los mismos 15 nombres y las mismas descripciones. `/catalogo` es un **superconjunto
estricto** de `/productos`: agrega precio, etiqueta de categoría y nav de anclas.

Consecuencias: canibalización de keywords entre dos URLs propias, dilución de la señal
de relevancia, y doble mantenimiento cada vez que cambie un producto.

**Arreglo — elegir una de estas dos rutas:**

- **(A) Fusionar.** Dejar solo `/catalogo` y redirigir `/productos` → `/catalogo`.
  Es la opción más limpia si no hay una razón comercial para separarlas.
- **(B) Diferenciar de verdad.** `/productos` pasa a ser páginas de detalle por
  categoría con contenido propio (fotos reales, especificaciones, medidas, acabados) y
  `/catalogo` queda como tabla de precios de una sola pantalla. Requiere contenido nuevo
  del cliente.

---

## 2. Prioridad media — accesibilidad y SEO

### 2.1 Los toggles de checkbox no exponen su estado

**Dónde:** `src/components/Header.astro:28` (menú móvil) y
`src/components/FloatingContact.astro:41` (botón flotante)

Ambos usan `role="button"` sin `aria-expanded`, y el `aria-label` del nav queda fijo en
`"Abrir menú"` incluso cuando está desplegado. Un lector de pantalla anuncia un botón
del que no puede saber si está abierto o cerrado.

**Arreglo:** en el handler de `Layout.astro` que ya gestiona el teclado, sincronizar
`aria-expanded` con el estado del checkbox y alternar el `aria-label`
(`"Abrir menú"` / `"Cerrar menú"`) en cada cambio.

---

### 2.2 Contraste bajo el mínimo AA en texto pequeño

**Dónde:** `--color-steel` (`#6f757a`) sobre `--color-bg-alt` (`#f4f5f6`)

Ratio medido: **≈4.3:1**, bajo el 4.5:1 que exige WCAG AA para texto pequeño.

Afecta a:

- `.footer__bottom p` — línea legal del pie, 0.78 rem (`Footer.astro`)
- `.catalog-note` — nota de precios, 0.82 rem (`catalogo.astro`)

**Arreglo:** usar `--color-text-muted` (`#555b62`, ≈7:1) en esos dos casos, o crear una
variable `--color-steel-aa` oscurecida para texto pequeño sobre fondo alterno.

---

### 2.3 Falta `Product` / `Offer` en datos estructurados

**Dónde:** `src/pages/catalogo.astro` — única página con precios reales.

Dado el mandato de SEO técnico del proyecto, es la oportunidad de *rich results* más
evidente que está sin tomar: los precios ya están estructurados en `catalog.js`.

**Arreglo:** emitir un `ItemList` de `Product` con `offers` (`priceCurrency: "CLP"`,
`price`, `availability`) por cada ítem del catálogo.

**Nota relacionada:** el JSON-LD de `ProfessionalService` se repite idéntico en las 8
páginas (`Seo.astro`). Conviene limitarlo a Inicio y Contacto, y dejar en el resto solo
el schema propio de cada página.

---

### 2.4 SVG placeholder con `id` inválido

**Dónde:** los 6 archivos de `public/brands/*.svg`

```
id="g1#f4f5f6"   →   referenciado como   url(#g1#f4f5f6)
```

`#` no es un carácter legal en un nombre XML. Los navegadores lo toleran hoy, pero
cualquier optimizador o sanitizador de SVG (svgo, un CDN de imágenes, un CMS) rompe el
patrón de cuadrícula del fondo.

**Arreglo:** renombrar a un id válido (`id="grid-1"`, `url(#grid-1)`).
Es trabajo desechable si las imágenes reales llegan pronto — evaluar prioridad.

---

## 3. Prioridad baja — limpieza

### 3.1 Código muerto

| Elemento | Ubicación | Estado |
|---|---|---|
| `.card` y `.card:hover` (~15 líneas) | `global.css:314` | Cero usos |
| `.tap-link` | `global.css` | Cero usos |
| `.section-cta` | `global.css` | Cero usos |
| `site.address` | `data/site.js` | Cero usos (se usa `street`) |
| `site.addressFull` | `data/site.js` | Cero usos |
| `site.hours` | `data/site.js` | Cero usos (se usa `hoursLines`) |

`.section--steel` (~30 líneas de CSS) tiene un único uso, en `productos.astro`.
No es código muerto, pero conviene decidir si se usa más o se retira.

### 3.2 README sin actualizar

`README.md` sigue siendo la plantilla intacta de *Astro Starter Kit: Basics* y describe
archivos que no existen en este proyecto (`Welcome.astro`, `astro.svg`, `favicon.svg`).

---

## 4. Correcciones al propio `CLAUDE.md`

El documento de instrucciones tiene dos desalineaciones con la realidad del repo:

1. **Navegación desactualizada.** La sección `🏢 Arquitectura de Marcas` describe
   *"Inicio, Servicios, **Soldadura TIG**, Catálogo principal, Contacto"*, pero el commit
   `eb50818` dio de baja esa página. Hoy TIG es un servicio dentro de `/servicios`, no una
   sección. Faltan además `Nosotros` y `Productos` en esa lista.
2. **Skills mencionados.** `design-review`, `design-consultation`, `design-html` y
   `design-shotgun` pertenecen al paquete gstack. Conviene dejar constancia de que su
   disponibilidad depende de que gstack esté instalado en el entorno.

---

## 5. Dos decisiones que requieren criterio del equipo

### 5.1 `WeldingCursor` — costo de pintado

**Dónde:** `src/components/WeldingCursor.astro`

El efecto anima `box-shadow` en hasta 90 nodos por frame, con radios de halo de hasta
~31 px (`glow * 2.4`). `box-shadow` es de las propiedades más caras de pintar y **no la
resuelve el compositor** — a diferencia del `translate3d`, que sí está correctamente
usado en el mismo componente. En un equipo modesto esto va a botar frames.

Además, conceptualmente convive en tensión con el sistema de diseño declarado
("Ingeniería Limpia y Precisión"): es el único elemento puramente decorativo del sitio,
dentro de un sistema que evita explícitamente los efectos difuminados.

El componente ya está bien defendido — se desactiva con `pointer: coarse`,
`hover: none` y `prefers-reduced-motion` — así que **no afecta a móviles**.

**Recomendación:** medirlo con el panel Performance de DevTools en un equipo de gama
baja antes de darlo por bueno. Si cuesta caro, la alternativa es sustituir `box-shadow`
por un `radial-gradient` de fondo, que sí puede componerse.

### 5.2 Estado del contenido

El sitio está **casi íntegramente en lorem ipsum** con localizadores (`INICIO 1`,
`NOSOTROS 2`, `VALOR 1`, `PASO 3`, `AL 4`…), tal como se diseñó para que el cliente
indique qué va en cada bloque.

Son reales: los nombres de producto y servicio, y los datos de contacto.

**Los precios de `catalog.js` son valores de maqueta**, marcados explícitamente en el
código como no publicables.

TODOs abiertos a la espera del cliente:

- Comuna del taller (Av. Departamental cruza La Florida, Macul y San Joaquín).
- Las 4 cifras de `stats` en `company.js`.
- Catálogo, servicios e imágenes reales de AL Mueblería.
- Lista de precios definitiva.

**Bloqueo de SEO:** la regla "el `<h1>` debe contener la keyword principal del negocio"
no puede cumplirse hasta que llegue el copy definitivo. Los `<h1>` actuales son
localizadores.

---

## Orden de ataque sugerido

Los puntos **1.1, 1.2, 1.3, 2.1 y 2.2** son autocontenidos, no dependen del cliente y se
pueden cerrar en una sola sesión. El resto requiere una decisión de producto (1.4) o
contenido que aún no llega (5.2).
