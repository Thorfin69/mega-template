import { motion } from 'motion/react';

interface LoanType {
  title: string;
  description: string;
  tags: string[];
  ctaLabel: string;
  ctaHref: string;
}

interface LoanTypesProps {
  overline: string;
  heading: string;
  body: string;
  loanTypes: LoanType[];
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function LoanTypes({ overline, heading, body, loanTypes }: LoanTypesProps) {
  return (
    <section className="bg-[#f8f9fb] py-20 lg:py-28" id="loans">
      <div className="max-w-7xl mx-auto px-4 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#f7b433] text-sm font-bold uppercase tracking-widest mb-3">
            {overline}
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1a1a2e] mb-4">{heading}</h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">{body}</p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {loanTypes.map((loan) => (
            <motion.div
              key={loan.title}
              variants={fadeUp}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col"
            >
              <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">{loan.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">{loan.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {loan.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-[#f7b433]/10 text-[#9a6e00] font-medium px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={loan.ctaHref}
                className="inline-flex items-center gap-2 bg-[#1a1a2e] text-white text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-[#f7b433] hover:text-[#1a1a2e] transition-colors self-start"
              >
                {loan.ctaLabel}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 25" fill="none">
                  <path
                    d="M11.293 17.793L12.707 19.207L19.414 12.5L12.707 5.793L11.293 7.207L15.586 11.5H6V13.5H15.586L11.293 17.793Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
