"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SafeImage from "@/components/shared/safe-image";
import DiagonalAccent from "@/components/shared/diagonal-accent";
import { contact, site } from "@/content/site";
import { telLink, waLink } from "@/lib/links";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";

const slides = [
  { src: "/images/hero/slide-1.jpg", k: "s1" },
  { src: "/images/hero/slide-2.jpg", k: "s2" },
  { src: "/images/hero/slide-3.jpg", k: "s3" }
];

export default function Hero() {
  const wa = waLink("50768527127", "Hola, quiero cotizar un proyecto con PROSELEC, S.A.");
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <SafeImage src={slides[0].src} alt="Hero" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-hero" />
        <DiagonalAccent />
      </div>

      <div className="container relative py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="text-sm text-slate-200/80">{site.shortName} · Fundada {site.founded}</p>

          <h1 className="mt-4 font-display text-4xl md:text-6xl leading-[1.05] text-white">
            PROYECTOS Y SERVICIOS ELECTROMECÁNICOS, S.A.
          </h1>

          <p className="mt-5 text-slate-200/85 md:text-lg max-w-2xl">
            Empresa panameña enfocada en obras civiles y electromecánicas. Diseñamos, planificamos,
            construimos y damos mantenimiento con enfoque en calidad, seguridad y confianza.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="rounded-2xl shadow-glow">
              <a href={wa} target="_blank" rel="noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" /> Cotizar por WhatsApp
              </a>
            </Button>
            <Button variant="outline" asChild className="rounded-2xl bg-white/10 text-white border-white/20 hover:bg-white/15">
              <a href={telLink(contact.phones[0])}>
                <Phone className="mr-2 h-4 w-4" /> Llamar
              </a>
            </Button>
            <Button variant="secondary" asChild className="rounded-2xl">
              <Link href="/servicios">
                Ver servicios <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            <div className="glass rounded-2xl p-4 shadow-soft">
              <p className="text-xs text-muted-foreground">Fundada</p>
              <p className="font-display text-xl">{site.founded}</p>
            </div>
            <div className="glass rounded-2xl p-4 shadow-soft">
              <p className="text-xs text-muted-foreground">Áreas</p>
              <p className="font-display text-xl">6</p>
            </div>
            <div className="glass rounded-2xl p-4 shadow-soft">
              <p className="text-xs text-muted-foreground">Cobertura</p>
              <p className="font-display text-xl">Panamá</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
