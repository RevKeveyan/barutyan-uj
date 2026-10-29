import { getTranslations } from "next-intl/server";

const keys = ["war", "disability", "families", "homes"] as const;

export async function Mission() {
  const t = await getTranslations("mission");

  return (
    <section id="mission" className="scroll-mt-24 bg-[var(--color-paper)] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-orange)]">
          {t("eyebrow")}
        </p>
        <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--color-navy)] sm:text-4xl">
          {t("title")}
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--color-ink)]/75">
          {t("lead")}
        </p>

        <ul className="mt-12 grid gap-10 sm:grid-cols-2">
          {keys.map((key) => (
            <li key={key} className="border-l-4 border-[var(--color-gold)] pl-5">
              <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-navy)]">
                {t(`items.${key}.title`)}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-[var(--color-ink)]/70">
                {t(`items.${key}.text`)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
