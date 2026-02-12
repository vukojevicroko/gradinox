// app/(...) / layout.tsx  (gdje god ti je ovaj DocsLayout)
// FULL-WIDTH layout: ne guši hero sekcije i sticky elemente

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full">
      {/* 
        Wrapper koji daje normalan vertikalni spacing,
        ali NE ograničava širinu stranice.
      */}
      <div className="w-full">
        {children}
      </div>
    </section>
  );
}
