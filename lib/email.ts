// lib/email.ts

import { Resend } from 'resend';
import { ContactFormEmail } from '@/emails/ContactFormEmail';
import { ContactFormAutoResponse } from '@/emails/ContactFormAutoResponse';

const resend = new Resend(process.env.RESEND_API_KEY);

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  company?: string;
  phone?: string;
  industry?: string;
  volume?: string;
  contactPreference?: string;
}

export interface EmailResult {
  success: boolean;
  id?: string;
  error?: string;
  devNote?: string;
}

/**
 * Send contact form notification to admin
 */
export async function sendContactFormNotification(
  data: ContactFormData
): Promise<EmailResult> {
  try {
    const isDevelopment = process.env.NODE_ENV === 'development';
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
    const toEmail = process.env.RESEND_TO_EMAIL!;

    if (isDevelopment && fromEmail.includes('resend.dev')) {
      console.log('🚧 DEVELOPMENT MODE: Using Resend test domain');
      console.log(`📧 Email will be sent to: ${toEmail}`);
      console.log(`📝 Original submitter email: ${data.email}`);
    }

    const { data: emailData, error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `Nuevo contacto de ${data.name}${data.company ? ` - ${data.company}` : ''}`,
      react: ContactFormEmail({
        ...data,
        submittedAt: new Date(),
      }),
      replyTo: data.email,
    });

    if (error) {
      console.error('❌ Resend error:', error);
      return {
        success: false,
        error: error.message,
      };
    }

    console.log('✅ Email sent successfully:', emailData?.id);

    return {
      success: true,
      id: emailData?.id,
      devNote: isDevelopment 
        ? `Email sent to ${toEmail} (your verified email)` 
        : undefined,
    };
  } catch (error) {
    console.error('❌ Email send error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Send auto-response to form submitter (optional)
 */
export async function sendContactFormAutoResponse(
  data: Pick<ContactFormData, 'name' | 'email'>
): Promise<EmailResult> {
  try {
    const isDevelopment = process.env.NODE_ENV === 'development';
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

    // Skip auto-response in development if using test domain
    if (isDevelopment && fromEmail.includes('resend.dev')) {
      const verifiedEmail = process.env.RESEND_TO_EMAIL;
      
      if (data.email !== verifiedEmail) {
        console.log('⚠️  Skipping auto-response in development mode');
        return {
          success: true,
          devNote: 'Auto-response skipped in development',
        };
      }
    }

    const { data: emailData, error } = await resend.emails.send({
      from: fromEmail,
      to: data.email,
      subject: 'Gracias por contactarnos',
      react: ContactFormAutoResponse({
        name: data.name,
      }),
    });

    if (error) {
      console.error('⚠️  Auto-response error:', error);
      return {
        success: false,
        error: error.message,
        devNote: 'Auto-response failed but notification succeeded',
      };
    }

    console.log('✅ Auto-response sent:', emailData?.id);

    return {
      success: true,
      id: emailData?.id,
    };
  } catch (error) {
    console.error('⚠️  Auto-response error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Send both notification and auto-response
 */
export async function sendContactFormEmails(
  data: ContactFormData
): Promise<{
  notification: EmailResult;
  autoResponse: EmailResult;
}> {
  const notification = await sendContactFormNotification(data);
  const autoResponse = await sendContactFormAutoResponse(data);

  return { notification, autoResponse };
}