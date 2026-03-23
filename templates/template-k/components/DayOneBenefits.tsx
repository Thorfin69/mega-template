import { motion } from 'motion/react';

interface BenefitCard {
  title: string;
  body?: string;
  icon?: string;
}

interface DayOneBenefitsProps {
  heading: string;
  subheading: string;
  cards: BenefitCard[];
  image?: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function DayOneBenefits({ heading, subheading, cards, image }: DayOneBenefitsProps) {
  return (
    <section className="bg-[#27272e] py-[100px]">
      {/* Thin separator */}
      <div className="max-w-[1230px] mx-auto px-4 mb-16">
        <div className="h-px bg-white/10" />
      </div>

      <div className="max-w-[1230px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: image */}
          {image && (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="rounded-[25px] overflow-hidden"
            >
              <img src={image} alt="Day 1 benefits" className="w-full h-[500px] object-cover" />
            </motion.div>
          )}

          {/* Right: heading + 2x2 grid */}
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

            <motion.div variants={stagger} className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {cards.map((card, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="bg-[#313139] rounded-[10px] p-6"
                >
                  {card.icon && (
                    <img src={card.icon} alt="" className="w-8 h-8 mb-3" />
                  )}
                  <h3 className="text-white font-semibold text-[1rem] mb-2">{card.title}</h3>
                  {card.body && (
                    <p className="text-[#b8b8bd] text-[0.875rem] leading-relaxed">{card.body}</p>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
