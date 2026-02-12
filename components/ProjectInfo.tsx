import Dashboard from "@/components/Dashboard";

export default function ProjectInfo() {
  const projectTitle = "The Meridian Complex"; // placeholder, možeš kasnije u prop

  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1400px] px-4 py-10 lg:px-12">
        {/* Ovo je tvoj DONJI BLOK */}
        <div className="rounded-2xl bg-slate-300 px-6 py-8 text-slate-900 shadow-[0_30px_80px_rgba(0,0,0,0.1)] md:px-8">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            PROJEKT OTOK
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Tri Objekta. Jedna Vizija. Majstorski Koordinirano.
          </p>

          {/* Dashboard ide OVDJE, unutar bloka */}
          <div className="mt-6">
            <Dashboard projectTitle={projectTitle} />
          </div>
        </div>
      </div>
    </section>
  );
}
