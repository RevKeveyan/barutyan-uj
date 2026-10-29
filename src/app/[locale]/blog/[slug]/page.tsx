import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { blogPosts, getPostBySlug } from "@/content/blog";
import { routing, type Locale } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    blogPosts.map((post) => ({ locale, slug: post.slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const loc = locale as Locale;
  return {
    title: post.title[loc],
    description: post.excerpt[loc],
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { locale: localeParam, slug } = await params;
  setRequestLocale(localeParam);
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const t = await getTranslations("blog");
  const locale = (await getLocale()) as Locale;

  return (
    <article className="bg-[var(--color-paper)] py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Link
          href="/blog"
          className="text-sm font-semibold text-[var(--color-blue)] hover:underline"
        >
          ← {t("back")}
        </Link>
        <time
          dateTime={post.date}
          className="mt-8 block text-xs font-medium uppercase tracking-wider text-[var(--color-ink)]/45"
        >
          {post.date}
        </time>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold text-[var(--color-navy)]">
          {post.title[locale]}
        </h1>
        <div className="mt-8 space-y-4 text-lg leading-relaxed text-[var(--color-ink)]/80">
          {post.body[locale].map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
