import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Link } from "react-router";
import { PaintStreak } from "./PaintStreak";
import {
  DollarSign,
  Calendar,
  ShieldCheck,
  Pause,
  Heart,
  FileText,
  TrendingUp,
  Scissors,
  Lock,
  Home,
  Search,
  Mail,
} from "lucide-react";

const TRACKS = {
  solution: {
    label: "I Need a Solution",
    items: [
      {
        title: "Offer in Compromise",
        desc: "Settle your entire IRS debt for significantly less than the full amount owed. An IRS-approved program for taxpayers who genuinely cannot pay their full liability.",
        icon: DollarSign,
      },
      {
        title: "Installment Agreement",
        desc: "Set up manageable monthly payments that fit your financial situation. We negotiate the lowest possible payment and protect you from collection actions.",
        icon: Calendar,
      },
      {
        title: "Penalty Abatement",
        desc: "Remove or dramatically reduce IRS penalties through first-time penalty relief or reasonable cause. Thousands in penalties erased with the right argument.",
        icon: ShieldCheck,
      },
      {
        title: "Currently Not Collectible",
        desc: "Pause all IRS collection activity when you genuinely cannot afford to pay. A formal IRS status that stops levies, garnishments, and collection calls.",
        icon: Pause,
      },
      {
        title: "Innocent Spouse Relief",
        desc: "Protect yourself from tax liability caused by a spouse or ex-spouse. You shouldn't pay for someone else's errors or fraud.",
        icon: Heart,
      },
      {
        title: "Unfiled Returns",
        desc: "Get fully compliant without fear — we handle all missing years at once and minimize your total exposure before the IRS comes looking.",
        icon: FileText,
      },
    ],
  },
  problem: {
    label: "I Have a Problem",
    items: [
      {
        title: "Back Taxes",
        desc: "Unpaid taxes from prior years compounding with interest and penalties every single day. We stop the clock, reconstruct your liability, and negotiate a fair number.",
        icon: TrendingUp,
      },
      {
        title: "Wage Garnishment",
        desc: "The IRS is taking money directly from your paycheck. We can stop garnishment within 24–48 hours and establish a better resolution path.",
        icon: Scissors,
      },
      {
        title: "Tax Levy",
        desc: "Bank accounts seized or property threatened — this is the IRS's most aggressive collection tool. Immediate professional intervention is non-negotiable.",
        icon: Lock,
      },
      {
        title: "Tax Lien",
        desc: "A federal lien against your assets damages your credit and blocks financing. We negotiate lien withdrawal or subordination to minimize the impact.",
        icon: Home,
      },
      {
        title: "IRS Audit",
        desc: "Under IRS examination — whether correspondence or field audit, we represent you completely. You never have to speak to the IRS directly.",
        icon: Search,
      },
      {
        title: "IRS Notices",
        desc: "Threatening letters that escalate fast without expert response. We decode every notice, respond on your behalf, and prevent escalation to enforcement.",
        icon: Mail,
      },
    ],
  },
} as const;

type TrackKey = keyof typeof TRACKS;

