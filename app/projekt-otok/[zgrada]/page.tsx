// app/projekt-otok/[zgrada]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getZgradaLabel,
  getKatoviZaZgradu,
  katIdToSlug,
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

  return (
    <main className="w-full bg-white text-slate-900">
      <section className="px-6 py-14 md:px-12">
        <div className="mx-auto w-full max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Projekt Otok
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            {zgradaLabel}
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-600">
            Odaberi kat. U ovoj fazi prikazujemo tlocrt + listu stanova. Klikabilni
            tlocrt radimo odmah nakon što zaključamo strukturu.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {floors.map((k) => {
              const slug = katIdToSlug(k.id);

              return (
                <Link
                  key={`${k.zgradaId}-${k.id}`}
                  href={`/projekt-otok/${zgradaId}/${slug}`}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:shadow-md"
                >
                  <div className="text-sm font-semibold">{k.label}</div>
                  {k.opis ? (
                    <p className="mt-2 text-sm text-slate-600">{k.opis}</p>
                  ) : (
                    <p className="mt-2 text-sm text-slate-600">
                      Pregled tlocrta i stanova na ovoj etaži.
                    </p>
                  )}
                  <div className="mt-4 text-sm font-semibold text-slate-900">
                    Otvori →
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-10">
            <Link
              href="/projekt-otok"
              className="text-sm font-semibold text-slate-700 hover:text-slate-900"
            >
              ← Nazad na Projekt Otok
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
