import { motion } from 'motion/react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

interface ValueProp {
  icon: string;
  title: string;
  body: string;
}

interface ValuePropsProps {
  overline: string;
  heading: string;
  subheading: string;
  items: ValueProp[];
}

export default function ValueProps({ overline, heading, subheading, items }: ValuePropsProps) {
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
          <motion.p variants={fadeUp} className="text-[#6B7280] text-base max-w-[520px] mx-auto leading-relaxed">
            {subheading}
          </motion.p>
        </motion.div>

        {/* 4x2 grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {items.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="bg-white rounded-2xl p-6 border border-[#E5E7EB] hover:border-[#027DFC]/30 hover:shadow-[0_4px_20px_rgba(2,125,252,0.08)] transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                <img src={item.icon} alt="" className="w-5 h-5 object-contain" />
              </div>
              <h3 className="text-[#27313D] font-bold text-sm mb-2">{item.title}</h3>
              <p className="text-[#6B7280] text-xs leading-relaxed">{item.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
