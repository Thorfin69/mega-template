import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const problems = [
  { n:"01", title:"Tax Liens", desc:"Blocking your credit and property sales", img:"https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80" },
  { n:"02", title:"Wage Garnishment", desc:"IRS taking up to 70% of your paycheck", img:"https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&q=80" },
  { n:"03", title:"Bank Levies", desc:"Frozen accounts and seized funds", img:"https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80" },
  { n:"04", title:"Unfiled Returns", desc:"Years of missing returns creating compounding debt", img:"https://images.unsplash.com/photo-1586486855514-8c633cc6fd38?w=600&q=80" },
  { n:"05", title:"IRS Audit", desc:"Examination of your returns and records", img:"https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=600&q=80" },
  { n:"06", title:"Penalty & Interest", desc:"Charges that can more than double your balance", img:"https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80" },
];

export function STProblems() {
  return (
    <section className="w-full bg-[#F7F9FF] py-[120px] border-t border-black/10">
      <div className="max-w-[1440px] mx-auto px-[130px] max-lg:px-[24px]">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-end justify-between mb-[60px] flex-wrap gap-[24px]"
        >
          <div>
            <p className="font-['Geist:Regular',sans-serif] text-[12px] text-[#6b7280] uppercase tracking-[2px] mb-[16px]">TAX PROBLEMS</p>
            <h2 className="font-['Geist:Light',sans-serif] text-[50px] max-lg:text-[34px] text-[#0b0b0b] leading-[55px] tracking-[-1.5px]">
              Facing an IRS Problem?
            </h2>
          </div>
          <p className="font-['Geist:Light',sans-serif] text-[16px] text-[#6b7280] leading-[24px] tracking-[-0.48px] max-w-[380px]">
            We handle every type of IRS problem. From liens to levies, our team has seen it all — and resolved it.
          </p>
        </motion.div>

        {/* 3×2 Grid — dark image cards */}
        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px] rounded-[16px] overflow-hidden border border-black/10"
        >
          {problems.map((p, i) => (
            <motion.div
              key={i}
              variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } }}
              className="relative group cursor-pointer overflow-hidden"
              style={{ height: "360px" }}
            >
              {/* Image with zoom */}
              <img
                src={p.img}
                alt={p.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Base dark gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10 group-hover:from-black/90 group-hover:via-black/50 group-hover:to-black/20 transition-all duration-500" />

              {/* Green tint on hover */}
              <div className="absolute inset-0 bg-[#00A4A4]/0 group-hover:bg-[#00A4A4]/15 transition-all duration-500" />

              {/* Number top-left — fades slightly on hover */}
              <div className="absolute top-[24px] left-[24px]">
                <span className="font-['Geist:Light',sans-serif] text-[12px] text-white/30 group-hover:text-white/60 uppercase tracking-[2px] transition-colors duration-300">{p.n}</span>
              </div>

              {/* Arrow top-right — fills green bg on hover */}
              <div className="absolute top-[20px] right-[20px] w-[40px] h-[40px] rounded-full border border-white/20 bg-white/0 flex items-center justify-center text-white/40 group-hover:bg-[#00A4A4] group-hover:border-[#00A4A4] group-hover:text-white transition-all duration-300 group-hover:scale-110">
                <ArrowUpRight size={15} className="group-hover:-translate-y-[1px] group-hover:translate-x-[1px] transition-transform duration-300" />
              </div>

              {/* Content bottom — slides up on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-[28px] translate-y-0 group-hover:-translate-y-[10px] transition-transform duration-400 ease-out">
                <h3 className="font-['Geist:Regular',sans-serif] text-[22px] text-white tracking-[-0.66px] mb-[8px] group-hover:text-white transition-colors duration-300">{p.title}</h3>
                <p className="font-['Geist:Light',sans-serif] text-[14px] text-white/60 group-hover:text-white/80 leading-[21px] tracking-[-0.42px] transition-colors duration-300">{p.desc}</p>

                {/* "Get Help →" link — slides in from below on hover */}
                <div className="overflow-hidden h-[0px] group-hover:h-[32px] transition-all duration-400 ease-out">
                  <p className="font-['Geist:Regular',sans-serif] text-[12px] text-[#00A4A4] uppercase tracking-[1px] mt-[12px] flex items-center gap-[6px]">
                    Get Help <ArrowUpRight size={11} />
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
