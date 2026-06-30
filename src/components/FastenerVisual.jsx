import { motion } from 'framer-motion'

export function FastenerVisual({ variant = 'hero', label = 'Precision Fastener', subtitle = 'Hex bolt · nut · washer' }) {
  const sizes = {
    hero: {
      wrapper: 'h-[38rem] rounded-[2rem] bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.92),rgba(236,231,209,0.98))]',
      bolt: { x: 140, y: 85, scale: 1.1 },
      nut: { x: 310, y: 190, scale: 0.95 },
      washer: { x: 500, y: 285, scale: 0.9 },
    },
    card: {
      wrapper: 'h-64 rounded-[1.4rem] bg-[linear-gradient(135deg,rgba(248,244,232,1),rgba(236,231,209,1))]',
      bolt: { x: 78, y: 30, scale: 0.6 },
      nut: { x: 175, y: 95, scale: 0.52 },
      washer: { x: 270, y: 150, scale: 0.45 },
    },
    detail: {
      wrapper: 'h-80 rounded-[1.6rem] bg-[linear-gradient(135deg,rgba(248,244,232,1),rgba(219,206,165,0.9))]',
      bolt: { x: 85, y: 55, scale: 0.82 },
      nut: { x: 255, y: 140, scale: 0.75 },
      washer: { x: 420, y: 220, scale: 0.68 },
    },
  }

  const config = sizes[variant] ?? sizes.hero

  return (
    <div className={`relative overflow-hidden border border-slate-200 shadow-[0_30px_80px_rgba(95,82,56,0.08)] ${config.wrapper}`}>
      <svg viewBox="0 0 760 520" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="steelGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbf8ef" />
            <stop offset="18%" stopColor="#ece7d1" />
            <stop offset="48%" stopColor="#dbcea5" />
            <stop offset="72%" stopColor="#b8ae93" />
            <stop offset="100%" stopColor="#6e6754" />
          </linearGradient>
          <linearGradient id="graphiteGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8e977d" />
            <stop offset="100%" stopColor="#5f5238" />
          </linearGradient>
          <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8a7650" />
            <stop offset="100%" stopColor="#dbcea5" />
          </linearGradient>
          <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="20" stdDeviation="18" floodColor="#5f5238" floodOpacity="0.12" />
          </filter>
        </defs>

        <motion.g
          animate={{ x: [0, 6, 0], y: [0, -4, 0], rotate: [0, 0.35, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          filter="url(#softShadow)"
        >
          <Bolt x={config.bolt.x} y={config.bolt.y} scale={config.bolt.scale} />
        </motion.g>

        <motion.g
          animate={{ x: [0, -5, 0], y: [0, 4, 0], rotate: [0, -0.45, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
          filter="url(#softShadow)"
        >
          <Nut x={config.nut.x} y={config.nut.y} scale={config.nut.scale} />
        </motion.g>

        <motion.g
          animate={{ x: [0, 5, 0], y: [0, 3, 0], rotate: [0, 0.2, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
          filter="url(#softShadow)"
        >
          <Washer x={config.washer.x} y={config.washer.y} scale={config.washer.scale} />
        </motion.g>

        <path d="M100 390 C185 340, 290 320, 390 330 C490 340, 590 372, 680 350" fill="none" stroke="rgba(138,118,80,0.22)" strokeWidth="3" strokeDasharray="8 12" />
        <path d="M92 416 C180 378, 298 360, 406 368 C512 376, 613 404, 694 392" fill="none" stroke="rgba(142,151,125,0.18)" strokeWidth="2.5" strokeDasharray="4 10" />
      </svg>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.76),transparent_24%),radial-gradient(circle_at_80%_18%,rgba(142,151,125,0.12),transparent_16%),linear-gradient(180deg,transparent,rgba(95,82,56,0.08))]" />
      <div className="absolute left-6 top-6 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-slate-500 backdrop-blur">
        {label}
      </div>
      <div className="absolute bottom-6 left-6 right-6 rounded-[1.4rem] border border-white/50 bg-white/72 p-4 backdrop-blur-xl">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">{subtitle}</p>
        <p className="mt-2 text-base font-semibold text-slate-900">
          Precision hardware presented like premium engineering equipment.
        </p>
      </div>
    </div>
  )
}

function Bolt({ x, y, scale = 1 }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <rect x="40" y="102" width="168" height="50" rx="18" fill="url(#steelGradient)" />
      <rect x="200" y="107" width="190" height="40" rx="16" fill="url(#steelGradient)" />
      <rect x="370" y="114" width="130" height="26" rx="12" fill="url(#steelGradient)" />

      <path
        d="M8 70 L52 44 L96 70 L96 128 L52 154 L8 128 Z"
        fill="url(#graphiteGradient)"
        stroke="rgba(255,255,255,0.45)"
        strokeWidth="3"
      />
      <path d="M26 82 L84 82" stroke="rgba(255,255,255,0.7)" strokeWidth="6" strokeLinecap="round" />
      <path d="M26 100 L84 100" stroke="rgba(142,151,125,0.5)" strokeWidth="5" strokeLinecap="round" />
      <path d="M26 118 L84 118" stroke="rgba(255,255,255,0.6)" strokeWidth="5" strokeLinecap="round" />
      <path d="M207 112 C230 104, 238 104, 262 112" stroke="rgba(95,82,56,0.22)" strokeWidth="5" strokeLinecap="round" />
      <path d="M244 112 C268 104, 276 104, 300 112" stroke="rgba(95,82,56,0.22)" strokeWidth="5" strokeLinecap="round" />
      <path d="M281 112 C304 104, 312 104, 336 112" stroke="rgba(95,82,56,0.22)" strokeWidth="5" strokeLinecap="round" />
      <path d="M318 112 C340 104, 350 104, 372 112" stroke="rgba(95,82,56,0.22)" strokeWidth="5" strokeLinecap="round" />
      <circle cx="14" cy="72" r="3.8" fill="rgba(255,255,255,0.95)" />
    </g>
  )
}

function Nut({ x, y, scale = 1 }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path
        d="M80 12 L144 48 L144 120 L80 156 L16 120 L16 48 Z"
        fill="url(#steelGradient)"
        stroke="rgba(255,255,255,0.6)"
        strokeWidth="3"
      />
      <circle cx="80" cy="84" r="34" fill="#f8f4e8" stroke="rgba(95,82,56,0.28)" strokeWidth="8" />
      <path d="M34 60 L126 60" stroke="rgba(255,255,255,0.6)" strokeWidth="5" strokeLinecap="round" />
      <path d="M26 108 L134 108" stroke="rgba(95,82,56,0.16)" strokeWidth="5" strokeLinecap="round" />
      <path d="M44 34 L116 34" stroke="rgba(219,206,165,0.45)" strokeWidth="4" strokeLinecap="round" />
    </g>
  )
}

function Washer({ x, y, scale = 1 }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <circle cx="80" cy="80" r="70" fill="url(#accentGradient)" opacity="0.28" />
      <circle cx="80" cy="80" r="46" fill="#ffffff" stroke="rgba(95,82,56,0.28)" strokeWidth="12" />
      <circle cx="80" cy="80" r="28" fill="none" stroke="rgba(142,151,125,0.42)" strokeWidth="6" />
    </g>
  )
}
