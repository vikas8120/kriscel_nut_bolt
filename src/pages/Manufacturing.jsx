import { Gallery } from '../components/Gallery'
import { SectionHeading } from '../components/SectionHeading'
import { Timeline } from '../components/Timeline'

const factoryImages = [
  {
    src: 'https://images.unsplash.com/photo-1518325718614-2f3a8f0b3ae5?auto=format&fit=crop&w=1400&q=80',
    alt: 'Factory corridor',
    span: 'md:col-span-6',
    height: 'h-[27rem]',
  },
  {
    src: 'https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=1200&q=80',
    alt: 'Production detail',
    span: 'md:col-span-6',
    height: 'h-[27rem]',
  },
  {
    src: 'https://images.unsplash.com/photo-1466611653911-850801a52bc5?auto=format&fit=crop&w=1200&q=80',
    alt: 'Robotic machinery',
    span: 'md:col-span-4',
    height: 'h-80',
  },
  {
    src: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=1200&q=80',
    alt: 'Metal working',
    span: 'md:col-span-4',
    height: 'h-80',
  },
  {
    src: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=1200&q=80',
    alt: 'Engineering line',
    span: 'md:col-span-4',
    height: 'h-80',
  },
]

const manufacturingTimeline = [
  {
    step: 'Raw material intake',
    detail: 'Chemistry, grade, and traceability checks before any processing starts.',
  },
  {
    step: 'Forging and forming',
    detail: 'High-integrity part geometry shaped with controlled force and repeatability.',
  },
  {
    step: 'Machining and threading',
    detail: 'Critical surfaces, threads, and fit features are dialed in precisely.',
  },
  {
    step: 'Heat treatment and finish',
    detail: 'Mechanical properties and corrosion performance are tailored to the program.',
  },
  {
    step: 'Final inspection and packing',
    detail: 'Release only after measurement, documentation, and packaging are complete.',
  },
]

export function Manufacturing() {
  return (
    <div className="page-shell mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Manufacturing"
        title="Factory tour, but make it cinematic."
        description="This page focuses on precision, automation, and premium visual rhythm."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6">
          <SectionHeading eyebrow="Process" title="The manufacturing narrative." />
          <div className="mt-8">
            <Timeline items={manufacturingTimeline} />
          </div>
        </div>
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6">
          <SectionHeading eyebrow="Factory images" title="Large, quiet, and engineered." />
          <div className="mt-6">
            <Gallery images={factoryImages} />
          </div>
        </div>
      </div>
    </div>
  )
}
