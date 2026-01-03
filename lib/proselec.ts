// lib/proselec.ts
export const COMPANY = {
  name: "PROSELEC, S.A.",
  legalName: "PROYECTOS Y SERVICIOS ELECTROMECÁNICOS, S.A.",
  tagline: "Obras Civiles, Arquitectura y Obras Electromecánicas.",
  foundedYear: 2011,
  website: "www.proselecpanama.es",
  address:
    "Calle Ave. Rodolfo Girón, Santiago Veraguas, Edificio Eléctrico Santiago, Local N° 2.",
} as const;

// IMPORTANTE:
// - El cliente pidió dejar SOLO este número.
// - El correo te lo van a dar luego: deja placeholder y luego lo reemplazas aquí.
export const CONTACT = {
  phoneDisplay: "6852-7127",
  phoneE164: "+50768527127",
  email: "COLOCAR_CORREO_AQUI@DOMINIO.COM",
  mapQuery:
    "Calle Ave. Rodolfo Girón, Santiago Veraguas, Edificio Eléctrico Santiago, Local N° 2.",
} as const;

export type Service = {
  title: string;
  description: string;
  bullets: string[];
  icon:
    | "HardHat"
    | "Zap"
    | "Wrench"
    | "Droplets"
    | "Flame"
    | "Building2"
    | "Fan"
    | "Pipe";
};

export const SERVICES: Service[] = [
  {
    title: "Obras civiles",
    description: "Ejecución y mejora de infraestructura con enfoque en calidad y seguridad.",
    bullets: ["Construcción y remodelación", "Acabados y pavimentación", "Impermeabilización"],
    icon: "HardHat",
  },
  {
    title: "Instalaciones eléctricas",
    description: "Diseño, instalación y mantenimiento eléctrico para proyectos comerciales e industriales.",
    bullets: ["Tableros y canalizaciones", "Alumbrado y fuerza", "Sistemas especiales"],
    icon: "Zap",
  },
  {
    title: "Servicios auxiliares",
    description: "Soporte técnico complementario para obra civil y electromecánica.",
    bullets: ["Mantenimiento general", "Adecuaciones técnicas", "Soporte en sitio"],
    icon: "Wrench",
  },

  // ✅ NUEVO (pedido)
  {
    title: "Render y Diseño Arquitectónico",
    description: "Diseño, documentación y visualización 3D para presentar y ejecutar proyectos con claridad.",
    bullets: [
      "Renders y visualizaciones 3D",
      "Planos arquitectónicos",
      "Documentación técnica y especificaciones",
      "Coordinación e integración de especialidades",
    ],
    icon: "Building2",
  },

  // ✅ NUEVO (pedido)
  {
    title: "Sistemas sanitarios",
    description: "Instalación y adecuaciones sanitarias para edificaciones y obras civiles.",
    bullets: ["Redes sanitarias (aguas negras)", "Acueductos / agua potable", "Instalaciones y pruebas"],
    icon: "Pipe",
  },

  // ✅ NUEVO (pedido)
  {
    title: "Sistemas pluviales",
    description: "Soluciones de drenaje pluvial para captación y conducción eficiente.",
    bullets: ["Drenajes pluviales", "Canalizaciones y bajantes", "Adecuaciones y mantenimiento"],
    icon: "Droplets",
  },

  {
    title: "Sistema de gas licuado",
    description: "Instalación y adecuación de redes y equipos de gas según necesidad del proyecto.",
    bullets: ["Instalación y adecuación", "Pruebas y ajustes", "Soporte en sitio"],
    icon: "Fan",
  },

  // ✅ ACTUALIZADO (pedido)
  {
    title: "Sistemas contra incendio",
    description: "Instalación, adecuación y soporte para sistemas húmedos contra incendio.",
    bullets: [
      "BIE, rociadores e hidrantes",
      "Sistema húmedo contra incendio",
      "Suministro, Instalación y Certificación de Bombas Contra Incendio",
      "Sistema contra incendio C900",
    ],
    icon: "Flame",
  },
];

export type Project = {
  title: string;
  subtitle: string;
  image: string; // ruta en /public
};

export const PROJECTS: Project[] = [
  {
    title: "Sistema Húmedo contra Incendio en la Unidad de Hemodiálisis Chitré–Soná",
    subtitle: "Instalación y adecuación del sistema húmedo contra incendio",
    image: "/images/projects/project-01.jpg",
  },
  {
    title: "Sistema Eléctrico y Sistemas Especiales — Unidad Hemodiálisis (Chitré, Santiago, Soná)",
    subtitle: "Ejecución eléctrica y sistemas especiales",
    image: "/images/projects/project-02.jpg",
  },
  {
    title: "Construcción de Edificio Eléctrico (Santiago, Veraguas)",
    subtitle: "Obra civil e infraestructura",
    image: "/images/projects/project-03.jpg",
  },
  {
    title: "Residencial Villa Venecia (Chitré, Herrera)",
    subtitle: "Construcción y acabados",
    image: "/images/projects/project-04.jpg",
  },

  // ✅ ESTA ES LA QUE CAMBIAS por tu foto NUEVA (la 5ta imagen que mandaste)
  {
    title: "Sistema de Drenaje Estadio Ramón Cantera (Aguadulce)",
    subtitle: "Sistema pluvial / drenaje",
    image: "/images/projects/project-drenaje-ramon-cantera.jpg",
  },

  {
    title: "Remodelación de Parque Pocrí (Coclé)",
    subtitle: "Mejoras y adecuaciones",
    image: "/images/projects/project-06.jpg",
  },
  {
    title: "Paradores fotográficos, pavimentación, acabados, impermeabilización de losas, cobertizos",
    subtitle: "Obra civil",
    image: "/images/projects/project-07.jpg",
  },
  {
    title: "Estructura para tanque de agua",
    subtitle: "Estructura y soporte",
    image: "/images/projects/project-08.jpg",
  },
  {
    title: "Proyecto Terminal de Transporte Penonomé: sistema sanitario / acueducto potable / sistema contra incendio",
    subtitle: "Sanitario, acueducto y contra incendio",
    image: "/images/projects/project-09.jpg",
  },

  // ✅ SWAP pedido:
  // Esta (Toco Castillo) ahora usa la MISMA imagen que antes tenía “Drenaje” (project-05).
  {
    title: "Proyecto Estadio Toco Castillo: sistema húmedo contra incendio",
    subtitle: "Sistema húmedo contra incendio",
    image: "/images/projects/project-05.jpg",
  },

  {
    title: "Proyecto Museo Julio Gomez Ruiz: mejoras al museo",
    subtitle: "Remodelación / mejoras",
    image: "/images/projects/project-11.jpg",
  },
  {
    title: "Servicios de instalación de sistema de gas licuado (PH Punta Prieta / PH City Tower)",
    subtitle: "Instalación de gas licuado",
    image: "/images/projects/project-12.jpg",
  },
];
