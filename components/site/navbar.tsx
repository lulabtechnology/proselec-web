"use client";

import Link from "next/link";
import Brand from "@/components/site/brand";
import { contact } from "@/content/site";
import { telLink, waLink } from "@/lib/links";

export default function Navbar() {
  const wa = waLink(contact.whatsappDigits, "Hola, quiero cotizar un proyecto con PROSELEC, S.A.");
  const call = telLink(contact.phoneE164);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Brand />

        <nav className="hidden items-center gap-6 md:flex">
          <Link className="text-sm text-slate-700 hover:text-slate-900" href="/">Inicio</Link>
          <Link className="text-sm text-slate-700 hover:text-slate-900" href="/sobre-nosotros">Sobre nosotros</Link>
          <Link className="text-sm text-slate-700 hover:text-slate-900" href="/servicios">Servicios</Link>
          <Link className="text-sm text-slate-700 hover:text-slate-900" href="/proyectos">Proyectos</Link>
          <Link className="text-sm text-slate-700 hover:text-slate-900" href="/contacto">Contacto</Link>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={call}
            className="hidden rounded-xl border px-4 py-2 text-sm font-semibold md:inline-flex"
            aria-label="Llamar"
          >
            Llamar
          </a>
          <a
            href={wa}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-700"
            aria-label="WhatsApp"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
