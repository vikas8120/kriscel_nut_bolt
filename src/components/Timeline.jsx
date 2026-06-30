import { motion } from 'framer-motion'

export function Timeline({ items }) {
  return (
    <div className="relative isolate overflow-hidden rounded-[2.4rem] border border-white/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] p-5 shadow-[0_30px_90px_rgba(63,54,72,0.12)] md:p-8">
      <div className="pointer-events-none absolute inset-0 opacity-70 [background-image:radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.42),transparent_28%),radial-gradient(circle_at_90%_0%,rgba(190,168,170,0.18),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(124,127,101,0.16),transparent_22%)]" />

      <div
        className="
          pointer-events-none absolute inset-y-7 left-[1.25rem] w-[4px]
          rounded-full bg-[linear-gradient(180deg,rgba(var(--primary-rgb),0.95),rgba(var(--primary-rgb),0.35),rgba(var(--primary-rgb),0.08))]
          shadow-[0_0_0_1px_rgba(255,255,255,0.22),0_0_24px_rgba(87,70,93,0.15)]
          md:left-1/2 md:-translate-x-1/2
        "
      />

      <div className="relative space-y-7 md:space-y-10">
        {items.map((item, index) => {
          const isLeft = index % 2 === 0
          const step = String(index + 1).padStart(2, '0')

          const Card = (
            <div className="relative overflow-hidden rounded-[1.7rem] border border-white/50 bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(255,255,255,0.84))] p-5 shadow-[0_18px_44px_rgba(63,54,72,0.1)] backdrop-blur-md md:p-6">
              <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,rgba(var(--primary-rgb),0.95),rgba(var(--olive-rgb),0.7),rgba(var(--sand-rgb),0.55))]" />
              <div className="flex items-center gap-3">
                <span className="inline-flex rounded-full border border-[rgba(87,70,93,0.12)] bg-[rgba(87,70,93,0.06)] px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.32em] text-[#5B4A63]">
                  Step {step}
                </span>
                <span className="h-px flex-1 bg-[linear-gradient(90deg,rgba(var(--primary-rgb),0.3),transparent)]" />
              </div>
              <h3 className="mt-4 text-[1.1rem] font-semibold tracking-[-0.03em] text-[#2E2535] md:text-[1.25rem]">
                {item.step}
              </h3>
              <p className="mt-2 max-w-[26rem] text-sm leading-7 text-[#5E5366] md:text-[0.95rem]">
                {item.detail}
              </p>
            </div>
          )

          const Dot = (
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/70 bg-white shadow-[0_10px_24px_rgba(63,54,72,0.16)]">
              <span className="h-4 w-4 rounded-full bg-[var(--section-accent, var(--blue))] shadow-[0_0_0_6px_rgba(255,255,255,0.38)]" />
            </div>
          )

          return (
            <motion.article
              key={item.step}
              initial={{ opacity: 0, y: 42, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, delay: index * 0.05, ease: 'easeOut' }}
            >
              <div className="flex items-start gap-4 md:hidden">
                <div className="relative z-10 mt-1 shrink-0">{Dot}</div>
                <div className="flex-1">{Card}</div>
              </div>

              <div className="hidden md:grid md:grid-cols-[1fr_4rem_1fr] md:items-start md:gap-x-6">
                <div className={isLeft ? 'flex justify-end' : ''}>
                  {isLeft ? <div className="w-full max-w-[30rem]">{Card}</div> : null}
                </div>

                <div className="relative z-10 flex justify-center pt-4">
                  {Dot}
                </div>

                <div className={!isLeft ? 'flex justify-start' : ''}>
                  {!isLeft ? <div className="w-full max-w-[30rem]">{Card}</div> : null}
                </div>
              </div>
            </motion.article>
          )
        })}
      </div>
    </div>
  )
}
