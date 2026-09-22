// CONTENIDO DEL CLIENTE — entregado en el PDF de textos.
//
// Procedencia de cada bloque:
//   [PDF]       texto literal del documento del cliente. No reescribir.
//   [PROPUESTA] redactado por nosotros porque el PDF dejó la ranura vacía.
//               El cliente debe validarlo antes de publicar.
//
// Las cifras NO se inventan: un número inventado en un sitio corporativo es una
// afirmación falsa, distinto de un texto descriptivo de relleno. Las que el
// cliente no confirmó se renderizan como ranura de solicitud (`pending: true`),
// nunca como "00".

// El H1 de la página. Lleva el título que el PDF entrega para "Nosotros":
// contiene la keyword del negocio y el diferenciador (20 años, resistencia),
// así que sirve igual de bien como encabezado principal y para buscadores.
export const pageHero = {
  eyebrow: "Nosotros",
  // [PDF] Título de la sección
  title: "Más de 20 años garantizando calidad y resistencia en acero inoxidable",
  // [PDF] Primera frase de la presentación, como entrada
  lead: "Llevamos más de dos décadas transformando el acero inoxidable en soluciones duraderas para la industria alimentaria, restaurantes y locales de comida rápida.",
};

export const history = {
  eyebrow: "Nuestra historia",
  // [PROPUESTA] El PDF no titula este bloque; el H1 ya tomó su título
  title: "Fabricación a medida, no catálogo estándar",
  // [PDF] Historia / Presentación, literal
  paragraphs: [
    "En JZINOX llevamos más de dos décadas transformando el acero inoxidable en soluciones duraderas para la industria alimentaria, restaurantes y locales de comida rápida. Hemos fabricado y diseñado a grandes empresas de la industria alimentaria de la comida rápida.",
    "Nos dedicamos a la fabricación a medida, sabemos que cada cocina y espacio de trabajo tiene necesidades únicas que los muebles estandarizados no pueden resolver.",
  ],
};

export const mission = {
  eyebrow: "Misión y visión",
  // [PROPUESTA] El PDF no titula esta sección
  title: "Lo que nos mueve",
  items: [
    {
      title: "Nuestra misión",
      // [PDF] Misión, literal
      description:
        "Brindar equipamiento e infraestructura en acero inoxidable de la máxima calidad y resistencia, ofreciendo un producto robusto y personalizado que supere con creces la mueblería importada de baja durabilidad. Trabajamos para que tu inversión dure años en perfectas condiciones, optimizando la higiene y operatividad de tu negocio.",
    },
    {
      title: "Nuestra visión",
      // [PROPUESTA] El PDF entrega la misión pero no la visión
      description:
        "Ser el taller de referencia en estructuras de acero inoxidable de la Región Metropolitana: el que llaman cuando la pieza tiene que entrar exacta, aguantar el uso diario y durar más que el local donde se instala.",
    },
  ],
};

export const valuesSection = {
  eyebrow: "Por qué elegirnos",
  // [PDF] "¿Por qué elegir JZINOX? (Puntos clave)"
  title: "¿Por qué elegir JZINOX?",
};

// [PDF] Los cuatro puntos clave, literales
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
];

// Banda de cifras. Solo la primera está confirmada por el cliente ([PDF]: "Más
// de 20 años"). Las otras tres quedan como ranura de solicitud hasta que las
// confirme: se renderizan con borde punteado y la etiqueta "Dato por confirmar",
// la misma convención que los placeholders de foto.
export const stats = [
  { value: "20+", label: "Años de experiencia" },
  { value: null, label: "Dato por confirmar", pending: true, hint: "Proyectos entregados" },
  { value: null, label: "Dato por confirmar", pending: true, hint: "Clientes atendidos" },
  { value: null, label: "Dato por confirmar", pending: true, hint: "Garantía de fabricación" },
];
