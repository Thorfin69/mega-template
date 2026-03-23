import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, Clock, DollarSign } from "lucide-react";

const trust = [
  { Icon: ShieldCheck, label: "100% Confidential" },
  { Icon: Clock, label: "24-Hour Response" },
  { Icon: DollarSign, label: "No Upfront Fees" },
];

export function STCTA() {
  const [form, setForm] = useState({ firstName: "", lastName: "", phone: "", email: "", problem: "", details: "" });

  return (
    <section className="w-full bg-[#F7F9FF] border-t border-black/10">
      <div className="max-w-[1440px] mx-auto px-[130px] max-lg:px-[24px] py-[120px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[80px] items-center">

          {/* LEFT — headline + trust */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="font-['Geist:Regular',sans-serif] text-[12px] text-[#00A4A4] uppercase tracking-[2px] mb-[24px]">
              FREE CONSULTATION
            </p>
            <h2 className="font-['Geist:Light',sans-serif] text-[60px] max-lg:text-[40px] text-[#0b0b0b] leading-[66px] max-lg:leading-[46px] tracking-[-1.8px] mb-[24px]">
              Stop Dealing<br />with the IRS<br /><span className="text-[#00A4A4]">Alone.</span>
            </h2>
            <p className="font-['Geist:Light',sans-serif] text-[18px] text-[#6b7280] leading-[28px] tracking-[-0.54px] mb-[48px] max-w-[440px]">
              Over 2,400 clients have resolved their IRS debt with SympleTax. One call is all it takes to see your options.
            </p>

            {/* Trust items */}
            <div className="flex flex-col gap-[16px]">
              {trust.map(({ Icon, label }, i) => (
                <div key={i} className="flex items-center gap-[12px]">
                  <div className="w-[32px] h-[32px] rounded-full bg-[#00A4A4]/10 flex items-center justify-center shrink-0">
                    <Icon size={14} className="text-[#00A4A4]" strokeWidth={1.5} />
                  </div>
                  <span className="font-['Geist:Regular',sans-serif] text-[14px] text-[#6b7280] tracking-[-0.42px]">{label}</span>
                </div>
              ))}
            </div>

            <div className="mt-[48px] border-t border-black/10 pt-[40px]">
              <p className="font-['Geist:Light',sans-serif] text-[13px] text-[#9ca3af] uppercase tracking-[1px] mb-[8px]">Prefer to call?</p>
              <a
                href="tel:19492873015"
                className="font-['Geist:Light',sans-serif] text-[28px] text-[#0b0b0b] tracking-[-0.84px] hover:text-[#00A4A4] transition-colors"
              >
                (949) 287-3015
              </a>
            </div>
          </motion.div>

          {/* RIGHT — clean form card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          >
            <div className="bg-[#f4f6f4] rounded-[20px] p-[48px] max-lg:p-[32px] border border-black/8">
              <p className="font-['Geist:Regular',sans-serif] text-[13px] text-[#6b7280] uppercase tracking-[1.5px] mb-[8px]">Get Your Free Case Review</p>
              <h3 className="font-['Geist:Light',sans-serif] text-[28px] text-[#0b0b0b] tracking-[-0.84px] leading-[34px] mb-[32px]">
                See what your resolution options look like — for free.
              </h3>

              <div className="flex flex-col gap-[12px]">

                {/* Row 1: First + Last name */}
                <div className="grid grid-cols-2 gap-[12px]">
                  <div>
                    <label className="font-['Geist:Regular',sans-serif] text-[11px] text-[#6b7280] uppercase tracking-[1px] mb-[6px] block">First Name</label>
                    <input
                      type="text"
                      placeholder="John"
                      value={form.firstName}
                      onChange={e => setForm(f => ({ ...f, firstName: e.target.value }))}
                      className="w-full bg-white border border-black/10 rounded-[10px] px-[14px] py-[12px] font-['Geist:Light',sans-serif] text-[14px] text-[#0b0b0b] placeholder:text-[#9ca3af] outline-none focus:border-[#00A4A4] transition-all"
                    />
                  </div>
                  <div>
                    <label className="font-['Geist:Regular',sans-serif] text-[11px] text-[#6b7280] uppercase tracking-[1px] mb-[6px] block">Last Name</label>
                    <input
                      type="text"
                      placeholder="Smith"
                      value={form.lastName}
                      onChange={e => setForm(f => ({ ...f, lastName: e.target.value }))}
                      className="w-full bg-white border border-black/10 rounded-[10px] px-[14px] py-[12px] font-['Geist:Light',sans-serif] text-[14px] text-[#0b0b0b] placeholder:text-[#9ca3af] outline-none focus:border-[#00A4A4] transition-all"
                    />
                  </div>
                </div>

                {/* Row 2: Phone + Email */}
                <div className="grid grid-cols-2 gap-[12px]">
                  <div>
                    <label className="font-['Geist:Regular',sans-serif] text-[11px] text-[#6b7280] uppercase tracking-[1px] mb-[6px] block">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="(555) 000-0000"
                      value={form.phone}
                      onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                      className="w-full bg-white border border-black/10 rounded-[10px] px-[14px] py-[12px] font-['Geist:Light',sans-serif] text-[14px] text-[#0b0b0b] placeholder:text-[#9ca3af] outline-none focus:border-[#00A4A4] transition-all"
                    />
                  </div>
                  <div>
                    <label className="font-['Geist:Regular',sans-serif] text-[11px] text-[#6b7280] uppercase tracking-[1px] mb-[6px] block">Email Address</label>
                    <input
                      type="email"
                      placeholder="john@email.com"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      className="w-full bg-white border border-black/10 rounded-[10px] px-[14px] py-[12px] font-['Geist:Light',sans-serif] text-[14px] text-[#0b0b0b] placeholder:text-[#9ca3af] outline-none focus:border-[#00A4A4] transition-all"
                    />
                  </div>
                </div>

                {/* Row 3: Tax Problem */}
                <div>
                  <label className="font-['Geist:Regular',sans-serif] text-[11px] text-[#6b7280] uppercase tracking-[1px] mb-[6px] block">Tax Problem</label>
                  <select
                    value={form.problem}
                    onChange={e => setForm(f => ({ ...f, problem: e.target.value }))}
                    className="w-full bg-white border border-black/10 rounded-[10px] px-[14px] py-[12px] font-['Geist:Light',sans-serif] text-[14px] text-[#0b0b0b] outline-none focus:border-[#00A4A4] transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select your situation</option>
                    <option>IRS Back Taxes / Balance Due</option>
                    <option>Wage Garnishment</option>
                    <option>Bank Levy</option>
                    <option>Tax Lien</option>
                    <option>Unfiled Tax Returns</option>
                    <option>IRS Audit</option>
                    <option>Penalty & Interest</option>
                    <option>Offer in Compromise</option>
                    <option>Other / Not Sure</option>
                  </select>
                </div>

                {/* Row 4: Additional Details */}
                <div>
                  <label className="font-['Geist:Regular',sans-serif] text-[11px] text-[#6b7280] uppercase tracking-[1px] mb-[6px] block">Additional Details</label>
                  <textarea
                    placeholder="Brief description of your situation, approximate amount owed, any IRS notices received…"
                    value={form.details}
                    onChange={e => setForm(f => ({ ...f, details: e.target.value }))}
                    rows={3}
                    className="w-full bg-white border border-black/10 rounded-[10px] px-[14px] py-[12px] font-['Geist:Light',sans-serif] text-[14px] text-[#0b0b0b] placeholder:text-[#9ca3af] outline-none focus:border-[#00A4A4] transition-all resize-none"
                  />
                </div>

                {/* Submit */}
                <button className="w-full bg-[#00A4A4] text-white font-['Geist:Regular',sans-serif] text-[14px] uppercase tracking-[-0.42px] rounded-[50px] py-[15px] mt-[4px] hover:bg-[#008585] transition-all active:scale-[0.98] flex items-center justify-center gap-[8px] group">
                  Get My Free Consultation
                  <ArrowRight size={14} className="group-hover:translate-x-[3px] transition-transform duration-300" />
                </button>

                <p className="font-['Geist:Light',sans-serif] text-[12px] text-[#9ca3af] text-center tracking-[-0.36px]">
                  No credit card. No commitment. Just answers.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
