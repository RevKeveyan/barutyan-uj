import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { CONTACT_EMAIL } from "@/lib/constants";
import {
  buildContactEmail,
  buildSubscriberEmail,
} from "@/lib/email-templates";

type ContactBody = {
  name?: string;
  email?: string;
  message?: string;
  newsletter?: boolean;
  website?: string;
};

function logoAttachment() {
  return {
    filename: "logo.png",
    path: path.join(process.cwd(), "public", "logo.png"),
    cid: "logo",
  };
}

async function appendSubscriber(email: string, name: string) {
  const dir = path.join(process.cwd(), "data");
  const file = path.join(dir, "subscribers.json");
  await mkdir(dir, { recursive: true });
  let list: { email: string; name: string; subscribedAt: string }[] = [];
  try {
    const raw = await readFile(file, "utf8");
    list = JSON.parse(raw) as typeof list;
  } catch {
    list = [];
  }
  if (!list.some((item) => item.email.toLowerCase() === email.toLowerCase())) {
    list.push({
      email,
      name,
      subscribedAt: new Date().toISOString(),
    });
    await writeFile(file, JSON.stringify(list, null, 2), "utf8");
  }
}

export async function POST(request: Request) {
  let body: ContactBody;
  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const message = String(body.message || "").trim();
  const newsletter = Boolean(body.newsletter);

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;
  const to = process.env.CONTACT_TO || CONTACT_EMAIL;

  if (!gmailUser || !gmailPass) {
    return NextResponse.json(
      { error: "Mail is not configured" },
      { status: 503 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: gmailUser,
      pass: gmailPass,
    },
  });

  const subject = newsletter
    ? `[Barutyan UJ] Contact + newsletter: ${name}`
    : `[Barutyan UJ] Contact: ${name}`;

  const contactMail = buildContactEmail({ name, email, message, newsletter });
  const attachments = [logoAttachment()];

  try {
    await transporter.sendMail({
      from: `"Barutyan UJ Website" <${gmailUser}>`,
      to,
      replyTo: email,
      subject,
      text: contactMail.text,
      html: contactMail.html,
      attachments,
    });

    if (newsletter) {
      try {
        await appendSubscriber(email, name);
      } catch {
        const subscribedAt = new Date().toISOString();
        const subscriberMail = buildSubscriberEmail({
          name,
          email,
          subscribedAt,
        });
        await transporter.sendMail({
          from: `"Barutyan UJ Website" <${gmailUser}>`,
          to,
          subject: `[Barutyan UJ] NEW SUBSCRIBER: ${email}`,
          text: subscriberMail.text,
          html: subscriberMail.html,
          attachments,
        });
      }
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Send failed" }, { status: 500 });
  }
}
