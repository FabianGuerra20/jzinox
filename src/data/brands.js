/**
 * Las dos marcas del ecosistema, tal como se presentan en el Inicio.
 *
 * CONTENIDO PLACEHOLDER. Todo texto visible es un localizador numerado para que el
 * cliente indique qué debe decir cada ranura, y el cuerpo va en lorem ipsum.
 *
 * Convención de numeración:
 *   INICIO n        secciones de la portada
 *   AL n            secciones de la landing de AL Mueblería
 *   PRODUCTO n      piezas del catálogo de JZ INOX  (misma numeración que catalog.js:
 *                   un producto tiene UN número en todo el sitio)
 *   PRODUCTO AL n   piezas del catálogo de AL Mueblería
 *   SERVICIO AL n   servicios propios de AL Mueblería
 *   CATEGORÍA AL n  categorías de AL Mueblería
 *
 * Los nombres de marca ("JZ INOX", "AL MUEBLERÍA") sí son reales: identifican a las
 * empresas, no son contenido a redactar.
 */

export const brands = [
  {
    slug: "jzinox",
    name: "JZ INOX",
    // Localizador del subtítulo que el cliente debe reemplazar
    locator: "INICIO 2",
    lead: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    href: "/",
    actions: [
      { href: "/catalogo", label: "Ver catálogo", variant: "primary" },
      { href: "/servicios", label: "Ver servicios", variant: "outline" },
    ],
    featuredTitle: "Productos destacados",
    featuredHref: "/catalogo",
    featuredLabel: "Ver catálogo completo",
    // Los números remiten a catalog.js, no a la posición en esta lista: así
    // "PRODUCTO 5" es la misma pieza aquí y en /catalogo.
    featured: [
      { name: "PRODUCTO 1", note: "Lorem ipsum dolor sit amet." },
      { name: "PRODUCTO 4", note: "Consectetur adipiscing elit." },
      { name: "PRODUCTO 5", note: "Sed do eiusmod tempor incididunt." },
      { name: "PRODUCTO 10", note: "Ut labore et dolore magna aliqua." },
    ],
    images: [
      { src: "/brands/jzinox-01.svg", alt: "Imagen referencial 1 del taller de JZ INOX — a reemplazar" },
      { src: "/brands/jzinox-02.svg", alt: "Imagen referencial 2 del taller de JZ INOX — a reemplazar" },
      { src: "/brands/jzinox-03.svg", alt: "Imagen referencial 3 del taller de JZ INOX — a reemplazar" },
    ],
  },
  {
    slug: "al-muebleria",
    name: "AL MUEBLERÍA",
    locator: "INICIO 3",
    lead: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    href: "/al-muebleria",
    actions: [
      { href: "/al-muebleria", label: "Ver catálogo", variant: "primary" },
      { href: "/al-muebleria", label: "Ver servicios", variant: "outline" },
    ],
    featuredTitle: "Productos destacados",
    featuredHref: "/al-muebleria",
    featuredLabel: "Ver la marca completa",
    featured: [
      { name: "PRODUCTO AL 1", note: "Lorem ipsum dolor sit amet." },
      { name: "PRODUCTO AL 2", note: "Consectetur adipiscing elit." },
      { name: "PRODUCTO AL 3", note: "Sed do eiusmod tempor incididunt." },
      { name: "PRODUCTO AL 4", note: "Ut labore et dolore magna aliqua." },
    ],
    images: [
      { src: "/brands/al-muebleria-01.svg", alt: "Imagen referencial 1 de AL Mueblería — a reemplazar" },
      { src: "/brands/al-muebleria-02.svg", alt: "Imagen referencial 2 de AL Mueblería — a reemplazar" },
      { src: "/brands/al-muebleria-03.svg", alt: "Imagen referencial 3 de AL Mueblería — a reemplazar" },
    ],
  },
];

export const jzinox = brands[0];
export const alMuebleria = brands[1];

/**
 * Contenido de la landing interna de AL Mueblería.
 * Todo placeholder: títulos localizadores + lorem ipsum.
 */
export const alMuebleriaPage = {
  hero: {
    eyebrow: "Aliado estratégico",
    title: "AL MUEBLERÍA",
    locator: "AL 1",
    lead: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  services: {
    eyebrow: "Servicios",
    title: "AL 2",
    lead: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    items: [
      {
        title: "SERVICIO AL 1", // ranura prevista: mueblería de línea plana
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      },
      {
        title: "SERVICIO AL 2", // ranura prevista: diseño y medición a medida
        summary:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      },
      {
        title: "SERVICIO AL 3", // ranura prevista: fabricación en taller
        summary:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
      },
      {
        title: "SERVICIO AL 4", // ranura prevista: instalación y armado
        summary:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
      },
    ],
  },
  catalog: {
    eyebrow: "Mini-catálogo",
    title: "AL 3",
    lead: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  cta: {
    title: "AL 4",
    lead: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
};

/**
 * Mini-catálogo destacado de AL Mueblería (máximo 4 piezas).
 * El `id` es técnico y conserva la pieza prevista para cada ranura.
 */
export const alMuebleriaCatalog = [
  {
    id: "closet-linea-plana",
    name: "PRODUCTO AL 1", // ranura prevista: clóset de línea plana
    category: "CATEGORÍA AL 1", // ranura prevista: Dormitorio
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    image: { src: "/brands/al-muebleria-01.svg", alt: "Imagen referencial de la pieza PRODUCTO AL 1 de AL Mueblería — a reemplazar" },
  },
  {
    id: "comoda-cajones",
    name: "PRODUCTO AL 2", // ranura prevista: cómoda de cajones
    category: "CATEGORÍA AL 1",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
    image: { src: "/brands/al-muebleria-02.svg", alt: "Imagen referencial de la pieza PRODUCTO AL 2 de AL Mueblería — a reemplazar" },
  },
  {
    id: "velador-dormitorio",
    name: "PRODUCTO AL 3", // ranura prevista: velador de dormitorio
    category: "CATEGORÍA AL 1",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: { src: "/brands/al-muebleria-03.svg", alt: "Imagen referencial de la pieza PRODUCTO AL 3 de AL Mueblería — a reemplazar" },
  },
  {
    id: "repisa-mural",
    name: "PRODUCTO AL 4", // ranura prevista: repisa mural modular
    category: "CATEGORÍA AL 2", // ranura prevista: Living
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.",
    image: { src: "/brands/al-muebleria-01.svg", alt: "Imagen referencial de la pieza PRODUCTO AL 4 de AL Mueblería — a reemplazar" },
  },
];
