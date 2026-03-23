import { motion } from 'motion/react';

interface Specialty {
  number: string;
  title: string;
  body: string;
  image: string;
  ctaHref?: string;
}

interface SpecialtiesProps {
  overline?: string;
  heading: string;
  subheading?: string;
  specialties: Specialty[];
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Specialties({ overline, heading, subheading, specialties }: SpecialtiesProps) {
  return (
    <section className="bg-[#f8f8ff] py-[100px]">
      <div className="max-w-[1230px] mx-auto px-4">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12"
        >
          {overline && (
            <motion.p variants={fadeUp} className="text-[#4da7aa] text-sm font-semibold uppercase tracking-widest mb-3">
              {overline}
            </motion.p>
          )}
          <motion.h2
            variants={fadeUp}
            className="text-[#27272e] font-bold"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', lineHeight: 1.2 }}
          >
            {heading}
          </motion.h2>
          {subheading && (
            <motion.p variants={fadeUp} className="text-[#7e7e7e] text-[1rem] mt-4 max-w-[600px] mx-auto">
              {subheading}
            </motion.p>
          )}
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {specialties.map((spec) => (
            <motion.div
              key={spec.number}
              variants={fadeUp}
              className="bg-white rounded-[11px] overflow-hidden group hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)] transition-shadow duration-300"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={spec.image}
                  alt={spec.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#4da7aa] text-white text-xs font-bold px-3 py-1 rounded-[50px]">
                  {spec.number}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-[#27272e] font-semibold text-[1.125rem] mb-2">{spec.title}</h3>
                <p className="text-[#7e7e7e] text-[0.9375rem] leading-relaxed mb-4">{spec.body}</p>
                <a
                  href={spec.ctaHref ?? '#'}
                  className="text-[#4da7aa] text-sm font-semibold hover:underline"
                >
                  Read More →
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
