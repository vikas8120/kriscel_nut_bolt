import { Gallery } from '../components/Gallery'
import { SectionHeading } from '../components/SectionHeading'
import { industries } from '../data/industries'

const industriesGallery = [
  {
    src: 'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1400&q=80',
    alt: 'Automotive assembly',
    span: 'md:col-span-7',
    height: 'h-[28rem]',
  },
  {
    src: 'https://images.unsplash.com/photo-1468645476565-a0f79b32e1c5?auto=format&fit=crop&w=1200&q=80',
    alt: 'Construction steel',
    span: 'md:col-span-5',
    height: 'h-[28rem]',
  },
]

export function Industries() {
  return (
    <div className="page-shell mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Industries"
        title="Where precision hardware performs under pressure."
        description="A premium grid, strong images, and restrained copy keep the page feeling expensive."
      />

      <div className="mt-10">
        <Gallery images={industriesGallery} />
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {industries.map((industry) => (
          <article key={industry.slug} className="rounded-[2rem] border border-slate-200 bg-white p-6">
            <img
              src={industry.image}
              alt={industry.name}
              className="h-56 w-full rounded-[1.5rem] object-cover"
              loading="lazy"
              decoding="async"
            />
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--blue)]">
              {industry.name}
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600">{industry.description}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
