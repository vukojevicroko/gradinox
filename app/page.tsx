// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-slate-50">
      {/* HERO */}
      <section className="border-b bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 lg:flex-row lg:items-center">
          {/* Lijevi dio – tekst */}
          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
              Gradinox gradnja · Osnovano 2025.
            </p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Uredna, pouzdana gradnja za projekt{" "}
              <span className="whitespace-nowrap">Otok i buduće investicije.</span>
            </h1>
            <p className="mt-4 max-w-xl text-sm text-slate-600">
              Gradinox gradnja je nova građevinska tvrtka s fokusom na kvalitetnu
              izvedbu, jasnu dokumentaciju i urednu komunikaciju s kupcima i
              investitorima. Trenutno u fokusu: Projekt Otok.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/projekt-otok"
                className="rounded-full border border-slate-900 bg-slate-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                Projekt Otok
              </Link>
              <Link
                href="/kontakt"
                className="rounded-full border border-slate-300 px-5 py-2 text-sm font-medium text-slate-800 transition hover:border-slate-400 hover:bg-slate-100"
              >
                Kontakt i upiti
              </Link>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              Cilj je jasan: izgraditi ime Gradinox gradnja kao pouzdanog partnera,
              spominjanog uz Kamgrad, VMD, VDM, Strabag i druge vodeće izvođače.
            </p>
          </div>

          {/* Desni dio – mjesto za fotku/render */}
          <div className="flex-1">
            <div className="aspect-[4/3] w-full rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
              {/* Ovdje ti kasnije dolazi glavni render Projekta Otok */}
            </div>
            <p className="mt-2 text-xs text-slate-500">
              Vizualni prikazi (renderi) i tlocrti stanova bit će jasno prikazani
              kroz Projekt Otok i Galeriju.
            </p>
          </div>
        </div>
      </section>


            {/* SEKCIJA: Upoznavanje s tvrtkom / kredibilitet */}
      <section className="relative bg-white dark:bg-slate-900">
      <div className="absolute -top-8 left-0 right-0 h-8 bg-gradient-to-b from-white/0 to-white dark:from-slate-900/0 dark:to-slate-900" />

        <div className="mx-auto max-w-6xl px-4 py-16 space-y-16">
          {/* RED 1 – slika lijevo, tekst desno */}
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* Slika / placeholder – ti ćeš tu kasnije ubaciti render / fotku */}
            <div className="fade-in-up">
              <div className="aspect-[4/3] w-full rounded-2xl border border-slate-200 bg-slate-100 shadow-sm dark:border-slate-700 dark:bg-slate-800" />
              <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                Vizualni prikaz projekta – ovdje dolazi render ili fotografija
                povezano s Projektom Otok ili referentnim gradilištem.
              </p>
            </div>

            {/* Tekst desno */}
            <div className="fade-in-up-delay">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                Gradinox gradnja
              </p>
              <h2 className="mt-3 text-xl font-semibold text-slate-900 dark:text-slate-50">
                Uredan, ozbiljan pristup gradnji od prvog dana.
              </h2>
              <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
                Gradinox gradnja je nova građevinska tvrtka osnovana 2025.
                godine, s jasnim ciljem: izvoditi projekte na način koji je
                uredan, predvidljiv i transparentan za kupce i ulagače. Svaki
                korak – od dokumentacije do završnih radova – strukturiran je i
                vođen tako da se zna što se događa i kada.
              </p>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                Fokus je na kvalitetnoj izvedbi, suradnji s provjerenim
                partnerima i poštivanju dogovorenih rokova. Na taj način gradimo
                povjerenje i ime koje se u svakodnevnim razgovorima spominje uz
                vodeće izvođače na tržištu.
              </p>
            </div>
          </div>

          {/* RED 2 – tekst lijevo, slika desno */}
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* Tekst lijevo */}
            <div className="fade-in-up">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                Kupci i ulagači
              </p>
              <h2 className="mt-3 text-xl font-semibold text-slate-900 dark:text-slate-50">
                Jasna komunikacija i pregledan uvid u projekt.
              </h2>
              <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
                Bilo da se radi o kupcu stana ili ulagaču, cilj nam je da svaka
                osoba koja dođe na stranicu Projekta Otok u nekoliko minuta
                dobije jasan pregled projekta: gdje se gradi, kako izgleda
                zgrada, kakvi su tlocrti stanova i u kojoj je fazi izvođenje.
              </p>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                Kroz tlocrte, rendere i kratke, konkretne opise, svatko može
                donijeti informiranu odluku. Stranica nije tu samo kao
                prezentacija, već kao alat za donošenje odluka – za kupce,
                ulagače i partnere.
              </p>
            </div>

            {/* Slika desno */}
            <div className="fade-in-up-delay">
              <div className="aspect-[4/3] w-full rounded-2xl border border-slate-200 bg-slate-100 shadow-sm dark:border-slate-700 dark:bg-slate-800" />
              <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                Ovdje možeš kasnije ubaciti interijer, tlocrt ili detalj koji
                dodatno gradi povjerenje i osjećaj uredno vođenog projekta.
              </p>
            </div>
          </div>
        </div>
      </section>
            {/* SEKCIJA: Ključni highlighti poslovanja */}
      <section className="bg-slate-50 py-16 dark:bg-slate-950">
        <div className="mx-auto max-w-6xl px-4">
          <div className="fade-in-up text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Ključni aduti
            </p>
            <h2 className="mt-3 text-xl font-semibold text-slate-900 dark:text-slate-50">
              Što Gradinox gradnja donosi u svaki projekt
            </h2>
            <p className="mt-3 mx-auto max-w-2xl text-sm text-slate-600 dark:text-slate-300">
              Fokus je na urednoj organizaciji, razumljivoj dokumentaciji i
              jasnoj prezentaciji Projekta Otok – od tlocrta stanova do rendera
              završnog izgleda zgrade.
            </p>
          </div>

          <div className="fade-in-up-delay mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* 1 */}
            <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/80 dark:hover:border-slate-700">
              <div className="mb-4">
                <img
                  src="/icons/business-plan.svg"
                  alt="Upravljanje gradnjom"
                  className="h-10 w-10 opacity-80 transition group-hover:opacity-100 dark:invert"
                  />
              </div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                Uredna organizacija gradnje
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Projekti se vode kroz jasno definirane faze, s naglaskom na
                planiranje, nadzor i transparentnu komunikaciju s kupcima i
                ulagačima.
              </p>
            </div>

            {/* 2 */}
            <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/80 dark:hover:border-slate-700">
              <div className="mb-4">
                <img
                  src="/icons/blueprint.svg"
                  alt="Upravljanje gradnjom"
                  className="h-10 w-10 opacity-80 transition group-hover:opacity-100 dark:invert"
                  />
              </div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                Jasni tlocrti stanova
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Svaki stan prikazuje se kroz precizan tlocrt s površinama,
                rasporedom prostorija i osnovnim tehničkim informacijama.
              </p>
            </div>

            {/* 3 */}
            <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/80 dark:hover:border-slate-700">
              <div className="mb-4">
                <img
                  src="/icons/rendering.svg"
                  alt="Upravljanje gradnjom"
                  className="h-10 w-10 opacity-80 transition group-hover:opacity-100 dark:invert"
                  />
              </div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                Renderi završnog izgleda
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Realistični renderi eksterijera i interijera pomažu stvoriti
                jasnu sliku o tome kako će zgrada izgledati nakon završetka.
              </p>
            </div>

            {/* 4 */}
            <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/80 dark:hover:border-slate-700">
              <div className="mb-4">
                <img
                  src="/icons/target.svg"
                  alt="Upravljanje gradnjom"
                  className="h-10 w-10 opacity-80 transition group-hover:opacity-100 dark:invert"
                  />
              </div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                Fokus na Projekt Otok
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Projekt Otok je centralni projekt tvrtke, s detaljno razrađenim
                prikazom katova, stanova i faza izvođenja radova.
              </p>
            </div>

            {/* 5 */}
            <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/80 dark:hover:border-slate-700">
              <div className="mb-4">
                <img
                  src="/icons/search.svg"
                  alt="Upravljanje gradnjom"
                  className="h-10 w-10 opacity-80 transition group-hover:opacity-100 dark:invert"
                  />
              </div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                Informacije za odluku
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Stranica je zamišljena kao alat – kupac ili ulagač u kratkom
                vremenu dobiva sve ključne informacije za donošenje odluke.
              </p>
            </div>

            {/* 6 */}
            <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/80 dark:hover:border-slate-700">
              <div className="mb-4">
                <img
                  src="/icons/brand.svg"
                  alt="Upravljanje gradnjom"
                  className="h-10 w-10 opacity-80 transition group-hover:opacity-100 dark:invert"
                  />
              </div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                Gradnja brenda Gradinox
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Cilj je da se Gradinox gradnja prepoznaje kao pouzdan izvođač i
                da se ime tvrtke prirodno spominje uz vodeće građevinske firme
                na tržištu.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
