export const site = {
  name: "JZ INOX",
  tagline: "Mesones y equipamiento en acero inoxidable a medida",
  description:
    "Fabricación, reparación y mantención de estructuras en acero inoxidable 100% a medida. Más de 20 años equipando restaurantes, comida rápida e industria alimentaria.",
  domain: "jzinox.cl",

  phoneDisplay: "+56 9 3188 9950",
  phoneHref: "+56931889950",
  whatsappNumber: "56931889950",
  whatsappDefaultMessage: "Hola JZ INOX, quisiera cotizar un proyecto.",

  email: "ventas@jzinox.cl",
  street: "Av. Departamental 999, Galpón 11",
  city: "San Miguel, Santiago",
  region: "Región Metropolitana",
  country: "CL",
  mapsHref: "https://maps.app.goo.gl/PqZwo9yp7u6cGVfD7",
  wazeHref: "https://waze.com/ul?q=Av.%20Departamental%20999%2C%20San%20Miguel%2C%20Santiago%2C%20Chile&navigate=yes",

  hours: "lunes a viernes de 9:00 a 18:00 y sábado de 9:00 a 13:00",
  hoursLines: ["Lunes a viernes, de 9:00 a 18:00", "Sábado, de 9:00 a 13:00"],
  openingHours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" },
    { days: ["Saturday"], opens: "09:00", closes: "13:00" },
  ],

  formsubmitEndpoint: "https://formsubmit.co/ventas@jzinox.cl",
  siteUrl: "https://jzinox.cl",
  ogImage: "/og-image.png",
};

export const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/catalogo", label: "Productos" },
  { href: "/contacto", label: "Contacto" },
  { href: "/al-muebleria", label: "AL Mueblería", ally: true },
];

export const navCta = { href: "/contacto", label: "Cotizar proyecto" };
