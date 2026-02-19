"use client";

import Link from "next/link";
import ProjectInfo from "@/components/ProjectInfo";

type Building = {
  key: "A" | "B" | "C";
  title: string;
  subtitle: string;
  progress: number;
  apartments: number;
};

const buildings: Building[] = [
  { key: "A", title: "Zgrada A", subtitle: "Stambena upotreba", progress: 0, apartments: 6 },
  { key: "B", title: "Zgrada B", subtitle: "Stambena upotreba", progress: 0, apartments: 6 },
  { key: "C", title: "Zgrada C", subtitle: "Stambena upotreba", progress: 0, apartments: 23 },
];

const partners = [
  { logo: "/images/elektronovus.png", name: "Elektronovus", specialty: "Glavni izvođač radova", website: "" },
  { logo: "/images/loreta.png", name: "Loreta nekretnine", specialty: "Agencija za prodaju nekretnina", website: "" },
  { logo: "/images/expert.png", name: "Expert", specialty: "Projektant", website: "" },
  { logo: "/images/bilkić.jpg", name: "Vodoinstalacije Bilkić", specialty: "Vodointalacije i periferija", website: "" },
];

const HERO_URL = "/renders/Image22_000.png";

function ProgressBar({ value }: { value: number }) {
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
      <div
        className="h-full rounded-full bg-slate-900 dark:bg-slate-100"
        style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
      />
    </div>
  );
}

export default function ProjektOtokPage() {
  const projectTitle = "Projekt Otok";
  const overall = 0;

  return (
    <div className="bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50">

{/* ===== HERO (full width) + DASHBOARD OVER IMAGE ===== */}
<section className="relative w-full min-h-screen overflow-hidden">
  {/* Background image */}
  <div className="absolute inset-0">
    <img
      src={HERO_URL}
      alt="Drone shot construction site"
      className="h-full w-full object-cover"
      loading="eager"
      decoding="async"
    />
    <div className="absolute inset-0 bg-black/35" aria-hidden="true" />
  </div>

  {/* Hero content */}
  <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1400px] flex-col justify-center px-4 pt-20 lg:px-12">
    <div className="max-w-xl">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
        Projekt / Detalji
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {projectTitle}
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-white/80">
        Projekt Otok namijenjen je onima koji žele miran, siguran prostor za život, ali i odluku koja dugoročno zadržava vrijednost. To je projekt koji spaja osjećaj spokoja doma s pouzdanošću promišljenog ulaganja.
      </p>
    </div>
  </div>

</section>

<ProjectInfo />


      {/* ===== Main Content ===== */}
      <main className="min-h-screen w-full px-4 pb-20 pt-10 lg:px-12 lg:pt-10">
        {/* Three Pillars */}
        <section className="mt-2">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold">Napredak prodaje</h2>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                Pregled prodaje po zgradi i ukupne prodaje. Požurite i grabite svoj stan odmah
              </p>
            </div>
            <div className="hidden min-[1024px]:block text-sm text-slate-600 dark:text-slate-300">
              Ukupno: <span className="font-semibold">{overall}%</span>
            </div>
          </div>

          {/* Desktop: grid | Mobile: horizontal scroll */}
          <div className="mt-6 grid gap-6 min-[768px]:grid-cols-2 min-[1024px]:grid-cols-3">
            {/* Mobile carousel fallback (same markup works, but add overflow on small) */}
          </div>

          <div className="mt-6 hidden min-[1024px]:grid min-[1024px]:grid-cols-3 min-[1024px]:gap-6">
            {buildings.map((b) => (
              <BuildingCard key={b.key} b={b} />
            ))}
          </div>

          <div className="mt-6 min-[1024px]:hidden">
            <div className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-2 snap-x snap-mandatory">
              {buildings.map((b) => (
                <div key={b.key} className="min-w-[84%] snap-center sm:min-w-[60%]">
                  <BuildingCard b={b} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Grid */}
        <section id="partners" className="mt-14">
          <h2 className="text-lg font-semibold">Partneri</h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
            Naši pouzdani partneri koji zajedno s nama rade na realizaciji projekta.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 min-[1024px]:grid-cols-4">
            {partners.map((partner, i) => (
              <div
                key={i}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/70 transition-all duration-300 cursor-pointer hover:shadow-lg hover:scale-105 hover:-translate-y-1 origin-center"
              >
                <div className="flex-shrink-0 h-16 w-16 overflow-hidden flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="h-full w-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{partner.name}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{partner.specialty}</p>
                  {partner.website && (
                    <a href={partner.website} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 mt-2 inline-block">{partner.website.replace("https://", "")}</a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
        </main>
      </div>
    );
  }

function BuildingCard({ b }: { b: Building }) {
  return (
    <Link
      href={`/projekt-otok/${b.key.toLowerCase()}`}
      className="block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/70 dark:hover:border-slate-700"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
            {b.title}
          </div>
          <div className="mt-1 text-sm font-semibold text-slate-900 dark:text-slate-50">
            {b.subtitle}
          </div>
        </div>
        <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
          {b.progress}%
        </div>
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <span>Napredak</span>
          <span className="font-semibold text-slate-900 dark:text-slate-100">{b.progress}%</span>
        </div>
        <div className="mt-2">
          <ProgressBar value={b.progress} />
        </div>
      </div>

      <div className="mt-3 text-xs text-slate-600 dark:text-slate-400">
        {b.apartments} stanova
      </div>
    </Link>
  );
}
