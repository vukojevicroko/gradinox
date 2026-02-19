// components/FloorPlanPins.tsx
"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

/**
 * FloorPlanPins
 * - prikazuje tlocrt (slika)
 * - iznad slike rendera male pin-gumbiće (absolute) po x/y postocima
 * - gumbi mijenjaju boju ovisno o statusu stana
 * - klik otvara modal: oznaka, m2, sobe, status, cijena + link na detalj
 *
 * Kako koristiš:
 * <FloorPlanPins
 *   planSrc={planSrc}
 *   alt="..."
 *   stanovi={stanoviZaKat}
 *   pinovi={pinovi[zgradaId]?.[katId] ?? []}
 * />
 */

export type StanStatus = "available" | "reserved" | "sold";

export type StanMini = {
  id: string;
  oznaka: string;
  povrsina: number;
  brojSoba: number;
  orijentacija?: string;
  status: StanStatus;
  cijena?: number; // opcionalno
};

export type Pin = {
  stanId: string; // mora se poklopit sa StanMini.id
  x: number; // left % (0-100)
  y: number; // top % (0-100)
};

function statusLabel(status: StanStatus) {
  if (status === "available") return "Dostupno";
  if (status === "reserved") return "Rezervirano";
  return "Prodano";
}

function statusButtonClass(status: StanStatus) {
  // ✅ “pravi” gumbi (vidljivi), ne pastel badge
  if (status === "available") return "bg-emerald-600 hover:bg-emerald-700";
  if (status === "reserved") return "bg-amber-500 hover:bg-amber-600";
  return "bg-rose-600 hover:bg-rose-700";
}

function statusPillClass(status: StanStatus) {
  if (status === "available") return "bg-emerald-600";
  if (status === "reserved") return "bg-amber-500";
  return "bg-rose-600";
}

export function FloorPlanPins({
  planSrc,
  alt,
  stanovi,
  pinovi,
  zgradaId,
}: {
  planSrc: string;
  alt: string;
  stanovi: StanMini[];
  pinovi: Pin[];
  zgradaId?: string;
}) {
  const [openId, setOpenId] = useState<string | null>(null);

  // Map za O(1) lookup stana po id-u
  const stanById = useMemo(() => {
    const m = new Map<string, StanMini>();
    for (const s of stanovi) m.set(s.id, s);
    return m;
  }, [stanovi]);

  const active = openId ? stanById.get(openId) : undefined;

  // Use 4:5 aspect ratio for buildings A and B, wider ratio for C to reduce grey space
  const aspectRatio = zgradaId === 'a' || zgradaId === 'b' ? 'aspect-[4/5]' : 'aspect-[21/9]';

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-3">
      <div className={`relative ${aspectRatio} w-full overflow-hidden rounded-xl bg-slate-100`}>
        {/* Tlocrt */}
        <Image
          src={planSrc}
          alt={alt}
          fill
          className="object-contain"
          sizes="(max-width: 1024px) 100vw, 700px"
          priority
        />

        {/* Pin gumbići */}
        {pinovi.map((p) => {
          const s = stanById.get(p.stanId);

          // Ako pin referencira stan koji ne postoji na ovom katu → preskoči
          if (!s) return null;

          return (
            <button
              key={p.stanId}
              type="button"
              onClick={() => setOpenId(p.stanId)}
              className={`absolute z-10 inline-flex items-center justify-center rounded-full px-3 py-1.5 text-xs font-semibold text-white shadow-lg ring-1 ring-black/10 transition ${statusButtonClass(
                s.status
              )}`}
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                transform: "translate(-50%, -50%)",
              }}
              title={`${s.oznaka} • ${statusLabel(s.status)}`}
            >
              {s.oznaka}
            </button>
          );
        })}
      </div>

      {/* Legenda */}
      <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-slate-600">
        <span className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-600" />
          Dostupno
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-amber-500" />
          Rezervirano
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-rose-600" />
          Prodano
        </span>
      </div>

      {/* Modal (expand) */}
      {active && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
          {/* Overlay */}
          <button
            type="button"
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpenId(null)}
            aria-label="Zatvori"
          />

          {/* Panel */}
          <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  {active.oznaka}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {active.povrsina.toFixed(1)} m²
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  {active.brojSoba} {active.brojSoba === 1 ? "soba" : active.brojSoba <= 4 ? "sobe" : "soba"}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setOpenId(null)}
                className="rounded-full border border-slate-200 px-3 py-1 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                ✕
              </button>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold text-white ${statusPillClass(
                  active.status
                )}`}
              >
                {statusLabel(active.status)}
              </span>

              <div className="text-sm font-semibold text-slate-900">
                {typeof active.cijena === "number"
                  ? `${active.cijena.toLocaleString("hr-HR")} €`
                  : "Cijena na upit"}
              </div>
            </div>

            <div className="mt-5">
              <Link
                href={`/projekt-otok/stan/${active.id}`}
                className="block w-full rounded-full bg-slate-900 px-5 py-2.5 text-center text-sm font-semibold text-white hover:bg-slate-800"
              >
                Više detalja →
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
