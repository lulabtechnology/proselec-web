// content/site.ts

export const site = {
  name: "PROYECTOS Y SERVICIOS ELECTROMECÁNICOS, S.A.",
  shortName: "PROSELEC",
  tagline: "Obras Civiles & Electromecánicas",

  // ✅ usados en app/layout.tsx
  founded: 2011,
  description:
    "Empresa panameña fundada en 2011, enfocada en Obras Civiles, Arquitectura y Obras Electromecánicas. Diseño, planificación, construcción, equipamiento y mantenimiento.",
  url: "https://proselec-web.vercel.app",

  // ✅ usado en app/sobre-nosotros/page.tsx
  about:
    "PROSELEC, S.A. es una empresa panameña fundada en 2011, orientada a brindar soluciones integrales en obras civiles y electromecánicas. Nos especializamos en diseño, planificación, ejecución, equipamiento y mantenimiento de proyectos para clientes del sector público y privado, con un enfoque en calidad, seguridad y cumplimiento.",

  // ✅ por si tu página “Sobre nosotros” los usa
  mission:
    "Brindar soluciones integrales en obras civiles y electromecánicas, con altos estándares de calidad, seguridad y cumplimiento, aportando valor real a cada proyecto.",
  vision:
    "Ser una empresa referente en Panamá por su confiabilidad, capacidad técnica y excelencia en la ejecución de obras civiles y electromecánicas.",
  values: [
    "Calidad",
    "Seguridad",
    "Responsabilidad",
    "Cumplimiento",
    "Trabajo en equipo",
  ],
};

export const contact = {
  // ✅ “solo deja este número”
  phoneDisplay: "6852-7127",
  phoneE164: "+50768527127",

  // ✅ compatibilidad: algunos componentes usan CONTACT.phone
  phone: "+50768527127",

  // ✅ usados en app/layout.tsx (JSON-LD)
  phones: ["+507 6852-7127"],

  // ✅ placeholder para que tú lo cambies luego
  email: "correo@dominio.com",
  emails: ["correo@dominio.com"],

  // ✅ dirección
  addressLine1: "Calle Ave. Rodolfo Girón, Santiago Veraguas",
  addressLine2: "Edificio Eléctrico Santiago, Local N° 2.",
  address:
    "Calle Ave. Rodolfo Girón, Santiago Veraguas, Edificio Eléctrico Santiago, Local N° 2.",

  // ✅ WhatsApp / mapa
  whatsappDigits: "50768527127",
  mapQuery:
    "Calle Ave. Rodolfo Girón, Santiago Veraguas, Edificio Eléctrico Santiago, Local N° 2.",
};
