import PageHero from "@/components/shared/page-hero";
import { projects } from "@/content/site";
import { Card, CardContent } from "@/components/ui/card";
import SafeImage from "@/components/shared/safe-image";

export const metadata = { title: "Proyectos" };

export default function ProjectsPage() {
  return (
    <main>
      <PageHero
        title="Obras ejecutadas"
        subtitle="Algunas obras y proyectos ejecutados por PROSELEC, S.A."
      />

      <section className="section">
        <div className="container grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <Card key={p} className="overflow-hidden rounded-2xl shadow-soft">
              <div className="relative aspect-[4/3]">
                <SafeImage
                  src={`/images/projects/project-${String(i + 1).padStart(2, "0")}.jpg`}
                  alt={p}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-5">
                <p className="font-medium leading-snug">{p}</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  (Imagen referencial: sube tu foto en la ruta indicada)
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
