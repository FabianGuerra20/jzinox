// CONTENIDO PLACEHOLDER a la espera del texto real del cliente.
//
// Todo texto visible es un localizador numerado ("SERVICIO 1", "PASO 2"...) para que el
// cliente indique exactamente qué debe decir cada bloque. El relleno va en lorem ipsum
// para que nadie confunda un borrador con contenido aprobado.
//
// El `slug` y el `icon` NO son texto visible: son identificadores técnicos (el slug es
// el ancla de la URL) y conservan el nombre del servicio que ocupará cada ranura. El
// comentario de cada entrada guarda ese mismo dato en claro, para no perder la
// correspondencia cuando llegue el copy definitivo.
export const services = [
  {
    slug: "equipamiento-cocina",
    title: "SERVICIO 1", // ranura prevista: equipamiento de cocina industrial
    icon: "kitchen",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    details: [
      "Lorem ipsum dolor sit amet consectetur",
      "Adipiscing elit sed do eiusmod tempor",
      "Incididunt ut labore et dolore magna",
    ],
  },
  {
    slug: "campanas-extraccion",
    title: "SERVICIO 2", // ranura prevista: campanas y ductos de extracción
    icon: "hood",
    summary:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    details: [
      "Lorem ipsum dolor sit amet consectetur",
      "Adipiscing elit sed do eiusmod tempor",
      "Incididunt ut labore et dolore magna",
    ],
  },
  {
    slug: "mesones-lavaplatos",
    title: "SERVICIO 3", // ranura prevista: mesones y lavaplatos
    icon: "counter",
    summary:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    details: [
      "Lorem ipsum dolor sit amet consectetur",
      "Adipiscing elit sed do eiusmod tempor",
      "Incididunt ut labore et dolore magna",
    ],
  },
  {
    slug: "soldadura-tig",
    title: "SERVICIO 4", // ranura prevista: soldadura TIG
    icon: "tig",
    summary:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    details: [
      "Lorem ipsum dolor sit amet consectetur",
      "Adipiscing elit sed do eiusmod tempor",
      "Incididunt ut labore et dolore magna",
    ],
  },
  {
    slug: "estanterias-almacenamiento",
    title: "SERVICIO 5", // ranura prevista: estanterías y almacenamiento
    icon: "shelf",
    summary:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    details: [
      "Lorem ipsum dolor sit amet consectetur",
      "Adipiscing elit sed do eiusmod tempor",
      "Incididunt ut labore et dolore magna",
    ],
  },
  {
    slug: "mantencion-reparaciones",
    title: "SERVICIO 6", // ranura prevista: mantención y reparaciones
    icon: "tools",
    summary:
      "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.",
    details: [
      "Lorem ipsum dolor sit amet consectetur",
      "Adipiscing elit sed do eiusmod tempor",
      "Incididunt ut labore et dolore magna",
    ],
  },
];

// Etapas del proceso de trabajo mostradas en /servicios.
export const processSteps = [
  { title: "PASO 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do." },
  { title: "PASO 2", description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco." },
  { title: "PASO 3", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse." },
  { title: "PASO 4", description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa." },
];
