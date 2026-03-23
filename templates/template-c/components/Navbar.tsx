import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Solutions", href: "/solutions" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Floating pill wrapper */}
      <div className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 pt-4">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
            scrolled
              ? "bg-white/95 backdrop-blur-sm shadow-[0_4px_24px_rgba(0,0,0,0.10)] border border-gray-100"
              : "bg-white/95 backdrop-blur-sm shadow-[0_2px_12px_rgba(0,0,0,0.06)] border border-gray-100"
          }`}
        >
          <div className="flex items-center justify-between px-5 md:px-8 py-3">

            {/* Logo */}
            <Link to="/" className="flex items-center shrink-0">
              <img
                src="https://pub-af595d5658084c1db74f624e385553fe.r2.dev/IMG_5368.png"
                alt="SympleTax"
                className="h-9 w-auto object-contain"
              />
            </Link>

            {/* Desktop Nav Links — centered */}
            <div className="hidden md:flex items-center gap-7 absolute left-1/2 -translate-x-1/2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="font-['Inter'] font-medium text-[#0f172a]/70 hover:text-[#0f172a] transition-colors text-[14px] relative group whitespace-nowrap"
                >
                  {link.name}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-[#00A4A4] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Right side — phone + CTA */}
            <div className="hidden md:flex items-center gap-5 shrink-0">
              <a
                href="tel:+19492873015"
                className="hidden lg:flex items-center gap-2 font-['Inter'] font-semibold text-[#0f172a]/70 text-[14px] hover:text-[#0f172a] transition-colors"
              >
                <Phone className="w-[14px] h-[14px] text-[#00A4A4]" />
                +1 (949) 287-3015
              </a>

              <Link
                to="/contact"
                className="bg-[#00A4A4] hover:bg-[#007a7a] text-white px-5 py-2.5 rounded-xl font-['Inter'] font-bold text-[14px] flex items-center gap-2 relative overflow-hidden group transition-colors duration-300"
              >
                <span className="relative z-10">Free Consultation</span>
                <div className="absolute inset-0 bg-[#0f172a] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden text-[#0f172a] p-1"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile dropdown — inside the pill */}
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                key="mobile-menu"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                className="overflow-hidden border-t border-gray-100 md:hidden"
              >
                <div className="flex flex-col px-5 py-5 gap-1">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="font-['Inter'] font-semibold text-[#0f172a]/70 text-[15px] py-3 border-b border-gray-100 hover:text-[#0f172a] transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <a
                    href="tel:+19492873015"
                    className="flex items-center gap-2 font-['Inter'] font-bold text-[#0f172a]/70 text-[15px] py-3 border-b border-gray-100"
                  >
                    <Phone className="w-4 h-4 text-[#00A4A4]" />
                    +1 (949) 287-3015
                  </a>
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="bg-[#00A4A4] hover:bg-[#007a7a] text-white w-full py-3.5 rounded-xl font-['Inter'] font-bold text-[15px] flex items-center justify-center mt-3 transition-colors duration-300"
                  >
                    Free Consultation
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </div>

    </>
  );
}
