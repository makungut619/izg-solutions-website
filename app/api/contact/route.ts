import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    const appEnv = process.env.APP_ENV || "local";
    const isProduction = appEnv === "production";
    const subjectPrefix = isProduction ? "" : `[${appEnv.toUpperCase()}] `;

    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: process.env.EMAIL_TO!,
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
