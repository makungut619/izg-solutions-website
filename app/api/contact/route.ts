import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Fire-and-forget: send lead data to the IZG Admin Console.
 * Never blocks the user response — errors are logged silently.
 */
function submitLead(payload: {
  contact_name?: string;
  contact_email?: string;
  contact_phone?: string;
  what_they_need?: string;
  notes?: string;
}) {
  const leadsApiUrl = process.env.LEADS_API_URL;
  const leadsApiKey = process.env.LEADS_API_KEY;

  if (!leadsApiUrl || !leadsApiKey) {
    console.warn("Leads API not configured — skipping lead submission");
    return;
  }

  fetch(`${leadsApiUrl}/api/leads`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": leadsApiKey,
    },
    body: JSON.stringify({
      source: "website_form",
      ...payload,
    }),
  })
    .then(async (res) => {
      if (!res.ok) {
        const body = await res.text();
        console.error(`Leads API error (${res.status}):`, body);
      }
    })
    .catch((err) => {
      console.error("Leads API request failed:", err);
    });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    const appEnv = process.env.APP_ENV || "local";
    const isProduction = appEnv === "production";
    const subjectPrefix = isProduction ? "" : `[${appEnv.toUpperCase()}] `;

    // Always submit lead regardless of email outcome
    submitLead({
      contact_name: name,
      contact_email: email,
      contact_phone: phone || undefined,
      what_they_need: service || "General enquiry",
      notes: message,
    });

    // Build recipient list — add test recipients in non-production environments
    const recipients: string[] = [process.env.EMAIL_TO!];
    if (!isProduction) {
      recipients.push("accadimo@gmail.com", "makgamathampho@gmail.com");
    }

    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: recipients,
      replyTo: email,
      subject: `${subjectPrefix}New Contact: ${name} — ${service || "General enquiry"}`,
      html: `
        ${!isProduction ? `<p style="background: #fef3c7; padding: 8px 12px; border-radius: 4px; font-size: 12px; color: #92400e;"><strong>Environment:</strong> ${appEnv.toUpperCase()}</p>` : ""}
        <h2 style="margin-top: 16px;">New Contact Form Submission</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #eee;">Name</td>
            <td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #eee;">Email</td>
            <td style="padding: 8px 12px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #eee;">Phone</td>
            <td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${phone || "Not provided"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #eee;">Service</td>
            <td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${service || "Not selected"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; vertical-align: top;">Message</td>
            <td style="padding: 8px 12px;">${message.replace(/\n/g, "<br>")}</td>
          </tr>
        </table>
        <p style="color: #888; font-size: 12px; margin-top: 20px;">
          Sent from the IZG website contact form at ${new Date().toLocaleString("en-ZA", { timeZone: "Africa/Johannesburg" })}
        </p>
      `,
    });

    if (error) {
      console.error("Resend error:", JSON.stringify(error, null, 2));
      return NextResponse.json(
        { success: false, error: "Failed to send message" },
        { status: 500 }
      );
    }

    console.log("Resend response:", JSON.stringify(data, null, 2));
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send message" },
      { status: 500 }
    );
  }
}
