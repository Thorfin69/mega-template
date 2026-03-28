import { motion } from 'motion/react';

interface PricingFeatureGroup {
  title: string;
  items: string[];
}

interface PricingPlan {
  name: string;
  tagline: string;
  price: string;
  period: string;
  ctaLabel: string;
  ctaHref: string;
  highlight: boolean;
  featureGroups: PricingFeatureGroup[];
}

interface PricingProps {
  overline: string;
  heading: string;
  headingAccent: string;
  body: string;
  plans: PricingPlan[];
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Pricing({ overline, heading, headingAccent, body, plans }: PricingProps) {
  return (
    <section className="bg-[#0a0a14] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 lg:px-10">
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
            className="inline-block bg-[#3B5BDB]/20 text-[#7c94f5] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase"
          >
            {overline}
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-3xl lg:text-4xl font-bold text-white leading-snug mb-4"
          >
            {heading}{' '}
            <span className="text-[#3B5BDB]">{headingAccent}</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-400 text-base max-w-2xl mx-auto">
            {body}
          </motion.p>
        </motion.div>

        {/* Plans grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeUp}
              className={`relative rounded-2xl p-8 border transition-all ${
                plan.highlight
                  ? 'bg-[#3B5BDB] border-[#3B5BDB] shadow-2xl shadow-blue-900/40'
                  : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-amber-400 text-amber-900 text-xs font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan name & price */}
              <div className="mb-6">
                <h3 className={`text-xl font-bold mb-1 ${plan.highlight ? 'text-white' : 'text-white'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${plan.highlight ? 'text-blue-100' : 'text-gray-400'}`}>
                  {plan.tagline}
                </p>
                <div className="flex items-end gap-1">
                  <span className={`text-4xl font-bold ${plan.highlight ? 'text-white' : 'text-white'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm mb-1.5 ${plan.highlight ? 'text-blue-100' : 'text-gray-400'}`}>
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* CTA */}
              <a
                href={plan.ctaHref}
                className={`block text-center font-semibold px-6 py-3 rounded-lg mb-6 transition-colors ${
                  plan.highlight
                    ? 'bg-white text-[#3B5BDB] hover:bg-gray-100'
                    : 'bg-[#3B5BDB] text-white hover:bg-[#2f4ac4]'
                }`}
              >
                {plan.ctaLabel}
              </a>

              {/* Feature groups */}
              <div className="space-y-5">
                {plan.featureGroups.map((group) => (
                  <div key={group.title}>
                    <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${
                      plan.highlight ? 'text-blue-200' : 'text-gray-500'
                    }`}>
                      {group.title}
                    </p>
                    <ul className="space-y-2">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <svg
                            className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                              plan.highlight ? 'text-blue-200' : 'text-[#3B5BDB]'
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className={`text-sm ${plan.highlight ? 'text-blue-100' : 'text-gray-300'}`}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
