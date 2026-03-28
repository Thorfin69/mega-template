import { motion } from 'motion/react';

interface CalculatorFeature {
  title: string;
  body: string;
}

interface CalculatorProps {
  overline: string;
  heading: string;
  body: string;
  features: CalculatorFeature[];
  ctaLabel: string;
  ctaHref: string;
  macImage: string;
  macImageAlt: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Calculator({
  overline,
  heading,
  body,
  features,
  ctaLabel,
  ctaHref,
  macImage,
  macImageAlt,
}: CalculatorProps) {
  return (
    <section className="bg-white py-20 lg:py-28" id="calculator">
      <div className="max-w-7xl mx-auto px-4 lg:px-12 grid lg:grid-cols-2 gap-14 items-center">
        {/* Content */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            variants={fadeUp}
            className="text-[#f7b433] text-sm font-bold uppercase tracking-widest mb-3"
          >
            {overline}
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl lg:text-4xl font-bold text-[#1a1a2e] leading-snug mb-5"
          >
            {heading}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-500 leading-relaxed mb-8">
            {body}
          </motion.p>

          {/* Features list */}
          <motion.ul variants={stagger} className="space-y-5 mb-10">
            {features.map((feature) => (
              <motion.li key={feature.title} variants={fadeUp} className="flex gap-4">
                <div className="w-8 h-8 flex-shrink-0 rounded-full bg-[#f7b433]/15 flex items-center justify-center mt-0.5">
                  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                    <path
                      d="M3 8.5L6.5 12L13 5"
                      stroke="#f7b433"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-[#1a1a2e] text-sm">{feature.title}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{feature.body}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>

          <motion.a
            variants={fadeUp}
            href={ctaHref}
            className="inline-flex items-center gap-2 bg-[#1a1a2e] text-white font-semibold px-7 py-3.5 rounded-md hover:bg-[#f7b433] hover:text-[#1a1a2e] transition-colors"
          >
            {ctaLabel}
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 25" fill="none">
              <path
                d="M11.293 17.793L12.707 19.207L19.414 12.5L12.707 5.793L11.293 7.207L15.586 11.5H6V13.5H15.586L11.293 17.793Z"
                fill="currentColor"
              />
            </svg>
          </motion.a>
        </motion.div>

        {/* Mac image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex justify-center"
        >
          <img
            src={macImage}
            alt={macImageAlt}
            className="w-full max-w-lg rounded-xl object-contain shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
