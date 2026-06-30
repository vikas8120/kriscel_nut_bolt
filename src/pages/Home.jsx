import { Link } from 'react-router-dom'
import { useGSAP } from '../hooks/useGSAP'
import { SectionHeading } from '../components/SectionHeading'
import { Gallery } from '../components/Gallery'
import { Timeline } from '../components/Timeline'
import { InfiniteLogoSlider } from '../components/InfiniteLogoSlider'
import { WorldMapPanel } from '../components/WorldMapPanel'
import { ProductRangeSection } from '../components/ProductRangeSection'
import { products } from '../data/products'
import { industries, clientLogos, globalPresence } from '../data/industries'
import { qualityTimeline } from '../data/certificates'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const palette = {
  paleSlate: '#D6D3DC',
  vintageGrape: '#57465D',
  lilacAsh: '#BEA8AA',
  khakiBeige: '#9E9885',
  dustyOlive: '#7C7F65',
}

const themeStyles = {
  hero: {
    background:
      'linear-gradient(135deg, rgba(214, 211, 220, 0.9), rgba(248, 246, 250, 0.86), rgba(190, 168, 170, 0.36))',
    '--bg': palette.paleSlate,
    '--surface-strong': 'rgba(255, 255, 255, 0.72)',
    '--surface-soft': 'rgba(255, 255, 255, 0.42)',
    '--surface-muted': 'rgba(255, 255, 255, 0.28)',
    '--surface-accent': 'rgba(87, 70, 93, 0.08)',
    '--border': 'rgba(87, 70, 93, 0.14)',
    '--text-strong': palette.vintageGrape,
    '--text-body': '#66586C',
    '--text-muted': '#7E7383',
    '--text-soft': '#94869A',
    '--primary-rgb': '87, 70, 93',
    '--olive-rgb': '124, 127, 101',
    '--cream-rgb': '255, 250, 252',
    '--sand-rgb': '214, 211, 220',
    '--blue': palette.vintageGrape,
    '--orange': palette.lilacAsh,
    '--gold': palette.khakiBeige,
    '--steel': palette.paleSlate,
    '--silver': palette.lilacAsh,
    '--dark-steel': palette.dustyOlive,
    '--graphite': palette.vintageGrape,
  },
  slate: {
    background:
      'linear-gradient(135deg, rgba(214, 211, 220, 0.98), rgba(248, 246, 250, 0.82))',
    '--bg': palette.paleSlate,
    '--surface-strong': 'rgba(255, 255, 255, 0.78)',
    '--surface-soft': 'rgba(214, 211, 220, 0.26)',
    '--surface-muted': 'rgba(214, 211, 220, 0.42)',
    '--surface-accent': 'rgba(87, 70, 93, 0.1)',
    '--border': 'rgba(87, 70, 93, 0.15)',
    '--text-strong': palette.vintageGrape,
    '--text-body': '#66586C',
    '--text-muted': '#7E7383',
    '--text-soft': '#94869A',
    '--primary-rgb': '87, 70, 93',
    '--olive-rgb': '124, 127, 101',
    '--cream-rgb': '248, 246, 250',
    '--sand-rgb': '214, 211, 220',
    '--blue': palette.vintageGrape,
    '--orange': palette.lilacAsh,
    '--gold': palette.khakiBeige,
    '--steel': palette.paleSlate,
    '--silver': palette.lilacAsh,
    '--dark-steel': palette.dustyOlive,
    '--graphite': palette.vintageGrape,
  },
  grape: {
    background:
      'linear-gradient(135deg, rgba(87, 70, 93, 0.98), rgba(124, 127, 101, 0.9))',
    '--bg': palette.vintageGrape,
    '--surface-strong': 'rgba(246, 242, 245, 0.14)',
    '--surface-soft': 'rgba(246, 242, 245, 0.08)',
    '--surface-muted': 'rgba(246, 242, 245, 0.1)',
    '--surface-accent': 'rgba(214, 211, 220, 0.12)',
    '--border': 'rgba(248, 246, 250, 0.18)',
    '--text-strong': '#FBF8EF',
    '--text-body': 'rgba(251, 248, 239, 0.82)',
    '--text-muted': 'rgba(251, 248, 239, 0.62)',
    '--text-soft': 'rgba(251, 248, 239, 0.48)',
    '--primary-rgb': '214, 211, 220',
    '--olive-rgb': '124, 127, 101',
    '--cream-rgb': '87, 70, 93',
    '--sand-rgb': '190, 168, 170',
    '--blue': palette.paleSlate,
    '--orange': palette.lilacAsh,
    '--gold': palette.khakiBeige,
    '--steel': palette.paleSlate,
    '--silver': palette.lilacAsh,
    '--dark-steel': palette.dustyOlive,
    '--graphite': '#FBF8EF',
  },
  ash: {
    background:
      'linear-gradient(135deg, rgba(190, 168, 170, 0.96), rgba(214, 211, 220, 0.76))',
    '--bg': palette.lilacAsh,
    '--surface-strong': 'rgba(255, 255, 255, 0.74)',
    '--surface-soft': 'rgba(255, 255, 255, 0.44)',
    '--surface-muted': 'rgba(255, 255, 255, 0.3)',
    '--surface-accent': 'rgba(87, 70, 93, 0.09)',
    '--border': 'rgba(87, 70, 93, 0.16)',
    '--text-strong': palette.vintageGrape,
    '--text-body': '#66586C',
    '--text-muted': '#7E7383',
    '--text-soft': '#94869A',
    '--primary-rgb': '87, 70, 93',
    '--olive-rgb': '124, 127, 101',
    '--cream-rgb': '255, 250, 252',
    '--sand-rgb': '214, 211, 220',
    '--blue': palette.vintageGrape,
    '--orange': palette.lilacAsh,
    '--gold': palette.khakiBeige,
    '--steel': palette.paleSlate,
    '--silver': palette.lilacAsh,
    '--dark-steel': palette.dustyOlive,
    '--graphite': palette.vintageGrape,
  },
  beige: {
    background:
      'linear-gradient(135deg, rgba(158, 152, 133, 0.96), rgba(219, 206, 165, 0.82))',
    '--bg': palette.khakiBeige,
    '--surface-strong': 'rgba(255, 255, 255, 0.76)',
    '--surface-soft': 'rgba(255, 255, 255, 0.42)',
    '--surface-muted': 'rgba(255, 255, 255, 0.28)',
    '--surface-accent': 'rgba(87, 70, 93, 0.08)',
    '--border': 'rgba(87, 70, 93, 0.15)',
    '--text-strong': palette.vintageGrape,
    '--text-body': '#66586C',
    '--text-muted': '#7E7383',
    '--text-soft': '#94869A',
    '--primary-rgb': '87, 70, 93',
    '--olive-rgb': '124, 127, 101',
    '--cream-rgb': '248, 246, 250',
    '--sand-rgb': '219, 206, 165',
    '--blue': palette.vintageGrape,
    '--orange': palette.lilacAsh,
    '--gold': palette.khakiBeige,
    '--steel': palette.paleSlate,
    '--silver': palette.lilacAsh,
    '--dark-steel': palette.dustyOlive,
    '--graphite': palette.vintageGrape,
  },
  olive: {
    background:
      'linear-gradient(135deg, rgba(124, 127, 101, 0.97), rgba(214, 211, 220, 0.72))',
    '--bg': palette.dustyOlive,
    '--surface-strong': 'rgba(246, 242, 245, 0.14)',
    '--surface-soft': 'rgba(246, 242, 245, 0.08)',
    '--surface-muted': 'rgba(246, 242, 245, 0.1)',
    '--surface-accent': 'rgba(214, 211, 220, 0.12)',
    '--border': 'rgba(248, 246, 250, 0.18)',
    '--text-strong': '#FBF8EF',
    '--text-body': 'rgba(251, 248, 239, 0.82)',
    '--text-muted': 'rgba(251, 248, 239, 0.62)',
    '--text-soft': 'rgba(251, 248, 239, 0.48)',
    '--primary-rgb': '214, 211, 220',
    '--olive-rgb': '124, 127, 101',
    '--cream-rgb': '124, 127, 101',
    '--sand-rgb': '219, 206, 165',
    '--blue': palette.paleSlate,
    '--orange': palette.lilacAsh,
    '--gold': palette.khakiBeige,
    '--steel': palette.paleSlate,
    '--silver': palette.lilacAsh,
    '--dark-steel': palette.dustyOlive,
    '--graphite': '#FBF8EF',
  },
}

