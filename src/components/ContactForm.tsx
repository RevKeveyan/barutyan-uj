"use client";

import { FormEvent, useState } from "react";
import { useTranslations } from "next-intl";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const t = useTranslations("contact.form");
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrors({});
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    const newsletter = data.get("newsletter") === "on";
    const website = String(data.get("website") || "");

    const nextErrors: Record<string, string> = {};
    if (!name) nextErrors.name = t("required");
    if (!email) nextErrors.email = t("required");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = t("invalidEmail");
    }
    if (!message) nextErrors.message = t("required");

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, newsletter, website }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-[var(--color-navy)]">
          {t("name")}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          className="mt-1 w-full rounded-md border border-[var(--color-navy)]/20 bg-white px-3 py-2.5 text-[var(--color-ink)] outline-none ring-[var(--color-blue)] focus:ring-2"
        />
        {errors.name ? (
          <p className="mt-1 text-sm text-red-600">{errors.name}</p>
        ) : null}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[var(--color-navy)]">
          {t("email")}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          className="mt-1 w-full rounded-md border border-[var(--color-navy)]/20 bg-white px-3 py-2.5 text-[var(--color-ink)] outline-none ring-[var(--color-blue)] focus:ring-2"
        />
        {errors.email ? (
          <p className="mt-1 text-sm text-red-600">{errors.email}</p>
        ) : null}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[var(--color-navy)]">
          {t("message")}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="mt-1 w-full resize-y rounded-md border border-[var(--color-navy)]/20 bg-white px-3 py-2.5 text-[var(--color-ink)] outline-none ring-[var(--color-blue)] focus:ring-2"
        />
        {errors.message ? (
          <p className="mt-1 text-sm text-red-600">{errors.message}</p>
        ) : null}
      </div>

      <label className="flex items-start gap-3 text-sm text-[var(--color-ink)]/80">
        <input
          type="checkbox"
          name="newsletter"
          className="mt-1 h-4 w-4 rounded border-[var(--color-navy)]/30 text-[var(--color-orange)]"
        />
        <span>{t("newsletter")}</span>
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center rounded-md bg-[var(--color-orange)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-gold)] hover:text-[var(--color-navy)] disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? t("sending") : t("submit")}
      </button>

      {status === "success" ? (
        <p className="text-sm font-medium text-green-700" role="status">
          {t("success")}
        </p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm font-medium text-red-600" role="alert">
          {t("error")}
        </p>
      ) : null}
    </form>
  );
}
