import { motion } from "motion/react";
import { Link } from "react-router";
import { ImageWithFallback } from "./ImageWithFallback";
import { PaintStreak } from "./PaintStreak";

const CASE_RESULTS = [
  {
    firstName: "Marcus",
    fromAmount: "$87,400",
    toAmount: "$3,200",
    saved: "96%",
    situation:
      "Single taxpayer with several years of unfiled returns and active bank levies. Faced immediate financial hardship due to wage garnishment.",
    personImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    strokeColor: "purple" as const,
  },
  {
    firstName: "Diana",
    fromAmount: "$142,650",
    toAmount: "$12,400",
    saved: "91%",
    situation:
      "Small business owner facing payroll tax penalties and aggressive IRS collection. Threat of business closure resolved within 60 days.",
    personImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    strokeColor: "pink" as const,
  },
  {
    firstName: "Robert",
    fromAmount: "$52,000",
    toAmount: "$1,850",
    saved: "96%",
    situation:
      "Retiree with a tax lien from a decade-old unresolved assessment. Secured a full lien release and protected all retirement assets.",
    personImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    strokeColor: "teal" as const,
  },
];

function HandDrawnArrow() {
  return (
    <svg width="90" height="50" viewBox="0 0 90 50" fill="none">
      <path
        d="M8,40 C18,20 40,12 62,22 C72,27 80,34 84,40"
        stroke="#1e293b"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M74,32 L84,40 L72,44"
        stroke="#1e293b"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function CaseResultSpotlight() {
  const featured = CASE_RESULTS[0];
  const carouselItems = [...CASE_RESULTS, ...CASE_RESULTS, ...CASE_RESULTS];

  return (
    <section className="py-[120px] overflow-hidden" style={{ backgroundColor: "#f5f1e8" }}>
      <div className="max-w-[1330px] mx-auto px-[70px]">

        {/* ── Featured Case — FB ad "Ramon" style ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative bg-white rounded-[24px] overflow-hidden flex flex-col lg:flex-row gap-0 mb-[60px] shadow-[0_8px_48px_rgba(0,0,0,0.08)]"
        >
          {/* Left: Text */}
          <div className="flex-1 flex flex-col gap-[28px] p-[56px]">

            {/* Pill badge — "case story" style */}
            <div className="inline-flex items-center border-[1.5px] border-[#0f172a] rounded-[50px] px-[16px] py-[7px] w-fit">
              <span
                className="font-['Outfit'] font-bold text-[#0f172a]"
                style={{ fontSize: "13px", letterSpacing: "0.04em" }}
              >
                Case Story
              </span>
            </div>

            {/* Headline — large bold like FB ad */}
            <h2
              className="font-['Outfit'] font-black text-[#0f172a] leading-[1.05]"
              style={{ fontSize: "clamp(32px, 3.5vw, 50px)", letterSpacing: "-1.5px" }}
            >
              {featured.firstName} Worked With Us To<br />
              Reduce His Tax Debt From{" "}
              <span className="text-[#0f172a]">{featured.fromAmount}</span>{" "}
              To{" "}
              <PaintStreak color="purple">{featured.toAmount}!</PaintStreak>
            </h2>

            <p
              className="font-['Inter'] font-normal text-[#475569] leading-[1.65] max-w-[440px]"
              style={{ fontSize: "16px" }}
            >
              {featured.situation}
            </p>

            {/* CTA + arrow */}
            <div className="flex items-center gap-[24px] mt-[4px]">
              <Link
                to="/contact"
                className="border-[2px] border-[#00A4A4] text-[#00A4A4] font-['Outfit'] font-bold rounded-[10px] px-[28px] py-[13px] hover:bg-[#00A4A4] hover:text-white transition-all duration-200 uppercase tracking-wide"
                style={{ fontSize: "15px" }}
              >
                Learn How
              </Link>
              <div style={{ transform: "rotate(-10deg)" }}>
                <HandDrawnArrow />
              </div>
            </div>

            {/* Disclaimer */}
            <p className="font-['Inter'] text-[12px] text-[#94a3b8] italic mt-auto">
              * Client name changed for privacy. Results may vary based on individual circumstances.
            </p>
          </div>

          {/* Right: Person photo on teal shape */}
          <div
            className="relative lg:w-[380px] shrink-0 flex items-end justify-center overflow-hidden"
            style={{ minHeight: "460px" }}
          >
            {/* Teal rounded-square bg shape */}
            <div
              className="absolute bottom-0 right-0 left-[40px]"
              style={{
                height: "88%",
                backgroundColor: "#00A4A4",
                borderRadius: "20px 0 0 0",
              }}
            />
            {/* Person cutout photo */}
            <div className="relative z-10 w-full h-full flex items-end justify-center" style={{ paddingTop: "40px" }}>
              <ImageWithFallback
                src={featured.personImage}
                alt=""
                className="h-full object-cover object-top"
                style={{ maxHeight: "440px", width: "300px" }}
              />
            </div>
            {/* Saved badge floating */}
            <div
              className="absolute top-[24px] left-[24px] z-20 bg-[#0f172a] text-white rounded-full px-[16px] py-[8px]"
            >
              <span className="font-['Outfit'] font-bold" style={{ fontSize: "15px" }}>
                {featured.saved} Saved
              </span>
            </div>
          </div>
        </motion.div>

        {/* ── Section label ── */}
        <div className="flex items-center gap-[10px] mb-[32px]">
          <div className="bg-[#00A4A4] h-px w-[35px]" />
          <span
            className="font-['Outfit'] font-medium uppercase text-[#00A4A4]"
            style={{ fontSize: "14px", letterSpacing: "0.05em" }}
          >
            More Case Results
          </span>
        </div>

        {/* ── Scrolling carousel of smaller case cards ── */}
        <div className="relative -mx-[70px] overflow-hidden">
          <motion.div
            className="flex gap-[24px] w-max px-[70px]"
            animate={{
              x: [0, -(CASE_RESULTS.length * 380 + CASE_RESULTS.length * 24)],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {carouselItems.map((item, idx) => (
              <div
                key={idx}
                className="w-[360px] bg-white rounded-[20px] overflow-hidden shrink-0 border border-[#e8e4da] hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)] transition-all duration-300"
              >
                {/* Photo area */}
                <div className="relative h-[250px] overflow-hidden" style={{ backgroundColor: "#00A4A4" }}>
                  <ImageWithFallback
                    src={item.personImage}
                    alt=""
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute top-[14px] right-[14px] bg-[#0f172a] text-white rounded-full px-[12px] py-[5px]">
                    <span className="font-['Outfit'] font-bold" style={{ fontSize: "12px" }}>{item.saved} saved</span>
                  </div>
                </div>

                {/* Text */}
                <div className="p-[28px] flex flex-col gap-[16px]">
                  <p className="font-['Inter'] text-[14px] text-[#475569] leading-[1.6] line-clamp-2">
                    {item.situation}
                  </p>
                  <div className="flex items-end justify-between pt-[16px] border-t border-[#f0ece4]">
                    <div>
                      <div className="font-['Inter'] text-[11px] text-[#94a3b8] uppercase tracking-widest mb-[2px]">Settled For</div>
                      <div className="font-['Outfit'] font-black text-[#00A4A4] leading-none" style={{ fontSize: "28px" }}>
                        {item.toAmount}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-['Inter'] text-[11px] text-[#94a3b8] uppercase tracking-widest mb-[2px]">From</div>
                      <div className="font-['Outfit'] font-bold text-[#94a3b8] line-through" style={{ fontSize: "16px" }}>
                        {item.fromAmount}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-[100px] bg-gradient-to-r from-[#f5f1e8] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-[100px] bg-gradient-to-l from-[#f5f1e8] to-transparent z-10 pointer-events-none" />
        </div>

        <p className="text-center font-['Inter'] text-[12px] text-[#94a3b8] italic mt-[40px]">
          * Results may vary based on individual circumstances. Past performance does not guarantee future outcomes.
        </p>
      </div>
    </section>
  );
}
