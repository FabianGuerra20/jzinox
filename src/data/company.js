import { site } from "./site.js";

export const pageHero = {
  // [PDF]
  titleLead: "Más de 20 años",
  // [PDF]
  titleRest: "garantizando calidad y resistencia en acero inoxidable",
};

export const history = {
  // [PDF, reformulado]
  paragraphs: [
    "En JZ INOX transformamos el acero inoxidable en soluciones duraderas para la industria alimentaria, restaurantes y locales de comida rápida. Hemos fabricado y diseñado a grandes empresas de la industria alimentaria de la comida rápida.",
    "Nos dedicamos a la fabricación a medida, sabemos que cada cocina y espacio de trabajo tiene necesidades únicas que los muebles estandarizados no pueden resolver.",
  ],
};

export const mission = {
  // [PROPUESTA]
  title: "Misión y visión",
  items: [
    {
      title: "Nuestra misión",
      // [PDF]
      description:
        "Brindar equipamiento e infraestructura en acero inoxidable de la máxima calidad y resistencia, ofreciendo un producto robusto y personalizado que supere con creces la mueblería importada de baja durabilidad. Trabajamos para que tu inversión dure años en perfectas condiciones, optimizando la higiene y operatividad de tu negocio.",
    },
    {
      title: "Nuestra visión",
      // [PROPUESTA]
      description:
        "Ser el taller al que llaman cuando la pieza tiene que entrar exacta y aguantar el uso diario durante años.",
    },
  ],
};

export const valuesSection = {
  // [PDF]
  title: "¿Por qué elegir JZ INOX?",
};

// [PDF]
export const values = [
  {
    title: "20+ años de experiencia",
    description:
      "Conocemos a fondo las exigencias del sector gastronómico y alimentario.",
  },
  {
    title: "Fabricación 100% a medida",
    description:
      "Diseñamos y adaptamos cada estructura a las dimensiones exactas de tu espacio.",
  },
  {
    title: "Resistencia superior",
    description:
      "Acero inoxidable de verdad, estructurado para uso intensivo y trabajo pesado. Somos manufactura nacional.",
  },
  {
    title: "Servicio integral",
    description:
      "Te acompañamos desde el diseño inicial hasta la fabricación, reparación y mantención. Contamos con ingeniería, maquinaria y servicio.",
  },
  {
    title: "Trabajos garantizados",
    description:
      "Nuestra empresa garantiza un trabajo de calidad, los cuales son fabricados por maestros calificados con amplia experiencia en el rubro, usamos materiales de primera calidad y cada proceso es supervisado, además todos los trabajos son garantizados.",
  },
];

export const recentProjects = {
  title: "Proyectos recientes",
  // [PDF]
  items: [
    { client: "KFC y Wendy's", work: "Fabricación de implementación de cocina en sus restaurantes." },
    { client: "Factory Nine", work: "Fabricación de repisas." },
    { client: "Pizzería Sbarro", work: "Exhibidores de alimentos para ser usados en vitrinas." },
  ],
};

// [PDF]
// [PROPUESTA]
export const facts = [
  { label: "Experiencia", value: "20+ años" },
  { label: "Origen", value: "Manufactura nacional" },
  { label: "Taller", value: "Departamental 999, San Miguel", href: site.mapsHref },
  { label: "Fabricación", value: "100% a medida" },
];

export const clients = {
  title: "Nuestros clientes",
  bandTitle: "Han confiado en nosotros",
  // [PDF]
  paragraph:
    "Durante nuestros años de trayectoria, nuestros principales clientes son del rubro gastronómico: hemos prestado servicio a empresas como KFC, Wendy's, China Wok, Burger King, Doggis, Johnny Rockets y Factory Nine. Además, hemos ampliado nuestro rubro realizando trabajos para el área de la salud, como Hospital Salvador y Uno Salud Dental.",
  list: [
    { name: "KFC", logo: "/img/clientes/kfc.svg", ratio: 1.3 },
    { name: "Wendy's", logo: "/img/clientes/wendys.svg", ratio: 2.34 },
    { name: "China Wok", logo: "/img/clientes/china-wok.svg", ratio: 1.25 },
    { name: "Burger King", logo: "/img/clientes/burger-king.svg", ratio: 0.92 },
    { name: "Doggis", logo: "/img/clientes/doggis.png", ratio: 4.6 },
    { name: "Johnny Rockets", logo: "/img/clientes/johnny-rockets.png", ratio: 1.43 },
    { name: "Factory Nine", logo: "/img/clientes/factory-nine.png", ratio: 10.6 },
    { name: "Hospital Salvador", logo: "/img/clientes/hospital-salvador.png", ratio: 3.84 },
    { name: "Uno Salud Dental", logo: "/img/clientes/uno-salud-dental.png", ratio: 4.88 },
  ],
};
