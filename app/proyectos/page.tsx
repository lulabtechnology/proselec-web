"use client";

import PageHero from "@/components/shared/page-hero";
import { projects } from "@/content/site";
import Reveal from "@/components/shared/reveal";
import SafeImage from "@/components/shared/safe-image";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";

function ProjectCard({ title, idx }: { title: string; idx: number }) {
  const img = `/images/projects/project-${String(idx + 1).padStart(2, "0")}.jpg`;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="cursor-pointer overflow-hidden rounded-2xl shadow-soft hover:shadow-glow transition">
          <div className="relative aspect-[4/3]">
            <SafeImage src={img} alt={title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white font-medium leading-snug">{title}</p>
              <p className="mt-1 text-xs text-white/75">Ver detalle</p>
            </div>
          </div>
        </Card>
      </DialogTrigger>

      <DialogContent className="max-w-4xl p-0 overflow-hidden rounded-2xl">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="font-display">{title}</DialogTitle>
        </DialogHeader>
        <div className="relative aspect-[16/9]">
          <SafeImage src={img} alt={title} fill className="object-cover" />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function ProjectsPage() {
  return (
    <main>
      <PageHero
        title="Obras ejecutadas"
        subtitle="Algunas obras y proyectos ejecutados por PROSELEC, S.A."
      />

      <section className="section">
        <div className="container grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <Reveal key={p} delay={idx * 0.03}>
              <ProjectCard title={p} idx={idx} />
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
