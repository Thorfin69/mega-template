import { motion } from 'motion/react';
import { TEMPLATES } from '../../platform/templates.registry';

interface Step3Props {
  selectedId: string | null;
  brief: { industry: string; tone: string };
  onSelect: (id: string) => void;
  onBack: () => void;
  onGenerate: () => void;
  onUseDirectly: (id: string) => void;
}

const bgStyleDotColor: Record<string, string> = {
  dark: '#a78bfa',
  light: '#34d399',
  mixed: '#60a5fa',
};

const bgStyleLabelColor: Record<string, string> = {
  dark: 'rgba(167,139,250,0.15)',
  light: 'rgba(52,211,153,0.15)',
  mixed: 'rgba(96,165,250,0.15)',
};

const bgStyleBorderColor: Record<string, string> = {
  dark: 'rgba(167,139,250,0.25)',
  light: 'rgba(52,211,153,0.25)',
  mixed: 'rgba(96,165,250,0.25)',
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.08,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

export default function Step3Gallery({
  selectedId,
  brief,
  onSelect,
  onBack,
  onGenerate,
  onUseDirectly,
}: Step3Props) {
  const isBestMatch = (industries: string[]) => {
    const briefIndustry = brief.industry.toLowerCase();
    return industries.some((ind) => briefIndustry.includes(ind.toLowerCase()));
  };

  return (
    <div
      className="min-h-screen w-full px-4 py-16"
      style={{ backgroundColor: '#050507' }}
    >
      <div className="mx-auto max-w-5xl flex flex-col gap-10">
        {/* Header section */}
        <motion.div
          className="flex flex-col items-center gap-6 text-center"
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
              Step 3 of 4 — Pick a Template
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
              Choose your
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                template
              </span>
            </h1>
          </motion.div>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-base text-slate-400 max-w-md leading-relaxed"
          >
            Select a template that matches your brand. We'll fill it with your content.
          </motion.p>
        </motion.div>

        {/* Template Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {TEMPLATES.map((t, i) => {
            const isSelected = selectedId === t.id;
            const bestMatch = isBestMatch(t.industries);

            return (
              <motion.div
                key={t.id}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                className="group relative flex flex-col rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.04)',
                  border: `1px solid ${isSelected ? t.accentColor : 'rgba(255,255,255,0.08)'}`,
                  backdropFilter: 'blur(24px)',
                  boxShadow: isSelected
                    ? `0 0 0 1px ${t.accentColor}, 0 0 40px ${t.accentColor}33`
                    : undefined,
                }}
                onMouseEnter={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.borderColor = t.accentColor + '80';
                    e.currentTarget.style.boxShadow = `0 0 30px ${t.accentColor}22`;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.boxShadow = 'none';
                  }
                }}
              >
                {/* Color Swatch */}
                <div
                  className="relative w-full overflow-hidden"
                  style={{
                    height: '150px',
                    background: `linear-gradient(135deg, ${t.accentColor}33, ${t.accentColor}88)`,
                  }}
                >
                  {t.previewImage && (
                    <img
                      src={t.previewImage}
                      alt={`${t.displayName} preview`}
                      className="absolute inset-0 h-full w-full object-cover"
                      style={{ opacity: 0.6 }}
                    />
                  )}

                  {/* Best match badge */}
                  {bestMatch && (
                    <div className="absolute top-3 right-3">
                      <span
                        className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
                        style={{
                          backgroundColor: 'rgba(16,185,129,0.2)',
                          border: '1px solid rgba(16,185,129,0.4)',
                          color: '#34d399',
                        }}
                      >
                        <span
                          className="inline-block h-1.5 w-1.5 rounded-full"
                          style={{ backgroundColor: '#34d399' }}
                        />
                        Best match
                      </span>
                    </div>
                  )}

                  {/* Selected checkmark */}
                  {isSelected && (
                    <div className="absolute top-3 left-3">
                      <span
                        className="inline-flex items-center justify-center h-6 w-6 rounded-full"
                        style={{
                          backgroundColor: t.accentColor,
                          boxShadow: `0 0 12px ${t.accentColor}80`,
                        }}
                      >
                        <svg
                          className="h-3.5 w-3.5 text-white"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="flex flex-col gap-4 p-5 flex-1">
                  {/* Name + bgStyle badge */}
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-base font-bold text-white leading-tight">
                      {t.displayName}
                    </h3>
                    <span
                      className="inline-flex items-center gap-1.5 shrink-0 rounded-full px-2.5 py-1 text-xs font-medium capitalize"
                      style={{
                        backgroundColor: bgStyleLabelColor[t.bgStyle] ?? 'rgba(255,255,255,0.08)',
                        border: `1px solid ${bgStyleBorderColor[t.bgStyle] ?? 'rgba(255,255,255,0.12)'}`,
                        color: bgStyleDotColor[t.bgStyle] ?? '#94a3b8',
                      }}
                    >
                      <span
                        className="inline-block h-1.5 w-1.5 rounded-full"
                        style={{
                          backgroundColor: bgStyleDotColor[t.bgStyle] ?? '#94a3b8',
                        }}
                      />
                      {t.bgStyle}
                    </span>
                  </div>

                  {/* Industry Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {t.industries.slice(0, 4).map((ind) => (
                      <span
                        key={ind}
                        className="rounded-full px-2.5 py-0.5 text-xs text-slate-400"
                        style={{
                          backgroundColor: 'rgba(255,255,255,0.06)',
                          border: '1px solid rgba(255,255,255,0.08)',
                        }}
                      >
                        {ind}
                      </span>
                    ))}
                  </div>

                  {/* Meta row */}
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="capitalize">{t.complexity} template</span>
                    <span>·</span>
                    <span>~{t.swapHours}h to customize</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-auto flex gap-2.5 pt-1">
                    {/* Use Template Directly */}
                    <button
                      type="button"
                      onClick={() => {
                        onUseDirectly(t.id);
                        window.location.href = t.route;
                      }}
                      className="flex-1 rounded-xl px-3 py-2 text-xs font-medium text-slate-300 transition-all duration-200"
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)';
                        e.currentTarget.style.color = '#fff';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                        e.currentTarget.style.color = '#cbd5e1';
                      }}
                    >
                      Use Template Directly
                    </button>

                    {/* Generate with AI */}
                    <button
                      type="button"
                      onClick={() => onSelect(t.id)}
                      className="flex-1 rounded-xl px-3 py-2 text-xs font-semibold text-white transition-all duration-200"
                      style={{
                        background: isSelected
                          ? `linear-gradient(135deg, ${t.accentColor}cc, ${t.accentColor}99)`
                          : 'linear-gradient(135deg, #7c3aed 0%, #4338ca 100%)',
                        boxShadow: isSelected
                          ? `0 0 20px ${t.accentColor}55`
                          : '0 0 14px rgba(139,92,246,0.3)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = isSelected
                          ? `0 0 28px ${t.accentColor}77`
                          : '0 0 28px rgba(139,92,246,0.5)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = isSelected
                          ? `0 0 20px ${t.accentColor}55`
                          : '0 0 14px rgba(139,92,246,0.3)';
                      }}
                    >
                      Generate with AI →
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="flex items-center justify-between pt-2"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: TEMPLATES.length * 0.08 + 0.2, duration: 0.4 }}
        >
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium text-slate-400 transition-all duration-200"
            style={{
              backgroundColor: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)';
              e.currentTarget.style.color = '#fff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
              e.currentTarget.style.color = '#94a3b8';
            }}
          >
            ← Back
          </button>

          <button
            type="button"
            onClick={onGenerate}
            disabled={selectedId === null}
            className="inline-flex items-center gap-2.5 rounded-xl px-7 py-2.5 text-sm font-semibold text-white transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-40"
            style={{
              background:
                selectedId !== null
                  ? 'linear-gradient(135deg, #7c3aed 0%, #4338ca 100%)'
                  : 'linear-gradient(135deg, rgba(109,40,217,0.5) 0%, rgba(67,56,202,0.5) 100%)',
              boxShadow: selectedId !== null ? '0 0 30px rgba(139,92,246,0.4)' : undefined,
            }}
            onMouseEnter={(e) => {
              if (selectedId !== null) {
                e.currentTarget.style.boxShadow = '0 0 45px rgba(139,92,246,0.6)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }
            }}
            onMouseLeave={(e) => {
              if (selectedId !== null) {
                e.currentTarget.style.boxShadow = '0 0 30px rgba(139,92,246,0.4)';
                e.currentTarget.style.transform = 'translateY(0)';
              }
            }}
          >
            Generate Content →
          </button>
        </motion.div>
      </div>
    </div>
  );
}
