import { motion } from "motion/react";
import { ShieldCheck, Clock, Lock } from "lucide-react";

const TRUST_POINTS = [
  {
    icon: ShieldCheck,
    title: "Licensed CPAs",
    description: "Expert tax professionals, NOT Enrolled Agents.",
  },
  {
    icon: Clock,
    title: "Free Consultation",
    description: "No Obligation, No Upfront Fees.",
  },
  {
    icon: Lock,
    title: "Confidential & Secure",
    description: "Your Information Is Protected.",
  },
];

export function TrustBar() {
  return (
    <section className="py-7" style={{ backgroundColor: "#009B96" }}>
      <div className="max-w-[1330px] mx-auto px-[70px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x md:divide-white/20">
          {TRUST_POINTS.map((point, idx) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 px-0 md:px-8 first:pl-0 last:pr-0"
            >
              {/* Outline circle icon — matches FB image 1 style */}
              <div className="w-11 h-11 rounded-full border-2 border-white/60 flex items-center justify-center flex-shrink-0">
                <point.icon className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <h4 className="font-['Outfit'] font-bold text-[15px] text-white mb-0.5 tracking-wide uppercase">
                  {point.title}
                </h4>
                <p className="font-['Inter'] text-[13px] text-white/75 leading-[1.4]">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
