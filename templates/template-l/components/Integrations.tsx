import { motion } from 'motion/react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

interface Integration {
  src: string;
  name: string;
}

interface IntegrationsProps {
  overline: string;
  heading: string;
  subheading: string;
  integrations: Integration[];
}

export default function Integrations({ overline, heading, subheading, integrations }: IntegrationsProps) {
  return (
    <section className="bg-[#27313D] py-20">
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
          <motion.h2 variants={fadeUp} className="text-[2rem] lg:text-[2.5rem] font-bold text-white leading-tight mb-4">
            {heading}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#9CA3AF] text-base max-w-[520px] mx-auto leading-relaxed">
            {subheading}
          </motion.p>
        </motion.div>

        {/* Logo grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {integrations.map((integration) => (
            <motion.div
              key={integration.name}
              variants={fadeUp}
              className="flex flex-col items-center justify-center gap-3 p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <img
                src={integration.src}
                alt={integration.name}
                className="h-8 w-auto object-contain filter brightness-90 hover:brightness-100 transition-all"
              />
              <span className="text-[#9CA3AF] text-xs font-medium text-center">{integration.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
