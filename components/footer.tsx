// components/Footer.tsx

"use client";

import { useState } from "react";

export default function Footer() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sent");

    // Ovdje kasnije možeš dodati backend mail funkcionalnost
    // Za sada radimo samo vizualnu simulaciju
    setTimeout(() => setStatus("idle"), 2500);
  };

  return (
    <footer className="mt-20 border-t border-slate-200 bg-slate-50 py-16 dark:border-slate-700 dark:bg-slate-950">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-20 px-4 md:grid-cols-2 md:gap-28">

        
        {/* --- STUPAC 1: Kontakt forma --- */}
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
            Kontaktirajte nas
          </h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Imate pitanje? Pošaljite nam kratku poruku i kontaktirat ćemo vas.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Vaše ime"
              required
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm text-slate-800 shadow-sm outline-none transition focus:border-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            />

            <input
              type="email"
              placeholder="Email"
              required
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm text-slate-800 shadow-sm outline-none transition focus:border-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            />

            <textarea
              placeholder="Poruka"
              rows={3}
              required
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm text-slate-800 shadow-sm outline-none transition focus:border-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            />

            <button
              type="submit"
              className="w-full rounded-xl bg-slate-900 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
            >
              {status === "sent" ? "Poslano ✔" : "Pošalji poruku"}
            </button>
          </form>
        </div>

        {/* --- STUPAC 2: Info o firmi --- */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
            Informacije o tvrtki
          </h3>

          <div className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <p>
              <span className="font-semibold text-slate-800 dark:text-slate-100">
                Gradinox Gradnja d.o.o.
              </span>
            </p>
            <p>Godina osnivanja: 2025.</p>

            <p className="mt-4 font-semibold text-slate-800 dark:text-slate-100">
              Kontakt:
            </p>
            <p>+385 99 123 4567 (placeholder)</p>
            <p>gradinoxgradnja@gmail.com</p>

            <p className="mt-4 font-semibold text-slate-800 dark:text-slate-100">
              Lokacija:
            </p>
            <p>Adresa tvrtke (placeholder)</p>

            <p className="mt-4 font-semibold text-slate-800 dark:text-slate-100">
              Radno vrijeme:
            </p>
            <p>Pon – Pet: 08:00 – 17:00</p>
            <p>Subota: 09:00 – 13:00</p>
          </div>
        </div>
      </div>

      {/* Donja linija */}
      <div className="mx-auto mt-12 max-w-6xl px-4 text-center text-xs text-slate-500 dark:text-slate-400">
        © {new Date().getFullYear()} Gradinox Gradnja · Sva prava pridržana
      </div>
    </footer>
  );
}
