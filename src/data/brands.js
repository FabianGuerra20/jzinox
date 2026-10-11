export const brands = [
  {
    slug: "jzinox",
    name: "JZ INOX",
    // [PDF]
    lead: "Soluciones en acero inoxidable diseñadas a la medida de tu negocio. Fabricamos mesones, equipamiento y mobiliario de alta durabilidad para restaurantes, comida rápida e industria alimentaria.",
    heroLead: "Fabricamos mesones, equipamiento y mobiliario de alta durabilidad para restaurantes, comida rápida e industria alimentaria.",
    leadShort: "Soluciones en acero inoxidable diseñadas a la medida de tu negocio.",
    // [PROPUESTA]
    blurb: "Llevamos más de 20 años trabajando el acero inoxidable en nuestro taller de San Miguel. Diseñamos, cortamos, plegamos y soldamos cada pieza a la medida de tu cocina: campanas, mesones, carros, revestimientos y soportes. Y cuando lo que ya tienes instalado necesita arreglo, también lo reparamos y lo mantenemos.",
    href: "/",
    actions: [
      { href: "/catalogo", label: "Ver productos", variant: "primary" },
      { href: "/servicios", label: "Ver servicios", variant: "outline" },
    ],
    featuredTitle: "Productos destacados",
    featuredHref: "/catalogo",
    featuredLabel: "Ver todos los productos",
    // [CLIENTE]
    // [PROPUESTA]
    featured: [
      { name: "Campana", note: "A la medida de la línea de cocción.", href: "/catalogo#extraccion" },
      { name: "Mesón con repisa", note: "Mesón de trabajo a medida.", href: "/catalogo#mesones" },
      { name: "Soporte de pantalla KDS", note: "Con brazo hidráulico.", href: "/catalogo#soportes-y-presentadores" },
      { name: "Carro de bandejas de tocino", note: "Con guías para las bandejas.", href: "/catalogo#carros" },
    ],
    images: [
      { src: "/img/campana-central.webp", alt: "Campana de extracción en acero inoxidable colgada del cielo de una cocina industrial", position: "50% 40%" },
      { src: "/img/columna-inox.webp", alt: "Columna de acero inoxidable pulido fabricada a medida", position: "50% 35%" },
      { src: "/img/campana-mural-freidoras.webp", alt: "Campana de acero inoxidable sobre una línea de freidoras en una cocina de comida rápida", position: "50% 45%" },
    ],
  },
  {
    slug: "al-muebleria",
    name: "AL Mueblería",
    // [PDF]
    lead: "Nos dedicamos a dar vida a tus espacios mediante la fabricación de mobiliario a medida. Desarrollamos proyectos en línea plana, piezas de estilo industrial combinadas con estructuras metálicas, y soluciones para el sector comercial y corporativo.",
    // [PDF, recortado]
    leadShort: "Nos dedicamos a dar vida a tus espacios mediante la fabricación de mobiliario a medida.",
    // [PDF]
    blurb: "Desarrollamos proyectos en línea plana, piezas de estilo industrial combinadas con estructuras metálicas, y soluciones para el sector comercial y corporativo.",
    href: "/al-muebleria",
    actions: [
      { href: "/al-muebleria", label: "Conocer AL Mueblería", variant: "primary" },
      { href: "/al-muebleria#servicios", label: "Ver servicios de mueblería", variant: "outline" },
    ],
    featuredTitle: "Lo que fabricamos",
    featuredHref: "/al-muebleria#al-catalogo",
    featuredLabel: "Ver proyectos",
    // [PDF]
    featured: [
      { name: "Cocinas empotradas y clósets", note: "Línea plana, medida al rincón exacto.", href: "/al-muebleria#al-catalogo" },
      { name: "Mostradores y recepción", note: "Locales comerciales y patios de comida.", href: "/al-muebleria#al-catalogo" },
      { name: "Estaciones de trabajo", note: "Mobiliario para personal de empresas.", href: "/al-muebleria#servicios" },
      { name: "Piezas en estilo industrial", note: "Madera combinada con estructura metálica.", href: "/al-muebleria#servicios" },
    ],
    images: [
      { src: "/img/al-cocina-barra.webp", alt: "Cocina de línea plana en gris grafito con barra de cuarzo, fabricada por AL Mueblería", position: "50% 55%" },
      { src: "/img/al-estanteria-cajones.webp", alt: "Mueble de bodega con cajones abatibles y estantes, en línea plana gris", position: "50% 40%" },
      { src: "/img/al-cocina-vanitorio.webp", alt: "Mueble de cocina con puertas de vidrio ahumado y cubierta de cuarzo", position: "50% 55%" },
    ],
  },
];

