import { motion } from 'motion/react';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface ProcessProps {
  overline: string;
  heading: string;
  headingAccent: string;
  body: string;
  steps: ProcessStep[];
  ctaLabel: string;
  ctaHref: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Process({
  overline,
  heading,
  headingAccent,
  body,
  steps,
  ctaLabel,
  ctaHref,
}: ProcessProps) {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 lg:px-10">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-14"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block text-[#3B5BDB] text-sm font-semibold tracking-widest uppercase mb-3"
          >
            {overline}
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-3xl lg:text-4xl font-bold text-gray-900 leading-snug mb-4"
          >
            {heading}{' '}
            <span className="text-[#3B5BDB]">{headingAccent}</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-500 text-base max-w-2xl mx-auto">
            {body}
          </motion.p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={fadeUp}
              className="relative bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:shadow-md hover:border-[#3B5BDB]/30 transition-all"
            >
              <div className="text-5xl font-black text-[#3B5BDB]/10 mb-4 leading-none select-none">
                {step.number}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="text-center">
          <motion.a
            href={ctaHref}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center bg-[#3B5BDB] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#2f4ac4] transition-colors shadow-lg shadow-blue-900/20"
          >
            {ctaLabel}
          </motion.a>
        </div>
      </div>
    </section>
  );
}
