// lib/proselec.ts
import { contact, site } from "@/content/site";

export const SITE = site;
export const CONTACT = contact;

export type Project = {
  title: string;
  subtitle: string;
  category: string;
  image: string; // SIEMPRE con "/" al inicio
};

export const PROJECTS: Project[] = [
  // ✅ NUEVOS (sube estas 2 imágenes como project-13 y project-14)
  {
    title: "Diseños y Render Arquitectónico",
    subtitle: "Modelado y visualización para presentación profesional de proyectos.",
    category: "Arquitectura",
    image: "/images/projects/project-13.jpg",
  },
  {
    title: "Suministro, Instalación y Certificación de Bombas Contra Incendio",
    subtitle: "Montaje, pruebas y certificación conforme a normativa NFPA.",
    category: "Contra Incendio",
    image: "/images/projects/project-14.jpg",
  },

  // ✅ EXISTENTES (rutas ABSOLUTAS para que no se dañen en /proyectos)
  {
    title: "Sistema Húmedo contra Incendio en la Unidad de Hemodiálisis Chitré–Soná",
    subtitle: "Instalación y adecuación del sistema húmedo contra incendio.",
    category: "Contra Incendio",
    image: "/images/projects/project-01.jpg",
  },
  {
    title: "Sistema Eléctrico y Sistemas Especiales — Unidad Hemodiálisis (Chitré, Santiago, Soná)",
    subtitle: "Ejecución eléctrica y sistemas especiales.",
    category: "Electromecánica",
    image: "/images/projects/project-02.jpg",
  },
  {
    title: "Construcción de Edificio Eléctrico (Santiago, Veraguas)",
    subtitle: "Obra civil e infraestructura.",
    category: "Obra Civil",
    image: "/images/projects/project-03.jpg",
  },
  {
    title: "Residencial Villa Venecia (Chitré, Herrera)",
    subtitle: "Construcción y acabados.",
    category: "Obra Civil",
    image: "/images/projects/project-04.jpg",
  },
  {
    title: "Sistema de Drenaje Estadio Ramón Cantera (Aguadulce)",
    subtitle: "Sistema pluvial / drenaje.",
    category: "Obra Civil",
    image: "/images/projects/project-05.jpg",
  },
  {
    title: "Remodelación de Parque Pocrí (Coclé)",
    subtitle: "Mejoras y adecuaciones.",
    category: "Mantenimiento",
    image: "/images/projects/project-06.jpg",
  },
  {
    title: "Sistema de Gas Licuado — Edificio Eléctrico (Santiago)",
    subtitle: "Instalación y adecuación de sistema de gas.",
    category: "Gas",
    image: "/images/projects/project-07.jpg",
  },
  {
    title: "Instalación de Acueducto — Escuela de Las Peanas (Los Santos)",
    subtitle: "Tuberías, zanjas y accesorios.",
    category: "Obra Civil",
    image: "/images/projects/project-08.jpg",
  },
  {
    title: "Construcción / Remodelación — Estación de Bomberos (UNES)",
    subtitle: "Adecuaciones y obra civil.",
    category: "Obra Civil",
    image: "/images/projects/project-09.jpg",
  },
  {
    title: "Demolición Controlada de Estructuras",
    subtitle: "Demolición y retiro de material.",
    category: "Obra Civil",
    image: "/images/projects/project-10.jpg",
  },
  {
    title: "Construcción de Tanques y Estructuras Metálicas",
    subtitle: "Fabricación e instalación.",
    category: "Estructuras",
    image: "/images/projects/project-11.jpg",
  },
];
