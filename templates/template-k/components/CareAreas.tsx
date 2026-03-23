import { motion } from 'motion/react';

interface CareArea {
  title: string;
  image: string;
  href?: string;
}

interface CareAreasProps {
  overline?: string;
  heading: string;
  subheading?: string;
  areas: CareArea[];
  ctaLabel?: string;
  ctaHref?: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function CareAreas({ overline, heading, subheading, areas, ctaLabel, ctaHref }: CareAreasProps) {
  return (
    <section className="bg-white py-[100px]">
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
          {areas.map((area, i) => (
            <motion.a
              key={i}
              href={area.href ?? '#'}
              variants={fadeUp}
              className="block rounded-[15px] overflow-hidden group relative"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#27272e]/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white font-semibold text-[1.125rem]">{area.title}</h3>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {ctaLabel && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center mt-10"
          >
            <a
              href={ctaHref ?? '#'}
              className="inline-flex items-center justify-center bg-[#4da7aa] text-white text-[0.9375rem] font-semibold px-8 py-4 rounded-[5px] hover:bg-[#27272e] transition-colors duration-200"
            >
              {ctaLabel}
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
