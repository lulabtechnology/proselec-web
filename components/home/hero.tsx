"use client";

import HeroSlider from "@/components/home/hero-slider";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { contact, site } from "@/content/site";
import { telLink, waLink } from "@/lib/links";
import { motion } from "framer-motion";

export default function Hero() {
  const wa = waLink("50768527127", "Hola, quiero cotizar un proyecto con PROSELEC, S.A.");

  const slides = [
    {
      key: "s1",
      image: "/images/hero/slide-1.jpg",
      eyebrow: `${site.shortName} · Fundada ${site.founded}`,
      title: "PROYECTOS Y SERVICIOS ELECTROMECÁNICOS, S.A.",
      subtitle:
        "Empresa panameña enfocada en obras civiles y electromecánicas. Diseño, planificación, construcción y mantenimiento con enfoque en calidad y seguridad."
    },
    {
      key: "s2",
      image: "/images/hero/slide-2.jpg",
      eyebrow: "Obras Civiles · Arquitectura · Electromecánica",
      title: "Ejecución profesional, resultados confiables.",
      subtitle:
        "Soluciones integrales para edificios, plazas comerciales, oficinas, parques y naves industriales, además de instalaciones especializadas."
    },
    {
      key: "s3",
      image: "/images/hero/slide-3.jpg",
      eyebrow: "Cotiza hoy",
      title: "Ingeniería aplicada a tu proyecto.",
      subtitle:
        "Atención directa por WhatsApp o llamada. Te acompañamos desde el estudio técnico hasta la entrega y mantenimiento."
    }
  ];

  return (
    <section className="relative">
      <HeroSlider slides={slides} />

      <div className="absolute inset-x-0 bottom-10 md:bottom-12">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-3"
          >
            <Button asChild className="rounded-2xl shadow-glow">
              <a href={wa} target="_blank" rel="noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" /> Cotizar por WhatsApp
              </a>
            </Button>
            <Button
              variant="outline"
              asChild
              className="rounded-2xl bg-white/10 text-white border-white/20 hover:bg-white/15"
            >
              <a href={telLink(contact.phones[0])}>
                <Phone className="mr-2 h-4 w-4" /> Llamar
              </a>
            </Button>
            <Button variant="secondary" asChild className="rounded-2xl">
              <Link href="/servicios">
                Ver servicios <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
