"use client";

import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n/I18nProvider";
import { AnimateIn } from "@/components/AnimateIn";

export function Testimonial() {
  const { t } = useI18n();
  const reviews = t.testimonial.reviews;
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % reviews.length);
    }, 4500);
    return () => clearInterval(id);
  }, [paused, reviews.length]);

  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length);
  const next = () => setCurrent((c) => (c + 1) % reviews.length);

  const review = reviews[current];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <AnimateIn direction="up">
          <div className="mb-3 flex items-center gap-3 text-xs font-medium uppercase tracking-wider text-zinc-500">
            <span className="h-px w-8 bg-[#E11D48]" />
            {t.testimonial.eyebrow}
          </div>
          <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-4xl">
            {t.testimonial.title}
          </h2>
        </AnimateIn>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <AnimateIn direction="left" delay={100}>
            <div
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <figure key={current} className="animate-fade-slide">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="text-zinc-200" aria-hidden>
                  <path d="M7 7h4v4H7v4a4 4 0 0 0 4 4v-2a2 2 0 0 1-2-2V11h2V7H7zm10 0h4v4h-4v4a4 4 0 0 0 4 4v-2a2 2 0 0 1-2-2V11h2V7h-4z" />
                </svg>
                <blockquote className="mt-4 max-w-xl text-lg leading-relaxed text-zinc-700 sm:text-xl">
                  {review.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span
                    className="inline-block h-10 w-10 shrink-0 rounded-full bg-zinc-300 bg-cover bg-center"
                    style={{ backgroundImage: `url(https://i.pravatar.cc/80?img=${review.avatar})` }}
                  />
                  <div>
                    <div className="text-sm font-medium text-zinc-900">{review.author}</div>
                    <div className="text-xs text-zinc-500">{t.footer.location}</div>
                  </div>
                </figcaption>
              </figure>

              <div className="mt-8 flex items-center gap-4">
                <button
                  onClick={prev}
                  aria-label="Previous"
                  className="rounded-full border border-zinc-200 p-2 transition-colors hover:bg-zinc-50"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>

                <div className="flex gap-1.5">
                  {reviews.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      aria-label={`Review ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === current ? "w-6 bg-zinc-900" : "w-1.5 bg-zinc-300"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={next}
                  aria-label="Next"
                  className="rounded-full border border-zinc-200 p-2 transition-colors hover:bg-zinc-50"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>
          </AnimateIn>

          <AnimateIn direction="right" delay={200}>
            <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=80"
              alt=""
              className="aspect-[5/4] w-full rounded-2xl object-cover"
            />
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
