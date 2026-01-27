// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { sendContactFormEmails } from "@/lib/email";

const ContactSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email().max(191), // ← Changed from 200 to 191
  message: z.string().min(1).max(5000),
  website: z.string().optional(),
  company: z.string().max(200).optional(),
  phone: z.string().max(50).optional(),
  industry: z.string().max(100).optional(),
  volume: z.string().max(50).optional(),
  contactPreference: z.enum(["email", "phone", "whatsapp"]).optional(),
  privacy: z.boolean().optional(),
});

const windowMs = 60 * 1000;
const maxPerWindow = 5;
const hits = new Map<string, number[]>();

function rateLimit(ip: string) {
  const now = Date.now();
  const arr = (hits.get(ip) ?? []).filter((ts) => now - ts < windowMs);
  arr.push(now);
  hits.set(ip, arr);
  return arr.length <= maxPerWindow;
}

export async function POST(req: NextRequest) {
  const isDevelopment = process.env.NODE_ENV === 'development';
  
  if (isDevelopment) {
    console.log('\n🚀 Contact form submission received');
  }

  try {
    const forwardedFor = req.headers.get("x-forwarded-for");
    const ip =
      forwardedFor?.split(",")[0]?.trim() ??
      req.headers.get("x-real-ip") ??
      "0.0.0.0";

    if (!rateLimit(ip)) {
      return NextResponse.json(
        { ok: false, error: "Too many requests" },
        { status: 429 }
      );
    }

    const body = await req.json().catch(() => null);
    if (!body) {
      return NextResponse.json(
        { ok: false, error: "Invalid request body" },
        { status: 400 }
      );
    }

    const parsed = ContactSchema.safeParse(body);
    if (!parsed.success) {
      console.error("Validation error:", parsed.error);
      return NextResponse.json(
        { ok: false, error: "Invalid input" },
        { status: 400 }
      );
    }

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

    if (website && website.trim().length > 0) {
      console.warn("Honeypot triggered - potential bot");
      return NextResponse.json({ ok: true });
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
          emailSent: false, // ← ADDED
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

    // Send emails
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

    // ← ADDED: Update email status in database
    try {
      if (emailResults.notification.success) {
        await prisma.contactSubmission.update({
          where: { id: contactSubmission.id },
          data: {
            emailSent: true,
            emailSentAt: new Date(),
          },
        });
      } else {
        const errorMessage = emailResults.notification.error 
          ? String(emailResults.notification.error).substring(0, 500)
          : 'Unknown email error';

        await prisma.contactSubmission.update({
          where: { id: contactSubmission.id },
          data: {
            emailSent: false,
            emailError: errorMessage,
          },
        });
      }
    } catch (updateError) {
      console.error("Failed to update email status:", updateError);
    }
    // ← END ADDED

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