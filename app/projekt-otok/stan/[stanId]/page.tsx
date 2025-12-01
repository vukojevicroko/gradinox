// app/projekt-otok/stan/[stanId]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import { katovi, stanovi } from "@/data/projektOtok";

type Props = {
  params: { stanId: string };
};

export default function StanPage({ params }: Props) {
  const stan = stanovi.find((s) => s.id === params.stanId);

  if (!stan) {
    return notFound();
  }

  const kat = katovi.find((k) => k.id === stan.katId);

  return (
    <div className="bg-slate-50 py-12 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-4 text-xs text-slate-500 dark:text-slate-400">
          <Link href="/projekt-otok" className="underline underline-offset-4">
            Projekt Otok
          </Link>
          {kat && (
            <>
              {" "}
              /{" "}
              <Link
                href={`/projekt-otok/kat/${kat.id}`}
                className="underline underline-offset-4"
              >
                {kat.label}
              </Link>
            </>
          )}{" "}
          / {stan.oznaka}
        </div>

        <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-50">
          {stan.oznaka}
        </h1>

        <p className="mt-3 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
          Kratki opis stana – ovdje može ići kasnije tekst koji opisuje raspored,
          osjećaj prostora, pogled i ključne prednosti. Trenutno je ovo mjesto
          predviđeno kao SEO-friendly sažetak.
        </p>

        <section className="mt-8 grid gap-8 md:grid-cols-[2fr,1.2fr]">
          {/* Lijevo – osnovne info i tlocrt placeholder */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
              <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                Osnovne informacije
              </h2>
              <dl className="mt-3 grid grid-cols-2 gap-3 text-xs text-slate-600 dark:text-slate-300">
                <div>
                  <dt className="text-slate-500 dark:text-slate-400">
                    Kat
                  </dt>
                  <dd className="font-medium">
                    {kat ? kat.label : `Kat ${stan.katId}`}
                  </dd>
                </div>
                <div>
                  <dt className="text-slate-500 dark:text-slate-400">
                    Površina
                  </dt>
                  <dd className="font-medium">
                    {stan.povrsina.toFixed(1)} m²
                  </dd>
                </div>
                <div>
                  <dt className="text-slate-500 dark:text-slate-400">
                    Broj soba
                  </dt>
                  <dd className="font-medium">{stan.brojSoba}</dd>
                </div>
                <div>
                  <dt className="text-slate-500 dark:text-slate-400">
                    Orijentacija
                  </dt>
                  <dd className="font-medium capitalize">
                    {stan.orijentacija}
                  </dd>
                </div>
                <div>
                  <dt className="text-slate-500 dark:text-slate-400">
                    Status
                  </dt>
                  <dd className="font-medium">
                    {stan.status === "available"
                      ? "Dostupno"
                      : stan.status === "reserved"
                      ? "Rezervirano"
                      : "Prodano"}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
              <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                Tlocrt stana
              </h2>
              <div className="mt-3 aspect-[4/3] w-full rounded-xl border border-dashed border-slate-300 bg-slate-50 dark:border-slate-700 dark:bg-slate-900">
                {/* Ovdje kasnije ubacuješ sliku tlocrta */}
              </div>
              <p className="mt-2 text-[0.7rem] text-slate-500 dark:text-slate-400">
                Tlocrt stana bit će dodan nakon završetka projektne dokumentacije.
              </p>
            </div>
          </div>

          {/* Desno – renderi / dodatne info */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
              <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                Renderi i vizualizacije
              </h2>
              <div className="mt-3 space-y-3">
                <div className="aspect-[4/3] w-full rounded-xl border border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-800" />
                <div className="aspect-[4/3] w-full rounded-xl border border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-800" />
              </div>
              <p className="mt-2 text-[0.7rem] text-slate-500 dark:text-slate-400">
                Vizuali služe za bolji dojam o prostoru prije završetka radova.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4 text-xs text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300">
              <p>
                Za dodatne informacije o ovom stanu, dostupnosti i uvjetima
                kupnje, javite se izravno na{" "}
                <a
                  href="mailto:gradinoxgradnja@gmail.com"
                  className="font-medium text-slate-900 underline underline-offset-4 dark:text-slate-50"
                >
                  gradinoxgradnja@gmail.com
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
