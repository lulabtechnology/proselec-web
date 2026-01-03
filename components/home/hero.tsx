"use client";

import Link from "next/link";
import HeroSlider from "@/components/home/hero-slider";
import { site, contact } from "@/content/site";
import { telLink, waLink } from "@/lib/links";

export default function Hero() {
  const wa = waLink(contact.whatsappDigits, "Hola, quiero cotizar un proyecto con PROSELEC, S.A.");
  const call = telLink(contact.phoneE164);

  const slides = [
    {
      key: "s1",
      image: "/images/hero/slide-1.jpg",
      eyebrow: `${site.shortName} · Fundada ${site.founded}`,
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
        "Soluciones integrales para edificios, plazas comerciales, oficinas, parques y naves industriales.",
    },
    {
      key: "s3",
      image: "/images/hero/slide-3.jpg",
      eyebrow: "Cotiza hoy",
      title: "Atención rápida y asesoría clara.",
      subtitle:
        "Cuéntanos tu necesidad y te orientamos con una propuesta según alcance, tiempos y presupuesto.",
    },
  ];

  return (
    <section className="relative">
      <HeroSlider slides={slides} />

      <div className="absolute inset-0">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="max-w-2xl text-white">
            <p className="text-sm opacity-90">{slides[0].eyebrow}</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
              {slides[0].title}
            </h1>
            <p className="mt-4 text-base opacity-90 md:text-lg">{slides[0].subtitle}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contacto"
                className="rounded-xl bg-white/90 px-5 py-3 text-sm font-semibold text-black hover:bg-white"
              >
                Cotizar
              </Link>

              <a
                href={wa}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-emerald-500/90 px-5 py-3 text-sm font-semibold text-black hover:bg-emerald-500"
              >
                WhatsApp
              </a>

              <a
                href={call}
                className="rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 hover:bg-white/15"
              >
                Llamar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
