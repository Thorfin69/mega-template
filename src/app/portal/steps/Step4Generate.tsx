import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ContentResult } from '../types';

interface Step4Props {
  result: ContentResult | null;
  loading: boolean;
  error: string | null;
  onStartOver: () => void;
}

const LOADING_STEPS = [
  { label: 'Analyzing your brief', icon: '🧠' },
  { label: 'Writing copy for each section', icon: '✍️' },
  { label: 'Sourcing images from Unsplash', icon: '🖼️' },
  { label: 'Finalizing your content', icon: '✨' },
];

function groupSlots(slots: Record<string, string>): Record<string, Record<string, string>> {
  const out: Record<string, Record<string, string>> = {};
  for (const [k, v] of Object.entries(slots)) {
    const sec = k.includes('.') ? k.split('.')[0] : k;
    if (!out[sec]) out[sec] = {};
    out[sec][k] = v;
  }
  return out;
}

function Accordion({ section, slots }: { section: string; slots: Record<string, string> }) {
  const [open, setOpen] = useState(false);
  const entries = Object.entries(slots);
  const imgCount = entries.filter(([, v]) => v.startsWith('https://')).length;

  return (
    <div
      className="overflow-hidden rounded-2xl transition-all duration-200"
      style={{ background: 'rgba(255,255,255,0.025)', border: `1px solid ${open ? 'rgba(124,58,237,0.2)' : 'rgba(255,255,255,0.06)'}` }}
    >
      <button
        type="button"
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between px-5 py-4 text-left transition-colors duration-150"
        style={{ background: open ? 'rgba(124,58,237,0.05)' : 'transparent' }}
      >
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#e2e8f0' }}>
            {section.replace(/_/g, ' ')}
          </span>
          <span className="text-[10px] rounded-full px-2 py-0.5" style={{ background: 'rgba(255,255,255,0.06)', color: '#4b5563' }}>
            {entries.length} fields
          </span>
          {imgCount > 0 && (
            <span className="text-[10px] rounded-full px-2 py-0.5" style={{ background: 'rgba(124,58,237,0.12)', color: '#a78bfa', border: '1px solid rgba(124,58,237,0.2)' }}>
              {imgCount} images
            </span>
          )}
        </div>
        <svg className="h-4 w-4 transition-transform duration-200" style={{ color: '#4b5563', transform: open ? 'rotate(180deg)' : '' }} viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.05)' }}
          >
            <div className="px-5 py-3 flex flex-col gap-0">
              {entries.map(([key, val]) => (
                <div key={key} className="flex items-start gap-4 py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                  <span className="shrink-0 text-[11px] font-mono pt-0.5" style={{ color: '#6366f1', minWidth: '160px', maxWidth: '180px', wordBreak: 'break-all' }}>{key}</span>
                  <div className="flex items-start gap-3 flex-1 min-w-0">
                    {val.startsWith('https://') && (
                      <img src={val} alt={key} className="h-14 w-20 rounded-lg object-cover shrink-0" style={{ border: '1px solid rgba(255,255,255,0.08)' }} />
                    )}
                    {val.startsWith('UNSPLASH:') ? (
                      <span className="text-xs italic" style={{ color: '#4b5563' }}>{val.replace('UNSPLASH:', '').trim()}</span>
                    ) : (
                      <span className="text-xs leading-relaxed break-words" style={{ color: '#d1d5db' }}>{val}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Step4Generate({ result, loading, error, onStartOver }: Step4Props) {
  const [loadingStep, setLoadingStep] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!loading) { setLoadingStep(0); return; }
    const id = setInterval(() => setLoadingStep(p => p < LOADING_STEPS.length - 1 ? p + 1 : p), 2200);
    return () => clearInterval(id);
  }, [loading]);

  const handleDownload = useCallback(() => {
    if (!result) return;
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([JSON.stringify(result, null, 2)], { type: 'application/json' }));
    a.download = `${result.templateId}-content.json`;
    a.click();
  }, [result]);

  const handleCopy = useCallback(() => {
    if (!result) return;
    navigator.clipboard.writeText(JSON.stringify(result.slots, null, 2)).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [result]);

  /* ── ERROR ── */
  if (error) {
    return (
      <div className="flex min-h-[calc(100vh-60px)] items-center justify-center px-4">
        <motion.div
          className="w-full max-w-md rounded-2xl p-8 flex flex-col items-center gap-6 text-center"
          style={{ background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.2)' }}
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
        >
          <div className="h-12 w-12 rounded-full flex items-center justify-center" style={{ background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.25)' }}>
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none"><path d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="#f87171" strokeWidth="2" strokeLinecap="round" /></svg>
          </div>
          <div><h2 className="text-lg font-bold text-white mb-1">Something went wrong</h2><p className="text-sm" style={{ color: '#6b7280' }}>{error}</p></div>
          <button type="button" onClick={onStartOver} className="rounded-xl px-5 py-2.5 text-sm font-medium text-white transition-all" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
            ← Start Over
          </button>
        </motion.div>
      </div>
    );
  }

  /* ── LOADING ── */
  if (loading) {
    return (
      <div className="flex min-h-[calc(100vh-60px)] items-center justify-center px-4">
        <motion.div className="w-full max-w-sm flex flex-col items-center gap-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          {/* Spinner */}
          <div className="relative flex items-center justify-center">
            <div className="h-20 w-20 rounded-full" style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.15)' }} />
            <svg className="absolute h-20 w-20 animate-spin" style={{ animationDuration: '1.2s' }} viewBox="0 0 80 80" fill="none">
              <defs>
                <linearGradient id="sg" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7c3aed" />
                  <stop offset="60%" stopColor="#4f46e5" />
                  <stop offset="100%" stopColor="#4f46e5" stopOpacity="0" />
                </linearGradient>
              </defs>
              <circle cx="40" cy="40" r="34" stroke="url(#sg)" strokeWidth="3" strokeLinecap="round" strokeDasharray="80 134" />
            </svg>
            <span className="absolute text-2xl">✦</span>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-2" style={{ letterSpacing: '-0.03em' }}>
              Building your page
            </h2>
            <p className="text-sm" style={{ color: '#6b7280' }}>Takes about 30–60 seconds</p>
          </div>

          <div className="w-full flex flex-col gap-3">
            {LOADING_STEPS.map((s, i) => {
              const done = i < loadingStep;
              const active = i === loadingStep;
              return (
                <motion.div
                  key={s.label}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl"
                  style={{ background: active ? 'rgba(124,58,237,0.08)' : 'transparent', border: active ? '1px solid rgba(124,58,237,0.15)' : '1px solid transparent', transition: 'all 0.3s' }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <span className="text-base w-6 text-center shrink-0">
                    {done ? '✓' : active ? s.icon : '○'}
                  </span>
                  <span className="text-sm" style={{ color: done ? '#34d399' : active ? '#e2e8f0' : '#374151', fontWeight: active ? 500 : 400 }}>
                    {s.label}
                  </span>
                  {active && (
                    <span className="ml-auto flex gap-0.5">
                      {[0, 1, 2].map(d => (
                        <motion.span key={d} className="h-1 w-1 rounded-full" style={{ background: '#7c3aed' }}
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 1.2, delay: d * 0.2, repeat: Infinity }}
                        />
                      ))}
                    </span>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    );
  }

  /* ── RESULT ── */
  if (result) {
    const groups = groupSlots(result.slots);
    const sections = Object.keys(groups);

    return (
      <div className="flex min-h-[calc(100vh-60px)] items-start justify-center px-4 py-16">
        <div className="w-full max-w-3xl flex flex-col gap-10">

          {/* Header */}
          <motion.div className="text-center flex flex-col items-center gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="h-14 w-14 rounded-2xl flex items-center justify-center text-2xl" style={{ background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.3)', boxShadow: '0 0 30px rgba(124,58,237,0.2)' }}>
              ✦
            </div>
            <h1 className="font-bold tracking-[-0.04em] text-white" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: 1.1 }}>
              Your content is{' '}
              <span style={{ background: 'linear-gradient(135deg,#c4b5fd,#818cf8,#67e8f9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                ready
              </span>
            </h1>
            <p className="text-sm" style={{ color: '#6b7280' }}>Review below, then download or copy to start building.</p>
          </motion.div>

          {/* Stats */}
          <motion.div className="flex items-center justify-center gap-6 flex-wrap" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}>
            {[
              { label: 'Template', value: result.templateId, color: '#7c3aed' },
              { label: 'Fields filled', value: String(Object.keys(result.slots).length), color: '#4f46e5' },
              { label: 'Sections', value: String(sections.length), color: '#06b6d4' },
            ].map(stat => (
              <div key={stat.label} className="flex items-center gap-2 px-4 py-2 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <span className="h-2 w-2 rounded-full shrink-0" style={{ background: stat.color }} />
                <span className="text-xs" style={{ color: '#4b5563' }}>{stat.label}:</span>
                <span className="text-xs font-semibold text-white">{stat.value}</span>
              </div>
            ))}
          </motion.div>

          {/* Actions */}
          <motion.div className="flex flex-wrap items-center justify-center gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <button type="button" onClick={handleDownload}
              className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition-all"
              style={{ background: 'linear-gradient(135deg,#7c3aed,#4f46e5)', boxShadow: '0 0 22px rgba(124,58,237,0.35)', border: '1px solid rgba(255,255,255,0.1)' }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 36px rgba(124,58,237,0.55)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 0 22px rgba(124,58,237,0.35)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
              Download JSON
            </button>
            <button type="button" onClick={handleCopy}
              className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-all"
              style={{ background: copied ? 'rgba(16,185,129,0.1)' : 'rgba(255,255,255,0.05)', border: `1px solid ${copied ? 'rgba(16,185,129,0.3)' : 'rgba(255,255,255,0.08)'}`, color: copied ? '#34d399' : '#9ca3af' }}
            >
              {copied ? '✓ Copied!' : 'Copy to Clipboard'}
            </button>
            <button type="button" onClick={onStartOver}
              className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-all"
              style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.06)', color: '#4b5563' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#9ca3af'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = '#4b5563'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; }}
            >
              Start Over
            </button>
          </motion.div>

          {/* Accordions */}
          <motion.div className="flex flex-col gap-2" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            {sections.map(sec => <Accordion key={sec} section={sec} slots={groups[sec]} />)}
          </motion.div>
        </div>
      </div>
    );
  }

  return null;
}
