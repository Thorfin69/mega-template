import { useState } from 'react';
import { motion } from 'motion/react';
import { TEMPLATES } from '../../platform/templates.registry';

interface Step3Props {
  selectedId: string | null;
  brief: { industry: string; tone: string };
  onSelect: (id: string) => void;
  onBack: () => void;
  onGenerate: () => void;
}

function isBestMatch(industries: string[], briefIndustry: string) {
  const bi = briefIndustry.toLowerCase();
  return bi.length > 0 && industries.some(ind => bi.includes(ind.toLowerCase()) || ind.toLowerCase().includes(bi));
}

export default function Step3Gallery({ selectedId, brief, onSelect, onBack, onGenerate }: Step3Props) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="flex min-h-[calc(100vh-60px)] items-start justify-center px-4 py-16">
      <div className="w-full max-w-5xl flex flex-col gap-12">

        {/* Header */}
        <motion.div className="text-center flex flex-col items-center gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide" style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.25)', color: '#c4b5fd' }}>
            Step 3 of 4 — Pick a Template
          </span>
          <h1 className="font-bold tracking-[-0.04em] text-white" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}>
            Choose your{' '}
            <span style={{ background: 'linear-gradient(135deg,#c4b5fd,#818cf8,#67e8f9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              template
            </span>
          </h1>
          <p className="text-sm leading-relaxed max-w-sm" style={{ color: '#6b7280' }}>
            Select a starting point. Use it directly or let AI fill it with your content.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {TEMPLATES.map((t, i) => {
            const selected = selectedId === t.id;
            const match = isBestMatch(t.industries, brief.industry);
            const isHovered = hovered === t.id;

            return (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative flex flex-col overflow-hidden rounded-2xl cursor-pointer transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.025)',
                  border: `1px solid ${selected ? t.accentColor : isHovered ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.07)'}`,
                  boxShadow: selected
                    ? `0 0 0 1px ${t.accentColor}60, 0 0 50px ${t.accentColor}20, 0 20px 60px rgba(0,0,0,0.4)`
                    : isHovered
                    ? `0 0 30px ${t.accentColor}12, 0 20px 60px rgba(0,0,0,0.3)`
                    : '0 4px 24px rgba(0,0,0,0.2)',
                }}
                onMouseEnter={() => setHovered(t.id)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Preview swatch */}
                <div
                  className="relative overflow-hidden"
                  style={{ height: '180px', background: `linear-gradient(145deg, ${t.accentColor}18 0%, ${t.accentColor}40 50%, ${t.accentColor}20 100%)` }}
                >
                  {/* Subtle grid inside card */}
                  <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

                  {t.previewImage && (
                    <img src={t.previewImage} alt={t.displayName} className="absolute inset-0 h-full w-full object-cover transition-all duration-500" style={{ opacity: isHovered ? 0.75 : 0.5, transform: isHovered ? 'scale(1.03)' : 'scale(1)' }} />
                  )}

                  {/* Accent color circle decoration */}
                  <div style={{ position: 'absolute', bottom: '-30px', right: '-30px', width: '120px', height: '120px', borderRadius: '50%', background: `radial-gradient(circle, ${t.accentColor}30, transparent 70%)` }} />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-start justify-between">
                    {selected && (
                      <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold" style={{ background: `${t.accentColor}dd`, color: '#fff', boxShadow: `0 0 14px ${t.accentColor}80` }}>
                        <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                        Selected
                      </span>
                    )}
                    {!selected && <span />}
                    {match && (
                      <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-semibold" style={{ background: 'rgba(16,185,129,0.2)', border: '1px solid rgba(16,185,129,0.35)', color: '#34d399', backdropFilter: 'blur(8px)' }}>
                        ✦ Best match
                      </span>
                    )}
                  </div>
                </div>

                {/* Card body */}
                <div className="flex flex-col gap-4 p-5 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-base font-bold text-white leading-tight">{t.displayName}</h3>
                      <p className="text-xs mt-0.5" style={{ color: '#4b5563' }}>{t.complexity} · ~{t.swapHours}h to customize</p>
                    </div>
                    <div className="h-8 w-8 rounded-lg shrink-0 flex items-center justify-center" style={{ background: `${t.accentColor}20`, border: `1px solid ${t.accentColor}40` }}>
                      <div className="h-3 w-3 rounded-full" style={{ background: t.accentColor, boxShadow: `0 0 8px ${t.accentColor}` }} />
                    </div>
                  </div>

                  {/* Industry tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {t.industries.slice(0, 4).map(ind => (
                      <span key={ind} className="rounded-full px-2.5 py-0.5 text-[11px]" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.07)', color: '#6b7280' }}>
                        {ind}
                      </span>
                    ))}
                    {t.industries.length > 4 && (
                      <span className="rounded-full px-2.5 py-0.5 text-[11px]" style={{ color: '#4b5563' }}>+{t.industries.length - 4}</span>
                    )}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2 mt-auto pt-1">
                    <button
                      type="button"
                      onClick={() => { window.location.href = t.route; }}
                      className="flex-1 rounded-xl py-2 text-xs font-medium transition-all duration-150"
                      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#6b7280' }}
                      onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.color = '#d1d5db'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.color = '#6b7280'; }}
                    >
                      Use Directly
                    </button>
                    <button
                      type="button"
                      onClick={() => onSelect(t.id)}
                      className="flex-1 rounded-xl py-2 text-xs font-semibold text-white transition-all duration-150"
                      style={{
                        background: selected ? `linear-gradient(135deg, ${t.accentColor}cc, ${t.accentColor}88)` : 'linear-gradient(135deg,#7c3aed,#4f46e5)',
                        boxShadow: selected ? `0 0 18px ${t.accentColor}50` : '0 0 14px rgba(124,58,237,0.3)',
                        border: '1px solid rgba(255,255,255,0.1)',
                      }}
                    >
                      {selected ? '✓ Selected' : 'Generate with AI'}
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom bar */}
        <motion.div className="flex items-center justify-between" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.4 }}>
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
            onClick={onGenerate}
            disabled={selectedId === null}
            className="inline-flex items-center gap-2 rounded-xl px-7 py-2.5 text-sm font-semibold text-white transition-all duration-200 disabled:opacity-35 disabled:cursor-not-allowed"
            style={{
              background: 'linear-gradient(135deg,#7c3aed,#4f46e5)',
              boxShadow: selectedId ? '0 0 28px rgba(124,58,237,0.4), 0 1px 2px rgba(0,0,0,0.2)' : 'none',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
            onMouseEnter={e => { if (selectedId) { e.currentTarget.style.boxShadow = '0 0 44px rgba(124,58,237,0.6)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}}
            onMouseLeave={e => { if (selectedId) { e.currentTarget.style.boxShadow = '0 0 28px rgba(124,58,237,0.4)'; e.currentTarget.style.transform = 'translateY(0)'; }}}
          >
            Generate Content
            <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </motion.div>
      </div>
    </div>
  );
}
