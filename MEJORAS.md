# Mejoras pendientes — JZ Inox & AL Mueblería

> Auditoría de estructura, SEO técnico, accesibilidad y rendimiento.
> Fecha: 2026-09-02 · Base: commit `23acbe9` · Astro 7.2.1
>
> **Actualizado 2026-09-23.** Cerrados: 1.1, 1.2, 1.3, **1.4**, 2.1, 2.2, 2.3 y 5.2.
> Abiertos: 2.4, 3.1, 3.2, 5.1 y 6 (movimiento y paleta, anotado 2026-10-04).
>
> 1.4 se cerró en `main` por la opción (A): sobrevive `/catalogo`, `/productos`
> redirige con 301 y sale del sitemap. Ver el registro de la crítica de diseño
> del 2026-09-23 más abajo.
>
> Cada punto está verificado contra el código y el `dist/` generado, no inferido.

---

## Estado del proyecto

```
8 páginas estáticas · 7 componentes · 5 archivos de datos · 1 layout · 522 líneas de CSS global

src/pages/       index (portal de 2 marcas) · nosotros · servicios · catalogo
                 contacto · gracias · al-muebleria · 404
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

### 1.1 ~~`og:image` es un SVG~~ — CERRADO

**Dónde:** `src/data/site.js:32` → `ogImage: "/og-image.svg"`

Facebook, WhatsApp, LinkedIn y X **no renderizan SVG** en Open Graph. Hoy, cada vez
que alguien comparte cualquier URL del sitio, la vista previa sale sin imagen.

**Arreglo:** exportar un **PNG o JPG de 1200×630** desde el SVG existente
(`public/og-image.svg` ya tiene ese viewBox) y apuntar `site.ogImage` al archivo nuevo.
Conservar el SVG como fuente editable.

---

### 1.2 ~~No existe página 404~~ — CERRADO

**Dónde:** falta `src/pages/404.astro`

Cualquier URL rota (enlace viejo, error de tipeo, rastreador) cae en la página de error
por defecto del hosting, fuera de la marca y sin salida hacia el sitio.

**Arreglo:** crear `src/pages/404.astro` usando `Layout`, con el mismo tratamiento
visual que `gracias.astro`, y enlaces de vuelta a Inicio, Catálogo y Contacto.

---

### 1.3 ~~`/gracias` indexable y en el sitemap~~ — CERRADO

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

### 1.4 `/productos` y `/catalogo` son contenido casi duplicado — ✅ CERRADO (2026-09-23)

**Resuelto por la opción (A).** Sobrevive `/catalogo` porque es la URL a la que ya
apuntaban la portada, `/servicios` y el 404. `astro.config.mjs` emite un redirect
a `/catalogo` (con `noindex` y `canonical`), el sitemap excluye `/productos`, y la
entrada del menú quedó una sola, rotulada **Productos**: es como lo nombra quien
compra, mientras "Catálogo" en el rubro suele significar un PDF descargable.
`/catalogo` heredó el `<h1>` de `/productos` ("Todo lo que fabricamos en acero
inoxidable"), que era el que traía la frase por la que compite el negocio.


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

### 2.1 ~~Toggles sin estado accesible~~ — CERRADO

**Dónde:** `src/components/Header.astro:28` (menú móvil) y
`src/components/FloatingContact.astro:41` (botón flotante)

Ambos usan `role="button"` sin `aria-expanded`, y el `aria-label` del nav queda fijo en
`"Abrir menú"` incluso cuando está desplegado. Un lector de pantalla anuncia un botón
del que no puede saber si está abierto o cerrado.

**Arreglo:** en el handler de `Layout.astro` que ya gestiona el teclado, sincronizar
`aria-expanded` con el estado del checkbox y alternar el `aria-label`
(`"Abrir menú"` / `"Cerrar menú"`) en cada cambio.

---

### 2.2 ~~Contraste bajo AA~~ — CERRADO

**Dónde:** `--color-steel` (`#6f757a`) sobre `--color-bg-alt` (`#f4f5f6`)

