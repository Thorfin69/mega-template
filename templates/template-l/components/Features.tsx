import { motion } from 'motion/react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

interface Feature {
  icon: string;
  title: string;
  body: string;
}

interface FeaturesProps {
  overline: string;
  heading: string;
  subheading: string;
  features: Feature[];
}

export default function Features({ overline, heading, subheading, features }: FeaturesProps) {
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

        {/* Feature grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeUp}
              className="group bg-white rounded-2xl p-7 border border-[#E5E7EB] hover:border-[#027DFC]/30 hover:shadow-[0_4px_24px_rgba(2,125,252,0.1)] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5 group-hover:bg-[#027DFC] transition-colors duration-300">
                <img src={feature.icon} alt="" className="w-6 h-6 object-contain group-hover:brightness-[100] group-hover:invert transition-all duration-300" />
              </div>
              <h3 className="text-base font-bold text-[#27313D] mb-2">{feature.title}</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">{feature.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
