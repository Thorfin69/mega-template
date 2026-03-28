import { motion } from 'motion/react';

interface Service {
  title: string;
  description: string;
  icon: string;
  href: string;
}

interface ServicesProps {
  overline: string;
  heading: string;
  headingAccent: string;
  services: Service[];
  ctaNote: string;
  ctaLabel: string;
  ctaHref: string;
  ctaLinkLabel: string;
  ctaLinkHref: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function Services({
  overline,
  heading,
  headingAccent,
  services,
  ctaNote,
  ctaLabel,
  ctaHref,
  ctaLinkLabel,
  ctaLinkHref,
}: ServicesProps) {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 lg:px-12">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-14"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block text-[#0094DC] text-sm font-semibold tracking-widest uppercase mb-3"
          >
            {overline}
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-3xl lg:text-4xl font-bold text-[#27272e] leading-snug"
          >
            {heading}{' '}
            <span className="text-[#0094DC]">{headingAccent}</span>
          </motion.h2>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              className="bg-[#f8f9fc] rounded-xl p-7 flex flex-col gap-4 hover:shadow-md transition-shadow group"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-white shadow-sm">
                <img src={service.icon} alt={service.title} className="w-8 h-8 object-contain" />
              </div>
              <h3 className="text-lg font-bold text-[#27272e] group-hover:text-[#0094DC] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-1">{service.description}</p>
              <a
                href={service.href}
                className="text-[#0094DC] text-sm font-semibold hover:underline inline-flex items-center gap-1"
              >
                Read More →
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="bg-[#0d1117] rounded-2xl p-10 flex flex-col lg:flex-row items-center justify-between gap-6"
        >
          <p className="text-white text-base lg:text-lg max-w-xl text-center lg:text-left">
            {ctaNote}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={ctaHref}
              className="inline-flex items-center bg-[#0094DC] text-white font-semibold px-7 py-3.5 rounded-md hover:bg-[#007bbf] transition-colors whitespace-nowrap"
            >
              {ctaLabel}
            </a>
            <a
              href={ctaLinkHref}
              className="inline-flex items-center text-white font-semibold px-7 py-3.5 rounded-md border border-white/30 hover:bg-white/10 transition-colors whitespace-nowrap"
            >
              {ctaLinkLabel}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
