import React from "react";
import { motion } from "motion/react";

const posts = [
  {
    category: "Tax Relief",
    title: "What Is an Offer in Compromise — And Do You Qualify?",
    excerpt:
      "The IRS accepts OICs for taxpayers who genuinely cannot pay their full balance. Here's how eligibility works and what to expect.",
    readTime: "5 min read",
    date: "Mar 12, 2026",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
  },
  {
    category: "IRS Notices",
    title: "CP14 vs. CP2000: How to Respond to the Most Common IRS Letters",
    excerpt:
      "Receiving an IRS notice doesn't mean you owe what they say. Learn how to respond correctly and protect your rights.",
    readTime: "7 min read",
    date: "Feb 28, 2026",
    image:
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=600&q=80",
  },
  {
    category: "Wage Garnishment",
    title: "How to Stop IRS Wage Garnishment Before Your Next Paycheck",
    excerpt:
      "The IRS can act fast when garnishing wages. But so can we. Here's what you need to do in the first 48 hours.",
    readTime: "4 min read",
    date: "Feb 15, 2026",
    image:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&q=80",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function STBlog() {
  return (
    <section className="w-full bg-[#F7F9FF] py-[120px] border-t border-black/10">
      <div className="max-w-[1440px] mx-auto px-[24px] md:px-[130px]">
        {/* Header row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-end justify-between mb-[60px] flex-wrap gap-[24px]"
        >
          <div>
            <p className="text-[12px] text-[#6b7280] uppercase tracking-[2px] mb-[16px] font-['Geist:Regular',sans-serif]">
              RESOURCES
            </p>
            <h2 className="font-['Geist:Light',sans-serif] text-[50px] text-[#0b0b0b] leading-[55px] tracking-[-1.5px]">
              Tax Relief
              <br />
              Insights
            </h2>
          </div>
          <button className="bg-[#00A4A4] px-[21px] py-[11px] rounded-[50px] font-['Geist:Regular',sans-serif] text-[14px] text-white uppercase tracking-[-0.42px] hover:bg-[#008585] transition-all active:scale-95">
            View All Articles
          </button>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-[20px]"
        >
          {posts.map((post, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="bg-white rounded-[12px] overflow-hidden border border-black/10 hover:border-black/20 hover:shadow-md transition-all cursor-pointer group"
            >
              {/* Image */}
              <div className="h-[220px] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-[32px]">
                <span className="inline-block bg-[#00A4A4]/10 rounded-[50px] px-[12px] py-[5px] font-['Geist:Regular',sans-serif] text-[11px] text-[#00A4A4] uppercase tracking-[-0.33px] mb-[16px]">
                  {post.category}
                </span>
                <h3 className="font-['Geist:Regular',sans-serif] text-[20px] text-[#0b0b0b] tracking-[-0.6px] leading-[26px] mb-[12px] group-hover:text-[#00A4A4] transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="font-['Geist:Light',sans-serif] text-[14px] text-[#6b7280] leading-[21px] tracking-[-0.42px] mb-[24px]">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-['Geist:Light',sans-serif] text-[13px] text-[#9ca3af] tracking-[-0.39px]">
                    {post.date}
                  </span>
                  <span className="font-['Geist:Regular',sans-serif] text-[13px] text-[#9ca3af] uppercase tracking-[-0.39px]">
                    {post.readTime}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
