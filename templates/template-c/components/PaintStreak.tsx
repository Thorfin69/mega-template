// Inline paint brush stroke behind a word or short phrase.
// Uses CSS background-image (SVG data URI) — always renders behind content,
// zero z-index issues, works inside motion.div opacity animations.
// Usage: <PaintStreak color="pink">IRS</PaintStreak>

type PaintStreakColor = 'blue-gray' | 'pink' | 'purple' | 'teal'

const COLORS: Record<PaintStreakColor, string> = {
  'blue-gray': '#B8C9D8',
  pink:        '#E8597A',
  purple:      '#C9AEE8',
  teal:        '#8DD5CF',
}

interface PaintStreakProps {
  color: PaintStreakColor
  children: React.ReactNode
  opacity?: number
  className?: string
}

export function PaintStreak({ color, children, opacity = 0.72, className = '' }: PaintStreakProps) {
  const fill = COLORS[color]

  // SVG path for the hand-painted brush stroke
  const path = `M3,15 C12,7 35,5 65,8 C95,11 135,9 168,7 C187,6 199,10 200,17 C201,26 194,36 166,40 C138,44 90,46 52,43 C22,40 1,36 0,27 C-1,19 1,19 3,15 Z`

  // Build inline SVG as a data URI. CSS background is always behind content —
  // no z-index needed, no stacking-context conflicts with motion.div.
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 48' preserveAspectRatio='none'><path d='${path}' fill='${fill}' opacity='${opacity}'/></svg>`
  const dataUri = `url("data:image/svg+xml;charset=utf8,${encodeURIComponent(svg)}")`

  return (
    <span
      className={`relative inline-block ${className}`}
      style={{
        backgroundImage: dataUri,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '110% 115%',
        backgroundPosition: 'center 55%',
      }}
    >
      {children}
    </span>
  )
}
