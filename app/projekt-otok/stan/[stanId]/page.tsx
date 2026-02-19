// app/projekt-otok/stan/[stanId]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { katovi, stanovi, katIdToSlug } from "@/data/projektOtok";

type Props = {
  params: Promise<{ stanId: string }>;
};

export default async function StanPage({ params }: Props) {
  const { stanId } = await params;
  const stan = stanovi.find((s) => s.id === stanId);

  if (!stan) {
    return notFound();
  }

  const kat = katovi.find((k) => k.id === stan.katId);

  // Extract stan number from oznaka (e.g., "Stan 1" -> "1")
  const stanNumber = stan.oznaka.replace("Stan ", "");
  const kvadraturaPath = `/kvadratura/kvadratura_${stan.zgradaId}/stan_${stanNumber}.png`;

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
                href={`/projekt-otok/${stan.zgradaId}/${katIdToSlug(kat.id)}`}
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
          {stan.seoOpis || "Kratki opis stana – ovdje može ići kasnije tekst koji opisuje raspored, osjećaj prostora, pogled i ključne prednosti. Trenutno je ovo mjesto predviđeno kao SEO-friendly sažetak."}
        </p>

        <section className="mt-8 max-w-5xl">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
            {/* Floor Plan Frame */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
                <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                  Tlocrt stana
                </h2>
                {stan.slika ? (
                  <div className="mt-14 w-full overflow-hidden rounded-xl bg-slate-50 dark:bg-slate-900">
                    <Image
                      src={stan.slika}
                      alt={`Tlocrt ${stan.oznaka}`}
                      width={800}
                      height={600}
                      className="h-auto w-full"
                      sizes="(max-width: 768px) 100vw, 800px"
                    />
                  </div>
                ) : (
                  <div className="mt-14 aspect-[16/9] w-full rounded-xl border border-dashed border-slate-300 bg-slate-50 dark:border-slate-700 dark:bg-slate-900">
                    {/* Nema slike */}
                  </div>
                )}
                <p className="mt-2 text-[0.7rem] text-slate-500 dark:text-slate-400">
                  {stan.slika
                    ? "Prikaz tlocrta stana s osnovnim rasporedom prostorija."
                    : "Tlocrt stana bit će dodan nakon završetka projektne dokumentacije."}
                </p>
              </div>
            </div>

            {/* Layout Info Frame */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
                <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                  Kvadratura
                </h2>
                <div className="mt-3 w-full overflow-hidden rounded-xl bg-slate-50 dark:bg-slate-900">
                  <Image
                    src={kvadraturaPath}
                    alt={`Kvadratura ${stan.oznaka}`}
                    width={800}
                    height={400}
                    className="h-auto w-full"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 text-xs text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300">
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
        </section>
      </div>
    </div>
  );
}
