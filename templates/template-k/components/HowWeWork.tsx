import { motion } from 'motion/react';

interface Step {
  number: string;
  title: string;
  body: string;
  ctaLabel?: string;
  ctaHref?: string;
}

interface HowWeWorkProps {
  overline?: string;
  heading: string;
  subheading?: string;
  steps: Step[];
  sideImage?: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function HowWeWork({ overline, heading, subheading, steps, sideImage }: HowWeWorkProps) {
  return (
    <section className="bg-[#f8f8ff] py-[100px]">
      <div className="max-w-[1230px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {overline && (
              <motion.p variants={fadeUp} className="text-[#4da7aa] text-sm font-semibold uppercase tracking-widest mb-3">
                {overline}
              </motion.p>
            )}
            <motion.h2
              variants={fadeUp}
              className="text-[#27272e] font-bold mb-4"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', lineHeight: 1.2 }}
            >
              {heading}
            </motion.h2>
            {subheading && (
              <motion.p variants={fadeUp} className="text-[#7e7e7e] text-[1rem] mb-10">
                {subheading}
              </motion.p>
            )}

            <motion.div variants={stagger} className="flex flex-col gap-8">
              {steps.map((step) => (
                <motion.div key={step.number} variants={fadeUp} className="flex gap-5">
                  <div
                    className="shrink-0 w-12 h-12 rounded-full bg-[#4da7aa]/10 flex items-center justify-center"
                  >
                    <span className="text-[#4da7aa] font-bold text-sm">{step.number}</span>
                  </div>
                  <div>
                    <h3 className="text-[#27272e] font-semibold text-[1.125rem] mb-2">{step.title}</h3>
                    <p className="text-[#7e7e7e] text-[0.9375rem] leading-relaxed">{step.body}</p>
                    {step.ctaLabel && (
                      <a
                        href={step.ctaHref ?? '#'}
                        className="inline-block mt-3 text-[#4da7aa] text-sm font-semibold hover:underline"
                      >
                        {step.ctaLabel} →
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: image */}
          {sideImage && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="rounded-[25px] overflow-hidden"
            >
              <img src={sideImage} alt="How we work" className="w-full h-full object-cover" />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