export const jzinox = brands[0];
export const alMuebleria = brands[1];

// [PDF]
export const alMuebleriaPage = {
  hero: {
    eyebrow: "AL Mueblería",
    // [PDF]
    title: "Muebles a medida",
    subtitle: "Mueblistería y ebanistería",
    // [PDF]
    // [PDF, recortado]
    lead: "Desarrollamos proyectos en línea plana, piezas de estilo industrial combinadas con estructuras metálicas, y soluciones para el sector comercial y corporativo, como patios de comida, locales y áreas de personal.",
  },
  services: {
    // [PROPUESTA]
    title: "Muebles para tu casa y para tu negocio",
    // [PDF]
    // [PDF, recortado]
    lead: "Te acompañamos en cada etapa de la fabricación y te hacemos parte activa del proceso.",
    // [PDF]
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
    // [PROPUESTA]
    title: "Proyectos",
    lead: "Una muestra de lo que hemos fabricado, cada pieza a medida.",
  },
  cta: {
    // [PDF]
    title: "¿Tienes un proyecto en mente?",
    lead: "Cotiza con nosotros. Te acompañamos en cada etapa de la fabricación.",
  },
};

// [PROPUESTA]
export const alMuebleriaCatalog = [
  {
    id: "closet-escritorio",
    name: "Clóset con escritorio integrado",
    category: "Domiciliario",
    description:
      "Torre de clóset, repisas y escritorio con cajones en un solo frente de melamina símil madera.",
    image: { src: "/img/al-closet-escritorio.webp", alt: "Clóset con escritorio integrado y cajones abiertos, en melamina símil madera", position: "50% 55%" },
  },
  {
    id: "cocina-empotrada",
    name: "Cocina empotrada con barra",
    category: "Domiciliario",
    description:
      "Cocina completa en línea plana grafito, con barra de cuarzo y cada rincón del espacio aprovechado.",
    image: { src: "/img/al-cocina-barra.webp", alt: "Cocina empotrada en línea plana grafito con barra de cuarzo y piso decorativo", position: "50% 55%" },
  },
  {
    id: "despensa-extraible",
    name: "Despensa extraíble",
    category: "Domiciliario",
    description:
      "Columna con cajones de riel oculto y cierre suave, para tener todo a la vista sin agacharse.",
    image: { src: "/img/al-despensa-extraible.webp", alt: "Despensa de cocina con cajones extraíbles de cierre suave y puerta abierta", position: "50% 55%" },
  },
  {
    id: "recepcion-comercial",
    name: "Mostrador de recepción",
    category: "Comercial",
    description:
      "Mostrador para la recepción de un edificio, hecho para uso diario intensivo.",
    image: { src: "/img/al-recepcion.webp", alt: "Mostrador de recepción de un edificio con casilleros para correspondencia al fondo", position: "50% 50%" },
  },
  {
    id: "closet-madera",
    name: "Clóset de piso a cielo",
    category: "Domiciliario",
    description:
      "Clóset con puertas altas, cajoneras y barras de colgado, en melamina símil madera.",
    image: { src: "/img/al-closet-madera.webp", alt: "Clóset de piso a cielo con puertas abiertas, cajoneras y barras de colgado", position: "50% 50%" },
  },
  {
    id: "cocina-azul",
    name: "Cocina azul con cubierta clara",
    category: "Domiciliario",
    description:
      "Muebles altos y bajos en color a elección, con cubierta de cuarzo y espacio para cocina y campana.",
    image: { src: "/img/al-cocina-azul.webp", alt: "Cocina con muebles azules y cubierta clara, cocina a gas de acero inoxidable", position: "50% 60%" },
  },
  {
    id: "cocina-clara",
    name: "Cocina en L con isla",
    category: "Domiciliario",
    description:
      "Cocina en L con muebles claros, cubierta oscura y mueble en isla para preparar y servir.",
    image: { src: "/img/al-cocina-clara.webp", alt: "Cocina en L con muebles de madera clara, cubierta oscura e isla central", position: "50% 55%" },
  },
  {
    id: "estanteria-cajones",
    name: "Mueble de bodega con cajones abatibles",
    category: "Comercial",
    description:
      "Estantes y cajones abatibles sobre base cerrada, pensado para el orden de insumos en un local.",
    image: { src: "/img/al-estanteria-cajones.webp", alt: "Mueble de bodega con cajones abatibles y estantes sobre base de puertas, en línea plana gris", position: "50% 40%" },
  },
];
