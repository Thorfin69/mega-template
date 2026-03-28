import { motion } from 'motion/react';

interface Stat {
  value: string;
  label: string;
}

interface StatsBarProps {
  stats: Stat[];
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function StatsBar({ stats }: StatsBarProps) {
  return (
    <section className="bg-[#1a1a2e] py-14 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 lg:px-12">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="text-center flex flex-col items-center gap-2"
            >
              <span className="text-4xl lg:text-5xl font-bold text-[#f7b433]">{stat.value}</span>
              <span className="text-gray-300 text-sm font-medium">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
