// app/galerija/page.tsx
export default function GalerijaPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-2xl font-semibold text-slate-900">Galerija</h1>
      <p className="mt-4 max-w-2xl text-sm text-slate-600">
        U galeriji će biti prikazani renderi eksterijera, interijera i odabrani
        tlocrti stanova iz Projekta Otok. Fotografije i vizuali služe kao
        jasan pregled kvalitete gradnje i planiranog dizajna.
      </p>

      {/* Ovdje kasnije dodaj grid sa slikama */}
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="aspect-[4/3] rounded-xl border border-slate-200 bg-slate-100" />
        <div className="aspect-[4/3] rounded-xl border border-slate-200 bg-slate-100" />
        <div className="aspect-[4/3] rounded-xl border border-slate-200 bg-slate-100" />
      </div>
    </div>
  );
}
