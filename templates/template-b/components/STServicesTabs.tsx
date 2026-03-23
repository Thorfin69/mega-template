import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const cases = [
  {
    id: "oic",
    label: "Offer in Compromise",
    client: "Small Business Owner",
    location: "Los Angeles, CA",
    challenge: "Owed $124,000 in back taxes after a failed business. IRS threatening to seize equipment.",
    solution: "Qualified for OIC. Filed complete application with supporting financials and hardship documentation.",
    outcome: "Settled for $8,400 — a 93% reduction.",
    timeframe: "7 months",
    points: ["Full OIC application prepared", "IRS negotiation handled", "Business assets protected", "Lien released on settlement"],
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    result: "$8,400",
    saved: "93%",
  },
  {
    id: "garnishment",
    label: "Wage Garnishment",
    client: "W-2 Employee",
    location: "Chicago, IL",
    challenge: "IRS garnishing 65% of paycheck. Client couldn't cover rent or food expenses.",
    solution: "Filed emergency garnishment release. Negotiated installment agreement in parallel.",
    outcome: "Garnishment released in 48 hours. Monthly payment set at $320.",
    timeframe: "2 days",
    points: ["Emergency response initiated same day", "Garnishment fully released", "Affordable $320/month plan", "No further collection action"],
    img: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80",
    result: "Released",
    saved: "48 hrs",
  },
  {
    id: "lien",
    label: "Tax Lien Release",
    client: "Homeowner",
    location: "Miami, FL",
    challenge: "Federal tax lien on primary residence. Client needed to refinance mortgage.",
    solution: "Applied for Certificate of Discharge. Coordinated with lender and IRS to meet closing timeline.",
    outcome: "Lien discharged in 30 days. Refinance closed on schedule.",
    timeframe: "30 days",
    points: ["Certificate of Discharge filed", "Lender coordination handled", "Credit impact minimized", "Future compliance plan set"],
    img: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
    result: "Discharged",
    saved: "30 days",
  },
  {
    id: "penalty",
    label: "Penalty Abatement",
    client: "Self-Employed Contractor",
    location: "Dallas, TX",
    challenge: "5 years of penalties totaling $41,000 on top of a $67,500 base debt.",
    solution: "Qualified for First-Time Abatement plus reasonable cause on 3 years.",
    outcome: "Penalties reduced by $36,800. Total balance brought to $71,700.",
    timeframe: "45 days",
    points: ["First-time abatement approved", "Reasonable cause on 3 years", "$36,800 in penalties removed", "Installment plan set up"],
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    result: "-$36,800",
    saved: "54%",
  },
  {
    id: "cnc",
    label: "Currently Not Collectible",
    client: "Retired Couple",
    location: "Phoenix, AZ",
    challenge: "Fixed income retirees unable to pay $89,000 balance. IRS sending levy notices.",
    solution: "Documented financial hardship. Filed CNC status request with full income/expense analysis.",
    outcome: "IRS placed account in CNC status. All collection paused indefinitely.",
    timeframe: "3 weeks",
    points: ["Hardship documentation prepared", "All levies and notices stopped", "Collection paused indefinitely", "Annual review process managed"],
    img: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&q=80",
    result: "Paused",
    saved: "3 weeks",
  },
];

