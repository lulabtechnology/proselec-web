// components/site/navbar.tsx
import Link from "next/link";
import { Brand } from "@/components/site/brand";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/proselec";

const nav = [
  { href: "/", label: "Inicio" },
  { href: "/sobre-nosotros", label: "Sobre nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/contacto", label: "Contacto" },
];

function waLink(text: string) {
  const phone = CONTACT.phoneE164.replace("+", "");
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

export default function Navbar() {
  const telHref = `tel:${CONTACT.phoneE164}`;
  const whatsappHref = waLink("Hola, quiero una cotización. ¿Me ayudan por favor?");

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Brand />

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="text-sm text-muted-foreground hover:text-foreground">
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button asChild variant="outline">
            <a href={telHref}>Llamar</a>
          </Button>
          <Button asChild>
            <a href={whatsappHref} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </Button>
        </div>

        {/* Mobile menu (sin JS) */}
        <details className="md:hidden">
          <summary className="cursor-pointer list-none rounded-md border px-3 py-2 text-sm">
            Menú
          </summary>
          <div className="mt-2 grid gap-2 rounded-md border bg-background p-3">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className="rounded px-2 py-2 text-sm hover:bg-accent">
                {n.label}
              </Link>
            ))}
            <div className="mt-2 grid gap-2">
              <Button asChild variant="outline">
                <a href={telHref}>Llamar</a>
              </Button>
              <Button asChild>
                <a href={whatsappHref} target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
