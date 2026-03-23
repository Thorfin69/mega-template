import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Scale, CalendarDays, FileText, ShieldOff } from "lucide-react";

const services = [
  {
    num: "01",
    Icon: Scale,
    tag: "Most Popular",
    title: "Offer in Compromise",
    desc: "Settle your entire IRS debt for significantly less than the full amount owed. Most clients resolve for pennies on the dollar.",
    href: "#",
  },
  {
    num: "02",
    Icon: CalendarDays,
    tag: "Stop Collection Now",
    title: "Installment Agreement",
    desc: "Manageable monthly payments that stop IRS collection action immediately and fit your actual budget.",
    href: "#",
  },
  {
    num: "03",
    Icon: FileText,
    tag: "Save Thousands",
    title: "Penalty Abatement",
    desc: "Remove IRS penalties through First-Time Abatement or Reasonable Cause programs — often reducing your balance by 25–50%.",
    href: "#",
  },
  {
    num: "04",
    Icon: ShieldOff,
    tag: "Full Relief",
    title: "Currently Not Collectible",
    desc: "When you genuinely cannot pay, we document your hardship and get the IRS to pause all levies, garnishments, and notices indefinitely.",
    href: "#",
  },
];

export function STSolutions() {
  return (
    <section className="w-full bg-white py-[120px] border-t border-black/10">
      <div className="max-w-[1440px] mx-auto px-[130px] max-lg:px-[24px]">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-end justify-between mb-[60px] flex-wrap gap-[24px]"
        >
          <div>
            <p className="font-['Geist:Regular',sans-serif] text-[12px] text-[#6b7280] uppercase tracking-[2px] mb-[16px]">
              OUR SERVICES
            </p>
            <h2 className="font-['Geist:Light',sans-serif] text-[50px] max-lg:text-[34px] text-[#0b0b0b] leading-[55px] tracking-[-1.5px]">
              Proven Tax Relief<br />Strategies
            </h2>
          </div>
          <a
            href="#"
            className="group flex items-center gap-[8px] font-['Geist:Regular',sans-serif] text-[13px] text-[#6b7280] uppercase tracking-[0.5px] hover:text-[#0b0b0b] transition-colors"
          >
            View All Services
            <ArrowRight size={13} className="group-hover:translate-x-[3px] transition-transform duration-300" />
          </a>
        </motion.div>

        {/* 2×2 card grid */}
        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[12px]"
        >
          {services.map(({ num, Icon, tag, title, desc, href }, i) => (
            <motion.a
              key={i}
              href={href}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
              }}
              whileHover={{ y: -6, transition: { duration: 0.3, ease: "easeOut" } }}
              className="group relative bg-[#006666] rounded-[20px] p-[36px] max-lg:p-[28px] flex flex-col justify-between overflow-hidden cursor-pointer"
              style={{ height: "300px" }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00A4A4]/30 via-transparent to-[#004444]/60 pointer-events-none" />

              {/* Big decorative number — watermark */}
              <span
                className="absolute right-[-12px] bottom-[-20px] font-['Geist:Light',sans-serif] text-[180px] leading-none text-white/[0.04] select-none pointer-events-none"
                aria-hidden
              >
                {num}
              </span>

              {/* TOP ROW: small number + tag */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="font-['Geist:Light',sans-serif] text-[13px] text-white/35 tracking-[1px]">{num}</span>
                <span className="font-['Geist:Regular',sans-serif] text-[12px] text-white/60 uppercase tracking-[1.5px] border border-white/20 rounded-[50px] px-[14px] py-[6px] bg-white/5">
                  {tag}
                </span>
              </div>

              {/* MIDDLE: icon */}
              <div className="relative z-10 mt-[20px]">
                <div className="w-[44px] h-[44px] rounded-[12px] bg-white/10 border border-white/15 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                  <Icon size={18} className="text-white" strokeWidth={1.5} />
                </div>
              </div>

              {/* BOTTOM: title + desc + CTA */}
              <div className="relative z-10 mt-[16px]">
                <h3 className="font-['Geist:Light',sans-serif] text-[22px] max-lg:text-[20px] text-white tracking-[-0.66px] leading-[28px] mb-[8px]">
                  {title}
                </h3>
                <p className="font-['Geist:Light',sans-serif] text-[15px] text-white/55 leading-[23px] tracking-[-0.45px] mb-[20px]">
                  {desc}
                </p>
                <span className="inline-flex items-center gap-[8px] bg-white text-[#006666] font-['Geist:Regular',sans-serif] text-[12px] uppercase tracking-[0.5px] px-[20px] py-[10px] rounded-[50px] group-hover:bg-white/90 transition-all duration-300">
                  Learn More
                  <ArrowRight size={12} className="group-hover:translate-x-[3px] transition-transform duration-300" />
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