export function STServicesTabs() {
  const [active, setActive] = useState(0);
  const c = cases[active];

  return (
    <section className="w-full bg-[#F7F9FF] py-[120px] border-t border-black/10">
      <div className="max-w-[1440px] mx-auto px-[130px] max-lg:px-[24px]">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-[48px]"
        >
          <p className="font-['Geist:Regular',sans-serif] text-[12px] text-[#6b7280] uppercase tracking-[2px] mb-[16px]">CASE STUDIES</p>
          <h2 className="font-['Geist:Light',sans-serif] text-[50px] max-lg:text-[34px] text-[#0b0b0b] leading-[55px] tracking-[-1.5px] mb-[32px]">
            Real Clients. Real Outcomes.
          </h2>
          {/* Tab buttons */}
          <div className="flex items-center gap-[8px] flex-wrap">
            {cases.map((c, i) => (
              <button
                key={c.id}
                onClick={() => setActive(i)}
                className={`px-[18px] py-[9px] rounded-[50px] font-['Geist:Regular',sans-serif] text-[13px] uppercase tracking-[-0.39px] transition-all border ${
                  active === i
                    ? "bg-[#00A4A4] text-white border-[#00A4A4]"
                    : "bg-transparent text-[#0b0b0b]/60 border-black/20 hover:text-[#0b0b0b] hover:border-black/40"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content: LEFT green bg metadata, RIGHT photo — Nomad Pattern E */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-[16px] overflow-hidden border border-black/10"
          >
            {/* LEFT — green bg, metadata */}
            <div className="bg-[#00A4A4] p-[60px] max-lg:p-[36px] flex flex-col justify-between">
              <div>
                <p className="font-['Geist:Regular',sans-serif] text-[12px] text-white/60 uppercase tracking-[2px] mb-[8px]">
                  {c.client} · {c.location}
                </p>
                <p className="font-['Geist:Light',sans-serif] text-[32px] text-white leading-[38px] tracking-[-0.96px] mb-[40px]">
                  {c.challenge}
                </p>

                {/* 2×2 Challenge/Solution grid — Nomad Pattern E */}
                <div className="grid grid-cols-2 gap-[20px] mb-[40px]">
                  <div className="bg-white/10 rounded-[10px] p-[20px]">
                    <p className="font-['Geist:Regular',sans-serif] text-[11px] text-white/50 uppercase tracking-[1px] mb-[8px]">Challenge</p>
                    <p className="font-['Geist:Light',sans-serif] text-[14px] text-white leading-[20px] tracking-[-0.42px]">{c.challenge}</p>
                  </div>
                  <div className="bg-white/10 rounded-[10px] p-[20px]">
                    <p className="font-['Geist:Regular',sans-serif] text-[11px] text-white/50 uppercase tracking-[1px] mb-[8px]">Solution</p>
                    <p className="font-['Geist:Light',sans-serif] text-[14px] text-white leading-[20px] tracking-[-0.42px]">{c.solution}</p>
                  </div>
                  <div className="bg-white/10 rounded-[10px] p-[20px]">
                    <p className="font-['Geist:Regular',sans-serif] text-[11px] text-white/50 uppercase tracking-[1px] mb-[8px]">Outcome</p>
                    <p className="font-['Geist:Light',sans-serif] text-[14px] text-white leading-[20px] tracking-[-0.42px]">{c.outcome}</p>
                  </div>
                  <div className="bg-white/10 rounded-[10px] p-[20px]">
                    <p className="font-['Geist:Regular',sans-serif] text-[11px] text-white/50 uppercase tracking-[1px] mb-[8px]">Timeline</p>
                    <p className="font-['Geist:Light',sans-serif] text-[28px] text-white tracking-[-0.84px] leading-[1]">{c.timeframe}</p>
                  </div>
                </div>

              </div>

              <div className="mt-[40px]">
                <button className="bg-white px-[21px] py-[11px] rounded-[50px] font-['Geist:Regular',sans-serif] text-[14px] text-[#0b0b0b] uppercase tracking-[-0.42px] hover:bg-white/90 transition-all">
                  Get Similar Results
                </button>
              </div>
            </div>

            {/* RIGHT — project photo */}
            <div className="relative min-h-[500px]">
              <img
                src={c.img}
                alt={c.label}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/10 to-black/30" />
              {/* Result badge */}
              <div className="absolute bottom-[32px] right-[32px] bg-white rounded-[12px] p-[24px] shadow-xl">
                <p className="font-['Geist:Light',sans-serif] text-[42px] text-[#00A4A4] tracking-[-1.26px] leading-[1]">{c.result}</p>
                <p className="font-['Geist:Light',sans-serif] text-[13px] text-[#6b7280] uppercase tracking-[-0.39px] mt-[6px]">Saved {c.saved}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
