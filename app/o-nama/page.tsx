// app/o-nama/page.tsx
import Link from "next/link";

const pillars = [
  {
    title: "Precizno planiranje",
    text:
      "Svaki projekt započinjemo jasnim planom, definiranom dokumentacijom i realno postavljenim fazama izvedbe. Time se smanjuju nepredviđene situacije i osigurava kontrola nad rokovima, troškovima i kvalitetom od samog početka. Planiranje za nas nije formalnost, već temelj stabilne gradnje.",
  },
  {
    title: "Vizualna transparentnost",
    text:
      "Tlocrti, renderi i vizualni prikazi omogućuju jasan uvid u projekt prije same realizacije. Kupci i investitori imaju priliku razumjeti prostor, raspored i namjenu bez potrebe za dodatnim tumačenjima. Vizuali služe kao alat sigurnosti i povjerenja u odluku.",
  },
  {
    title: "Kontrola kvalitete",
    text:
      "Gradnju vodimo bez improvizacije, uz stalni nadzor i pažnju na detalje u svakoj fazi izvedbe. Kvaliteta se ne provjerava na kraju, već se sustavno održava tijekom cijelog procesa. Odgovornost prema projektu vidimo kao obvezu, a ne opciju.",
  },
  {
    title: "Dugoročna vizija",
    text:
      "Gradinox gradimo s ciljem stvaranja dugoročne reputacije, a ne kratkoročnih rezultata. Svaki projekt promatramo kao dio šire slike i budućeg povjerenja koje nosi naše ime. Dugoročna vizija usmjerava sve odluke koje donosimo danas.",
  },
];

export default function ONama() {
  return (
    <main className="w-full bg-white text-gray-900">

      {/* 1. PRIČA */}
      <section className="w-full py-24 px-6 md:px-16">
        <div className="w-full">
          <h1 className="text-5xl font-semibold tracking-tight text-center">
            Naša priča
          </h1>

          <p className="mt-8 text-lg leading-relaxed w-full text-gray-600 text-center">
          Gradinox Gradnja nastala je kao odgovor na potrebu za urednim i odgovornim vođenjem građevinskih projekata. U okruženju u kojem se često toleriraju improvizacije i nejasni procesi, odlučili smo graditi drugačije – sustavno, transparentno i s jasno definiranim pravilima od prvog dana.

          Umjesto brzog širenja bez temelja, odabrali smo promišljen razvoj. Započeti s jednim projektom koji će postaviti standard značilo je uložiti dodatno vrijeme u planiranje, organizaciju i kontrolu svake faze. Svaki korak – od idejnog rješenja do završne izvedbe – mora imati logiku, dokumentaciju i jasnu odgovornost.

          Naš pristup temelji se na precizno strukturiranim procesima, provjerenim partnerima i dosljednoj kontroli kvalitete. Odluke se ne donose impulzivno, već na temelju podataka, tehničkih analiza i dugoročne održivosti projekta. Smatramo da svaka investicija mora biti razumljiva, provjerljiva i opravdana.

          Projekt Otok nije samo početak poslovanja – već temelj na kojem gradimo reputaciju. Reputaciju koja se ne temelji na obećanjima, već na dosljednosti, korektnosti i kvaliteti izvedbe.  
          </p>
        </div>
      </section>

      {/* 2. GALLERY */}
      <section className="w-full border-t border-gray-200 py-20 px-6 md:px-16">
        <div className="w-full">
          <h2 className="text-4xl font-semibold tracking-tight text-center mb-12">
            Galerija
          </h2>
          <div className="w-full grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <img src="/renders/Image7.png" alt="Render 1" className="w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow" loading="lazy" />
            <img src="/renders/Image8.png" alt="Render 2" className="w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow" loading="lazy" />
            <img src="/renders/Image9.png" alt="Render 3" className="w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow" loading="lazy" />
            <img src="/renders/Image10.png" alt="Render 4" className="w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow" loading="lazy" />
            <img src="/renders/Image11.png" alt="Render 5" className="w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow" loading="lazy" />
            <img src="/renders/Image12.png" alt="Render 6" className="w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow" loading="lazy" />
            <img src="/renders/Image13.png" alt="Render 7" className="w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow" loading="lazy" />
            <img src="/renders/Image14.png" alt="Render 8" className="w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow" loading="lazy" />
            <img src="/renders/Image15.png" alt="Render 9" className="w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow" loading="lazy" />
          </div>
        </div>
      </section>

      {/* 3. MOTIVACIJA */}
      <section className="w-full py-24 px-6 md:px-16 bg-gray-50">
        <div className="w-full">
          <h2 className="text-4xl font-semibold tracking-tight text-center">
            Naša motivacija
          </h2>

          <p className="mt-8 text-lg leading-relaxed w-full text-gray-600 text-center">
          Motivacija za osnivanje Gradinox Gradnje proizašla je iz dugogodišnjeg promatranja prakse
          u kojoj se građevinski projekti često svode na minimum objašnjenja i maksimum improvizacije.
          Polazna točka bila je jednostavna: investitor i kupac moraju razumjeti što se gradi, kako se gradi i u kojoj su fazi radovi u svakom trenutku.
          Upravo zato Gradinox od početka inzistira na jasnoći — u dokumentaciji, vizualnoj prezentaciji i komunikaciji.
          Vjerujemo da kvalitetna gradnja ne počinje betonom, već planom i odgovornošću prema prostoru koji se stvara.
          Ovaj posao radimo jer smatramo da profesionalnost ne smije biti iznimka, nego standard. Dugoročno, naš cilj nije količina projekata,
          već povjerenje koje se gradi kroz dosljedan i korektan rad. Gradinox postoji kako bi pokazao da se građevinski posao može voditi mirno,
          transparentno i bez potrebe za naknadnim objašnjenjima.
          </p>
        </div>
      </section>

      {/* 4. GRID 2x2 */}
      <section className="w-full pt-24 pb-1 px-6 md:px-16">
        <div className="w-full grid gap-10 md:grid-cols-2">
          {pillars.map((p, index) => (
            <div
              key={p.title}
              className="p-12 pb-6 border-2 border-gray-300 rounded-xl hover:shadow-lg hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer min-h-96"
            >
              <div className="text-lg font-bold text-gray-500 mb-2">
                {index + 1}
              </div>
              <h3 className="text-2xl font-semibold">
                {p.title}
              </h3>
              <p className="mt-5 text-gray-600 leading-relaxed">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
