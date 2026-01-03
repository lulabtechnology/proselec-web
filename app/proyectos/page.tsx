// app/proyectos/page.tsx
import { PROJECTS } from "@/lib/proselec";

export const metadata = {
  title: "Proyectos | PROSELEC, S.A.",
};

export default function ProyectosPage() {
  return (
    <main className="py-14">
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="text-3xl font-semibold">Proyectos</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Una muestra de trabajos realizados en distintas áreas y ubicaciones.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {PROJECTS.map((p) => (
            <div key={p.title} className="overflow-hidden rounded-xl border bg-background">
              <div className="aspect-[16/10] bg-muted">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-4">
                <div className="font-semibold">{p.title}</div>
                <div className="mt-1 text-sm text-muted-foreground">{p.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
