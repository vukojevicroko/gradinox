// app/projekt-otok/page.tsx
import Link from "next/link";
import { katovi, stanovi } from "@/data/projektOtok";

const statusLabel: Record<string, string> = {
  available: "Dostupno",
  reserved: "Rezervirano",
  sold: "Prodano",
};

const statusClass: Record<string, string> = {
  available: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
  reserved: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
  sold: "bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
};

export default function ProjektOtokPage() {
  return (
    <div className="bg-slate-50 pb-16 pt-10 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4">
        {/* HERO ZA PROJEKT OTOK */}
        <div className="fade-in-up max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            Projekt Otok
          </p>
          <h1 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-slate-50 sm:text-3xl">
            Pregled katova i stanova u Projektu Otok.
          </h1>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
            Projekt Otok osmišljen je kao uredno prezentirana novogradnja s
            jasnim prikazom svakog kata i svakog stana. Ovdje se nalazi
            pregledna struktura katova, osnovne informacije o stanovima te
            statusi dostupnosti.
          </p>
        </div>

        {/* PREGLED KATOVA */}
        <section className="fade-in-up-delay mt-10 space-y-6">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
              Katovi i raspored stanova
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Klikom na kat ili stan otvara se detaljniji prikaz.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {katovi.map((kat) => {
              const stanoviNaKatu = stanovi.filter((stan) => stan.katId === kat.id);

              return (
                <div
                  key={kat.id}
                  className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/80 dark:hover:border-slate-700"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                        Kat {kat.id}
                      </p>
                      <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                        {kat.label}
                      </h3>
                      {kat.opis && (
                        <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">
                          {kat.opis}
                        </p>
                      )}
                    </div>
                    <Link
                      href={`/projekt-otok/kat/${kat.id}`}
                      className="text-xs font-medium text-slate-900 underline underline-offset-4 hover:opacity-80 dark:text-slate-100"
                    >
                      Detalji kata
                    </Link>
                  </div>

                  <div className="mt-4 space-y-2">
                    {stanoviNaKatu.map((stan) => (
                      <Link
                        key={stan.id}
                        href={`/projekt-otok/stan/${stan.id}`}
                        className="flex items-center justify-between gap-3 rounded-xl border border-slate-100 bg-slate-50 px-3 py-2 text-xs text-slate-700 transition hover:border-slate-200 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:bg-slate-800"
                      >
                        <div className="flex flex-col">
                          <span className="font-semibold text-slate-900 dark:text-slate-50">
                            {stan.oznaka}
                          </span>
                          <span className="text-[0.72rem] text-slate-500 dark:text-slate-400">
                            {stan.brojSoba}-soban · {stan.povrsina.toFixed(1)} m² · {stan.orijentacija}
                          </span>
                        </div>
                        <span
                          className={`rounded-full px-2 py-1 text-[0.7rem] font-medium ${statusClass[stan.status]}`}
                        >
                          {statusLabel[stan.status]}
                        </span>
                      </Link>
                    ))}

                    {stanoviNaKatu.length === 0 && (
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Stanovi za ovaj kat bit će dodani uskoro.
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