Ratio medido: **≈4.3:1**, bajo el 4.5:1 que exige WCAG AA para texto pequeño.

Afecta a:

- `.footer__bottom p` — línea legal del pie, 0.78 rem (`Footer.astro`)
- `.catalog-note` — nota de precios, 0.82 rem (`catalogo.astro`)

**Arreglo:** usar `--color-text-muted` (`#555b62`, ≈7:1) en esos dos casos, o crear una
variable `--color-steel-aa` oscurecida para texto pequeño sobre fondo alterno.

---

### 2.3 ~~Falta `Product` en datos estructurados~~ — CERRADO (sin `Offer`)

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

### 5.2 ~~Estado del contenido~~ — CERRADO

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
pueden cerrar en una sola sesión. Lo que queda abierto (2.4, 3.1, 3.2, 5.1) no depende de
una decisión de producto sino de trabajo propio.

---

## Crítica de diseño del 2026-09-23 — lo que se arregló

Informe completo en `.impeccable/critique/2026-09-23T21-14-44Z__src-pages-index-astro.md`
(24/40 en las heurísticas de Nielsen). De ahí salieron estos cinco arreglos:

1. **El catálogo no tenía hueco de imagen** (P0). No faltaban fotos: faltaba la ranura.
   En la única superficie donde se elige qué comprar, había que distinguir "Mesón de
   trabajo" de "Mesón con entrepaño inferior" leyendo. Cada uno de los 15 productos
   tiene ahora su `image` con `slot` y `ratio` en `catalog.js`, y la tarjeta pasó a
   celda a sangre con la foto arriba.
2. **Productos y Catálogo eran la misma página dos veces** (P1). Ver 1.4.
3. **`/contacto` mal etiquetaba cada consulta** (P1). El `select` arrancaba en
   "Soldadura TIG" sin opción neutra: todo el que no tocaba el campo llegaba marcado
   como TIG. Ahora la primera opción está vacía y el campo es `required`. Además el
   titular pedía "el plano que tengas" y no había dónde adjuntarlo: se agregó un campo
   de archivo opcional con `enctype="multipart/form-data"`. Y el hero se comprimió
   (`.page-hero--tight`) para que el formulario entre en el primer pliegue.
4. **El SVG del hero tenía texto que se transparentaba tras el `<h1>`** (P1). Traía un
   cartucho central con "JZ INOX", un "01" rojo de 96 px y la leyenda "REEMPLAZAR POR
   FOTOGRAFÍA DEL TALLER" justo en la banda del titular. El archivo quedó sin una sola
   letra y el rótulo del hueco pasó a ser un elemento del documento anclado al canto
   inferior (`.hero__slot`), donde no puede cruzarse con el texto.
5. **`.btn--whatsapp` incumplía AA** (P1). Era un botón fantasma con texto `#128c3d`:
   3,54:1 sobre la sección de cierre y 4,34:1 incluso sobre blanco puro, en un botón de
   conversión de 14 px. Pasó a relleno verde con texto blanco, 5,45:1. El comentario del
   código que justificaba ese verde era incorrecto y se corrigió.

Y dos que salieron por el camino:

* **El logotipo cedió.** Era un PNG de cromo biselado con extrusión 3D: el único
  elemento con brillo y volumen de un sistema cuya primera regla es radio cero. Sus
  facetas oscuras hacían que la Z y la N se perdieran contra la barra de acero. Pasó a
  lockup tipográfico en Hanken Grotesk, dos pesos y una sola tinta, 5,1–6,4:1 sobre la
  barra. Ahorra 18,9 KB y libera el `fetchpriority="high"` que competía con el hero.
  El PNG sigue en `public/logo-jzinox.png` por si el cliente lo exige.
* **El foco del formulario dejó de parecer un error.** El borde de foco era
  `--color-accent` y el de error `--color-accent-dark`: dos rojos separados por un 5% de
  luminosidad. El campo donde escribías se veía igual que el campo que estaba mal. El
  rojo ahora significa una sola cosa.

