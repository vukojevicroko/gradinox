// app/projekt-otok/page.tsx

import Link from "next/link";

export default function ProjektOtokPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-2xl font-semibold text-slate-900">Projekt Otok</h1>

      <p className="mt-4 max-w-3xl text-sm text-slate-600">
        Projekt Otok je ključni projekt Gradinox gradnje. Cilj je ponuditi
        uredno isplaniranu stambenu zgradu s jasno prikazanim katovima i
        stanovima, te preciznim tlocrtima i renderima kako bi svaki potencijalni
        kupac ili ulagač imao jasan uvid u projekt.
      </p>

      <p className="mt-3 max-w-3xl text-sm text-slate-600">
        Na ovoj stranici bit će centralno mjesto za sve informacije vezane uz
        projekt – od općih podataka o zgradi, preko prikaza katova, do detalja
        svakog pojedinog stana.
      </p>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-sm">
          <h2 className="text-sm font-semibold text-slate-900">
            Pregled katova
          </h2>
          <p className="mt-2">
            Svaki kat imat će svoju podstranicu s popisom stanova i osnovnim
            informacijama. Na taj način kupci brzo pronalaze kat i raspored koji
            im odgovara.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-sm">
          <h2 className="text-sm font-semibold text-slate-900">
            Stranice stanova
          </h2>
          <p className="mt-2">
            Svaki stan bit će predstavljen kroz tlocrt, kvadraturu, broj soba,
            orijentaciju i rendere, uz kratak opis namjene i prednosti.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-sm">
          <h2 className="text-sm font-semibold text-slate-900">
            Dokumentacija i vizuali
          </h2>
          <p className="mt-2">
            Projekt Otok će objediniti ključne dokumente, slike i rendere,
            kako bi ulagači i kupci imali sve informacije na jednom mjestu.
          </p>
        </div>
      </section>

      <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700">
        <p>
          U sljedećoj fazi ovdje ćemo povezati dinamičke podstranice za katove i
          stanove, te ubaciti stvarne tlocrte i rendere nakon što ih dobiješ.
        </p>
        <Link
          href="/kontakt"
          className="mt-3 inline-flex text-sm font-medium text-slate-900 underline underline-offset-4"
        >
          Za dodatne informacije kontaktirajte Gradinox gradnju
        </Link>
      </section>
    </div>
  );
}
