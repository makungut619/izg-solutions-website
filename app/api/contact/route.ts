import { NextRequest, NextResponse } from "next/server";

/**
 * Submit lead data to the IZG Admin Console.
 * Awaited so it completes before the serverless function exits.
 * Errors are logged but never block the user response.
 */
async function submitLead(payload: {
  contact_name?: string;
  contact_email?: string;
  contact_phone?: string;
  what_they_need?: string;
  notes?: string;
}) {
  const leadsApiUrl = process.env.LEADS_API_URL;
  const leadsApiKey = process.env.LEADS_API_KEY;

  if (!leadsApiUrl || !leadsApiKey) {
    console.warn("Leads API not configured, skipping lead submission");
    return;
  }

  try {
    const res = await fetch(`${leadsApiUrl}/api/leads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": leadsApiKey,
      },
      body: JSON.stringify({
        source: "website_form",
        ...payload,
      }),
    });

    if (!res.ok) {
      const body = await res.text();
      console.error(`Leads API error (${res.status}):`, body);
    } else {
      console.log("Lead submitted successfully");
    }
  } catch (err) {
    console.error("Leads API request failed:", err);
  }
}

// Human-friendly labels for the contact form's service values.
const SERVICE_LABELS: Record<string, string> = {
  "digital-business-card": "Digital Business Card",
  website: "Professional Website",
  chatbot: "WhatsApp Chatbot",
  both: "Website + Chatbot",
  custom: "Custom Digital Solution",
  other: "Something else",
};

/**
 * Send the lead notification email via the IZG Mail Service.
 * Fire-and-forget friendly: returns false on failure, never throws.
 */
async function sendLeadEmail(payload: {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}): Promise<boolean> {
  const mailUrl = process.env.IZG_MAIL_URL;
  const mailToken = process.env.IZG_MAIL_TOKEN;

  if (!mailUrl || !mailToken) {
    console.warn("IZG Mail Service not configured, skipping email");
    return false;
  }

  // Dev override: when set, all mail goes to this inbox regardless of the
  // real recipient. The intended recipient (info@) is still shown in the body.
  const overrideTo = process.env.IZG_MAIL_OVERRIDE_TO;
  const realRecipient = process.env.EMAIL_TO || "info@izgsolutions.co.za";

  try {
    const res = await fetch(mailUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-izg-token": mailToken,
      },
      body: JSON.stringify({
        to: overrideTo || realRecipient,
        replyTo: payload.email,
        subject: `New Contact: ${payload.name} - ${payload.service}`,
        template: "website-lead",
        variables: {
          name: payload.name,
          email: payload.email,
          phone: payload.phone || "Not provided",
          service: payload.service,
          message: payload.message,
        },
        tags: { source: "website_form" },
      }),
    });

    if (!res.ok) {
      const error = await res.json().catch(() => ({}));
      console.error("[email] Send failed:", res.status, error);
      return false;
    }

    return true;
  } catch (err) {
    console.error("[email] Network error:", err);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    const serviceLabel = SERVICE_LABELS[service] || service || "General enquiry";

    // Submit lead to the Admin Console before sending email
    console.log("Attempting lead submission...");
    await submitLead({
      contact_name: name,
      contact_email: email,
      contact_phone: phone || undefined,
      what_they_need: serviceLabel,
      notes: message,
    });

    // Send the notification email via the IZG Mail Service
    const emailSent = await sendLeadEmail({
      name,
      email,
      phone,
      service: serviceLabel,
      message,
    });

    if (!emailSent) {
      // The lead was still captured by the Admin Console, so surface success
      // to the user but log the email failure for follow-up.
      console.error("Contact email was not sent (see logs above)");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send message" },
      { status: 500 }
    );
  }
}
