import { Link } from 'react-router-dom'
import { MagneticButton } from './MagneticButton'
import { downloadBrochure } from '../utils/brochure'

const footerLinks = [
  ['/products', 'Products'],
  ['/manufacturing', 'Manufacturing'],
  ['/quality', 'Quality'],
  ['/contact', 'Contact'],
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#8A7650]/18 bg-[#5f5238]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.18]"
        style={{ backgroundImage: "url('/footer-bg.jpeg')" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,16,10,0.72),rgba(34,28,18,0.84))]" />

      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-white/12 bg-white/10 p-6 shadow-[0_20px_54px_rgba(0,0,0,0.18)] backdrop-blur-md">
            <div className="mb-4 h-16 w-16 overflow-hidden rounded-[1.25rem] border border-white/18 bg-white/10 shadow-[0_10px_24px_rgba(0,0,0,0.16)]">
              <img
                src="/kriscel-logo.png"
                alt="Kriscel Nut Bolt logo"
                className="h-full w-full object-contain p-1.5"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.3em] text-[#F6F1E3]/72">
              Let&apos;s build stronger together
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-2xl tracking-[-0.04em] text-[#FBF8EF] md:text-4xl">
              Precision hardware for the companies building the next decade of mobility and industry.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-[#FBF8EF]/76">
              Kriscel Nut Bolt combines cold forging, machining, inspection, and export-grade
              packaging into a premium engineering experience.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="rounded-full bg-[#ECE7D1] px-4 py-2.5 text-sm font-semibold text-[#8A7650] transition hover:bg-[#DBCEA5] hover:text-[#5F5238]"
              >
                Request Quote
              </Link>
              <MagneticButton type="button" onClick={downloadBrochure}>
                Download Brochure
              </MagneticButton>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[2rem] border border-white/12 bg-white/10 p-5 backdrop-blur-md">
              <p className="text-xs uppercase tracking-[0.28em] text-[#F6F1E3]/72">Navigation</p>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {footerLinks.map(([to, label]) => (
                  <Link
                    key={to}
                    to={to}
                    className="rounded-2xl bg-white/10 px-4 py-2.5 text-sm font-medium text-[#FBF8EF]/82 transition hover:bg-white/16 hover:text-[#FBF8EF]"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/12 bg-white/10 p-5 backdrop-blur-md">
              <p className="text-xs uppercase tracking-[0.3em] text-[#F6F1E3]/72">Contact</p>
              <div className="mt-3 space-y-2 text-sm text-[#FBF8EF]/78">
                <p>+91 99999 12345</p>
                <p>sales@kriscelfasteners.com</p>
                <p>Pune Industrial Corridor, India</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/12 pt-4 text-sm text-[#FBF8EF]/64 md:flex-row md:items-center md:justify-between">
          <p>Â© 2026 Kriscel Nut Bolt. All rights reserved.</p>
          <p>Luxury industrial frontend built with React, Vite, Tailwind, GSAP, Framer Motion, and Lenis.</p>
        </div>
      </div>
    </footer>
  )
}
