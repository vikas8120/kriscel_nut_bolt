import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const rangeItems = [
  {
    title: 'Bolts & Screws',
    image: '/images/hex-bolt.png',
    description:
      'Precision-engineered bolts and screws for durable assemblies, structural fastening, and dependable torque behavior.',
    href: '/products/hex-bolt',
  },
  {
    title: 'Nuts',
    image: '/images/hex-nut.png',
    description:
      'Matched nuts built for clean threading, secure clamp load, and reliable OEM-style fit across production runs.',
    href: '/products/hex-nut',
  },
  {
    title: 'Washers',
    image: '/images/studs.png',
    description:
      'Load-spreading hardware and support components designed for clean seating, stability, and assembly consistency.',
    href: '/products/washers',
  },
]

function FlipCard({ item }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <motion.div
      className="group/card relative h-[21rem] w-full [perspective:1600px] sm:h-[24rem] lg:h-[26rem] lg:w-[31rem] lg:flex-none"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <div
        onClick={() => setFlipped((value) => !value)}
        onMouseEnter={() => setFlipped(true)}
        onMouseLeave={() => setFlipped(false)}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault()
            setFlipped((value) => !value)
          }
        }}
        tabIndex={0}
        role="button"
        aria-pressed={flipped}
        aria-label={`Toggle details for ${item.title}`}
        className="relative h-full w-full overflow-hidden rounded-[1.6rem] text-left outline-none sm:rounded-[2rem]"
      >
        <div
          className="relative h-full w-full rounded-[1.6rem] [transform-style:preserve-3d] transition-transform duration-700 ease-out group-hover/card:scale-[1.05] sm:rounded-[2rem]"
          style={{ transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
        >
        <div className="absolute inset-0 overflow-hidden rounded-[1.6rem] border border-white/30 bg-[#111111] shadow-[0_24px_60px_rgba(0,0,0,0.16)] [backface-visibility:hidden] sm:rounded-[2rem]">
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover transition duration-700 ease-out group-hover/card:scale-[1.18]"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.68))] transition-opacity duration-700 group-hover/card:opacity-95" />
          <div className="absolute inset-x-0 top-0 flex justify-between p-4 transition-transform duration-500 ease-out group-hover/card:-translate-y-2 sm:p-5">
            <span className="h-7 w-12 rounded-[0.8rem] border border-white/15 bg-white/10 backdrop-blur-sm sm:h-8 sm:w-16 sm:rounded-[0.9rem]" />
            <span className="h-7 w-12 rounded-[0.8rem] border border-white/15 bg-white/10 backdrop-blur-sm sm:h-8 sm:w-16 sm:rounded-[0.9rem]" />
          </div>
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-center p-4 transition-transform duration-500 ease-out group-hover/card:-translate-y-2 sm:p-6">
            <h3 className="max-w-[12ch] text-center text-xl font-semibold tracking-[-0.05em] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] sm:text-2xl md:text-[2.15rem]">
              {item.title}
            </h3>
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center rounded-[1.6rem] border border-white/20 bg-[#1a1a1a] p-4 text-center shadow-[0_24px_60px_rgba(0,0,0,0.22)] [transform:rotateY(180deg)] [backface-visibility:hidden] sm:rounded-[2rem] sm:p-6">
          <div className="flex h-full w-full flex-col items-center justify-between rounded-[1.25rem] border border-[#F46A43]/65 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_50%),linear-gradient(180deg,#212121,#141414)] p-4 text-white transition-transform duration-500 ease-out group-hover/card:scale-[1.05] sm:rounded-[1.5rem] sm:p-6">
            <div className="w-full transition-transform duration-500 ease-out group-hover/card:-translate-y-2">
              <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-full border border-[#F46A43]/60 text-[0.65rem] font-bold tracking-[0.3em] text-[#F46A43] sm:mb-8 sm:h-10 sm:w-10 sm:text-xs">
                01
              </div>
              <h3 className="text-2xl font-semibold tracking-[-0.05em] text-white sm:text-3xl md:text-[2.35rem]">
                {item.title}
              </h3>
              <p className="mx-auto mt-4 max-w-sm text-sm leading-6 text-white/88 sm:mt-5 sm:leading-7">
                {item.description}
              </p>
            </div>

            <Link
              to={item.href}
              onClick={(event) => event.stopPropagation()}
              className="inline-flex w-full justify-center rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white transition hover:border-[#F46A43] hover:text-[#F46A43] sm:w-auto"
            >
              Read More
            </Link>
          </div>
        </div>
        <span className="sr-only">Flip card</span>
        </div>
      </div>
    </motion.div>
  )
}

export function ProductRangeSection() {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px)')
    const update = () => setIsDesktop(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  return (
    <section className="relative w-full overflow-hidden py-10 sm:py-14 lg:py-16">
      <div className="absolute inset-0 bg-[url('/products-range-bg.jpeg')] bg-cover bg-center bg-no-repeat" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(22,18,26,0.78),rgba(201,26,31,0.72),rgba(20,20,24,0.55))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_34%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-white/82 drop-shadow-[0_2px_10px_rgba(0,0,0,0.25)] sm:text-xs sm:tracking-[0.42em]">
            Product Range
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-[-0.05em] text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.35)] sm:mt-4 sm:text-4xl md:text-6xl">
            Our Products Range
          </h2>
        </div>

        <div
          className={`mt-8 grid gap-5 sm:mt-10 ${
            isDesktop ? 'lg:flex lg:w-max lg:gap-5' : 'md:grid-cols-3'
          }`}
        >
          {rangeItems.map((item) => (
            <FlipCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
