import { motion } from 'motion/react';

interface ContactProps {
  heading: string;
  body: string;
  scheduleCallHref: string;
  freeQuoteHref: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Contact({ heading, body, scheduleCallHref, freeQuoteHref }: ContactProps) {
  return (
    <section
      className="py-20 lg:py-28"
      id="contact"
      style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #0d1117 60%, #16213e 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text side */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl lg:text-4xl font-bold text-white leading-snug mb-5"
            >
              {heading}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-300 leading-relaxed mb-8">
              {body}
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <a
                href={scheduleCallHref}
                className="inline-flex items-center gap-2 bg-[#f7b433] text-[#1a1a2e] font-bold px-7 py-3.5 rounded-md hover:bg-[#e6a827] transition-colors"
              >
                Schedule a call
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 25" fill="none">
                  <path
                    d="M11.293 17.793L12.707 19.207L19.414 12.5L12.707 5.793L11.293 7.207L15.586 11.5H6V13.5H15.586L11.293 17.793Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href={freeQuoteHref}
                className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-md hover:bg-white/10 transition-colors"
              >
                Get a Free Quote
              </a>
            </motion.div>
          </motion.div>

          {/* Contact info cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="grid sm:grid-cols-2 gap-5"
          >
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="w-10 h-10 bg-[#f7b433]/20 rounded-lg flex items-center justify-center mb-4">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#f7b433]">
                  <path
                    d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-gray-400 text-xs mb-1">Email us at</p>
              <a href="mailto:inquiry@tigerloans.com" className="text-white font-semibold text-sm hover:text-[#f7b433] transition-colors">
                inquiry@tigerloans.com
              </a>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="w-10 h-10 bg-[#f7b433]/20 rounded-lg flex items-center justify-center mb-4">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#f7b433]">
                  <path
                    d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-gray-400 text-xs mb-1">Call us at</p>
              <a href="tel:8888004151" className="text-white font-semibold text-sm hover:text-[#f7b433] transition-colors">
                888-800-4151
              </a>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 sm:col-span-2">
              <div className="w-10 h-10 bg-[#f7b433]/20 rounded-lg flex items-center justify-center mb-4">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#f7b433]">
                  <path
                    d="M17.6569 16.6569C16.7202 17.5935 14.7616 19.5521 13.4138 20.8999C12.6327 21.681 11.3677 21.6814 10.5866 20.9003C9.26234 19.576 7.34159 17.6553 6.34315 16.6569C3.21895 13.5327 3.21895 8.46734 6.34315 5.34315C9.46734 2.21895 14.5327 2.21895 17.6569 5.34315C20.781 8.46734 20.781 13.5327 17.6569 16.6569Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-gray-400 text-xs mb-1">Our Headquarters</p>
              <p className="text-white font-semibold text-sm">
                780 Roosevelt, Ste 120<br />Irvine, CA 92620
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
