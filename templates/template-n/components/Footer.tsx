import { motion } from 'motion/react';

interface NavColumn {
  heading: string;
  links: { label: string; href: string }[];
}

interface SocialLink {
  platform: string;
  href: string;
  svgPath: string;
}

interface FooterProps {
  logoSrc: string;
  logoAlt: string;
  tagline: string;
  address: string;
  email: string;
  phone: string;
  navColumns: NavColumn[];
  socialLinks: SocialLink[];
  nmlsId: string;
  nmlsHref: string;
  credit: string;
  disclaimer: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function Footer({
  logoSrc,
  logoAlt,
  tagline,
  address,
  email,
  phone,
  navColumns,
  socialLinks,
  nmlsId,
  nmlsHref,
  credit,
  disclaimer,
}: FooterProps) {
  return (
    <footer className="bg-[#0d1117] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 lg:px-12">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-5 gap-10 mb-12"
        >
          {/* Brand column */}
          <motion.div variants={fadeUp} className="col-span-2">
            <a href="https://tigerloans.com/" className="inline-block mb-4">
              <img src={logoSrc} alt={logoAlt} className="h-10 object-contain brightness-0 invert" />
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-5 max-w-xs">{tagline}</p>

            {/* Social icons */}
            <div className="flex gap-3 mb-5">
              {socialLinks.map((s) => (
                <a
                  key={s.platform}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.platform}
                  className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#f7b433] transition-colors group"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 text-gray-400 group-hover:text-[#1a1a2e]"
                  >
                    <path d={s.svgPath} />
                  </svg>
                </a>
              ))}
            </div>

            {/* NMLS badge */}
            <a
              href={nmlsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-[#f7b433] transition-colors"
            >
              <span className="bg-[#f7b433] text-[#1a1a2e] font-bold px-2 py-0.5 rounded text-xs">
                NMLS
              </span>
              Company ID: {nmlsId} — Consumer Access
            </a>
          </motion.div>

          {/* Nav columns */}
          {navColumns.map((col) => (
            <motion.div key={col.heading} variants={fadeUp}>
              <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">{col.heading}</h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 text-sm hover:text-[#f7b433] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact column */}
          <motion.div variants={fadeUp}>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Need Help?</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-400">
              <li>
                <a href={`mailto:${email}`} className="hover:text-[#f7b433] transition-colors">
                  {email}
                </a>
              </li>
              <li>
                <a href={`tel:${phone.replace(/\D/g, '')}`} className="hover:text-[#f7b433] transition-colors">
                  {phone}
                </a>
              </li>
              <li className="leading-relaxed">{address}</li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Disclaimer */}
        <div className="border-t border-white/10 pt-8 mb-6">
          <p className="text-gray-500 text-xs leading-relaxed">{disclaimer}</p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-gray-600 text-xs">
          <p>{credit}</p>
          <p>
            <a href={nmlsHref} target="_blank" rel="noopener noreferrer" className="hover:text-[#f7b433] transition-colors">
              NMLS Consumer Access
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
