import { site } from "./site.js";

// [PROPUESTA]
export const weldingHero = {
  title: "Soldadura en Santiago: TIG, MIG y aluminio",
  lead: "Taller de soldadura en San Miguel. Soldamos acero inoxidable, acero carbono y aluminio, para fabricar a medida o reparar lo que ya tienes.",
  whatsappMessage: "Hola JZ INOX, quisiera cotizar un trabajo de soldadura.",
};

// [PROPUESTA]
export const weldingProcesses = {
  title: "Tres procesos, según el material",
  lead: "Cada metal pide su proceso. Elegimos el que corresponde a la pieza y al uso que va a tener.",
  items: [
    {
      slug: "soldadura-tig",
      title: "Soldadura TIG en acero inoxidable",
      summary:
        "Es el proceso con el que soldamos el acero inoxidable. El arco se controla con precisión y deja un cordón fino y limpio, por eso se usa en mesones, campanas y equipamiento de cocina que queda a la vista.",
      details: [
        "Mesones, campanas, carros y revestimientos",
        "Soportes, repisas y piezas a medida",
        "Reparación de equipamiento de acero inoxidable",
      ],
    },
    {
      slug: "soldadura-mig",
      title: "Soldadura MIG en acero carbono",
      summary:
        "Para el acero carbono usamos MIG, un proceso de alambre continuo que avanza rápido y rinde bien en perfiles, estructuras y espesores mayores.",
      details: ["Estructuras y bastidores de acero carbono", "Bases, soportes y refuerzos"],
    },
    {
      slug: "soldadura-aluminio",
      title: "Soldadura de aluminio",
      summary:
        "También trabajamos aluminio, un metal liviano que se suelda con otra técnica y otro material de aporte que el acero. Cuéntanos qué pieza es y vemos cómo resolverla.",
      details: ["Trabajos en aluminio a pedido", "Piezas según plano o medidas"],
    },
  ],
};

// [PROPUESTA]
export const weldingJobs = {
  title: "Qué soldamos en el taller",
  photo: {
    src: "/img/columna-inox.webp",
    alt: "Columna de acero inoxidable recién instalada en un local, con la careta de soldar y los cables en el piso",
  },
  items: [
    {
      title: "Fabricación a medida",
      description:
        "Soldamos lo que fabricamos: mesones, campanas, carros, revestimientos, soportes y protectores, cada pieza a la medida de tu espacio.",
      href: "/catalogo",
      linkLabel: "Ver productos",
    },
    {
      title: "Reparación y refuerzo",
      description:
        "Reparamos y reforzamos estructuras y cubiertas que todavía tienen vida útil, antes de pensar en reemplazarlas.",
    },
    {
      title: "Mantención",
      description: "Mantenemos el equipamiento de acero inoxidable que ya tienes instalado.",
    },
    {
      title: "Corte, plegado y diseño",
      description:
        "La soldadura es una parte del trabajo. También medimos, diseñamos, cortamos y plegamos la plancha, así el proyecto completo sale del mismo taller.",
      href: "/servicios",
      linkLabel: "Ver servicios",
    },
  ],
};

// [PROPUESTA]
export const weldingClients = {
  title: "Para quién soldamos",
  lead: "Nuestros principales clientes son del rubro gastronómico: cadenas de comida rápida, restaurantes e industria alimentaria. También hemos hecho trabajos para el área de la salud.",
};

// [PROPUESTA]
export const weldingLocation = {
  title: "Taller de soldadura en San Miguel",
  lead: "Trabajamos para restaurantes, locales de comida rápida, industria alimentaria y empresas de Santiago y la Región Metropolitana.",
  facts: [
    { label: "Dirección", lines: [site.street, site.city], href: site.mapsHref, hint: " (abre Google Maps)" },
    { label: "Horario", lines: site.hoursLines },
    { label: "Teléfono y WhatsApp", lines: [site.phoneDisplay], href: `tel:${site.phoneHref}` },
  ],
};

// [PROPUESTA]
export const weldingFaqs = [
  {
    question: "¿Qué tipos de soldadura hacen?",
    answer:
      "Soldadura TIG para acero inoxidable, soldadura MIG para acero carbono y trabajos en aluminio. Con eso fabricamos piezas a medida y reparamos equipamiento existente.",
  },
  {
    question: "¿Qué diferencia hay entre soldadura TIG y MIG?",
    answer:
      "La TIG usa un electrodo de tungsteno y el soldador aporta el material a mano: es más lenta, pero deja un cordón fino y limpio, ideal para acero inoxidable y plancha delgada. La MIG alimenta un alambre continuo: es más rápida y conviene en acero carbono, estructuras y espesores mayores.",
  },
  {
    question: "¿Dónde está el taller de soldadura?",
    answer: `En ${site.street}, comuna de ${site.commune}, Santiago. Atendemos de ${site.hours}.`,
  },
  {
    question: "¿Cuánto cuesta un trabajo de soldadura?",
    answer:
      "Depende del material, el espesor, el tamaño de la pieza y si es fabricación o reparación. Por eso no publicamos precios: mándanos fotos y medidas por WhatsApp y te respondemos con la cotización.",
  },
  {
    question: "¿Qué necesito para cotizar?",
    answer:
      "Una foto de la pieza o del lugar, las medidas aproximadas y qué material es. Si tienes un plano, mejor. Con eso podemos decirte cómo lo resolvemos y cuánto cuesta.",
  },
  {
    question: "¿Reparan o solo fabrican?",
    answer:
      "Las dos cosas. Además de fabricar a medida, reparamos y reforzamos estructuras y cubiertas de acero inoxidable.",
  },
  {
    question: "¿Fabrican según plano?",
    answer:
      "Sí. Fabricamos a medida: mándanos el plano o las medidas de lo que necesitas. Si no tienes plano, lo diseñamos contigo antes de fabricar.",
  },
  {
    question: "¿Trabajan con empresas?",
    answer:
      "Sí. Nuestros principales clientes son del rubro gastronómico, como cadenas de comida rápida y restaurantes, y también hemos hecho trabajos para el área de la salud.",
  },
  {
    question: "¿Los trabajos tienen garantía?",
    answer:
      "Sí. Todos nuestros trabajos son garantizados: los hacen maestros calificados, con materiales de primera calidad y cada proceso supervisado.",
  },
];

// [PROPUESTA]
export const weldingCta = {
  title: "¿Tienes un trabajo de soldadura?",
  lead: "Mándanos fotos y medidas de la pieza. Te respondemos con cotización, materiales y plazos.",
};
