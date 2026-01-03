import Link from "next/link";
import Hero from "@/components/sections/home/Hero";
import Reveal from "@/components/motion/Reveal";

export default function HomePage() {
  return (
    <main>
      <Hero />

      <section className="mx-auto max-w-6xl px-4 py-14">
        <Reveal>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold text-slate-900">Calidad & seguridad</div>
              <p className="mt-2 text-sm text-slate-600">
                Ejecución responsable con supervisión técnica y control de calidad.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold text-slate-900">Diseño & planos</div>
              <p className="mt-2 text-sm text-slate-600">
                Planificación, documentación y soluciones eficientes para tu obra.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold text-slate-900">Instalaciones</div>
              <p className="mt-2 text-sm text-slate-600">
                Eléctrico, fontanería, gas y contra incendio para proyectos de todo tipo.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-12">
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 shadow-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold tracking-tight text-slate-900">
                  Servicios de PROSELEC, S.A.
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  Conoce todo lo que hacemos: obras civiles, sistemas eléctricos, plomería, gas y contra incendio.
                </p>
              </div>
              <div className="flex gap-3">
                <Link
                  href="/servicios"
                  className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition"
                >
                  Ver servicios
                </Link>
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
                >
                  Contacto
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
