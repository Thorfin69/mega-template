import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, PhoneCall, Lock, Star } from "lucide-react";

const signals = [
  {
    Icon: ShieldCheck,
    title: "Licensed CPAs & Enrolled Agents",
    sub: "IRS-authorized professionals on every case",
  },
  {
    Icon: PhoneCall,
    title: "Free Consultation",
    sub: "No obligation. No pressure. Just answers.",
  },
  {
    Icon: Lock,
    title: "Confidential & Secure",
    sub: "Your information is never shared or sold",
  },
  {
    Icon: Star,
    title: "4.8 Stars on Google & BBB",
    sub: "2,201 verified client reviews",
  },
];

export function STTrustBar() {
  return (
    <section className="w-full bg-white border-t border-black/10">
      <div className="max-w-[1440px] mx-auto px-[130px] max-lg:px-[24px] py-[56px]">
        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-[32px]"
        >
          {signals.map(({ Icon, title, sub }, i) => (
            <motion.div
              key={i}
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } } }}
              className={`flex items-start gap-[14px] ${i > 0 ? "lg:border-l lg:border-black/10 lg:pl-[32px]" : ""}`}
            >
              <div className="w-[36px] h-[36px] rounded-[10px] bg-[#00A4A4]/8 flex items-center justify-center shrink-0 mt-[2px]">
                <Icon size={16} className="text-[#00A4A4]" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-['Geist:Regular',sans-serif] text-[14px] text-[#0b0b0b] tracking-[-0.42px] leading-[20px]">{title}</p>
                <p className="font-['Geist:Light',sans-serif] text-[12px] text-[#6b7280] tracking-[-0.36px] mt-[3px]">{sub}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
