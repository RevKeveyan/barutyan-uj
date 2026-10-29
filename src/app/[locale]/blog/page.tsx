import type { Metadata } from "next";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getPostsSorted } from "@/content/blog";
import { routing, type Locale } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  return {
    title: t("title"),
    description: t("lead"),
  };
}

export default async function BlogPage({ params }: Props) {
  const { locale: localeParam } = await params;
  setRequestLocale(localeParam);
  const t = await getTranslations("blog");
  const locale = (await getLocale()) as Locale;
  const posts = getPostsSorted();

  return (
    <div className="bg-[var(--color-paper)] py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-orange)]">
          {t("eyebrow")}
        </p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold text-[var(--color-navy)]">
          {t("title")}
        </h1>
        <p className="mt-4 text-lg text-[var(--color-ink)]/75">{t("lead")}</p>

        {posts.length === 0 ? (
          <p className="mt-12 text-[var(--color-ink)]/60">{t("empty")}</p>
        ) : (
          <ul className="mt-12 divide-y divide-[var(--color-navy)]/10">
            {posts.map((post) => (
              <li key={post.slug} className="py-8">
                <time
                  dateTime={post.date}
                  className="text-xs font-medium uppercase tracking-wider text-[var(--color-ink)]/45"
                >
                  {post.date}
                </time>
                <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--color-navy)]">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-[var(--color-blue)]"
                  >
                    {post.title[locale]}
                  </Link>
                </h2>
                <p className="mt-2 text-[var(--color-ink)]/70">
                  {post.excerpt[locale]}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-3 inline-block text-sm font-semibold text-[var(--color-orange)]"
                >
                  {t("readMore")}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
