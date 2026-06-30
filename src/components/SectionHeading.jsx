export function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow ? (
        <p className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-[var(--section-accent, var(--blue))]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl leading-none tracking-[-0.04em] text-slate-900 md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
          {description}
        </p>
      ) : null}
    </div>
  )
}
