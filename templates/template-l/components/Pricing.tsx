import { useState } from 'react';
import { motion } from 'motion/react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

interface PlanFeature {
  label: string;
  included: boolean;
}

interface Plan {
  icon: string;
  name: string;
  monthlyPrice: string;
  yearlyPrice: string;
  description: string;
  features: PlanFeature[];
  ctaLabel: string;
  ctaHref: string;
  featured?: boolean;
  featuredLabel?: string;
}

interface PricingProps {
  overline: string;
  heading: string;
  subheading: string;
  plans: Plan[];
  crownIcon: string;
}

export default function Pricing({ overline, heading, subheading, plans, crownIcon }: PricingProps) {
  const [yearly, setYearly] = useState(false);

  return (
    <section className="bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p variants={fadeUp} className="text-[#027DFC] text-sm font-semibold uppercase tracking-widest mb-3">
            {overline}
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-[2rem] lg:text-[2.5rem] font-bold text-[#27313D] leading-tight mb-4">
            {heading}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#6B7280] text-base max-w-[520px] mx-auto leading-relaxed mb-8">
            {subheading}
          </motion.p>

          {/* Toggle */}
          <motion.div variants={fadeUp} className="inline-flex items-center gap-3 bg-[#F3F4F6] rounded-full p-1">
            <button
              onClick={() => setYearly(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${!yearly ? 'bg-white text-[#27313D] shadow-sm' : 'text-[#6B7280]'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${yearly ? 'bg-white text-[#27313D] shadow-sm' : 'text-[#6B7280]'}`}
            >
              Yearly
              <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full">Save 10%</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Plans */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeUp}
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.featured
                  ? 'bg-[#27313D] border-2 border-[#027DFC] shadow-[0_8px_40px_rgba(2,125,252,0.25)]'
                  : 'bg-white border border-[#E5E7EB] shadow-sm'
              }`}
            >
              {/* Featured label */}
              {plan.featured && plan.featuredLabel && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-[#027DFC] text-white text-xs font-semibold px-4 py-1 rounded-full">
                  <img src={crownIcon} alt="" className="w-3.5 h-3.5 brightness-[100] invert" />
                  {plan.featuredLabel}
                </div>
              )}

              {/* Plan icon + name */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${plan.featured ? 'bg-white/10' : 'bg-blue-50'}`}>
                  <img src={plan.icon} alt="" className={`w-5 h-5 object-contain ${plan.featured ? 'brightness-[100] invert' : ''}`} />
                </div>
                <span className={`font-bold text-base ${plan.featured ? 'text-white' : 'text-[#27313D]'}`}>{plan.name}</span>
              </div>

              {/* Price */}
              <div className="mb-2">
                {plan.monthlyPrice === 'Custom' ? (
                  <div className={`text-[2.5rem] font-bold leading-none ${plan.featured ? 'text-white' : 'text-[#27313D]'}`}>
                    Custom
                  </div>
                ) : (
                  <div className="flex items-end gap-1">
                    <span className={`text-[2.5rem] font-bold leading-none ${plan.featured ? 'text-white' : 'text-[#27313D]'}`}>
                      ${yearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className={`text-sm mb-1.5 ${plan.featured ? 'text-white/60' : 'text-[#9CA3AF]'}`}>/mo</span>
                  </div>
                )}
              </div>

              <p className={`text-sm leading-relaxed mb-7 ${plan.featured ? 'text-white/70' : 'text-[#6B7280]'}`}>
                {plan.description}
              </p>

              {/* CTA */}
              <a
                href={plan.ctaHref}
                className={`inline-flex items-center justify-center w-full py-3 rounded-full font-semibold text-sm mb-8 transition-colors ${
                  plan.featured
                    ? 'bg-[#027DFC] text-white hover:bg-[#0268d4]'
                    : 'border border-[#027DFC] text-[#027DFC] hover:bg-[#027DFC] hover:text-white'
                }`}
              >
                {plan.ctaLabel}
              </a>

              {/* Feature list */}
              <div className="flex flex-col gap-3">
                {plan.features.map((f) => (
                  <div key={f.label} className="flex items-start gap-3">
                    <div className={`flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center mt-0.5 ${
                      f.included
                        ? 'bg-[#027DFC]/10'
                        : 'bg-gray-100'
                    }`}>
                      {f.included ? (
                        <svg className="w-2.5 h-2.5 text-[#027DFC]" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : (
                        <svg className="w-2.5 h-2.5 text-gray-400" viewBox="0 0 12 12" fill="none">
                          <path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      )}
                    </div>
                    <span className={`text-xs leading-relaxed ${
                      f.included
                        ? plan.featured ? 'text-white/80' : 'text-[#374151]'
                        : 'text-[#9CA3AF] line-through'
                    }`}>
                      {f.label}
                    </span>
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
