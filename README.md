# Barutyan UJ — Power of Kindness

Charitable foundation landing page (EN / RU / HY) built with Next.js.

## Setup

```bash
npm install
cp .env.example .env.local
```

Fill `.env.local`:

- `GMAIL_USER` — Gmail address used to send mail
- `GMAIL_APP_PASSWORD` — [Google App Password](https://myaccount.google.com/apppasswords)
- `CONTACT_TO` — destination inbox (default: mr.alex.abraham2002@mail.ru)
- `NEXT_PUBLIC_SITE_URL` — production URL
- `NEXT_PUBLIC_GA_ID` — Google Analytics 4 measurement ID
- `NEXT_PUBLIC_YM_ID` — Yandex Metrika counter ID

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).
