import { AnimatePresence, motion } from 'framer-motion'

export function Loader({ visible, progress, message }) {
  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[linear-gradient(180deg,#f6f1df,#ece7d1)]"
        >
          <div className="w-full max-w-md px-8 text-center">
            <div className="mx-auto flex h-28 w-28 items-center justify-center overflow-hidden rounded-[2rem] border border-slate-200 bg-[radial-gradient(circle,rgba(236,231,209,0.95),rgba(219,206,165,0.82))] shadow-[0_18px_50px_rgba(95,82,56,0.08)]">
              <motion.img
                src="/kriscel-logo.png"
                alt="Kriscel Nut Bolt logo"
                className="h-full w-full object-contain p-2"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.36em] text-slate-400">
              Loading Experience
            </p>
            <h1 className="mt-3 font-display text-3xl tracking-[-0.04em] text-slate-900">
              {message}
            </h1>
            <div className="mt-8 h-1.5 overflow-hidden rounded-full bg-slate-100">
              <motion.div
                className="h-full rounded-full bg-[linear-gradient(90deg,var(--blue),var(--gold))]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut', duration: 0.25 }}
              />
            </div>
            <p className="mt-3 text-sm text-slate-500">{progress}%</p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
