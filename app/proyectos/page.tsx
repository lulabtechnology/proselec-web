import Image from "next/image";
import { PROJECTS } from "@/lib/proselec";

export default function ProyectosPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold text-slate-900">Proyectos</h1>
      <p className="mt-2 text-slate-600">
        Una muestra de trabajos realizados en distintas áreas y ubicaciones.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <article
            key={`${p.title}-${i}`}
            className="overflow-hidden rounded-2xl border bg-white shadow-sm"
          >
            <div className="relative h-48 w-full">
              <Image
                src={p.image}
                alt={p.title}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover"
              />
            </div>

            <div className="p-4">
              <div className="mb-2 inline-flex rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
                {p.category}
              </div>
              <h3 className="text-base font-semibold leading-snug text-slate-900">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{p.subtitle}</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
