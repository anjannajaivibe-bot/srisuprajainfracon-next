const RESEND_ENDPOINT = "https://api.resend.com/emails";

const getBaseUrl = () =>
  (process.env.NEXT_PUBLIC_SITE_URL || "https://www.srisuprajainfracon.com").replace(
    /\/$/,
    "",
  );

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

export const newsletterEmailConfigured = () =>
  Boolean(process.env.RESEND_API_KEY && process.env.NEWSLETTER_FROM_EMAIL);

async function sendEmail({
  to,
  subject,
  html,
  idempotencyKey,
}: {
  to: string;
  subject: string;
  html: string;
  idempotencyKey?: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.NEWSLETTER_FROM_EMAIL;

  if (!apiKey || !from) {
    throw new Error("Newsletter email delivery is not configured");
  }

  const response = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      ...(idempotencyKey ? { "Idempotency-Key": idempotencyKey } : {}),
    },
    body: JSON.stringify({ from, to: [to], subject, html }),
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`Email delivery failed (${response.status}): ${message}`);
  }
}

export async function sendVerificationEmail({
  email,
  name,
  token,
}: {
  email: string;
  name: string;
  token: string;
}) {
  const baseUrl = getBaseUrl();
  const verifyUrl = `${baseUrl}/api/newsletter/verify?token=${encodeURIComponent(token)}`;
  const greeting = name ? `Hello ${escapeHtml(name)},` : "Hello,";

  await sendEmail({
    to: email,
    subject: "Confirm your Sri Supraja Infracon updates",
    idempotencyKey: `newsletter-verify-${token}`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:620px;margin:0 auto;color:#24342d;line-height:1.6">
        <p>${greeting}</p>
        <p>Thank you for subscribing to Sri Supraja Infracon insights. Please confirm your email address to receive new property guides and selected project updates.</p>
        <p style="margin:28px 0">
          <a href="${verifyUrl}" style="display:inline-block;background:#12251d;color:#ffffff;text-decoration:none;padding:13px 22px;border-radius:999px;font-weight:700">Confirm subscription</a>
        </p>
        <p style="font-size:13px;color:#66736d">If you did not request this subscription, you can ignore this email.</p>
      </div>
    `,
  });
}

export async function sendBlogNotificationEmail({
  email,
  name,
  unsubscribeToken,
  title,
  excerpt,
  slug,
}: {
  email: string;
  name: string;
  unsubscribeToken: string;
  title: string;
  excerpt: string;
  slug: string;
}) {
  const baseUrl = getBaseUrl();
  const articleUrl = `${baseUrl}/blog/${encodeURIComponent(slug)}`;
  const unsubscribeUrl = `${baseUrl}/api/newsletter/unsubscribe?token=${encodeURIComponent(
    unsubscribeToken,
  )}`;
  const greeting = name ? `Hello ${escapeHtml(name)},` : "Hello,";

  await sendEmail({
    to: email,
    subject: title,
    idempotencyKey: `newsletter-blog-${slug}-${unsubscribeToken}`.slice(0, 250),
    html: `
      <div style="font-family:Arial,sans-serif;max-width:620px;margin:0 auto;color:#24342d;line-height:1.6">
        <p>${greeting}</p>
        <p style="font-size:13px;text-transform:uppercase;letter-spacing:1.5px;color:#9a7a12;font-weight:700">New Investor Knowledge Center article</p>
        <h1 style="font-size:26px;line-height:1.25;color:#12251d">${escapeHtml(title)}</h1>
        <p>${escapeHtml(excerpt)}</p>
        <p style="margin:28px 0">
          <a href="${articleUrl}" style="display:inline-block;background:#12251d;color:#ffffff;text-decoration:none;padding:13px 22px;border-radius:999px;font-weight:700">Read the article</a>
        </p>
        <p style="font-size:12px;color:#78827d;border-top:1px solid #e5e7eb;padding-top:18px">
          You received this because you subscribed to Sri Supraja Infracon updates.
          <a href="${unsubscribeUrl}" style="color:#6b5a27">Unsubscribe</a>
        </p>
      </div>
    `,
  });
}
