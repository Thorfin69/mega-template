import { motion } from "motion/react";
import { Link } from "react-router";
import { ImageWithFallback } from "./ImageWithFallback";
import { PaintStreak } from "./PaintStreak";

const SERVICES = [
  { title: "IRS Tax Resolution & Defense", href: "/services" },
  { title: "Offer in Compromise Negotiations", href: "/services" },
  { title: "Penalty & Interest Abatement", href: "/services" },
  { title: "Wage Garnishment & Levy Release", href: "/services" },
  { title: "Installment Agreements & Plans", href: "/services" },
  { title: "Unfiled Returns & Back Tax Filing", href: "/services" },
];

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M3 13L13 3M13 3H5M13 3V11"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BackgroundLines() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1400 700"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      aria-hidden="true"
    >
      {/* Flowing curved lines — teal, low opacity */}
      <path
        d="M-100,180 C200,80 500,320 800,200 C1100,80 1300,280 1500,160"
        stroke="#00A4A4"
        strokeWidth="1.2"
        opacity="0.12"
      />
      <path
        d="M-100,320 C150,200 450,440 750,320 C1050,200 1250,400 1500,280"
        stroke="#00A4A4"
        strokeWidth="1"
        opacity="0.08"
      />
      <path
        d="M-100,480 C200,360 480,560 780,440 C1080,320 1300,500 1500,400"
        stroke="#00A4A4"
        strokeWidth="0.8"
        opacity="0.06"
      />
      {/* Diagonal accent line — bolder */}
      <path
        d="M900,0 C1000,150 950,350 1100,500 C1200,600 1350,650 1400,700"
        stroke="#00A4A4"
        strokeWidth="1.5"
        opacity="0.10"
      />
      <path
        d="M600,0 C700,200 650,400 800,550 C900,660 1050,700 1100,700"
        stroke="#00A4A4"
        strokeWidth="1"
        opacity="0.07"
      />
    </svg>
  );
}

export function SolutionsOverview() {
  return (
    <section className="bg-[#0f172a] py-[120px] relative overflow-hidden">
      <BackgroundLines />
      <div className="max-w-[1330px] mx-auto px-[70px] relative">
        <div className="flex gap-[120px] items-start">

          {/* Left Column */}
          <div className="w-[520px] shrink-0 flex flex-col gap-[60px]">

            {/* Header */}
            <div className="flex flex-col gap-[24px]">
              {/* Pill Badge */}
              <div>
                <span
                  className="font-['Inter'] font-bold uppercase text-white border-[1.5px] border-white rounded-[50px] px-[16px] py-[7px] inline-block"
                  style={{ fontSize: "12px", letterSpacing: "0.08em" }}
                >
                  Our Services
                </span>
              </div>

              <h2
                className="font-['Outfit'] font-black text-white leading-[1.05]"
                style={{
                  fontSize: "clamp(40px, 5vw, 64px)",
                  letterSpacing: "-2px",
                }}
              >
                Our{" "}
                <PaintStreak color="teal">
                  <span className="text-[#00A4A4]">Expertise</span>
                </PaintStreak>
                ,{" "}
                <br />
                Your Success
              </h2>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-['Inter'] font-normal leading-[1.65] max-w-[440px]"
                style={{
                  fontSize: "16px",
                  letterSpacing: "-0.3px",
                  color: "rgba(249,250,251,0.75)",
                }}
              >
                We offer a comprehensive range of tax resolution services designed to protect your assets, reduce your liability, and help you move forward with confidence.
              </motion.p>
            </div>

            {/* Image + Button */}
            <div className="flex flex-col gap-[18px]">
              <div className="h-[270px] rounded-[8px] overflow-hidden w-full relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=700&h=400&fit=crop&q=80"
                  alt="Expert tax resolution team"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="pt-[12px]">
                <Link
                  to="/services"
                  className="bg-gradient-to-r from-[#00A4A4] to-[#007a7a] hover:from-[#007a7a] hover:to-[#005f5f] hover:scale-[1.02] inline-flex items-center gap-[10px] px-[28px] rounded-full shadow-[0_8px_24px_rgba(0,164,164,0.3)] transition-all"
                  style={{ paddingTop: "17px", paddingBottom: "17px" }}
                >
                  <span
                    className="font-['Inter'] font-semibold text-white"
                    style={{ fontSize: "16px", letterSpacing: "-0.32px" }}
                  >
                    Explore all services
                  </span>
                  <ArrowIcon />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Service Links */}
          <div className="flex-1 flex flex-col justify-center self-stretch">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <Link
                  to={service.href}
                  className="flex items-center gap-[20px] py-[28px] relative group border-b border-white/10"
                >
                  {/* Title with slide-up hover animation */}
                  <div className="flex-1 h-[30px] overflow-hidden relative">
                    <div
                      className="absolute top-0 left-0 font-['Outfit'] font-bold text-white whitespace-nowrap group-hover:top-[-30px] transition-all duration-300"
                      style={{ fontSize: "22px", letterSpacing: "-0.5px", lineHeight: "30px" }}
                    >
                      {service.title}
                    </div>
                    <div
                      className="absolute top-[30px] left-0 font-['Outfit'] font-bold text-white whitespace-nowrap group-hover:top-0 transition-all duration-300"
                      style={{ fontSize: "22px", letterSpacing: "-0.5px", lineHeight: "30px" }}
                    >
                      {service.title}
                    </div>
                  </div>

                  {/* Arrow Circle in teal */}
                  <div className="w-[48px] h-[48px] bg-[#00A4A4] rounded-full flex items-center justify-center shrink-0 group-hover:bg-[#007a7a] transition-colors duration-300">
                    <ArrowIcon />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
