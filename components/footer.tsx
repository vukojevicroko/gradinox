// components/Footer.tsx

"use client";

import { useState } from "react";

export default function Footer() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sent");
    setTimeout(() => setStatus("idle"), 2500);
  };

  return (
    <footer className="mt-20 border-t border-slate-200 bg-slate-50 py-16 dark:border-slate-700 dark:bg-slate-950">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-4 md:grid-cols-2 md:gap-20">

        {/* --- LEFT: Kontakt forma --- */}
        <div id="kontakt">
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
              {status === "sent" ? "Послано ✔" : "Pošalji poruku"}
            </button>
          </form>
        </div>

        {/* --- RIGHT: Map --- */}
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
            Lokacija Projekta Otok
          </h3>
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 shadow-md dark:border-slate-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.0376889277477!2d15.972639!3d45.763178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDQ1JzQ3LjQiTiAxNcKwNTgnMjEuNSJF!5e0!3m2!1sen!2shr!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokacija Projekta Otok"
            />
          </div>
        </div>
      </div>

      {/* Donja linija */}
      <div className="mx-auto mt-12 max-w-6xl px-4 text-center text-xs text-slate-500 dark:text-slate-400">
        © <span suppressHydrationWarning>{new Date().getFullYear()}</span> Gradinox Gradnja · Sva prava pridržana
      </div>
    </footer>
  );
}
