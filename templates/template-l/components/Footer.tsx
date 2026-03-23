import { motion } from 'motion/react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

interface NavColumn {
  heading: string;
  links: { label: string; href: string }[];
}

interface SocialLink {
  platform: string;
  href: string;
  icon: string;
}

interface FooterProps {
  logoSrc: string;
  logoAlt: string;
  tagline: string;
  emailSubscribeLabel?: string;
  emailSubscribePlaceholder?: string;
  navColumns: NavColumn[];
  socialLinks: SocialLink[];
  credit: string;
  bgImage?: string;
}

export default function Footer({
  logoSrc,
  logoAlt,
  tagline,
  emailSubscribeLabel,
  emailSubscribePlaceholder = 'Enter your email',
  navColumns,
  socialLinks,
  credit,
  bgImage,
}: FooterProps) {
  return (
    <footer
      className="bg-[#27313D] pt-16 pb-8 relative overflow-hidden"
      style={bgImage ? { backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
    >
      {bgImage && <div className="absolute inset-0 bg-[#27313D]/90" />}

      <div className="max-w-[1200px] mx-auto px-4 relative">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Brand column */}
          <motion.div variants={fadeUp} className="lg:col-span-1">
            <img src={logoSrc} alt={logoAlt} className="h-8 w-auto mb-4 brightness-0 invert" />
            <p className="text-[#9CA3AF] text-sm leading-relaxed mb-6">{tagline}</p>

            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.href}
                  aria-label={social.platform}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#027DFC] hover:border-[#027DFC] transition-all duration-200"
                >
                  <img src={social.icon} alt={social.platform} className="w-4 h-4 brightness-0 invert" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Nav columns */}
          {navColumns.map((col) => (
            <motion.div key={col.heading} variants={fadeUp}>
              <h4 className="text-white font-semibold text-sm mb-4">{col.heading}</h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-[#9CA3AF] text-sm hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Email subscribe */}
          {emailSubscribeLabel && (
            <motion.div variants={fadeUp}>
              <h4 className="text-white font-semibold text-sm mb-4">{emailSubscribeLabel}</h4>
              <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder={emailSubscribePlaceholder}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-[#6B7280] focus:outline-none focus:border-[#027DFC] transition-colors"
                />
                <button
                  type="submit"
                  className="w-full bg-[#027DFC] text-white text-sm font-semibold py-2.5 rounded-lg hover:bg-[#0268d4] transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </motion.div>
          )}
        </motion.div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#6B7280] text-xs">{credit}</p>
          <p className="text-[#6B7280] text-xs">© {new Date().getFullYear()} MaxMyCloud. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
