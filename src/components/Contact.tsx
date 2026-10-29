import { getTranslations } from "next-intl/server";
import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_DISPLAY,
  MAP_EMBED_SRC,
} from "@/lib/constants";
import { ContactForm } from "./ContactForm";

export async function Contact() {
  const t = await getTranslations("contact");

  return (
    <section id="contact" className="scroll-mt-24 bg-[var(--color-mist)] py-20 sm:py-24">
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

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <div>
            <ContactForm />
          </div>

          <div className="space-y-6">
            <dl className="space-y-4 text-[var(--color-ink)]">
              <div>
                <dt className="text-sm font-semibold text-[var(--color-navy)]">
                  {t("phone")}
                </dt>
                <dd className="mt-1">
                  <a
                    href={`tel:${CONTACT_PHONE}`}
                    className="text-[var(--color-blue)] hover:underline"
                  >
                    {CONTACT_PHONE_DISPLAY}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-[var(--color-navy)]">
                  {t("email")}
                </dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-[var(--color-blue)] hover:underline"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-[var(--color-navy)]">
                  {t("address")}
                </dt>
                <dd className="mt-1 leading-relaxed">{t("addressValue")}</dd>
              </div>
            </dl>

            <div className="overflow-hidden rounded-lg border border-[var(--color-navy)]/10 bg-white shadow-sm">
              <iframe
                title={CONTACT_ADDRESS}
                src={MAP_EMBED_SRC}
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
