import { motion } from 'motion/react';

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar?: string;
}

interface TestimonialsProps {
  overline?: string;
  heading: string;
  satisfactionRate?: string;
  avgRating?: string;
  testimonials: Testimonial[];
  ctaLabel?: string;
  ctaHref?: string;
}

function StarRating() {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 fill-[#4da7aa]" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="shrink-0 w-[320px] bg-white/10 backdrop-blur rounded-[10px] p-6 mx-3">
      <StarRating />
      <p className="text-white text-[0.9375rem] leading-relaxed mt-4 mb-6">{t.quote}</p>
      <div className="flex items-center gap-3">
        {t.avatar ? (
          <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
        ) : (
          <div className="w-10 h-10 rounded-full bg-[#4da7aa]/30 flex items-center justify-center text-white font-bold text-sm">
            {t.name.charAt(0)}
          </div>
        )}
        <div>
          <p className="text-white font-semibold text-sm">{t.name}</p>
          <p className="text-[#b8b8bd] text-xs">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials({
  overline,
  heading,
  satisfactionRate = '100%',
  avgRating = '4.9',
  testimonials,
  ctaLabel = 'View More',
  ctaHref = '#',
}: TestimonialsProps) {
  // Split into two rows for the marquee
  const mid = Math.ceil(testimonials.length / 2);
  const row1 = testimonials.slice(0, mid);
  const row2 = testimonials.slice(mid);

  return (
    <section className="bg-[#27272e] py-[100px] overflow-hidden">
      <div className="max-w-[1230px] mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
        >
          <div>
            {overline && (
              <p className="text-[#4da7aa] text-sm font-semibold uppercase tracking-widest mb-3">{overline}</p>
            )}
            <h2
              className="text-white font-bold"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', lineHeight: 1.2 }}
            >
              {heading}
            </h2>
          </div>
          <div className="flex gap-8 shrink-0">
            <div className="text-center">
              <p className="text-[#4da7aa] font-bold text-[2rem]">{satisfactionRate}</p>
              <p className="text-[#b8b8bd] text-sm">Client satisfaction</p>
            </div>
            <div className="text-center">
              <p className="text-[#4da7aa] font-bold text-[2rem]">{avgRating}</p>
              <p className="text-[#b8b8bd] text-sm">Average Rating</p>
            </div>
            <a
              href={ctaHref}
              className="self-center flex items-center justify-center bg-[#4da7aa] text-white text-sm font-semibold px-6 py-3 rounded-[5px] hover:bg-white hover:text-[#27272e] transition-colors duration-200"
            >
              {ctaLabel}
            </a>
          </div>
        </motion.div>
      </div>

      {/* Row 1: scrolls left */}
      <div className="relative">
        <div className="flex animate-marquee-left">
          {[...row1, ...row1].map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>

      {/* Row 2: scrolls right */}
      <div className="relative mt-6">
        <div className="flex animate-marquee-right">
          {[...row2, ...row2].map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
