/**
 * Las dos marcas del ecosistema, tal como se presentan en el Inicio.
 *
 * CONTENIDO DEL CLIENTE — entregado en el PDF de textos.
 *   [PDF]       texto literal del documento del cliente. No reescribir.
 *   [PROPUESTA] redactado por nosotros porque el PDF dejó la ranura vacía.
 *               El cliente debe validarlo antes de publicar.
 *
 * Las imágenes siguen siendo placeholders. Cada una declara `pending: true`,
 * el nombre de la ranura y la proporción requerida, para que sustituir la foto
 * real no provoque reflujo y el cliente sepa qué foto mandar.
 */

export const brands = [
  {
    slug: "jzinox",
    name: "JZ INOX",
    // Sitúa la marca en el ecosistema: el visitante entiende de entrada que una
    // es la casa y la otra es aliada, sin tener que deducirlo del menú.
    eyebrow: "Marca principal",
    // [PDF] Subtítulo de la página de inicio
    lead: "Soluciones en acero inoxidable diseñadas a la medida de tu negocio. Fabricamos mesones, equipamiento y mobiliario de alta durabilidad para restaurantes, comida rápida e industria alimentaria.",
    href: "/",
    actions: [
      { href: "/catalogo", label: "Ver catálogo", variant: "primary" },
      { href: "/servicios", label: "Ver servicios", variant: "outline" },
    ],
    featuredTitle: "Productos destacados",
    featuredHref: "/catalogo",
    featuredLabel: "Ver catálogo completo",
    // [PROPUESTA] Los nombres salen de las ranuras previstas del catálogo.
    featured: [
      { name: "Mesón de trabajo en acero inoxidable", note: "Cubierta lisa o con peto, patas regulables." },
      { name: "Lavaplatos industrial de dos cubas", note: "Prelavado y enjuague en una sola pieza." },
      { name: "Campana extractora mural", note: "Filtros desmontables para lavado." },
      { name: "Estantería de acero inoxidable", note: "Bandejas regulables para bodega y frío." },
    ],
    images: [
      { src: "/brands/jzinox-01.svg", alt: "Mesón de trabajo en acero inoxidable fabricado por JZ INOX", pending: true, slot: "Mesón de trabajo", ratio: "3:2" },
      { src: "/brands/jzinox-02.svg", alt: "Puesto de soldadura TIG en el taller de JZ INOX", pending: true, slot: "Puesto de soldadura", ratio: "3:2" },
      { src: "/brands/jzinox-03.svg", alt: "Campana de extracción instalada en una cocina industrial", pending: true, slot: "Campana instalada", ratio: "3:2" },
    ],
  },
  {
    slug: "al-muebleria",
    name: "AL MUEBLERÍA",
    eyebrow: "Marca aliada",
    // [PDF] Primer párrafo de la descripción
    lead: "Nos dedicamos a dar vida a tus espacios mediante la fabricación de mobiliario a medida. Desarrollamos proyectos en línea plana, piezas de estilo industrial combinadas con estructuras metálicas, y soluciones para el sector comercial y corporativo.",
    href: "/al-muebleria",
    actions: [
      { href: "/al-muebleria", label: "Ver la marca", variant: "primary" },
      { href: "/al-muebleria#servicios", label: "Ver servicios", variant: "outline" },
    ],
    featuredTitle: "Lo que fabricamos",
    featuredHref: "/al-muebleria",
    featuredLabel: "Ver la marca completa",
    // [PDF] Salen de los bullets de servicios del documento
    featured: [
      { name: "Cocinas empotradas y clósets", note: "Línea plana, medida al rincón exacto." },
      { name: "Mostradores y recepción", note: "Locales comerciales y patios de comida." },
      { name: "Estaciones de trabajo", note: "Mobiliario para personal de empresas." },
      { name: "Piezas en estilo industrial", note: "Madera combinada con estructura metálica." },
    ],
    images: [
      { src: "/brands/al-muebleria-01.svg", alt: "Clóset de línea plana fabricado a medida por AL Mueblería", pending: true, slot: "Clóset de línea plana", ratio: "3:2" },
      { src: "/brands/al-muebleria-02.svg", alt: "Mostrador de local comercial fabricado por AL Mueblería", pending: true, slot: "Mostrador comercial", ratio: "3:2" },
      { src: "/brands/al-muebleria-03.svg", alt: "Mueble en estilo industrial con estructura metálica", pending: true, slot: "Pieza estilo industrial", ratio: "3:2" },
    ],
  },
];

export const jzinox = brands[0];
export const alMuebleria = brands[1];

/**
 * Landing interna de AL Mueblería.
 * Casi todo es [PDF]: el documento del cliente trae esta sección completa.
 */
