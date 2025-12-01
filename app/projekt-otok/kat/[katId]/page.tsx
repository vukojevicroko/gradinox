// app/projekt-otok/kat/[katId]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import { katovi, stanovi } from "@/data/projektOtok";

type Props = {
  params: { katId: string };
};

export default function KatPage({ params }: Props) {
  const kat = katovi.find((k) => k.id === params.katId);

  if (!kat) {
    return notFound();
  }

  const stanoviNaKatu = stanovi.filter((stan) => stan.katId === kat.id);

  return (
    <div className="bg-slate-50 py-12 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-4 text-xs text-slate-500 dark:text-slate-400">
          <Link href="/projekt-otok" className="underline underline-offset-4">
            Projekt Otok
          </Link>{" "}
          / Kat {kat.id}
        </div>

        <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-50">
          {kat.label}
        </h1>
        {kat.opis && (
          <p className="mt-2 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
            {kat.opis}
          </p>
        )}

        <section className="mt-8 space-y-4">
          <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
            Stanovi na ovom katu
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {stanoviNaKatu.map((stan) => (
              <Link
                key={stan.id}
                href={`/projekt-otok/stan/${stan.id}`}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-slate-600"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                    {stan.oznaka}
                  </span>
                  <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[0.7rem] text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                    {stan.brojSoba}-soban · {stan.povrsina.toFixed(1)} m²
                  </span>
                </div>
                <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                  Orijentacija: {stan.orijentacija}
                </p>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  Status: {stan.status === "available"
                    ? "Dostupno"
                    : stan.status === "reserved"
                    ? "Rezervirano"
                    : "Prodano"}
                </p>
              </Link>
            ))}

            {stanoviNaKatu.length === 0 && (
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Stanovi za ovaj kat bit će objavljeni naknadno.
              </p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
