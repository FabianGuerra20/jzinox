// CONTENIDO PLACEHOLDER a la espera del texto real del cliente.
// Cada título es un localizador ("NOSOTROS 2", "VALOR 1", "DATO 1"...) para que
// el cliente indique exactamente qué debe decir cada bloque. El relleno va en
// lorem ipsum para que nadie confunda un borrador con contenido aprobado.
export const history = {
  eyebrow: "Historia",
  title: "NOSOTROS 2",
  paragraphs: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.",
  ],
};

export const mission = {
  eyebrow: "Misión y visión",
  title: "NOSOTROS 3",
  // Sub-bloques de NOSOTROS 3, numerados como 3.1 y 3.2 para que el cliente
  // pueda referirse a cada uno sin ambigüedad.
  items: [
    {
      title: "NOSOTROS 3.1", // ranura prevista: Misión
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "NOSOTROS 3.2", // ranura prevista: Visión
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ],
};

export const valuesSection = {
  eyebrow: "Valores",
  title: "NOSOTROS 4",
};

export const values = [
  {
    title: "VALOR 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
  {
    title: "VALOR 2",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
  },
  {
    title: "VALOR 3",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
  },
  {
    title: "VALOR 4",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
  },
];

// TODO: el cliente debe confirmar cada cifra antes de publicar.
export const stats = [
  { value: "00+", label: "DATO 1" },
  { value: "00+", label: "DATO 2" },
  { value: "00%", label: "DATO 3" },
  { value: "00", label: "DATO 4" },
];
