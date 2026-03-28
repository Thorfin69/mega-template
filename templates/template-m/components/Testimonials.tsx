import { motion } from 'motion/react';

interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

interface TestimonialsProps {
  heading: string;
  headingAccent: string;
  starSrc: string;
  testimonials: Testimonial[];
}

export default function Testimonials({ heading, headingAccent, starSrc, testimonials }: TestimonialsProps) {
  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="bg-[#0d1117] py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-12 mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-4xl font-bold text-white text-center leading-snug"
        >
          {heading} <span className="text-[#0094DC]">{headingAccent}</span>
        </motion.h2>
      </div>

      {/* Marquee */}
      <div className="flex overflow-hidden gap-6">
        <div className="flex gap-6 animate-marquee-left shrink-0">
          {doubled.map((t, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-xl p-6 w-80 flex-shrink-0"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, s) => (
                  <img key={s} src={starSrc} alt="star" className="w-4 h-4 object-contain" />
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div>
                <p className="text-white font-semibold">{t.name}</p>
                <p className="text-[#0094DC] text-sm">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
