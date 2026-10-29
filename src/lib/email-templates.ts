import { CONTACT_PHONE_DISPLAY, SITE_NAME } from "@/lib/constants";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function wrapEmail(title: string, bodyHtml: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(title)}</title>
</head>
<body style="margin:0;padding:0;background:#eef2f7;font-family:Arial,Helvetica,sans-serif;color:#1a2332;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#eef2f7;padding:24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #d7dee8;">
          <tr>
            <td style="background:#01367A;padding:28px 24px;text-align:center;">
              <img src="cid:logo" alt="${escapeHtml(SITE_NAME)}" width="96" style="display:block;margin:0 auto 12px;width:96px;height:auto;border:0;" />
              <div style="font-size:22px;font-weight:700;color:#ffffff;letter-spacing:0.02em;">${escapeHtml(SITE_NAME)}</div>
              <div style="margin-top:6px;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:#FCB819;">Power of Kindness</div>
            </td>
          </tr>
          <tr>
            <td style="height:4px;background:linear-gradient(90deg,#FE8810,#FCB819,#0159B3);font-size:0;line-height:0;">&nbsp;</td>
          </tr>
          <tr>
            <td style="padding:28px 24px;">
              ${bodyHtml}
            </td>
          </tr>
          <tr>
            <td style="background:#f7f5f0;padding:18px 24px;border-top:1px solid #e5e1d8;text-align:center;">
              <div style="font-size:12px;color:#5a6575;line-height:1.5;">
                ${escapeHtml(SITE_NAME)} · Charitable Foundation · Armenia<br />
                ${escapeHtml(CONTACT_PHONE_DISPLAY)}
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function buildContactEmail(params: {
  name: string;
  email: string;
  message: string;
  newsletter: boolean;
}) {
  const { name, email, message, newsletter } = params;
  const badge = newsletter
    ? `<span style="display:inline-block;background:#FE8810;color:#ffffff;font-size:11px;font-weight:700;padding:4px 10px;border-radius:999px;">Newsletter: yes</span>`
    : `<span style="display:inline-block;background:#0159B3;color:#ffffff;font-size:11px;font-weight:700;padding:4px 10px;border-radius:999px;">Newsletter: no</span>`;

  const html = wrapEmail(
    "New contact message",
    `
      <h1 style="margin:0 0 8px;font-size:20px;color:#01367A;">New contact message</h1>
      <p style="margin:0 0 20px;font-size:14px;color:#5a6575;">A visitor sent a message from the website form.</p>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #eef2f7;font-size:13px;color:#5a6575;width:110px;">Name</td>
          <td style="padding:10px 0;border-bottom:1px solid #eef2f7;font-size:14px;color:#1a2332;font-weight:600;">${escapeHtml(name)}</td>
        </tr>
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #eef2f7;font-size:13px;color:#5a6575;">Email</td>
          <td style="padding:10px 0;border-bottom:1px solid #eef2f7;font-size:14px;">
            <a href="mailto:${escapeHtml(email)}" style="color:#0159B3;text-decoration:none;font-weight:600;">${escapeHtml(email)}</a>
          </td>
        </tr>
        <tr>
          <td style="padding:12px 0;font-size:13px;color:#5a6575;">Opt-in</td>
          <td style="padding:12px 0;">${badge}</td>
        </tr>
      </table>
      <div style="background:#f7f5f0;border-left:4px solid #FCB819;border-radius:8px;padding:16px;">
        <div style="font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#01367A;margin-bottom:8px;">Message</div>
        <div style="font-size:15px;line-height:1.6;color:#1a2332;white-space:pre-wrap;">${escapeHtml(message)}</div>
      </div>
    `,
  );

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Newsletter: ${newsletter ? "yes" : "no"}`,
    "",
    message,
  ].join("\n");

  return { html, text };
}

export function buildSubscriberEmail(params: {
  name: string;
  email: string;
  subscribedAt: string;
}) {
  const { name, email, subscribedAt } = params;
  const html = wrapEmail(
    "New subscriber",
    `
      <h1 style="margin:0 0 8px;font-size:20px;color:#01367A;">New newsletter subscriber</h1>
      <p style="margin:0 0 20px;font-size:14px;color:#5a6575;">Someone opted in to receive news and blog updates.</p>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #eef2f7;font-size:13px;color:#5a6575;width:120px;">Name</td>
          <td style="padding:10px 0;border-bottom:1px solid #eef2f7;font-size:14px;color:#1a2332;font-weight:600;">${escapeHtml(name)}</td>
        </tr>
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #eef2f7;font-size:13px;color:#5a6575;">Email</td>
          <td style="padding:10px 0;border-bottom:1px solid #eef2f7;font-size:14px;">
            <a href="mailto:${escapeHtml(email)}" style="color:#0159B3;text-decoration:none;font-weight:600;">${escapeHtml(email)}</a>
          </td>
        </tr>
        <tr>
          <td style="padding:10px 0;font-size:13px;color:#5a6575;">Subscribed</td>
          <td style="padding:10px 0;font-size:14px;color:#1a2332;">${escapeHtml(subscribedAt)}</td>
        </tr>
      </table>
    `,
  );

  const text = `Name: ${name}\nEmail: ${email}\nSubscribedAt: ${subscribedAt}`;
  return { html, text };
}
