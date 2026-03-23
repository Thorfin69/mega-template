import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Link } from "react-router";
import { ArrowUpRight, Plus, Minus } from "lucide-react";
import { PaintStreak } from "./PaintStreak";

const HOME_FAQS = [
  {
    id: "01",
    question: "How long does the tax resolution process take?",
    answer:
      "The timeline depends on the complexity of your case. Simple resolutions can take 2–4 months, while complex Offer in Compromise cases may take 6–12 months. However, we take immediate action within 24–48 hours to stop active collections, levies, or garnishments.",
  },
  {
    id: "02",
    question: "Do I have to speak with the IRS myself?",
    answer:
      "No. Once you hire SympleTax, we file a Power of Attorney (Form 2848) with the IRS. This legally authorizes us to speak and negotiate on your behalf. You can stop taking their calls and let us handle all correspondence.",
  },
  {
    id: "03",
    question: "What is an Offer in Compromise (OIC)?",
    answer:
      "An Offer in Compromise is an IRS program that allows qualified taxpayers to settle their full tax debt for a fraction of what they owe. Qualification is based on your income, expenses, and asset equity. We have a strong track record of negotiating successful settlements.",
  },
  {
    id: "04",
    question: "Can you stop my wage garnishment immediately?",
    answer:
      "Yes. Wage garnishments and bank levies are often the most urgent problems. We can typically secure a release of levy within 24 to 48 hours of being retained, provided we can demonstrate a path toward resolution or financial hardship to the IRS.",
  },
  {
    id: "05",
    question: "What makes SympleTax different from other companies?",
    answer:
      "Unlike firms that rely on sales reps, every case at SympleTax is handled directly by a licensed Enrolled Agent or CPA. We offer transparent, flat-fee pricing and a results-first guarantee. We focus on measurable outcomes — not just paperwork.",
  },
];

export function HomeFAQ() {
  const [activeId, setActiveId] = useState<string>("01");

  return (
    <section className="bg-white py-[120px]">
      <div className="max-w-[1330px] mx-auto px-[70px]">
        <div className="flex flex-col lg:flex-row gap-[100px] items-start">

          {/* Left: Sticky heading */}
          <div className="lg:w-[420px] shrink-0 lg:sticky lg:top-[120px]">
            <div className="flex flex-col gap-[28px]">

              {/* Pill badge */}
              <div>
                <span
                  className="font-['Inter'] font-bold text-[#0f172a] border-[1.5px] border-[#0f172a] rounded-[50px] px-[16px] py-[7px] uppercase inline-block"
                  style={{ fontSize: "12px", letterSpacing: "0.07em" }}
                >
                  Common Questions
                </span>
              </div>

              {/* H2 with PaintStreak */}
              <h2
                className="font-['Outfit'] font-black text-[#0f172a] leading-[1.06]"
                style={{
                  fontSize: "clamp(36px, 4vw, 52px)",
                  letterSpacing: "-2px",
                  textWrap: "balance",
                }}
              >
                Everything About{" "}
                <PaintStreak color="teal">Tax Resolution</PaintStreak>
              </h2>

              <p
                className="font-['Inter'] font-normal text-[#475569] leading-[1.65]"
                style={{ fontSize: "16px", letterSpacing: "-0.3px", maxWidth: "360px" }}
              >
                Navigating the IRS can feel overwhelming. Here are the questions our clients ask most often.
              </p>

              {/* Teal circle blob decorative */}
              <div
                className="w-[180px] h-[180px] rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(0,164,164,0.12) 0%, rgba(0,164,164,0.04) 60%, transparent 100%)",
                  marginTop: "-10px",
                  marginLeft: "-20px",
                }}
                aria-hidden="true"
              />

              <div style={{ marginTop: "-80px" }}>
                <Link
                  to="/contact"
                  className="bg-[#00A4A4] hover:bg-[#007a7a] inline-flex items-center gap-[10px] rounded-full transition-transform hover:scale-[1.02] group"
                  style={{
                    paddingLeft: "28px",
                    paddingRight: "28px",
                    paddingTop: "15px",
                    paddingBottom: "15px",
                    boxShadow: "0 12px 36px rgba(0,164,164,0.30)",
                  }}
                >
                  <span className="font-['Outfit'] font-bold text-white" style={{ fontSize: "16px" }}>
                    Speak with an agent
                  </span>
                  <ArrowUpRight
                    className="text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    style={{ width: "18px", height: "18px" }}
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Right: FAQ Accordion */}
          <div className="flex-1 w-full flex flex-col" style={{ gap: "0px" }}>
            {HOME_FAQS.map((faq, idx) => {
              const isOpen = activeId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="overflow-hidden"
                  style={{
                    borderBottom: idx < HOME_FAQS.length - 1 ? "1.5px solid #e8e4dd" : "none",
                    borderLeft: isOpen ? "3px solid #00A4A4" : "3px solid transparent",
                    transition: "border-left-color 0.25s ease",
                  }}
                >
                  <button
                    onClick={() => setActiveId(faq.id)}
                    className="flex items-center gap-[20px] w-full text-left cursor-pointer group"
                    style={{
                      paddingTop: "26px",
                      paddingBottom: "26px",
                      paddingLeft: "24px",
                      paddingRight: "20px",
                    }}
                  >
                    <span
                      className="font-['Outfit'] font-black shrink-0"
                      style={{
                        fontSize: "13px",
                        letterSpacing: "0.05em",
                        color: isOpen ? "#00A4A4" : "#c4bfb5",
                        transition: "color 0.25s ease",
                        minWidth: "28px",
                      }}
                    >
                      {faq.id}
                    </span>
                    <span
                      className="font-['Outfit'] font-bold flex-grow"
                      style={{
                        fontSize: "18px",
                        letterSpacing: "-0.5px",
                        color: isOpen ? "#0f172a" : "#334155",
                        lineHeight: "1.3",
                        transition: "color 0.25s ease",
                      }}
                    >
                      {faq.question}
                    </span>
                    <div
                      className="shrink-0 flex items-center justify-center rounded-full transition-all duration-300"
                      style={{
                        width: "34px",
                        height: "34px",
                        background: isOpen ? "#00A4A4" : "#f5f1e8",
                        color: isOpen ? "#ffffff" : "#0f172a",
                        border: isOpen ? "none" : "1.5px solid #ddd8cf",
                      }}
                    >
                      {isOpen ? (
                        <Minus style={{ width: "15px", height: "15px" }} />
                      ) : (
                        <Plus style={{ width: "15px", height: "15px" }} />
                      )}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key={faq.id}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                      >
                        <div
                          style={{
                            paddingLeft: "72px",
                            paddingRight: "54px",
                            paddingBottom: "28px",
                          }}
                        >
                          <p
                            className="font-['Inter'] font-normal text-[#475569] leading-[1.7]"
                            style={{ fontSize: "16px", letterSpacing: "-0.3px", maxWidth: "640px" }}
                          >
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
