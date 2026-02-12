  // app/projekt-otok/[zgrada]/[kat]/page.tsx
  import Link from "next/link";
  import { notFound } from "next/navigation";
  import Image from "next/image";

  import { FloorPlanPins } from "@/components/FloorPlanPins";
  import { pinovi } from "@/data/projektOtok";

  import {
    planovi,
    getZgradaLabel,
    getKatoviZaZgradu,
    getStanoviZaKat,
    slugToKatId,
  } from "@/data/projektOtok";

  /**
   * Kat stranica:
   * - lijevo: tlocrt (slika)
   * - desno: klikabilne kartice stanova sa status badgeom (zeleno/žuto/crveno)
   *
   * URL primjer:
   * /projekt-otok/a/prizemlje
   * /projekt-otok/a/1-kat
   * /projekt-otok/b/2-kat
   */

  function statusButton(status: "available" | "reserved" | "sold") {
  if (status === "available")
    return {
      label: "Dostupno",
      cls: "bg-emerald-600 text-white hover:bg-emerald-700",
    };

  if (status === "reserved")
    return {
      label: "Rezervirano",
      cls: "bg-amber-500 text-white hover:bg-amber-600",
    };

  return {
    label: "Prodano",
    cls: "bg-rose-600 text-white hover:bg-rose-700",
  };
}

  export default function KatPage({
    params,
  }: {
    params: { zgrada: string; kat: string };
  }) {
    const zgradaId = params.zgrada?.toLowerCase();
    const katSlug = params.kat?.toLowerCase();

    if (!["a", "b", "c"].includes(zgradaId)) return notFound();

    const katId = slugToKatId(katSlug);
    if (!["0", "1", "2"].includes(katId)) return notFound();

    const zgradaLabel = getZgradaLabel(zgradaId);

    const katoviZgrade = getKatoviZaZgradu(zgradaId);
    const katMeta = katoviZgrade.find((k) => k.id === katId);
    if (!katMeta) return notFound();

    const stanoviZaKat = getStanoviZaKat(zgradaId, katId);

    const planSrc = planovi[zgradaId]?.[katId as "0" | "1" | "2"];
    if (!planSrc) return notFound();

    return (
      <main className="w-full bg-white text-slate-900">
        <section className="px-6 py-14 md:px-12">
          <div className="mx-auto w-full max-w-7xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Projekt Otok / {zgradaLabel}
            </p>

            <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              {katMeta.label}
            </h1>

            <div className="mt-3 flex flex-wrap gap-3 text-sm">
              <Link
                href={`/projekt-otok/${zgradaId}`}
                className="font-semibold text-slate-700 hover:text-slate-900"
              >
                ← Nazad na {zgradaLabel}
              </Link>
              <span className="text-slate-300">|</span>
              <Link
                href="/projekt-otok"
                className="font-semibold text-slate-700 hover:text-slate-900"
              >
                Projekt Otok overview
              </Link>
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              {/* Tlocrt */}
              <FloorPlanPins
  planSrc={planSrc}
  alt={`${zgradaLabel} — ${katMeta.label} tlocrt`}
  stanovi={stanoviZaKat}
  pinovi={pinovi[zgradaId]?.[katId as "0" | "1" | "2"] ?? []}
/>



              {/* Lista stanova (klikabilno + status badge) */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h2 className="text-lg font-semibold">
                  Stanovi na {katMeta.label}
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  Odaberi stan za detaljan prikaz.
                </p>

                {stanoviZaKat.length === 0 ? (
                  <div className="mt-6 rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-600">
                    Nema unesenih stanova za ovu etažu (još). Kad ubaciš podatke,
                    ovdje će se automatski pojavit.
                  </div>
                ) : (
                  <div className="mt-6 space-y-3">
                    {stanoviZaKat.map((s) => {
  const btn = statusButton(s.status);

  return (
    <div
      key={s.id}
      className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white px-4 py-3"
    >
      <div className="min-w-0">
        <div className="font-semibold">{s.oznaka}</div>
        <div className="text-xs text-slate-500">
          {s.brojSoba} sobe • {s.orijentacija}
        </div>
      </div>

      <div className="text-sm font-semibold">{s.povrsina.toFixed(1)} m²</div>

      <Link
        href={`/projekt-otok/stan/${s.id}`}
        className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition ${btn.cls}`}
      >
        {btn.label} →
      </Link>
    </div>
  );
})}

                  </div>
                )}

                <p className="mt-6 text-xs text-slate-500">
                  * Klik na stan vodi na podstranicu stana (stabilna verzija).
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
