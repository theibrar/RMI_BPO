import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const SMTP_HOST = process.env.SMTP_HOST || "premium257.web-hosting.com";
const SMTP_USER = process.env.SMTP_USER || "info@rmibpo.com";
const SMTP_PASS = process.env.SMTP_PASS || "Ps4aPkFKaz5Ba6jE";
const NOTIFICATION_EMAIL = process.env.CONTACT_NOTIFICATION_EMAIL || "info@rmibpo.com";

async function getTransporter() {
  // First attempt port 465 (SSL/TLS)
  try {
    const t465 = nodemailer.createTransport({
      host: SMTP_HOST,
      port: 465,
      secure: true,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
      connectionTimeout: 3500,
      tls: { rejectUnauthorized: false },
    });
    await t465.verify();
    return t465;
  } catch {
    // Fall back to port 26 (cPanel standard port for ISP-filtered environments)
    const t26 = nodemailer.createTransport({
      host: SMTP_HOST,
      port: 26,
      secure: false,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
      connectionTimeout: 8000,
      tls: { rejectUnauthorized: false },
    });
    await t26.verify();
    return t26;
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { firstName, lastName, company, email, phone, service, headcount, message } = data;

    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json(
        { error: "Required fields (Name, Email, Phone) are missing." },
        { status: 400 }
      );
    }

    const referenceId = `RMI-${Date.now().toString(36).toUpperCase()}`;
    const timestampMst = new Date().toLocaleString("en-US", {
      timeZone: "America/Denver",
      dateStyle: "full",
      timeStyle: "medium",
    });

    const transporter = await getTransporter();

    // 1. Send Notification Email to Site Owner (info@rmibpo.com)
    await transporter.sendMail({
      from: `"RMI BPO Portal" <${SMTP_USER}>`,
      to: NOTIFICATION_EMAIL,
      replyTo: `"${firstName} ${lastName}" <${email}>`,
      subject: `[New Lead Inquiry] ${firstName} ${lastName} - ${company || "New Client"} (${referenceId})`,
      text: `NEW LEAD SUBMISSION - RMI BPO LLC
Reference ID: ${referenceId}
Timestamp: ${timestampMst} (MST)

Contact Details:
- Name: ${firstName} ${lastName}
- Company: ${company || "Not Specified"}
- Email: ${email}
- Phone: ${phone}
- Service Discipline: ${service}
- Dedicated Headcount: ${headcount || "1-5 Agents"}

Project Brief / Goals:
${message || "No specific brief entered."}

You can reply directly to this email to contact ${firstName} ${lastName}.`,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; color: #1e293b; margin: 0; padding: 24px; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 12px rgba(10, 28, 66, 0.05); }
    .header { background-color: #0a1c42; padding: 24px 32px; border-bottom: 3px solid #b8860b; }
    .header h1 { color: #ffffff; font-size: 20px; margin: 0; font-weight: 800; letter-spacing: -0.01em; }
    .header p { color: #cbd5e1; font-size: 12px; margin: 6px 0 0; }
    .badge { display: inline-block; padding: 4px 10px; border-radius: 999px; background: #fcf8ee; border: 1px solid #e8d5a3; color: #99751c; font-size: 11px; font-weight: 700; text-transform: uppercase; margin-bottom: 16px; }
    .content { padding: 32px; }
    .lead-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
    .lead-table td { padding: 12px 14px; font-size: 14px; border-bottom: 1px solid #f1f5f9; }
    .lead-table td.label { font-weight: 700; color: #0a1c42; width: 35%; background: #f8fafc; }
    .lead-table td.value { color: #334155; }
    .lead-table td.value strong { color: #0a1c42; }
    .message-box { background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #b8860b; padding: 16px; border-radius: 6px; font-size: 13px; line-height: 1.6; color: #334155; margin-bottom: 24px; }
    .action-btn { display: inline-block; background-color: #0a1c42; color: #ffffff !important; padding: 12px 24px; border-radius: 6px; font-size: 14px; font-weight: 700; text-decoration: none; }
    .footer { background: #f1f5f9; padding: 16px 32px; text-align: center; font-size: 11px; color: #64748b; border-top: 1px solid #e2e8f0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>RMI BPO LLC • New Lead Notification</h1>
      <p>Direct Ingestion from rmibpo.com Contact &amp; Demo Request Form</p>
    </div>
    <div class="content">
      <span class="badge">Reference ID: ${referenceId}</span>

      <table class="lead-table">
        <tr>
          <td class="label">Prospect Name</td>
          <td class="value"><strong>${firstName} ${lastName}</strong></td>
        </tr>
        <tr>
          <td class="label">Company / Entity</td>
          <td class="value"><strong>${company || "Not Specified"}</strong></td>
        </tr>
        <tr>
          <td class="label">Corporate Email</td>
          <td class="value"><a href="mailto:${email}" style="color: #0a1c42; font-weight: 600;">${email}</a></td>
        </tr>
        <tr>
          <td class="label">Direct Phone</td>
          <td class="value"><a href="tel:${phone}" style="color: #0a1c42; font-weight: 600;">${phone}</a></td>
        </tr>
        <tr>
          <td class="label">Service Requested</td>
          <td class="value" style="color: #b8860b; font-weight: 700;">${service}</td>
        </tr>
        <tr>
          <td class="label">Dedicated Headcount</td>
          <td class="value">${headcount || "1-5 Agents"}</td>
        </tr>
        <tr>
          <td class="label">Received (MST)</td>
          <td class="value">${timestampMst}</td>
        </tr>
      </table>

      <div style="font-weight: 700; font-size: 13px; color: #0a1c42; margin-bottom: 8px;">Project Brief &amp; Operational Goals:</div>
      <div class="message-box">
        ${(message || "No specific message entered by the prospect.").replace(/\n/g, "<br>")}
      </div>

      <div style="text-align: center; margin-top: 28px;">
        <a href="mailto:${email}?subject=Re:%20RMI%20BPO%20Consultation%20(${referenceId})" class="action-btn">
          Reply Directly to ${firstName} &rarr;
        </a>
      </div>
    </div>
    <div class="footer">
      RMI BPO LLC • Kalispell, Montana Headquarters • Registered Domestic BPO Partner
    </div>
  </div>
</body>
</html>
`,
    });

    console.log(`[CONTACT API] Email dispatched successfully to ${NOTIFICATION_EMAIL} (${referenceId})`);

    return NextResponse.json({
      success: true,
      message: "Lead received and email notification dispatched successfully.",
      referenceId,
    });
  } catch (error) {
    console.error("API contact error:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "An unexpected error occurred while processing your request.",
      },
      { status: 500 }
    );
  }
}
