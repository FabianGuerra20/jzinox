export const site = {
  name: "JZINOX",
  tagline: "Equipamiento gastronómico en acero inoxidable",
  description:
    "Equipamiento gastronómico en acero inoxidable, soldadura TIG y estructuras a medida. Fabricación, instalación y mantención para cocinas industriales, restaurantes y casinos.",
  domain: "jzinox.cl",

  phoneDisplay: "+56 9 3188 9950",
  phoneHref: "+56931889950",
  whatsappNumber: "56931889950",
  whatsappDefaultMessage: "Hola JZINOX, quisiera cotizar un proyecto.",

  email: "ventas@jzinox.cl",
  street: "Av. Departamental 999, Galpón 11",
  // TODO: confirmar comuna con el cliente. Av. Departamental cruza La Florida,
  // Macul y San Joaquín, así que no la deducimos desde la dirección.
  city: "Santiago",
  address: "Av. Departamental 999, Galpón 11",
  addressFull: "Av. Departamental 999, Galpón 11, Región Metropolitana, Chile",
  region: "Región Metropolitana",
  country: "CL",

  hours: "Lun-Vie 9:00-18:00 · Sáb 9:00-13:00",
  hoursLines: ["Lunes a viernes, 9:00 - 18:00", "Sábado, 9:00 - 13:00"],
  openingHours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" },
    { days: ["Saturday"], opens: "09:00", closes: "13:00" },
  ],

  formsubmitEndpoint: "https://formsubmit.co/ventas@jzinox.cl",
  siteUrl: "https://jzinox.cl",
  ogImage: "/og-image.svg",
};

// `ally: true` marca una entrada que NO es una sección de JZ Inox sino otra
// marca del ecosistema. El Header la separa con un divisor para que el
// visitante sepa que va a saltar de marca, no de sección.
export const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/productos", label: "Productos" },
  { href: "/catalogo", label: "Catálogo" },
  { href: "/contacto", label: "Contacto" },
  { href: "/al-muebleria", label: "AL Mueblería", ally: true },
];

export const navCta = { href: "/contacto", label: "Cotizar Proyecto" };
