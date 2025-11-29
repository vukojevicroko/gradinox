// app/kontakt/page.tsx
export default function KontaktPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-2xl font-semibold text-slate-900">Kontakt</h1>
      <p className="mt-4 max-w-2xl text-sm text-slate-600">
        Za sva pitanja vezana uz Projekt Otok, dostupne stanove, suradnju ili
        ulaganje, javite se direktno Gradinox gradnji.
      </p>

      <div className="mt-8 grid gap-10 md:grid-cols-[2fr,1fr]">
        {/* Forma (frontend-only, kasnije možemo dodati backend) */}
        <form className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div>
            <label className="block text-xs font-medium text-slate-700">
              Ime i prezime
            </label>
            <input
              type="text"
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-0 focus:border-slate-900"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-700">
              E-mail
            </label>
            <input
              type="email"
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-0 focus:border-slate-900"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-700">
              Poruka
            </label>
            <textarea
              rows={4}
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-0 focus:border-slate-900"
            />
          </div>
          <button
            type="submit"
            className="rounded-full border border-slate-900 bg-slate-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            Pošalji upit
          </button>
        </form>

        {/* Kontakt info */}
        <div className="space-y-3 text-sm text-slate-700">
          <div>
            <h2 className="text-sm font-semibold text-slate-900">
              Podaci za kontakt
            </h2>
            <p className="mt-1">
              E-mail:{" "}
              <a
                href="mailto:gradinoxgradnja@gmail.com"
                className="underline underline-offset-2"
              >
                gradinoxgradnja@gmail.com
              </a>
            </p>
          </div>
          <p className="text-xs text-slate-500">
            Detaljni podaci o projektu, dostupnim stanovima i dinamici gradnje
            bit će pravovremeno ažurirani na stranici Projekta Otok.
          </p>
        </div>
      </div>
    </div>
  );
}
