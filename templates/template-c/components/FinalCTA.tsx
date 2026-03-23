import { motion } from "motion/react";
import { Link } from "react-router";
import { Lock, ClipboardCheck, BadgeCheck, MessageCircle } from "lucide-react";
import { PaintStreak } from "./PaintStreak";
import { ImageWithFallback } from "./ImageWithFallback";

const TRUST_ITEMS = [
  { Icon: Lock,           text: "256-Bit Encryption" },
  { Icon: ClipboardCheck, text: "100% Confidential" },
  { Icon: BadgeCheck,     text: "Licensed CPAs & Tax Attorneys" },
  { Icon: MessageCircle,  text: "Free Consultation — No Upfront Fees" },
];

export function FinalCTA() {
  return (
    <section className="overflow-hidden" style={{ backgroundColor: "#f5f1e8" }}>

      {/* Main CTA — photo left, content right */}
      <div className="flex items-stretch" style={{ minHeight: "420px" }}>

        {/* LEFT: Family photo — no overlay, natural bleed */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative shrink-0 overflow-hidden"
          style={{ width: "45%" }}
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1000&h=700&fit=crop&crop=center&q=85"
            alt="Happy family"
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle right fade to blend into cream bg */}
          <div
            className="absolute inset-y-0 right-0 pointer-events-none"
            style={{
              width: "140px",
              background: "linear-gradient(to right, transparent 0%, #f5f1e8 100%)",
            }}
          />
        </motion.div>

        {/* RIGHT: Content */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex-1 flex flex-col justify-center relative"
          style={{ padding: "80px 80px 80px 60px" }}
        >
          {/* Teal blob — decorative top-right */}
          <div
            className="absolute top-[-40px] right-[-20px] rounded-full pointer-events-none"
            style={{ width: "260px", height: "260px", backgroundColor: "#00A4A4", opacity: 0.10 }}
          />

          {/* Pill badge */}
          <div className="inline-flex items-center border-[1.5px] border-[#0f172a] rounded-[50px] px-[16px] py-[7px] w-fit mb-[28px]">
            <span
              className="font-['Outfit'] font-bold text-[#0f172a]"
              style={{ fontSize: "13px", letterSpacing: "0.04em" }}
            >
              Get Started
            </span>
          </div>

          {/* Headline — two lines like Polston layout */}
          <h2
            className="font-['Outfit'] font-black text-[#0f172a] leading-[1.08] mb-[12px]"
            style={{ fontSize: "clamp(36px, 4vw, 54px)", letterSpacing: "-2px" }}
          >
            Looking For Tax Resolution Services?
          </h2>

          {/* Teal handwritten-feel subline */}
          <p
            className="font-['Outfit'] font-black mb-[36px]"
            style={{
              fontSize: "clamp(28px, 3vw, 40px)",
              letterSpacing: "-1px",
              color: "#00A4A4",
              fontStyle: "italic",
            }}
          >
            <PaintStreak color="teal">SympleTax Can Help!</PaintStreak>
          </p>

          {/* CTA button — teal, uppercase with arrow */}
          <div className="flex flex-wrap items-center gap-[20px] mb-[20px]">
            <Link
              to="/contact"
              className="inline-flex items-center gap-[12px] bg-[#00A4A4] hover:bg-[#007a7a] hover:scale-[1.02] text-white font-['Outfit'] font-bold rounded-full uppercase transition-all duration-300 shadow-[0_8px_24px_rgba(0,164,164,0.3)] hover:shadow-[0_12px_32px_rgba(0,164,164,0.4)]"
              style={{ fontSize: "14px", letterSpacing: "0.08em", padding: "17px 32px" }}
            >
              Get Your Free Consultation
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 13L13 3M13 3H5M13 3V11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          <span className="font-['Inter'] text-[#94a3b8]" style={{ fontSize: "13px" }}>
            No credit card. No commitment. Just answers.
          </span>
        </motion.div>
      </div>

      {/* Bottom teal trust bar */}
      <div style={{ backgroundColor: "#00A4A4" }}>
        <div className="max-w-[1330px] mx-auto px-[70px] py-[28px]">
          <div className="flex flex-wrap items-center justify-between gap-[24px]">
            {TRUST_ITEMS.map(({ Icon, text }) => (
              <div key={text} className="flex items-center gap-[10px]">
                <Icon className="w-[16px] h-[16px] text-white flex-shrink-0" strokeWidth={1.8} />
                <span
                  className="font-['Inter'] font-medium text-white/90"
                  style={{ fontSize: "13px" }}
                >
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
