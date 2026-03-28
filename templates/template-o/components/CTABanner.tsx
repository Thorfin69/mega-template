import { motion } from 'motion/react';

interface CTABannerProps {
  heading: string;
  headingAccent: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  ctaSecondaryLabel: string;
  ctaSecondaryHref: string;
  email: string;
}

export default function CTABanner({
  heading,
  headingAccent,
  body,
  ctaLabel,
  ctaHref,
  ctaSecondaryLabel,
  ctaSecondaryHref,
  email,
}: CTABannerProps) {
  return (
    <section
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(59,91,219,0.2), rgba(10,10,20,1))',
        backgroundColor: '#0a0a14',
      }}
    >
      {/* Decorative glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'conic-gradient(from 230.29deg at 51.63% 52.16%, rgba(36,0,255,0.12) 0deg, rgba(0,135,255,0.12) 67.5deg, rgba(108,39,157,0.12) 198.75deg, rgba(24,38,163,0.12) 251.25deg, rgba(54,103,196,0.12) 301.88deg, rgba(105,30,255,0.12) 360deg)',
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight mb-4">
            {heading}{' '}
            <span className="text-[#3B5BDB]">{headingAccent}</span>
          </h2>
          <p className="text-gray-400 text-base lg:text-lg max-w-2xl mx-auto mb-8">
            {body}
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <a
              href={ctaHref}
              className="inline-flex items-center gap-2 bg-[#3B5BDB] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#2f4ac4] transition-colors text-base shadow-lg shadow-blue-900/40"
            >
              {ctaLabel}
              <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="currentColor">
                <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
              </svg>
            </a>
            <a
              href={ctaSecondaryHref}
              className="inline-flex items-center border border-white/30 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors text-base"
            >
              {ctaSecondaryLabel}
            </a>
          </div>

          <p className="text-gray-500 text-sm">
            Questions?{' '}
            <a href={`mailto:${email}`} className="text-[#7c94f5] hover:text-white transition-colors underline">
              {email}
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
