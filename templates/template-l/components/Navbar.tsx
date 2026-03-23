import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  logoSrc: string;
  logoAlt: string;
  navLinks: { label: string; href: string }[];
  ctaLabel: string;
  ctaHref: string;
}

export default function Navbar({ logoSrc, logoAlt, navLinks, ctaLabel, ctaHref }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="sticky top-0 z-[999]">
      <div className="bg-white border-b border-[#E5E7EB] shadow-[0_1px_20px_rgba(0,0,0,0.08)]">
        <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between h-[70px]">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img src={logoSrc} alt={logoAlt} className="h-8 w-auto object-contain" />
          </a>

          {/* Desktop nav links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#27313D] text-[0.9rem] font-medium px-3 py-2 rounded-md hover:text-[#027DFC] hover:bg-blue-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href={ctaHref}
            className="hidden lg:inline-flex items-center justify-center bg-[#027DFC] text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-[#0268d4] transition-colors"
          >
            {ctaLabel}
          </a>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-[#27313D] transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#27313D] transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#27313D] transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden overflow-hidden border-t border-[#E5E7EB]"
            >
              <div className="px-4 py-4 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-[#27313D] text-sm font-medium py-3 border-b border-[#F3F4F6] hover:text-[#027DFC] transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href={ctaHref}
                  className="mt-2 flex items-center justify-center bg-[#027DFC] text-white text-sm font-semibold px-6 py-3 rounded-full"
                >
                  {ctaLabel}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
