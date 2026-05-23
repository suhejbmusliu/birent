"use client";

import { useI18n } from "@/lib/i18n/I18nProvider";
import { AnimateIn } from "@/components/AnimateIn";

export function CTABanner() {
  const { t } = useI18n();

  return (
    <section className="bg-white px-4 py-10 sm:px-6 lg:px-8">
      <AnimateIn direction="scale">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#E11D48]">
          <div className="relative px-8 py-16 sm:px-14 sm:py-20 lg:px-20">
            <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-white/10" />
            <div className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-white/10" />

            <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  {t.ctaBanner.title}
                </h2>
                <p className="mt-3 max-w-lg text-base text-white/80">
                  {t.ctaBanner.desc}
                </p>
              </div>
              <a
                href="#fleet"
                className="shrink-0 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#E11D48] shadow transition-opacity hover:opacity-90"
              >
                {t.ctaBanner.cta}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M7 17 17 7" />
                  <path d="M9 7h8v8" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </AnimateIn>
    </section>
  );
}
