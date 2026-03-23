import { useState } from 'react';
import { motion } from 'motion/react';

interface Step1Props {
  onComplete: (description: string) => void;
  isLoading: boolean;
}

const SUGGESTIONS = [
  'Travel nursing agency',
  'B2B SaaS platform',
  'Healthcare clinic',
  'E-commerce brand',
  'Real estate firm',
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
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

export default function Step1Describe({ onComplete, isLoading }: Step1Props) {
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    if (!description.trim() || isLoading) return;
    onComplete(description.trim());
  };

  const handleSuggestion = (suggestion: string) => {
    setDescription(suggestion);
  };

  const isEmpty = description.trim().length === 0;

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center px-4 py-16"
      style={{ backgroundColor: '#050507' }}
    >
      <motion.div
        className="w-full max-w-2xl flex flex-col items-center gap-8"
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
            AI-Powered Page Builder
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div variants={itemVariants} className="text-center">
          <h1 className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
            What are you
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              building today?
            </span>
          </h1>
        </motion.div>

        {/* Subtext */}
        <motion.p
          variants={itemVariants}
          className="text-center text-base text-slate-400 max-w-md leading-relaxed"
        >
          Describe your business, audience, and goals. Our AI will architect the perfect page.
        </motion.p>

        {/* Textarea */}
        <motion.div variants={itemVariants} className="w-full">
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={6}
            placeholder="e.g. A travel nursing agency that connects hospitals with qualified travel nurses. We're looking to attract nurses seeking high-paying contracts with great benefits..."
            className="w-full rounded-2xl px-5 py-4 text-sm text-white placeholder-slate-500 resize-none transition-all duration-300 focus:outline-none"
            style={{
              backgroundColor: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              backdropFilter: 'blur(24px)',
              boxShadow: description.trim().length > 0
                ? '0 0 0 1.5px rgba(139,92,246,0.5), 0 0 40px rgba(139,92,246,0.12)'
                : undefined,
            }}
            onFocus={(e) => {
              e.currentTarget.style.border = '1px solid rgba(139,92,246,0.6)';
              e.currentTarget.style.boxShadow =
                '0 0 0 1.5px rgba(139,92,246,0.3), 0 0 40px rgba(139,92,246,0.12)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.border = '1px solid rgba(255,255,255,0.08)';
              e.currentTarget.style.boxShadow =
                description.trim().length > 0
                  ? '0 0 0 1.5px rgba(139,92,246,0.4), 0 0 30px rgba(139,92,246,0.1)'
                  : 'none';
            }}
          />
        </motion.div>

        {/* Suggestion Pills */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-2"
        >
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => handleSuggestion(s)}
              className="rounded-full px-4 py-1.5 text-sm text-slate-300 transition-all cursor-pointer"
              style={{
                backgroundColor: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(139,92,246,0.5)';
                e.currentTarget.style.color = '#c4b5fd';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.color = '#cbd5e1';
              }}
            >
              {s}
            </button>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div variants={itemVariants} className="w-full flex justify-center">
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isEmpty || isLoading}
            className="relative inline-flex items-center gap-2.5 rounded-xl px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50"
            style={{
              background: isEmpty || isLoading
                ? 'linear-gradient(135deg, rgba(109,40,217,0.5) 0%, rgba(67,56,202,0.5) 100%)'
                : 'linear-gradient(135deg, #7c3aed 0%, #4338ca 100%)',
              boxShadow:
                !isEmpty && !isLoading
                  ? '0 0 30px rgba(139,92,246,0.4)'
                  : undefined,
            }}
            onMouseEnter={(e) => {
              if (!isEmpty && !isLoading) {
                e.currentTarget.style.boxShadow =
                  '0 0 45px rgba(139,92,246,0.6)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isEmpty && !isLoading) {
                e.currentTarget.style.boxShadow =
                  '0 0 30px rgba(139,92,246,0.4)';
                e.currentTarget.style.transform = 'translateY(0)';
              }
            }}
          >
            {isLoading ? (
              <>
                <svg
                  className="h-4 w-4 animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Refining with AI...
              </>
            ) : (
              <>
                Refine with AI
                <span className="text-violet-200">→</span>
              </>
            )}
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
