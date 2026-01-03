"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import Brand from "@/components/site/brand";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/proselec";
import { telLink, waLink } from "@/lib/links";
import { AnimatePresence, motion } from "framer-motion";

const NAV = [
  { href: "/", label: "Inicio" },
  { href: "/sobre-nosotros", label: "Sobre nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  const wa = waLink(CONTACT.whatsappDigits, "Hola, quiero cotizar un proyecto con PROSELEC, S.A.");

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Brand />

        {/* desktop */}
        <nav className="hidden items-center gap-6 md:flex">
          {NAV.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className={`text-sm font-medium ${
                pathname === i.href ? "text-slate-900" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {i.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button asChild variant="outline" className="gap-2">
            <a href={telLink(CONTACT.phoneE164)} aria-label="Llamar">
              <Phone className="h-4 w-4" />
              Llamar
            </a>
          </Button>

          <Button asChild className="gap-2">
            <a href={wa} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </Button>
        </div>

        {/* mobile btn */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg p-2 text-slate-700 ring-1 ring-slate-200 md:hidden"
          aria-label="Abrir menú"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* mobile panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t bg-white md:hidden"
          >
            <div className="mx-auto max-w-6xl px-4 py-3">
              <div className="flex flex-col gap-2">
                {NAV.map((i) => (
                  <Link
                    key={i.href}
                    href={i.href}
                    className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                  >
                    {i.label}
                  </Link>
                ))}
              </div>

              <div className="mt-3 flex gap-2">
                <Button asChild variant="outline" className="w-full gap-2">
                  <a href={telLink(CONTACT.phoneE164)}>
                    <Phone className="h-4 w-4" />
                    Llamar
                  </a>
                </Button>
                <Button asChild className="w-full gap-2">
                  <a href={wa} target="_blank" rel="noreferrer">
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
