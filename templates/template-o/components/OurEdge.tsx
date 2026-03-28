import { motion } from 'motion/react';

interface Feature {
  title: string;
  description: string;
}

interface OurEdgeProps {
  overline: string;
  heading: string;
  headingRotating: string[];
  body: string;
  features: Feature[];
  ctaLabel: string;
  ctaHref: string;
  aiPartnerLabel: string;
  aiPartnerNote: string;
  adCountLabel: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function OurEdge({
  overline,
  heading,
  headingRotating,
  body,
  features,
  ctaLabel,
  ctaHref,
  aiPartnerLabel,
  aiPartnerNote,
  adCountLabel,
}: OurEdgeProps) {
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
            <span className="text-[#3B5BDB]">{headingRotating[0]}</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-500 text-base max-w-2xl mx-auto">
            {body}
          </motion.p>
        </motion.div>

        {/* Feature cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeUp}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-7 hover:shadow-md hover:border-[#3B5BDB]/30 transition-all group"
            >
              <div className="w-10 h-10 bg-[#3B5BDB]/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5 text-[#3B5BDB]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-[#3B5BDB] transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* AI partner banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="bg-[#0a0a14] rounded-2xl p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-6"
        >
          <div className="text-center lg:text-left">
            <p className="text-white font-bold text-lg mb-1">{aiPartnerLabel}</p>
            <p className="text-gray-400 text-sm">{aiPartnerNote}</p>
          </div>
          <div className="flex flex-col items-center lg:items-end gap-1">
            <p className="text-4xl font-bold text-[#3B5BDB]">{adCountLabel}</p>
            <p className="text-gray-400 text-sm">Ads Content Created</p>
          </div>
          <a
            href={ctaHref}
            className="inline-flex items-center bg-[#3B5BDB] text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-[#2f4ac4] transition-colors whitespace-nowrap"
          >
            {ctaLabel}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
