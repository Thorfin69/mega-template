import { motion } from "motion/react";
import { Link } from "react-router";
import { ImageWithFallback } from "./ImageWithFallback";
import { PaintStreak } from "./PaintStreak";

const POSTS = [
  {
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=700&h=420&fit=crop&q=80",
    category: "Tax Resolution",
    title: "How to Successfully Apply for an Offer in Compromise",
    description:
      "A step-by-step guide to qualifying for and submitting an IRS Offer in Compromise to settle your tax debt for less than you owe.",
  },
  {
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=700&h=420&fit=crop&q=80",
    category: "Wage Garnishment",
    title: "Stopping Wage Garnishment: Immediate Steps to Take",
    description:
      "Practical steps to release a wage levy and protect your paycheck when the IRS takes aggressive collection action.",
  },
];

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
      <path
        d="M3 13L13 3M13 3H5M13 3V11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BlogPreview() {
  return (
    <section className="py-[120px]" style={{ background: "#f5f1e8" }}>
      <div className="max-w-[1330px] mx-auto px-[70px]">

        {/* Section Header */}
        <div className="flex items-end justify-between mb-[60px]">
          <div className="flex flex-col gap-[24px]">

            {/* Pill badge */}
            <div>
              <span
                className="font-['Inter'] font-bold uppercase text-[#0f172a] border-[1.5px] border-[#0f172a] rounded-[50px] px-[16px] py-[7px]"
                style={{ fontSize: "12px", letterSpacing: "0.08em" }}
              >
                Financial Insights
              </span>
            </div>

            {/* Headline */}
            <h2
              className="font-['Outfit'] font-black text-[#0f172a] leading-[1.0]"
              style={{ fontSize: "clamp(36px, 4vw, 56px)", letterSpacing: "-2px" }}
            >
              Expert Tips And{" "}
              <PaintStreak color="teal">
                <span className="relative z-[1]">Emerging</span>
              </PaintStreak>
              <br />
              Industry Trends
            </h2>
          </div>

          {/* View all CTA */}
          <Link to="/resources" className="shrink-0">
            <span
              className="inline-flex items-center gap-[10px] font-['Inter'] font-semibold text-white rounded-full px-[28px] py-[14px] transition-all duration-200"
              style={{
                background: "#00A4A4",
                fontSize: "15px",
                letterSpacing: "-0.3px",
                boxShadow: "0 4px 20px rgba(0,164,164,0.35)",
              }}
            >
              View All Articles
              <ArrowIcon />
            </span>
          </Link>
        </div>

        {/* Cards row */}
        <div className="flex gap-[28px] items-stretch">

          {/* Blog Cards */}
          {POSTS.map((post, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex-1 min-w-0 flex flex-col group"
              style={{
                background: "#ffffff",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
              }}
            >
              {/* Image */}
              <div
                className="overflow-hidden relative shrink-0"
                style={{ height: "260px" }}
              >
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Category pill */}
                <div
                  className="absolute top-[14px] left-[14px] bg-white/95 backdrop-blur-sm rounded-full px-[12px] py-[5px]"
                >
                  <span
                    className="font-['Inter'] font-semibold text-[#0f172a] uppercase"
                    style={{ fontSize: "11px", letterSpacing: "0.06em" }}
                  >
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Text content */}
              <div className="flex flex-col flex-1 justify-between p-[32px] gap-[20px]">
                <div className="flex flex-col gap-[14px]">
                  <h3
                    className="font-['Outfit'] font-bold text-[#0f172a] leading-[1.2]"
                    style={{ fontSize: "22px", letterSpacing: "-0.8px" }}
                  >
                    {post.title}
                  </h3>
                  <p
                    className="font-['Inter'] font-normal text-[#64748b] leading-[1.65]"
                    style={{ fontSize: "15px", letterSpacing: "-0.2px" }}
                  >
                    {post.description}
                  </p>
                </div>

                {/* Read More row */}
                <Link to="/resources" className="flex items-center justify-between group/cta">
                  <span
                    className="font-['Inter'] font-semibold text-[#0f172a] group-hover/cta:text-[#00A4A4] transition-colors"
                    style={{ fontSize: "15px", letterSpacing: "-0.3px" }}
                  >
                    Read More
                  </span>
                  <div
                    className="rounded-full flex items-center justify-center text-white shrink-0 transition-colors group-hover/cta:bg-[#00A4A4]"
                    style={{
                      width: "48px",
                      height: "48px",
                      background: "#0f172a",
                    }}
                  >
                    <ArrowIcon />
                  </div>
                </Link>
              </div>
            </motion.article>
          ))}

          {/* Right: Dark editorial card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="shrink-0"
            style={{ width: "360px" }}
          >
            <Link to="/resources" className="block h-full">
              <div
                className="h-full flex flex-col justify-between relative overflow-hidden group"
                style={{
                  background: "#0f172a",
                  borderRadius: "20px",
                  padding: "40px",
                }}
              >
                {/* Top content */}
                <div className="flex flex-col gap-[20px]">
                  {/* Eyebrow */}
                  <div className="flex items-center gap-[8px]">
                    <div style={{ width: "24px", height: "1px", background: "#00A4A4" }} />
                    <span
                      className="font-['Outfit'] font-medium uppercase text-[#00A4A4]"
                      style={{ fontSize: "11px", letterSpacing: "0.08em" }}
                    >
                      Our Blog
                    </span>
                  </div>

                  <h3
                    className="font-['Outfit'] font-black text-white leading-[1.15]"
                    style={{ fontSize: "28px", letterSpacing: "-1px" }}
                  >
                    Expert advice, industry trends, and practical tips to help you stay ahead.
                  </h3>

                  <p
                    className="font-['Inter'] font-normal text-white/50 leading-[1.65]"
                    style={{ fontSize: "14px", letterSpacing: "-0.2px" }}
                  >
                    Stay informed with guides written by licensed tax professionals — updated monthly.
                  </p>
                </div>

                {/* Bottom CTA */}
                <div className="flex items-center justify-between mt-[40px]">
                  <span
                    className="font-['Inter'] font-semibold text-white group-hover:text-[#00A4A4] transition-colors"
                    style={{ fontSize: "15px", letterSpacing: "-0.3px" }}
                  >
                    Browse All Articles
                  </span>
                  <div
                    className="rounded-full flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#00A4A4] transition-colors shrink-0"
                    style={{
                      width: "48px",
                      height: "48px",
                      background: "#00A4A4",
                    }}
                  >
                    <ArrowIcon />
                  </div>
                </div>

                {/* Decorative circles */}
                <div
                  className="absolute pointer-events-none rounded-full"
                  style={{
                    bottom: "-48px",
                    right: "-48px",
                    width: "160px",
                    height: "160px",
                    border: "1px solid rgba(255,255,255,0.05)",
                  }}
                />
                <div
                  className="absolute pointer-events-none rounded-full"
                  style={{
                    bottom: "-8px",
                    right: "-8px",
                    width: "100px",
                    height: "100px",
                    border: "1px solid rgba(255,255,255,0.05)",
                  }}
                />
              </div>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
