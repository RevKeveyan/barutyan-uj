import { getTranslations } from "next-intl/server";
import { BANK_ACCOUNTS } from "@/lib/constants";
import { CopyButton } from "./CopyButton";

export async function Donate() {
  const t = await getTranslations("donate");

  return (
    <section id="donate" className="scroll-mt-24 bg-[var(--color-navy)] py-20 text-white sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-gold)]">
          {t("eyebrow")}
        </p>
        <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold sm:text-4xl">
          {t("title")}
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/75">
          {t("lead")}
        </p>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {BANK_ACCOUNTS.map((account) => (
            <li
              key={account.currency}
              className="flex flex-col gap-3 rounded-lg border border-white/15 bg-white/5 p-5 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="text-sm font-medium text-[var(--color-gold)]">
                  {t(`accounts.${account.currency}`)} ({account.currency})
                </p>
                <p className="mt-1 font-mono text-lg tracking-wide text-white">
                  {account.number}
                </p>
              </div>
              <CopyButton
                value={account.number}
                label={t("copy")}
                copiedLabel={t("copied")}
              />
            </li>
          ))}
        </ul>

        <p className="mt-8 text-sm text-white/55">{t("hint")}</p>
      </div>
    </section>
  );
}
