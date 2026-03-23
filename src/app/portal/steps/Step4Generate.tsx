import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ContentResult } from '../types';

interface Step4Props {
  result: ContentResult | null;
  loading: boolean;
  error: string | null;
  onStartOver: () => void;
}

// ─── Spinner SVG ─────────────────────────────────────────────────────────────

function GradientSpinner({ size = 56 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 56 56"
      fill="none"
      className="animate-spin"
      style={{ animationDuration: '0.9s' }}
    >
      <defs>
        <linearGradient id="spinnerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="50%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
        </linearGradient>
      </defs>
      <circle
        cx="28"
        cy="28"
        r="22"
        stroke="rgba(255,255,255,0.06)"
        strokeWidth="4"
      />
      <circle
        cx="28"
        cy="28"
        r="22"
        stroke="url(#spinnerGrad)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="100 38"
      />
    </svg>
  );
}

// ─── Small inline spinner for step list ──────────────────────────────────────

function InlineSpinner() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="animate-spin shrink-0"
      style={{ animationDuration: '0.75s' }}
    >
      <circle
        cx="8"
        cy="8"
        r="6"
        stroke="rgba(255,255,255,0.1)"
        strokeWidth="2"
      />
      <circle
        cx="8"
        cy="8"
        r="6"
        stroke="#8b5cf6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="24 12"
      />
    </svg>
  );
}

// ─── Loading steps config ─────────────────────────────────────────────────────

const LOADING_STEPS = [
  'Analyzing your brief',
  'Writing copy for each section',
  'Sourcing images from Unsplash',
  'Finalizing your content',
];

// ─── Group slots by section prefix ───────────────────────────────────────────

function groupSlots(slots: Record<string, string>): Record<string, Record<string, string>> {
  const groups: Record<string, Record<string, string>> = {};
  for (const [key, value] of Object.entries(slots)) {
    const dotIdx = key.indexOf('.');
    const section = dotIdx !== -1 ? key.slice(0, dotIdx) : key;
    if (!groups[section]) groups[section] = {};
    groups[section][key] = value;
  }
  return groups;
}

function isImageValue(value: string): boolean {
  return value.startsWith('https://');
}

function isUnresolvedUnsplash(value: string): boolean {
  return value.startsWith('UNSPLASH:');
}

// ─── Section Accordion ────────────────────────────────────────────────────────

