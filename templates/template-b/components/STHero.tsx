import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, Star, ArrowRight } from "lucide-react";

const clientPhotos = [
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
  "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=200&q=80",
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80",
];

export function STHero() {
  return (
    <section className="w-full relative overflow-hidden" style={{ minHeight: "700px" }}>

      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1800&q=85"
        alt="Tax professional consultation"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0b0b0b]/78" />
      {/* Subtle green tint bottom-right */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#00A4A4]/15" />

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-[130px] max-lg:px-[24px] pt-[160px] pb-[120px] flex items-center justify-between gap-[60px] max-lg:flex-col">

        {/* LEFT */}
        <div className="max-w-[600px]">

          {/* Client avatars + count */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-[14px] mb-[36px]"
          >
            <div className="flex items-center">
              {clientPhotos.map((src, i) => (
                <div
                  key={i}
                  className="w-[38px] h-[38px] rounded-full overflow-hidden border-[2px] border-white/30 bg-white"
                  style={{ marginLeft: i > 0 ? "-10px" : "0", zIndex: clientPhotos.length - i }}
                >
                  <img src={src} alt="client" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-[8px]">
              <div className="flex gap-[2px]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} className="text-[#f59e0b] fill-[#f59e0b]" />
                ))}
              </div>
              <span className="font-['Geist:Light',sans-serif] text-[14px] text-white/70 tracking-[-0.42px]">
                <span className="text-white font-['Geist:Regular',sans-serif]">2,400+</span> Satisfied Clients
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="font-['Geist:Light',sans-serif] text-[72px] max-lg:text-[44px] leading-[78px] max-lg:leading-[50px] tracking-[-2.16px] max-lg:tracking-[-1.32px] text-white mb-[24px]"
          >
            Get the IRS<br />Off Your Back —<br /><span className="text-[#00A4A4]">For Good.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="font-['Geist:Light',sans-serif] text-[18px] text-white/60 leading-[28px] tracking-[-0.54px] mb-[44px] max-w-[480px]"
          >
            Licensed tax professionals who negotiate directly with the IRS — reducing or eliminating what you owe.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="flex items-center gap-[16px] flex-wrap"
          >
            <a
              href="/contact"
              className="bg-[#00A4A4] px-[28px] py-[14px] rounded-[50px] font-['Geist:Regular',sans-serif] text-[14px] text-white uppercase tracking-[-0.42px] hover:bg-[#008585] transition-all active:scale-95 flex items-center gap-[8px] group"
            >
              Get Free Consultation
              <ArrowRight size={14} className="group-hover:translate-x-[3px] transition-transform duration-300" />
            </a>
            <button className="px-[28px] py-[14px] rounded-[50px] font-['Geist:Regular',sans-serif] text-[14px] text-white/70 uppercase tracking-[-0.42px] border border-white/20 hover:border-white/50 hover:text-white transition-all">
              See How It Works
            </button>
          </motion.div>

        </div>

        {/* RIGHT — floating stat badges */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.35 }}
          className="hidden lg:flex flex-col gap-[16px] shrink-0"
        >
          {/* IRS Enrolled badge */}
          <div className="flex items-center gap-[10px] bg-white/8 backdrop-blur-md border border-white/15 rounded-[12px] px-[20px] py-[14px]">
            <ShieldCheck size={16} className="text-[#00A4A4]" />
            <span className="font-['Geist:Regular',sans-serif] text-[13px] text-white/80 uppercase tracking-[0.5px]">IRS-Enrolled Agents · Nationwide</span>
          </div>

          {/* 98% satisfaction */}
          <div className="bg-[#00A4A4] rounded-[16px] px-[36px] py-[28px] text-center">
            <p className="font-['Geist:Light',sans-serif] text-[56px] text-white tracking-[-1.68px] leading-[1]">98%</p>
            <p className="font-['Geist:Light',sans-serif] text-[13px] text-white/80 tracking-[-0.39px] mt-[8px] uppercase">Client Satisfaction</p>
          </div>

          {/* Saved $74K review */}
          <div className="bg-white rounded-[14px] p-[20px] shadow-2xl border border-black/8">
            <div className="flex items-center gap-[4px] mb-[8px]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className="text-[#f59e0b] fill-[#f59e0b]" />
              ))}
            </div>
            <p className="font-['Geist:Regular',sans-serif] text-[13px] text-[#0b0b0b] tracking-[-0.39px] mb-[4px]">"Saved $74K on my IRS debt"</p>
            <p className="font-['Geist:Light',sans-serif] text-[12px] text-[#6b7280] tracking-[-0.36px]">Maria S. · Los Angeles, CA</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
