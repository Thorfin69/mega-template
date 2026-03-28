import { motion } from 'motion/react';

interface ContactFormProps {
  overline: string;
  heading: string;
  headingAccent: string;
  body: string;
  email: string;
  phone: string;
  address: string;
  formCtaLabel: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function ContactForm({
  overline,
  heading,
  headingAccent,
  body,
  email,
  phone,
  address,
  formCtaLabel,
}: ContactFormProps) {
  return (
    <section id="contact-form-section" className="bg-[#0a0a14] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left info */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.span
              variants={fadeUp}
              className="inline-block text-[#3B5BDB] text-sm font-semibold tracking-widest uppercase mb-3"
            >
              {overline}
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-3xl lg:text-4xl font-bold text-white leading-snug mb-4"
            >
              {heading}{' '}
              <span className="text-[#3B5BDB]">{headingAccent}</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-400 text-base leading-relaxed mb-8">
              {body}
            </motion.p>

            <motion.div variants={stagger} className="flex flex-col gap-4">
              <motion.div variants={fadeUp} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#3B5BDB]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#3B5BDB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href={`mailto:${email}`} className="text-gray-300 hover:text-[#3B5BDB] transition-colors text-sm">
                  {email}
                </a>
              </motion.div>

              <motion.div variants={fadeUp} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#3B5BDB]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#3B5BDB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href={`tel:${phone}`} className="text-gray-300 hover:text-[#3B5BDB] transition-colors text-sm">
                  {phone}
                </a>
              </motion.div>

              <motion.div variants={fadeUp} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#3B5BDB]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#3B5BDB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-gray-300 text-sm">{address}</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8"
          >
            <form className="flex flex-col gap-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-gray-300 text-xs font-semibold mb-1.5 uppercase tracking-wide">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#3B5BDB] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-xs font-semibold mb-1.5 uppercase tracking-wide">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="johndoe@email.com"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#3B5BDB] transition-colors"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-gray-300 text-xs font-semibold mb-1.5 uppercase tracking-wide">
                    Company Website <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="www.company.com"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#3B5BDB] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-xs font-semibold mb-1.5 uppercase tracking-wide">
                    Phone Number <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 987-242-4224"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#3B5BDB] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-xs font-semibold mb-1.5 uppercase tracking-wide">
                  Current Marketing Channels
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Google Ads, Facebook, SEO..."
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#3B5BDB] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#3B5BDB] text-white font-semibold py-3.5 rounded-lg hover:bg-[#2f4ac4] transition-colors text-sm"
              >
                {formCtaLabel}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
