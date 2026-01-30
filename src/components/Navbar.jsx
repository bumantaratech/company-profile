import { useState } from "react";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Tentang", href: "#about" },
  { label: "Layanan", href: "#services" },
  { label: "Proyek", href: "#projects" },
  { label: "Kontak", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 inset-x-0 z-50 bg-industrial-graphite backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <span className="text-xl text-white font-semibold">
              Bumantara Tech
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-gray-100 hover:text-white transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://wa.me/6281387602244"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-black shadow hover:bg-black hover:text-white active:bg-black active:text-white transition-colors duration-200"
            >
              Konsultasi
            </a>
          </nav>

          {/* Mobile */}
          <button
            onClick={() => setOpen((s) => !s)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded text-gray-300 hover:text-white hover:bg-white/10 transition"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-64" : "max-h-0"}`}
        >
          <nav className="py-2 flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded text-gray-300 hover:text-white hover:bg-white/10 transition"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-primary-500 active:bg-primary-700 transition-colors duration-200"
            >
              Konsultasi
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
