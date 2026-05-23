"use client";

import { useI18n } from "@/lib/i18n/I18nProvider";
import { AnimateIn } from "@/components/AnimateIn";

export function Contact() {
  const { t } = useI18n();

  const cards = [
    {
      label: t.contact.phoneLabel,
      lines: [t.contact.phone1, t.contact.phone2],
      href1: `tel:${t.contact.phone1.replace(/\s/g, "")}`,
      href2: `tel:${t.contact.phone2.replace(/\s/g, "")}`,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 5.99 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
    {
      label: t.contact.emailLabel,
      lines: [t.contact.email, t.contact.hours],
      href1: `mailto:${t.contact.email}`,
      href2: null,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m2 7 10 7 10-7" />
        </svg>
      ),
    },
    {
      label: t.contact.locationLabel,
      lines: [t.contact.address],
      href1: "https://maps.google.com/?q=Skopje,North+Macedonia",
      href2: null,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M12 21c-4-4-8-7.5-8-11a8 8 0 1 1 16 0c0 3.5-4 7-8 11z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="bg-zinc-50">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">

        <AnimateIn direction="up">
          <div className="mb-3 flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-wider text-zinc-500">
            <span className="h-px w-8 bg-[#E11D48]" />
            {t.contact.eyebrow}
          </div>
          <h2 className="text-center text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            {t.contact.title}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-center text-sm text-zinc-500">
            {t.contact.desc}
          </p>
        </AnimateIn>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {cards.map((card, i) => (
            <AnimateIn key={card.label} direction="up" delay={i * 100}>
              <div className="flex h-full flex-col items-center rounded-2xl border border-zinc-100 bg-white px-8 py-10 text-center shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-900 text-white">
                  {card.icon}
                </div>
                <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  {card.label}
                </div>
                {card.href1 ? (
                  <a
                    href={card.href1}
                    target={card.href1.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="text-base font-semibold text-zinc-900 transition-colors hover:text-[#E11D48]"
                  >
                    {card.lines[0]}
                  </a>
                ) : (
                  <p className="text-base font-semibold text-zinc-900">{card.lines[0]}</p>
                )}
                {card.lines[1] && (
                  card.href2 ? (
                    <a
                      href={card.href2}
                      className="mt-1 text-sm text-zinc-500 transition-colors hover:text-[#E11D48]"
                    >
                      {card.lines[1]}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm text-zinc-500">{card.lines[1]}</p>
                  )
                )}
              </div>
            </AnimateIn>
          ))}
        </div>

      </div>
    </section>
  );
}
