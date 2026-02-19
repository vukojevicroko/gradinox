import Dashboard from "@/components/Dashboard";

export default function ProjectInfo() {
  const projectTitle = "Projekt Otok";

  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1400px] px-4 py-10 lg:px-12">
        <Dashboard projectTitle={projectTitle} />
      </div>
    </section>
  );
}
