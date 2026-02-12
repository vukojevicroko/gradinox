export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full px-6 py-10 md:px-12 md:py-14">
      {/* 
        Glavni container:
        - max-w-7xl: široko i pro (ne preširoko)
        - mx-auto: centriranje kontejnera na velikim ekranima
      */}
      <div className="mx-auto w-full max-w-7xl">
        {children}
      </div>
    </section>
  );
}
