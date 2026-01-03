// components/site/navbar.tsx
import Link from "next/link";
import Brand from "@/components/site/brand";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/proselec";

const NAV = [
  { href: "/", label: "Inicio" },
  { href: "/sobre-nosotros", label: "Sobre nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Brand />

        <nav className="hidden items-center gap-6 md:flex">
          {NAV.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className="text-sm text-slate-600 hover:text-slate-900"
            >
              {i.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="outline" className="hidden sm:inline-flex">
            <a href={`tel:${CONTACT.phone}`} aria-label="Llamar">
              Llamar
            </a>
          </Button>
          <Button asChild>
            <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
