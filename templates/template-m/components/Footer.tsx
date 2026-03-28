import { motion } from 'motion/react';

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
  address: string;
  email: string;
  phone: string;
  navColumns: NavColumn[];
  socialLinks: SocialLink[];
  credit: string;
  license: string;
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
  credit,
  license,
}: FooterProps) {
  return (
    <footer className="bg-[#0d1117] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 lg:px-12">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-12"
        >
          {/* Brand column */}
          <motion.div variants={fadeUp} className="col-span-2 lg:col-span-1">
            <img src={logoSrc} alt={logoAlt} className="h-10 object-contain mb-4 brightness-0 invert" />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">{tagline}</p>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.platform}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.platform}
                  className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#0094DC] transition-colors"
                >
                  <img src={s.icon} alt={s.platform} className="w-4 h-4 object-contain" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Nav columns */}
          {navColumns.map((col) => (
            <motion.div key={col.heading} variants={fadeUp}>
              <h4 className="text-white font-bold mb-4">{col.heading}</h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 text-sm hover:text-[#0094DC] transition-colors"
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
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-[#0094DC] mt-0.5">📍</span>
                <span>{address}</span>
              </li>
              <li>
                <a href={`mailto:${email}`} className="hover:text-[#0094DC] transition-colors">
                  {email}
                </a>
              </li>
              <li>
                <a href={`tel:${phone}`} className="hover:text-[#0094DC] transition-colors">
                  {phone}
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-gray-500 text-xs">
          <p>{credit}</p>
          <p>{license}</p>
        </div>
      </div>
    </footer>
  );
}
