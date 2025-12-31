"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site, contact } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { telLink, waLink } from "@/lib/links";

export default function Navbar() {
  const pathname = usePathname();
  const wa = waLink("50768527127", "Hola, quiero cotizar un proyecto con PROSELEC, S.A.");

  return (
    <header className="sticky top-0 z-50 border-b">
      <div className="glass">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-brand-100 text-brand-800">
              <span className="font-display text-sm">P</span>
            </div>
            <div className="leading-tight">
              <p className="font-display text-sm">{site.shortName}</p>
              <p className="text-xs text-muted-foreground">Obras Civiles & Electromecánicas</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((i) => (
              <Link
                key={i.href}
                href={i.href}
                className={cn(
                  "rounded-xl px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/70 transition",
                  pathname === i.href && "text-foreground bg-muted"
                )}
              >
                {i.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <Button variant="outline" asChild className="rounded-xl">
              <a href={telLink(contact.phones[0])}>
                <Phone className="mr-2 h-4 w-4" /> Llamar
              </a>
            </Button>
            <Button asChild className="rounded-xl shadow-glow">
              <a href={wa} target="_blank" rel="noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
              </a>
            </Button>
          </div>

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon" className="rounded-xl">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px]">
              <div className="mt-6 space-y-2">
                {nav.map((i) => (
                  <Link
                    key={i.href}
                    href={i.href}
                    className={cn(
                      "block rounded-xl px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/70 transition",
                      pathname === i.href && "text-foreground bg-muted"
                    )}
                  >
                    {i.label}
                  </Link>
                ))}
              </div>
              <div className="mt-6 grid gap-2">
                <Button variant="outline" asChild className="rounded-xl">
                  <a href={telLink(contact.phones[0])}><Phone className="mr-2 h-4 w-4" /> Llamar</a>
                </Button>
                <Button asChild className="rounded-xl shadow-glow">
                  <a href={wa} target="_blank" rel="noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" /> Cotizar por WhatsApp
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
