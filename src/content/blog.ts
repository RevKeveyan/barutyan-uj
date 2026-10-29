import type { Locale } from "@/i18n/routing";

export type BlogPost = {
  slug: string;
  date: string;
  title: Record<Locale, string>;
  excerpt: Record<Locale, string>;
  body: Record<Locale, string[]>;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "welcome-to-barutyan-uj",
    date: "2026-10-01",
    title: {
      en: "Welcome to Barutyan UJ",
      ru: "Добро пожаловать в Barutyan UJ",
      hy: "Բարի գալուստ Barutyan UJ",
    },
    excerpt: {
      en: "We open our doors with a clear purpose: turn kindness into lasting support for people in need across Armenia.",
      ru: "Мы открываем двери с ясной целью: превратить доброту в устойчивую поддержку нуждающихся по всей Армении.",
      hy: "Մենք բացում ենք մեր դռները հստակ նպատակով՝ բարությունը վերածել կայուն աջակցության Հայաստանում կարիքավորների համար։",
    },
    body: {
      en: [
        "Barutyan UJ — Power of Kindness — is a charitable foundation based in Armenia.",
        "Our focus is practical help for war survivors, people with disabilities, vulnerable families, orphanages and elderly homes.",
        "This website is where you can learn about our mission, see how to donate via bank transfer, and reach our team.",
      ],
      ru: [
        "Barutyan UJ — Сила доброты — благотворительный фонд в Армении.",
        "Мы оказываем практическую помощь пострадавшим от войны, людям с ограниченными возможностями, уязвимым семьям, детским домам и домам престарелых.",
        "На этом сайте вы узнаете о нашей миссии, сможете перевести пожертвование на счёт фонда и связаться с командой.",
      ],
      hy: [
        "Barutyan UJ — Բարության ուժ — բարեգործական հիմնադրամ է Հայաստանում։",
        "Մենք գործնական օգնություն ենք տրամադրում պատերազմից տուժածներին, ֆիզիկական սահմանափակումներ ունեցողներին, խոցելի ընտանիքներին, մանկատներին և ծերանոցներին։",
        "Այս կայքում կարող եք ծանոթանալ մեր առաքելությանը, կատարել նվիրատվություն բանկային փոխանցմամբ և կապվել մեր թիմի հետ։",
      ],
    },
  },
  {
    slug: "how-your-donation-helps",
    date: "2026-10-10",
    title: {
      en: "How your donation helps",
      ru: "Как помогает ваше пожертвование",
      hy: "Ինչպես է օգնում ձեր նվիրատվությունը",
    },
    excerpt: {
      en: "Every transfer goes directly to programmes that support people who need care, food, shelter and dignity.",
      ru: "Каждый перевод идёт напрямую на программы поддержки людей, которым нужны забота, еда, кров и достоинство.",
      hy: "Յուրաքանչյուր փոխանցում ուղղվում է այն ծրագրերին, որոնք աջակցում են խնամքի, սննդի, կացարանի և արժանապատվության կարիք ունեցողներին։",
    },
    body: {
      en: [
        "You can donate in AMD, USD, EUR or RUR using the bank accounts published on this site.",
        "We prioritise transparent reporting so donors can see where support is directed.",
        "If you have questions before giving, use the contact form — we are happy to explain our current needs.",
      ],
      ru: [
        "Пожертвовать можно в AMD, USD, EUR или RUR — реквизиты опубликованы на сайте.",
        "Мы стремимся к прозрачной отчётности, чтобы жертвователи видели, куда направлена помощь.",
        "Если есть вопросы до перевода, напишите через форму — расскажем о текущих нуждах.",
      ],
      hy: [
        "Կարող եք նվիրաբերել AMD, USD, EUR կամ RUR արժույթով՝ օգտագործելով կայքում հրապարակված հաշվեհամարները։",
        "Մենք կարևորում ենք թափանցիկ հաշվետվությունը, որպեսզի նվիրատուները տեսնեն, թե ուր է ուղղվում աջակցությունը։",
        "Եթե հարցեր ունեք նվիրատվությունից առաջ, գրեք կապի ձևով՝ ուրախ կլինենք բացատրել ընթացիկ կարիքները։",
      ],
    },
  },
  {
    slug: "garni-office-open",
    date: "2026-10-20",
    title: {
      en: "Visit us in Garni",
      ru: "Мы в Гарни",
      hy: "Այցելեք մեզ Գառնիում",
    },
    excerpt: {
      en: "Our address is Hayrapetyan's Garden in Garni. Reach us by phone, email or the map on the contact page.",
      ru: "Наш адрес — Hayrapetyan's Garden в Гарни. Свяжитесь по телефону, email или через карту на странице контактов.",
      hy: "Մեր հասցեն է Hayrapetyan's Garden-ը Գառնիում։ Կապվեք հեռախոսով, էլ․ փոստով կամ կապի էջի քարտեզով։",
    },
    body: {
      en: [
        "Barutyan UJ is based at Hayrapetyan's Garden, 18 Arno Babajanyan, Garni 2215.",
        "Phone: +374 41 277 725. Email: mr.alex.abraham2002@mail.ru.",
        "We welcome partners, volunteers and anyone who wants to learn how to support our programmes.",
      ],
      ru: [
        "Barutyan UJ находится по адресу Hayrapetyan's Garden, 18 Арно Бабаджанян, Garni 2215.",
        "Телефон: +374 41 277 725. Email: mr.alex.abraham2002@mail.ru.",
        "Мы открыты для партнёров, волонтёров и всех, кто хочет узнать, как поддержать наши программы.",
      ],
      hy: [
        "Barutyan UJ-ը գտնվում է հետևյալ հասցեով՝ Hayrapetyan's Garden, 18 Արնո Բաբաջանյան, Գառնի 2215։",
        "Հեռախոս՝ +374 41 277 725։ Էլ․ փոստ՝ mr.alex.abraham2002@mail.ru։",
        "Մենք բաց ենք գործընկերների, կամավորների և բոլոր նրանց համար, ովքեր ցանկանում են աջակցել մեր ծրագրերին։",
      ],
    },
  },
];

export function getPostsSorted() {
  return [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
