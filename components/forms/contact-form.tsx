"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { CONTACT, COMPANY } from "@/lib/proselec";

export default function ContactForm() {
  const [nombre, setNombre] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");

  const body = useMemo(() => {
    const lines = [
      `Hola, quiero una cotización.`,
      nombre ? `Nombre: ${nombre}` : null,
      empresa ? `Empresa: ${empresa}` : null,
      telefono ? `Teléfono: ${telefono}` : null,
      mensaje ? `Mensaje: ${mensaje}` : null,
      "",
      `— Enviado desde ${COMPANY.name}`,
    ].filter(Boolean);
    return lines.join("\n");
  }, [nombre, empresa, telefono, mensaje]);

  const waHref = useMemo(() => {
    const phone = CONTACT.phoneE164.replace("+", "");
    return `https://wa.me/${phone}?text=${encodeURIComponent(body)}`;
  }, [body]);

  const mailHref = useMemo(() => {
    const subject = "Solicitud de cotización";
    return `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [body]);

  return (
    <div className="space-y-4">
      <div className="grid gap-3 md:grid-cols-2">
        <div className="space-y-1">
          <label className="text-sm">Nombre</label>
          <input
            className="h-10 w-full rounded-md border bg-background px-3"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Tu nombre"
          />
        </div>
        <div className="space-y-1">
          <label className="text-sm">Empresa (opcional)</label>
          <input
            className="h-10 w-full rounded-md border bg-background px-3"
            value={empresa}
            onChange={(e) => setEmpresa(e.target.value)}
            placeholder="Nombre de la empresa"
          />
        </div>
        <div className="space-y-1 md:col-span-2">
          <label className="text-sm">Teléfono (opcional)</label>
          <input
            className="h-10 w-full rounded-md border bg-background px-3"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            placeholder="+507…"
          />
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-sm">Mensaje</label>
        <textarea
          className="min-h-[120px] w-full rounded-md border bg-background p-3"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          placeholder="Cuéntanos qué necesitas…"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        <Button asChild>
          <a href={waHref} target="_blank" rel="noreferrer">Enviar por WhatsApp</a>
        </Button>
        <Button asChild variant="outline">
          <a href={mailHref}>Enviar por correo</a>
        </Button>
      </div>
    </div>
  );
}
