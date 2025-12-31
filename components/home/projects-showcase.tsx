"use client";

import Reveal from "@/components/shared/reveal";
import { projects } from "@/content/site";
import { Card, CardContent } from "@/components/ui/card";
import SafeImage from "@/components/shared/safe-image";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

function ProjectCard({ title, idx, featured }: { title: string; idx: number; featured?: boolean }) {
  const img = `/images/projects/project-${String(idx + 1).padStart(2, "0")}.jpg`;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="cursor-pointer overflow-hidden rounded-2xl shadow-soft hover:shadow-glow transition">
          <div className={`relative ${featured ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
            <SafeImage src={img} alt={title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white font-medium leading-snug">{title}</p>
              <p className="mt-1 text-xs text-white/75">Ver detalle</p>
            </div>
          </div>
          <CardContent className="p-5">
            <p className="text-sm text-muted-foreground">
              (Imagen referencial: sube tu foto en la ruta indicada)
            </p>
          </CardContent>
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

export default function ProjectsShowcase() {
  const list = projects.slice(0, 5); // 1 featured + 4

  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Obras ejecutadas</p>
              <h2 className="mt-2 font-display text-3xl md:text-4xl">Proyectos</h2>
              <p className="mt-3 text-muted-foreground max-w-2xl">
                Selección destacada. Haz clic para ampliar.
              </p>
            </div>
            <Button asChild variant="outline" className="rounded-2xl hidden md:inline-flex">
              <Link href="/proyectos">
                Ver todos <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal>
              <ProjectCard title={list[0]} idx={0} featured />
            </Reveal>
          </div>

          <div className="md:col-span-5 grid gap-6">
            {list.slice(1).map((p, i) => (
              <Reveal key={p} delay={i * 0.04}>
                <ProjectCard title={p} idx={i + 1} />
              </Reveal>
            ))}
          </div>

          <div className="md:hidden">
            <Button asChild variant="outline" className="rounded-2xl w-full">
              <Link href="/proyectos">
                Ver todos los proyectos <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
