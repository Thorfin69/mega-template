import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Star } from "lucide-react";

const stats = [
  { value: "$2.3B+", label: "Tax Debt Resolved", sub: "Across all cases since 2010" },
  { value: "2,400+", label: "Cases Closed", sub: "Individuals & businesses" },
  { value: "98%",    label: "Client Satisfaction", sub: "Post-resolution surveys" },
];

export function STStats() {
  return (
    <section className="w-full bg-white py-[100px]">
      <div className="max-w-[1440px] mx-auto px-[130px] max-lg:px-[24px]">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative rounded-[20px] overflow-hidden"
        >
          {/* Background image */}
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1400&q=85"
            alt="Professional consultation"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Green overlay */}
          <div className="absolute inset-0 bg-[#008585]/90" />
          {/* Subtle darker gradient at edges for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00A4A4]/20 via-transparent to-[#006666]/30" />

          {/* Content */}
          <div className="relative z-10 px-[60px] max-lg:px-[32px] py-[52px]">

            {/* Top row: eyebrow + trustpilot */}
            <div className="flex items-center justify-between mb-[40px] flex-wrap gap-[16px]">
              <p className="font-['Geist:Regular',sans-serif] text-[11px] text-white/40 uppercase tracking-[2.5px]">
                Track Record
              </p>

              {/* Trustpilot badge */}
              <div className="flex items-center gap-[12px] bg-white/15 border border-white/25 rounded-[10px] px-[16px] py-[10px]">
                <span className="font-['Geist:Regular',sans-serif] text-[13px] text-white font-semibold tracking-[-0.3px]">Trustpilot</span>
                <div className="w-[1px] h-[20px] bg-white/25" />
                <div className="flex items-center gap-[2px]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="text-[#00d68f] fill-[#00d68f]" />
                  ))}
                </div>
                <div>
                  <p className="font-['Geist:Regular',sans-serif] text-[13px] text-white leading-[1]">4.8</p>
                  <p className="font-['Geist:Light',sans-serif] text-[10px] text-white/60 leading-[1] mt-[2px]">2,201 reviews</p>
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div className="flex items-start gap-0 flex-wrap max-lg:gap-[32px]">
              {stats.map((s, i) => (
                <div key={i} className={`flex-1 min-w-[160px] ${i > 0 ? "lg:pl-[48px] lg:border-l lg:border-white/25" : ""}`}>
                  <p className="font-['Geist:Light',sans-serif] text-[52px] max-lg:text-[40px] text-white tracking-[-1.56px] leading-[1] mb-[8px]">
                    {s.value}
                  </p>
                  <p className="font-['Geist:Regular',sans-serif] text-[14px] text-white/70 uppercase tracking-[0.5px] mb-[4px]">
                    {s.label}
                  </p>
                  <p className="font-['Geist:Light',sans-serif] text-[12px] text-white/40 tracking-[-0.36px]">
                    {s.sub}
                  </p>
                </div>
              ))}

              {/* CTA — right-aligned, vertically centered */}
              <div className="flex items-center lg:ml-[48px] lg:pl-[48px] lg:border-l lg:border-white/25 self-center max-lg:w-full">
                <a
                  href="/contact"
                  className="group flex items-center gap-[10px] bg-white px-[24px] py-[13px] rounded-[50px] font-['Geist:Regular',sans-serif] text-[13px] text-[#0b0b0b] uppercase tracking-[-0.39px] hover:bg-white/90 transition-all active:scale-95 whitespace-nowrap"
                >
                  Start Free Consultation
                  <ArrowRight size={13} className="group-hover:translate-x-[3px] transition-transform duration-300" />
                </a>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