export const alMuebleriaPage = {
  hero: {
    eyebrow: "Marca aliada",
    // [PDF] "Muebles a Medida | Mueblistería y Ebanistería"
    title: "Muebles a medida",
    subtitle: "Mueblistería y ebanistería",
    // [PDF] Primer párrafo, literal
    lead: "Nos dedicamos a dar vida a tus espacios mediante la fabricación de mobiliario a medida. Desarrollamos proyectos en línea plana, piezas de estilo industrial combinadas con estructuras metálicas, y soluciones para el sector comercial y corporativo, como patios de comida, locales y áreas de personal.",
  },
  services: {
    eyebrow: "Nuestros servicios",
    // [PROPUESTA] El PDF titula la sección solo como "Nuestros Servicios"
    title: "Tres formas de trabajar contigo",
    // [PDF] Segundo párrafo de la descripción
    lead: "¿Tienes un proyecto en mente? Te acompañamos en cada etapa de la fabricación y te hacemos parte activa del proceso para asegurar que el resultado final supere todas tus expectativas.",
    // [PDF] Los tres servicios con sus bullets, literales
    items: [
      {
        title: "Mobiliario domiciliario",
        summary:
          "Diseño y fabricación de muebles a medida para el hogar, optimizando cada rincón con soluciones funcionales en línea plana y piezas exclusivas en estilo industrial.",
        details: [
          "Cocinas empotradas, clósets y vestidores",
          "Muebles de centro de entretenimiento, vanitorios y repisas",
          "Piezas de acento en madera y estructuras metálicas",
        ],
      },
      {
        title: "Mobiliario comercial y corporativo",
        summary:
          "Equipamiento integral para empresas y negocios, proyectando una imagen profesional y de alta resistencia al uso intensivo.",
        details: [
          "Patios de comida, casinos y restaurantes",
          "Locales comerciales, mostradores y recepción",
          "Estaciones de trabajo y mobiliario para personal de empresas",
        ],
      },
      {
        title: "Herrajería y tecnología de alta gama",
        summary:
          "Integramos herrajes de marcas líderes a nivel mundial (Häfele, Blum, Hettich, Ducasse, HBT y Provelcar) para garantizar durabilidad, suave apertura y la máxima sofisticación en cada proyecto.",
        details: [
          "Sistemas de cierre suave, rieles ocultos y mecanismos elevables",
          "Soluciones desde lo esencial hasta la máxima automatización",
        ],
      },
    ],
  },
  catalog: {
    eyebrow: "Galería",
    // [PROPUESTA] El PDF deja la galería vacía
    title: "Proyectos entregados",
    lead: "Una muestra de lo que hemos fabricado. Cada pieza sale del mismo proceso: medición en terreno, diseño aprobado y fabricación a medida.",
  },
  cta: {
    // [PDF] "¿Tienes un proyecto en mente? Cotiza con nosotros."
    title: "¿Tienes un proyecto en mente?",
    lead: "Cotiza con nosotros. Te acompañamos en cada etapa de la fabricación.",
  },
};

/**
 * Galería de AL Mueblería (4 piezas).
 * [PROPUESTA] El PDF deja la galería vacía; los nombres salen de los bullets
 * de servicios del propio documento.
 */
export const alMuebleriaCatalog = [
  {
    id: "closet-linea-plana",
    name: "Clóset de línea plana",
    category: "Domiciliario",
    description:
      "Vestidor a medida con puertas de línea plana y organización interior adaptada al rincón disponible.",
    image: { src: "/brands/al-muebleria-01.svg", alt: "Clóset de línea plana con puertas lisas fabricado a medida", pending: true, slot: "Clóset de línea plana", ratio: "4:3" },
  },
  {
    id: "cocina-empotrada",
    name: "Cocina empotrada",
    category: "Domiciliario",
    description:
      "Cocina completa con herrajes de cierre suave y aprovechamiento de cada rincón del espacio real.",
    image: { src: "/brands/al-muebleria-02.svg", alt: "Cocina empotrada a medida con herrajes de cierre suave", pending: true, slot: "Cocina empotrada", ratio: "4:3" },
  },
  {
    id: "mostrador-comercial",
    name: "Mostrador de recepción",
    category: "Comercial",
    description:
      "Mostrador para local comercial, dimensionado para uso intensivo y con frente de imagen corporativa.",
    image: { src: "/brands/al-muebleria-03.svg", alt: "Mostrador de recepción para local comercial", pending: true, slot: "Mostrador de recepción", ratio: "4:3" },
  },
  {
    id: "estacion-trabajo",
    name: "Estación de trabajo",
    category: "Corporativo",
    description:
      "Puestos de trabajo para personal de empresa, en línea plana combinada con estructura metálica.",
    image: { src: "/brands/al-muebleria-01.svg", alt: "Estaciones de trabajo para personal de empresa", pending: true, slot: "Estación de trabajo", ratio: "4:3" },
  },
];
