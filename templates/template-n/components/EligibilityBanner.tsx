import { motion } from 'motion/react';

interface EligibilityBannerProps {
  heading: string;
  body: string;
  applyHref: string;
  equalHousingLogoSrc: string;
}

export default function EligibilityBanner({
  heading,
  body,
  applyHref,
  equalHousingLogoSrc,
}: EligibilityBannerProps) {
  return (
    <section
      className="py-20 lg:py-28"
      style={{ background: 'linear-gradient(135deg, #f7b433 0%, #e6a827 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1a1a2e] leading-snug mb-5">
              {heading}
            </h2>
            <p className="text-[#1a1a2e]/70 leading-relaxed mb-8">{body}</p>
            <a
              href={applyHref}
              className="inline-flex items-center gap-2 bg-[#1a1a2e] text-white font-bold px-8 py-3.5 rounded-md hover:bg-[#0d1117] transition-colors"
            >
              Check If You're Eligible
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 25" fill="none">
                <path
                  d="M11.293 17.793L12.707 19.207L19.414 12.5L12.707 5.793L11.293 7.207L15.586 11.5H6V13.5H15.586L11.293 17.793Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </motion.div>

          {/* Equal Housing + disclaimer */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            <img
              src={equalHousingLogoSrc}
              alt="Equal Housing Lender"
              className="h-20 object-contain self-start"
            />
            <p className="text-[#1a1a2e]/60 text-xs leading-relaxed">
              For information purposes only. This is not a commitment to lend or extend credit.
              Information and/or dates are subject to change without notice. All loans are subject
              to credit approval. Other restrictions may apply. Tiger Loans, Inc. | NMLS ID: 1169300
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
