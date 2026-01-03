"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Slide = {
  kicker: string;
  title: string;
  desc: string;
  image?: string; // opcional
};

const SLIDES: Slide[] = [
  {
    kicker: "PROSELEC, S.A.",
    title: "Obras civiles y soluciones electromecánicas",
    desc: "Diseño, ejecución y mantenimiento con enfoque en calidad, seguridad y cumplimiento.",
    image: "/images/hero/hero-01.jpg",
  },
  {
    kicker: "Sistemas Especializados",
    title: "Eléctrico, fontanería, gas y contra incendio",
    desc: "Instalación, certificación y puesta en marcha para proyectos residenciales, comerciales e industriales.",
    image: "/images/hero/hero-02.jpg",
  },
  {
    kicker: "Experiencia Comprobada",
    title: "Proyectos ejecutados en todo Panamá",
    desc: "Entregas responsables con supervisión técnica, control de calidad y cronograma.",
    image: "/images/hero/hero-03.jpg",
  },
];

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [fading, setFading] = useState(false);

  const slide = useMemo(() => SLIDES[idx], [idx]);

  useEffect(() => {
    const t = setInterval(() => {
      go(idx + 1);
    }, 6500);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx]);

  function go(next: number) {
    const n = (next + SLIDES.length) % SLIDES.length;
    setFading(true);
    setTimeout(() => {
      setIdx(n);
      setFading(false);
    }, 220);
  }

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        {/* Fondo base pro aunque no existan imágenes */}
        <div className="h-full w-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800" />

        {/* Imagen opcional */}
        {slide.image ? (
          <div
            className={`absolute inset-0 bg-center bg-cover transition-opacity duration-700 ${
              fading ? "opacity-0" : "opacity-40"
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ) : null}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/70" />
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28">
        <div className={`transition-opacity duration-700 ${fading ? "opacity-0" : "opacity-100"}`}>
          <p className="text-sm text-white/75">{slide.kicker}</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            {slide.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
            {slide.desc}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/servicios"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-white/90 transition"
            >
              Ver servicios
            </Link>
            <Link
              href="/proyectos"
              className="inline-flex items-center justify-center rounded-2xl border border-white/30 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              Ver proyectos
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center rounded-2xl border border-white/30 bg-transparent px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              Contacto
            </Link>
          </div>
        </div>

        <div className="mt-10 flex gap-2">
          <button
            type="button"
            onClick={() => go(idx - 1)}
            className="rounded-xl border border-white/20 bg-white/5 px-3 py-2 text-xs font-semibold text-white hover:bg-white/10 transition"
          >
            Anterior
          </button>
          <button
            type="button"
            onClick={() => go(idx + 1)}
            className="rounded-xl border border-white/20 bg-white/5 px-3 py-2 text-xs font-semibold text-white hover:bg-white/10 transition"
          >
            Siguiente
          </button>

          <div className="ml-2 flex items-center gap-1">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => go(i)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  i === idx ? "bg-white" : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Ir al slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
