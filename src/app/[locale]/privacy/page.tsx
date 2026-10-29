import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: string }>;
};

const sectionKeys = ["intro", "form", "analytics", "contact"] as const;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacy" });
  return {
    title: t("title"),
    description: t("sections.intro.text"),
  };
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("privacy");

  return (
    <div className="bg-[var(--color-paper)] py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold text-[var(--color-navy)]">
          {t("title")}
        </h1>
        <p className="mt-2 text-sm text-[var(--color-ink)]/50">{t("updated")}</p>

        <div className="mt-10 space-y-8">
          {sectionKeys.map((key) => (
            <section key={key}>
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-navy)]">
                {t(`sections.${key}.title`)}
              </h2>
              <p className="mt-2 leading-relaxed text-[var(--color-ink)]/75">
                {t(`sections.${key}.text`)}
              </p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
