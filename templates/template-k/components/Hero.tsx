import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Slide {
  image: string;
  alt: string;
}

interface HeroProps {
  heading: string;
  subheading: string;
  slides: Slide[];
  ctaPrimary: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  trustCount?: string;
  trustLabel?: string;
  avatarImages?: string[];
}

export default function Hero({
  heading,
  subheading,
  slides,
  ctaPrimary,
  ctaSecondary,
  trustCount = '6,287',
  trustLabel = 'users with 5 Star reviews and counting',
  avatarImages = [],
}: HeroProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section
      className="relative overflow-hidden"
      style={{
        borderBottomLeftRadius: '60px',
        borderBottomRightRadius: '60px',
        minHeight: '600px',
      }}
    >
      {/* Slides */}
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].alt}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Teal gradient overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: 'linear-gradient(90deg, #4da7aa, rgba(60,159,185,0.55) 45%, rgba(60,159,185,0))',
        }}
      />

      {/* Content */}
      <div className="relative z-[8] max-w-[1230px] mx-auto px-4 flex items-center min-h-[600px] py-20">
        <div className="flex flex-col items-center text-center w-full gap-5">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="text-white font-bold max-w-[850px] mx-auto"
            style={{ fontSize: 'clamp(2.1rem, 5vw, 3.75rem)', lineHeight: '1.1', letterSpacing: '-0.03rem' }}
          >
            {heading}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.25 }}
            className="text-white text-[1.25rem] max-w-[620px] mx-auto"
          >
            {subheading}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center mt-2"
          >
            <a
              href={ctaPrimary.href}
              className="relative flex items-center justify-center bg-[#27272e] text-white text-[0.9375rem] font-semibold px-8 py-4 rounded-[5px] overflow-hidden group"
            >
              <span className="relative z-10">{ctaPrimary.label}</span>
              <span className="absolute inset-0 bg-[#4da7aa] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            {ctaSecondary && (
              <a
                href={ctaSecondary.href}
                className="relative flex items-center justify-center bg-white text-[#27272e] text-[0.9375rem] font-semibold px-8 py-4 rounded-[5px] overflow-hidden group"
              >
                <span className="relative z-10">{ctaSecondary.label}</span>
                <span className="absolute inset-0 bg-[#27272e] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="absolute inset-0 bg-transparent group-hover:text-white transition-colors duration-300 z-[11]" />
              </a>
            )}
          </motion.div>

          {/* Trust bar */}
          {(trustCount || avatarImages.length > 0) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-3 mt-4"
            >
              {avatarImages.length > 0 && (
                <div className="flex -space-x-2">
                  {avatarImages.slice(0, 4).map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt="User avatar"
                      className="w-9 h-9 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                </div>
              )}
              <div className="text-white text-sm">
                <span className="font-semibold">Trusted by {trustCount}</span>{' '}
                {trustLabel}
              </div>
            </motion.div>
          )}

          {/* Slide indicators */}
          <div className="flex gap-2 mt-4">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current ? 'bg-white w-6' : 'bg-white/50'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
