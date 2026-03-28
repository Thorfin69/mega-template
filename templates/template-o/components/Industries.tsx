import { motion } from 'motion/react';

interface IndustriesProps {
  overline: string;
  heading: string;
  headingAccent: string;
  body: string;
  industries: string[];
  resultStats: { value: string; label: string }[];
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function Industries({
  overline,
  heading,
  headingAccent,
  body,
  industries,
  resultStats,
}: IndustriesProps) {
  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 lg:px-10">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
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

        {/* Industry tags */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {industries.map((industry) => (
            <motion.span
              key={industry}
              variants={fadeUp}
              className="bg-white border border-gray-200 text-gray-700 text-sm font-medium px-5 py-2 rounded-full hover:border-[#3B5BDB] hover:text-[#3B5BDB] transition-colors cursor-default"
            >
              {industry}
            </motion.span>
          ))}
        </motion.div>

        {/* Results stats */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {resultStats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="bg-white border border-gray-100 rounded-2xl p-6 text-center hover:shadow-md transition-shadow"
            >
              <p className="text-3xl font-bold text-[#3B5BDB] mb-1">{stat.value}</p>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
