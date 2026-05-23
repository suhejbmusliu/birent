"use client";

import { useI18n } from "@/lib/i18n/I18nProvider";
import { useMemo, useState } from "react";

type Transmission = "manual" | "automatic";
type ColorKey = "white" | "black" | "brown" | "blue";

type Car = {
  slug: string;
  image: string;
  name: string;
  color: ColorKey;
  transmission: Transmission;
  price: number;
};

const CARS: Car[] = [
  { slug: "polo-manual-white",        image: "Polo_white_manual.png",    name: "Volkswagen Polo",       color: "white", transmission: "manual",    price: 25 },
  { slug: "polo-manual-black",        image: "Polo_black_manual.png",    name: "Volkswagen Polo",       color: "black", transmission: "manual",    price: 25 },
  { slug: "golf6-manual-white",       image: "Golf6_white_manual.png",   name: "Volkswagen Golf 6",     color: "white", transmission: "manual",    price: 30 },
  { slug: "golf7-manual-white",       image: "Golf7_white_manual.png",   name: "Volkswagen Golf 7",     color: "white", transmission: "manual",    price: 35 },
  { slug: "golf7-manual-black",       image: "Golf7_black_manual.png",   name: "Volkswagen Golf 7",     color: "black", transmission: "manual",    price: 35 },
  { slug: "golf7-automatic-black",    image: "Golf7_black_manual.png",   name: "Volkswagen Golf 7",     color: "black", transmission: "automatic", price: 40 },
  { slug: "audi-a3-manual-black",     image: "Audi_a3_black.png",        name: "Audi A3",               color: "black", transmission: "manual",    price: 30 },
  { slug: "audi-a3-manual-brown",     image: "Audi_a3_brown.png",        name: "Audi A3",               color: "brown", transmission: "manual",    price: 30 },
  { slug: "audi-a3-automatic-blue",   image: "Audi_a3_darkblue.png",     name: "Audi A3",               color: "blue",  transmission: "automatic", price: 35 },
  { slug: "audi-a4-automatic-black",  image: "Audi_a4_black.png",        name: "Audi A4",               color: "black", transmission: "automatic", price: 45 },
  { slug: "passat-b7-manual-black",   image: "passat_b7_black.png",      name: "Volkswagen Passat B7",  color: "black", transmission: "manual",    price: 40 },
  { slug: "skoda-fabia-manual-white", image: "skoda_fabida_white.png",   name: "Škoda Fabia",           color: "white", transmission: "manual",    price: 30 },
  { slug: "seat-toledo-automatic-black", image: "seat_toledo_black.png", name: "Seat Toledo",           color: "black", transmission: "automatic", price: 40 },
];

export function Fleet() {
  const { t } = useI18n();
  const [active, setActive] = useState<Transmission | "all">("all");

  const tabs: { key: Transmission | "all"; label: string }[] = [
    { key: "all", label: t.fleet.tabs.all },
    { key: "manual", label: t.fleet.tabs.manual },
    { key: "automatic", label: t.fleet.tabs.automatic },
  ];

  const filtered = useMemo(
    () => (active === "all" ? CARS : CARS.filter((c) => c.transmission === active)),
    [active]
  );

  return (
    <section id="fleet" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mb-3 flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-wider text-zinc-500">
          <span className="h-px w-8 bg-[#E11D48]" />
          {t.fleet.eyebrow}
        </div>
        <h2 className="text-center text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
          {t.fleet.title}
        </h2>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActive(tab.key)}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                active === tab.key
                  ? "border-zinc-900 bg-zinc-900 text-white"
                  : "border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {filtered.map((car) => (
            <CarCard key={car.slug} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CarCard({ car }: { car: Car }) {
  const { t } = useI18n();
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-zinc-100 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100">
        <img
          src={`/cars/${car.image}`}
          alt={`${car.name} — ${t.fleet.colors[car.color]}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            // Fallback: hide broken image, show placeholder background
            const img = e.currentTarget;
            img.style.display = "none";
            img.parentElement?.classList.add("flex", "items-center", "justify-center");
            const placeholder = img.parentElement?.querySelector("[data-placeholder]");
            if (placeholder) (placeholder as HTMLElement).style.display = "flex";
          }}
        />
        <div
          data-placeholder
          style={{ display: "none" }}
          className="absolute inset-0 hidden items-center justify-center text-zinc-400"
        >
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M3 17V7l3-3h12l3 3v10" />
            <circle cx="7" cy="17" r="2" />
            <circle cx="17" cy="17" r="2" />
            <path d="M9 17h6" />
          </svg>
        </div>
        <span className="absolute top-3 right-3 rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-zinc-900 shadow-sm backdrop-blur">
          {car.transmission === "manual" ? t.fleet.manual : t.fleet.automatic}
        </span>
      </div>

      <div className="px-3 py-2">
        <div className="flex items-start justify-between gap-1">
          <h3 className="text-xs font-semibold text-zinc-900 leading-tight">{car.name}</h3>
          <div className="text-xs font-semibold text-zinc-900 shrink-0">
            {t.fleet.perDay.replace("{price}", String(car.price))}
          </div>
        </div>
        <div className="mt-1 flex items-center gap-1.5 flex-wrap">
          <span className="text-[10px] text-zinc-500">{t.fleet.colors[car.color]}</span>
          <span className="text-[10px] text-zinc-300">·</span>
          <span className="text-[10px] text-zinc-500">
            {car.transmission === "manual" ? t.fleet.manual : t.fleet.automatic}
          </span>
          <span className="text-[10px] text-zinc-300">·</span>
          <span className="text-[10px] font-medium text-emerald-600">{t.fleet.deposit}</span>
        </div>
      </div>
    </article>
  );
}
