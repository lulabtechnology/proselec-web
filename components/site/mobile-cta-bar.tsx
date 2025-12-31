"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, BriefcaseBusiness } from "lucide-react";
import { contact } from "@/content/site";
import { telLink, waLink } from "@/lib/links";

export default function MobileCTABar() {
  const wa = waLink("50768527127", "Hola, quiero cotizar un proyecto con PROSELEC, S.A.");

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="glass border-t">
        <div className="container py-2 grid grid-cols-3 gap-2">
          <Button asChild className="rounded-2xl">
            <a href={wa} target="_blank" rel="noreferrer">
              <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
            </a>
          </Button>
          <Button variant="outline" asChild className="rounded-2xl">
            <a href={telLink(contact.phones[0])}>
              <Phone className="mr-2 h-4 w-4" /> Llamar
            </a>
          </Button>
          <Button variant="secondary" asChild className="rounded-2xl">
            <Link href="/servicios">
              <BriefcaseBusiness className="mr-2 h-4 w-4" /> Servicios
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
