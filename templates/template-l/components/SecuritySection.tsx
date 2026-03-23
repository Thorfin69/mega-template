import { motion } from 'motion/react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

interface SecurityPoint {
  icon: string;
  title: string;
  body: string;
}

interface SecuritySectionProps {
  overline: string;
  heading: string;
  subheading: string;
  points: SecurityPoint[];
  image: string;
  imageAlt: string;
}

export default function SecuritySection({
  overline,
  heading,
  subheading,
  points,
  image,
  imageAlt,
}: SecuritySectionProps) {
  return (
    <section className="bg-[#27313D] py-20 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text side */}
          <motion.div
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
            <motion.p variants={fadeUp} className="text-[#9CA3AF] text-base leading-relaxed mb-10">
              {subheading}
            </motion.p>

            <motion.div className="flex flex-col gap-6" variants={stagger}>
              {points.map((point) => (
                <motion.div key={point.title} variants={fadeUp} className="flex gap-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#027DFC]/10 border border-[#027DFC]/20 flex items-center justify-center">
                    <img src={point.icon} alt="" className="w-5 h-5 object-contain" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-1">{point.title}</h4>
                    <p className="text-[#9CA3AF] text-sm leading-relaxed">{point.body}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.3)]"
          >
            <img src={image} alt={imageAlt} className="w-full h-auto block" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
