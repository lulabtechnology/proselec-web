"use client";

import HeroSlider from "@/components/home/hero-slider";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { contact, site } from "@/content/site";
import { telLink, waLink } from "@/lib/links";
import { motion } from "framer-motion";

export default function Hero() {
  const wa = waLink(contact.whatsappDigits, "Hola, quiero cotizar un proyecto con PROSELEC, S.A.");

  // ✅ OJO: rutas con "/" porque están en /public
  const slides = [
    {
      key: "s1",
      image: "/images/hero/slide-1.jpg",
      eyebrow: `${site.shortName} · Fundada`,
      title: "PROYECTOS Y SERVICIOS ELECTROMECÁNICOS, S.A.",
      subtitle:
        "Empresa panameña enfocada en obras civiles y electromecánicas. Diseño, planificación, construcción y mantenimiento.",
    },
    {
      key: "s2",
      image: "/images/hero/slide-2.jpg",
      eyebrow: "Obras Civiles · Arquitectura · Electromecánica",
      title: "Ejecución profesional, resultados confiables.",
      subtitle:
        "Soluciones integrales para edificios, plazas comerciales, oficinas, parques y naves industriales, cumpliendo tiempos y estándares.",
    },
    {
      key: "s3",
      image: "/images/hero/slide-3.jpg",
      eyebrow: "Cotiza hoy",
      title: "Sistema contra incendios, eléctricos y obras civiles.",
      subtitle:
        "Atendemos proyectos a nivel nacional. Contáctanos para evaluar tu requerimiento y prepararte una propuesta formal.",
    },
  ];

  return (
    <section className="relative overflow-hidden">
      <HeroSlider slides={slides} />

      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-10 pt-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mt-4 flex flex-wrap items-center gap-3"
        >
          <Button asChild className="gap-2">
            <Link href="/contacto">
              Cotizar <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>

          <Button asChild variant="outline" className="gap-2">
            <a href={wa} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </Button>

          <Button asChild variant="outline" className="gap-2">
            <a href={telLink(contact.phoneE164)} aria-label="Llamar">
              <Phone className="h-4 w-4" />
              Llamar
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
