"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type Slide = {
  key: string;
  image: string; // debe iniciar con "/"
  eyebrow?: string;
  title: string;
  subtitle: string;
};

export default function HeroSlider({ slides }: { slides: Slide[] }) {
  const safeSlides = useMemo(() => slides.filter(Boolean), [slides]);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (safeSlides.length <= 1) return;
    const t = setInterval(() => setIdx((p) => (p + 1) % safeSlides.length), 6500);
    return () => clearInterval(t);
  }, [safeSlides.length]);

  const current = safeSlides[idx];

  const prev = () => setIdx((p) => (p - 1 + safeSlides.length) % safeSlides.length);
  const next = () => setIdx((p) => (p + 1) % safeSlides.length);

  if (!current) return null;

  return (
    <div className="relative min-h-[520px] w-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={current.key}
          initial={{ opacity: 0.0, scale: 1.02 }}
          animate={{ opacity: 1.0, scale: 1.0 }}
          exit={{ opacity: 0.0, scale: 1.02 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={current.image}
            alt={current.title}
            fill
            priority={idx === 0}
            sizes="100vw"
            className="object-cover"
          />

          {/* overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/50 to-slate-950/20" />
        </motion.div>
      </AnimatePresence>

      {/* texto */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-16">
        <motion.div
          key={`t-${current.key}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="max-w-2xl"
        >
          {current.eyebrow && (
            <div className="mb-3 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90 ring-1 ring-white/15">
              {current.eyebrow}
            </div>
          )}
          <h1 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            {current.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-white/85 md:text-lg">
            {current.subtitle}
          </p>
        </motion.div>
      </div>

      {/* controles */}
      {safeSlides.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white ring-1 ring-white/20 backdrop-blur hover:bg-white/20"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={next}
            className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white ring-1 ring-white/20 backdrop-blur hover:bg-white/20"
            aria-label="Siguiente"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2">
            {safeSlides.map((s, i) => (
              <button
                key={s.key}
                onClick={() => setIdx(i)}
                className={`h-2 w-2 rounded-full ring-1 ring-white/30 ${
                  i === idx ? "bg-white" : "bg-white/30"
                }`}
                aria-label={`Ir a slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
