import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getPostsSorted } from "@/content/blog";
import type { Locale } from "@/i18n/routing";

export async function BlogTeaser() {
  const t = await getTranslations("blog");
  const locale = (await getLocale()) as Locale;
  const posts = getPostsSorted().slice(0, 3);

  return (
    <section id="blog" className="scroll-mt-24 bg-[var(--color-paper)] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-orange)]">
              {t("eyebrow")}
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--color-navy)] sm:text-4xl">
              {t("title")}
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-[var(--color-ink)]/75">
              {t("lead")}
            </p>
          </div>
          <Link
            href="/blog"
            className="text-sm font-semibold text-[var(--color-blue)] underline-offset-4 hover:underline"
          >
            {t("all")}
          </Link>
        </div>

        <ul className="mt-12 grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <li key={post.slug}>
              <article>
                <time
                  dateTime={post.date}
                  className="text-xs font-medium uppercase tracking-wider text-[var(--color-ink)]/45"
                >
                  {post.date}
                </time>
                <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-navy)]">
                  <Link href={`/blog/${post.slug}`} className="hover:text-[var(--color-blue)]">
                    {post.title[locale]}
                  </Link>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink)]/70">
                  {post.excerpt[locale]}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-3 inline-block text-sm font-semibold text-[var(--color-orange)]"
                >
                  {t("readMore")}
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
