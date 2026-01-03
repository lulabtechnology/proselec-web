// content/projects.ts
export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  image: string; // "/images/projects/..."
  tag?: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "proyecto-01",
    title: "Sistema Húmedo contra Incendio en la Unidad de Hemodiálisis Chitré–Soná",
    subtitle: "Instalación y adecuación del sistema húmedo contra incendio",
    image: "/images/projects/project-01.jpg",
    tag: "Contra incendio",
  },
  {
    slug: "proyecto-02",
    title: "Sistema Eléctrico y Sistemas Especiales — Unidad Hemodiálisis (Chitré, Santiago, Soná)",
    subtitle: "Ejecución eléctrica y sistemas especiales",
    image: "/images/projects/project-02.jpg",
    tag: "Eléctrico",
  },
  {
    slug: "proyecto-03",
    title: "Construcción de Edificio Eléctrico (Santiago, Veraguas)",
    subtitle: "Obra civil e infraestructura",
    image: "/images/projects/project-03.jpg",
    tag: "Obra civil",
  },
  {
    slug: "proyecto-04",
    title: "Residencial Villa Venecia (Chitré, Herrera)",
    subtitle: "Construcción y acabados",
    image: "/images/projects/project-04.jpg",
    tag: "Residencial",
  },
  {
    slug: "proyecto-05",
    title: "Sistema de Drenaje (Proyecto 05)",
    subtitle: "Sistema pluvial / drenaje",
    image: "/images/projects/project-05.jpg",
    tag: "Drenaje",
  },
  {
    slug: "proyecto-06",
    title: "Remodelación de Parque (Proyecto 06)",
    subtitle: "Mejoras y adecuaciones",
    image: "/images/projects/project-06.jpg",
    tag: "Remodelación",
  },
  {
    slug: "proyecto-07",
    title: "Proyecto 07",
    subtitle: "Ejecución y adecuaciones",
    image: "/images/projects/project-07.jpg",
  },
  {
    slug: "proyecto-08",
    title: "Proyecto 08",
    subtitle: "Construcción / montaje",
    image: "/images/projects/project-08.jpg",
  },
  {
    slug: "proyecto-09",
    title: "Proyecto 09",
    subtitle: "Obra civil",
    image: "/images/projects/project-09.jpg",
  },
  {
    slug: "proyecto-10",
    title: "Proyecto 10",
    subtitle: "Electromecánica",
    image: "/images/projects/project-10.jpg",
  },
  {
    slug: "proyecto-11",
    title: "Proyecto 11",
    subtitle: "Construcción / acabados",
    image: "/images/projects/project-11.jpg",
  },
  {
    slug: "proyecto-12",
    title: "Proyecto 12",
    subtitle: "Fachada / terminaciones",
    image: "/images/projects/project-12.jpg",
  },

  // ✅ LOS 2 NUEVOS QUE TE PIDIERON:
  {
    slug: "render-arquitectonico",
    title: "Diseños y Render Arquitectónico",
    subtitle: "Modelado, visualización y presentación de propuestas arquitectónicas",
    image: "/images/projects/project-13.jpg",
    tag: "Arquitectura",
  },
  {
    slug: "bombas-contra-incendio",
    title: "Suministro, Instalación y Certificación de Bombas Contra Incendio",
    subtitle: "Montaje, pruebas y certificación del sistema de bombeo contra incendio",
    image: "/images/projects/project-14.jpg",
    tag: "Contra incendio",
  },
];
