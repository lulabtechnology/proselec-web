import Link from "next/link";
import { Building2, Droplets, Fan, Flame, HardHat, Wrench, Zap } from "lucide-react";
import Reveal from "@/components/motion/Reveal";

type ServiceBlock = {
  title: string;
  icon: any;
  items: string[];
};

const blocks: ServiceBlock[] = [
  {
    title: "Diseño arquitectónico, obras civiles y construcción",
    icon: Building2,
    items: [
      "Diseño arquitectónico integral (planos, renders y documentación técnica).",
      "Diseño estructural y obras civiles (cálculo y cumplimiento normativo).",
      "Construcción y ejecución de proyectos (planificación a entrega final).",
      "Supervisión y gerencia de obras (plazos, costos, especificaciones).",
      "Remodelaciones y ampliaciones.",
      "Asesoría técnica, presupuestos y cronogramas.",
    ],
  },
  {
    title: "Sistemas eléctricos",
    icon: Zap,
    items: [
      "Diseño de sistemas eléctricos (planos y cálculos).",
      "Instalación de sistemas eléctricos (residencial, comercial e industrial).",
      "Mantenimiento preventivo/correctivo y corrección de fallas.",
      "Asesoría y certificación eléctrica (cumplimiento normativo).",
      "Infraestructura de redes y sistemas especiales.",
      "Sistema de ventilación / energía renovable (según proyecto).",
    ],
  },
  {
    title: "Fontanería (sanitario, potable y pluvial)",
    icon: Droplets,
    items: [
      "Diseño de sistemas de plomería (potable, residuales y pluviales).",
      "Instalación de sistemas sanitarios, potables y pluviales.",
      "Mantenimiento preventivo/correctivo (fugas, obstrucciones, reemplazos).",
      "Instalación de equipos y accesorios sanitarios (bombas, griferías, presión).",
      "Sistemas pluviales y drenajes (incluye obras complementarias).",
    ],
  },
  {
    title: "Sistema de gas licuado",
    icon: Fan,
    items: [
      "Sistema de gas residencial y comercial.",
      "Estacas principales y ramales de distribución.",
      "Diagnóstico de fugas.",
      "Certificaciones y cumplimiento de seguridad.",
    ],
  },
  {
    title: "Sistema húmedo contra incendio (incluye bombas)",
    icon: Flame,
    items: [
      "Diseño conforme a normas NFPA (según alcance del proyecto).",
      "Instalación de redes: tuberías, rociadores, gabinetes y accesorios.",
      "Suministro/instalación de bombas contra incendio + jockey pump + tableros.",
      "Pruebas, puesta en marcha y mantenimiento preventivo/correctivo.",
      "Inspección y certificación para habilitación del sistema.",
    ],
  },
  {
    title: "C900 contra incendio (cuando aplique)",
    icon: HardHat,
    items: [
      "Instalación de redes contra incendio con tubería C900 (según ingeniería).",
      "Accesorios, válvulas, soportes y pruebas hidrostáticas.",
      "Documentación y entrega técnica.",
    ],
  },
  {
    title: "Servicios auxiliares",
    icon: Wrench,
    items: [
      "Estudio y diseño de ingeniería para proyectos de instalaciones.",
      "Desarrollo de planos y documentación técnica.",
      "Mantenimiento y asistencia técnica a proyectos y obras.",
      "Asesoría profesional para toma de decisiones.",
    ],
  },
];

export default function ServiciosPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Servicios
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            Soluciones integrales para proyectos residenciales, comerciales e industriales.
          </p>
        </div>

        <Link
          href="/contacto"
          className="hidden sm:inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition"
        >
          Cotizar
        </Link>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {blocks.map((b) => {
          const Icon = b.icon;
          return (
            <Reveal key={b.title}>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-base font-semibold text-slate-900">{b.title}</h2>
                </div>

                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {b.items.map((it) => (
                    <li key={it} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>

      <div className="mt-10 sm:hidden">
        <Link
          href="/contacto"
          className="inline-flex w-full items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition"
        >
          Cotizar
        </Link>
      </div>
    </main>
  );
}
