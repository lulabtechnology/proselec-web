"use client";

import Reveal from "@/components/shared/reveal";
import { projects } from "@/content/site";
import { Card, CardContent } from "@/components/ui/card";
import SafeImage from "@/components/shared/safe-image";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export default function ProjectsShowcase() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <p className="text-sm text-muted-foreground">Obras ejecutadas</p>
          <h2 className="mt-2 font-display text-3xl md:text-4xl">Proyectos</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Galería referencial (sube tus fotos en las rutas indicadas). Click para ampliar.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {projects.slice(0, 6).map((p, i) => (
            <Reveal key={p} delay={i * 0.04}>
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="cursor-pointer overflow-hidden rounded-2xl shadow-soft hover:shadow-glow transition">
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
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-0 overflow-hidden rounded-2xl">
                  <DialogHeader className="p-6 pb-0">
                    <DialogTitle className="font-display">{p}</DialogTitle>
                  </DialogHeader>
                  <div className="relative aspect-[16/9]">
                    <SafeImage
                      src={`/images/projects/project-${String(i + 1).padStart(2, "0")}.jpg`}
                      alt={p}
                      fill
                      className="object-cover"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
