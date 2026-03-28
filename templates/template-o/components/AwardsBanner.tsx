import { motion } from 'motion/react';

interface AwardsBannerProps {
  label: string;
  awards: { src: string; alt: string }[];
}

export default function AwardsBanner({ label, awards }: AwardsBannerProps) {
  const doubled = [...awards, ...awards];

  return (
    <section className="bg-[#0d0d1a] py-10 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-10 mb-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-gray-500 text-xs uppercase tracking-widest"
        >
          {label}
        </motion.p>
      </div>

      {/* Marquee strip */}
      <div className="flex overflow-hidden">
        <div className="flex gap-10 items-center animate-marquee-left shrink-0 pr-10">
          {doubled.map((award, i) => (
            <img
              key={i}
              src={award.src}
              alt={award.alt}
              className="h-12 object-contain opacity-70 hover:opacity-100 transition-opacity flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
