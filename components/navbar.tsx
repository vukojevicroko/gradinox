"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/projekt-otok", label: "Projekt Otok" },
  { href: "/o-nama", label: "O nama" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // kad promijeniš rutu, zatvori mobilni meni
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-all duration-300 ${
        isScrolled
          ? "border-slate-200 bg-white/90 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/90"
          : "border-transparent bg-white/0 dark:bg-slate-900/0"
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-4 transition-all duration-300 ${
          isScrolled ? "py-2" : "py-4"
        }`}
      >
        {/* LOGO lijevo */}
        <Link href="/" className="flex items-center gap-3">
          {/* Placeholder za logo – ti ćeš ovdje ubacit svoj <Image /> */}
          <div
            className={`rounded-full border transition-all duration-300 ${
              isScrolled
                ? "h-8 w-8 border-slate-400 dark:border-slate-500"
                : "h-10 w-10 border-slate-500 dark:border-slate-400"
            }`}
          />
          <div className="flex flex-col leading-tight">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-900 dark:text-slate-50">
              Gradinox
            </span>
            <span className="text-[0.68rem] text-slate-500 dark:text-slate-400">
              gradnja · od 2025.
            </span>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
  {navItems.map((item) => {
    const isActive =
      item.href === "/"
        ? pathname === "/"
        : pathname.startsWith(item.href);

    return (
      <Link
        key={item.href}
        href={item.href}
        className={`relative pb-1 transition-colors duration-200 ${
          isActive
            ? "text-slate-900 dark:text-slate-50"
            : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
        }`}
      >
        {item.label}
        <span
          className={`
            pointer-events-none
            absolute 
            -bottom-0.5 
            left-0 
            h-[2px] 
            w-full 
            origin-left 
            rounded-full 
            bg-slate-900 
            dark:bg-slate-100 
            transition-transform 
            duration-300
            ${isActive ? "scale-x-100" : "scale-x-0"}
          `}
        />
      </Link>
    );
  })}
</nav>


        {/* MOBILE TOGGLER */}
        <button
          className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800 md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Otvori navigaciju"
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-[5px]">
            <span
              className={`block h-[2px] w-4 rounded-full bg-slate-700 transition-all dark:bg-slate-200 ${
                menuOpen ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-4 rounded-full bg-slate-700 transition-all dark:bg-slate-200 ${
                menuOpen ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="border-t border-slate-200 bg-white/95 px-4 py-3 text-sm shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/95 md:hidden">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-md px-2 py-1.5 transition-colors ${
                    isActive
                      ? "bg-slate-900 text-slate-50 dark:bg-slate-100 dark:text-slate-900"
                      : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
