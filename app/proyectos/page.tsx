import Image from "next/image";
import { PROJECTS } from "@/content/projects";

export default function ProyectosPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Proyectos</h1>
      <p className="mt-2 text-muted-foreground">
        Una muestra de trabajos realizados en distintas áreas y ubicaciones.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p) => (
          <article
            key={p.slug}
            className="overflow-hidden rounded-2xl border bg-white shadow-sm"
          >
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>

            <div className="p-5">
              <h3 className="font-semibold leading-snug">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.subtitle}</p>

              {p.tag ? (
                <div className="mt-4 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">
                  {p.tag}
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
