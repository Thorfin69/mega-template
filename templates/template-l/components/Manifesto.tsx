import { motion } from 'motion/react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

interface ManifestoPoint {
  title: string;
  body: string;
}

interface ManifestoProps {
  overline: string;
  heading: string;
  body: string;
  points: ManifestoPoint[];
}

export default function Manifesto({ overline, heading, body, points }: ManifestoProps) {
  return (
    <section className="bg-[#1C2530] py-20">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: heading + body */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.p variants={fadeUp} className="text-[#027DFC] text-sm font-semibold uppercase tracking-widest mb-3">
              {overline}
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-[2rem] lg:text-[2.5rem] font-bold text-white leading-tight mb-6">
              {heading}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#9CA3AF] text-base leading-relaxed">
              {body}
            </motion.p>
          </motion.div>

          {/* Right: points */}
          <motion.div
            className="flex flex-col gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {points.map((point, i) => (
              <motion.div
                key={point.title}
                variants={fadeUp}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#027DFC] flex items-center justify-center text-white text-xs font-bold">
                  {i + 1}
                </div>
                <div>
                  <h4 className="text-white font-semibold text-base mb-1">{point.title}</h4>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed">{point.body}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
