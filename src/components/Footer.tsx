"use client";

import { useI18n } from "@/lib/i18n/I18nProvider";
import { Logo } from "./Logo";

export function Footer() {
  const { t } = useI18n();

  const columns: { heading: string; items: string[] }[] = [
    { heading: t.footer.products, items: ["Premium", "SUV", "Sedan", "Electric"] },
    { heading: t.footer.company, items: [t.nav.about, t.nav.careers, t.nav.mission] },
    { heading: t.footer.support, items: ["FAQ", t.nav.search, "Contact"] },
    { heading: t.footer.legal, items: ["Privacy", "Terms", "Cookies"] },
  ];

  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <div className="border-t border-zinc-200 pt-10">
          <div className="grid gap-10 lg:grid-cols-[1.5fr_repeat(4,1fr)]">
            <div>
              <Logo />
              <p className="mt-3 max-w-xs text-sm text-zinc-500">{t.footer.location}</p>
            </div>
            {columns.map((col) => (
              <div key={col.heading}>
                <div className="text-xs font-semibold uppercase tracking-wider text-zinc-900">
                  {col.heading}
                </div>
                <ul className="mt-3 space-y-2 text-sm text-zinc-600">
                  {col.items.map((item) => (
                    <li key={item}>
                      <a href="#" className="hover:text-zinc-900">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 border-t border-zinc-100 pt-6 text-xs text-zinc-500">
            {t.footer.rights}
          </div>
        </div>
      </div>
    </footer>
  );
}
