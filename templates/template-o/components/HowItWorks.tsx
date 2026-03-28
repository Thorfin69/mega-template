import { motion } from 'motion/react';

interface Step {
  number: string;
  title: string;
  body: string;
}

interface HowItWorksProps {
  overline: string;
  heading: string;
  body: string;
  steps: Step[];
  ctaLabel: string;
  ctaHref: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function HowItWorks({
  overline,
  heading,
  body,
  steps,
  ctaLabel,
  ctaHref,
}: HowItWorksProps) {
  return (
    <section className="bg-[#0a0a14] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 lg:px-10">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block bg-[#3B5BDB]/20 text-[#7c94f5] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase"
          >
            {overline}
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-3xl lg:text-4xl font-bold text-white leading-snug mb-4"
          >
            {heading}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-400 text-base leading-relaxed">
            {body}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-6">
            <a
              href={ctaHref}
              className="inline-flex items-center gap-2 bg-[#3B5BDB] text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-[#2f4ac4] transition-colors"
            >
              {ctaLabel}
              <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="currentColor">
                <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
              </svg>
            </a>
          </motion.div>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              variants={fadeUp}
              className="relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#3B5BDB]/50 hover:bg-white/8 transition-all"
            >
              {/* Connector line (desktop only) */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-[#3B5BDB]/30 z-10" />
              )}
              <div className="w-12 h-12 bg-[#3B5BDB] rounded-xl flex items-center justify-center text-white font-bold text-lg mb-6">
                {step.number}
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
