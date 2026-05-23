"use client";

import { useI18n } from "@/lib/i18n/I18nProvider";

export function Hero() {
  const { t } = useI18n();
  return (
    <section className="relative isolate overflow-hidden rounded-b-3xl bg-zinc-900">
      <picture>
        <source media="(max-width: 639px)" srcSet="/hero_img_responsive.png" />
        <img
          src="/hero_img.png"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
      </picture>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

      <div className="mx-auto flex min-h-[640px] max-w-7xl flex-col justify-end px-4 pb-10 pt-32 sm:px-6 sm:pb-14 lg:px-8 lg:pb-16">
        <p
          className="mb-3 text-sm text-white/80 hero-anim"
          style={{ animationDelay: "0.1s" }}
        >
          {t.hero.tagline}
        </p>

        <h1
          className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl hero-anim"
          style={{ animationDelay: "0.3s" }}
        >
          {t.hero.title1}{" "}
          <span className="inline-flex items-center gap-2 align-middle">
            <span
              className="rounded-full bg-white px-4 py-1 text-3xl text-zinc-900 sm:text-4xl md:text-5xl hero-pop"
              style={{ animationDelay: "0.55s" }}
            >
              {t.hero.pill}
            </span>
            <span
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#E11D48] text-white sm:h-10 sm:w-10 hero-pop"
              style={{ animationDelay: "0.65s" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M7 17 17 7" />
                <path d="M9 7h8v8" />
              </svg>
            </span>
          </span>
          <br />
          {t.hero.title2}
        </h1>

        <div
          className="mt-8 flex items-center justify-end hero-anim"
          style={{ animationDelay: "0.75s" }}
        >
          <a
            href="#how"
            className="inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100"
          >
            {t.hero.cta}
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900 text-white">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M7 17 17 7" />
                <path d="M9 7h8v8" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
