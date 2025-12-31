import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const enabled = process.env.CONTACT_API_ENABLED === "true";
  if (!enabled) {
    return NextResponse.json(
      { ok: false, message: "Endpoint desactivado. Usa mailto/WhatsApp (UI) por defecto." },
      { status: 501 }
    );
  }

  const body = await req.json().catch(() => null);
  if (!body?.name || !body?.email || !body?.message) {
    return NextResponse.json({ ok: false, message: "Datos incompletos" }, { status: 400 });
  }

  // Aquí conectarías un proveedor (Resend/SMTP). Lo dejamos preparado sin romper el build.
  return NextResponse.json({ ok: true });
}
