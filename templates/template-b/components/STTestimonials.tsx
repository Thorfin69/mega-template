import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";

const testimonials = [
  { quote: "I owed the IRS over $87,000 and couldn't sleep at night. SympleTax settled my debt for $6,200. I honestly didn't believe it was possible.", name: "Marcus T.", role: "Small Business Owner", location: "Los Angeles, CA", result: "Saved 93%" },
  { quote: "Three years of unfiled returns and I was terrified. They handled everything — filed my returns, negotiated a payment plan, and the IRS stopped calling.", name: "Jennifer R.", role: "Nurse", location: "Houston, TX", result: "All Returns Filed" },
  { quote: "My wages were being garnished at 65%. Within two weeks of hiring SympleTax, the garnishment was fully released. Life-changing doesn't cover it.", name: "David K.", role: "Construction Worker", location: "Chicago, IL", result: "Garnishment Released" },
  { quote: "The IRS placed a lien on my home right before I was going to refinance. SympleTax got it discharged in 30 days. Closed on time.", name: "Sandra M.", role: "Homeowner", location: "Miami, FL", result: "Lien Discharged" },
  { quote: "I was skeptical after bad experiences elsewhere. SympleTax reduced my $210K debt to $18K through an Offer in Compromise. Worth every penny.", name: "Robert L.", role: "Retired Teacher", location: "Dallas, TX", result: "$210K → $18K" },
];

export function STTestimonials() {
  const [idx, setIdx] = useState(0);
  const t = testimonials[idx];

  return (
    <section className="w-full bg-white py-[120px] border-t border-black/10">
      <div className="max-w-[1440px] mx-auto px-[130px] max-lg:px-[24px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-[16px] overflow-hidden border border-black/10">

          {/* LEFT — Green box with quote icon (Nomad Pattern F) */}
          <div className="bg-[#00A4A4] p-[60px] max-lg:p-[36px] flex flex-col justify-between">
            <div>
              <Quote size={48} className="text-white/30 mb-[32px]" />
              <h2 className="font-['Geist:Light',sans-serif] text-[42px] max-lg:text-[28px] text-white leading-[50px] max-lg:leading-[34px] tracking-[-1.26px] mb-[32px]">
                Our clients speak<br />for themselves.
              </h2>
              <p className="font-['Geist:Light',sans-serif] text-[16px] text-white/70 leading-[24px] tracking-[-0.48px]">
                Over 2,400 resolved cases. 98% satisfaction rate. Read what real clients say about working with SympleTax.
              </p>
            </div>

            {/* Nav buttons — Nomad 65px style */}
            <div className="mt-[48px] flex items-center gap-[12px]">
              <button
                onClick={() => setIdx(i => (i - 1 + testimonials.length) % testimonials.length)}
                className="w-[65px] h-[65px] rounded-full border border-white/30 flex items-center justify-center text-white/60 hover:text-white hover:border-white/60 transition-all"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                onClick={() => setIdx(i => (i + 1) % testimonials.length)}
                className="w-[65px] h-[65px] rounded-full border border-white/30 flex items-center justify-center text-white/60 hover:text-white hover:border-white/60 transition-all"
              >
                <ArrowRight size={18} />
              </button>
              <span className="font-['Geist:Light',sans-serif] text-[14px] text-white/50 tracking-[-0.42px] ml-[8px]">
                {idx + 1} / {testimonials.length}
              </span>
            </div>
          </div>

          {/* RIGHT — Carousel testimonial cards */}
          <div className="bg-[rgba(0,0,0,0.02)] p-[60px] max-lg:p-[36px] flex flex-col justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {/* Stars */}
                <div className="flex gap-[4px] mb-[28px]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-[#f59e0b] fill-[#f59e0b]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="font-['Geist:Light',sans-serif] text-[24px] max-lg:text-[20px] text-[#0b0b0b] leading-[34px] max-lg:leading-[28px] tracking-[-0.72px] mb-[40px]">
                  "{t.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-between flex-wrap gap-[16px]">
                  <div>
                    <p className="font-['Geist:Regular',sans-serif] text-[16px] text-[#0b0b0b] tracking-[-0.48px]">{t.name}</p>
                    <p className="font-['Geist:Light',sans-serif] text-[14px] text-[#6b7280] tracking-[-0.42px]">{t.role} · {t.location}</p>
                  </div>
                  <span className="bg-[#00A4A4] rounded-[50px] px-[16px] py-[8px] font-['Geist:Regular',sans-serif] text-[12px] text-white uppercase tracking-[-0.36px]">
                    {t.result}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
