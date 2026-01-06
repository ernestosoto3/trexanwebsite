// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";
import { prisma } from "@/lib/prisma";

// ============================================================================
// VALIDATION SCHEMA (service removed)
// ============================================================================
const ContactSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email().max(200),
  message: z.string().min(1).max(5000),
  website: z.string().optional(), // honeypot
  company: z.string().max(200).optional(),
  phone: z.string().max(50).optional(),
  industry: z.string().max(100).optional(),
  volume: z.string().max(50).optional(),
  contactPreference: z.enum(["email", "phone", "whatsapp"]).optional(),
  privacy: z.boolean().optional(),
});

// ============================================================================
// RATE LIMITING
// ============================================================================
const windowMs = 60 * 1000; // 1 min
const maxPerWindow = 5; // 5 req/min/IP
const hits = new Map<string, number[]>();

function rateLimit(ip: string) {
  const now = Date.now();
  const arr = (hits.get(ip) ?? []).filter((ts) => now - ts < windowMs);
  arr.push(now);
  hits.set(ip, arr);
  return arr.length <= maxPerWindow;
}

// ============================================================================
// API HANDLER
// ============================================================================
export async function POST(req: NextRequest) {
  try {
    // Extract IP for rate limiting
    const forwardedFor = req.headers.get("x-forwarded-for");
    const ip =
      forwardedFor?.split(",")[0]?.trim() ??
      req.headers.get("x-real-ip") ??
      "0.0.0.0";

    // Check rate limit
    if (!rateLimit(ip)) {
      return NextResponse.json(
        { ok: false, error: "Too many requests" },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await req.json().catch(() => null);
    if (!body) {
      return NextResponse.json(
        { ok: false, error: "Invalid request body" },
        { status: 400 }
      );
    }

    // Validate with Zod
    const parsed = ContactSchema.safeParse(body);
    if (!parsed.success) {
      console.error("Validation error:", parsed.error);
      return NextResponse.json(
        { ok: false, error: "Invalid input" },
        { status: 400 }
      );
    }

    // Extract data (service removed)
    const {
      name,
      email,
      message,
      website,
      company,
      phone,
      industry,
      volume,
      contactPreference,
      privacy,
    } = parsed.data;

    // Honeypot check
    if (website && website.trim().length > 0) {
      console.warn("Honeypot triggered - potential bot");
      return NextResponse.json({ ok: true }); // Silent rejection
    }

    // Save to database (service removed)
    try {
      await prisma.contactSubmission.create({
        data: {
          name,
          email,
          message,
          company: company || null,
          phone: phone || null,
          industry: industry || null,
          volume: volume || null,
          contactPreference: contactPreference || null,
          privacy: privacy ?? false,
        },
      });
    } catch (dbError) {
      console.error("Database error:", dbError);
      return NextResponse.json(
        { ok: false, error: "Error saving to database" },
        { status: 500 }
      );
    }

    // Send email if SMTP is configured
    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      CONTACT_TO,
      CONTACT_FROM,
    } = process.env as Record<string, string | undefined>;

    if (
      SMTP_HOST &&
      SMTP_PORT &&
      SMTP_USER &&
      SMTP_PASS &&
      CONTACT_TO &&
      CONTACT_FROM
    ) {
      try {
        const transporter = nodemailer.createTransport({
          host: SMTP_HOST,
          port: Number(SMTP_PORT),
          secure: Number(SMTP_PORT) === 465,
          auth: { user: SMTP_USER, pass: SMTP_PASS },
        });

        // Email body (service removed)
        const lines = [
          `Nombre: ${name}`,
          `Empresa: ${company ?? "-"}`,
          `Email: ${email}`,
          `Teléfono: ${phone ?? "-"}`,
          `Industria: ${industry ?? "-"}`,
          `Volumen RAEE: ${volume ?? "-"}`,
          `Preferencia de contacto: ${contactPreference ?? "-"}`,
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
      } catch (emailError) {
        console.error("Email error:", emailError);
        // Don't fail the request if email fails - data is already saved
      }
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json(
      { ok: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}