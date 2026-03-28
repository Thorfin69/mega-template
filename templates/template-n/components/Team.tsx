import { motion } from 'motion/react';

interface TeamMember {
  name: string;
  role?: string;
  nmls: string;
  phone: string;
  image: string;
  profileHref?: string;
  href?: string;
}

interface TeamProps {
  overline: string;
  heading: string;
  subheading: string;
  members: TeamMember[];
  teamBgImage: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function Team({ overline, heading, subheading, members, teamBgImage }: TeamProps) {
  return (
    <section className="bg-[#f8f9fb] py-20 lg:py-28" id="team">
      <div className="max-w-7xl mx-auto px-4 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#f7b433] text-sm font-bold uppercase tracking-widest mb-3">{overline}</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1a1a2e] mb-3">{heading}</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">{subheading}</p>
        </motion.div>

        {/* Members grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5"
        >
          {members.map((member) => (
            <motion.a
              key={member.nmls}
              href={member.profileHref ?? member.href ?? '#'}
              variants={fadeUp}
              className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden mb-3 ring-2 ring-transparent group-hover:ring-[#f7b433] transition-all">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs text-gray-400 mb-1">NMLS ID {member.nmls}</p>
              <p className="font-bold text-[#1a1a2e] text-sm leading-tight mb-0.5">{member.name}</p>
              <p className="text-xs text-gray-500 mb-1">{member.role}</p>
              {member.phone && (
                <p className="text-xs text-[#f7b433] font-medium">{member.phone}</p>
              )}
            </motion.a>
          ))}
        </motion.div>

        {/* Team photo */}
        {teamBgImage && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-16"
          >
            <img
              src={teamBgImage}
              alt="Tiger Loans team"
              className="w-full rounded-2xl object-cover max-h-[480px] shadow-lg"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
}
