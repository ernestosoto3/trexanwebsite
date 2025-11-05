// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { PrismaClient } from "@prisma/client";
import nodemailer from "nodemailer";

const prisma = new PrismaClient();

// --- 1) Zod schema (server-side validation)
const ContactSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email().max(200),
  message: z.string().min(1).max(5000),
  // honeypot: if this has any content, it's a bot
  website: z.string().optional(), // hidden field on the form
});

// --- 2) Tiny in-memory rate limiter (per IP)
//    NOTE: Good enough to start; for production use Upstash/Redis.
const windowMs = 60 * 1000;     // 1 minute
const maxPerWindow = 5;         // 5 requests per minute per IP
const hits = new Map<string, number[]>();

function rateLimit(ip: string) {
  const now = Date.now();
  const arr = (hits.get(ip) ?? []).filter(ts => now - ts < windowMs);
  arr.push(now);
  hits.set(ip, arr);
  return arr.length <= maxPerWindow;
}

export async function POST(req: NextRequest) {
  // Get client IP from common reverse-proxy headers (works on Vercel/NGINX/etc.)
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "0.0.0.0";

  if (!rateLimit(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const body = await req.json().catch(() => null);
  const parsed = ContactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  const { name, email, message, website } = parsed.data;
  if (website && website.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  await prisma.contactSubmission.create({ data: { name, email, message } });

  const {
    SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO, CONTACT_FROM,
  } = process.env;

  if (SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASS && CONTACT_TO && CONTACT_FROM) {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    await transporter.sendMail({
      to: CONTACT_TO,
      from: CONTACT_FROM,
      subject: `New contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });
  }

  return NextResponse.json({ ok: true });
}

