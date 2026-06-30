import { SectionHeading } from '../components/SectionHeading'
import { Timeline } from '../components/Timeline'

const milestones = [
  {
    step: 'Founding principle',
    detail: 'Precision hardware should look and feel as serious as the industries that depend on it.',
  },
  {
    step: 'Engineering expansion',
    detail: 'The portfolio grew from standard fasteners to custom machined and forged components.',
  },
  {
    step: 'Export mindset',
    detail: 'Documentation, packaging, and traceability were aligned to global customer expectations.',
  },
  {
    step: 'Premium digital layer',
    detail: 'The website now matches the business quality with a luxury industrial presentation.',
  },
]

const values = [
  ['Precision', 'Measured and repeatable outcomes matter more than flashy claims.'],
  ['Accountability', 'Every part, spec, and promise must hold up under scrutiny.'],
  ['Partnership', 'We build with OEMs, engineers, and buyers instead of just selling to them.'],
  ['Elegance', 'Industrial work can still be clean, calm, and premium.'],
]

export function About() {
  return (
    <div className="page-shell mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="About"
        title="A company story built around engineering discipline."
        description="This page pairs the narrative with milestones, mission, vision, values, and leadership tone."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.95fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6">
          <img
            src="https://images.unsplash.com/photo-1529421308418-eab9490c1e32?auto=format&fit=crop&w=1600&q=80"
            alt="Company story"
            className="h-[30rem] w-full rounded-[1.8rem] object-cover"
            loading="lazy"
            decoding="async"
          />
          <p className="mt-6 text-sm leading-7 text-slate-600">
            Kriscel Nut Bolt is presented as a premium engineering company first. The content
            balances trust, scale, and modern design language.
          </p>
        </div>
        <div className="space-y-6">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Mission</p>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              To deliver precision fasteners and machined components with a level of quality,
              traceability, and presentation that wins trust in demanding industries.
            </p>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Vision</p>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              To become the reference point for premium industrial fastening in markets that value
              engineering, consistency, and design maturity.
            </p>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Values</p>
            <div className="mt-4 grid gap-3">
              {values.map(([title, copy]) => (
                <div key={title} className="rounded-[1.2rem] bg-slate-50 p-4">
                  <p className="font-semibold text-slate-900">{title}</p>
                  <p className="mt-1 text-sm leading-7 text-slate-600">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6">
          <SectionHeading eyebrow="Milestones" title="A measured progression." />
          <div className="mt-8">
            <Timeline items={milestones} />
          </div>
        </div>
        <div className="rounded-[2rem] border border-slate-200 bg-[linear-gradient(135deg,rgba(236,231,209,0.88),rgba(219,206,165,0.34),rgba(142,151,125,0.1))] p-6">
          <div className="grid gap-4 md:grid-cols-2">
            {[
              ['Leadership', 'Focused on engineering credibility and premium execution.'],
              ['Culture', 'Quiet confidence, sharp details, and reliable delivery.'],
              ['Market stance', 'Not price-first. Value-first, quality-first, and relationship-first.'],
              ['Brand tone', 'Minimal, premium, and deeply industrial.'],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-[1.4rem] border border-slate-200 bg-white p-5">
                <p className="font-semibold text-slate-900">{title}</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
