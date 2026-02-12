// app/page.tsx
import Link from "next/link";
import Image from "next/image";


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
              Pouzdana novogradnja{" "}
              <span className="whitespace-nowrap">na Projektu Otok</span>
            </h1>
            <p className="mt-2 max-w-xl text-lg font-normal text-slate-600 dark:text-slate-300 sm:text-xl">
              uredna dokumentacija, jasni tlocrti i realistični renderi.
            </p>

            <p className="mt-5 max-w-xl text-sm text-slate-600 dark:text-slate-300">
              Gradinox gradnja je građevinska tvrtka osnovana 2025. godine s
              fokusom na jasno prezentirane projekte. Projekt Otok donosi
              preglednu strukturu katova i stanova, s tlocrtima i vizualima koji
              pomažu kupcima i ulagačima donijeti pravu odluku.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/projekt-otok"
                className="rounded-full bg-slate-900 px-6 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800 hover:shadow-md dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
              >
                Pogledaj Projekt Otok
              </Link>
              <Link
                href="/kontakt"
                className="rounded-full border border-slate-300 bg-white px-6 py-2.5 text-sm font-medium text-slate-800 transition hover:border-slate-400 hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
              >
                Kontaktiraj Gradinox
              </Link>
            </div>

            {/* mini trust bar */}
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                <span>U tijeku pripreme Projekta Otok</span>
              </div>
              <span className="hidden h-3 w-px bg-slate-300 dark:bg-slate-600 sm:inline-block" />
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-semibold text-slate-700 dark:text-slate-200">
                  Fokus:
                </span>
                <span>kvaliteta gradnje · poštivanje rokova · jasni ciljevi</span>
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

        {/* Kartica preko slike na desktopu /}
        {/*
        <div className="absolute bottom-10 right-[10%] z-20 hidden max-w-sm lg:block">
          <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 text-xs text-slate-700 shadow-xl backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-200">
            <p className="font-semibold text-slate-900 dark:text-slate-50">
              Pregledan projekt za kupce i ulagače
            </p>
            <p className="mt-1 text-[0.72rem] leading-relaxed">
              Stranica Projekta Otok omogućuje brz uvid u katove, stanove,
              tlocrte i rendere – bez lutanja po PDF-ovima i dokumentima.
            </p>
          </div>
        </div>
        */}
      </section>



            {/* SEKCIJA: Upoznavanje s tvrtkom / kredibilitet */}
      <section className="relative bg-white dark:bg-slate-900">
      <div className="absolute -top-8 left-0 right-0 h-8 bg-gradient-to-b from-white/0 to-white dark:from-slate-900/0 dark:to-slate-900" />

        <div className="mx-auto max-w-6xl px-4 py-16 space-y-16">
          {/* RED 1 – slika lijevo, tekst desno */}
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* Slika / placeholder – ti ćeš tu kasnije ubaciti render / fotku */}
            <div className="fade-in-up">
              <div className="rounded-2xl border border-slate-200 dark:border-slate-700 shadow-md overflow-hidden w-full">
                <div className="w-full overflow-hidden rounded-2xl border border-slate-200 shadow-md dark:border-slate-700">
                {/* Bitno: relative + aspect */}
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
                Realistični renderi eksterijera pomažu stvoriti
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
      <section className=" bg-white py-24 dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-6xl px-4">
          <div className="fade-in-up flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                Partneri i suradnje
              </p>
              <h2 className="mt-2 text-xl font-semibold text-slate-900 dark:text-slate-50">
                Gradimo projekte zajedno s provjerenim partnerima.
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-600 dark:text-slate-300">
                U realizaciji projekata sudjeluju građevinske tvrtke, prodajni
                i marketinški partneri, kako bi Projekt Otok imao snažnu
                izvedbu i prisutnost na tržištu.
              </p>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Logotipi su prikazani informativno. Stvarni partneri bit će
              navedeni po dogovoru.
            </p>
          </div>

          {/* Vrteća kolotura logotipa */}
          <div className="fade-in-up-delay relative mt-8 overflow-hidden py-4">
            {/* Blagi fade na rubovima da izgleda premium */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white dark:from-slate-900 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white dark:from-slate-900 to-transparent" />

            <div className="logo-marquee-track gap-10 pr-10">
              {/* Set 1 */}
              <div className="flex items-center gap-10">
                <PartnerBadge label="Građevinski izvođač" sub="Glavni izvedbeni partner" />
                <PartnerBadge label="Prodajni partner" sub="Agencija za prodaju stanova" />
                <PartnerBadge label="Marketinška agencija" sub="Brendiranje i promocija projekta" />
                <PartnerBadge label="Projektantski ured" sub="Arhitektura i projektiranje" />
                <PartnerBadge label="Nadzorni inženjer" sub="Stručni građevinski nadzor" />
                <PartnerBadge label="Tehnički savjetnik" sub="Konzalting i dokumentacija" />
              </div>
              {/* Dupli set za glatku petlju */}
              <div className="flex items-center gap-10">
                <PartnerBadge label="Građevinski izvođač" sub="Glavni izvedbeni partner" />
                <PartnerBadge label="Prodajni partner" sub="Agencija za prodaju stanova" />
                <PartnerBadge label="Marketinška agencija" sub="Brendiranje i promocija projekta" />
                <PartnerBadge label="Projektantski ured" sub="Arhitektura i projektiranje" />
                <PartnerBadge label="Nadzorni inženjer" sub="Stručni građevinski nadzor" />
                <PartnerBadge label="Tehnički savjetnik" sub="Konzalting i dokumentacija" />
              </div>
            </div>
          </div>
        </div>
      </section>

      </section>

    </div>
  );
}


function PartnerBadge({ label, sub }: { label: string; sub?: string }) {
  return (
    <div className="flex min-w-[180px] items-center gap-3 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-left shadow-sm backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/80">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-[0.6rem] font-semibold uppercase tracking-wide text-slate-50 dark:bg-slate-100 dark:text-slate-900">
        {/* Ovdje kasnije može ići stvarni logo (slika) */}
        LOGO
      </div>
      <div className="flex flex-col">
        <span className="text-xs font-semibold text-slate-900 dark:text-slate-50">
          {label}
        </span>
        {sub && (
          <span className="text-[0.7rem] text-slate-500 dark:text-slate-400">
            {sub}
          </span>
        )}
      </div>
    </div>
  );
}
