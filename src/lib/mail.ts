import { Resend } from "resend";
import { env } from "@/env";

const resend = new Resend(env.RESEND_API_KEY);
const AUDIENCE_ID = env.RESEND_AUDIENCE_ID;

export type SendEmailParams = {
  to: string;
  subject: string;
  html: string;
  text?: string;
};

export type NewsletterContact = {
  email: string;
  firstName?: string;
  lastName?: string;
  data?: Record<string, unknown>;
};

export type SendEmailResult = {
  success: boolean;
  data?: unknown;
  error?: unknown;
};

export async function sendEmail(
  params: SendEmailParams,
): Promise<SendEmailResult> {
  const { to, subject, html, text } = params;

  try {
    const data = await resend.emails.send({
      from: "SaaS Boilerplate <newsletter@yourdomain.com>",
      to,
      subject,
      html,
      text: text ?? html.replace(/<[^>]*>/g, ""),
    });

    return { success: true, data };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, error };
  }
}

export async function addContactToNewsletter(
  contact: NewsletterContact,
): Promise<SendEmailResult> {
  try {
    const data = await resend.contacts.create({
      email: contact.email,
      firstName: contact.firstName,
      lastName: contact.lastName,
      unsubscribed: false,
      audienceId: AUDIENCE_ID ?? "",
      ...(contact.data ?? {}),
    });

    return { success: true, data };
  } catch (error) {
    console.error("Failed to add contact:", error);
    return { success: false, error };
  }
}
