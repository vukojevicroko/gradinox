// app/projekt-otok/[zgrada]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getZgradaLabel,
  getKatoviZaZgradu,
  katIdToSlug,
  getParkingZaZgradu,
  getStanoviZaKat,
  type ParkingStatus,
} from "@/data/projektOtok";

/**
 * Overview stranica za jednu zgradu:
 * - prikazuje 3 kata kao kartice/linkove
 * - SEO-friendly URL: /projekt-otok/a, /projekt-otok/b, /projekt-otok/c
 */

export default async function ZgradaPage({
  params,
}: {
  params: Promise<{ zgrada: string }>;
}) {
  const { zgrada } = await params;
  const zgradaId = zgrada?.toLowerCase();

  // Dozvoljene zgrade: a, b, c
  if (!["a", "b", "c"].includes(zgradaId)) return notFound();

  const zgradaLabel = getZgradaLabel(zgradaId);
  const floors = getKatoviZaZgradu(zgradaId);
  const parkingSpaces = getParkingZaZgradu(zgradaId);

  const getStatusColor = (status: ParkingStatus) => {
    if (status === "available") return "bg-emerald-500";
    if (status === "reserved") return "bg-amber-500";
    return "bg-rose-500";
  };

  return (
    <main className="w-full bg-white text-slate-900">
      <section className="px-6 py-14 md:px-12">
        <div className="mx-auto w-full max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            <Link href="/projekt-otok" className="hover:text-slate-700">
              ← Projekt Otok
            </Link>
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            {zgradaLabel}
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-600">
            Odaberite kat i istražite stanove na toj etaži – pregled tlocrta, rasporeda i trenutne dostupnosti.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {floors.map((k) => {
              const slug = katIdToSlug(k.id);
              const stanoviNaKatu = getStanoviZaKat(zgradaId, k.id);
              const ukupnoStanova = stanoviNaKatu.length;
              const dostupnoStanova = stanoviNaKatu.filter((s) => s.status === "available").length;

              const getFloorDescription = (katId: string) => {
                if (katId === "0") return "Stanovi s privatnim vrtovima i direktnim doticajem sa okolišem - idealni za dječju igru, ali i druženja na suncu sa svojim najbližima.";
                if (katId === "1") return "Uravnotežena pozicija između prizemlja i najviše etaže – funkcionalni rasporedi i ugodan pogled uz optimalnu privatnost.";
                if (katId === "2") return "Stanovi s prostranim terasama i otvorenijim pogledom – više svjetla, više zraka i dodatna vrijednost prostora na otvorenom.";
                return "Pregled tlocrta i stanova na ovoj etaži.";
              };

              return (
                <Link
                  key={`${k.zgradaId}-${k.id}`}
                  href={`/projekt-otok/${zgradaId}/${slug}`}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:shadow-md"
                >
                  <div className="text-sm font-semibold">{k.label}</div>
                  <p className="mt-2 text-sm text-slate-600">
                    {getFloorDescription(k.id)}
                  </p>
                  <div className="mt-4 text-sm font-semibold text-slate-900">
                    Otvori →
                  </div>
                  <p className="mt-2 text-xs text-slate-600">
                    {ukupnoStanova} {ukupnoStanova === 1 ? "stan" : ukupnoStanova <= 4 ? "stana" : "stanova"} | {dostupnoStanova} {dostupnoStanova === 0 ? "dostupnih" : dostupnoStanova === 1 ? "dostupan" : dostupnoStanova <= 4 ? "dostupna" : "dostupnih"}
                  </p>
                </Link>
              );
            })}
          </div>

          {/* Parking Spaces Table */}
          {parkingSpaces.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-semibold tracking-tight">
                Parkirna mjesta
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Dostupna parkirna mjesta za {zgradaLabel.replace("Zgrada", "Zgradu")}
              </p>

              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">
                          Parking
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">
                          Površina (m²)
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">
                          Cijena (k€)
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {parkingSpaces.map((p) => (
                        <tr key={p.id} className="even:bg-slate-100 transition hover:bg-slate-200">
                          <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-900">
                            {p.oznaka}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-600">
                            {p.povrsina.toFixed(2).replace('.', ',')}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-600">
                            {p.cijena.toFixed(2).replace('.', ',')}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            <div className="flex items-center gap-2">
                              <div className={`h-3 w-3 rounded-full ${getStatusColor(p.status)}`} />
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-6 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-emerald-500" />
                  <span>Dostupno</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-amber-500" />
                  <span>Rezervirano</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-rose-500" />
                  <span>Prodano</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
