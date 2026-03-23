import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const tabs = [
  {
    id: "solution",
    label: "I Need a Solution",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=85",
    items: [
      {
        title: "Offer in Compromise",
        desc: "Settle your IRS debt for significantly less than the full amount owed. We prepare the complete application and negotiate directly with the IRS — most clients settle for pennies on the dollar.",
      },
      {
        title: "Installment Agreement",
        desc: "Set up manageable monthly payments that stop IRS collection action immediately. We negotiate the lowest possible payment amount based on your actual income and expenses.",
      },
      {
        title: "Currently Not Collectible",
        desc: "When you genuinely cannot afford to pay, we document your financial hardship and get the IRS to pause all collection activity — levies, garnishments, and notices — indefinitely.",
      },
      {
        title: "Penalty Abatement",
        desc: "Remove IRS penalties through First-Time Abatement or Reasonable Cause programs. In many cases this reduces your balance by 20–50% before we even negotiate the underlying tax debt.",
      },
      {
        title: "Tax Lien Withdrawal",
        desc: "Get federal tax liens removed from your property and credit report, restoring your ability to sell, refinance, or secure financing.",
      },
      {
        title: "Innocent Spouse Relief",
        desc: "Protect yourself from tax liability caused by a spouse's errors or omissions on jointly filed returns. You should not pay for mistakes that weren't yours.",
      },
    ],
  },
  {
    id: "problem",
    label: "I Have a Problem",
    img: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=900&q=85",
    items: [
      {
        title: "Mounting Penalties & Interest",
        desc: "IRS penalties and interest can more than double your original balance. Every day without action, the amount grows. We challenge illegitimate charges and stop the clock immediately.",
      },
      {
        title: "Threatening IRS Letters",
        desc: "Notices of levy, lien, and collection action are time-sensitive legal documents. Ignoring them eliminates your options fast. We respond within 24 hours and handle all IRS contact on your behalf.",
      },
      {
        title: "Frozen Bank Accounts",
        desc: "A bank levy can freeze your entire account without warning, leaving you unable to pay rent or buy groceries. We work immediately to release levies and establish a protective agreement.",
      },
      {
        title: "Paycheck Garnishment",
        desc: "The IRS can take up to 70% of your paycheck. We file emergency garnishment releases — most clients see relief within 24–48 hours of hiring us.",
      },
      {
        title: "Years of Unfiled Returns",
        desc: "Unfiled returns create compounding debt, phantom IRS assessments, and criminal exposure. We file all missing returns and negotiate the resulting liability down to the minimum possible.",
      },
    ],
  },
];

function AccordionItem({
  title,
  desc,
  isOpen,
  onToggle,
}: {
  title: string;
  desc: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      onClick={onToggle}
      className="border-b border-black/10 cursor-pointer"
    >
      <div className="flex items-center justify-between py-[22px] gap-[24px]">
        <span
          className={`font-['Geist:Regular',sans-serif] text-[17px] tracking-[-0.51px] transition-colors duration-200 ${
            isOpen ? "text-[#00A4A4]" : "text-[#0b0b0b]/70 hover:text-[#0b0b0b]"
          }`}
        >
          {title}
        </span>

        <div
          className={`shrink-0 w-[28px] h-[28px] rounded-full border flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? "border-[#00A4A4] bg-[#00A4A4]/10"
              : "border-black/15 bg-transparent"
          }`}
        >
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <line x1="6" y1="0" x2="6" y2="12" stroke={isOpen ? "#00A4A4" : "#6b7280"} strokeWidth="1.5" />
              <line x1="0" y1="6" x2="12" y2="6" stroke={isOpen ? "#00A4A4" : "#6b7280"} strokeWidth="1.5" />
            </svg>
          </motion.div>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
            className="overflow-hidden"
          >
            <p className="font-['Geist:Light',sans-serif] text-[15px] text-[#6b7280] leading-[24px] tracking-[-0.45px] pb-[22px] max-w-[480px]">
              {desc}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function STTwoTrack() {
  const [activeTab, setActiveTab] = useState(0);
  const [openItem, setOpenItem] = useState<number | null>(0);
  const tab = tabs[activeTab];

  const handleTabChange = (idx: number) => {
    setActiveTab(idx);
    setOpenItem(0);
  };

  return (
    <section className="w-full bg-white py-[120px] border-t border-black/10">
      <div className="max-w-[1440px] mx-auto px-[130px] max-lg:px-[24px]">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-[60px]"
        >
          <p className="font-['Geist:Regular',sans-serif] text-[12px] text-[#6b7280] uppercase tracking-[2px] mb-[20px]">
            HOW WE HELP
          </p>
          <h2 className="font-['Geist:Light',sans-serif] text-[50px] max-lg:text-[34px] text-[#0b0b0b] leading-[55px] max-lg:leading-[40px] tracking-[-1.5px] max-w-[640px]">
            Every IRS Problem Has a Path Forward
          </h2>
        </motion.div>

        {/* Tab toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="flex items-center gap-[4px] mb-[60px] p-[4px] bg-black/5 rounded-[50px] w-fit border border-black/10"
        >
          {tabs.map((t, i) => (
            <button
              key={t.id}
              onClick={() => handleTabChange(i)}
              className={`relative px-[28px] py-[12px] rounded-[50px] font-['Geist:Regular',sans-serif] text-[14px] uppercase tracking-[-0.42px] transition-colors duration-200 ${
                activeTab === i ? "text-white" : "text-[#6b7280] hover:text-[#0b0b0b]"
              }`}
            >
              {activeTab === i && (
                <motion.div
                  layoutId="tab-pill"
                  className="absolute inset-0 bg-[#00A4A4] rounded-[50px]"
                  transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
                />
              )}
              <span className="relative z-10">{t.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Content: image left + accordion right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[80px] items-start">

          {/* LEFT — image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="hidden lg:block relative rounded-[20px] overflow-hidden"
            style={{ height: "560px" }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={tab.id}
                src={tab.img}
                alt={tab.label}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-[#00A4A4]/10" />

            <div className="absolute bottom-[28px] left-[28px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="inline-block bg-white/15 backdrop-blur-sm border border-white/25 rounded-[50px] px-[16px] py-[8px] font-['Geist:Regular',sans-serif] text-[12px] text-white uppercase tracking-[1px]">
                    {activeTab === 0 ? "Tax Resolution Options" : "IRS Problems We Fix"}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* RIGHT — accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="border-t border-black/10" />
                {tab.items.map((item, i) => (
                  <AccordionItem
                    key={item.title}
                    title={item.title}
                    desc={item.desc}
                    isOpen={openItem === i}
                    onToggle={() => setOpenItem(openItem === i ? null : i)}
                  />
                ))}
              </motion.div>
            </AnimatePresence>

            <div className="mt-[40px]">
              <a
                href="/contact"
                className="bg-[#00A4A4] px-[21px] py-[11px] rounded-[50px] font-['Geist:Regular',sans-serif] text-[14px] text-white uppercase tracking-[-0.42px] hover:bg-[#008585] transition-all active:scale-95 inline-block"
              >
                {activeTab === 0 ? "Explore Your Options" : "Get Help Now"}
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
