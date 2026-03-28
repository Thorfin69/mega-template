import { motion } from 'motion/react';

interface HeroFeature {
  label: string;
}

interface HeroProps {
  eyebrowBadge: string;
  eyebrowText: string;
  heading: string;
  headingAccent: string;
  body: string;
  features: HeroFeature[];
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

// Inline SVG checkmark circle (orange/green from original)
function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 29" fill="none">
      <g clipPath="url(#heroCheck)">
        <path
          d="M28 14.5C28 6.768 21.732 0.5 14 0.5C6.268 0.5 0 6.768 0 14.5C0 22.232 6.268 28.5 14 28.5C21.732 28.5 28 22.232 28 14.5Z"
          fill="#f7b433"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.946 9.122L11.592 17.183L9.376 14.815C8.967 14.43 8.326 14.407 7.859 14.733C7.404 15.072 7.276 15.667 7.556 16.145L10.181 20.415C10.437 20.812 10.881 21.057 11.382 21.057C11.861 21.057 12.316 20.812 12.572 20.415C12.992 19.867 21.007 10.312 21.007 10.312C22.057 9.238 20.786 8.293 19.946 9.11V9.122Z"
          fill="#002C15"
        />
      </g>
      <defs>
        <clipPath id="heroCheck">
          <rect width="28" height="29" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default function Hero({
  eyebrowBadge,
  eyebrowText,
  heading,
  headingAccent,
  body,
  features,
  ctaPrimary,
  ctaSecondary,
}: HeroProps) {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #0d1117 60%, #16213e 100%)' }}
    >
      {/* Decorative background circle */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #f7b433 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-12 py-24 lg:py-32 text-center">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          {/* Eyebrow */}
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-3 mb-6"
          >
            <span className="bg-[#f7b433] text-[#002C15] text-xs font-bold px-3 py-1 rounded-full">
              {eyebrowBadge}
            </span>
            <span className="text-gray-300 text-sm">{eyebrowText}</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-4xl mx-auto"
          >
            {heading}{' '}
            <span className="text-[#f7b433]">{headingAccent}</span>
          </motion.h1>

          {/* Body */}
          <motion.p
            variants={fadeUp}
            className="text-gray-300 text-base lg:text-lg leading-relaxed mb-8 max-w-2xl mx-auto"
          >
            {body}
          </motion.p>

          {/* Feature bullets */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            {features.map((f) => (
              <div key={f.label} className="flex items-center gap-2 text-white text-sm font-medium">
                <CheckIcon />
                <span>{f.label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
            <a
              href={ctaPrimary.href}
              className="inline-flex items-center gap-2 bg-[#f7b433] text-[#1a1a2e] font-bold px-8 py-3.5 rounded-md hover:bg-[#e6a827] transition-colors"
            >
              {ctaPrimary.label}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 25" fill="none">
                <path
                  d="M11.293 17.793L12.707 19.207L19.414 12.5L12.707 5.793L11.293 7.207L15.586 11.5H6V13.5H15.586L11.293 17.793Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              href={ctaSecondary.href}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-8 py-3.5 rounded-md hover:bg-white/20 transition-colors"
            >
              {ctaSecondary.label}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 25" fill="none">
                <path
                  d="M11.293 17.793L12.707 19.207L19.414 12.5L12.707 5.793L11.293 7.207L15.586 11.5H6V13.5H15.586L11.293 17.793Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
