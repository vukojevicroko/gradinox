// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} Gradinox gradnja. Sva prava pridržana.
        </p>
        <p className="flex gap-4">
          <span>Osnovano 2025.</span>
          <a
            href="mailto:gradinoxgradnja@gmail.com"
            className="underline-offset-2 hover:underline"
          >
            gradinoxgradnja@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
}
