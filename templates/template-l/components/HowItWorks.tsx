import { motion } from 'motion/react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

interface Step {
  number: string;
  icon: string;
  title: string;
  body: string;
}

interface HowItWorksProps {
  overline: string;
  heading: string;
  subheading: string;
  steps: Step[];
}

export default function HowItWorks({ overline, heading, subheading, steps }: HowItWorksProps) {
  return (
    <section className="bg-[#F8FAFC] py-20">
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

        {/* Steps */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-[1px] bg-gradient-to-r from-[#027DFC]/30 via-[#027DFC]/60 to-[#027DFC]/30" />

          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={fadeUp}
              className="relative bg-white rounded-2xl p-8 shadow-sm border border-[#E5E7EB] text-center"
            >
              {/* Number badge */}
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#027DFC] text-white text-sm font-bold mb-5">
                {step.number}
              </div>
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <img src={step.icon} alt="" className="w-12 h-12 object-contain" />
              </div>
              <h3 className="text-lg font-bold text-[#27313D] mb-3">{step.title}</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">{step.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
