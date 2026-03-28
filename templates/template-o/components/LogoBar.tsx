import { motion } from 'motion/react';

interface LogoBarProps {
  label: string;
  logos: { src: string; alt: string }[];
}

export default function LogoBar({ label, logos }: LogoBarProps) {
  const doubled = [...logos, ...logos];

  return (
    <section className="bg-white py-12 border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-10 mb-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-gray-500 text-xs uppercase tracking-widest font-semibold"
        >
          {label}
        </motion.p>
      </div>

      {/* Marquee */}
      <div className="flex overflow-hidden">
        <div className="flex gap-12 items-center animate-marquee-left shrink-0 pr-12">
          {doubled.map((logo, i) => (
            <img
              key={i}
              src={logo.src}
              alt={logo.alt}
              className="h-8 object-contain opacity-50 hover:opacity-80 transition-opacity flex-shrink-0 grayscale"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
