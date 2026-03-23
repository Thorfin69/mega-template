import { motion } from 'motion/react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

interface Differentiator {
  icon: string;
  title: string;
  body: string;
}

interface WhyUsProps {
  overline: string;
  heading: string;
  subheading: string;
  items: Differentiator[];
}

export default function WhyUs({ overline, heading, subheading, items }: WhyUsProps) {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p variants={fadeUp} className="text-[#027DFC] text-sm font-semibold uppercase tracking-widest mb-3">
            {overline}
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-[2rem] lg:text-[2.5rem] font-bold text-[#27313D] leading-tight mb-4">
            {heading}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#6B7280] text-base max-w-[560px] mx-auto leading-relaxed">
            {subheading}
          </motion.p>
        </motion.div>

        {/* 2x2 grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {items.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="flex gap-5 p-7 rounded-2xl bg-[#F8FAFC] border border-[#E5E7EB] hover:border-[#027DFC]/30 hover:shadow-[0_4px_20px_rgba(2,125,252,0.08)] transition-all duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white border border-[#E5E7EB] shadow-sm flex items-center justify-center">
                <img src={item.icon} alt="" className="w-6 h-6 object-contain" />
              </div>
              <div>
                <h3 className="text-[#27313D] font-bold text-base mb-2">{item.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{item.body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
