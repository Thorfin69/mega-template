import { motion } from 'motion/react';

interface CTABannerProps {
  heading: string;
  headingAccent: string;
  body: string;
  phone: string;
  ctaLabel: string;
  ctaHref: string;
  callIconSrc: string;
}

export default function CTABanner({
  heading,
  headingAccent,
  body,
  phone,
  ctaLabel,
  ctaHref,
  callIconSrc,
}: CTABannerProps) {
  return (
    <section className="bg-[#0094DC] py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left max-w-2xl"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white leading-snug mb-4">
            {heading} <span className="text-[#0d1117]">{headingAccent}</span>
          </h2>
          <p className="text-white/80 leading-relaxed">{body}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0"
        >
          <a
            href={ctaHref}
            className="inline-flex items-center bg-[#0d1117] text-white font-semibold px-7 py-3.5 rounded-md hover:bg-black transition-colors whitespace-nowrap"
          >
            {ctaLabel}
          </a>
          <a
            href={`tel:${phone}`}
            className="inline-flex items-center gap-2 text-white font-semibold whitespace-nowrap"
          >
            <img src={callIconSrc} alt="" aria-hidden="true" className="w-5 h-5 object-contain" />
            {phone}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
