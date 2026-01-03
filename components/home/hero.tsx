"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";

const SLIDES = [
  { src: "/images/hero/slide-1.jpg", alt: "Proyecto PROSELEC 1" },
  { src: "/images/hero/slide-2.jpg", alt: "Proyecto PROSELEC 2" },
  { src: "/images/hero/slide-3.jpg", alt: "Proyecto PROSELEC 3" },
];

export default function Hero() {
  const slides = useMemo(() => SLIDES, []);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[560px] w-full sm:h-[620px]">
        {slides.map((s, i) => (
          <div
            key={s.src}
            className={[
              "absolute inset-0 transition-opacity duration-1000 ease-in-out",
              i === idx ? "opacity-100" : "opacity-0",
            ].join(" ")}
          >
            <Image
              src={s.src}
              alt={s.alt}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}

        {/* overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-white/0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,.18),transparent_40%)]" />

        {/* content */}
        <div className="absolute inset-0">
          <div className="mx-auto flex h-full max-w-6xl items-center px-4">
            <div className="max-w-2xl">
              <p className="mb-3 inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs text-white/90 ring-1 ring-white/15">
                Obras civiles • Electromecánica • Sistemas especiales
              </p>

              <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Soluciones integrales en construcción e instalaciones
              </h1>

              <p className="mt-4 text-pretty text-base text-white/85 sm:text-lg">
                Diseño, ejecución y mantenimiento con enfoque en seguridad, cumplimiento técnico y
                entrega a tiempo.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild className="h-11 px-6">
                  <Link href="/contacto">Cotizar</Link>
                </Button>
                <Button asChild variant="outline" className="h-11 px-6 bg-white/10 text-white ring-white/20 hover:bg-white/15">
                  <Link href="/proyectos">Ver proyectos</Link>
                </Button>
              </div>

              {/* mini dots */}
              <div className="mt-7 flex gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    className={[
                      "h-2 w-2 rounded-full transition-all",
                      i === idx ? "bg-white" : "bg-white/40 hover:bg-white/60",
                    ].join(" ")}
                    aria-label={`Ir al slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
