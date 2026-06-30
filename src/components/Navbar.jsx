import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useCatalog } from '../context/useCatalog'

const links = [
  ['/', 'Home'],
  ['/products', 'Products'],
  ['/industries', 'Industries'],
  ['/manufacturing', 'Manufacturing'],
  ['/quality', 'Quality'],
  ['/infrastructure', 'Infrastructure'],
  ['/about', 'About'],
  ['/contact', 'Contact'],
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { favorites, compare } = useCatalog()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'border-[#8A7650]/25 bg-[#8A7650]/90 shadow-[0_18px_60px_rgba(95,82,56,0.22)] backdrop-blur-xl'
          : 'border-transparent bg-[#8E977D]/82 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 py-3 sm:gap-4 sm:px-6 sm:py-4 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-2 sm:gap-3">
          <div className="h-10 w-10 shrink-0 overflow-hidden rounded-2xl border border-[#ECE7D1]/40 bg-[#ECE7D1]/12 shadow-[0_10px_24px_rgba(0,0,0,0.14)] sm:h-12 sm:w-12">
            <img
              src="/kriscel-logo.png"
              alt="Kriscel Nut Bolt logo"
              className="h-full w-full object-contain p-1"
              loading="eager"
              decoding="async"
            />
          </div>
          <div className="min-w-0">
            <p className="truncate text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-[#ECE7D1]/74 sm:text-[0.65rem] sm:tracking-[0.36em]">
              Kriscel Nut Bolt
            </p>
            <p className="hidden text-sm font-semibold text-[#F8F4E8] sm:block">Engineering Precision</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? 'bg-[#ECE7D1]/18 text-[#F8F4E8]'
                    : 'text-[#F8F4E8]/78 hover:bg-[#ECE7D1]/10 hover:text-[#F8F4E8]'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            to="/products"
            className="hidden rounded-full border border-[#ECE7D1]/35 px-4 py-2 text-sm font-semibold text-[#F8F4E8] transition hover:border-[#ECE7D1] hover:bg-[#ECE7D1]/10 sm:inline-flex"
          >
            Explore
          </Link>
          <Link
            to="/contact"
            className="rounded-full bg-[#ECE7D1] px-3 py-2 text-[0.8rem] font-semibold text-[#8A7650] transition hover:bg-[#DBCEA5] hover:text-[#5F5238] sm:px-4 sm:text-sm"
          >
            Request Quote
          </Link>
          <button
            type="button"
            className="relative inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#ECE7D1]/35 bg-[#8A7650]/75 text-[#F8F4E8] lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            <span className="flex flex-col gap-1.5" aria-hidden="true">
              <span className="block h-0.5 w-4 rounded-full bg-current" />
              <span className="block h-0.5 w-4 rounded-full bg-current" />
              <span className="block h-0.5 w-4 rounded-full bg-current" />
            </span>
            <span className="sr-only">Menu</span>
            {favorites.length || compare.length ? (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#ECE7D1] px-1 text-[10px] font-bold text-[#8A7650]">
                {favorites.length + compare.length}
              </span>
            ) : null}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-[#ECE7D1]/18 bg-[#8A7650]/96 px-4 py-4 backdrop-blur-xl lg:hidden"
          >
            <div className="grid gap-2">
              {links.map(([to, label]) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-2xl px-4 py-3 text-sm font-medium ${
                      isActive
                        ? 'bg-[#ECE7D1]/18 text-[#F8F4E8]'
                        : 'bg-[#ECE7D1]/10 text-[#F8F4E8]/82'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  )
}
