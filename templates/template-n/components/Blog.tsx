import { motion } from 'motion/react';

interface BlogPost {
  category: string;
  title: string;
  author: string;
  date: string;
  image: string;
  href: string;
}

interface BlogProps {
  overline: string;
  heading: string;
  posts: BlogPost[];
  viewAllHref: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Blog({ overline, heading, posts, viewAllHref }: BlogProps) {
  return (
    <section className="bg-white py-20 lg:py-28" id="blog">
      <div className="max-w-7xl mx-auto px-4 lg:px-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#f7b433] text-sm font-bold uppercase tracking-widest mb-2">{overline}</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1a1a2e]">{heading}</h2>
          </motion.div>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            href={viewAllHref}
            className="inline-flex items-center gap-2 text-[#1a1a2e] font-semibold text-sm border-b-2 border-[#f7b433] hover:text-[#f7b433] transition-colors self-start sm:self-auto"
          >
            View all posts
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 25" fill="none">
              <path
                d="M11.293 17.793L12.707 19.207L19.414 12.5L12.707 5.793L11.293 7.207L15.586 11.5H6V13.5H15.586L11.293 17.793Z"
                fill="currentColor"
              />
            </svg>
          </motion.a>
        </div>

        {/* Posts grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {posts.map((post) => (
            <motion.a
              key={post.title}
              href={post.href}
              variants={fadeUp}
              className="group rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="overflow-hidden aspect-[4/3]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <span className="text-xs font-bold text-[#f7b433] uppercase tracking-wider mb-2">
                  {post.category}
                </span>
                <p className="text-[#1a1a2e] font-bold text-sm leading-snug mb-3 flex-1 group-hover:text-[#f7b433] transition-colors">
                  {post.title}
                </p>
                <p className="text-gray-400 text-xs">
                  {post.author} &mdash; {post.date}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
