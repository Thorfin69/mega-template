import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  hours?: string;
  phone1: string;
  phone2?: string;
  logoSrc: string;
  logoAlt: string;
  ctaLabel?: string;
  ctaHref?: string;
}

const NAV_LINKS = [
  { label: 'Home', href: '#' },
  { label: 'Job Portal', href: '#jobs' },
  { label: 'Employers', href: '#employers' },
  { label: 'Resources', href: '#resources' },
  { label: 'Contact Us', href: '#contact' },
];

export default function Navbar({
  hours = 'Mon - Fri: 9.00am - 11.00pm',
  phone1,
  phone2,
  logoSrc,
  logoAlt,
  ctaLabel = 'Apply Now',
  ctaHref = '#apply',
}: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="sticky top-0 z-[999]">
      {/* Info bar */}
      <div className="bg-[#27272e] px-4 py-3 flex items-center justify-between">
        <p className="text-[#b8b8bd] text-sm font-[DM_Sans,sans-serif]">
          {hours}
        </p>
        <div className="flex items-center gap-4">
          <a href={`tel:${phone1}`} className="text-white text-sm font-medium hover:text-[#4da7aa] transition-colors">
            {phone1}
          </a>
          {phone2 && (
            <a href={`tel:${phone2}`} className="text-white text-sm font-medium hover:text-[#4da7aa] transition-colors hidden lg:block">
              {phone2}
            </a>
          )}
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-white shadow-[0_2px_30px_rgba(0,0,0,0.2)]">
        <div className="max-w-[1230px] mx-auto px-4 flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img src={logoSrc} alt={logoAlt} className="h-10 w-auto object-contain" />
          </a>

          {/* Desktop nav links */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#27272e] text-[0.9375rem] font-medium px-[10px] py-[25px] hover:text-[#4da7aa] transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-4 left-[10px] right-[10px] h-[2px] bg-[#4da7aa] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href={ctaHref}
            className="hidden lg:flex items-center justify-center bg-[#4da7aa] text-white text-[0.9375rem] font-semibold px-7 py-[15px] rounded-[5px] overflow-hidden relative group"
          >
            <span className="relative z-10">{ctaLabel}</span>
            <span className="absolute inset-0 bg-[#27272e] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-[#27272e] transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#27272e] transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#27272e] transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden border-t border-[#e2e2e2]"
            >
              <div className="px-4 py-4 flex flex-col gap-2">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-[#27272e] text-[0.9375rem] font-medium py-3 border-b border-[#e2e2e2] hover:text-[#4da7aa] transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href={ctaHref}
                  className="mt-2 flex items-center justify-center bg-[#4da7aa] text-white text-[0.9375rem] font-semibold px-7 py-4 rounded-[5px]"
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
