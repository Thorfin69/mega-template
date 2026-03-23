import { motion, useSpring, useTransform, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { PaintStreak } from "./PaintStreak";

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const spring = useSpring(0, { mass: 1, stiffness: 60, damping: 25 });
  const transformed = useTransform(spring, (v) => Math.round(v));

  useEffect(() => {
    if (isInView) spring.set(value);
  }, [isInView, spring, value]);

  useEffect(() => {
    return transformed.on("change", setDisplay);
  }, [transformed]);

  return (
    <span ref={ref}>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

const STATS = [
  {
    value: 98,
    suffix: "%",
    label: "Client Satisfaction Rate",
    strokeColor: "teal" as const,
    prefix: "",
  },
  {
    value: 500,
    suffix: "M+",
    label: "In Tax Debt Resolved",
    strokeColor: "purple" as const,
    prefix: "$",
  },
  {
    value: 12000,
    suffix: "+",
    label: "Clients Helped Nationwide",
    strokeColor: "pink" as const,
    prefix: "",
  },
  {
    value: 10,
    suffix: "+ Yrs",
    label: "IRS Resolution Experience",
    strokeColor: "blue-gray" as const,
    prefix: "",
  },
];

export function ResultsNumbers() {
  return (
    <section className="py-[120px]" style={{ backgroundColor: "#f5f1e8" }}>
      <div className="max-w-[1330px] mx-auto px-[70px]">

        {/* Section header */}
        <div className="flex flex-col gap-[22px] mb-[72px]">
          <div className="flex items-center gap-[10px]">
            <div className="bg-[#00A4A4] h-px w-[35px]" />
            <span
              className="font-['Outfit'] font-medium uppercase text-[#00A4A4]"
              style={{ fontSize: "14px", letterSpacing: "0.05em" }}
            >
              Our Track Record
            </span>
          </div>
          <div className="flex items-end justify-between gap-12">
            <h2
              className="font-['Outfit'] font-black text-[#0f172a] leading-[1.05]"
              style={{ fontSize: "clamp(36px, 4.5vw, 60px)", letterSpacing: "-2px" }}
            >
              The Fastest Growing<br />
              Tax Relief Company{" "}
              <PaintStreak color="teal">in the Nation.</PaintStreak>
            </h2>
            <p
              className="font-['Inter'] font-normal text-[#475569] leading-[1.65] shrink-0 max-w-[360px] text-right"
              style={{ fontSize: "16px", letterSpacing: "-0.3px" }}
            >
              Real numbers from real clients. We measure our success by what we resolve for you, not what we promise.
            </p>
          </div>
        </div>

        {/* Massive stat grid — 4 numbers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[2px]">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="bg-white p-[40px] flex flex-col gap-[12px] first:rounded-tl-[20px] last:rounded-br-[20px]"
              style={{
                borderRadius: idx === 0 ? "20px 2px 2px 2px" : idx === 1 ? "2px 20px 2px 2px" : idx === 2 ? "2px 2px 2px 20px" : "2px 2px 20px 2px"
              }}
            >
              {/* Big number with paint stroke */}
              <div className="relative">
                <PaintStreak color={stat.strokeColor}>
                  <span
                    className="font-['Outfit'] font-black text-[#0f172a] leading-[1.0] whitespace-nowrap"
                    style={{ fontSize: "60px", letterSpacing: "-2px" }}
                  >
                    {stat.prefix}
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </span>
                </PaintStreak>
              </div>
              <span
                className="font-['Inter'] font-normal text-[#475569] leading-[1.4]"
                style={{ fontSize: "15px" }}
              >
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* CTA Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex items-center gap-[24px] mt-[48px]"
        >
          <Link
            to="/contact"
            className="bg-[#00A4A4] hover:bg-[#007a7a] text-white font-['Outfit'] font-bold rounded-full transition-all duration-300 shadow-[0_8px_24px_rgba(0,164,164,0.3)]"
            style={{ fontSize: "16px", padding: "16px 32px" }}
          >
            Join 12,000+ Resolved Cases
          </Link>
          <span className="font-['Inter'] text-[14px] text-[#94a3b8]">
            Free consultation — no credit card required
          </span>
        </motion.div>

      </div>
    </section>
  );
}
