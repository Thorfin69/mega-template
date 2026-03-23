import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const faqs = [
  {
    q: "How fast can you stop a levy or garnishment?",
    a: "In most cases, we can halt IRS collection activity within 24–72 hours of engaging our team. We immediately file the necessary power of attorney documents and contact the IRS on your behalf. Wage garnishments and bank levies can often be released the same week.",
  },
  {
    q: "What is an Offer in Compromise?",
    a: "An Offer in Compromise (OIC) is an IRS program that lets eligible taxpayers settle their entire tax debt for less than the full amount owed. Qualification depends on your income, assets, expenses, and future earning potential. We evaluate your case for free — most clients are surprised by how much they can reduce.",
  },
  {
    q: "I haven't filed in years. Can you still help?",
    a: "Absolutely. Unfiled returns are one of the most common situations we handle. We prepare and file all outstanding returns, negotiate any resulting balance, and bring you into compliance with the IRS — protecting you from criminal non-filing penalties in the process.",
  },
  {
    q: "Installment agreement vs. Offer in Compromise — which is better?",
    a: "An installment agreement lets you pay your full debt over time in manageable monthly payments. An Offer in Compromise settles the debt for a reduced lump sum — often pennies on the dollar. Which is right for you depends on your financial situation; we'll help you determine the best path during your free consultation.",
  },
  {
    q: "How much do your services cost?",
    a: "Our fees are based on the complexity of your case, not your total debt amount. We offer a free initial consultation with no obligations. After reviewing your situation, we provide a flat-fee quote — so you always know exactly what you're paying before we begin.",
  },
  {
    q: "Do I need representation or can I deal with the IRS myself?",
    a: "You have the right to represent yourself, but the IRS is a sophisticated institution with trained collection agents. Having an enrolled agent or tax attorney negotiating on your behalf typically results in significantly better outcomes. Our team handles all IRS communication so you never have to speak with them directly.",
  },
  {
    q: "How long does tax resolution take?",
    a: "Simpler cases — like penalty abatement or basic installment agreements — can be resolved in 2–6 weeks. More complex cases such as Offers in Compromise typically take 6–12 months, as the IRS has set processing timelines. We keep you informed at every stage.",
  },
  {
    q: "Do you handle state tax debt too?",
    a: "Yes. We handle IRS federal tax issues as well as state tax debt in all 50 states. State agencies often move faster than the IRS on collections, so if you've received a state notice, it's especially important to act quickly.",
  },
  {
    q: "What happens if I ignore an IRS notice?",
    a: "Ignoring an IRS notice escalates your situation rapidly. The IRS will proceed with levies, liens, and garnishments without further warning. Response deadlines are often 30 days or less. The sooner you act, the more resolution options you have available.",
  },
  {
    q: "Is my information kept confidential?",
    a: "Absolutely. All client information is protected under strict confidentiality standards. We never share your financial or personal details with third parties. Our team operates under the same legal confidentiality obligations as attorneys and CPAs.",
  },
];

const left = faqs.slice(0, 5);
const right = faqs.slice(5, 10);

function AccordionItem({ faq, index, open, onToggle }: { faq: { q: string; a: string }; index: number; open: boolean; onToggle: () => void }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
      }}
      className="border-b border-black/10 last:border-b-0"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-[24px] py-[24px] text-left group"
      >
        <span
          className={`font-['Geist:Light',sans-serif] text-[17px] leading-[26px] tracking-[-0.51px] transition-colors duration-300 ${
            open ? "text-[#00A4A4]" : "text-[#0b0b0b] group-hover:text-[#00A4A4]"
          }`}
        >
          {faq.q}
        </span>

        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`shrink-0 w-[32px] h-[32px] rounded-full border flex items-center justify-center transition-colors duration-300 ${
            open ? "bg-[#00A4A4] border-[#00A4A4]" : "bg-transparent border-black/15 group-hover:border-[#00A4A4]"
          }`}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 1v10M1 6h10" stroke={open ? "#fff" : "#6b7280"} strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="font-['Geist:Light',sans-serif] text-[15px] text-[#6b7280] leading-[24px] tracking-[-0.45px] pb-[24px]">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function STFAQ() {
  const [openLeft, setOpenLeft] = useState<number | null>(null);
  const [openRight, setOpenRight] = useState<number | null>(null);

  return (
    <section className="w-full bg-white py-[120px] border-t border-black/10">
      <div className="max-w-[1440px] mx-auto px-[130px] max-lg:px-[24px]">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-end justify-between mb-[60px] flex-wrap gap-[24px]"
        >
          <div>
            <p className="font-['Geist:Regular',sans-serif] text-[12px] text-[#6b7280] uppercase tracking-[2px] mb-[16px]">
              RESOURCES
            </p>
            <h2 className="font-['Geist:Light',sans-serif] text-[50px] max-lg:text-[34px] text-[#0b0b0b] leading-[55px] tracking-[-1.5px]">
              Frequently Asked<br />Questions
            </h2>
          </div>
          <a
            href="/contact"
            className="bg-[#00A4A4] px-[21px] py-[11px] rounded-[50px] font-['Geist:Regular',sans-serif] text-[14px] text-white uppercase tracking-[-0.42px] hover:bg-[#008585] transition-all active:scale-95"
          >
            Ask Us Directly
          </a>
        </motion.div>

        {/* Two-column accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] max-lg:gap-[0px]">

          {/* Left column */}
          <motion.div
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col border-t border-black/10"
          >
            {left.map((faq, i) => (
              <AccordionItem
                key={i}
                faq={faq}
                index={i}
                open={openLeft === i}
                onToggle={() => setOpenLeft(prev => (prev === i ? null : i))}
              />
            ))}
          </motion.div>

          {/* Right column */}
          <motion.div
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col border-t border-black/10 max-lg:mt-0"
          >
            {right.map((faq, i) => (
              <AccordionItem
                key={i}
                faq={faq}
                index={i}
                open={openRight === i}
                onToggle={() => setOpenRight(prev => (prev === i ? null : i))}
              />
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
