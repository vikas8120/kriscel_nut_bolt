import { SectionHeading } from '../components/SectionHeading'
import { Gallery } from '../components/Gallery'

const infrastructureGallery = [
  {
    src: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=1400&q=80',
    alt: 'Warehouse interior',
    span: 'md:col-span-8',
    height: 'h-[28rem]',
  },
  {
    src: 'https://images.unsplash.com/photo-1519648023493-d82b5f8d7b5e?auto=format&fit=crop&w=1200&q=80',
    alt: 'Machine hall',
    span: 'md:col-span-4',
    height: 'h-[28rem]',
  },
  {
    src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=80',
    alt: 'Precision line',
    span: 'md:col-span-4',
    height: 'h-80',
  },
  {
    src: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80',
    alt: 'Warehouse racks',
    span: 'md:col-span-4',
    height: 'h-80',
  },
  {
    src: 'https://images.unsplash.com/photo-1517256875856-8fd4d0d7580d?auto=format&fit=crop&w=1200&q=80',
    alt: 'Production utility',
    span: 'md:col-span-4',
    height: 'h-80',
  },
]

export function Infrastructure() {
  return (
    <div className="page-shell mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Infrastructure"
        title="Warehouse, machinery, and production capacity."
        description="The page emphasizes scale and technology without losing the premium editorial tone."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ['Production capacity', 'High volume'],
              ['Machine families', 'Cold forge, CNC, rolling'],
              ['Warehouse', 'Climate-aware storage'],
              ['Technology', 'Automation first'],
            ].map(([label, value]) => (
              <div key={label} className="rounded-[1.4rem] bg-slate-50 p-5">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">{label}</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">{value}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-[1.8rem] bg-[linear-gradient(135deg,rgba(236,231,209,0.72),rgba(219,206,165,0.36),rgba(142,151,125,0.12))] p-6">
            <p className="text-sm leading-7 text-slate-700">
              The infrastructure story is built to feel global and disciplined, with clean spacing,
              strong contrast, and no generic supplier-page clutter.
            </p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6">
          <SectionHeading eyebrow="Machine gallery" title="Industrial scale presented elegantly." />
          <div className="mt-6">
            <Gallery images={infrastructureGallery} />
          </div>
        </div>
      </div>
    </div>
  )
}
