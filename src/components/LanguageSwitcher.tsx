"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

const labels: Record<Locale, string> = {
  en: "EN",
  ru: "RU",
  hy: "HY",
};

export function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex items-center gap-1" role="group" aria-label="Language">
      {routing.locales.map((code) => {
        const active = code === locale;
        return (
          <button
            key={code}
            type="button"
            onClick={() => router.replace(pathname, { locale: code })}
            className={
              active
                ? "rounded px-2 py-1 text-xs font-semibold tracking-wide text-white bg-[var(--color-navy)]"
                : "rounded px-2 py-1 text-xs font-semibold tracking-wide text-[var(--color-navy)] hover:bg-[var(--color-navy)]/10"
            }
            aria-current={active ? "true" : undefined}
          >
            {labels[code]}
          </button>
        );
      })}
    </div>
  );
}
