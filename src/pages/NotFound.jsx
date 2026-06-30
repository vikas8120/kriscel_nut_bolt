import { Link } from 'react-router-dom'
import { SectionHeading } from '../components/SectionHeading'

export function NotFound() {
  return (
    <div className="page-shell mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="404"
        title="The page moved off the line."
        description="Use the navigation to return to the premium manufacturing experience."
        align="center"
      />
      <Link
        to="/"
        className="mt-8 inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--blue)]"
      >
        Go Home
      </Link>
    </div>
  )
}
