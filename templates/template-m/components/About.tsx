import { motion } from 'motion/react';

interface AboutProps {
  overline: string;
  heading: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
  badgeSrc: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function About({
  overline,
  heading,
  body,
  ctaLabel,
  ctaHref,
  image,
  imageAlt,
  badgeSrc,
}: AboutProps) {
  return (
    <section className="bg-[#f8f9fc] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left — image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative"
        >
          <img
            src={image}
            alt={imageAlt}
            className="w-full rounded-2xl object-cover shadow-lg"
          />
          {/* Badge overlay */}
          <div className="absolute -bottom-6 -right-6 hidden lg:block">
            <img
              src={badgeSrc}
              alt="Trusted agency badge"
              className="w-28 h-28 object-contain"
            />
          </div>
        </motion.div>

        {/* Right — content */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span
            variants={fadeUp}
            className="inline-block text-[#0094DC] text-sm font-semibold tracking-widest uppercase mb-3"
          >
            {overline}
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="text-3xl lg:text-4xl font-bold text-[#27272e] leading-snug mb-5 capitalize"
          >
            {heading}
          </motion.h2>

          <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed mb-8">
            {body}
          </motion.p>

          <motion.div variants={fadeUp}>
            <a
              href={ctaHref}
              className="inline-flex items-center bg-[#0094DC] text-white font-semibold px-7 py-3.5 rounded-md hover:bg-[#007bbf] transition-colors"
            >
              {ctaLabel}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
