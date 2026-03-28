import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  logoSrc: string;
  logoAlt: string;
  email: string;
  phone1: string;
  phone2: string;
  navLinks: { label: string; href: string }[];
  ctaLabel: string;
  ctaHref: string;
}

export default function Navbar({
  logoSrc,
  logoAlt,
  email,
  phone1,
  phone2,
  navLinks,
  ctaLabel,
  ctaHref,
}: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-sm">
      {/* Top contact bar */}
      <div className="bg-[#27272e] text-white text-sm px-4 lg:px-12 py-2 hidden lg:flex items-center justify-between">
        <a href={`mailto:${email}`} className="hover:text-[#0094DC] transition-colors">
          {email}
        </a>
        <div className="flex items-center gap-6">
          <a href={`tel:${phone1}`} className="hover:text-[#0094DC] transition-colors">
            {phone1}
          </a>
          <span className="text-gray-500">|</span>
          <a href={`tel:${phone2}`} className="hover:text-[#0094DC] transition-colors">
            {phone2}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-white px-4 lg:px-12 py-4 flex items-center justify-between">
        <a href="/" className="flex-shrink-0">
          <img src={logoSrc} alt={logoAlt} className="h-10 object-contain" />
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-[#27272e] font-medium hover:text-[#0094DC] transition-colors text-sm"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={ctaHref}
          className="hidden lg:inline-flex items-center bg-[#0094DC] text-white text-sm font-semibold px-6 py-3 rounded-md hover:bg-[#007bbf] transition-colors"
        >
          {ctaLabel}
        </a>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#27272e] transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#27272e] transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#27272e] transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden bg-white border-t border-gray-100 px-4 pb-4"
          >
            <ul className="flex flex-col gap-3 pt-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="block text-[#27272e] font-medium hover:text-[#0094DC] transition-colors py-1"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={ctaHref}
                  className="inline-flex items-center bg-[#0094DC] text-white text-sm font-semibold px-6 py-3 rounded-md hover:bg-[#007bbf] transition-colors mt-2"
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
