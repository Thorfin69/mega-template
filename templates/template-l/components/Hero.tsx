import { motion } from 'motion/react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

interface HeroProps {
  badge: string;
  badgeIcon: string;
  heading: string;
  subheading: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  dashboardImage: string;
  dashboardAlt: string;
}

export default function Hero({
  badge,
  badgeIcon,
  heading,
  subheading,
  ctaPrimary,
  ctaSecondary,
  dashboardImage,
  dashboardAlt,
}: HeroProps) {
  return (
    <section className="bg-white pt-20 pb-0 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4">
        <motion.div
          className="text-center max-w-[760px] mx-auto"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#027DFC] text-sm font-medium mb-6">
            <img src={badgeIcon} alt="" className="w-4 h-4" />
            {badge}
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="text-[2.75rem] lg:text-[3.5rem] font-bold text-[#27313D] leading-[1.15] tracking-[-0.02em] mb-5"
          >
            {heading}
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={fadeUp}
            className="text-lg text-[#6B7280] leading-relaxed mb-8 max-w-[580px] mx-auto"
          >
            {subheading}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={ctaPrimary.href}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#027DFC] text-white font-semibold text-sm hover:bg-[#0268d4] transition-colors shadow-[0_4px_20px_rgba(2,125,252,0.35)]"
            >
              {ctaPrimary.label}
            </a>
            <a
              href={ctaSecondary.href}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-[#E5E7EB] text-[#27313D] font-semibold text-sm hover:border-[#027DFC] hover:text-[#027DFC] transition-colors"
            >
              {ctaSecondary.label}
            </a>
          </motion.div>
        </motion.div>

        {/* Dashboard image */}
        <motion.div
          className="mt-14 rounded-t-2xl overflow-hidden shadow-[0_-4px_60px_rgba(0,0,0,0.12)] border border-b-0 border-[#E5E7EB]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
        >
          <img src={dashboardImage} alt={dashboardAlt} className="w-full h-auto block" />
        </motion.div>
      </div>
    </section>
  );
}
