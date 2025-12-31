"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import SafeImage from "@/components/shared/safe-image";
import DiagonalAccent from "@/components/shared/diagonal-accent";
import { cn } from "@/lib/utils";

type Slide = {
  key: string;
  image: string;
  eyebrow?: string;
  title: string;
  subtitle: string;
};

export default function HeroSlider({
  slides,
  intervalMs = 6500,
  className
}: {
  slides: Slide[];
  intervalMs?: number;
  className?: string;
}) {
  const [index, setIndex] = useState(0);

  const safeSlides = useMemo(() => slides.filter(Boolean), [slides]);
  const active = safeSlides[index % safeSlides.length];

  useEffect(() => {
    if (safeSlides.length <= 1) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % safeSlides.length), intervalMs);
    return () => clearInterval(t);
  }, [safeSlides.length, intervalMs]);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.key}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <SafeImage src={active.image} alt={active.title} fill className="object-cover" priority />
            <div className="absolute inset-0 bg-hero" />
            <DiagonalAccent />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content overlay */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/35 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/45 to-transparent" />

        {/* Progress bar */}
        {safeSlides.length > 1 && (
          <div className="absolute left-0 right-0 top-0 z-10">
            <div className="h-[2px] bg-white/10" />
            <motion.div
              key={`${active.key}-progress`}
              className="h-[2px] bg-white/70"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: intervalMs / 1000, ease: "linear" }}
            />
          </div>
        )}

        {/* Dots */}
        {safeSlides.length > 1 && (
          <div className="absolute bottom-6 right-4 z-10 hidden md:flex items-center gap-2">
            {safeSlides.map((s, i) => (
              <button
                key={s.key}
                onClick={() => setIndex(i)}
                className={cn(
                  "h-2.5 w-2.5 rounded-full border border-white/40 transition",
                  i === index ? "bg-white/85" : "bg-white/15 hover:bg-white/30"
                )}
                aria-label={`Ir al slide ${i + 1}`}
              />
            ))}
          </div>
        )}

        {/* Slide text */}
        <div className="container py-20 md:py-28">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${active.key}-text`}
              initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(8px)" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl"
            >
              {active.eyebrow && (
                <p className="text-sm text-slate-200/80">{active.eyebrow}</p>
              )}
              <h1 className="mt-4 font-display text-4xl md:text-6xl leading-[1.05] text-white">
                {active.title}
              </h1>
              <p className="mt-5 text-slate-200/85 md:text-lg max-w-2xl">
                {active.subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Scroll cue */}
          <motion.div
            className="mt-10 hidden md:flex items-center gap-3 text-white/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.div
              className="h-10 w-6 rounded-full border border-white/30 grid place-items-center"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="h-2 w-1 rounded-full bg-white/60" />
            </motion.div>
            <span className="text-sm">Desliza para explorar</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
