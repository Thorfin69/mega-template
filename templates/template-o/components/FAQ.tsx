import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  overline: string;
  heading: string;
  headingAccent: string;
  items: FAQItem[];
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

function FAQAccordion({ question, answer }: FAQItem) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-white/10 rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-white/5 transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-white font-semibold text-sm lg:text-base">{question}</span>
        <span
          className={`flex-shrink-0 w-6 h-6 rounded-full border border-white/20 flex items-center justify-center transition-transform ${
            open ? 'rotate-45' : ''
          }`}
        >
          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 text-gray-400 text-sm leading-relaxed border-t border-white/10 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ({ overline, heading, headingAccent, items }: FAQProps) {
  return (
    <section className="bg-[#0a0a14] py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-4 lg:px-10">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block bg-[#3B5BDB]/20 text-[#7c94f5] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase"
          >
            {overline}
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-3xl lg:text-4xl font-bold text-white leading-snug"
          >
            {heading}{' '}
            <span className="text-[#3B5BDB]">{headingAccent}</span>
          </motion.h2>
        </motion.div>

        {/* Accordion items */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-3"
        >
          {items.map((item) => (
            <motion.div key={item.question} variants={fadeUp}>
              <FAQAccordion question={item.question} answer={item.answer} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