**Lo que la crítica dejó abierto y NO se tocó:** las cinco etiquetas distintas para la
misma acción (P2, parcialmente unificadas), el favicon —que sigue siendo la versión
cromada, aprobada aparte por el cliente—, la junta de 1px a 1,24:1, `--font-mono`
aterrizando en Consolas en `/nosotros`, y las 6 inversiones de orden de tabulación.

---

## 6. Mejora del frente: movimiento y paleta (anotado 2026-10-04)

**Objetivo:** que el sitio se vea mejor hecho, con scroll y transiciones suaves y modernas,
sin perder la estética industrial. La paleta actual (gris sobre gris con rojo ladrillo)
no convence ni al equipo.

### Decisión de stack: NO sumar un framework de UI
React, Tailwind o shadcn cambian cómo se escribe el código, no cómo se ve. Se queda
Astro + CSS nativo. Lo que hace que hoy se vea poco pulido es:

1. Todo lo visual son placeholders grises (la palanca más grande: **fotos o video reales**).
2. Casi no hay movimiento (solo el revelado gris a color de `.media-frame`).
3. La paleta.

### 6.1 Movimiento (de menor a mayor costo)
| Qué | Con qué | Peso |
|---|---|---|
| Elementos que aparecen al hacer scroll | CSS scroll-driven animations (`animation-timeline: view()`) | 0 KB JS |
| Transiciones entre páginas | View Transitions de Astro o `@view-transition` nativo | casi 0 |
| Scroll con inercia | Lenis | ~3 KB |
| Secuencias del hero | GSAP + ScrollTrigger, solo si hace falta | ~30 KB |

* **Conflicto con `CLAUDE.md`:** la regla "cero JS externo" se rompe con Lenis y GSAP.
  Decidir si se relaja (sugerencia: solo para Lenis).
* `prefers-reduced-motion` sigue siendo no negociable en todo lo anterior.
* Respetar la regla del sistema: la única animación *expresiva* hoy es `.media-frame`.
  Si se añade movimiento de scroll, actualizar `DESIGN.md §7`.

### 6.2 Paleta: tres propuestas
Maqueta visual en **`propuestas/paletas.html`** (abrir en el navegador). Las tres conservan
radio cero, junta de 1px y acento solo en acciones y estados. Idea común: el color del
oficio, el acero soldado con TIG vira de paja dorado a azul violáceo con el calor.
Contrastes calculados.

| | Idea | Acento | Riesgo |
|---|---|---|---|
| **A · Calor TIG** | Negro cálido + hueso | Dorado paja `#e2b04a` | Sitio mayormente oscuro |
| **B · Cobalto de soldadura** | Hueso claro, cabecera y hero oscuros | Azul `#3946b8` | Es la más segura de aprobar con el cliente |
| **C · Acero frío + chispa** | Gris azulado casi negro | Naranja `#ff6a1a` | Puede leerse agresivo si se abusa |

* El rojo `#c13d2f` pasa a ser **solo error** en las tres.
* **Elegida (2026-10-04): C, con fondo más cálido** (en `paletas.html` como "C cálida").
  Fondo `#16120f`, tarjeta `#201b17`, sección clara `#ebe5db`, texto `#f0ebe3`, muted
  `#aa9f92`, acento `#ff6a1a` (sobre claro `#a33a04`), error `#ff8a7a`, junta `#3b342d`,
  borde de campo `#7a6f62`. Todo el texto pasa AA (mínimo 5,3:1). **Falta la aprobación
  del cliente y aplicarla en `global.css`.**
* Aplicar cualquiera es una **desviación del mockup aprobado** (ver `DESIGN.md §8` y §11.1):
  hay que mostrarla al cliente antes. Al elegir, recalcular contrastes en `global.css`
  y actualizar `DESIGN.md §2`.

### 6.3 Orden sugerido
1. Elegir paleta (con el cliente).
2. Aplicarla en `global.css` y recalcular contraste.
3. Scroll reveal y View Transitions con CSS.
4. Lenis, si se aprueba tras ver el resultado.
5. Hero con foto o video real cuando lleguen (bloqueado por el cliente).
