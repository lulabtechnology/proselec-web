import {
  Building2,
  Zap,
  Wrench,
  Droplets,
  Flame,
  Shield,
  type LucideIcon
} from "lucide-react";

export const site = {
  name: "PROYECTOS Y SERVICIOS ELECTROMECÁNICOS, S.A.",
  shortName: "PROSELEC, S.A.",
  founded: 2011,
  description:
    "Empresa panameña fundada en 2011, enfocada en Obras Civiles, Arquitectura y Obras Electromecánicas.",
  url: "https://www.proselecpanama.es",
  about:
    "Fundada en 2011, Proyecto y Servicios Electromecánicos, S.A. (PROSELEC, S.A.) es una empresa panameña, que desarrolla su actividad dentro del campo de Obras Civiles, Arquitectura y Obras Electromecánicas. Esta empresa se crea a partir de la necesidad de cubrir sectores de las instalaciones poco atendido debido al alto grado de especialización que requieren, al desarrollo de Sistemas Electromecánicos y la Construcción de Obras Civiles en General.",
  mission:
    "Brindar un servicio de calidad en el estudio técnico para el diseño, planificación, construcción, equipamiento y mantenimiento de proyectos de obra civil e instalaciones electromecánicas.",
  vision:
    "Ser una empresa reconocida en el país por ofrecer un servicio de calidad, seguridad y confiable en todas las soluciones de ingeniería. Destacando en la innovación, tecnológicas, de vanguardia para un mejor servicio a nuestros clientes."
};

export const nav = [
  { href: "/", label: "Inicio" },
  { href: "/sobre-nosotros", label: "Sobre nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/contacto", label: "Contacto" }
];

export type Service = { title: string; icon: LucideIcon; bullets: string[] };

export const services: Service[] = [
  {
    title: "Obras Civiles",
    icon: Building2,
    bullets: [
      "Diseño y construcción de edificios, plazas comerciales, oficinas, parques y naves industriales",
      "Construcción de caminos de acceso y estacionamientos",
      "Obras para gobiernos municipales e instituciones",
      "Planta de Tratamiento",
      "Urbanizaciones"
    ]
  },
  {
    title: "Instalaciones Eléctricas",
    icon: Zap,
    bullets: [
      "Sistemas eléctricos e infraestructura de redes",
      "Sistema de ventilación",
      "Energía renovable y cogeneración"
    ]
  },
  {
    title: "Servicios Auxiliares",
    icon: Wrench,
    bullets: [
      "Estudio y diseño de ingeniería para proyectos de instalaciones",
      "Desarrollo de planos",
      "Mantenimiento y asistencia técnica a proyectos de instalaciones u obras civiles"
    ]
  },
  {
    title: "Fontanería",
    icon: Droplets,
    bullets: [
      "Instalaciones interiores y exteriores de distribución",
      "Sistemas de acueductos",
      "Cuartos de bombeo",
      "Tratamiento de aguas residuales",
      "Sistemas pluviales"
    ]
  },
  {
    title: "Sistema de Gas Licuado",
    icon: Flame,
    bullets: [
      "Sistema de gas residencial y comercial",
      "Estacas principales y ramales de distribución",
      "Diagnóstico de fugas",
      "Certificaciones"
    ]
  },
  {
    title: "Sistema Húmedo Contra Incendio",
    icon: Shield,
    bullets: [
      "Sistema para BIE, hidrantes y rociadores",
      "Columna seca",
      "Grupo de presión CPI (norma UNE y CEPREVEN)",
      "Extinción mediante agentes gaseosos",
      "Sistema de bombas",
      "Certificaciones SHCI"
    ]
  }
];

export const projects = [
  "Sistema Húmedo contra Incendio en la Unidad de Hemodiálisis Chitré–Soná",
  "Sistema Eléctrico y Sistemas Especiales Unidad Hemodiálisis (Chitré, Santiago, Soná)",
  "Construcción de Edificio Eléctrico (Santiago, Veraguas)",
  "Residencial Villa Venecia (Chitré, Herrera)",
  "Sistema de Drenaje Estadio Ramón Cantera (Aguadulce)",
  "Remodelación de Parque Pocrí (Coclé)",
  "Paradores fotográficos, pavimentación, acabados, impermeabilización de losas, cobertizos",
  "Estructura para tanque de agua",
  "Proyecto Terminal de Transporte Penonomé: sistema sanitario / acueducto potable / sistema contraincendio",
  "Proyecto Estadio Toco Castillo: sistema húmedo contra incendio",
  "Proyecto Museo Julio Gomez Ruiz: mejoras al museo",
  "Servicios de instalación de sistema de gas licuado (PH Punta Prieta / PH City Tower)"
];

export const clients = [
  "INVERSIONES GRUPO DOUGLAS, S.A.",
  "INVERSIONES GRUPO KAYRO, S.A.",
  "GRUPO ELITE S.A.",
  "CANADÁ INVESMENT GROUP, S.A.",
  "GRUPO CABA S.A.",
  "CONSTRUCTORA RIGA SERVICES, S.A.",
  "CONSTRUCTORA MERCURIO, S.A.",
  "IDELSA, S.A.",
  "SELECTROTEC, S.A.",
  "INGELMEC, S.A.",
  "POSTES DE PANAMÁ, S.A.",
  "IBT GROUP",
  "CONSTRUCTORA GUTIÉRREZ, S.A.",
  "JERA, S.A.",
  "CONSTRUCTORA CHEVALIER, S.A.",
  "CONSTRUCTORA TONY, S.A.",
  "CONSTRUCTORA RODSA",
  "BIGTON TECHNOLOGIES",
  "ELÉCTRICOS SANTIAGO, S.A.",
  "REPRESENTACIONES HALFE, S.A.",
  "PROMOTORA LAJAS COCLE, S.A.",
  "PH PUNTA PRIETA"
];

export const contact = {
  phones: ["+507 6852-7127", "+507 6245-5732"],
  address:
    "Calle Ave. Rodolfo Girón, Santiago Veraguas, Edificio Eléctrico Santiago, Local N° 2.",
  emails: ["heproselec@gmail.com", "proyectosyservicioselec@gmail.com"],
  web: "www.proselecpanama.es",
  people: [
    { name: "Erick H. Rodríguez", role: "Gerente General", phone: "6245-5732" },
    { name: "Samuel Rodríguez", role: "Gerente de Proyectos", phone: "6852-7127" }
  ]
};
