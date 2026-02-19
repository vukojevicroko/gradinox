"use client";

import Link from "next/link";

type MetaProps = { label: string; value: string; sub: string; icon?: string };

export default function Dashboard({ projectTitle }: { projectTitle: string }) {
  return (
    <div className="rounded-2xl bg-slate-200 text-slate-900 ring-1 ring-slate-300 backdrop-blur py-8">
      {/* TOP: Title + tagline */}
      <div className="flex flex-col gap-2 px-6 py-6 md:px-8">
        <div className="text-2xl font-semibold tracking-tight md:text-3xl">
          {projectTitle}
        </div>
        <div className="text-sm text-slate-600">
          Tri zgrade. Jedna vizija. Majstorski koordinirano.
        </div>
      </div>

      {/* METADATA BAR (4 stats) */}
      <div className="mx-6 rounded-xl bg-slate-300/50 px-5 py-4 md:mx-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <MetaItem label="Ukupna kvadratura" value="3055,26 m²" sub="" icon="/icons/measurement.png" />
          <MetaItem label="Broj stanova" value="35" sub="" icon="/icons/house-key.png" />
          <MetaItem label="Procijenjen završetak" value="Q4 2026" sub="" icon="/icons/stopwatch.png" />
          <MetaItem label="Početna cijena" value="3100 EUR" sub="" icon="/icons/price-tag.png" />
        </div>
      </div>

      {/* LOWER GRID: Buildings + Icon Pills */}
      <div className="grid gap-6 px-6 pb-6 pt-6 md:px-8 lg:grid-cols-[1.4fr_1fr]">
        {/* LEFT: Buildings */}
        <div className="space-y-5 h-full">
          <div className="grid gap-3 sm:grid-cols-3 h-full">
            <Link href="/projekt-otok/a" className="h-full">
              <BuildingProgress title="ZGRADA A" subtitle="STAMBENA UPOTREBA" pct={0} />
            </Link>
            <Link href="/projekt-otok/b" className="h-full">
              <BuildingProgress title="ZGRADA B" subtitle="STAMBENA UPOTREBA" pct={0} />
            </Link>
            <Link href="/projekt-otok/c" className="h-full">
              <BuildingProgress title="ZGRADA C" subtitle="STAMBENA UPOTREBA" pct={0} />
            </Link>
          </div>
        </div>

        {/* RIGHT: Icon Pills */}
        <div className="hover-lift rounded-xl border border-white/10 bg-slate-300/50 p-4 h-full">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-900 text-center">
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

function MetaItem({ label, value, sub, icon }: MetaProps) {
  return (
    <div className="flex items-center gap-3">
      {icon ? (
        <div className="h-9 w-9 rounded-lg bg-slate-400/50 flex items-center justify-center">
          <img src={icon} alt={label} className="h-6 w-6" />
        </div>
      ) : (
        <div className="h-9 w-9 rounded-lg bg-slate-300" aria-hidden="true" />
      )}
      <div className="min-w-0">
        <div className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-slate-600">
          {label}
        </div>
        <div className="mt-0.5 flex items-baseline gap-2">
          <div className="text-lg font-semibold">{value}</div>
          <div className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-slate-500">
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
        "rounded-xl border p-4 cursor-pointer transition hover:-translate-y-1 hover:shadow-lg h-full",
        highlighted ? "border-amber-500/70 bg-amber-500/20" : "border-slate-300 bg-slate-300/30",
      ].join(" ")}
    >
      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
        {title}
      </div>
      <div className="mt-1 text-sm font-semibold text-slate-900">{subtitle}</div>

      <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-300">
        <div
          className="h-full rounded-full bg-amber-500"
          style={{ width: `${Math.max(0, Math.min(100, pct))}%` }}
        />
      </div>

      <div className="mt-2 text-[0.75rem] font-semibold text-slate-600">
        {pct}% Napredak
      </div>
    </div>
  );
}

function IconPill({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 rounded-lg px-2 py-3 text-center">
      <div className="h-7 w-7 rounded-md bg-slate-400/40" aria-hidden="true" />
      <div className="text-[0.65rem] font-semibold tracking-wide text-slate-600">
        {label}
      </div>
    </div>
  );
}

function UpdateItem({ img, title, desc }: { img: string; title: string; desc: string }) {
  return (
    <div className="grid grid-cols-[64px,1fr] items-center gap-3">
      <div className="overflow-hidden rounded-lg border border-slate-300">
        <img src={img} alt={title} className="h-16 w-full object-cover" loading="lazy" />
      </div>
      <div className="min-w-0">
        <div className="truncate text-sm font-semibold text-slate-900">{title}</div>
        <div className="mt-1 text-xs leading-relaxed text-slate-600">{desc}</div>
      </div>
    </div>
  );
}
