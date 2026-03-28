import { motion } from 'motion/react';

interface HeroProps {
  tagline: string;
  heading: string;
  body: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  trustCount: string;
  trustLabel: string;
  heroImage: string;
  heroImageAlt: string;
  bgShapeSrc: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Hero({
  tagline,
  heading,
  body,
  ctaPrimary,
  ctaSecondary,
  trustCount,
  trustLabel,
  heroImage,
  heroImageAlt,
  bgShapeSrc,
}: HeroProps) {
  return (
    <section className="relative bg-[#0d1117] overflow-hidden min-h-[600px] flex items-center">
      {/* Background shape */}
      <img
        src={bgShapeSrc}
        alt=""
        aria-hidden="true"
        className="absolute right-0 top-0 h-full w-auto object-cover opacity-20 pointer-events-none select-none"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-12 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="text-white">
          <motion.span
            variants={fadeUp}
            className="inline-block text-[#0094DC] text-sm font-semibold tracking-widest uppercase mb-4"
          >
            {tagline}
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="text-4xl lg:text-5xl font-bold leading-tight mb-6"
          >
            {heading}
          </motion.h1>

          <motion.p variants={fadeUp} className="text-gray-300 text-base lg:text-lg leading-relaxed mb-8 max-w-xl">
            {body}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-10">
            <a
              href={ctaPrimary.href}
              className="inline-flex items-center bg-[#0094DC] text-white font-semibold px-7 py-3.5 rounded-md hover:bg-[#007bbf] transition-colors"
            >
              {ctaPrimary.label}
            </a>
            <a
              href={ctaSecondary.href}
              className="inline-flex items-center bg-white text-[#27272e] font-semibold px-7 py-3.5 rounded-md hover:bg-gray-100 transition-colors"
            >
              {ctaSecondary.label}
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="flex items-center gap-3">
            <span className="text-3xl font-bold text-[#0094DC]">{trustCount}</span>
            <span className="text-gray-400 text-sm leading-tight max-w-[140px]">{trustLabel}</span>
          </motion.div>
        </motion.div>

        {/* Right image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="hidden lg:flex justify-center"
        >
          <img
            src={heroImage}
            alt={heroImageAlt}
            className="w-full max-w-lg rounded-2xl object-cover shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
