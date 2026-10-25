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
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");

const nl2br = (value: string) => escapeHtml(value).replace(/\n/g, "<br />");

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

export async function sendWelcomeEmail({
  email,
  name,
  unsubscribeToken,
}: {
  email: string;
  name: string;
  unsubscribeToken: string;
}) {
  const baseUrl = getBaseUrl();
  const unsubscribeUrl = `${baseUrl}/api/newsletter/unsubscribe?token=${encodeURIComponent(
    unsubscribeToken,
  )}`;
  const greeting = name ? `Hello ${escapeHtml(name)},` : "Hello,";

  await sendEmail({
    to: email,
    subject: "Welcome to Sri Supraja Insights",
    idempotencyKey: `newsletter-welcome-${unsubscribeToken}`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:620px;margin:0 auto;color:#24342d;line-height:1.6">
        <p style="font-size:13px;text-transform:uppercase;letter-spacing:1.5px;color:#9a7a12;font-weight:700">Sri Supraja Insights</p>
        <h1 style="font-size:26px;line-height:1.25;color:#12251d">You are subscribed</h1>
        <p>${greeting}</p>
        <p>Thank you for subscribing to Sri Supraja Insights. We will send you new property guides, useful buyer information, selected project updates and investor articles when they are published.</p>
        <p style="font-size:13px;color:#66736d">No further confirmation is required.</p>
        <p style="font-size:12px;color:#78827d;border-top:1px solid #e5e7eb;padding-top:18px;margin-top:26px">
          You received this email because this address was subscribed on the Sri Supraja Infracon website.
          <a href="${unsubscribeUrl}" style="color:#6b5a27">Unsubscribe</a>
        </p>
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

export async function sendSubscriberUpdateEmail({
  email,
  name,
  unsubscribeToken,
  subject,
  message,
  imageUrl,
  buttonLabel,
  buttonUrl,
  updateId,
}: {
  email: string;
  name: string;
  unsubscribeToken: string;
  subject: string;
  message: string;
  imageUrl?: string;
  buttonLabel?: string;
  buttonUrl?: string;
  updateId: string;
}) {
  const baseUrl = getBaseUrl();
  const unsubscribeUrl = `${baseUrl}/api/newsletter/unsubscribe?token=${encodeURIComponent(
    unsubscribeToken,
  )}`;
  const greeting = name ? `Hello ${escapeHtml(name)},` : "Hello,";
  const safeImage = imageUrl ? escapeHtml(imageUrl) : "";
  const safeButtonUrl = buttonUrl ? escapeHtml(buttonUrl) : "";

  await sendEmail({
    to: email,
    subject,
    idempotencyKey: `newsletter-update-${updateId}-${unsubscribeToken}`.slice(0, 250),
    html: `
      <div style="background:#f5f7fa;padding:24px 12px;font-family:Arial,sans-serif;color:#1f2937;line-height:1.65">
        <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e5e7eb;border-radius:18px;overflow:hidden">
          <div style="background:#0B1633;padding:22px 28px">
            <div style="font-size:12px;text-transform:uppercase;letter-spacing:1.7px;color:#E0B84B;font-weight:700">Sri Supraja Infracon</div>
            <div style="margin-top:5px;font-size:13px;color:#d8deea">Subscriber Update</div>
          </div>
          ${safeImage ? `<img src="${safeImage}" alt="Sri Supraja Infracon update" width="640" style="display:block;width:100%;height:auto;max-height:420px;object-fit:cover" />` : ""}
          <div style="padding:28px">
            <p style="margin:0 0 14px;color:#64748b;font-size:14px">${greeting}</p>
            <h1 style="margin:0 0 16px;font-size:27px;line-height:1.25;color:#0B1633">${escapeHtml(subject)}</h1>
            <div style="font-size:16px;color:#334155">${nl2br(message)}</div>
            ${
              safeButtonUrl && buttonLabel
                ? `<p style="margin:28px 0 6px"><a href="${safeButtonUrl}" style="display:inline-block;background:#C9A227;color:#0B1633;text-decoration:none;padding:13px 22px;border-radius:10px;font-weight:700">${escapeHtml(buttonLabel)}</a></p>`
                : ""
            }
          </div>
          <div style="border-top:1px solid #e5e7eb;padding:18px 28px 24px;color:#78827d;font-size:12px">
            You received this because you subscribed to Sri Supraja Infracon updates.
            <a href="${unsubscribeUrl}" style="color:#7b640f">Unsubscribe</a>
          </div>
        </div>
      </div>
    `,
  });
}
