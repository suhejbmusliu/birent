"use client";

import { useI18n } from "@/lib/i18n/I18nProvider";
import { AnimateIn } from "@/components/AnimateIn";

export function Stats() {
  const { t } = useI18n();

  const items = [
    { value: t.stats.s1val, label: t.stats.s1label },
    { value: t.stats.s2val, label: t.stats.s2label },
    { value: t.stats.s3val, label: t.stats.s3label },
    { value: t.stats.s4val, label: t.stats.s4label },
  ];

  return (
    <section className="border-y border-zinc-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {items.map((item, i) => (
            <AnimateIn key={item.label} delay={i * 100} direction="up">
              <div className="text-center">
                <dt className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
                  {item.value}
                </dt>
                <dd className="mt-2 text-sm font-medium text-zinc-500">{item.label}</dd>
              </div>
            </AnimateIn>
          ))}
        </dl>
      </div>
    </section>
  );
}
