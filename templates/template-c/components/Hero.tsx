import { motion } from "motion/react";
import { Link } from "react-router";
import { ImageWithFallback } from "./ImageWithFallback";

function HandwrittenCurve() {
  return (
    <svg width="220" height="80" viewBox="0 0 220 80" fill="none">
      <text
        x="32"
        y="32"
        fontFamily="'Dancing Script', cursive"
        fontSize="26"
        fill="#00A4A4"
        fontWeight="600"
      >
        How can we help?
      </text>
      {/* Curved arrow below */}
      <path
        d="M38,42 C30,58 20,68 14,72"
        stroke="#00A4A4"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M8,66 L14,72 L20,65"
        stroke="#00A4A4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white" style={{ minHeight: "calc(100vh - 72px)" }}>
      <div className="flex h-full" style={{ minHeight: "calc(100vh - 72px)" }}>

        {/* LEFT: Exact Polston Tax family photo */}
        <motion.div
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
          className="relative shrink-0"
          style={{ width: "52%" }}
        >
          <ImageWithFallback
            src="https://polstontax.com/wp-content/uploads/2024/09/banner-img.png.webp"
            alt="Happy family"
            className="w-full h-full object-cover object-center"
            style={{ minHeight: "calc(100vh - 72px)" }}
          />
          {/* Subtle right-edge fade to blend into white */}
          <div
            className="absolute inset-y-0 right-0 pointer-events-none"
            style={{
              width: "160px",
              background: "linear-gradient(to right, transparent 0%, rgba(255,255,255,0.9) 100%)",
            }}
          />
        </motion.div>

        {/* RIGHT: Content */}
        <div
          className="flex-1 flex flex-col justify-center relative"
          style={{ backgroundColor: "#ffffff", paddingLeft: "72px", paddingRight: "80px" }}
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex items-center gap-[10px] mb-[28px]"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <rect x="1" y="4" width="16" height="2" rx="1" fill="#00A4A4" />
              <rect x="3" y="6" width="2" height="8" fill="#00A4A4" />
              <rect x="8" y="6" width="2" height="8" fill="#00A4A4" />
              <rect x="13" y="6" width="2" height="8" fill="#00A4A4" />
              <rect x="1" y="14" width="16" height="2" rx="1" fill="#00A4A4" />
            </svg>
            <span
              className="font-['Inter'] font-bold text-[#00A4A4] uppercase tracking-widest"
              style={{ fontSize: "12px", letterSpacing: "0.1em" }}
            >
              Tax Resolution &amp; Accounting Services
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="font-['Outfit'] font-black text-[#0f172a] leading-[1.04] mb-[36px]"
            style={{
              fontSize: "clamp(42px, 4.5vw, 66px)",
              letterSpacing: "-2.5px",
              maxWidth: "540px",
            }}
          >
            Get Your Financial<br />
            Life Back On Track
          </motion.h1>

          {/* CTA button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mb-[48px]"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-[12px] bg-[#00A4A4] hover:bg-[#007a7a] hover:scale-[1.02] text-white font-['Outfit'] font-bold rounded-[8px] uppercase transition-all duration-300 shadow-[0_8px_28px_rgba(0,164,164,0.28)] hover:shadow-[0_12px_36px_rgba(0,164,164,0.38)]"
              style={{ fontSize: "13px", letterSpacing: "0.09em", padding: "18px 36px" }}
            >
              Schedule Your Free Consultation
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>

          {/* Handwritten "How can we help?" */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <HandwrittenCurve />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
