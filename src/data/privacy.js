import { site } from "./site.js";

// [PROPUESTA]
export const privacy = {
  title: "Política de privacidad",
  updated: "24 de noviembre de 2026",
  sections: [
    {
      title: "Qué datos recibimos",
      paragraphs: [
        `Cuando nos escribes por el formulario de contacto recibimos tu nombre, teléfono, correo, el tipo de trabajo que necesitas, la descripción de tu proyecto y, si lo adjuntas, un plano o foto. Si nos escribes por WhatsApp, recibimos lo que nos envíes por ese medio.`,
      ],
    },
    {
      title: "Para qué los usamos",
      paragraphs: [
        "Solo para responder tu consulta, preparar la cotización y coordinar el trabajo. No vendemos ni compartimos tus datos con terceros para publicidad.",
        `El formulario se envía por FormSubmit, un servicio que reenvía la consulta a nuestro correo ${site.email}.`,
      ],
    },
    {
      title: "Cookies y medición de visitas",
      paragraphs: [
        "El sitio no usa cookies propias. Si activamos Google Analytics para contar visitas, solo se carga después de que lo aceptes en el aviso de cookies, y puedes rechazarlo sin que cambie nada del sitio.",
      ],
    },
    {
      title: "Tus derechos",
      paragraphs: [
        `Puedes pedirnos ver, corregir o eliminar tus datos escribiendo a ${site.email}. Te respondemos en horario de taller.`,
      ],
    },
  ],
};
