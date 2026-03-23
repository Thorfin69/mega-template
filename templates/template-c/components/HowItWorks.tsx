import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ImageWithFallback } from "./ImageWithFallback";
import { PaintStreak } from "./PaintStreak";

const STEPS = [
  {
    id: "01",
    title: "Deep Collaboration",
    description:
      "We work as an extension of your team—immersing ourselves in your goals, challenges, and vision to ensure aligned outcomes. We believe great results come from working closely together.",
    features: ["Joint Strategy Sessions", "Dedicated Account Manager", "Transparent Communication"],
    image: "https://images.unsplash.com/photo-1560472355-536de3962603?w=900&h=600&fit=crop&q=80",
  },
  {
    id: "02",
    title: "Expertise",
    description:
      "Our team brings decades of combined experience in tax resolution, law, and accounting to every case. We provide the mastery needed for complex tax relief.",
    features: ["Enrolled Agent Oversight", "Tax Attorney Consultation", "CPA-Led Financial Reviews"],
    image: "https://images.unsplash.com/photo-1554224311-beee4686418d?w=900&h=600&fit=crop&q=80",
  },
  {
    id: "03",
    title: "Tailored Solutions",
    description:
      "No two tax cases are the same. We develop bespoke resolution paths that prioritize your financial stability and long-term peace of mind.",
    features: ["Custom Relief Roadmaps", "Asset Protection Focus", "Bespoke Negotiation Tactics"],
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=900&h=600&fit=crop&q=80",
  },
  {
    id: "04",
    title: "Impact",
    description:
      "Our focus is on measurable results—stopping collections, reducing liabilities, and giving you back your financial freedom and confidence.",
    features: ["IRS Debt Reduction", "Lien & Levy Removal", "Penalty Abatement Success"],
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&h=600&fit=crop&q=80",
  },
];

