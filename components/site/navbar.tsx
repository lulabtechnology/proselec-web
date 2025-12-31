"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu, Phone, MessageCircle } from "lucide-react";
import { contact, site } from "@/content/site";
import { telLink, waLink } from "@/lib/links";
import { useState } from "react";

const nav = [
  { href: "/", label: "Inicio" },
  { href: "/sobre-nosotros", label: "Sobre nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/contacto", label: "Contacto" }
];

function NavLinks({ onClick }: { onClick?: () => void }) {
  const pathname = usePathname();

  return (
    <>
      {nav.map((item) => {
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClick}
            className={`text-sm transition ${
              active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </>
  );
}

function Brand() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <img
        src="/images/logo.png"
        alt={`${site.shortName} logo`}
        className="h-9 w-auto"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).src = "/logo.png";
        }}
      />
      <div className="leading-tight">
        <p className="font-medium">{site.shortName}</p>
        <p className="text-xs text-muted-foreground hidden sm:block">
          Obras Civiles & Electromecánicas
        </p>
      </div>
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const wa = waLink("50768527127", "Hola, quiero cotizar un proyecto con PROSELEC, S.A.");

  return (
    <header className="sticky top-0 z-50">
      <div className="glass border-b">
        <div className="container h-16 flex items-center justify-between gap-4">
          <Brand />

          <nav className="hidden md:flex items-center gap-6">
            <NavLinks />
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <Button variant="outline" asChild className="rounded-2xl">
              <a href={telLink(contact.phones[0])}>
                <Phone className="mr-2 h-4 w-4" /> Llamar
              </a>
            </Button>
            <Button asChild className="rounded-2xl shadow-glow">
              <a href={wa} target="_blank" rel="noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile */}
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" className="rounded-2xl">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-[320px]">
                <div className="flex items-center justify-between">
                  <Brand />
                  <SheetClose asChild>
                    {/* ✅ CAMBIO AQUÍ: ghost -> outline */}
                    <Button variant="outline" className="rounded-2xl">
                      Cerrar
                    </Button>
                  </SheetClose>
                </div>

                <div className="mt-6 grid gap-4">
                  <NavLinks onClick={() => setOpen(false)} />
                </div>

                <div className="mt-6 grid gap-2">
                  <Button asChild className="rounded-2xl shadow-glow">
                    <a href={wa} target="_blank" rel="noreferrer">
                      <MessageCircle className="mr-2 h-4 w-4" /> Cotizar por WhatsApp
                    </a>
                  </Button>
                  <Button variant="outline" asChild className="rounded-2xl">
                    <a href={telLink(contact.phones[0])}>
                      <Phone className="mr-2 h-4 w-4" /> Llamar
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
