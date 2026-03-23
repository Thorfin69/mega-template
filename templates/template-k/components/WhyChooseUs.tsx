import { motion } from 'motion/react';

interface Feature {
  icon?: string;
  title: string;
  body: string;
}

interface WhyChooseUsProps {
  overline?: string;
  heading: string;
  subheading?: string;
  features: Feature[];
  sideImages?: string[];
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function WhyChooseUs({ overline, heading, subheading, features, sideImages = [] }: WhyChooseUsProps) {
  return (
    <section className="bg-white py-[100px]">
      <div className="max-w-[1230px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
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

            <motion.div variants={stagger} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {features.map((feat, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="bg-[#f8f8ff] rounded-[10px] p-6"
                >
                  {feat.icon && (
                    <img src={feat.icon} alt="" className="w-10 h-10 mb-4" />
                  )}
                  <h3 className="text-[#27272e] font-semibold text-[1rem] mb-2">{feat.title}</h3>
                  <p className="text-[#7e7e7e] text-[0.9375rem] leading-relaxed">{feat.body}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: stacked images */}
          {sideImages.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="grid grid-cols-2 gap-4"
            >
              {sideImages.slice(0, 4).map((src, i) => (
                <div key={i} className={`rounded-[20px] overflow-hidden ${i === 0 ? 'col-span-2' : ''}`}>
                  <img src={src} alt="Healthcare" className="w-full h-48 object-cover" />
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
