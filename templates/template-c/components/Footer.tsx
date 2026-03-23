import { Linkedin, Instagram, Facebook, Youtube } from "lucide-react";
import { Link } from "react-router";

const NAV_COL_1 = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Process", href: "/process" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

const NAV_COL_2 = [
  { name: "Offer in Compromise", href: "/services" },
  { name: "Installment Agreement", href: "/services" },
  { name: "Penalty Abatement", href: "/services" },
  { name: "Wage Garnishment", href: "/services" },
  { name: "IRS Notices", href: "/services" },
];

const SOCIALS = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white overflow-hidden relative">

      {/* Teal decorative blob — low opacity */}
      <div
        className="absolute top-[-120px] right-[-180px] w-[600px] h-[600px] rounded-full pointer-events-none select-none"
        style={{
          background: "radial-gradient(circle, #00A4A4 0%, transparent 70%)",
          opacity: 0.05,
        }}
      />
      <div
        className="absolute bottom-[80px] left-[-150px] w-[400px] h-[400px] rounded-full pointer-events-none select-none"
        style={{
          background: "radial-gradient(circle, #00A4A4 0%, transparent 70%)",
          opacity: 0.04,
        }}
      />

      {/* Main grid */}
      <div className="max-w-[1330px] mx-auto px-[70px] relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1px_auto_1px_auto_1px_1fr] pt-[72px] pb-[64px]">

          {/* Col 1: Logo + tagline + socials */}
          <div className="flex flex-col justify-between pr-[48px] pb-[40px] lg:pb-0">
            <div>
              <Link to="/" className="inline-block mb-[32px]">
                <img
                  src="https://pub-af595d5658084c1db74f624e385553fe.r2.dev/IMG_5368.png"
                  alt="SympleTax"
                  className="h-[40px] w-auto object-contain brightness-0 invert"
                />
              </Link>
              <p
                className="font-['Inter'] text-white/60 leading-[1.7] max-w-[240px]"
                style={{ fontSize: "14px", letterSpacing: "-0.2px" }}
              >
                SympleTax is a licensed tax resolution firm dedicated to stopping IRS collections and restoring your financial freedom.
              </p>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-[10px] mt-[40px]">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-[40px] h-[40px] rounded-[8px] border border-white/10 flex items-center justify-center text-white/40 hover:border-[#00A4A4]/50 hover:text-[#00A4A4] transition-all duration-200"
                >
                  <Icon className="w-[16px] h-[16px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block bg-white/[0.07]" />

          {/* Col 2: Nav col 1 */}
          <div className="px-[48px] py-[4px]">
            <p
              className="font-['Outfit'] font-bold text-white mb-[24px]"
              style={{ fontSize: "13px", letterSpacing: "0.08em" }}
            >
              NAVIGATION
            </p>
            <ul className="flex flex-col gap-[16px]">
              {NAV_COL_1.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="font-['Inter'] font-normal text-white/60 hover:text-[#00A4A4] transition-colors duration-200"
                    style={{ fontSize: "14px" }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Divider */}
          <div className="hidden lg:block bg-white/[0.07]" />

          {/* Col 3: Nav col 2 */}
          <div className="px-[48px] py-[4px]">
            <p
              className="font-['Outfit'] font-bold text-white mb-[24px]"
              style={{ fontSize: "13px", letterSpacing: "0.08em" }}
            >
              SERVICES
            </p>
            <ul className="flex flex-col gap-[16px]">
              {NAV_COL_2.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="font-['Inter'] font-normal text-white/60 hover:text-[#00A4A4] transition-colors duration-200"
                    style={{ fontSize: "14px" }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Divider */}
          <div className="hidden lg:block bg-white/[0.07]" />

          {/* Col 4: Contact */}
          <div className="flex flex-col justify-between pl-[48px] pt-[4px] pb-[4px]">
            <div>
              <p
                className="font-['Outfit'] font-bold text-white mb-[24px]"
                style={{ fontSize: "13px", letterSpacing: "0.08em" }}
              >
                CONTACT
              </p>
              <p
                className="font-['Outfit'] font-bold text-white leading-[1.4] mb-[28px]"
                style={{ fontSize: "clamp(20px, 1.8vw, 28px)", letterSpacing: "-0.5px" }}
              >
                Irvine, California<br />
                United States
              </p>
              <a
                href="tel:+19492873015"
                className="block font-['Inter'] font-medium text-white/75 hover:text-[#00A4A4] transition-colors mb-[12px] border-b border-white/10 pb-[6px] w-fit"
                style={{ fontSize: "15px", letterSpacing: "-0.3px" }}
              >
                +1 (949) 287-3015
              </a>
              <a
                href="mailto:info@sympletax.com"
                className="block font-['Inter'] font-medium text-white/75 hover:text-[#00A4A4] transition-colors border-b border-white/10 pb-[6px] w-fit"
                style={{ fontSize: "15px", letterSpacing: "-0.3px" }}
              >
                info@sympletax.com
              </a>
            </div>
          </div>
        </div>

        {/* Large SYMPLETAX watermark */}
        <div className="border-t border-white/[0.06] -mx-[70px] overflow-hidden">
          <p
            className="font-['Outfit'] font-black text-white leading-none select-none whitespace-nowrap text-center"
            style={{
              fontSize: "clamp(80px, 13vw, 196px)",
              letterSpacing: "-4px",
              padding: "16px 0 8px",
              opacity: 0.04,
            }}
          >
            SYMPLETAX
          </p>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] py-[20px] flex flex-col md:flex-row items-center justify-between gap-[16px]">
          <p
            className="font-['Inter'] text-white/40"
            style={{ fontSize: "12px", letterSpacing: "-0.1px" }}
          >
            © {new Date().getFullYear()} SympleTax. All Rights Reserved.
          </p>
          <div className="flex items-center gap-[24px]">
            {["Privacy Policy", "Terms of Service", "Disclaimer"].map((label) => (
              <a
                key={label}
                href="#"
                className="font-['Inter'] text-white/40 hover:text-[#00A4A4] transition-colors"
                style={{ fontSize: "12px", letterSpacing: "-0.1px" }}
              >
                {label}
              </a>
            ))}
          </div>
          <p
            className="font-['Inter'] text-white/20 italic"
            style={{ fontSize: "11px" }}
          >
            SympleTax does not provide legal advice. Results may vary.
          </p>
        </div>
      </div>

    </footer>
  );
}
