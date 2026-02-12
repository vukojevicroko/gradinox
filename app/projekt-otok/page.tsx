"use client";

import Link from "next/link";
import { useMemo, useState, useEffect } from "react";
import ProjectInfo from "@/components/ProjectInfo";

type Building = {
  key: "A" | "B" | "C";
  title: string;
  subtitle: string;
  progress: number; // 0-100
};

function useIsMobile(breakpointPx = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpointPx - 1}px)`);
    const set = () => setIsMobile(mq.matches);
    set();
    mq.addEventListener?.("change", set);
    return () => mq.removeEventListener?.("change", set);
  }, [breakpointPx]);

  return isMobile;
}

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

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0">
      <div className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-slate-300/80">{label}</div>
      <div className="mt-1 truncate text-sm font-semibold text-white">{value}</div>
    </div>
  );
}

export default function ProjektOtokPage() {
  const isMobile = useIsMobile(768);

  // === Project data (placeholder, po tvom promptu) ===
  const projectTitle = "Projekt Otok"
  const overall = 43; // (40 + 28 + 60) / 3 ≈ 43%

  const buildings: Building[] = useMemo(
    () => [
      { key: "A", title: "Building A", subtitle: "Mixed-Use", progress: 40 },
      { key: "B", title: "Building B", subtitle: "Residential", progress: 28 },
      { key: "C", title: "Building C", subtitle: "Storage", progress: 60 },
    ],
    []
  );


  // Placeholder images (Unsplash)
const HERO_URL =
  "/renders/Image22_000.png";
  const T1 =
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80";
  const T2 =
    "https://images.unsplash.com/photo-1565008447742-97f6f387f0ca1?auto=format&fit=crop&w=800&q=80";
  const T3 =
    "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=800&q=80";

  const LOGO_1 =
    "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=600&q=80";
  const LOGO_2 =
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80";
  const LOGO_3 =
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=80";
  const LOGO_4 =
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=600&q=80";
  const LOGO_5 =
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80";
  const LOGO_6 =
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80";

  const partners = [
    { logo: LOGO_1, name: "Architects United", specialty: "Architectural Design", website: "https://www.architects-united.com" },
    { logo: LOGO_2, name: "Engineering Solutions", specialty: "Structural Engineering", website: "https://www.engineering-solutions.com" },
    { logo: LOGO_3, name: "Build Tech", specialty: "Construction Technology", website: "https://www.buildtech.com" },
    { logo: LOGO_4, name: "Design Studio Pro", specialty: "Interior & Exterior Design", website: "https://www.designstudiopro.com" },
    { logo: LOGO_5, name: "Project Management", specialty: "Project Oversight", website: "https://www.projectmanagement.com" },
    { logo: LOGO_6, name: "Marketing Solutions", specialty: "Digital Marketing", website: "https://www.marketing-solutions.com" },
  ];

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
              Overall: <span className="font-semibold">{overall}%</span>
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
          <h2 className="text-lg font-semibold">Partners</h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
            Placeholder logotipi — kasnije ubaciš prave (arhitekti, inženjeri, nadzor, marketing).
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 min-[1024px]:grid-cols-6">
            {partners.map((partner, i) => (
              <div
                key={i}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/70 transition-all duration-300 cursor-pointer hover:shadow-lg hover:scale-105 hover:-translate-y-1 origin-center"
              >
                <div className="flex-shrink-0 h-16 w-16 rounded-full border border-slate-200 overflow-hidden dark:border-slate-700 bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="h-12 w-12 object-contain grayscale opacity-80"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{partner.name}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{partner.specialty}</p>
                  <a href={partner.website} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 mt-2 inline-block">{partner.website.replace("https://", "")}</a>
                </div>
              </div>
            ))}
          </div>
        </section>
        </main>
      </div>
    );
  }

/* ===== Components ===== */

function Dashboard({
  projectTitle,
}: {
  projectTitle: string;
}) {
  return (
    <div className="rounded-2xl bg-slate-900/90 text-white shadow-[0_30px_90px_rgba(0,0,0,0.35)] ring-1 ring-white/10 backdrop-blur">
      {/* TOP: Title + tagline */}
      <div className="flex flex-col gap-2 px-6 py-6 md:px-8">
        <div className="text-2xl font-semibold tracking-tight md:text-3xl">
          {projectTitle}
        </div>
        <div className="text-sm text-white/70">
          Three Structures. One Vision. Masterfully Coordinated.
        </div>
      </div>

      {/* METADATA BAR (4 stats) */}
      <div className="mx-6 rounded-xl bg-black/35 px-5 py-4 md:mx-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <MetaItem label="Total Sq Ft" value="45,000" sub="SQ FT" icon="/icons/measurement.png" />
          <MetaItem label="Apartments" value="26" sub="APARTMENTS" icon="/icons/house-key.png" />
          <MetaItem label="Est. Completion" value="Q4 2026" sub="EST. COMPLETION" icon="/icons/stopwatch.png" />
          <MetaItem label="Starting Price" value="3100 EUR" sub="PER SQ M" icon="/icons/price-tag.png" />
        </div>
      </div>

      {/* LOWER GRID: Buildings + Icon Pills */}
      <div className="grid gap-6 px-6 pb-6 pt-6 md:px-8 lg:grid-cols-[1.4fr_1fr]">
        {/* LEFT: Buildings */}
        <div className="space-y-5 h-full">
          {/* Three buildings */}
          <div className="grid gap-3 sm:grid-cols-3 h-full">
            <div className="h-full">
              <BuildingProgress
                title="BUILDING A"
                subtitle="MIXED-USE"
                pct={40}
              />
            </div>
            <div className="h-full">
              <BuildingProgress
                title="BUILDING B"
                subtitle="RESIDENTIAL"
                pct={28}
              />
            </div>
            <div className="h-full">
              <BuildingProgress
                title="BUILDING C"
                subtitle="PARKING / STORAGE"
                pct={60}
              />
            </div>
          </div>
        </div>

        {/* RIGHT: Icon Pills */}
        <div className="rounded-xl bg-white/5 p-4 h-full">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70 text-center">
            Istaknuti elementi dizajna
          </div>
          <div className="mt-4 grid grid-cols-5 gap-2">
            <IconPill label="ASSETS" />
            <IconPill label="AMENITIES" />
            <IconPill label="FLOORS" />
            <IconPill label="SURFACES" />
            <IconPill label="SPECS" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ====== Sub-components (sve u istom fileu, radi jednostavnosti) ====== */

function MetaItem({ label, value, sub, icon }: { label: string; value: string; sub: string; icon?: string }) {
  return (
    <div className="flex items-center gap-3">
      {icon ? (
        <div className="h-9 w-9 rounded-lg bg-white/30 flex items-center justify-center">
          <img src={icon} alt={label} className="h-6 w-6" />
        </div>
      ) : (
        <div className="h-9 w-9 rounded-lg bg-white/10" aria-hidden="true" />
      )}
      <div className="min-w-0">
        <div className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white/60">
          {label}
        </div>
        <div className="mt-0.5 flex items-baseline gap-2">
          <div className="text-lg font-semibold">{value}</div>
          <div className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white/50">
            {sub}
          </div>
        </div>
      </div>
    </div>
  );
}

function BuildingProgress({
  title,
  subtitle,
  pct,
  highlighted,
}: {
  title: string;
  subtitle: string;
  pct: number;
  highlighted?: boolean;
}) {
  return (
    <div
      className={[
        "rounded-xl border p-4 h-full",
        highlighted ? "border-amber-500/70 bg-amber-500/10" : "border-white/10 bg-white/5",
      ].join(" ")}
    >
      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
        {title}
      </div>
      <div className="mt-1 text-sm font-semibold">{subtitle}</div>

      <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-amber-500"
          style={{ width: `${Math.max(0, Math.min(100, pct))}%` }}
        />
      </div>

      <div className="mt-2 text-[0.75rem] font-semibold text-white/70">
        {pct}% COMPLETE
      </div>
    </div>
  );
}

function IconPill({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 rounded-lg px-2 py-3 text-center">
      <div className="h-7 w-7 rounded-md bg-white/10" aria-hidden="true" />
      <div className="text-[0.65rem] font-semibold tracking-wide text-white/65">
        {label}
      </div>
    </div>
  );
}

function UpdateItem({
  img,
  title,
  desc,
}: {
  img: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="grid grid-cols-[64px,1fr] items-center gap-3">
      <div className="overflow-hidden rounded-lg border border-white/10">
        <img src={img} alt={title} className="h-16 w-full object-cover" loading="lazy" />
      </div>
      <div className="min-w-0">
        <div className="truncate text-sm font-semibold">{title}</div>
        <div className="mt-1 text-xs leading-relaxed text-white/60">{desc}</div>
      </div>
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
          <span>Progress</span>
          <span className="font-semibold text-slate-900 dark:text-slate-100">{b.progress}%</span>
        </div>
        <div className="mt-2">
          <ProgressBar value={b.progress} />
        </div>
      </div>

      <div className="mt-4 text-xs text-slate-500 dark:text-slate-400">
        Tap/click → odabir kata (placeholder flow)
      </div>
    </Link>
  );
}
