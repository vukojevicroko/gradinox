// app/layout.tsx
import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Gradinox gradnja | Projekt Otok",
  description:
    "Gradinox gradnja – građevinska tvrtka osnovana 2025. Fokus na Projekt Otok, kvalitetnu gradnju, tlocrtne prikaze stanova i realistične rendere dizajna.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hr">
      <body className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50" >
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
