import React from "react";
import { motion } from "motion/react";
import { Phone } from "lucide-react";

const steps = [
  {
    n: "01",
    title: "Free Confidential Consultation",
    desc: "We review your IRS transcript, back taxes, and full financial picture — for free. No obligation, no pressure. You'll leave with a clear picture of your options and exact next steps.",
    time: "Day 1",
    detail: "30-minute call",
  },
  {
    n: "02",
    title: "Custom Resolution Strategy",
    desc: "Your dedicated enrolled agent designs a resolution plan tailored to your specific situation — whether that's an OIC, installment plan, penalty abatement, or CNC status.",
    time: "Days 2–7",
    detail: "Written plan provided",
  },
  {
    n: "03",
    title: "We Negotiate. You Relax.",
    desc: "We handle every interaction with the IRS on your behalf. Power of attorney filed. All calls, letters, and negotiations managed entirely by our team. You get regular updates.",
    time: "Days 8–180",
    detail: "Avg. 90-day resolution",
  },
];

export function STHowItWorks() {
  return (
    <section className="w-full bg-[#F7F9FF] py-[120px] border-t border-black/10">
      <div className="max-w-[1440px] mx-auto px-[130px] max-lg:px-[24px]">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-end justify-between mb-[80px] flex-wrap gap-[24px]"
        >
          <div>
            <p className="font-['Geist:Regular',sans-serif] text-[12px] text-[#6b7280] uppercase tracking-[2px] mb-[16px]">THE PROCESS</p>
            <h2 className="font-['Geist:Light',sans-serif] text-[50px] max-lg:text-[34px] text-[#0b0b0b] leading-[55px] tracking-[-1.5px]">
              From First Call<br />to Full Resolution
            </h2>
          </div>
          <p className="font-['Geist:Light',sans-serif] text-[18px] text-[#6b7280] leading-[27px] tracking-[-0.54px] max-w-[380px]">
            Most clients see their first resolution option within 7 days. Average case: 90 days start to finish.
          </p>
        </motion.div>

        {/* Process rows — Pattern J (pricing table rows) */}
        <div className="border-t border-black/10">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
              className="flex items-start gap-[60px] max-lg:gap-[24px] py-[60px] border-b border-black/10 max-lg:flex-col"
            >
              {/* Number */}
              <div className="shrink-0 w-[80px]">
                <span className="font-['Geist:Light',sans-serif] text-[52px] text-[#0b0b0b]/10 tracking-[-1.56px] leading-[1]">{step.n}</span>
              </div>

              {/* Main content */}
              <div className="flex-1">
                <h3 className="font-['Geist:Regular',sans-serif] text-[28px] max-lg:text-[22px] text-[#0b0b0b] tracking-[-0.84px] mb-[14px]">
                  {step.title}
                </h3>
                <p className="font-['Geist:Light',sans-serif] text-[17px] text-[#6b7280] leading-[26px] tracking-[-0.51px] max-w-[560px]">
                  {step.desc}
                </p>
              </div>

              {/* Right — timeframe + detail */}
              <div className="shrink-0 flex flex-col items-end max-lg:items-start gap-[10px]">
                <span className="bg-[rgba(0,0,0,0.04)] rounded-[50px] px-[20px] py-[10px] font-['Geist:Regular',sans-serif] text-[13px] text-[#0b0b0b] uppercase tracking-[-0.39px] border border-black/10">
                  {step.time}
                </span>
                <span className="font-['Geist:Light',sans-serif] text-[13px] text-[#6b7280] tracking-[-0.39px]">{step.detail}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mt-[60px] flex items-center gap-[24px] flex-wrap"
        >
          <a href="/contact" className="bg-[#00A4A4] px-[21px] py-[11px] rounded-[50px] font-['Geist:Regular',sans-serif] text-[14px] text-white uppercase tracking-[-0.42px] hover:bg-[#008585] transition-all active:scale-95">
            Start Today — It's Free
          </a>
          <a href="tel:19492873015" className="flex items-center gap-[8px] font-['Geist:Regular',sans-serif] text-[14px] text-[#6b7280] uppercase tracking-[-0.42px] hover:text-[#0b0b0b] transition-colors">
            <Phone size={14} />
            +1 (949) 287-3015
          </a>
        </motion.div>

      </div>
    </section>
  );
}
