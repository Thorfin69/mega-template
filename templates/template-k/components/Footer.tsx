import { motion } from 'motion/react';
import { useState } from 'react';

interface FooterLink {
  label: string;
  href: string;
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
  subscribeHeading?: string;
  navColumns: { heading: string; links: FooterLink[] }[];
  address: string;
  email: string;
  phone: string;
  socialLinks: SocialLink[];
  credit?: string;
}

export default function Footer({
  logoSrc,
  logoAlt,
  tagline,
  subscribeHeading = 'Subscribe to receive latest update',
  navColumns,
  address,
  email,
  phone,
  socialLinks,
  credit,
}: FooterProps) {
  const [subscribeEmail, setSubscribeEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (subscribeEmail) setSubmitted(true);
  };

  return (
    <footer className="bg-[#27272e]">
      <div className="max-w-[1230px] mx-auto px-4 py-[100px]">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-12">
          {/* Col 1: Logo + tagline + subscribe */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <a href="#" className="block mb-6">
              <img src={logoSrc} alt={logoAlt} className="h-10 w-auto brightness-0 invert" />
            </a>
            <p className="text-[#b8b8bd] text-[0.9375rem] leading-relaxed mb-8">{tagline}</p>

            <p className="text-white font-semibold text-sm mb-4">{subscribeHeading}</p>
            {submitted ? (
              <p className="text-[#4da7aa] text-sm">Thank you! You're subscribed.</p>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={subscribeEmail}
                  onChange={(e) => setSubscribeEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 bg-white/10 text-white placeholder:text-[#b8b8bd] text-sm px-4 py-3 rounded-[5px] border border-white/10 focus:outline-none focus:border-[#4da7aa]"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#4da7aa] text-white text-sm font-semibold px-5 py-3 rounded-[5px] hover:bg-white hover:text-[#27272e] transition-colors duration-200"
                >
                  Subscribe
                </button>
              </form>
            )}

            {/* Social icons */}
            <div className="flex gap-4 mt-8">
              {socialLinks.map((s) => (
                <a
                  key={s.platform}
                  href={s.href}
                  aria-label={s.platform}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#4da7aa] transition-colors duration-200"
                >
                  <img src={s.icon} alt={s.platform} className="w-4 h-4 brightness-0 invert" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Nav columns */}
          {navColumns.map((col, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: (i + 1) * 0.1 }}
            >
              <h4 className="text-white font-semibold text-[1rem] mb-4">{col.heading}</h4>
              <nav className="flex flex-col">
                {col.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-[#b8b8bd] text-[1.125rem] font-normal leading-[3rem] hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </motion.div>
          ))}

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
          >
            <h4 className="text-white font-semibold text-[1rem] mb-4">Contact info</h4>
            <address className="not-italic flex flex-col gap-3">
              <p className="text-[#b8b8bd] text-[0.9375rem] leading-relaxed">{address}</p>
              <a href={`mailto:${email}`} className="text-[#b8b8bd] text-[0.9375rem] hover:text-white transition-colors duration-200">
                {email}
              </a>
              <a href={`tel:${phone}`} className="text-[#b8b8bd] text-[0.9375rem] hover:text-white transition-colors duration-200">
                {phone}
              </a>
            </address>
          </motion.div>
        </div>

        {/* Divider + copyright */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between gap-4">
          <p className="text-[#b8b8bd] text-sm text-center lg:text-left">
            {credit ?? `© ${new Date().getFullYear()} Bettermint Healthcare. All rights reserved.`}
          </p>
        </div>
      </div>
    </footer>
  );
}
