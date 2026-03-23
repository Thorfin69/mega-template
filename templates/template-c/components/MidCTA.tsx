import { motion } from "motion/react";
import { Link } from "react-router";
import { ImageWithFallback } from "./ImageWithFallback";
import { PaintStreak } from "./PaintStreak";

export function MidCTA() {
  return (
    <section className="bg-[#f5f1e8] py-[120px]">
      <div className="max-w-[1330px] mx-auto px-[70px]">
        <div className="flex items-center gap-[80px]">

          {/* LEFT — text content */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="flex flex-col gap-[32px] flex-1"
          >
            {/* Pill badge */}
            <div>
              <span
                className="inline-flex items-center font-['Outfit'] font-bold text-[#0f172a] border-[1.5px] border-[#0f172a] rounded-[50px] px-[16px] py-[7px] uppercase"
                style={{ fontSize: "13px", letterSpacing: "0.06em" }}
              >
                Free Consultation
              </span>
            </div>

            {/* Headline */}
            <h2
              className="font-['Outfit'] font-black text-[#0f172a]"
              style={{
                fontSize: "clamp(44px, 5vw, 64px)",
                lineHeight: "1.04",
                letterSpacing: "-2px",
              }}
            >
              Stop Fighting<br />
              the IRS{" "}
              <PaintStreak color="purple">Alone.</PaintStreak>
            </h2>

            {/* Body */}
            <p
              className="font-['Inter'] font-normal text-[#0f172a]/70 leading-[1.65]"
              style={{ fontSize: "18px", letterSpacing: "-0.3px", maxWidth: "460px" }}
            >
              Our licensed professionals have resolved over $500M in tax debt.
              A free consultation costs you nothing — inaction costs you everything.
            </p>

            {/* CTAs */}
            <div className="flex items-center gap-[20px]">
              <Link
                to="/contact"
                className="inline-flex items-center gap-[10px] bg-[#00A4A4] hover:bg-[#007a7a] text-white rounded-full hover:scale-[1.02] transition-all duration-300 shadow-[0_8px_24px_rgba(0,164,164,0.25)] hover:shadow-[0_12px_32px_rgba(0,164,164,0.35)]"
                style={{ paddingLeft: "28px", paddingRight: "28px", paddingTop: "17px", paddingBottom: "17px" }}
              >
                <span
                  className="font-['Inter'] font-semibold text-white"
                  style={{ fontSize: "16px", letterSpacing: "-0.32px" }}
                >
                  Get Free Consultation
                </span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 13L13 3M13 3H5M13 3V11"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-full border-[1.5px] border-[#0f172a] text-[#0f172a] hover:bg-[#0f172a] hover:text-white transition-all duration-300"
                style={{ paddingLeft: "24px", paddingRight: "24px", paddingTop: "17px", paddingBottom: "17px" }}
              >
                <span
                  className="font-['Inter'] font-semibold"
                  style={{ fontSize: "16px", letterSpacing: "-0.32px" }}
                >
                  View All Services
                </span>
              </Link>
            </div>
          </motion.div>

          {/* RIGHT — photo with teal shape behind it */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.15 }}
            className="relative flex-shrink-0"
            style={{ width: "460px", height: "560px" }}
          >
            {/* Teal rounded-square background shape */}
            <div
              className="absolute bg-[#00A4A4]"
              style={{
                width: "400px",
                height: "490px",
                borderRadius: "24px",
                bottom: "0px",
                right: "0px",
                zIndex: 0,
              }}
            />

            {/* Decorative teal circle accent */}
            <div
              className="absolute bg-[#00A4A4]/30 rounded-full"
              style={{
                width: "80px",
                height: "80px",
                top: "20px",
                left: "20px",
                zIndex: 1,
              }}
            />

            {/* Photo */}
            <div
              className="absolute overflow-hidden"
              style={{
                width: "400px",
                height: "490px",
                borderRadius: "20px",
                bottom: "20px",
                right: "20px",
                zIndex: 2,
              }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=600&fit=crop&q=80"
                alt="Professional tax consultant"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
