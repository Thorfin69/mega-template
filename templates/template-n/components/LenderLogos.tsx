import { motion } from 'motion/react';

interface LenderLogosProps {
  heading: string;
  logos: { src: string; alt: string }[];
  groupImageSrc: string;
  groupImageAlt: string;
}

export default function LenderLogos({ heading, logos, groupImageSrc, groupImageAlt }: LenderLogosProps) {
  const doubled = [...logos, ...logos];

  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-12 mb-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6"
        >
          {heading}
        </motion.p>
      </div>

      {/* Scrolling logo strip */}
      <div className="flex overflow-hidden gap-8 mb-12">
        <div className="flex gap-8 animate-marquee-left shrink-0">
          {doubled.map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center h-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
            >
              <img src={logo.src} alt={logo.alt} className="h-full object-contain w-auto max-w-[120px]" />
            </div>
          ))}
        </div>
      </div>

      {/* Group / partnership image */}
      <div className="max-w-7xl mx-auto px-4 lg:px-12">
        <motion.img
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          src={groupImageSrc}
          alt={groupImageAlt}
          className="w-full rounded-2xl object-cover max-h-[400px]"
        />
      </div>
    </section>
  );
}
