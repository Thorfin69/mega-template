import React from "react";

const NAV_COL1 = ["Home", "About Us", "How It Works", "Case Results", "Blog"];
const NAV_COL2 = ["Offer in Compromise", "Installment Agreement", "Penalty Abatement", "Tax Lien Release", "Free Consultation"];
const SOCIAL = [
  { label: "X", symbol: "𝕏", href: "#" },
  { label: "LinkedIn", symbol: "in", href: "#" },
  { label: "Facebook", symbol: "f", href: "#" },
  { label: "Instagram", symbol: "ig", href: "#" },
];

export function STFooter() {
  return (
    <footer className="w-full bg-[#0C206D] overflow-hidden">

      {/* ── TOP SECTION ── */}
      <div className="max-w-[1440px] mx-auto px-[80px] max-lg:px-[24px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1px_1.4fr_1px_1fr] gap-0 border-b border-white/10 py-[80px]">

          {/* COL 1 — Logo + tagline + social */}
          <div className="flex flex-col justify-between pr-[60px] max-lg:pr-0 max-lg:mb-[60px]">
            <div>
              <img
                src="https://pub-af595d5658084c1db74f624e385553fe.r2.dev/IMG_5368.png"
                alt="SympleTax"
                className="h-[36px] w-auto object-contain brightness-0 invert mb-[40px]"
              />
              <p className="font-['Geist:Light',sans-serif] text-[16px] text-white/50 leading-[26px] tracking-[-0.48px] max-w-[260px]">
                SympleTax helps individuals and businesses resolve IRS debt with proven, licensed strategies.
              </p>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-[10px] mt-[48px]">
              {SOCIAL.map(({ label, symbol, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-[42px] h-[42px] rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/60 transition-all font-['Geist:Regular',sans-serif] text-[13px]"
                >
                  {symbol}
                </a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block bg-white/10 mx-[0px]" />

          {/* COL 2 — Nav links (two sub-columns) */}
          <div className="flex gap-[40px] px-[60px] max-lg:px-0 max-lg:mb-[60px]">
            <div className="flex flex-col gap-[20px] flex-1">
              {NAV_COL1.map(link => (
                <a
                  key={link}
                  href="#"
                  className="font-['Geist:Regular',sans-serif] text-[13px] text-white/50 uppercase tracking-[0.5px] hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-[20px] flex-1">
              {NAV_COL2.map(link => (
                <a
                  key={link}
                  href="#"
                  className="font-['Geist:Regular',sans-serif] text-[13px] text-white/50 uppercase tracking-[0.5px] hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block bg-white/10" />

          {/* COL 3 — Address + contact */}
          <div className="flex flex-col justify-between pl-[60px] max-lg:pl-0">
            <p className="font-['Geist:Light',sans-serif] text-[28px] max-lg:text-[22px] text-white/80 leading-[38px] tracking-[-0.84px]">
              Irvine, California<br />United States
            </p>
            <div className="mt-[40px] flex flex-col gap-[16px]">
              <a
                href="tel:19492873015"
                className="font-['Geist:Light',sans-serif] text-[22px] text-white tracking-[-0.66px] hover:text-white/70 transition-colors border-b border-white/20 pb-[16px]"
              >
                (949) 287-3015
              </a>
              <a
                href="mailto:info@sympletax.com"
                className="font-['Geist:Light',sans-serif] text-[18px] text-white/70 tracking-[-0.54px] hover:text-white transition-colors"
              >
                info@sympletax.com
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* ── BIG BRAND NAME ── */}
      <div className="w-full overflow-hidden">
        <p
          className="font-['Geist:Light',sans-serif] text-white/[0.06] uppercase tracking-[-4px] leading-none select-none whitespace-nowrap text-center"
          style={{ fontSize: "clamp(80px, 14vw, 200px)", paddingBottom: "0px" }}
          aria-hidden
        >
          SympleTax
        </p>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="max-w-[1440px] mx-auto px-[80px] max-lg:px-[24px] py-[28px] flex items-center justify-between flex-wrap gap-[16px] border-t border-white/10">
        <p className="font-['Geist:Regular',sans-serif] text-[12px] text-white/30 tracking-[-0.36px]">
          © 2026 SympleTax. All Rights Reserved. SympleTax is not a law firm. Results may vary.
        </p>
        <div className="flex items-center gap-[24px]">
          <a href="#" className="font-['Geist:Regular',sans-serif] text-[12px] text-white/30 hover:text-white/60 uppercase tracking-[0.5px] transition-colors">Privacy Policy</a>
          <a href="#" className="font-['Geist:Regular',sans-serif] text-[12px] text-white/30 hover:text-white/60 uppercase tracking-[0.5px] transition-colors">Terms of Service</a>
          <a href="#" className="font-['Geist:Regular',sans-serif] text-[12px] text-white/30 hover:text-white/60 uppercase tracking-[0.5px] transition-colors">Disclaimer</a>
        </div>
      </div>

    </footer>
  );
}
