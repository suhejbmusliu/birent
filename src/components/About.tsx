"use client";

import { useI18n } from "@/lib/i18n/I18nProvider";

export function About() {
  const { t } = useI18n();

  const stats = [
    {
      label: t.about.stat1,
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M3 17V7l3-3h12l3 3v10" />
          <circle cx="7" cy="17" r="2" />
          <circle cx="17" cy="17" r="2" />
          <path d="M9 17h6" />
        </svg>
      ),
    },
    {
      label: t.about.stat2,
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <path d="M2 10h20" />
        </svg>
      ),
    },
    {
      label: t.about.stat3,
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="about" className="bg-zinc-50">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">

        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
          <div>
            <div className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-wider text-zinc-500">
              <span className="h-px w-8 bg-[#E11D48]" />
              {t.about.eyebrow}
            </div>
            <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-4xl">
              {t.about.title}
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-zinc-600">
              {t.about.desc}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-800 shadow-sm"
                >
                  <span className="text-[#E11D48]">{s.icon}</span>
                  {s.label}
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-4">
              <a
                href="#fleet"
                className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
              >
                {t.about.cta}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M7 17 17 7" />
                  <path d="M9 7h8v8" />
                </svg>
              </a>

              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <span
                      key={i}
                      className="inline-block h-8 w-8 rounded-full border-2 border-white bg-zinc-300 bg-cover bg-center"
                      style={{ backgroundImage: `url(https://i.pravatar.cc/64?img=${i + 10})` }}
                    />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-0.5 text-[#E11D48]">
                    {[0, 1, 2, 3].map((i) => <Star key={i} filled />)}
                    <Star half />
                  </div>
                  <div className="text-xs text-zinc-500">{t.about.reviews}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="/img_1.png"
              alt=""
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex gap-2 flex-wrap">
              {stats.map((s) => (
                <span
                  key={s.label}
                  className="flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-zinc-900 backdrop-blur"
                >
                  <span className="text-[#E11D48]">{s.icon}</span>
                  {s.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Star({ filled, half }: { filled?: boolean; half?: boolean }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden>
      <path
        d="M12 2l2.9 6.9L22 10l-5.5 4.8L18 22l-6-3.6L6 22l1.5-7.2L2 10l7.1-1.1L12 2z"
        fill={filled || half ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.5"
        fillOpacity={half ? 0.5 : 1}
      />
    </svg>
  );
}
