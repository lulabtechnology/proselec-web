// components/site/navbar.tsx
import Link from "next/link";
import Brand from "@/components/site/brand";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/proselec";
import { waLink } from "@/lib/links";

export default function Navbar() {
  const phoneDigits = (CONTACT.phoneE164 ?? "").replace(/[^\d]/g, "");
  const telHref = `tel:${CONTACT.phoneE164}`;
  const waHref = waLink(phoneDigits, "Hola, quiero cotizar un proyecto con PROSELEC, S.A.");

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur">
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
          <Button asChild variant="outline" className="hidden sm:inline-flex">
            <a href={telHref} aria-label="Llamar">Llamar</a>
          </Button>

          <Button asChild className="bg-sky-600 hover:bg-sky-700">
            <a href={waHref} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
