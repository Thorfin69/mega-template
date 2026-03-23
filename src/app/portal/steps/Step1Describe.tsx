import { useState } from 'react';
import { motion } from 'motion/react';

interface Step1Props {
  onComplete: (description: string) => void;
  isLoading: boolean;
  error: string | null;
}

const SUGGESTIONS = [
  { label: 'Travel nursing agency', icon: '🏥' },
  { label: 'B2B SaaS platform', icon: '⚡' },
  { label: 'Healthcare clinic', icon: '💊' },
  { label: 'E-commerce brand', icon: '🛍️' },
  { label: 'Real estate firm', icon: '🏢' },
];

const stagger = { visible: { transition: { staggerChildren: 0.07 } } };
const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as number[] } } };

export default function Step1Describe({ onComplete, isLoading, error }: Step1Props) {
  const [text, setText] = useState('');
  const [focused, setFocused] = useState(false);

  const empty = text.trim().length === 0;

  return (
    <div className="flex min-h-[calc(100vh-60px)] items-center justify-center px-4 py-20">
      <motion.div
        className="w-full max-w-2xl flex flex-col items-center"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={fadeUp} className="mb-8">
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide"
            style={{ background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.3)', color: '#c4b5fd' }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: '#a78bfa', animationDuration: '2s' }} />
              <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: '#a78bfa' }} />
            </span>
            AI-Powered Page Builder
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          className="mb-5 text-center font-bold leading-[1.08] tracking-[-0.04em]"
          style={{ fontSize: 'clamp(2.8rem, 7vw, 4.5rem)' }}
        >
          <span className="text-white">What do you want</span>
          <br />
          <span style={{ background: 'linear-gradient(135deg, #c4b5fd 0%, #818cf8 45%, #67e8f9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            to build?
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={fadeUp}
          className="mb-10 text-center text-base leading-relaxed"
          style={{ color: '#6b7280', maxWidth: '420px' }}
        >
          Describe your business and goals. Our AI will architect the perfect landing page.
        </motion.p>

        {/* Textarea */}
        <motion.div variants={fadeUp} className="w-full mb-5">
          <div
            className="relative rounded-2xl transition-all duration-200"
            style={{
              background: focused ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.025)',
              border: focused ? '1px solid rgba(124,58,237,0.55)' : '1px solid rgba(255,255,255,0.08)',
              boxShadow: focused ? '0 0 0 4px rgba(124,58,237,0.1), 0 20px 60px rgba(0,0,0,0.3)' : '0 4px 24px rgba(0,0,0,0.2)',
            }}
          >
            <textarea
              value={text}
              onChange={e => setText(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              rows={5}
              placeholder="e.g. A travel nursing agency that connects hospitals with qualified travel nurses, targeting nurses seeking high-paying contracts with full housing and benefits..."
              className="w-full resize-none bg-transparent px-6 py-5 text-[15px] leading-relaxed text-white placeholder-[#374151] focus:outline-none"
            />
            <div className="flex items-center justify-between px-6 pb-4">
              <span className="text-xs" style={{ color: '#374151' }}>
                {text.length > 0 ? `${text.length} characters` : 'Be as detailed as you want'}
              </span>
              <button
                type="button"
                onClick={() => { if (!empty && !isLoading) onComplete(text.trim()); }}
                disabled={empty || isLoading}
                className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-40"
                style={{
                  background: 'linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)',
                  boxShadow: !empty && !isLoading ? '0 0 20px rgba(124,58,237,0.4), 0 1px 2px rgba(0,0,0,0.2)' : 'none',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                {isLoading ? (
                  <>
                    <svg className="h-3.5 w-3.5 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)" strokeWidth="3" />
                      <path d="M12 2a10 10 0 0110 10" stroke="white" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                    Thinking...
                  </>
                ) : (
                  <>
                    Continue
                    <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Suggestions */}
        <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-2">
          <span className="text-xs mr-1 self-center" style={{ color: '#374151' }}>Try:</span>
          {SUGGESTIONS.map(s => (
            <button
              key={s.label}
              type="button"
              onClick={() => setText(s.label)}
              className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs transition-all duration-150"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#9ca3af' }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(124,58,237,0.1)';
                e.currentTarget.style.borderColor = 'rgba(124,58,237,0.35)';
                e.currentTarget.style.color = '#c4b5fd';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.color = '#9ca3af';
              }}
            >
              <span>{s.icon}</span>
              {s.label}
            </button>
          ))}
        </motion.div>

        {/* Error */}
        {error && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-5 text-sm text-red-400 text-center">
            {error}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}
