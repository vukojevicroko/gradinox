// app/page.tsx
import Link from "next/link";
import Image from "next/image";

const partners = [
  { logo: "/images/elektronovus.png", name: "Elektronovus", specialty: "Glavni izvođač radova", website: "" },
  { logo: "/images/loreta.png", name: "Loreta nekretnine", specialty: "Agencija za prodaju nekretnina", website: "" },
  { logo: "/images/expert.png", name: "Expert", specialty: "Projektant", website: "" },
  { logo: "/images/bilkić.jpg", name: "Vodoinstalacije Bilkić", specialty: "Vodointalacije i periferija", website: "" },
];

export default function HomePage() {
  return (
    <div className="bg-slate-50">
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-50 dark:bg-slate-950">
        {/* Glavni sadržaj – tekst lijevo */}
        <div className="mx-auto flex max-w-6xl flex-col justify-center gap-10 px-4 pt-20 pb-16 lg:min-h-[calc(100vh-80px)] lg:flex-row lg:items-center lg:pt-24">
          {/* Tekst lijevo */}
          <div className="relative z-10 flex-1 fade-in-up">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Gradinox gradnja · Projekt Otok
            </p>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-slate-50">
              Projekt Otok-{" "}
              <span className="whitespace-nowrap">promišljena novogradnja</span>
            </h1>
            <p className="mt-2 max-w-xl text-lg font-normal text-slate-600 dark:text-slate-300 sm:text-xl">
              Arhitektonska jasnoća. Funkcionalni tlocrti. Sigurna investicija.
            </p>

            <p className="mt-5 max-w-xl text-sm text-slate-600 dark:text-slate-300">
              Gradinox Gradnja razvija projekte u kojima su struktura, dokumentacija i vizualna prezentacija potpuno transparentni. Projekt Otok osmišljen je kako bi svaka odluka bila jasna, sigurna i bez nepoznanica.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/projekt-otok"
                className="rounded-full bg-slate-900 px-6 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800 hover:shadow-md dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
              >
                Pogledaj Projekt Otok
              </Link>
              <a
                href="#kontakt"
                className="rounded-full border border-slate-300 bg-white px-6 py-2.5 text-sm font-medium text-slate-800 transition hover:border-slate-400 hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
              >
                Kontaktirajte nas
              </a>
            </div>

            {/* mini trust bar */}
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                <span>Status projekta: U fazi pripreme i projektiranja</span>
              </div>
              <span className="hidden h-3 bg-slate-300 dark:bg-slate-600 sm:inline-block" />
              <div className="flex flex-wrap items-center gap-2">
              </div>
            </div>
          </div>

          {/* Prazan desni stupac – drži prostor za sliku na desktopu */}
          <div className="relative z-10 hidden flex-1 lg:block" />
        </div>

        {/* MOBILNA slika (ispod teksta) */}
        <div className="mt-4 px-4 pb-10 lg:hidden">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="/renders/Image13.png"
              alt="Projekt Otok – vizual zgrade"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* DESKTOP dijagonalna slika – zauzima desnu polovicu ekrana i ulazi pod header */}
        <div className="absolute inset-y-4 right-0 z-0 hidden w-[55%] lg:block">
            <div className="hero-diagonal hero-stroke relative h-full w-full overflow-hidden rounded-l-[3rem] bg-slate-900 shadow-[0_26px_80px_rgba(15,23,42,0.45)]">
            <Image
              src="/renders/Image13.png"
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>



            {/* SEKCIJA: Upoznavanje s tvrtkom / kredibilitet */}
      <section className="relative bg-white dark:bg-slate-900">
      <div className="absolute -top-8 left-0 right-0 h-8 bg-gradient-to-b from-white/0 to-white dark:from-slate-900/0 dark:to-slate-900" />

        <div className="mx-auto max-w-6xl px-4 py-16 space-y-16">
          {/* RED 1 – slika lijevo, tekst desno */}
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="fade-in-up">
              <div className="rounded-2xl border border-slate-200 dark:border-slate-700 shadow-md overflow-hidden w-full">
                <div className="w-full overflow-hidden rounded-2xl border border-slate-200 shadow-md dark:border-slate-700">
                  <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/renders/Image22.png"
                    alt="Projekt Otok – vizual"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 700px"
                    priority
                  />
                </div>
              </div>
            </div>
            </div>

            {/* Tekst desno */}
            <div className="fade-in-up-delay">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                Kako gradimo
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-slate-50">
                Dosljedan i strukturiran pristup gradnji.
              </h2>
              <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
                Gradinox Gradnja razvija projekte s jasnom organizacijom, preciznom dokumentacijom i kontroliranim procesima izvedbe. Svaka faza – od planiranja do završnih radova – vođena je transparentno i s jasno definiranim rokovima.
              </p>
              <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
                Suradnja s provjerenim partnerima i fokus na kvaliteti izvedbe temelj su našeg pristupa. Gradimo projekte koji su tehnički promišljeni i dugoročno pouzdani.
              </p>
              <div className="mt-4 text-center">
                <a
                  href="#partneri"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  Naši partneri
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* RED 2 – tekst lijevo, slika desno */}
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* Tekst lijevo */}
            <div className="fade-in-up">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                Kupci i ulagači
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-slate-50">
                Transparentnost kao standard.
              </h2>
              <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
                Kupci i investitori imaju jasan pregled svake faze projekta – od početnog koncepta i urbanističkog planiranja do završne izvedbe. Svaka informacija strukturirana je tako da je lako razumljiva i dostupna bez dodatnih upita ili nejasnoća.
              </p>
              <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
                Detaljni tlocrti, realistični prikazi i jasno definirani podaci o stanovima omogućuju brzu i sigurnu procjenu vrijednosti. Projekt Otok nije predstavljen samo vizualno, već sistematično – kako bi svaka odluka bila informirana, racionalna i dugoročno promišljena. Transparentna komunikacija temelj je povjerenja koje gradimo s kupcima i partnerima.
              </p>
              <div className="mt-4 text-center">
                <Link
                  href="/o-nama"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  Više o nama
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Slika desno */}
            <div className="fade-in-up-delay">
              <div className="rounded-2xl border border-slate-200 dark:border-slate-700 shadow-md overflow-hidden w-full">
                <div className="w-full overflow-hidden rounded-2xl border border-slate-200 shadow-md dark:border-slate-700">
                  {/* Bitno: relative + aspect */}
                 <div className="relative aspect-[4/3] w-full">
                  <Image
                      src="/renders/Image24.png"
                      alt="Projekt Otok – interijer"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 700px"
                      priority
                  />
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
            {/* SEKCIJA: Ključni highlighti poslovanja */}
      <section className="bg-white py-16 dark:bg-slate-950">
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
                Realistični prikazi eksterijera omogućuju jasan uvid u arhitektonski identitet i konačan izgled projekta.
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
                Stranica je zamišljena kao alat - kupac ili ulagač u kratkom
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
              {/* SEKCIJA: Partneri i suradnje */}
      <section id="partneri" className=" bg-white py-24 dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-6xl px-4">
          <div className="fade-in-up flex flex-col gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                Partneri i suradnje
              </p>
              <h2 className="mt-2 text-xl font-semibold text-slate-900 dark:text-slate-50">
                Gradimo projekte zajedno s provjerenim partnerima.
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-600 dark:text-slate-300">
                Naši pouzdani partneri koji zajedno s nama rade na realizaciji projekta.
              </p>
            </div>
          </div>

          {/* Partner Grid */}
          <div className="fade-in-up-delay mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {partners.map((partner, i) => (
              <div
                key={i}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/70 transition-all duration-300 cursor-pointer hover:shadow-lg hover:scale-105 hover:-translate-y-1 origin-center"
              >
                <div className="flex-shrink-0 h-16 w-16 overflow-hidden flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="h-full w-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{partner.name}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{partner.specialty}</p>
                  {partner.website && (
                    <a href={partner.website} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 mt-2 inline-block">{partner.website.replace("https://", "")}</a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      </section>

    </div>
  );
}
