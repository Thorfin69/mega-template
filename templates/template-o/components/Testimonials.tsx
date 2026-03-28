import { motion } from 'motion/react';

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  imageSrc?: string;
}

interface TestimonialsProps {
  overline: string;
  heading: string;
  headingAccent: string;
  testimonials: Testimonial[];
  resultStats: { value: string; label: string }[];
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Testimonials({
  overline,
  heading,
  headingAccent,
  testimonials,
  resultStats,
}: TestimonialsProps) {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 lg:px-10">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-14"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block text-[#3B5BDB] text-sm font-semibold tracking-widest uppercase mb-3"
          >
            {overline}
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-3xl lg:text-4xl font-bold text-gray-900 leading-snug"
          >
            {heading}{' '}
            <span className="text-[#3B5BDB]">{headingAccent}</span>
          </motion.h2>
        </motion.div>

        {/* Result stats */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-14"
        >
          {resultStats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="bg-[#3B5BDB]/5 border border-[#3B5BDB]/15 rounded-2xl p-6 text-center"
            >
              <p className="text-3xl lg:text-4xl font-bold text-[#3B5BDB] mb-1">{stat.value}</p>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured testimonial */}
        {testimonials.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="bg-gray-50 border border-gray-100 rounded-2xl p-8 lg:p-10 mb-8"
          >
            <div className="flex items-start gap-4 flex-col sm:flex-row">
              {testimonials[0].imageSrc && (
                <img
                  src={testimonials[0].imageSrc}
                  alt={testimonials[0].name}
                  className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                />
              )}
              <div>
                <p className="text-gray-700 text-base lg:text-lg leading-relaxed italic mb-4">
                  "{testimonials[0].quote}"
                </p>
                <p className="font-bold text-gray-900">{testimonials[0].name}</p>
                <p className="text-[#3B5BDB] text-sm">{testimonials[0].role}</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Testimonial grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.slice(1).map((t, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, s) => (
                  <svg key={s} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed italic mb-4">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                {t.imageSrc && (
                  <img
                    src={t.imageSrc}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                  />
                )}
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-[#3B5BDB] text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
