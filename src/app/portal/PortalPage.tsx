import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Step1Describe from './steps/Step1Describe';
import Step2Refine from './steps/Step2Refine';
import Step3Gallery from './steps/Step3Gallery';
import Step4Generate from './steps/Step4Generate';
import { refineDescription, generateContent, type RefinedBrief } from '../../services/minimax';
import { searchPhoto } from '../../services/unsplash';
import { TEMPLATE_CONTENT_MAP } from './templateContent';
import type { PortalStep, ContentResult } from './types';

// ─── Step metadata ────────────────────────────────────────────────────────────

const STEPS: { id: PortalStep; label: string; number: number }[] = [
  { id: 'describe', label: 'Describe', number: 1 },
  { id: 'refine', label: 'Refine', number: 2 },
  { id: 'gallery', label: 'Template', number: 3 },
  { id: 'generate', label: 'Generate', number: 4 },
];

const STEP_ORDER: PortalStep[] = ['describe', 'refine', 'gallery', 'generate'];

function stepIndex(s: PortalStep): number {
  return STEP_ORDER.indexOf(s);
}

// ─── Step indicator ───────────────────────────────────────────────────────────

interface StepIndicatorProps {
  current: PortalStep;
}

function StepIndicator({ current }: StepIndicatorProps) {
  const currentIdx = stepIndex(current);

  return (
    <div className="flex items-center gap-0">
      {STEPS.map((step, idx) => {
        const isCompleted = idx < currentIdx;
        const isCurrent = idx === currentIdx;

        return (
          <div key={step.id} className="flex items-center">
            {/* Dot + label */}
            <div className="flex flex-col items-center gap-1.5">
              <div
                className="relative flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-all duration-500"
                style={
                  isCompleted
                    ? {
                        background:
                          'linear-gradient(135deg, #7c3aed 0%, #4338ca 100%)',
                        color: '#fff',
                        boxShadow: '0 0 12px rgba(139,92,246,0.4)',
                      }
                    : isCurrent
                    ? {
                        background:
                          'linear-gradient(135deg, #7c3aed 0%, #4338ca 100%)',
                        color: '#fff',
                        boxShadow:
                          '0 0 0 3px rgba(139,92,246,0.25), 0 0 20px rgba(139,92,246,0.35)',
                      }
                    : {
                        background: 'rgba(255,255,255,0.04)',
                        border: '1.5px solid rgba(255,255,255,0.14)',
                        color: 'rgba(255,255,255,0.3)',
                      }
                }
              >
                {isCompleted ? (
                  // Checkmark for completed steps
                  <svg
                    className="h-3.5 w-3.5"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.5 7L5.5 10L11.5 4"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  step.number
                )}

                {/* Animated glow pulse for current step */}
                {isCurrent && (
                  <span
                    className="absolute inset-0 rounded-full animate-ping"
                    style={{
                      background: 'rgba(139,92,246,0.25)',
                      animationDuration: '2s',
                    }}
                  />
                )}
              </div>

              {/* Label — hidden on mobile */}
              <span
                className="hidden sm:block text-[10px] font-medium tracking-wide transition-colors duration-300"
                style={{
                  color:
                    isCurrent
                      ? '#a78bfa'
                      : isCompleted
                      ? 'rgba(167,139,250,0.6)'
                      : 'rgba(255,255,255,0.22)',
                }}
              >
                {step.label}
              </span>
            </div>

            {/* Connecting line */}
            {idx < STEPS.length - 1 && (
              <div
                className="mx-2 h-px w-10 sm:w-16 transition-all duration-500"
                style={{
                  background:
                    idx < currentIdx
                      ? 'linear-gradient(90deg, rgba(139,92,246,0.7), rgba(99,102,241,0.5))'
                      : 'rgba(255,255,255,0.08)',
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─── PortalPage ───────────────────────────────────────────────────────────────

export default function PortalPage() {
  const [step, setStep] = useState<PortalStep>('describe');
  const [brief, setBrief] = useState<RefinedBrief | null>(null);
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [isRefining, setIsRefining] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState<ContentResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  // ── Step handlers ────────────────────────────────────────────────────────

  async function handleDescribeComplete(description: string) {
    setIsRefining(true);
    setError(null);
    try {
      const refined = await refineDescription(description);
      setBrief(refined);
      setStep('refine');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    } finally {
      setIsRefining(false);
    }
  }

  async function handleGenerate() {
    if (!brief || !selectedTemplate) return;
    setIsGenerating(true);
    setStep('generate');
    setError(null);
    try {
      const contentMd = TEMPLATE_CONTENT_MAP[selectedTemplate] ?? '';
      const slots = await generateContent(brief, contentMd);

      // Resolve UNSPLASH: placeholders
      const resolvedEntries = await Promise.all(
        Object.entries(slots).map(async ([slotId, value]) => {
          if (value.startsWith('UNSPLASH:')) {
            const query = value.slice('UNSPLASH:'.length).trim();
            try {
              const imageUrl = await searchPhoto(query);
              return [slotId, imageUrl] as const;
            } catch {
              // Fall back to empty string rather than breaking the whole result
              return [slotId, ''] as const;
            }
          }
          return [slotId, value] as const;
        })
      );

      setResult({
        templateId: selectedTemplate,
        slots: Object.fromEntries(resolvedEntries),
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Generation failed.');
    } finally {
      setIsGenerating(false);
    }
  }

  function handleStartOver() {
    setStep('describe');
    setBrief(null);
    setSelectedTemplate(null);
    setIsRefining(false);
    setIsGenerating(false);
    setResult(null);
    setError(null);
  }

  // ── Render ───────────────────────────────────────────────────────────────

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        background: '#050507',
        backgroundImage: `
          radial-gradient(ellipse 70% 50% at 15% 5%, rgba(139,92,246,0.18) 0%, transparent 60%),
          radial-gradient(ellipse 60% 45% at 85% 85%, rgba(59,130,246,0.12) 0%, transparent 60%),
          radial-gradient(ellipse 40% 30% at 50% 50%, rgba(99,102,241,0.06) 0%, transparent 70%),
          radial-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)
        `,
        backgroundSize: 'auto, auto, auto, 28px 28px',
      }}
    >
      {/* ── Fixed top bar ─────────────────────────────────────────────────── */}
      <header
        className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 py-3 bg-black/40 backdrop-blur-xl border-b border-white/[0.06]"
        style={{ minHeight: '60px' }}
      >
        {/* Logo */}
        <span className="font-bold text-white text-sm tracking-wide">
          Blitz<span className="text-violet-400">Studio</span>
        </span>

        {/* Step indicator — centered absolutely so it doesn't depend on logo width */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <StepIndicator current={step} />
        </div>

        {/* Right placeholder to keep logo left-aligned */}
        <div className="w-20" aria-hidden="true" />
      </header>

      {/* ── Step content ──────────────────────────────────────────────────── */}
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {step === 'describe' && (
              <motion.div
                key="describe"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <Step1Describe
                  onComplete={handleDescribeComplete}
                  isLoading={isRefining}
                />
                {error && (
                  <p className="mt-4 text-center text-sm text-red-400">
                    {error}
                  </p>
                )}
              </motion.div>
            )}

            {step === 'refine' && brief && (
              <motion.div
                key="refine"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <Step2Refine
                  brief={brief}
                  onBriefChange={setBrief}
                  onBack={() => setStep('describe')}
                  onNext={() => setStep('gallery')}
                />
              </motion.div>
            )}

            {step === 'gallery' && (
              <motion.div
                key="gallery"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <Step3Gallery
                  selectedId={selectedTemplate}
                  brief={brief ?? { industry: '', tone: '' }}
                  onSelect={setSelectedTemplate}
                  onBack={() => setStep('refine')}
                  onGenerate={handleGenerate}
                  onUseDirectly={(id) => {
                    window.location.href = `/${id}`;
                  }}
                />
              </motion.div>
            )}

            {step === 'generate' && (
              <motion.div
                key="generate"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <Step4Generate
                  result={result}
                  loading={isGenerating}
                  error={error}
                  onStartOver={handleStartOver}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
