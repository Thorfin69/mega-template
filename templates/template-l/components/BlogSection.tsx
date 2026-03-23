import { motion } from 'motion/react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

interface BlogPost {
  image: string;
  imageAlt: string;
  category: string;
  title: string;
  excerpt: string;
  href: string;
}

interface BlogSectionProps {
  overline: string;
  heading: string;
  subheading: string;
  posts: BlogPost[];
}

export default function BlogSection({ overline, heading, subheading, posts }: BlogSectionProps) {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p variants={fadeUp} className="text-[#027DFC] text-sm font-semibold uppercase tracking-widest mb-3">
            {overline}
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-[2rem] lg:text-[2.5rem] font-bold text-[#27313D] leading-tight mb-4">
            {heading}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#6B7280] text-base max-w-[480px] mx-auto leading-relaxed">
            {subheading}
          </motion.p>
        </motion.div>

        {/* Posts grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {posts.map((post) => (
            <motion.a
              key={post.title}
              href={post.href}
              variants={fadeUp}
              className="group block rounded-2xl overflow-hidden border border-[#E5E7EB] hover:border-[#027DFC]/30 hover:shadow-[0_4px_24px_rgba(2,125,252,0.1)] transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-[16/9] overflow-hidden bg-[#F3F4F6]">
                <img
                  src={post.image}
                  alt={post.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="inline-block bg-blue-50 text-[#027DFC] text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  {post.category}
                </span>
                <h3 className="text-[#27313D] font-bold text-base leading-snug mb-3 group-hover:text-[#027DFC] transition-colors">
                  {post.title}
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{post.excerpt}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
