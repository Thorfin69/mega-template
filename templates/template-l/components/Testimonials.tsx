import { motion } from 'motion/react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

interface Testimonial {
  name: string;
  role: string;
  company?: string;
  quote: string;
  avatar?: string;
}

interface TestimonialsProps {
  overline: string;
  heading: string;
  subheading: string;
  testimonials: Testimonial[];
}

function StarRow() {
  return (
    <div className="flex gap-0.5 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#F59E0B]" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials({ overline, heading, subheading, testimonials }: TestimonialsProps) {
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

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              className="bg-white/5 border border-white/10 rounded-2xl p-7 flex flex-col hover:bg-white/8 hover:border-white/20 transition-all duration-300"
            >
              <StarRow />
              <p className="text-[#D1D5DB] text-sm leading-relaxed mb-6 flex-1">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                {t.avatar ? (
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-[#027DFC]/20 flex items-center justify-center text-[#027DFC] font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                )}
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-[#9CA3AF] text-xs">
                    {t.role}{t.company ? `, ${t.company}` : ''}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
