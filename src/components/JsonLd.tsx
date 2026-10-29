import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  getSiteUrl,
  SITE_NAME,
} from "@/lib/constants";

export function JsonLd() {
  const siteUrl = getSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: SITE_NAME,
    alternateName: "Power of Kindness",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    email: CONTACT_EMAIL,
    telephone: CONTACT_PHONE_DISPLAY,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Hayrapetyan's Garden, 18 Arno Babajanyan",
      addressLocality: "Garni",
      postalCode: "2215",
      addressCountry: "AM",
    },
    description: CONTACT_ADDRESS,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
