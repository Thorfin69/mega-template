import { motion } from 'motion/react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

interface CTABannerProps {
  heading: string;
  subheading: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  note?: string;
}

export default function CTABanner({ heading, subheading, ctaPrimary, ctaSecondary, note }: CTABannerProps) {
  return (
    <section className="bg-[#027DFC] py-20 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/5" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-white/5" />
      </div>

      <div className="max-w-[860px] mx-auto px-4 relative">
        <motion.div
          className="text-center"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 variants={fadeUp} className="text-[2rem] lg:text-[2.75rem] font-bold text-white leading-tight mb-5">
            {heading}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/80 text-base leading-relaxed mb-8 max-w-[560px] mx-auto">
            {subheading}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={ctaPrimary.href}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-[#027DFC] font-semibold text-sm hover:bg-gray-50 transition-colors shadow-lg"
            >
              {ctaPrimary.label}
            </a>
            {ctaSecondary && (
              <a
                href={ctaSecondary.href}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border-2 border-white/50 text-white font-semibold text-sm hover:border-white hover:bg-white/10 transition-colors"
              >
                {ctaSecondary.label}
              </a>
            )}
          </motion.div>

          {note && (
            <motion.p variants={fadeUp} className="mt-4 text-white/60 text-sm">
              {note}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
