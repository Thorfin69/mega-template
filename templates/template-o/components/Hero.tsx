import { motion } from 'motion/react';

interface HeroProps {
  badge: string;
  heading: string;
  subheading: string;
  body: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  statsLabel: string;
  stats: { value: string; label: string }[];
  heroImageLeft: string;
  heroImageRight: string;
  mediaLogos: { src: string; alt: string }[];
  mediaLabel: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Hero({
  badge,
  heading,
  subheading,
  body,
  ctaPrimary,
  ctaSecondary,
  statsLabel,
  stats,
  heroImageLeft,
  heroImageRight,
  mediaLogos,
  mediaLabel,
}: HeroProps) {
  return (
    <section
      className="relative bg-[#0a0a14] overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(120, 119, 198, 0.3), rgba(10,10,20,1))',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-10 pt-20 pb-12 lg:pt-28 lg:pb-16">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="text-center flex flex-col items-center"
        >
          {/* Badge */}
          <motion.span
            variants={fadeUp}
            className="inline-block bg-white/10 border border-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide"
          >
            {badge}
          </motion.span>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 max-w-4xl"
          >
            {heading}
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={fadeUp}
            className="text-lg lg:text-xl text-[#3B5BDB] font-semibold mb-4"
          >
            {subheading}
          </motion.p>

          {/* Body */}
          <motion.p
            variants={fadeUp}
            className="text-gray-400 text-base lg:text-lg leading-relaxed mb-8 max-w-2xl"
          >
            {body}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center mb-10">
            <a
              href={ctaPrimary.href}
              className="inline-flex items-center bg-[#3B5BDB] text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-[#2f4ac4] transition-colors shadow-lg shadow-blue-900/30"
            >
              {ctaPrimary.label}
            </a>
            <a
              href={ctaSecondary.href}
              className="inline-flex items-center border border-white/30 text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-white/10 transition-colors"
            >
              {ctaSecondary.label}
            </a>
          </motion.div>

          {/* Stats */}
          <motion.p variants={fadeUp} className="text-gray-500 text-xs uppercase tracking-widest mb-6">
            {statsLabel}
          </motion.p>
          <motion.div
            variants={stagger}
            className="flex flex-wrap justify-center gap-8 mb-14"
          >
            {stats.map((s) => (
              <motion.div key={s.label} variants={fadeUp} className="text-center">
                <p className="text-3xl font-bold text-white">{s.value}</p>
                <p className="text-gray-400 text-sm mt-1">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Hero images */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.3 }}
          className="relative flex justify-center items-end gap-4 max-h-[480px]"
        >
          <img
            src={heroImageLeft}
            alt="BrandBooster dashboard left"
            className="w-[45%] rounded-xl object-cover shadow-2xl"
          />
          <img
            src={heroImageRight}
            alt="BrandBooster dashboard right"
            className="w-[45%] rounded-xl object-cover shadow-2xl"
          />
        </motion.div>

        {/* Media logos */}
        {mediaLogos.length > 0 && (
          <div className="mt-14 text-center">
            <p className="text-gray-500 text-xs uppercase tracking-widest mb-5">{mediaLabel}</p>
            <div className="flex flex-wrap justify-center gap-6 items-center opacity-60">
              {mediaLogos.map((logo) => (
                <img key={logo.alt} src={logo.src} alt={logo.alt} className="h-7 object-contain grayscale" />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