export function HowItWorks() {
  const [activeTab, setActiveTab] = useState<string>("01");

  return (
    <section className="py-[120px]" style={{ backgroundColor: "#f5f1e8" }}>
      <div className="max-w-[1330px] mx-auto px-[70px]">

        {/* Section Header */}
        <div className="flex flex-col gap-[24px] mb-[72px]">
          {/* Pill Badge */}
          <div>
            <span
              className="font-['Inter'] font-bold uppercase text-[#0f172a] border-[1.5px] border-[#0f172a] rounded-[50px] px-[16px] py-[7px] inline-block"
              style={{ fontSize: "12px", letterSpacing: "0.08em" }}
            >
              Our Approach
            </span>
          </div>

          <div className="flex items-end justify-between gap-[48px]">
            <h2
              className="font-['Outfit'] font-black text-[#0f172a] leading-[1.05]"
              style={{
                fontSize: "clamp(36px, 4.5vw, 60px)",
                letterSpacing: "-2px",
              }}
            >
              How We Deliver{" "}
              <PaintStreak color="pink">
                <span className="text-[#0f172a]">Results</span>
              </PaintStreak>
            </h2>
            <p
              className="font-['Inter'] font-normal text-[#475569] leading-[1.65] shrink-0 max-w-[380px] text-right"
              style={{ fontSize: "16px", letterSpacing: "-0.3px" }}
            >
              Every case is different. Our process is built around deep expertise, transparent communication, and measurable outcomes for every client we serve.
            </p>
          </div>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-[40px] items-stretch">

          {/* Left: Crossfading image + step indicator */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-[50%] min-h-[452px] relative rounded-[12px] overflow-hidden"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <ImageWithFallback
                  src={STEPS.find((s) => s.id === activeTab)!.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#0f172a]/40" />
              </motion.div>
            </AnimatePresence>

            {/* Step counter — bottom-left overlay */}
            <div className="absolute bottom-[24px] left-[24px] right-[24px] z-10 flex items-end justify-between">
              {/* Current step label */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-[4px]"
                >
                  <span className="font-['Inter'] text-white/60" style={{ fontSize: "12px", letterSpacing: "0.08em" }}>
                    STEP
                  </span>
                  <span className="font-['Outfit'] font-black text-white" style={{ fontSize: "36px", letterSpacing: "-1px", lineHeight: 1 }}>
                    {activeTab}
                    <span className="font-['Inter'] font-normal text-white/50" style={{ fontSize: "16px", letterSpacing: "0" }}>
                      {" "}/ {String(STEPS.length).padStart(2, "0")}
                    </span>
                  </span>
                  <span className="font-['Outfit'] font-semibold text-white" style={{ fontSize: "16px" }}>
                    {STEPS.find((s) => s.id === activeTab)!.title}
                  </span>
                </motion.div>
              </AnimatePresence>

              {/* Progress dots */}
              <div className="flex items-center gap-[8px]">
                {STEPS.map((step) => (
                  <button
                    key={step.id}
                    onClick={() => setActiveTab(step.id)}
                    className="transition-all duration-300"
                    style={{
                      width: activeTab === step.id ? "28px" : "8px",
                      height: "8px",
                      borderRadius: "4px",
                      backgroundColor: activeTab === step.id ? "#00A4A4" : "rgba(255,255,255,0.4)",
                    }}
                    aria-label={`Go to step ${step.id}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Accordion */}
          <div className="lg:w-[50%] flex flex-col shrink-0">
            <div
              className="rounded-[16px] overflow-hidden divide-y divide-slate-100"
              style={{
                background: "white",
                boxShadow: "0 8px_32px rgba(0,0,0,0.08)",
              }}
            >
              {STEPS.map((step) => {
                const isOpen = activeTab === step.id;
                return (
                  <div
                    key={step.id}
                    className="transition-colors duration-300"
                    style={{
                      borderLeft: isOpen ? "4px solid #00A4A4" : "4px solid transparent",
                      backgroundColor: isOpen ? "rgba(0,164,164,0.03)" : "white",
                    }}
                  >
                    <button
                      onClick={() => setActiveTab(step.id)}
                      className="flex items-center gap-[20px] w-full text-left px-[28px] py-[22px] group"
                    >
                      {/* Step number */}
                      <span
                        className="font-['Outfit'] font-black shrink-0 w-[44px] leading-none transition-colors duration-300"
                        style={{
                          fontSize: "32px",
                          letterSpacing: "-1px",
                          color: isOpen ? "#00A4A4" : "#e2e8f0",
                        }}
                      >
                        {step.id}
                      </span>

                      {/* Title */}
                      <span
                        className="font-['Outfit'] font-bold flex-1 transition-colors duration-300"
                        style={{
                          fontSize: "20px",
                          letterSpacing: "-0.4px",
                          color: isOpen ? "#0f172a" : "#94a3b8",
                        }}
                      >
                        {step.title}
                      </span>

                      {/* Chevron */}
                      <div
                        className="shrink-0 w-[36px] h-[36px] rounded-full flex items-center justify-center transition-all duration-300"
                        style={{
                          backgroundColor: isOpen ? "#00A4A4" : "#f1f5f9",
                          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        }}
                      >
                        <svg width="12" height="7" viewBox="0 0 12 7" fill="none">
                          <path
                            d="M1 1L6 6L11 1"
                            stroke={isOpen ? "white" : "#94a3b8"}
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                          className="overflow-hidden"
                        >
                          <div
                            className="pb-[24px]"
                            style={{ paddingLeft: "calc(28px + 44px + 20px)", paddingRight: "28px" }}
                          >
                            <p
                              className="font-['Inter'] font-normal text-[#475569] leading-[1.7] mb-[16px]"
                              style={{ fontSize: "15px", letterSpacing: "-0.2px" }}
                            >
                              {step.description}
                            </p>
                            {/* Feature pills */}
                            <div className="flex flex-wrap gap-[8px]">
                              {step.features.map((f) => (
                                <span
                                  key={f}
                                  className="inline-flex items-center gap-[6px] px-[12px] py-[6px] rounded-full font-['Inter'] font-medium text-[#0f172a]"
                                  style={{
                                    fontSize: "12px",
                                    backgroundColor: "#f5f1e8",
                                    border: "1px solid rgba(0,164,164,0.2)",
                                  }}
                                >
                                  <span
                                    className="rounded-full shrink-0"
                                    style={{
                                      width: "6px",
                                      height: "6px",
                                      backgroundColor: "#00A4A4",
                                    }}
                                  />
                                  {f}
                                </span>
                              ))}
                            </div>
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
      </div>
    </section>
  );
}
