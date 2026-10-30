# BiRent

One-page marketing site for BiRent, a car rental company in Skopje, North
Macedonia.

The site is in **Macedonian** (default) and **Albanian**, switchable in the
header. The choice is saved in the browser (`localStorage`, key
`birent-locale`).

---

## What's inside

Sections, top to bottom (`src/app/page.tsx`):

- Header with section links and the language switcher
- Hero, stats, "how it works" steps, about
- Features
- **Fleet:** 13 cars with price per day, filterable by All / Manual /
  Automatic
- Call-to-action banner, why choose us, testimonial
- Contact: phone (`tel:`) and email (`mailto:`) links
- Newsletter form (front-end only: it shows a thank-you message and sends
  nothing)
- Footer

There is no booking system or backend. Visitors get in touch by phone or
email.

---

## Tech stack

| Area | Tool |
|---|---|
| Framework | Next.js 16 (App Router) + React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Fonts | Geist via `next/font` (Latin, Latin Extended, Cyrillic) |
| Translations | own React context — `src/lib/i18n/` |

---

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

No environment variables are needed.

---

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Run the production build |
| `npm run lint` | ESLint |

---

## Project structure

```
src/
  app/
    layout.tsx           fonts, page title/description, I18nProvider
    page.tsx             the page: all sections in order
    globals.css          Tailwind + reveal animations
  components/            one file per section (Hero, Fleet, Contact …)
                         + AnimateIn (scroll reveal), Logo, LanguageSwitcher
  lib/i18n/
    translations.ts      all text, Macedonian (mk) and Albanian (sq)
    I18nProvider.tsx     locale state, useI18n() hook
public/
  cars/                  fleet photos
  *.png                  hero, about and section images, logo
```

---

## Editing content

- **Text:** `src/lib/i18n/translations.ts`. Every key exists in both `mk`
  and `sq`; add new keys to both.
- **Cars and prices:** the `CARS` array in `src/components/Fleet.tsx`
  (name, colour, transmission, price per day in €, image file name in
  `public/cars/`).
- **Phone numbers and email:** the `contact` keys in `translations.ts`.

---

## Deployment

There is no hosting config in the repo. It is a standard Next.js app, so it
deploys to Vercel as-is (`vercel` in this folder, or import the repo at
vercel.com/new).
