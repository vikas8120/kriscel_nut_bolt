import { motion } from 'framer-motion'

export function WorldMapPanel({ countries }) {
  return (
    <div className="grid gap-4 rounded-[2rem] border border-slate-200 bg-[linear-gradient(135deg,rgba(var(--cream-rgb),0.82),rgba(var(--sand-rgb),0.38))] p-4 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="relative overflow-hidden rounded-[1.8rem] border border-slate-200 bg-[radial-gradient(circle_at_35%_30%,rgba(var(--olive-rgb),0.18),transparent_25%),linear-gradient(135deg,rgba(var(--cream-rgb),1),rgba(var(--sand-rgb),0.94))] p-4">
        <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(var(--primary-rgb),0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--primary-rgb),0.14)_1px,transparent_1px)] [background-size:42px_42px]" />
        <div className="relative flex aspect-[1.7/1] items-center justify-center">
          <motion.div
            animate={{ scale: [1, 1.015, 1], rotate: [0, 0.5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="relative h-full w-full rounded-[2rem] border border-slate-200 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--sand-rgb),0.28),rgba(255,255,255,0.95))]"
          >
            <div className="absolute left-[22%] top-[30%] h-4 w-4 rounded-full bg-[var(--section-accent,var(--blue))] shadow-[0_0_0_12px_rgba(var(--primary-rgb),0.15)]" />
            <div className="absolute left-[35%] top-[46%] h-3 w-3 rounded-full bg-[var(--gold)] shadow-[0_0_0_10px_rgba(var(--olive-rgb),0.18)]" />
            <div className="absolute left-[58%] top-[34%] h-4 w-4 rounded-full bg-[var(--orange)] shadow-[0_0_0_12px_rgba(var(--sand-rgb),0.2)]" />
            <div className="absolute left-[73%] top-[49%] h-3 w-3 rounded-full bg-[var(--graphite)] shadow-[0_0_0_10px_rgba(var(--primary-rgb),0.12)]" />
            <svg viewBox="0 0 1000 500" className="absolute inset-0 h-full w-full opacity-60">
              <path
                d="M155,210 C210,170 290,150 365,160 C420,168 474,188 500,222 C532,264 575,285 640,275 C711,264 764,220 819,191"
                fill="none"
                stroke="rgba(var(--olive-rgb),0.35)"
                strokeWidth="3"
                strokeDasharray="6 12"
              />
              <path
                d="M240,120 C290,85 380,70 450,87 C516,103 560,148 596,183 C626,212 685,225 754,214"
                fill="none"
                stroke="rgba(var(--primary-rgb),0.22)"
                strokeWidth="2.5"
                strokeDasharray="4 10"
              />
            </svg>
          </motion.div>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Global presence</p>
          <h3 className="mt-2 text-xl font-semibold tracking-[-0.04em] text-slate-900">
            Export-ready programs and global support touchpoints.
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            We keep the presentation clean while the operations behind it remain built for
            distribution, compliance, and repeat business.
          </p>
        </div>
        <div className="grid gap-2">
          {countries.map((item) => (
            <div key={item.country} className="rounded-[1.2rem] border border-slate-200 bg-white px-3 py-2">
              <p className="text-sm font-semibold text-slate-900">{item.country}</p>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
