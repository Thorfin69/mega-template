import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Assignment {
  id: string;
  label: string;
  heading: string;
  body: string;
  image: string;
}

interface AssignmentOptionsProps {
  overline?: string;
  heading: string;
  subheading?: string;
  assignments: Assignment[];
}

export default function AssignmentOptions({ overline, heading, subheading, assignments }: AssignmentOptionsProps) {
  const [activeId, setActiveId] = useState(assignments[0]?.id ?? '');

  const active = assignments.find((a) => a.id === activeId) ?? assignments[0];

  return (
    <section className="bg-white py-[100px]">
      <div className="max-w-[1230px] mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          {overline && (
            <p className="text-[#4da7aa] text-sm font-semibold uppercase tracking-widest mb-3">{overline}</p>
          )}
          <h2
            className="text-[#27272e] font-bold"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', lineHeight: 1.2 }}
          >
            {heading}
          </h2>
          {subheading && (
            <p className="text-[#7e7e7e] text-[1rem] mt-4 max-w-[600px] mx-auto">{subheading}</p>
          )}
        </motion.div>

        {/* Tabs + Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
          {/* Tab list */}
          <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {assignments.map((a) => (
              <button
                key={a.id}
                onClick={() => setActiveId(a.id)}
                className={`text-left px-5 py-4 rounded-[10px] text-[0.9375rem] font-medium transition-all duration-200 whitespace-nowrap lg:whitespace-normal ${
                  activeId === a.id
                    ? 'bg-[#4da7aa] text-white'
                    : 'bg-[#f8f8ff] text-[#27272e] hover:bg-[#4da7aa]/10'
                }`}
              >
                {a.label}
              </button>
            ))}
          </div>

          {/* Content panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              <div>
                <h3 className="text-[#27272e] font-bold text-[1.5rem] mb-4">{active.heading}</h3>
                <p className="text-[#7e7e7e] text-[0.9375rem] leading-relaxed">{active.body}</p>
              </div>
              <div className="rounded-[20px] overflow-hidden">
                <img src={active.image} alt={active.heading} className="w-full h-64 object-cover" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
