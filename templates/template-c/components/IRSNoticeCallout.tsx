import { motion } from "motion/react";
import { Link } from "react-router";
import { ImageWithFallback } from "./ImageWithFallback";
import { PaintStreak } from "./PaintStreak";

const NOTICE_TYPES = [
  { code: "CP2000", label: "Proposed Changes to Your Return" },
  { code: "CP90", label: "Final Notice — Intent to Levy" },
  { code: "CP503", label: "Second Notice — Balance Due" },
  { code: "LT11", label: "Final Notice Before Levy" },
  { code: "1058", label: "Last Chance Before Collection" },
  { code: "CP14", label: "First Balance Due Notice" },
];

function HandDrawnArrow() {
  return (
    <svg width="100" height="54" viewBox="0 0 100 54" fill="none">
      <path
        d="M6,45 C18,25 42,14 66,24 C78,29 88,37 92,46"
        stroke="#94a3b8"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M81,37 L92,46 L79,49"
        stroke="#94a3b8"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function IRSNoticeCallout() {
  return (
    <section className="py-[120px] relative overflow-hidden" style={{ backgroundColor: "#f5f1e8" }}>

      {/* Teal watercolor blob — decorative background shape */}
      <div
        className="absolute pointer-events-none"
        style={{
          right: "60px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "420px",
          height: "340px",
          backgroundColor: "#00A4A4",
          opacity: 0.10,
          borderRadius: "60% 40% 55% 45% / 45% 55% 45% 55%",
        }}
      />

      <div className="max-w-[1330px] mx-auto px-[70px] relative">
        <div className="flex items-center gap-[80px]">

          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-1 flex flex-col gap-[28px]"
          >
            {/* Pill badge — "tax help" style */}
            <div className="inline-flex items-center border-[1.5px] border-[#0f172a] rounded-[50px] px-[16px] py-[7px] w-fit">
              <span
                className="font-['Outfit'] font-bold text-[#0f172a]"
                style={{ fontSize: "13px", letterSpacing: "0.04em" }}
              >
                Tax Help
              </span>
            </div>

            {/* Big bold headline — FB ad style */}
            <h2
              className="font-['Outfit'] font-black text-[#0f172a] leading-[1.05]"
              style={{ fontSize: "clamp(36px, 4vw, 56px)", letterSpacing: "-2px" }}
            >
              You Might Owe The{" "}
              <PaintStreak color="pink">IRS</PaintStreak>{" "}
              Less Than<br />
              You Think — Or<br />
              Nothing At All.
            </h2>

            <p
              className="font-['Inter'] font-normal text-[#475569] leading-[1.65]"
              style={{ fontSize: "16px", letterSpacing: "-0.3px", maxWidth: "460px" }}
            >
              Don't panic — but don't wait. Whether it's an audit, levy notice, or balance due, our licensed experts decode it and respond within 24 hours.
            </p>

            {/* Notice types — clean list */}
            <div className="flex flex-col gap-0 border-t border-[#d8d3c8] mt-[8px]">
              {NOTICE_TYPES.map((notice, idx) => (
                <motion.div
                  key={notice.code}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06, duration: 0.35 }}
                >
                  <Link
                    to="/contact"
                    className="flex items-center gap-[20px] py-[14px] border-b border-[#d8d3c8] group hover:pl-[6px] transition-all duration-200"
                  >
                    <span
                      className="font-['Outfit'] font-bold text-[#00A4A4] shrink-0 w-[70px]"
                      style={{ fontSize: "13px" }}
                    >
                      {notice.code}
                    </span>
                    <span
                      className="font-['Inter'] font-medium text-[#0f172a] group-hover:text-[#00A4A4] transition-colors flex-1"
                      style={{ fontSize: "15px" }}
                    >
                      {notice.label}
                    </span>
                    <svg className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0" width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M3 13L13 3M13 3H5M13 3V11" stroke="#00A4A4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </motion.div>
              ))}
            </div>

          </motion.div>

          {/* Right: Photo + CTA card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="w-[400px] shrink-0 flex flex-col gap-[32px]"
          >
            {/* Person photo on teal bg shape */}
            <div className="relative rounded-[20px] overflow-hidden" style={{ height: "380px" }}>
              {/* Teal bg */}
              <div className="absolute inset-0" style={{ backgroundColor: "#00A4A4" }} />
              {/* Photo */}
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=700&fit=crop&q=80"
                alt=""
                className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80"
              />
              {/* Overlay gradient */}
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(0,164,164,0.6) 0%, transparent 50%)" }}
              />
            </div>

            {/* Arrow + CTA */}
            <div className="flex flex-col gap-[20px] bg-white rounded-[20px] p-[28px] border border-[#e8e4da]">
              <div className="flex items-center gap-[12px]">
                <div style={{ transform: "rotate(10deg)" }}>
                  <HandDrawnArrow />
                </div>
                <p
                  className="font-['Outfit'] font-bold text-[#0f172a] leading-[1.3]"
                  style={{ fontSize: "18px" }}
                >
                  We'll decode your notice in 24 hours — free.
                </p>
              </div>
              <Link
                to="/contact"
                className="bg-[#00A4A4] hover:bg-[#007a7a] text-white font-['Outfit'] font-bold rounded-full text-center transition-all duration-200 shadow-[0_6px_20px_rgba(0,164,164,0.3)]"
                style={{ fontSize: "15px", padding: "14px 24px" }}
              >
                Analyze My Notice
              </Link>
              <div className="flex items-center gap-[8px]">
                <div className="w-2 h-2 rounded-full bg-green-400" />
                <span className="font-['Inter'] text-[13px] text-[#475569]">Free 24h review — no obligation</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
