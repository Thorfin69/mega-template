import { motion } from 'motion/react';

interface Testimonial {
  quote: string;
  name: string;
  location: string;
}

interface TestimonialsProps {
  overline: string;
  heading: string;
  testimonials: Testimonial[];
}

export default function Testimonials({ overline, heading, testimonials }: TestimonialsProps) {
  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="bg-[#f8f9fb] py-20 lg:py-28 overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 lg:px-12 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-[#f7b433] text-sm font-bold uppercase tracking-widest mb-3">{overline}</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1a1a2e]">{heading}</h2>
        </motion.div>
      </div>

      {/* Marquee strip */}
      <div className="flex overflow-hidden gap-6">
        <div className="flex gap-6 animate-marquee-left shrink-0">
          {doubled.map((t, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-2xl p-6 w-80 flex-shrink-0 shadow-sm"
            >
              {/* Star rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, s) => (
                  <svg key={s} viewBox="0 0 20 20" fill="#f7b433" className="w-4 h-4">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">"{t.quote}"</p>

              <div>
                <p className="text-[#1a1a2e] font-bold text-sm">{t.name}</p>
                <p className="text-[#f7b433] text-xs">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
