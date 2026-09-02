// CONTENIDO PLACEHOLDER a la espera de la información real del cliente.
//
// Todo texto visible es un localizador numerado ("PRODUCTO 1", "CATEGORÍA 2"...) para que
// el cliente indique exactamente qué debe decir cada ranura. El relleno va en lorem ipsum
// para que nadie confunda un borrador con contenido aprobado.
//
// ATENCIÓN: los precios son valores de maqueta, NO son la lista real de JZINOX.
// TODO: reemplazar por la lista de precios que entregue el cliente antes de publicar.
//
// El `id` NO es texto visible: es el identificador técnico de cada pieza y conserva el
// nombre del producto que ocupará la ranura. El comentario de cada entrada guarda ese
// mismo dato en claro, para no perder la correspondencia cuando llegue el copy.
export const catalogCategories = [
  "Todos", // filtro, no es una categoría del cliente
  "CATEGORÍA 1", // ranura prevista: Cocción
  "CATEGORÍA 2", // ranura prevista: Extracción
  "CATEGORÍA 3", // ranura prevista: Mesones y Lavado
  "CATEGORÍA 4", // ranura prevista: Almacenamiento
  "CATEGORÍA 5", // ranura prevista: Estructuras
];

export const catalog = [
  {
    id: "meson-trabajo",
    name: "PRODUCTO 1", // ranura prevista: mesón de trabajo en acero inoxidable
    category: "CATEGORÍA 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.",
    price: 185000,
    unit: "m lineal",
  },
  {
    id: "meson-entrepano",
    name: "PRODUCTO 2", // ranura prevista: mesón con entrepaño inferior
    category: "CATEGORÍA 3",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    price: 225000,
    unit: "m lineal",
  },
  {
    id: "lavaplatos-1-cuba",
    name: "PRODUCTO 3", // ranura prevista: lavaplatos industrial de una cuba
    category: "CATEGORÍA 3",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    price: 210000,
    unit: "unidad",
  },
  {
    id: "lavaplatos-2-cubas",
    name: "PRODUCTO 4", // ranura prevista: lavaplatos industrial de dos cubas
    category: "CATEGORÍA 3",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
    price: 320000,
    unit: "unidad",
  },
  {
    id: "campana-mural",
    name: "PRODUCTO 5", // ranura prevista: campana extractora mural
    category: "CATEGORÍA 2",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
    price: 420000,
    unit: "m lineal",
  },
  {
    id: "campana-central",
    name: "PRODUCTO 6", // ranura prevista: campana extractora central
    category: "CATEGORÍA 2",
    description: "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.",
    price: 560000,
    unit: "m lineal",
  },
  {
    id: "ducto-extraccion",
    name: "PRODUCTO 7", // ranura prevista: ducto de extracción en acero inoxidable
    category: "CATEGORÍA 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.",
    price: 75000,
    unit: "m lineal",
  },
  {
    id: "mesa-caliente",
    name: "PRODUCTO 8", // ranura prevista: mesa caliente / baño maría
    category: "CATEGORÍA 1",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    price: 480000,
    unit: "unidad",
  },
  {
    id: "mueble-cocina",
    name: "PRODUCTO 9", // ranura prevista: mueble base para línea de cocción
    category: "CATEGORÍA 1",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    price: 265000,
    unit: "m lineal",
  },
  {
    id: "estanteria-inox",
    name: "PRODUCTO 10", // ranura prevista: estantería de acero inoxidable
    category: "CATEGORÍA 4",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
    price: 195000,
    unit: "unidad",
  },
  {
    id: "repisa-mural",
    name: "PRODUCTO 11", // ranura prevista: repisa mural en acero inoxidable
    category: "CATEGORÍA 4",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
    price: 68000,
    unit: "m lineal",
  },
  {
    id: "carro-transporte",
    name: "PRODUCTO 12", // ranura prevista: carro de transporte bandejero
    category: "CATEGORÍA 4",
    description: "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.",
    price: 240000,
    unit: "unidad",
  },
  {
    id: "estanque-inox",
    name: "PRODUCTO 13", // ranura prevista: estanque industrial en acero inoxidable
    category: "CATEGORÍA 5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.",
    price: 950000,
    unit: "desde",
  },
  {
    id: "estructura-soporte",
    name: "PRODUCTO 14", // ranura prevista: estructura y base de soporte a medida
    category: "CATEGORÍA 5",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    price: 0,
    unit: "cotizar",
  },
  {
    id: "proyecto-cocina-completa",
    name: "PRODUCTO 15", // ranura prevista: proyecto de cocina completa
    category: "CATEGORÍA 5",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    price: 0,
    unit: "cotizar",
  },
];
