"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Slide = {
  key: string;
  image: string; // IMPORTANTE: debe ser "/images/..."
  eyebrow?: string;
  title?: string;
  subtitle?: string;
};

export default function HeroSlider({ slides }: { slides: Slide[] }) {
  const safeSlides = useMemo(() => slides?.filter(Boolean) ?? [], [slides]);
  const [i, setI] = useState(0);

  useEffect(() => {
    if (safeSlides.length <= 1) return;
    const t = setInterval(() => setI((v) => (v + 1) % safeSlides.length), 4500);
    return () => clearInterval(t);
  }, [safeSlides.length]);

  const current = safeSlides[i] ?? safeSlides[0];

  return (
    <div className="relative h-[520px] w-full overflow-hidden md:h-[640px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={current?.key}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Image
            src={current.image}
            alt="Hero"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* overlay para que el texto siempre se lea */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/10" />
          <div className="absolute inset-0 bg-black/10" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
