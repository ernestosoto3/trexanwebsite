// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";
import { prisma } from "@/lib/prisma";


// 1) Validación con Zod (incluye campos nuevos opcionales)
const ContactSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email().max(200),
  message: z.string().min(1).max(5000),
  website: z.string().optional(), // honeypot
  company: z.string().max(200).optional(),
  phone: z.string().max(50).optional(),
  service: z.enum(["recibasicos", "ewr", "certifications", "other"]).optional(),
});

// 2) Rate limit básico en memoria (por IP)
const windowMs = 60 * 1000; // 1 min
const maxPerWindow = 5;     // 5 req/min/IP
const hits = new Map<string, number[]>();

function rateLimit(ip: string) {
  const now = Date.now();
  const arr = (hits.get(ip) ?? []).filter(ts => now - ts < windowMs);
  arr.push(now);
  hits.set(ip, arr);
  return arr.length <= maxPerWindow;
}

export async function POST(req: NextRequest) {
  // IP a partir de headers comunes de proxy
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "0.0.0.0";

  if (!rateLimit(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  // 3) Parseo + validación
  const body = await req.json().catch(() => null);
  const parsed = ContactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  // 4) Honeypot
  const { name, email, message, website, company, phone, service } = parsed.data;
  if (website && website.trim().length > 0) {
    // Bot: respondemos "ok" para no dar señales
    return NextResponse.json({ ok: true });
  }

  // 5) Guardado mínimo (ajusta si quieres persistir los extras)
  await prisma.contactSubmission.create({
    data: { name, email, message },
    // Si actualizas el schema de Prisma, aquí puedes añadir: company, phone, service
  });

  // 6) Envío de correo si hay SMTP configurado
  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    CONTACT_TO,
    CONTACT_FROM,
  } = process.env as Record<string, string | undefined>;

  if (
    SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASS &&
    CONTACT_TO && CONTACT_FROM
  ) {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465, // 465 = SSL
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    const lines = [
      `Nombre: ${name}`,
      `Empresa: ${company ?? "-"}`,
      `Email: ${email}`,
      `Teléfono: ${phone ?? "-"}`,
      `Servicio: ${service ?? "-"}`,
      "",
      "Mensaje:",
      message,
    ].join("\n");

    await transporter.sendMail({
      to: CONTACT_TO,
      from: CONTACT_FROM,
      subject: `Nuevo contacto de ${name}`,
      text: lines,
    });
  }

  return NextResponse.json({ ok: true });
}
