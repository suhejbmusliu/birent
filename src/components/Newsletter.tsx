"use client";

import { useI18n } from "@/lib/i18n/I18nProvider";
import { useState } from "react";
import { Logo } from "./Logo";

export function Newsletter() {
  const { t } = useI18n();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <h2 className="py-10 text-center text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
          {t.cta.title}
        </h2>

        <div className="rounded-3xl bg-zinc-900 p-8 text-white sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <div className="mb-4">
                <Logo className="[&_span:last-child]:text-white" />
              </div>
              <h3 className="max-w-md text-2xl font-semibold tracking-tight sm:text-3xl">
                {t.newsletter.title}
              </h3>
              <p className="mt-2 max-w-sm text-sm text-zinc-400">{t.newsletter.desc}</p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email) setSubmitted(true);
              }}
              className="w-full"
            >
              <div className="flex w-full flex-col gap-2 sm:flex-row">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.newsletter.placeholder}
                  required
                  className="w-full flex-1 rounded-full bg-zinc-800 px-5 py-3 text-sm text-white placeholder:text-zinc-500 outline-none focus:ring-2 focus:ring-white/20"
                />
                <button
                  type="submit"
                  className="rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-100"
                >
                  {t.newsletter.subscribe}
                </button>
              </div>
              <p className="mt-3 text-xs text-zinc-500">
                {submitted ? "✓ " : ""}
                {t.newsletter.privacy}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
