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

function getPhoneHref() {
  // Preferimos E.164 si existe
  const e164 = (CONTACT as any)?.phoneE164 as string | undefined;
  const display = (CONTACT as any)?.phoneDisplay as string | undefined;

  const raw = e164 || display || "";
  // normalizar por si viene con espacios o guiones
  const normalized = raw.replace(/[^\d+]/g, "");
  return normalized ? `tel:${normalized}` : "tel:+50768527127";
}

function getWhatsappHref() {
  const wa = (CONTACT as any)?.whatsapp as string | undefined;
  return wa || "https://wa.me/50768527127";
}

export default function Navbar() {
  const phoneHref = getPhoneHref();
  const whatsappHref = getWhatsappHref();

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
            <a href={phoneHref} aria-label="Llamar">
              Llamar
            </a>
          </Button>

          <Button asChild>
            <a href={whatsappHref} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
