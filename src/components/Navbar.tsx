"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";

const links = [
  { href: "/#mission", key: "mission" as const },
  { href: "/#reports", key: "reports" as const },
  { href: "/#donate", key: "donate" as const },
  { href: "/blog", key: "blog" as const },
  { href: "/#contact", key: "contact" as const },
];

export function Navbar() {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-navy)]/10 bg-[var(--color-paper)]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/logo.png"
            alt="Barutyan UJ"
            width={64}
            height={50}
            className="h-11 w-auto object-contain sm:h-12"
            priority
          />
          <span className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-[var(--color-navy)] sm:text-xl">
            Barutyan UJ
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className="text-sm font-medium text-[var(--color-ink)]/80 transition hover:text-[var(--color-navy)]"
            >
              {t(link.key)}
            </Link>
          ))}
          <LanguageSwitcher />
          <Link
            href="/#donate"
            className="rounded-md bg-[var(--color-orange)] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--color-gold)] hover:text-[var(--color-navy)]"
          >
            {t("donate")}
          </Link>
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            className="rounded-md border border-[var(--color-navy)]/20 px-3 py-2 text-sm font-medium text-[var(--color-navy)]"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? t("close") : t("menu")}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-[var(--color-navy)]/10 bg-[var(--color-paper)] px-4 py-4 lg:hidden"
        >
          <nav className="flex flex-col gap-3" aria-label="Mobile">
            {links.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className="py-1 text-base font-medium text-[var(--color-ink)]"
                onClick={() => setOpen(false)}
              >
                {t(link.key)}
              </Link>
            ))}
            <Link
              href="/#donate"
              className="mt-2 inline-flex justify-center rounded-md bg-[var(--color-orange)] px-4 py-2.5 text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              {t("donate")}
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
