import { getTranslations } from "next-intl/server";

const keys = ["one", "two", "three"] as const;

export async function Reports() {
  const t = await getTranslations("reports");

  return (
    <section
      id="reports"
      className="scroll-mt-24 bg-[var(--color-mist)] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-blue)]">
          {t("eyebrow")}
        </p>
        <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--color-navy)] sm:text-4xl">
          {t("title")}
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--color-ink)]/75">
          {t("lead")}
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {keys.map((key, index) => (
            <article key={key} className="relative pt-2">
              <span className="font-[family-name:var(--font-display)] text-5xl font-bold text-[var(--color-navy)]/10">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-navy)]">
                {t(`items.${key}.title`)}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-[var(--color-ink)]/70">
                {t(`items.${key}.text`)}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-10 text-sm text-[var(--color-ink)]/55">{t("note")}</p>
      </div>
    </section>
  );
}
