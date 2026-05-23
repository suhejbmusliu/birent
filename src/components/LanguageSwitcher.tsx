"use client";

import { useI18n } from "@/lib/i18n/I18nProvider";

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();
  return (
    <div className="inline-flex items-center rounded-full border border-zinc-200 bg-white p-0.5 text-xs font-medium">
      <button
        type="button"
        onClick={() => setLocale("mk")}
        className={`rounded-full px-3 py-1 transition-colors ${
          locale === "mk" ? "bg-zinc-900 text-white" : "text-zinc-600 hover:text-zinc-900"
        }`}
        aria-pressed={locale === "mk"}
      >
        МК
      </button>
      <button
        type="button"
        onClick={() => setLocale("sq")}
        className={`rounded-full px-3 py-1 transition-colors ${
          locale === "sq" ? "bg-zinc-900 text-white" : "text-zinc-600 hover:text-zinc-900"
        }`}
        aria-pressed={locale === "sq"}
      >
        SQ
      </button>
    </div>
  );
}
