import { motion } from 'motion/react';
import { RefinedBrief } from '../types';

interface Step2Props {
  brief: RefinedBrief;
  onBriefChange: (brief: RefinedBrief) => void;
  onBack: () => void;
  onNext: () => void;
}

const TONES = ['professional', 'friendly', 'bold', 'technical', 'warm'];

const stagger = { visible: { transition: { staggerChildren: 0.06 } } };
const fadeUp = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] as number[] } } };

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: '10px',
  padding: '10px 14px',
  fontSize: '13px',
  color: '#f1f5f9',
  outline: 'none',
  transition: 'all 0.15s',
};

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div
      className="flex flex-col gap-2.5 rounded-2xl p-4"
      style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)' }}
    >
      <label className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: '#6b7280' }}>
        {label}
      </label>
      {children}
    </div>
  );
}

function StyledInput({ value, onChange, placeholder }: { value: string; onChange: (v: string) => void; placeholder?: string }) {
  return (
    <input
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      style={inputStyle}
      onFocus={e => { e.currentTarget.style.borderColor = 'rgba(124,58,237,0.5)'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
      onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
    />
  );
}

export default function Step2Refine({ brief, onBriefChange, onBack, onNext }: Step2Props) {
  const set = <K extends keyof RefinedBrief>(key: K, value: RefinedBrief[K]) =>
    onBriefChange({ ...brief, [key]: value });

  const setKp = (i: number, v: string) => {
    const next = [...brief.keyPoints];
    next[i] = v;
    onBriefChange({ ...brief, keyPoints: next });
  };

  const kp = [brief.keyPoints[0] ?? '', brief.keyPoints[1] ?? '', brief.keyPoints[2] ?? ''];

  return (
    <div className="flex min-h-[calc(100vh-60px)] items-start justify-center px-4 py-16">
      <motion.div className="w-full max-w-3xl flex flex-col gap-10" variants={stagger} initial="hidden" animate="visible">

        {/* Header */}
        <motion.div variants={fadeUp} className="text-center flex flex-col items-center gap-4">
          <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide" style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.25)', color: '#c4b5fd' }}>
            Step 2 of 4 — Review your brief
          </span>
          <h1 className="font-bold tracking-[-0.04em] text-white" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}>
            Here's what we{' '}
            <span style={{ background: 'linear-gradient(135deg,#c4b5fd,#818cf8,#67e8f9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              extracted
            </span>
          </h1>
          <p className="text-sm leading-relaxed max-w-sm" style={{ color: '#6b7280' }}>
            Review and refine. Every detail shapes the copy and design of your page.
          </p>
        </motion.div>

        {/* Fields grid */}
        <motion.div variants={fadeUp} className="grid grid-cols-1 gap-3 sm:grid-cols-2">

          <Field label="Business Name">
            <StyledInput value={brief.businessName} onChange={v => set('businessName', v)} placeholder="e.g. MedStaff Pro" />
          </Field>

          <Field label="Industry">
            <StyledInput value={brief.industry} onChange={v => set('industry', v)} placeholder="e.g. Healthcare Staffing" />
          </Field>

          <div className="sm:col-span-2">
            <Field label="Value Proposition">
              <textarea
                value={brief.valueProp}
                onChange={e => set('valueProp', e.target.value)}
                placeholder="What makes you uniquely valuable?"
                rows={2}
                style={{ ...inputStyle, resize: 'none' }}
                onFocus={e => { e.currentTarget.style.borderColor = 'rgba(124,58,237,0.5)'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
                onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
              />
            </Field>
          </div>

          <Field label="Target Audience">
            <StyledInput value={brief.targetAudience} onChange={v => set('targetAudience', v)} placeholder="e.g. Registered nurses" />
          </Field>

          <Field label="Tone & Voice">
            <div className="flex flex-wrap gap-2">
              {TONES.map(t => (
                <button
                  key={t}
                  type="button"
                  onClick={() => set('tone', t)}
                  className="rounded-lg px-3 py-1.5 text-xs font-medium capitalize transition-all duration-150"
                  style={
                    brief.tone === t
                      ? { background: 'rgba(124,58,237,0.25)', border: '1px solid rgba(124,58,237,0.5)', color: '#c4b5fd' }
                      : { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#6b7280' }
                  }
                >
                  {t}
                </button>
              ))}
            </div>
          </Field>

          <div className="sm:col-span-2">
            <Field label="Key Differentiators">
              <div className="flex flex-col gap-2">
                {kp.map((pt, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="shrink-0 text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center" style={{ background: 'rgba(124,58,237,0.2)', color: '#a78bfa', border: '1px solid rgba(124,58,237,0.3)' }}>
                      {i + 1}
                    </span>
                    <StyledInput value={pt} onChange={v => setKp(i, v)} placeholder={`Key point ${i + 1}`} />
                  </div>
                ))}
              </div>
            </Field>
          </div>
        </motion.div>

        {/* Actions */}
        <motion.div variants={fadeUp} className="flex items-center justify-between">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-150"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#6b7280' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.16)'; e.currentTarget.style.color = '#d1d5db'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = '#6b7280'; }}
          >
            <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none"><path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            Back
          </button>
          <button
            type="button"
            onClick={onNext}
            className="inline-flex items-center gap-2 rounded-xl px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200"
            style={{ background: 'linear-gradient(135deg,#7c3aed,#4f46e5)', boxShadow: '0 0 24px rgba(124,58,237,0.35), 0 1px 2px rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)' }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 40px rgba(124,58,237,0.55), 0 1px 2px rgba(0,0,0,0.2)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 0 24px rgba(124,58,237,0.35), 0 1px 2px rgba(0,0,0,0.2)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            Choose Template
            <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
