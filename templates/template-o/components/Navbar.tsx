import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface NavLink {
  label: string;
  href: string;
}

interface NavbarProps {
  logoSrc: string;
  logoAlt: string;
  navLinks: NavLink[];
  ctaLabel: string;
  ctaHref: string;
}

export default function Navbar({ logoSrc, logoAlt, navLinks, ctaLabel, ctaHref }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 lg:px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="https://brandbooster.ai/" className="flex-shrink-0">
          <img src={logoSrc} alt={logoAlt} className="h-9 object-contain" />
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-gray-700 font-medium text-sm hover:text-[#3B5BDB] transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href={ctaHref}
          className="hidden lg:inline-flex items-center gap-2 bg-[#3B5BDB] text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[#2f4ac4] transition-colors"
        >
          {ctaLabel}
        </a>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="lg:hidden bg-white border-t border-gray-100 px-4 pb-4"
          >
            <ul className="flex flex-col gap-3 pt-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="block text-gray-700 font-medium hover:text-[#3B5BDB] transition-colors py-1"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={ctaHref}
                  className="inline-flex items-center bg-[#3B5BDB] text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[#2f4ac4] transition-colors mt-2"
                  onClick={() => setMenuOpen(false)}
                >
                  {ctaLabel}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