export function TwoTrackLayout() {
  const [activeTrack, setActiveTrack] = useState<TrackKey>("solution");

  const track = TRACKS[activeTrack];

  function switchTrack(key: TrackKey) {
    if (key === activeTrack) return;
    setActiveTrack(key);
  }

  return (
    <section className="bg-[#f5f1e8] py-[120px]">
      <div className="max-w-[1330px] mx-auto px-[70px]">

        {/* Header */}
        <div className="flex items-end justify-between gap-[48px] mb-[44px]">
          <div className="flex flex-col gap-[20px]">
            {/* Pill badge */}
            <div>
              <span
                className="font-['Inter'] font-bold uppercase text-[#0f172a] border-[1.5px] border-[#0f172a] rounded-[50px] px-[16px] py-[7px] inline-block"
                style={{ fontSize: "12px", letterSpacing: "0.08em" }}
              >
                Two Paths To Relief
              </span>
            </div>
            <h2
              className="font-['Outfit'] font-black text-[#0f172a] leading-[1.06]"
              style={{ fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-2px" }}
            >
              We Meet You{" "}
              <PaintStreak color="blue-gray">Where You Are</PaintStreak>
            </h2>
          </div>
          <p
            className="font-['Inter'] font-normal text-[#475569] leading-[1.65] shrink-0 max-w-[360px] text-right"
            style={{ fontSize: "16px", letterSpacing: "-0.3px" }}
          >
            Whether you're drowning in back taxes or facing an IRS notice, we have a proven path forward — tailored to your exact situation.
          </p>
        </div>

        {/* Tab bar */}
        <div className="flex items-center gap-[12px] mb-[36px]">
          {(Object.keys(TRACKS) as TrackKey[]).map((key) => (
            <button
              key={key}
              onClick={() => switchTrack(key)}
              className={`px-[22px] py-[10px] rounded-full font-['Outfit'] font-bold border-[2px] transition-all duration-200 ${
                activeTrack === key
                  ? "bg-[#00A4A4] text-white border-[#00A4A4]"
                  : "bg-[#f5f1e8] text-[#0f172a] border-[#0f172a] hover:border-[#00A4A4] hover:text-[#00A4A4]"
              }`}
              style={{ fontSize: "15px" }}
            >
              {TRACKS[key].label}
            </button>
          ))}
        </div>

        {/* Card grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTrack}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-[16px]"
          >
            {track.items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.3 }}
                className="bg-white rounded-[20px] p-[32px] flex flex-col gap-[20px] group border border-[#ece8e0] hover:border-[#00A4A4]/30 transition-all duration-300"
              >
                {/* Icon square — very light teal wash, like reference */}
                <div
                  className="w-[48px] h-[48px] rounded-[12px] flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "rgba(0,164,164,0.08)" }}
                >
                  <item.icon className="w-[22px] h-[22px] text-[#00A4A4]" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col gap-[10px] flex-1">
                  <h3
                    className="font-['Outfit'] font-bold text-[#0f172a] leading-[1.25]"
                    style={{ fontSize: "17px", letterSpacing: "-0.3px" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="font-['Inter'] font-normal text-[#64748b] leading-[1.65]"
                    style={{ fontSize: "14px" }}
                  >
                    {item.desc}
                  </p>
                </div>
                <Link
                  to="/services"
                  className="font-['Inter'] font-semibold text-[#00A4A4] flex items-center gap-[5px] group-hover:gap-[8px] transition-all duration-200 mt-auto"
                  style={{ fontSize: "14px" }}
                >
                  Learn More <span aria-hidden>→</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA bar */}
        <div className="mt-[44px] rounded-[16px] bg-[#ffffff] px-[40px] py-[28px] flex items-center justify-between gap-[32px] shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
          <div className="flex flex-col gap-[6px]">
            <span
              className="font-['Outfit'] font-bold text-[#0f172a]"
              style={{ fontSize: "20px" }}
            >
              Ready to resolve your tax situation?
            </span>
            <span
              className="font-['Inter'] text-[#475569]"
              style={{ fontSize: "14px" }}
            >
              Free consultation — no obligation, no upfront fees.
            </span>
          </div>
          <div className="flex items-center gap-[14px] flex-shrink-0">
            <Link
              to="/contact"
              className="bg-[#00A4A4] hover:bg-[#007a7a] text-white font-['Outfit'] font-bold px-[24px] py-[12px] rounded-full transition-colors duration-200 whitespace-nowrap hover:scale-[1.02]"
              style={{ fontSize: "14px" }}
            >
              Get Free Consultation
            </Link>
            <Link
              to="/services"
              className="text-[#0f172a] font-['Inter'] font-medium flex items-center gap-[4px] hover:text-[#00A4A4] transition-colors whitespace-nowrap"
              style={{ fontSize: "14px" }}
            >
              View All Services →
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
