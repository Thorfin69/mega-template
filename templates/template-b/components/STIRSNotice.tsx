import React from "react";
import { motion } from "motion/react";
import { AlertTriangle, ChevronRight } from "lucide-react";

const notices = ["CP14 — Balance Due", "CP2000 — Proposed Changes", "CP504 — Intent to Levy", "Letter 1058 — Final Notice", "Notice of Deficiency", "CP90 — Intent to Seize"];

export function STIRSNotice() {
  return (
    <section className="w-full border-t border-black/10">
      <div className="max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* LEFT — green bg, copy + CTA (Nomad Pattern H) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-white px-[80px] max-lg:px-[32px] py-[120px] flex flex-col justify-center border-r border-black/10"
        >
          <div className="flex items-center gap-[10px] mb-[24px]">
            <AlertTriangle size={16} className="text-[#00A4A4]" />
            <p className="font-['Geist:Regular',sans-serif] text-[12px] text-[#6b7280] uppercase tracking-[2px]">IRS NOTICE RECEIVED?</p>
          </div>

          <h2 className="font-['Geist:Light',sans-serif] text-[50px] max-lg:text-[34px] text-[#0b0b0b] leading-[55px] max-lg:leading-[40px] tracking-[-1.5px] mb-[20px]">
            Don't Ignore<br />That IRS Letter
          </h2>

          <p className="font-['Geist:Light',sans-serif] text-[18px] text-[#6b7280] leading-[27px] tracking-[-0.54px] mb-[40px]">
            An IRS notice is a time-sensitive legal document. Ignoring it escalates penalties, triggers levies, and limits your options. Our team responds within 24 hours.
          </p>

          {/* Notice type pills */}
          <div className="grid grid-cols-2 gap-[8px] mb-[48px]">
            {notices.map((n, i) => (
              <div key={i} className="bg-[#f9fafb] rounded-[8px] px-[14px] py-[10px] border border-black/10">
                <span className="font-['Geist:Regular',sans-serif] text-[12px] text-[#374151] tracking-[-0.36px]">{n}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-[20px] flex-wrap">
            <a href="/contact" className="bg-[#00A4A4] px-[21px] py-[11px] rounded-[50px] font-['Geist:Regular',sans-serif] text-[14px] text-white uppercase tracking-[-0.42px] hover:bg-[#008585] transition-all active:scale-95">
              Get Help Now
            </a>
            <button className="flex items-center gap-[6px] font-['Geist:Regular',sans-serif] text-[14px] text-[#6b7280] uppercase tracking-[-0.42px] hover:text-[#0b0b0b] transition-colors">
              View All Notices <ChevronRight size={14} />
            </button>
          </div>
        </motion.div>

        {/* RIGHT — image with teal overlay */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="relative min-h-[600px] max-lg:min-h-[400px]"
        >
          <img
            src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=900&q=80"
            alt="IRS documents"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#00A4A4]/40" />
          <div className="absolute inset-0 bg-black/30" />

          {/* Mock IRS notice card */}
          <div className="absolute inset-0 flex items-center justify-center p-[40px]">
            <div className="bg-white rounded-[16px] p-[40px] shadow-2xl w-full max-w-[320px] text-center">
              <div className="w-[60px] h-[60px] rounded-full bg-[rgba(0,0,0,0.06)] border-2 border-black/10 flex items-center justify-center mx-auto mb-[16px]">
                <span className="font-['Geist:Regular',sans-serif] text-[10px] text-[#6b7280] uppercase tracking-[1px]">IRS</span>
              </div>
              <p className="font-['Geist:Light',sans-serif] text-[12px] text-[#6b7280] uppercase tracking-[2px] mb-[16px]">Internal Revenue Service</p>
              <p className="font-['Geist:Regular',sans-serif] text-[22px] text-[#0b0b0b] tracking-[-0.66px] mb-[4px]">Notice CP14</p>
              <p className="font-['Geist:Light',sans-serif] text-[13px] text-[#6b7280] mb-[20px]">Balance Due</p>
              <p className="font-['Geist:Light',sans-serif] text-[52px] text-[#0b0b0b] tracking-[-1.56px] leading-[1] mb-[4px]">$47,382</p>
              <p className="font-['Geist:Light',sans-serif] text-[12px] text-[#6b7280] uppercase tracking-[1px] mb-[24px]">Total Amount Due</p>
              <div className="border-t border-black/10 pt-[20px]">
                <div className="bg-red-50 text-red-600 rounded-[50px] px-[14px] py-[8px] text-[12px] font-['Geist:Regular',sans-serif] uppercase tracking-[-0.36px] inline-flex items-center gap-[6px]">
                  <AlertTriangle size={12} />
                  Response Required: 30 Days
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
      </div>
    </section>
  );
}
