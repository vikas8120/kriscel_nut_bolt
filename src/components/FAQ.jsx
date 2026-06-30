import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export function FAQ({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const open = openIndex === index
        return (
          <div key={item.question} className="overflow-hidden rounded-[1.4rem] border border-slate-200 bg-white">
            <button
              type="button"
              onClick={() => setOpenIndex(open ? -1 : index)}
              className="flex w-full items-center justify-between px-5 py-4 text-left"
            >
              <span className="text-sm font-semibold text-slate-900 md:text-base">{item.question}</span>
              <span className="ml-4 text-lg text-slate-400">{open ? '−' : '+'}</span>
            </button>
            <AnimatePresence initial={false}>
              {open ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="px-5 pb-5 text-sm leading-7 text-slate-600"
                >
                  {item.answer}
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}