const sectionStyle = (theme) => ({
  background: theme.background,
  ...theme,
})

const processPanels = [
  {
    title: 'Cold Forging',
    image:
      'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1200&q=80',
    text: 'Controlled grain flow and strong near-net shapes.',
  },
  {
    title: 'Heat Treatment',
    image:
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80',
    text: 'Strength, hardness, and consistency under demanding loads.',
  },
  {
    title: 'CNC Machining',
    image:
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    text: 'Precision surfaces and tight tolerances for engineered fit.',
  },
  {
    title: 'Thread Rolling',
    image:
      'https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1200&q=80',
    text: 'Clean thread geometry that improves fatigue performance.',
  },
  {
    title: 'Surface Finishing',
    image:
      'https://images.unsplash.com/photo-1565087157823-6a4e7a9a3e4a?auto=format&fit=crop&w=1200&q=80',
    text: 'Premium protective coatings with a polished industrial look.',
  },
  {
    title: 'Inspection',
    image:
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80',
    text: 'Metrology-led checks before release to shipment.',
  },
  {
    title: 'Packaging',
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    text: 'Export-ready packaging and kitting built for handling.',
  },
]

const heroGallery = [
  {
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=80',
    alt: 'Metal fasteners macro — nuts and bolts precision',
    span: 'md:col-span-7',
    height: 'h-[30rem]',
    caption: 'Thread precision in a premium manufacturing language.',
  },
  {
    src: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80',
    alt: 'Precision machined industrial components',
    span: 'md:col-span-5',
    height: 'h-[30rem]',
    caption: 'Premium industrial surfaces with quiet confidence.',
  },
]

