import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoanOfficer {
  name: string;
  phone: string;
  nmls: string;
  image: string;
  href: string;
}

interface NavbarProps {
  logoSrc: string;
  logoAlt: string;
  nmlsId: string;
  loanOfficers: LoanOfficer[];
  applyHref: string;
  mortgageCalculatorHref: string;
  blogsHref: string;
}

export default function Navbar({
  logoSrc,
  logoAlt,
  nmlsId,
  loanOfficers,
  applyHref,
  mortgageCalculatorHref,
  blogsHref,
}: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [officersOpen, setOfficersOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 lg:px-12 py-4 flex items-center justify-between gap-6">
        {/* Left: Logo + NMLS badge */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <a href="https://tigerloans.com/" aria-label="Tiger Loans Home">
            <img src={logoSrc} alt={logoAlt} className="h-10 object-contain" />
          </a>
          <span className="hidden sm:inline-flex items-center bg-[#f7b433] text-[#002C15] text-xs font-bold px-3 py-1 rounded-full">
            NMLS ID: {nmlsId}
          </span>
        </div>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#1a1a2e]">
          <li>
            <a href="https://tigerloans.com/" className="hover:text-[#f7b433] transition-colors">
              Home
            </a>
          </li>

          {/* Select Loan Officer dropdown */}
          <li className="relative">
            <button
              className="flex items-center gap-1 hover:text-[#f7b433] transition-colors"
              onClick={() => setOfficersOpen(!officersOpen)}
              aria-expanded={officersOpen}
            >
              Select Loan Officer
              <svg
                className={`w-4 h-4 transition-transform ${officersOpen ? 'rotate-180' : ''}`}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path d="M7.5 10.5L12 15L16.5 10.5" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
            <AnimatePresence>
              {officersOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 bg-white border border-gray-100 rounded-xl shadow-xl p-4 grid grid-cols-2 gap-3 w-[500px] z-50"
                >
                  {loanOfficers.map((lo) => (
                    <a
                      key={lo.nmls}
                      href={lo.href}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                      onClick={() => setOfficersOpen(false)}
                    >
                      <img
                        src={lo.image}
                        alt={lo.name}
                        className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                      />
                      <div>
                        <p className="text-sm font-semibold text-[#1a1a2e]">{lo.name}</p>
                        <p className="text-xs text-gray-500">{lo.phone}</p>
                        <p className="text-xs text-gray-400">NMLS# {lo.nmls}</p>
                      </div>
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          <li>
            <a
              href={mortgageCalculatorHref}
              className="hover:text-[#f7b433] transition-colors"
            >
              Mortgage Calculator
            </a>
          </li>
          <li>
            <a href={blogsHref} className="hover:text-[#f7b433] transition-colors">
              Our Blogs
            </a>
          </li>
        </ul>

        {/* CTA */}
        <a
          href={applyHref}
          className="hidden lg:inline-flex items-center gap-2 bg-[#1a1a2e] text-white text-sm font-semibold px-6 py-2.5 rounded-md hover:bg-[#f7b433] hover:text-[#1a1a2e] transition-colors"
        >
          Apply Now
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 25" fill="none">
            <path
              d="M11.293 17.793L12.707 19.207L19.414 12.5L12.707 5.793L11.293 7.207L15.586 11.5H6V13.5H15.586L11.293 17.793Z"
              fill="currentColor"
            />
          </svg>
        </a>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#1a1a2e] transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#1a1a2e] transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#1a1a2e] transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden bg-white border-t border-gray-100 px-4 pb-6"
          >
            <ul className="flex flex-col gap-4 pt-4 text-sm font-medium">
              <li>
                <a href="https://tigerloans.com/" className="block py-1 text-[#1a1a2e]" onClick={() => setMenuOpen(false)}>
                  Home
                </a>
              </li>
              <li>
                <a
                  href={mortgageCalculatorHref}
                  className="block py-1 text-[#1a1a2e]"
                  onClick={() => setMenuOpen(false)}
                >
                  Mortgage Calculator
                </a>
              </li>
              <li>
                <a href={blogsHref} className="block py-1 text-[#1a1a2e]" onClick={() => setMenuOpen(false)}>
                  Our Blogs
                </a>
              </li>
              <li>
                <a
                  href={applyHref}
                  className="inline-flex items-center gap-2 bg-[#1a1a2e] text-white font-semibold px-6 py-2.5 rounded-md mt-2"
                  onClick={() => setMenuOpen(false)}
                >
                  Apply Now
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
