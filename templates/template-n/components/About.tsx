import { motion } from 'motion/react';

interface AboutProps {
  overline: string;
  heading: string;
  body: string;
  heroImage: string;
  heroImageAlt: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.14 } },
};

export default function About({ overline, heading, body, heroImage, heroImageAlt }: AboutProps) {
  return (
    <section className="bg-white py-20 lg:py-28" id="about">
      <div className="max-w-7xl mx-auto px-4 lg:px-12 grid lg:grid-cols-2 gap-14 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative"
        >
          <img
            src={heroImage}
            alt={heroImageAlt}
            className="w-full rounded-2xl object-cover shadow-xl max-h-[520px]"
          />
          {/* Accent badge */}
          <div
            className="absolute -bottom-5 -right-5 hidden lg:flex flex-col items-center justify-center w-28 h-28 rounded-full text-center shadow-lg"
            style={{ background: 'linear-gradient(135deg, #f7b433 0%, #e6a827 100%)' }}
          >
            <span className="text-[#1a1a2e] font-black text-xl leading-none">4.8</span>
            <span className="text-[#1a1a2e] text-xs font-semibold mt-0.5">out of 5 ★</span>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            variants={fadeUp}
            className="text-[#f7b433] text-sm font-bold uppercase tracking-widest mb-3"
          >
            {overline}
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl lg:text-4xl font-bold text-[#1a1a2e] leading-snug mb-5"
          >
            {heading}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-500 leading-relaxed mb-8">
            {body}
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <a
              href="https://tigerloans.com/#"
              className="inline-flex items-center gap-2 bg-[#1a1a2e] text-white font-semibold px-7 py-3.5 rounded-md hover:bg-[#f7b433] hover:text-[#1a1a2e] transition-colors"
            >
              Get Pre-Approved
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
