export const SITE_NAME = "Barutyan UJ";
export const CONTACT_EMAIL = "mr.alex.abraham2002@mail.ru";
export const CONTACT_PHONE = "+37441277725";
export const CONTACT_PHONE_DISPLAY = "+374 41 277 725";
export const CONTACT_ADDRESS =
  "Hayrapetyan's Garden, 18 Arno Babajanyan, Garni 2215, Armenia";

export const BANK_ACCOUNTS = [
  { currency: "AMD", number: "11808053114800" },
  { currency: "USD", number: "11808053114801" },
  { currency: "EUR", number: "11808053114802" },
  { currency: "RUR", number: "11808053114803" },
] as const;

export const MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d190.7092916012964!2d44.718858234224676!3d40.11223270337687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sam!4v1793008881914!5m2!1sen!2sam";

export function getSiteUrl() {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "http://localhost:3000"
  );
}
