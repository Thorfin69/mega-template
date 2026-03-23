import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Menu, X } from "lucide-react";

export function STNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-[100] bg-white border-b border-black/10">
      {/* Desktop */}
      <div className="hidden lg:flex items-center justify-between h-[77px] px-[130px] max-w-[1440px] mx-auto w-full">
        {/* Logo */}
        <a href="/sympletax" className="shrink-0">
          <img src="https://pub-af595d5658084c1db74f624e385553fe.r2.dev/IMG_5368.png" alt="SympleTax" className="h-[36px] w-auto object-contain" />
        </a>
        {/* Nav */}
        <nav className="flex items-center">
          {["Home", "About Us", "Solutions", "Resources", "Contact"].map(link => (
            <a key={link} href="#" className="font-['Geist:Regular',sans-serif] text-[14px] text-[#0b0b0b]/70 uppercase tracking-[-0.42px] hover:text-[#0b0b0b] transition-colors px-[10px] py-[30px]">
              {link}
            </a>
          ))}
        </nav>
        {/* Right */}
        <div className="flex items-center gap-[24px] shrink-0">
          <a href="tel:19492873015" className="flex items-center gap-[8px] font-['Geist:Regular',sans-serif] text-[14px] text-[#0b0b0b]/70 tracking-[-0.42px] hover:text-[#0b0b0b] transition-colors">
            <Phone size={14} />
            +1 (949) 287-3015
          </a>
          <a href="/contact" className="bg-[#00A4A4] px-[21px] py-[11px] rounded-[50px] font-['Geist:Regular',sans-serif] text-[14px] text-white uppercase tracking-[-0.42px] hover:bg-[#008585] transition-all active:scale-95">
            Free Consultation
          </a>
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden flex items-center justify-between px-6 h-[60px]">
        <a href="/sympletax">
          <img src="https://pub-af595d5658084c1db74f624e385553fe.r2.dev/IMG_5368.png" alt="SympleTax" className="h-[28px] w-auto object-contain" />
        </a>
        <button onClick={() => setOpen(!open)} className="p-2 text-[#0b0b0b]" aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-[60px] left-0 w-full bg-white border-b border-black/10 py-8 px-6 flex flex-col gap-5 shadow-lg"
          >
            {["Home", "About Us", "Solutions", "Resources", "Contact"].map(link => (
              <a key={link} href="#" onClick={() => setOpen(false)} className="font-['Geist:Regular',sans-serif] text-[16px] text-[#0b0b0b] uppercase tracking-[-0.42px]">{link}</a>
            ))}
            <a href="tel:19492873015" className="font-['Geist:Light',sans-serif] text-[16px] text-[#6b7280] tracking-[-0.42px]">+1 (949) 287-3015</a>
            <a href="/contact" onClick={() => setOpen(false)} className="bg-[#00A4A4] text-center py-4 rounded-[50px] font-['Geist:Regular',sans-serif] text-[14px] text-white uppercase tracking-[-0.42px]">
              Free Consultation
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