function SectionAccordion({
  sectionName,
  slots,
}: {
  sectionName: string;
  slots: Record<string, string>;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="rounded-xl overflow-hidden transition-all duration-200"
      style={{
        backgroundColor: 'rgba(255,255,255,0.03)',
        border: `1px solid ${open ? 'rgba(139,92,246,0.25)' : 'rgba(255,255,255,0.07)'}`,
      }}
    >
      {/* Header */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-5 py-3.5 text-left transition-colors duration-150"
        style={{
          backgroundColor: open ? 'rgba(139,92,246,0.06)' : 'transparent',
        }}
        onMouseEnter={(e) => {
          if (!open) e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)';
        }}
        onMouseLeave={(e) => {
          if (!open) e.currentTarget.style.backgroundColor = 'transparent';
        }}
      >
        <span className="text-xs font-semibold tracking-widest text-slate-300 uppercase">
          {sectionName.replace(/_/g, ' ')}
        </span>
        <div className="flex items-center gap-2.5">
          <span className="text-xs text-slate-500">{Object.keys(slots).length} slots</span>
          <svg
            className="h-4 w-4 text-slate-500 transition-transform duration-200"
            style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </button>

      {/* Content */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div
              className="px-5 pb-4 pt-1 flex flex-col gap-0"
              style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
            >
              {Object.entries(slots).map(([key, value]) => (
                <div
                  key={key}
                  className="flex items-start gap-4 py-3"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}
                >
                  {/* Key */}
                  <span
                    className="shrink-0 text-xs font-mono pt-0.5"
                    style={{ color: '#818cf8', minWidth: '180px', maxWidth: '200px', wordBreak: 'break-all' }}
                  >
                    {key}
                  </span>

                  {/* Value */}
                  <div className="flex items-start gap-3 flex-1 min-w-0">
                    {isImageValue(value) && (
                      <img
                        src={value}
                        alt={key}
                        className="h-16 w-24 rounded-lg object-cover shrink-0"
                        style={{ border: '1px solid rgba(255,255,255,0.08)' }}
                      />
                    )}
                    {isUnresolvedUnsplash(value) ? (
                      <span className="text-xs italic text-slate-500 break-all">
                        {value.replace('UNSPLASH:', '').trim()}
                      </span>
                    ) : (
                      <span className="text-xs text-slate-300 break-words leading-relaxed">
                        {value}
                      </span>
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

// ─── Confetti Dots ────────────────────────────────────────────────────────────

const CONFETTI = [
  { x: '15%', color: '#8b5cf6', size: 8, delay: 0 },
  { x: '35%', color: '#3b82f6', size: 6, delay: 0.15 },
  { x: '55%', color: '#06b6d4', size: 9, delay: 0.05 },
  { x: '72%', color: '#a78bfa', size: 5, delay: 0.2 },
  { x: '88%', color: '#60a5fa', size: 7, delay: 0.1 },
];

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Step4Generate({ result, loading, error, onStartOver }: Step4Props) {
  const [loadingStep, setLoadingStep] = useState(0);
  const [copied, setCopied] = useState(false);

  // Advance loading steps every 2s
  useEffect(() => {
    if (!loading) {
      setLoadingStep(0);
      return;
    }
    const id = setInterval(() => {
      setLoadingStep((prev) => (prev < LOADING_STEPS.length - 1 ? prev + 1 : prev));
    }, 2000);
    return () => clearInterval(id);
  }, [loading]);

  const handleDownload = useCallback(() => {
    if (!result) return;
    const blob = new Blob([JSON.stringify(result, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${result.templateId}-content.json`;
    a.click();
    URL.revokeObjectURL(url);
  }, [result]);

  const handleCopy = useCallback(() => {
    if (!result) return;
    navigator.clipboard.writeText(JSON.stringify(result.slots, null, 2)).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [result]);

  // ── ERROR STATE ──────────────────────────────────────────────────────────────
  if (error !== null) {
    return (
      <div
        className="min-h-screen w-full flex items-center justify-center px-4 py-16"
        style={{ backgroundColor: '#050507' }}
      >
        <motion.div
          className="w-full max-w-lg rounded-2xl p-8 flex flex-col items-center gap-6 text-center"
          style={{
            backgroundColor: 'rgba(239,68,68,0.07)',
            border: '1px solid rgba(239,68,68,0.25)',
            backdropFilter: 'blur(24px)',
          }}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Error icon */}
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full"
            style={{ backgroundColor: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.3)' }}
          >
            <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
                stroke="#f87171"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-white">Something went wrong</h2>
            <p className="text-sm text-slate-400 leading-relaxed">{error}</p>
          </div>

          <button
            type="button"
            onClick={onStartOver}
            className="inline-flex items-center gap-2 rounded-xl px-6 py-2.5 text-sm font-medium text-slate-300 transition-all duration-200"
            style={{
              backgroundColor: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.12)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.24)';
              e.currentTarget.style.color = '#fff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
              e.currentTarget.style.color = '#cbd5e1';
            }}
          >
            ← Start Over
          </button>
        </motion.div>
      </div>
    );
  }

  // ── LOADING STATE ────────────────────────────────────────────────────────────
  if (loading) {
    return (
      <div
        className="min-h-screen w-full flex items-center justify-center px-4 py-16"
        style={{ backgroundColor: '#050507' }}
      >
        <motion.div
          className="w-full max-w-sm flex flex-col items-center gap-8 text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Large spinner */}
          <GradientSpinner size={64} />

          {/* Heading */}
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold text-white">
              <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Generating your page...
              </span>
            </h2>
            <p className="text-sm text-slate-400">This takes about 30–60 seconds</p>
          </div>

          {/* Status steps */}
          <div className="w-full flex flex-col gap-3">
            {LOADING_STEPS.map((label, idx) => {
              const isDone = idx < loadingStep;
              const isCurrent = idx === loadingStep;
              const isPending = idx > loadingStep;

              return (
                <motion.div
                  key={label}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                >
                  {/* Icon */}
                  <div className="shrink-0 w-5 h-5 flex items-center justify-center">
                    {isDone && (
                      <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="9" fill="rgba(16,185,129,0.2)" stroke="rgba(16,185,129,0.5)" strokeWidth="1" />
                        <path
                          d="M6 10l3 3 5-5"
                          stroke="#34d399"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                    {isCurrent && <InlineSpinner />}
                    {isPending && (
                      <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="9" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
                      </svg>
                    )}
                  </div>

                  {/* Label */}
                  <span
                    className="text-sm"
                    style={{
                      color: isDone ? '#34d399' : isCurrent ? '#e2e8f0' : '#475569',
                      fontWeight: isCurrent ? 500 : 400,
                    }}
                  >
                    {label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    );
  }

  // ── RESULT STATE ─────────────────────────────────────────────────────────────
  if (result !== null) {
    const groups = groupSlots(result.slots);
    const sectionNames = Object.keys(groups);

    return (
      <div
        className="min-h-screen w-full px-4 py-16"
        style={{ backgroundColor: '#050507' }}
      >
        <div className="mx-auto max-w-3xl flex flex-col gap-10">

          {/* Confetti dots */}
          <div className="relative h-10 w-full overflow-visible pointer-events-none">
            {CONFETTI.map((dot, i) => (
              <motion.div
                key={i}
                className="absolute bottom-0 rounded-full"
                style={{
                  left: dot.x,
                  width: dot.size,
                  height: dot.size,
                  backgroundColor: dot.color,
                  boxShadow: `0 0 10px ${dot.color}88`,
                }}
                animate={{ y: [-20, -60], opacity: [1, 0] }}
                transition={{
                  duration: 1.4,
                  delay: dot.delay,
                  repeat: Infinity,
                  repeatDelay: 2.5,
                  ease: 'easeOut',
                }}
              />
            ))}
          </div>

          {/* Header */}
          <motion.div
            className="flex flex-col items-center gap-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Your content is ready
              </span>
            </h1>
            <p className="text-base text-slate-400 max-w-md leading-relaxed">
              Review your generated content below. Download or copy to start building.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Download JSON */}
            <button
              type="button"
              onClick={handleDownload}
              className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200"
              style={{
                background: 'linear-gradient(135deg, #7c3aed 0%, #4338ca 100%)',
                boxShadow: '0 0 24px rgba(139,92,246,0.35)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 38px rgba(139,92,246,0.55)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 24px rgba(139,92,246,0.35)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Download JSON
            </button>

            {/* Copy to Clipboard */}
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-200"
              style={{
                backgroundColor: copied ? 'rgba(16,185,129,0.12)' : 'rgba(255,255,255,0.05)',
                border: `1px solid ${copied ? 'rgba(16,185,129,0.35)' : 'rgba(255,255,255,0.1)'}`,
                color: copied ? '#34d399' : '#cbd5e1',
              }}
              onMouseEnter={(e) => {
                if (!copied) {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)';
                  e.currentTarget.style.color = '#fff';
                }
              }}
              onMouseLeave={(e) => {
                if (!copied) {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.color = '#cbd5e1';
                }
              }}
            >
              {copied ? (
                <>
                  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Copied!
                </>
              ) : (
                <>
                  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                    <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                  </svg>
                  Copy to Clipboard
                </>
              )}
            </button>

            {/* Start Over */}
            <button
              type="button"
              onClick={onStartOver}
              className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium text-slate-500 transition-all duration-200"
              style={{
                backgroundColor: 'transparent',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)';
                e.currentTarget.style.color = '#94a3b8';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                e.currentTarget.style.color = '#64748b';
              }}
            >
              Start Over
            </button>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            className="flex items-center justify-center gap-6 flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.4 }}
          >
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span
                className="inline-block h-2 w-2 rounded-full"
                style={{ backgroundColor: '#8b5cf6' }}
              />
              Template:{' '}
              <span className="text-slate-300 font-medium ml-1">{result.templateId}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span
                className="inline-block h-2 w-2 rounded-full"
                style={{ backgroundColor: '#3b82f6' }}
              />
              {Object.keys(result.slots).length} slots filled
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span
                className="inline-block h-2 w-2 rounded-full"
                style={{ backgroundColor: '#06b6d4' }}
              />
              {sectionNames.length} sections
            </div>
          </motion.div>

          {/* Section Accordions */}
          <motion.div
            className="flex flex-col gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {sectionNames.map((section) => (
              <SectionAccordion
                key={section}
                sectionName={section}
                slots={groups[section]}
              />
            ))}
          </motion.div>
        </div>
      </div>
    );
  }

  // Null result and not loading — render nothing (should not occur in normal flow)
  return null;
}
