import { motion } from 'motion/react';
import { RefinedBrief } from '../types';

interface Step2Props {
  brief: RefinedBrief;
  onBriefChange: (brief: RefinedBrief) => void;
  onBack: () => void;
  onNext: () => void;
}

const TONE_OPTIONS = [
  { value: 'professional', label: 'Professional' },
  { value: 'friendly', label: 'Friendly' },
  { value: 'bold', label: 'Bold' },
  { value: 'technical', label: 'Technical' },
  { value: 'warm', label: 'Warm' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const inputClass =
  'bg-white/[0.06] border border-white/[0.1] rounded-xl text-white placeholder-slate-500 focus:border-violet-500/60 focus:outline-none w-full px-3 py-2 text-sm transition-colors duration-200';

const cardClass =
  'bg-white/[0.04] border border-white/[0.08] rounded-2xl p-4 flex flex-col gap-2 backdrop-blur-xl';

const labelClass = 'text-xs font-medium text-slate-400 uppercase tracking-wider';

export default function Step2Refine({ brief, onBriefChange, onBack, onNext }: Step2Props) {
  const set = <K extends keyof RefinedBrief>(key: K, value: RefinedBrief[K]) => {
    onBriefChange({ ...brief, [key]: value });
  };

  const setKeyPoint = (index: number, value: string) => {
    const next = [...brief.keyPoints];
    next[index] = value;
    onBriefChange({ ...brief, keyPoints: next });
  };

  // Ensure keyPoints always has at least 3 slots
  const kp = [
    brief.keyPoints[0] ?? '',
    brief.keyPoints[1] ?? '',
    brief.keyPoints[2] ?? '',
  ];

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center px-4 py-16"
      style={{ backgroundColor: '#050507' }}
    >
      <motion.div
        className="w-full max-w-3xl flex flex-col items-center gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants}>
          <span
            className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium tracking-wide"
            style={{
              background:
                'linear-gradient(135deg, rgba(139,92,246,0.15) 0%, rgba(59,130,246,0.15) 100%)',
              borderColor: 'rgba(139,92,246,0.35)',
              color: '#a78bfa',
            }}
          >
            <span
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: '#a78bfa' }}
            />
            Step 2 of 4 — Your Brief
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div variants={itemVariants} className="text-center">
          <h1 className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
            {"Here's your"}
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              refined brief
            </span>
          </h1>
        </motion.div>

        {/* Subtext */}
        <motion.p
          variants={itemVariants}
          className="text-center text-base text-slate-400 max-w-md leading-relaxed"
        >
          Review and edit before we match a template. Every detail shapes the final page.
        </motion.p>

        {/* Grid of field cards */}
        <motion.div
          variants={itemVariants}
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* Business Name */}
          <div className={cardClass}>
            <label className={labelClass}>Business Name</label>
            <input
              type="text"
              className={inputClass}
              value={brief.businessName}
              onChange={(e) => set('businessName', e.target.value)}
              placeholder="e.g. MedStaff Pro"
            />
          </div>

          {/* Industry */}
          <div className={cardClass}>
            <label className={labelClass}>Industry</label>
            <input
              type="text"
              className={inputClass}
              value={brief.industry}
              onChange={(e) => set('industry', e.target.value)}
              placeholder="e.g. Healthcare Staffing"
            />
          </div>

          {/* Value Proposition */}
          <div className={`${cardClass} md:col-span-2`}>
            <label className={labelClass}>Value Proposition</label>
            <textarea
              rows={2}
              className={`${inputClass} resize-none`}
              value={brief.valueProp}
              onChange={(e) => set('valueProp', e.target.value)}
              placeholder="What makes you uniquely valuable to your customers?"
            />
          </div>

          {/* Target Audience */}
          <div className={cardClass}>
            <label className={labelClass}>Target Audience</label>
            <input
              type="text"
              className={inputClass}
              value={brief.targetAudience}
              onChange={(e) => set('targetAudience', e.target.value)}
              placeholder="e.g. Registered nurses seeking travel contracts"
            />
          </div>

          {/* Tone & Voice */}
          <div className={cardClass}>
            <label className={labelClass}>Tone &amp; Voice</label>
            <select
              className={inputClass}
              value={brief.tone}
              onChange={(e) => set('tone', e.target.value)}
              style={{ appearance: 'none', cursor: 'pointer' }}
            >
              {TONE_OPTIONS.map((opt) => (
                <option
                  key={opt.value}
                  value={opt.value}
                  style={{ backgroundColor: '#0e0e14', color: '#fff' }}
                >
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Key Points */}
          <div className={`${cardClass} md:col-span-2`}>
            <label className={labelClass}>Key Points</label>
            <div className="flex flex-col gap-2">
              {kp.map((point, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span
                    className="flex-shrink-0 inline-flex h-5 w-5 items-center justify-center rounded-full text-xs font-semibold"
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(139,92,246,0.3) 0%, rgba(59,130,246,0.3) 100%)',
                      color: '#a78bfa',
                      border: '1px solid rgba(139,92,246,0.3)',
                    }}
                  >
                    {i + 1}
                  </span>
                  <input
                    type="text"
                    className={inputClass}
                    value={point}
                    onChange={(e) => setKeyPoint(i, e.target.value)}
                    placeholder={`Key point ${i + 1}…`}
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom action row */}
        <motion.div
          variants={itemVariants}
          className="w-full flex items-center justify-between gap-4 pt-2"
        >
          {/* Back button */}
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-1.5 rounded-xl border px-6 py-3 text-sm font-medium text-slate-300 transition-all duration-200"
            style={{
              borderColor: 'rgba(255,255,255,0.1)',
              backgroundColor: 'rgba(255,255,255,0.03)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(139,92,246,0.4)';
              e.currentTarget.style.color = '#c4b5fd';
              e.currentTarget.style.backgroundColor = 'rgba(139,92,246,0.06)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
              e.currentTarget.style.color = '#cbd5e1';
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)';
            }}
          >
            <span className="text-slate-400">←</span>
            Back
          </button>

          {/* Next CTA */}
          <button
            type="button"
            onClick={onNext}
            className="inline-flex items-center gap-2.5 rounded-xl px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #7c3aed 0%, #4338ca 100%)',
              boxShadow: '0 0 30px rgba(139,92,246,0.4)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 45px rgba(139,92,246,0.6)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 0 30px rgba(139,92,246,0.4)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Choose Template
            <span className="text-violet-200">→</span>
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
