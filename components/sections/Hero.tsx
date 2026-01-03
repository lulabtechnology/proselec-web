"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { COMPANY, CONTACT } from "@/lib/proselec";

type Slide = {
  title: string;
  subtitle: string;
  image: string; // ruta en /public
};

function waLink(text: string) {
  const phone = CONTACT.phoneE164.replace("+", "");
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

export default function Hero() {
  const slides: Slide[] = useMemo(
    () => [
      {
        title: "PROYECTOS Y SERVICIOS ELECTROMECÁNICOS, S.A.",
        subtitle:
          "Empresa panameña fundada en 2011, enfocada en obras civiles, arquitectura y obras electromecánicas.",
        image: "/images/hero/slide-1.jpg",
      },
      {
        title: "Obras civiles, sanitarios y pluviales",
        subtitle:
          "Ejecución con enfoque en calidad, seguridad y cumplimiento de estándares técnicos.",
        image: "/images/hero/slide-2.jpg",
      },
      {
        title: "Sistemas contra incendio y bombas",
        subtitle:
          "Suministro, instalación y certificación. Soluciones confiables para proyectos comerciales e industriales.",
        image: "/images/hero/slide-3.jpg",
      },
    ],
    []
  );

  const [idx, setIdx] = useState(0);
  const [broken, setBroken] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const t = setInterval(() => setIdx((p) => (p + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, [slides.length]);

  const current = slides[idx];
  const telHref = `tel:${CONTACT.phoneE164}`;
  const whatsappHref = waLink("Hola, quiero una cotización. ¿Me ayudan por favor?");

  return (
    <section className="relative overflow-hidden border-b">
      {/* Fondo “premium” + diagonales */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-[-20%] h-[520px] w-[520px] rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="absolute -bottom-40 left-[-20%] h-[520px] w-[520px] rounded-full bg-blue-600/12 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(59,130,246,0.12),transparent_70%)]" />
        <div className="absolute -left-24 top-28 h-24 w-[520px] rotate-[-8deg] bg-gradient-to-r from-blue-600/25 to-cyan-400/10 blur-[1px]" />
        <div className="absolute -right-24 top-60 h-24 w-[520px] rotate-[10deg] bg-gradient-to-l from-cyan-500/20 to-blue-600/10 blur-[1px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          {/* Texto */}
          <div className="space-y-5">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 rounded-full border bg-background/70 px-3 py-1 text-xs text-muted-foreground backdrop-blur"
            >
              {COMPANY.name} • Fundada {COMPANY.foundedYear}
            </motion.p>

            <AnimatePresence mode="wait">
              <motion.div
                key={current.title}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-4"
              >
                <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
                  {current.title}
                </h1>
                <p className="text-base text-muted-foreground md:text-lg">
                  {current.subtitle}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="flex flex-wrap gap-2">
              <Button asChild className="rounded-2xl">
                <a href={whatsappHref} target="_blank" rel="noreferrer">
                  Cotizar por WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-2xl">
                <a href={telHref}>Llamar</a>
              </Button>
              <Button asChild variant="secondary" className="rounded-2xl">
                <Link href="/servicios">Ver servicios</Link>
              </Button>
            </div>

            <div className="grid gap-2 rounded-2xl border bg-background/60 p-4 text-sm text-muted-foreground backdrop-blur">
              <div className="font-medium text-foreground">Dirección</div>
              <div>{COMPANY.address}</div>
            </div>
          </div>

          {/* Imagen slider */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border bg-muted/30 shadow-sm">
              <div className="absolute inset-0">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.image}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.01 }}
                    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    {/* Imagen real */}
                    {!broken[current.image] && (
                      <motion.img
                        src={current.image}
                        alt={current.title}
                        className="h-full w-full object-cover"
                        style={{ height: "100%" }}
                        onError={() =>
                          setBroken((b) => ({ ...b, [current.image]: true }))
                        }
                        initial={{ y: 6 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                      />
                    )}

                    {/* Fallback si la imagen no existe */}
                    {broken[current.image] && (
                      <div className="h-full w-full bg-gradient-to-br from-slate-900/20 via-blue-900/10 to-cyan-700/10" />
                    )}

                    {/* Overlay para legibilidad */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="relative aspect-[16/11] md:aspect-[16/10]" />

              {/* Controles */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
                <div className="flex gap-2">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIdx(i)}
                      className={`h-2.5 w-2.5 rounded-full border transition ${
                        i === idx ? "bg-white/90" : "bg-white/30 hover:bg-white/50"
                      }`}
                      aria-label={`Slide ${i + 1}`}
                    />
                  ))}
                </div>

                <div className="rounded-full border bg-white/10 px-3 py-1 text-xs text-white backdrop-blur">
                  {idx + 1} / {slides.length}
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs text-muted-foreground">
              <div className="rounded-2xl border bg-background/60 p-3 backdrop-blur">
                <div className="text-base font-semibold text-foreground">2011</div>
                <div>Fundada</div>
              </div>
              <div className="rounded-2xl border bg-background/60 p-3 backdrop-blur">
                <div className="text-base font-semibold text-foreground">Civil</div>
                <div>Electromecánica</div>
              </div>
              <div className="rounded-2xl border bg-background/60 p-3 backdrop-blur">
                <div className="text-base font-semibold text-foreground">Rápido</div>
                <div>WhatsApp</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
