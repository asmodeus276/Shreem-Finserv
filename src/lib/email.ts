import nodemailer from "nodemailer";
import { BRAND_CONFIG } from "@/config/brand";

export interface LeadEmailData {
  applicationId: string;
  fullName: string;
  mobile: string;
  city: string;
  loanCategory: string;
  amount: number;
  consent: boolean;
  marketingConsent?: boolean;
  sourcePage?: string;
  submittedAt: string;
}

/**
 * Format currency in Indian Rupees
 */
function formatCurrency(val: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(val);
}

/**
 * Send an email notification when a new loan application is received.
 * Works seamlessly with Gmail SMTP or any standard SMTP service.
 */
export async function sendLeadNotificationEmail(lead: LeadEmailData): Promise<boolean> {
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
  const smtpPort = Number(process.env.SMTP_PORT) || 465;
  const notificationEmail = process.env.NOTIFICATION_EMAIL || BRAND_CONFIG.email;

  // If SMTP is not yet configured, log and safely continue
  if (!smtpUser || !smtpPass) {
    console.info(
      "[Nodemailer] SMTP_USER or SMTP_PASS not set. Application saved to Firestore, email dispatch skipped."
    );
    return false;
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const istDate = new Date(lead.submittedAt).toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f7f9fb; margin: 0; padding: 24px; }
    .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 16px rgba(0,0,0,0.06); }
    .header { background: linear-gradient(135deg, #001A62, #0B2E8D); color: #ffffff; padding: 28px 24px; text-align: center; }
    .header h1 { margin: 0; font-size: 22px; font-weight: 800; }
    .header p { margin: 6px 0 0; font-size: 13px; color: #b7c4ff; }
    .badge { display: inline-block; background: #BB0119; color: #ffffff; font-size: 12px; font-weight: bold; padding: 4px 12px; border-radius: 20px; margin-top: 10px; }
    .content { padding: 24px; }
    .grid-table { width: 100%; border-collapse: collapse; margin-top: 12px; }
    .grid-table td { padding: 12px 10px; border-bottom: 1px solid #f1f5f9; font-size: 14px; }
    .grid-table td.label { color: #64748b; font-weight: 600; width: 40%; }
    .grid-table td.value { color: #0f172a; font-weight: bold; width: 60%; }
    .highlight-amount { font-size: 18px; color: #001A62; font-weight: 900; }
    .footer { background: #f8fafc; padding: 16px 24px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; text-align: center; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1>🚀 New Loan Application Received</h1>
      <p>Instant submission via ${BRAND_CONFIG.name} Web Portal</p>
      <div class="badge">Ref: ${lead.applicationId}</div>
    </div>
    <div class="content">
      <table class="grid-table">
        <tr>
          <td class="label">Applicant Name</td>
          <td class="value">${lead.fullName}</td>
        </tr>
        <tr>
          <td class="label">Mobile Number</td>
          <td class="value"><a href="tel:${lead.mobile}" style="color: #0B2E8D; text-decoration: none;">+91 ${lead.mobile}</a></td>
        </tr>
        <tr>
          <td class="label">City / Location</td>
          <td class="value">${lead.city}</td>
        </tr>
        <tr>
          <td class="label">Loan Category</td>
          <td class="value" style="color: #0B2E8D;">${lead.loanCategory}</td>
        </tr>
        <tr>
          <td class="label">Required Amount</td>
          <td class="value highlight-amount">${formatCurrency(lead.amount)}</td>
        </tr>
        <tr>
          <td class="label">Submission Time</td>
          <td class="value">${istDate} (IST)</td>
        </tr>
        <tr>
          <td class="label">Source Page</td>
          <td class="value" style="font-family: monospace; font-size: 12px;">${lead.sourcePage || "/"}</td>
        </tr>
        <tr>
          <td class="label">DPDP Consent</td>
          <td class="value" style="color: #10b981;">✓ Affirmatively Granted</td>
        </tr>
        <tr>
          <td class="label">Marketing Updates</td>
          <td class="value">${lead.marketingConsent ? "✓ Opted In" : "✗ Not Subscribed"}</td>
        </tr>
      </table>
    </div>
    <div class="footer">
      This notification was generated automatically by <strong>${BRAND_CONFIG.legalName}</strong> application engine.<br>
      Please contact the applicant within the 30-minute turnaround SLA.
    </div>
  </div>
</body>
</html>
`;

    await transporter.sendMail({
      from: `"${BRAND_CONFIG.name} Notifications" <${smtpUser}>`,
      to: notificationEmail,
      subject: `🚨 New Application: ${lead.fullName} (${formatCurrency(lead.amount)} - ${lead.loanCategory}) [${lead.applicationId}]`,
      html: htmlContent,
      replyTo: lead.mobile ? `${lead.fullName} <${notificationEmail}>` : undefined,
    });

    console.info(`[Nodemailer] Lead alert sent successfully to ${notificationEmail} for ${lead.applicationId}`);
    return true;
  } catch (error) {
    console.error("[Nodemailer Error]: Failed to send lead notification email:", error);
    return false;
  }
}
