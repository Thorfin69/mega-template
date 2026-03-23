import { motion } from 'motion/react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.2 } },
};

interface Stat {
  value: string;
  description: string;
}

interface StatsProps {
  stats: Stat[];
}

export default function Stats({ stats }: StatsProps) {
  return (
    <section className="bg-[#027DFC] py-16">
      <div className="max-w-[1200px] mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/20"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.value}
              variants={fadeUp}
              className="text-center py-10 px-8"
            >
              <div className="text-[3.5rem] lg:text-[4.5rem] font-bold text-white leading-none mb-3">
                {stat.value}
              </div>
              <p className="text-white/80 text-base font-medium max-w-[280px] mx-auto leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
