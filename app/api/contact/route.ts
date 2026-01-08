// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { sendContactFormEmails } from "@/lib/email";

// ============================================================================
// VALIDATION SCHEMA
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
  const isDevelopment = process.env.NODE_ENV === 'development';
  
  if (isDevelopment) {
    console.log('\n🚀 Contact form submission received');
  }

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

    // Extract data
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

    if (isDevelopment) {
      console.log('📝 Form data:', { name, email, company, phone });
    }

    // Save to database
    let contactSubmission;
    try {
      contactSubmission = await prisma.contactSubmission.create({
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

      if (isDevelopment) {
        console.log('💾 Saved to database:', contactSubmission.id);
      }
    } catch (dbError) {
      console.error("Database error:", dbError);
      return NextResponse.json(
        { ok: false, error: "Error saving to database" },
        { status: 500 }
      );
    }

    // Send emails with Resend
    if (isDevelopment) {
      console.log('📧 Attempting to send emails via Resend...');
    }

    const emailResults = await sendContactFormEmails({
      name,
      email,
      message,
      company,
      phone,
      industry,
      volume,
      contactPreference,
    });

    if (isDevelopment) {
      console.log('📊 Email results:', {
        notification: emailResults.notification.success ? '✅ Sent' : '❌ Failed',
        autoResponse: emailResults.autoResponse.success ? '✅ Sent' : '⚠️  Skipped/Failed',
      });
      if (emailResults.notification.error) {
        console.error('❌ Email error:', emailResults.notification.error);
      }
      console.log('✅ Request completed\n');
    }

    // Return success even if email fails (data is saved)
    if (!emailResults.notification.success) {
      console.error('Failed to send notification email:', emailResults.notification.error);
      return NextResponse.json(
        { 
          ok: true,
          warning: 'Message saved but email notification failed',
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      {
        ok: true,
        ...(isDevelopment && {
          devNotes: {
            notification: emailResults.notification.devNote,
            autoResponse: emailResults.autoResponse.devNote,
          }
        }),
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json(
      { ok: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}