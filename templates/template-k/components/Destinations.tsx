import { motion } from 'motion/react';

interface Destination {
  state: string;
  avgWeekly: string;
  city: string;
  type: string;
  image: string;
  ctaLabel?: string;
  ctaHref?: string;
}

interface DestinationsProps {
  overline?: string;
  heading: string;
  subheading?: string;
  destinations: Destination[];
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Destinations({ overline, heading, subheading, destinations }: DestinationsProps) {
  return (
    <section className="bg-[#f3f3ff] py-[100px]">
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

        {/* Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {destinations.map((dest, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-white rounded-[15px] overflow-hidden group hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)] transition-shadow duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={dest.image}
                  alt={`${dest.city}, ${dest.state}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-[#27272e] text-white text-sm font-bold px-4 py-2 rounded-[50px]">
                  Avg {dest.avgWeekly}
                </div>
              </div>
              <div className="p-6 flex items-start justify-between">
                <div>
                  <h3 className="text-[#27272e] font-bold text-[1.25rem] mb-1">{dest.state}</h3>
                  <p className="text-[#7e7e7e] text-sm">City: {dest.city}</p>
                  <p className="text-[#7e7e7e] text-sm">Type: {dest.type}</p>
                </div>
                <a
                  href={dest.ctaHref ?? '#'}
                  className="shrink-0 flex items-center justify-center bg-[#4da7aa] text-white text-sm font-semibold px-5 py-3 rounded-[5px] hover:bg-[#27272e] transition-colors duration-200"
                >
                  {dest.ctaLabel ?? `View jobs in ${dest.state}`}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
