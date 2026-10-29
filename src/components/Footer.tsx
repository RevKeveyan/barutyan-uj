import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_DISPLAY,
} from "@/lib/constants";

export async function Footer() {
  const t = await getTranslations("footer");
  const nav = await getTranslations("nav");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-navy)]/10 bg-[var(--color-navy)] text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:justify-between">
        <div>
          <p className="font-[family-name:var(--font-display)] text-2xl font-bold">
            Barutyan UJ
          </p>
          <p className="mt-2 text-sm text-white/65">{t("tagline")}</p>
          <p className="mt-4 text-sm text-white/80">
            <a href={`tel:${CONTACT_PHONE}`} className="hover:text-[var(--color-gold)]">
              {CONTACT_PHONE_DISPLAY}
            </a>
            <span className="mx-2 text-white/30">·</span>
            <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-[var(--color-gold)]">
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <Link href="/#mission" className="text-white/75 hover:text-white">
            {nav("mission")}
          </Link>
          <Link href="/#donate" className="text-white/75 hover:text-white">
            {nav("donate")}
          </Link>
          <Link href="/blog" className="text-white/75 hover:text-white">
            {nav("blog")}
          </Link>
          <Link href="/privacy" className="text-white/75 hover:text-white">
            {t("privacy")}
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/45">
        © {year} Barutyan UJ. {t("rights")}
      </div>
    </footer>
  );
}
