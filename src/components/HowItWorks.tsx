"use client";

import { useI18n } from "@/lib/i18n/I18nProvider";
import { AnimateIn } from "@/components/AnimateIn";

export function HowItWorks() {
  const { t } = useI18n();
  return (
    <section id="how" className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28">
        <AnimateIn direction="left">
          <div>
            <div className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-wider text-zinc-500">
              <span className="h-px w-8 bg-[#E11D48]" />
              {t.how.eyebrow}
            </div>

            <h2 className="max-w-md text-3xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-4xl">
              {t.how.title}
            </h2>

            <p className="mt-4 max-w-md text-sm text-zinc-600">{t.how.desc}</p>

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <Step
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <rect x="3" y="4" width="18" height="16" rx="2" />
                    <path d="M3 10h18" />
                    <path d="M8 4v4" />
                    <path d="M16 4v4" />
                  </svg>
                }
                title={t.how.step1Title}
                desc={t.how.step1Desc}
                cta={t.how.learnMore}
              />
              <Step
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M3 17V7l3-3h12l3 3v10" />
                    <circle cx="7" cy="17" r="2" />
                    <circle cx="17" cy="17" r="2" />
                    <path d="M9 17h6" />
                  </svg>
                }
                title={t.how.step2Title}
                desc={t.how.step2Desc}
                cta={t.how.learnMore}
              />
            </div>

            <a
              href="#fleet"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-800"
            >
              {t.how.joinTeam}
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-zinc-900">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M7 17 17 7" />
                  <path d="M9 7h8v8" />
                </svg>
              </span>
            </a>
          </div>
        </AnimateIn>

        <AnimateIn direction="right" delay={150}>
          <div className="relative">
            <img
              src="/about_img.png"
              alt=""
              className="aspect-[5/4] w-full rounded-2xl object-cover"
            />
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

function Step({ icon, title, desc, cta }: { icon: React.ReactNode; title: string; desc: string; cta: string }) {
  return (
    <div>
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-white">
        {icon}
      </div>
      <h3 className="text-base font-semibold text-zinc-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-600">{desc}</p>
      <a href="#" className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-zinc-900 hover:text-[#E11D48]">
        {cta}
        <span aria-hidden>→</span>
      </a>
    </div>
  );
}
