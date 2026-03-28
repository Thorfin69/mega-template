import { motion } from 'motion/react';

interface Feature {
  title: string;
  body: string;
}

interface WhyChooseUsProps {
  heading: string;
  headingAccent: string;
  subheading: string;
  features: Feature[];
  image: string;
  imageAlt: string;
  checkIconSrc: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function WhyChooseUs({
  heading,
  headingAccent,
  subheading,
  features,
  image,
  imageAlt,
  checkIconSrc,
}: WhyChooseUsProps) {
  return (
    <section className="bg-[#f8f9fc] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 lg:px-12 grid lg:grid-cols-2 gap-16 items-start">
        {/* Left — content */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-bold text-[#27272e] leading-snug mb-3">
            {heading} <span className="text-[#0094DC]">{headingAccent}</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-600 mb-10">
            {subheading}
          </motion.p>

          <div className="flex flex-col gap-7">
            {features.map((feature, i) => (
              <motion.div key={i} variants={fadeUp} className="flex gap-4">
                <div className="flex-shrink-0 w-7 h-7 mt-0.5">
                  <img src={checkIconSrc} alt="" aria-hidden="true" className="w-7 h-7 object-contain" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#27272e] mb-1">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right — image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="rounded-2xl overflow-hidden shadow-xl"
        >
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
