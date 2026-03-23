import { motion } from 'motion/react';

interface Stat {
  value: string;
  unit?: string;
  description: string;
}

interface StatsBarProps {
  stats: Stat[];
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function StatsBar({ stats }: StatsBarProps) {
  return (
    <section className="bg-white py-16">
      <div className="max-w-[1230px] mx-auto px-4">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="flex flex-col items-center text-center gap-2 px-6 py-8 rounded-[10px] bg-[#f8f8ff]"
            >
              <div className="text-[#4da7aa] font-bold" style={{ fontSize: '2.5rem', lineHeight: 1 }}>
                {stat.value}
                {stat.unit && (
                  <span className="text-[#27272e] ml-2">{stat.unit}</span>
                )}
              </div>
              <p className="text-[#7e7e7e] text-[0.9375rem]">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
