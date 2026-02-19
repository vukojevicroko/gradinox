"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { 
    href: "/projekt-otok", 
    label: "Projekt Otok",
    dropdown: [
      { href: "/projekt-otok/a", label: "Zgrada A" },
      { href: "/projekt-otok/b", label: "Zgrada B" },
      { href: "/projekt-otok/c", label: "Zgrada C" },
    ]
  },
  { href: "/o-nama", label: "O nama" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

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
    setDropdownOpen(null);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-all duration-300 ${
        isScrolled
          ? "border-slate-700 bg-slate-900 shadow-sm dark:border-slate-300 dark:bg-slate-100"
          : "border-slate-700/50 bg-slate-900 dark:border-slate-300/50 dark:bg-slate-100"
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-4 transition-all duration-300 ${
          isScrolled ? "py-2" : "py-4"
        }`}
      >
        {/* LOGO lijevo */}
        <Link href="/" className="flex items-center gap-3">
          <div
            className={`rounded-full border transition-all duration-300 ${
              isScrolled
                ? "h-8 w-8 border-slate-400 dark:border-slate-600"
                : "h-10 w-10 border-slate-400 dark:border-slate-600"
            }`}
          />
          <div className="flex flex-col leading-tight">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white dark:text-slate-900">
              Gradinox
            </span>
            <span className="text-[0.68rem] text-slate-300 dark:text-slate-600">
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

            // If item has dropdown
            if (item.dropdown) {
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(item.href)}
                  onMouseLeave={() => setDropdownOpen(null)}
                >
                  <Link
                    href={item.href}
                    className={`relative flex items-center gap-1 pb-1 transition-colors duration-200 ${
                      isActive
                        ? "text-white dark:text-slate-900"
                        : "text-slate-300 hover:text-white dark:text-slate-600 dark:hover:text-slate-900"
                    }`}
                  >
                    {item.label}
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    <span
                      className={`
                        pointer-events-none
                        absolute 
                        -bottom-0.5 
                        left-0 
                        right-0
                        h-[2px] 
                        origin-left 
                        rounded-full 
                        bg-white 
                        dark:bg-slate-900 
                        transition-transform 
                        duration-300
                        ${isActive ? "scale-x-100" : "scale-x-0"}
                      `}
                    />
                  </Link>
                  
                  {/* Dropdown */}
                  {dropdownOpen === item.href && (
                    <div className="absolute left-0 top-full pt-2">
                      <div className="rounded-lg border border-slate-700 bg-slate-800 py-2 shadow-lg dark:border-slate-300 dark:bg-slate-200">
                        {item.dropdown.map((dropItem) => (
                          <Link
                            key={dropItem.href}
                            href={dropItem.href}
                            className="block whitespace-nowrap px-4 py-2 text-sm text-slate-200 transition-colors hover:bg-slate-700 hover:text-white dark:text-slate-700 dark:hover:bg-slate-300 dark:hover:text-slate-900"
                          >
                            {dropItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            // Regular link without dropdown
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative pb-1 transition-colors duration-200 ${
                  isActive
                    ? "text-white dark:text-slate-900"
                    : "text-slate-300 hover:text-white dark:text-slate-600 dark:hover:text-slate-900"
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
                    bg-white 
                    dark:bg-slate-900 
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
          className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-600 text-slate-200 transition hover:bg-slate-800 dark:border-slate-400 dark:text-slate-700 dark:hover:bg-slate-200 md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Otvori navigaciju"
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-[5px]">
            <span
              className={`block h-[2px] w-4 rounded-full bg-slate-200 transition-all dark:bg-slate-700 ${
                menuOpen ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-4 rounded-full bg-slate-200 transition-all dark:bg-slate-700 ${
                menuOpen ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="border-t border-slate-700 bg-slate-900/95 px-4 py-3 text-sm shadow-sm backdrop-blur dark:border-slate-300 dark:bg-slate-100/95 md:hidden">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              // If item has dropdown
              if (item.dropdown) {
                return (
                  <div key={item.href}>
                    <button
                      onClick={() => {
                        if (dropdownOpen === item.href) {
                          setDropdownOpen(null);
                        } else {
                          setDropdownOpen(item.href);
                        }
                      }}
                      className={`flex w-full items-center justify-between rounded-md px-2 py-1.5 text-left transition-colors ${
                        isActive
                          ? "bg-slate-800 text-white dark:bg-slate-200 dark:text-slate-900"
                          : "text-slate-300 hover:bg-slate-800 dark:text-slate-600 dark:hover:bg-slate-200"
                      }`}
                    >
                      {item.label}
                      <svg 
                        className={`h-4 w-4 transition-transform ${dropdownOpen === item.href ? 'rotate-180' : ''}`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {dropdownOpen === item.href && (
                      <div className="mt-1 ml-4 flex flex-col gap-1">
                        {item.dropdown.map((dropItem) => (
                          <Link
                            key={dropItem.href}
                            href={dropItem.href}
                            className="rounded-md px-2 py-1.5 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white dark:text-slate-500 dark:hover:bg-slate-200 dark:hover:text-slate-900"
                          >
                            {dropItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              // Regular link
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-md px-2 py-1.5 transition-colors ${
                    isActive
                      ? "bg-slate-800 text-white dark:bg-slate-200 dark:text-slate-900"
                      : "text-slate-300 hover:bg-slate-800 dark:text-slate-600 dark:hover:bg-slate-200"
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
