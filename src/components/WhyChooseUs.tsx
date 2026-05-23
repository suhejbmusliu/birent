"use client";

import { useI18n } from "@/lib/i18n/I18nProvider";
import { AnimateIn } from "@/components/AnimateIn";

export function WhyChooseUs() {
  const { t } = useI18n();
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <AnimateIn direction="up">
          <div className="overflow-hidden rounded-3xl bg-zinc-900 p-6 text-white sm:p-10 lg:p-14">
            <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              {t.why.title}
            </h2>

            <div className="mt-10 grid gap-4 lg:grid-cols-2">
              <AnimateIn direction="left" delay={150}>
                <FeatureCard
                  title={t.why.card1Title}
                  desc={t.why.card1Desc}
                  image="/tick_img.png"
                />
              </AnimateIn>
              <AnimateIn direction="right" delay={250}>
                <FeatureCard
                  title={t.why.card2Title}
                  desc={t.why.card2Desc}
                  image="/secure_img.png"
                />
              </AnimateIn>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

function FeatureCard({ title, desc, image }: { title: string; desc: string; image: string }) {
  return (
    <div className="grid grid-cols-1 overflow-hidden rounded-2xl bg-zinc-800 sm:grid-cols-[1fr_1fr]">
      <div className="p-6 sm:p-7">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-zinc-300">{desc}</p>
      </div>
      <img src={image} alt="" className="h-full min-h-[180px] w-full object-cover" />
    </div>
  );
}
