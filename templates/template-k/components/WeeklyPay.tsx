import { motion } from 'motion/react';

interface Benefit {
  title: string;
  body: string;
}

interface WeeklyPayProps {
  heading: string;
  subheading: string;
  benefits: Benefit[];
  image?: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function WeeklyPay({ heading, subheading, benefits, image }: WeeklyPayProps) {
  return (
    <section className="bg-[#27272e] py-[100px]">
      {/* Thin separator */}
      <div className="max-w-[1230px] mx-auto px-4 mb-16">
        <div className="h-px bg-white/10" />
      </div>

      <div className="max-w-[1230px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2
              variants={fadeUp}
              className="text-white font-bold mb-4"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', lineHeight: 1.2 }}
            >
              {heading}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#b8b8bd] text-[1rem] mb-10 leading-relaxed">
              {subheading}
            </motion.p>

            <motion.div variants={stagger} className="flex flex-col gap-6">
              {benefits.map((ben, i) => (
                <motion.div key={i} variants={fadeUp} className="flex gap-4">
                  <div className="shrink-0 w-1 rounded-full bg-[#4da7aa]" />
                  <div>
                    <h3 className="text-white font-semibold text-[1.125rem] mb-2">{ben.title}</h3>
                    <p className="text-[#b8b8bd] text-[0.9375rem] leading-relaxed">{ben.body}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: image */}
          {image && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="rounded-[25px] overflow-hidden"
            >
              <img src={image} alt="Weekly pay" className="w-full h-[480px] object-cover" />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
