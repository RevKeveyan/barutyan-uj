import { setRequestLocale } from "next-intl/server";
import { BlogTeaser } from "@/components/BlogTeaser";
import { Contact } from "@/components/Contact";
import { Donate } from "@/components/Donate";
import { Hero } from "@/components/Hero";
import { Mission } from "@/components/Mission";
import { Reports } from "@/components/Reports";
import { routing } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <Mission />
      <Reports />
      <Donate />
      <BlogTeaser />
      <Contact />
    </>
  );
}
