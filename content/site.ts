// /content/site.ts

export const site = {
  name: "PROSELEC, S.A.",
  shortName: "PROSELEC",
  tagline: "Obras Civiles & Electromecánicas",
  description:
    "Empresa panameña enfocada en obras civiles y electromecánicas. Diseño, planificación, construcción y mantenimiento.",
  about:
    "Fundada en 2011, Proyecto y Servicios Electromecánicos, S.A. (PROSELEC, S.A.) es una empresa panameña que desarrolla su actividad dentro del campo de Obras Civiles, Arquitectura y Obras Electromecánicas. Esta empresa se crea a partir de la necesidad de cubrir sectores de las instalaciones poco atendidos debido al alto grado de especialización que requieren, al desarrollo de Sistemas Electromecánicos y la Construcción de Obras Civiles en General.",
  // Del PDF:
  mission:
    "Brindar un servicio de calidad en el estudio técnico para el diseño, planificación, construcción, equipamiento y mantenimiento de proyectos de obra civil e instalaciones electromecánicas.",
  vision:
    "Ser una empresa reconocida en el país por ofrecer un servicio de calidad, seguridad y confiable en todas las soluciones de ingeniería. Destacando en la innovación tecnológica de vanguardia para un mejor servicio a nuestros clientes.",
  founded: 2011,
  url: "https://www.proselecpanama.es",
} as const;

export const contact = {
  // Principal (Samuel Rodríguez)
  phoneDisplay: "6852-7127",
  phoneE164: "+50768527127",
  phone: "+50768527127",

  // WhatsApp (mismo número principal)
  whatsappDigits: "50768527127",
  whatsappE164: "+50768527127",

  // Para JSON-LD + si luego quieres mostrar ambos:
  phones: ["+507 6852-7127", "+507 6245-5732"],

  emails: ["heproselec@gmail.com", "proyectosyservicioselec@gmail.com"],

  address: "Calle Ave. Rodolfo Girón, Santiago Veraguas, Edificio Eléctrico Santiago, Local N° 2.",
  mapQuery:
    "Calle Ave. Rodolfo Girón, Santiago Veraguas, Edificio Eléctrico Santiago, Local N° 2.",
} as const;
