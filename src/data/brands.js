/**
 * Las dos marcas del ecosistema, tal como se presentan en el Inicio.
 *
 * Los textos son PLACEHOLDER a propósito: cada título es un localizador
 * ("INICIO 1", "INICIO 2"...) numerado de arriba abajo, para que el cliente
 * indique qué debe decir en cada slot, y el cuerpo va en lorem ipsum. Los
 * nombres de producto sí son reales en JZINOX; en AL Mueblería quedan como
 * referencia a validar.
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
    featured: [
      { name: "Mesón de trabajo en acero inoxidable", note: "Lorem ipsum dolor sit amet." },
      { name: "Lavaplatos industrial de dos cubas", note: "Consectetur adipiscing elit." },
      { name: "Campana extractora mural", note: "Sed do eiusmod tempor incididunt." },
      { name: "Estantería de acero inoxidable", note: "Ut labore et dolore magna aliqua." },
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
    actions: [{ href: "/al-muebleria", label: "Ver catálogo", variant: "primary" }],
    featuredTitle: "Productos destacados",
    featuredHref: "/al-muebleria",
    featuredLabel: "Ver la marca completa",
    // TODO: reemplazar por el catálogo real que entregue AL Mueblería
    featured: [
      { name: "Clóset de línea plana", note: "Lorem ipsum dolor sit amet." },
      { name: "Cómoda de cajones", note: "Consectetur adipiscing elit." },
      { name: "Velador de dormitorio", note: "Sed do eiusmod tempor incididunt." },
      { name: "Repisa mural modular", note: "Ut labore et dolore magna aliqua." },
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
    // TODO: reemplazar por los servicios reales de AL Mueblería
    items: [
      {
        title: "Mueblería de línea plana",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      },
      {
        title: "Diseño y medición a medida",
        summary:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      },
      {
        title: "Fabricación en taller",
        summary:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
      },
      {
        title: "Instalación y armado",
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
 * TODO: reemplazar nombres, descripciones e imágenes por los reales.
 */
export const alMuebleriaCatalog = [
  {
    id: "closet-linea-plana",
    name: "Clóset de línea plana",
    category: "Dormitorio",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    image: { src: "/brands/al-muebleria-01.svg", alt: "Clóset de línea plana de AL Mueblería — imagen referencial" },
  },
  {
    id: "comoda-cajones",
    name: "Cómoda de cajones",
    category: "Dormitorio",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
    image: { src: "/brands/al-muebleria-02.svg", alt: "Cómoda de cajones de AL Mueblería — imagen referencial" },
  },
  {
    id: "velador-dormitorio",
    name: "Velador de dormitorio",
    category: "Dormitorio",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: { src: "/brands/al-muebleria-03.svg", alt: "Velador de dormitorio de AL Mueblería — imagen referencial" },
  },
  {
    id: "repisa-mural",
    name: "Repisa mural modular",
    category: "Living",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.",
    image: { src: "/brands/al-muebleria-01.svg", alt: "Repisa mural modular de AL Mueblería — imagen referencial" },
  },
];
