import { FAQ } from '../components/FAQ'
import { QuoteForm } from '../components/QuoteForm'
import { SectionHeading } from '../components/SectionHeading'
import { WorldMapPanel } from '../components/WorldMapPanel'
import { brandProfile, contactDetails } from '../data/brand'
import { globalPresence } from '../data/industries'

const faqs = [
  {
    question: 'How quickly can I request a quotation?',
    answer: 'Use the working form on this page. It validates inputs and saves the request locally.',
  },
  {
    question: 'Can I compare products before sending a request?',
    answer: 'Yes. Use the comparison feature in the product catalog to shortlist parts first.',
  },
  {
    question: 'Does the form persist if I refresh?',
    answer: 'Yes. Submissions are saved in localStorage in this frontend-only build.',
  },
]

export function Contact() {
  return (
    <div className="page-shell mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Contact"
        title="Start a quote with Kriscel's original details."
        description="Share drawings, specifications, and volumes, and we’ll route your request with brand-accurate contact information."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Request form</p>
            <p className="mt-3 text-sm leading-7 text-slate-600">{brandProfile.description}</p>
            <div className="mt-4">
              <QuoteForm />
            </div>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">FAQ</p>
            <div className="mt-4">
              <FAQ items={faqs} />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <WorldMapPanel countries={globalPresence} />
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              Original details
            </p>
            <div className="mt-4 grid gap-3">
              <div className="rounded-[1.4rem] bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Brand</p>
                <p className="mt-2 font-semibold text-slate-900">{brandProfile.name}</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">{brandProfile.tagline}</p>
              </div>
              <div className="rounded-[1.4rem] bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Phone</p>
                <p className="mt-2 font-semibold text-slate-900">{contactDetails.phone}</p>
              </div>
              <div className="rounded-[1.4rem] bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Email</p>
                <p className="mt-2 font-semibold text-slate-900">{contactDetails.email}</p>
              </div>
              <div className="rounded-[1.4rem] bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Location</p>
                <p className="mt-2 font-semibold text-slate-900">{contactDetails.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
