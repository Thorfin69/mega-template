import { motion } from 'motion/react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedinHref?: string;
}

interface TeamProps {
  overline: string;
  heading: string;
  subheading: string;
  members: TeamMember[];
  linkedinIconSrc: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Team({ overline, heading, subheading, members, linkedinIconSrc }: TeamProps) {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 lg:px-12">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-14"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block text-[#0094DC] text-sm font-semibold tracking-widest uppercase mb-3"
          >
            {overline}
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-bold text-[#27272e] mb-3">
            {heading}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-600 max-w-xl mx-auto">
            {subheading}
          </motion.p>
        </motion.div>

        {/* Members */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-wrap justify-center gap-8"
        >
          {members.map((member) => (
            <motion.div
              key={member.name}
              variants={fadeUp}
              className="bg-[#f8f9fc] rounded-2xl overflow-hidden w-64 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-square overflow-hidden bg-gray-200">
                <img
                  src={member.image}
                  alt={`${member.name}, ${member.role}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-[#27272e]">{member.name}</h3>
                  <p className="text-gray-500 text-sm">{member.role}</p>
                </div>
                {member.linkedinHref && (
                  <a href={member.linkedinHref} target="_blank" rel="noopener noreferrer">
                    <img src={linkedinIconSrc} alt="LinkedIn" className="w-6 h-6 object-contain" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
