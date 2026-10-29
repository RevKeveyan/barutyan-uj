import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export async function Hero() {
  const t = await getTranslations("hero");

  return (
    <section className="relative isolate min-h-[88vh] overflow-hidden bg-[var(--color-navy)] text-white">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 70% 20%, #0159B3 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 10% 80%, #FE8810 0%, transparent 50%), linear-gradient(160deg, #01367A 0%, #012a5c 45%, #011f45 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20 lg:justify-center lg:pb-24">
        <div className="max-w-2xl">
          <div className="mb-8 flex items-center gap-4">
            <Image
              src="/logo.png"
              alt=""
              width={140}
              height={108}
              className="h-24 w-auto object-contain drop-shadow-lg sm:h-28"
              priority
            />
            <div>
              <p className="font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.2em] text-[var(--color-gold)]">
                {t("tagline")}
              </p>
              <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                {t("brand")}
              </h1>
              <p className="mt-1 text-sm text-white/70">{t("foundation")}</p>
            </div>
          </div>

          <p className="font-[family-name:var(--font-display)] text-2xl leading-snug text-white/95 sm:text-3xl">
            {t("headline")}
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            {t("subtitle")}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/#donate"
              className="inline-flex items-center justify-center rounded-md bg-[var(--color-orange)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-gold)] hover:text-[var(--color-navy)]"
            >
              {t("ctaDonate")}
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-md border border-white/35 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
            >
              {t("ctaContact")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
