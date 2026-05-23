"use client";

import { useI18n } from "@/lib/i18n/I18nProvider";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header() {
  const { t } = useI18n();
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 text-sm text-zinc-700 md:flex">
          <a href="#fleet" className="hover:text-zinc-900">
            {t.nav.models}
          </a>
          <a href="#how" className="hover:text-zinc-900">
            {t.nav.mission}
          </a>
          <a href="#careers" className="hover:text-zinc-900">
            {t.nav.careers}
          </a>
          <a href="#about" className="hover:text-zinc-900">
            {t.nav.about}
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="hidden items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-3 py-1.5 text-sm text-zinc-700 backdrop-blur hover:bg-white sm:inline-flex"
            aria-label={t.nav.search}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            {t.nav.search}
          </button>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
