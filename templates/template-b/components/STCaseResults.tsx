import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";

const cases = [
  {
    client: "Small Business Owner · Los Angeles, CA",
    headline: "Owed $124,000 in back taxes after a failed business. IRS threatening to seize equipment.",
    grid: [
      { label: "CHALLENGE", body: "Owed $124,000 in back taxes after a failed business. IRS threatening to seize equipment.", large: false },
      { label: "SOLUTION", body: "Qualified for OIC. Filed complete application with supporting financials and hardship documentation.", large: false },
      { label: "OUTCOME", body: "Settled for $8,400 — a 93% reduction.", large: false },
      { label: "TIMELINE", body: "7 months", large: true },
    ],
    checklist: ["Full OIC application prepared", "IRS negotiation handled", "Business assets protected", "Lien released on settlement"],
    resultAmount: "$8,400",
    resultLabel: "Saved 93%",
    photo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  },
  {
    client: "Freelance Contractor · Austin, TX",
    headline: "CP504 levy notice for $62,000 in unpaid self-employment taxes. Bank account at risk.",
    grid: [
      { label: "CHALLENGE", body: "Received CP504 levy notice for $62,000 in unpaid self-employment taxes. Bank account at risk.", large: false },
      { label: "SOLUTION", body: "Negotiated an installment agreement while simultaneously filing three years of unfiled returns.", large: false },
      { label: "OUTCOME", body: "Penalties fully waived. Restructured into $890/month with no levy action.", large: false },
      { label: "TIMELINE", body: "45 days", large: true },
    ],
    checklist: ["Levy release filed immediately", "3 years of returns prepared", "All penalties waived", "Affordable payment plan secured"],
    resultAmount: "$890/mo",
    resultLabel: "Penalties Waived",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
  },
  {
    client: "Retired Teacher · Miami, FL",
    headline: "$38,000 IRS debt on fixed income with 25% of Social Security being garnished.",
    grid: [
      { label: "CHALLENGE", body: "$38,000 IRS debt on a fixed retirement income. 25% of Social Security was being garnished monthly.", large: false },
      { label: "SOLUTION", body: "Filed Currently Not Collectible status with full hardship documentation. Garnishment released within days.", large: false },
      { label: "OUTCOME", body: "All IRS collection paused indefinitely. Zero monthly payments required.", large: false },
      { label: "TIMELINE", body: "12 days", large: true },
    ],
    checklist: ["Garnishment released in days", "CNC status approved", "Zero monthly payments", "IRS collection fully paused"],
    resultAmount: "$0/mo",
    resultLabel: "Collection Paused",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
  },
];

export function STCaseResults() {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(1);

  function go(next: number) {
    setDir(next > active ? 1 : -1);
    setActive(next);
  }

  const c = cases[active];

  return (
    <section className="w-full bg-[#F7F9FF] py-[120px] border-t border-black/10">
      <div className="max-w-[1440px] mx-auto px-[130px] max-lg:px-[24px]">

        {/* Header row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-end justify-between mb-[48px] flex-wrap gap-[24px]"
        >
          <div>
            <p className="font-['Geist:Regular',sans-serif] text-[12px] text-[#6b7280] uppercase tracking-[2px] mb-[16px]">REAL PLANS, REAL OUTCOMES</p>
            <h2 className="font-['Geist:Light',sans-serif] text-[50px] max-lg:text-[34px] text-[#0b0b0b] leading-[55px] tracking-[-1.5px]">Case Results</h2>
          </div>
          <div className="flex items-center gap-[12px]">
            <button onClick={() => go(active === 0 ? cases.length - 1 : active - 1)} className="w-[44px] h-[44px] rounded-full border border-black/15 flex items-center justify-center hover:bg-black/5 transition-colors">
              <ChevronLeft size={18} className="text-[#0b0b0b]" />
            </button>
            <span className="font-['Geist:Regular',sans-serif] text-[13px] text-[#6b7280] min-w-[40px] text-center">{active + 1} / {cases.length}</span>
            <button onClick={() => go(active === cases.length - 1 ? 0 : active + 1)} className="w-[44px] h-[44px] rounded-full border border-black/15 flex items-center justify-center hover:bg-black/5 transition-colors">
              <ChevronRight size={18} className="text-[#0b0b0b]" />
            </button>
          </div>
        </motion.div>

        {/* Card */}
        <div className="overflow-hidden rounded-[20px]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active}
              initial={{ opacity: 0, x: dir * 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -50 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="grid grid-cols-1 lg:grid-cols-2 rounded-[20px] overflow-hidden"
              style={{ minHeight: "560px" }}
            >
              {/* LEFT — teal panel */}
              <div className="bg-[#00A4A4] p-[48px] max-lg:p-[32px] flex flex-col justify-between">
                <div>
                  {/* Client */}
                  <p className="font-['Geist:Regular',sans-serif] text-[11px] text-white/60 uppercase tracking-[2px] mb-[16px]">{c.client}</p>

                  {/* Headline */}
                  <h3 className="font-['Geist:Light',sans-serif] text-[28px] max-lg:text-[22px] text-white leading-[36px] max-lg:leading-[30px] tracking-[-0.84px] mb-[32px]">
                    {c.headline}
                  </h3>

                  {/* 2×2 grid */}
                  <div className="grid grid-cols-2 gap-[10px] mb-[32px]">
                    {c.grid.map((cell, i) => (
                      <div key={i} className="bg-white/15 rounded-[12px] p-[20px]">
                        <p className="font-['Geist:Regular',sans-serif] text-[10px] text-white/55 uppercase tracking-[2px] mb-[10px]">{cell.label}</p>
                        <p className={`font-['Geist:Light',sans-serif] text-white leading-[1.2] ${cell.large ? "text-[40px] tracking-[-1.2px]" : "text-[14px] leading-[22px] tracking-[-0.42px]"}`}>
                          {cell.body}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Checklist */}
                  <div className="flex flex-col gap-[10px] mb-[36px]">
                    {c.checklist.map((item, i) => (
                      <div key={i} className="flex items-center gap-[10px]">
                        <Check size={13} className="text-white/70 shrink-0" strokeWidth={2} />
                        <span className="font-['Geist:Light',sans-serif] text-[14px] text-white/80 tracking-[-0.42px]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <a href="/contact" className="inline-block bg-white text-[#00A4A4] font-['Geist:Regular',sans-serif] text-[13px] uppercase tracking-[-0.39px] px-[24px] py-[12px] rounded-[50px] hover:bg-white/90 transition-all active:scale-95 w-fit">
                  Get Similar Results
                </a>
              </div>

              {/* RIGHT — photo + floating badge */}
              <div className="relative min-h-[420px]">
                <img
                  src={c.photo}
                  alt={c.client}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10" />

                {/* Floating result badge */}
                <div className="absolute bottom-[32px] right-[32px] bg-white rounded-[16px] px-[28px] py-[20px] shadow-2xl border border-black/8">
                  <p className="font-['Geist:Light',sans-serif] text-[40px] text-[#00A4A4] tracking-[-1.2px] leading-[1]">{c.resultAmount}</p>
                  <p className="font-['Geist:Regular',sans-serif] text-[11px] text-[#6b7280] uppercase tracking-[1.5px] mt-[6px]">{c.resultLabel}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-[8px] mt-[24px]">
          {cases.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={`rounded-full transition-all ${i === active ? "w-[24px] h-[6px] bg-[#00A4A4]" : "w-[6px] h-[6px] bg-black/20 hover:bg-black/40"}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
