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

const STEP_ORDER: PortalStep[] = ['describe', 'refine', 'gallery', 'generate'];
const STEP_LABELS = ['Describe', 'Brief', 'Template', 'Generate'];

function stepIndex(s: PortalStep) {
  return STEP_ORDER.indexOf(s);
}

function StepIndicator({ current }: { current: PortalStep }) {
  const ci = stepIndex(current);
  return (
    <div className="flex items-center gap-0">
      {STEP_ORDER.map((s, i) => {
        const done = i < ci;
        const active = i === ci;
        return (
          <div key={s} className="flex items-center">
            <div className="flex flex-col items-center gap-1">
              <div
                className="relative flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-semibold transition-all duration-500"
                style={
                  done
                    ? { background: 'linear-gradient(135deg,#7c3aed,#4338ca)', color: '#fff', boxShadow: '0 0 10px rgba(124,58,237,0.5)' }
                    : active
                    ? { background: 'linear-gradient(135deg,#7c3aed,#4338ca)', color: '#fff', boxShadow: '0 0 0 3px rgba(124,58,237,0.2), 0 0 18px rgba(124,58,237,0.35)' }
                    : { background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.25)' }
                }
              >
                {done ? (
                  <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : i + 1}
                {active && (
                  <span className="absolute inset-0 rounded-full animate-ping opacity-30" style={{ background: 'rgba(124,58,237,0.4)', animationDuration: '2s' }} />
                )}
              </div>
              <span
                className="hidden sm:block text-[9px] font-medium tracking-widest uppercase transition-colors duration-300"
                style={{ color: active ? '#a78bfa' : done ? 'rgba(167,139,250,0.45)' : 'rgba(255,255,255,0.18)' }}
              >
                {STEP_LABELS[i]}
              </span>
            </div>
            {i < STEP_ORDER.length - 1 && (
              <div
                className="mx-1.5 h-px w-8 sm:w-14 transition-all duration-700"
                style={{ background: i < ci ? 'linear-gradient(90deg,rgba(124,58,237,0.8),rgba(67,56,202,0.4))' : 'rgba(255,255,255,0.07)' }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function PortalPage() {
  const [step, setStep] = useState<PortalStep>('describe');
  const [brief, setBrief] = useState<RefinedBrief | null>(null);
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [isRefining, setIsRefining] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState<ContentResult | null>(null);
  const [error, setError] = useState<string | null>(null);

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
      const resolved = await Promise.all(
        Object.entries(slots).map(async ([id, val]) => {
          if (val.startsWith('UNSPLASH:')) {
            const q = val.slice('UNSPLASH:'.length).trim();
            try { return [id, await searchPhoto(q)] as const; }
            catch { return [id, ''] as const; }
          }
          return [id, val] as const;
        })
      );
      setResult({ templateId: selectedTemplate, slots: Object.fromEntries(resolved) });
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

  return (
    <div className="relative min-h-screen overflow-x-hidden" style={{ background: '#030305' }}>

      {/* ── Background layer ─────────────────────────────────────────────── */}
      <div className="fixed inset-0 pointer-events-none select-none" style={{ zIndex: 0 }}>
        {/* Aurora blobs */}
        <div style={{ position: 'absolute', top: '-10%', left: '-15%', width: '750px', height: '750px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 65%)', filter: 'blur(90px)' }} />
        <div style={{ position: 'absolute', bottom: '-15%', right: '-10%', width: '650px', height: '650px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16) 0%, transparent 65%)', filter: 'blur(90px)' }} />
        <div style={{ position: 'absolute', top: '35%', left: '55%', width: '450px', height: '450px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 65%)', filter: 'blur(70px)' }} />
        {/* Grid lines */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)', backgroundSize: '44px 44px' }} />
        {/* Vignette */}
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(3,3,5,0.7) 100%)' }} />
      </div>

      {/* ── Header ───────────────────────────────────────────────────────── */}
      <header
        className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6"
        style={{ height: '60px', background: 'rgba(3,3,5,0.7)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
      >
        <a href="/portal" className="flex items-center gap-2 no-underline">
          <div className="h-6 w-6 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#7c3aed,#4338ca)' }}>
            <svg className="h-3.5 w-3.5 text-white" viewBox="0 0 16 16" fill="currentColor">
              <path d="M2 2h5v5H2V2zm7 0h5v5H9V2zM2 9h5v5H2V9zm7 2l2.5-2.5L14 13H9v-2z" />
            </svg>
          </div>
          <span className="font-bold text-white text-sm tracking-tight">
            Blitz<span style={{ color: '#a78bfa' }}>Studio</span>
          </span>
        </a>

        <div className="absolute left-1/2 -translate-x-1/2">
          <StepIndicator current={step} />
        </div>

        <div className="w-24" />
      </header>

      {/* ── Main content ─────────────────────────────────────────────────── */}
      <main className="relative pt-[60px]" style={{ zIndex: 1 }}>
        <AnimatePresence mode="wait">
          {step === 'describe' && (
            <motion.div key="describe" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}>
              <Step1Describe onComplete={handleDescribeComplete} isLoading={isRefining} error={error} />
            </motion.div>
          )}
          {step === 'refine' && brief && (
            <motion.div key="refine" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}>
              <Step2Refine brief={brief} onBriefChange={setBrief} onBack={() => setStep('describe')} onNext={() => setStep('gallery')} />
            </motion.div>
          )}
          {step === 'gallery' && (
            <motion.div key="gallery" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}>
              <Step3Gallery selectedId={selectedTemplate} brief={brief ?? { industry: '', tone: '' }} onSelect={setSelectedTemplate} onBack={() => setStep('refine')} onGenerate={handleGenerate} />
            </motion.div>
          )}
          {step === 'generate' && (
            <motion.div key="generate" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}>
              <Step4Generate result={result} loading={isGenerating} error={error} onStartOver={handleStartOver} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