export function Home() {
  const sectionRef = useGSAP(({ gsap, scope }) => {
    gsap.registerPlugin(ScrollTrigger)
    const track = scope.querySelector('[data-track]')
    const panels = gsap.utils.toArray('[data-panel]', track)

    if (!track || !panels.length) return

    const totalWidth = () => {
      let distance = 0
      panels.forEach((panel) => {
        distance += panel.offsetWidth
      })
      return distance
    }

    const ctx = gsap.to(track, {
      x: () => `-${Math.max(totalWidth() - window.innerWidth * 0.92, 0)}px`,
      ease: 'none',
      scrollTrigger: {
        trigger: scope.querySelector('[data-horizontal-shell]'),
        start: 'top top',
        end: () => `+=${totalWidth()}`,
        scrub: 0.7,
        pin: true,
        invalidateOnRefresh: true,
      },
    })

    return () => ctx.kill()
  }, [])

  return (
    <div className="page-shell pb-16">
      <section className="relative h-screen w-full overflow-hidden" style={sectionStyle(themeStyles.hero)}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/video/Steel_billet_to_nut_assembly_202606291250.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_30%),linear-gradient(180deg,rgba(11,10,14,0.18),rgba(11,10,14,0.72))]" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-start gap-6 px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
            <img
              src="/kriscel-logo.png"
              alt="Kriscel Nut Bolt logo"
              className="h-28 w-28 object-contain drop-shadow-[0_14px_30px_rgba(0,0,0,0.22)] sm:h-32 sm:w-32 lg:h-36 lg:w-36"
              loading="eager"
              decoding="async"
            />
            <div className="max-w-4xl">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.42em] text-white/72 drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
                Kriscel Nut Bolt
              </p>
              <h1 className="mt-3 font-display text-4xl tracking-[-0.05em] text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.45)] sm:text-5xl lg:text-6xl">
                Precision That Holds the World Together
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/82 drop-shadow-[0_2px_12px_rgba(0,0,0,0.25)] sm:text-base">
                Premium fasteners, precision-machined components, and engineered confidence for
                every critical assembly.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/products"
                className="rounded-full bg-[#ECE7D1] px-5 py-3 text-sm font-semibold text-[#8A7650] transition hover:bg-[#DBCEA5] hover:text-[#5F5238]"
              >
                Explore Products
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-white/20 bg-white/6 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/12"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ProductRangeSection />

      <section id="company-overview" className="w-full py-24" style={sectionStyle(themeStyles.slate)}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Company overview"
                title="An engineering brand, not a commodity supplier."
                description="The site is intentionally minimal, editorial, and precise. It feels closer to a premium mobility brand than a standard industrial template."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  'Precision cold forging',
                  'CNC machining and thread rolling',
                  'Heat treatment and coating control',
                  'Inspection and export-ready packaging',
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.35rem] border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <Gallery images={heroGallery} />
          </div>
        </div>
      </section>

      <section className="w-full py-8" style={sectionStyle(themeStyles.grape)}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div data-horizontal-shell className="overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
            <div className="px-6 pt-6">
              <SectionHeading
                eyebrow="Manufacturing flow"
                title="Seven steps, one standard: excellence."
                description="A horizontal GSAP scroll brings the manufacturing story to life without feeling busy."
              />
            </div>
            <div ref={sectionRef} className="relative mt-6 h-[72vh]">
              <div data-track className="flex h-full w-max gap-5 px-6 pb-6">
                {processPanels.map((panel, index) => (
                  <article
                    key={panel.title}
                    data-panel
                    className="group relative h-full w-[84vw] max-w-[33rem] overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 md:w-[32rem]"
                  >
                    <img
                      src={panel.image}
                      alt={panel.title}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.07]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/72 via-slate-950/20 to-transparent" />
                    <div className="absolute bottom-0 p-6 text-white">
                      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/70">
                        Process {String(index + 1).padStart(2, '0')}
                      </p>
                      <h3 className="mt-3 text-3xl font-semibold tracking-[-0.05em]">{panel.title}</h3>
                      <p className="mt-3 max-w-sm text-sm leading-7 text-white/80">{panel.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-24" style={sectionStyle(themeStyles.ash)}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Products"
            title="A focused product portfolio built for precision and scale."
            description="Everything is local data driven, searchable, and designed to feel like a luxury catalog experience."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {products.slice(0, 8).map((product) => (
              <article
                key={product.slug}
                className="group/card overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_16px_50px_rgba(15,23,42,0.06)] transition duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(15,23,42,0.1)]"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.gallery[0]}
                    alt={product.name}
                    loading="lazy"
                    decoding="async"
                    className="h-56 w-full object-cover transition duration-700 ease-out sm:h-64 group-hover/card:scale-[1.18]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent transition-opacity duration-700 group-hover/card:opacity-95" />
                </div>
                <div className="p-4 transition-transform duration-500 ease-out group-hover/card:-translate-y-2 sm:p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--blue)]">
                    {product.category}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900 transition-colors duration-300 group-hover/card:text-[var(--blue)] sm:mt-3 sm:text-xl">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 sm:leading-7">{product.short}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-10" style={sectionStyle(themeStyles.beige)}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Industries"
            title="Engineered for demanding sectors."
            description="The work spans automotive and adjacent industries, always with the same premium presentation."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {industries.map((industry) => (
              <article
                key={industry.slug}
                className="group/card overflow-hidden rounded-[1.7rem] border border-slate-200 bg-white transition duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
              >
                <div className="overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.name}
                    loading="lazy"
                    decoding="async"
                    className="h-48 w-full object-cover transition duration-700 ease-out sm:h-56 group-hover/card:scale-[1.18]"
                  />
                </div>
                <div className="p-4 transition-transform duration-500 ease-out group-hover/card:-translate-y-2 sm:p-5">
                  <h3 className="text-lg font-semibold text-slate-900 transition-colors duration-300 group-hover/card:text-[var(--blue)] sm:text-xl">
                    {industry.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 sm:leading-7">{industry.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-24" style={sectionStyle(themeStyles.olive)}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Manufacturing excellence"
            title="Clear process, premium execution."
            description="A visual timeline with the right amount of motion keeps the story grounded in engineering discipline."
          />
          <div className="mt-12">
            <Timeline items={qualityTimeline} />
          </div>
        </div>
      </section>

      <section className="w-full py-8" style={sectionStyle(themeStyles.slate)}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <SectionHeading
              eyebrow="Global presence"
              title="Built for domestic leadership and export confidence."
              description="The world map panel adds a premium geopolitical presence without a literal stock map texture."
            />
            <div className="mt-5 grid gap-2 sm:grid-cols-2">
              {globalPresence.map((item) => (
                <div key={item.country} className="rounded-[1.3rem] border border-slate-200 bg-white p-3">
                  <p className="text-sm font-semibold text-slate-900">{item.country}</p>
                  <p className="mt-0.5 text-xs uppercase tracking-[0.24em] text-slate-400">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
          <WorldMapPanel countries={globalPresence} />
        </div>
      </section>

      <section
        className="relative w-full overflow-hidden py-20"
        style={sectionStyle(themeStyles.grape)}
      >
        <div className="absolute inset-0 bg-[url('/clients-bg.jpeg')] bg-cover bg-center bg-no-repeat" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(19,18,24,0.72),rgba(87,70,93,0.58),rgba(124,127,101,0.42))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_30%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <SectionHeading
              eyebrow="Clients"
              title="An infinite brand ribbon for partner confidence."
              description="The logo slider is intentionally restrained and elegant rather than noisy."
              align="center"
            />
            <div className="mt-10">
              <InfiniteLogoSlider logos={clientLogos} />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full pb-8 pt-0" style={sectionStyle(themeStyles.olive)}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2.2rem] border border-slate-200 bg-[linear-gradient(135deg,rgba(246,242,245,0.12),rgba(255,255,255,0.06),rgba(219,206,165,0.12))] p-8 text-center shadow-[0_20px_60px_rgba(95,82,56,0.08)]">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
              Footer CTA
            </p>
            <h2 className="mt-4 font-display text-3xl tracking-[-0.04em] text-slate-900 md:text-5xl">
              Let&apos;s build stronger together.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600">
              Premium engineering conversations start with a clear, credible, and high-end digital
              impression. This is that impression.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--blue)]"
              >
                Request Quote
              </Link>
              <Link
                to="/products"
                className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-[var(--blue)] hover:text-[var(--blue)]"
              >
                Explore Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
