import { motion } from 'framer-motion'
import { FAQ } from '../components/FAQ'
import { SectionHeading } from '../components/SectionHeading'
import { Timeline } from '../components/Timeline'
import { certificates, qualityTimeline, testingMachines } from '../data/certificates'

const faqs = [
  {
    question: 'How is traceability handled?',
    answer:
      'Heat code, lot code, and documentation packs are retained in the frontend demo as local records and displayed in the quality story.',
  },
  {
    question: 'Can the site show customer-specific testing information?',
    answer:
      'Yes. The pages are data-driven, so quality test cards and graphs can be updated without changing the site structure.',
  },
  {
    question: 'Does the site support premium engineering storytelling?',
    answer:
      'That is the entire point of the build: the UI is clean, editorial, and serious without looking like a template.',
  },
]

export function Quality() {
  return (
    <div className="page-shell mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Quality"
        title="Inspection is not a section. It is the standard."
        description="The page combines certificates, testing equipment, a process timeline, and a restrained graph panel."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6">
          <SectionHeading eyebrow="Inspection process" title="Quality flow with precision." />
          <div className="mt-8">
            <Timeline items={qualityTimeline} />
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Certificates</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {certificates.map((certificate) => (
                <div key={certificate.title} className="rounded-[1.4rem] bg-slate-50 p-5">
                  <p className="text-lg font-semibold text-slate-900">{certificate.title}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{certificate.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Testing machines</p>
            <div className="mt-4 grid gap-3">
              {testingMachines.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-[1.2rem] border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
            Animated graphs
          </p>
          <div className="mt-6 flex h-72 items-end gap-4 rounded-[1.5rem] bg-slate-50 p-6">
            {[72, 84, 78, 92, 88, 96].map((height, index) => (
              <motion.div
                key={height}
                initial={{ height: 0 }}
                whileInView={{ height: `${height}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.06 }}
                className="flex-1 rounded-t-[1rem] bg-[linear-gradient(180deg,rgba(138,118,80,0.95),rgba(219,206,165,0.92))]"
              />
            ))}
          </div>
        </div>
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Quality FAQ</p>
          <div className="mt-4">
            <FAQ items={faqs} />
          </div>
        </div>
      </div>
    </div>
  )
}
