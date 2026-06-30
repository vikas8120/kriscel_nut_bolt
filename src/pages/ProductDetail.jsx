import { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FastenerVisual } from '../components/FastenerVisual'
import { ProductCard } from '../components/ProductCard'
import { CompareDrawer } from '../components/CompareDrawer'
import { SectionHeading } from '../components/SectionHeading'
import { useCatalog } from '../context/useCatalog'
import { brandProfile, contactDetails } from '../data/brand'
import { products, productBySlug } from '../data/products'

export function ProductDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const { recordViewed } = useCatalog()
  const product = productBySlug[slug]

  useEffect(() => {
    if (product) recordViewed(product.slug)
  }, [product, recordViewed])

  if (!product) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Not found"
          title="That product does not exist."
          description="Try the product catalog instead."
          align="center"
        />
        <Link
          to="/products"
          className="mt-8 inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white"
        >
          Back to Products
        </Link>
      </div>
    )
  }

  const related = products.filter((item) => item.slug !== product.slug).slice(0, 4)

  return (
    <div className="page-shell mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500"
      >
        &larr; Back
      </button>

      <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 aspect-[4/3] lg:aspect-auto lg:h-[500px]"
        >
          <img
            src={product.gallery[0]}
            alt={product.name}
            className="h-full w-full cursor-zoom-in object-cover transition duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <span className="rounded-full border border-white/30 bg-white/15 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.24em] backdrop-blur-md">
              {product.category}
            </span>
            <h2 className="mt-3 font-display text-2xl font-bold tracking-tight">{product.name}</h2>
          </div>
        </motion.div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--blue)]">
            {product.category}
          </p>
          <h1 className="mt-4 font-display text-4xl tracking-[-0.05em] text-slate-950 md:text-6xl">
            {product.name}
          </h1>
          <p className="mt-5 text-base leading-8 text-slate-600">{product.description}</p>
          <div className="mt-6 rounded-[1.6rem] border border-slate-200 bg-white p-5 shadow-[0_14px_40px_rgba(15,23,42,0.04)]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              Kriscel Original Detail
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              {brandProfile.description}
            </p>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {brandProfile.capabilities.map((item) => (
                <div key={item} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-600">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <MetaBox label="Material" value={product.material} />
            <MetaBox label="Finish" value={product.finish} />
            <MetaBox label="Thread" value={product.thread} />
            <MetaBox label="Size range" value={product.sizeRange} />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--blue)]"
            >
              Request Quote
            </Link>
            <Link
              to="/products"
              className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-[var(--blue)]"
            >
              More Products
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-14 grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-8">
          <section className="rounded-[2rem] border border-slate-200 bg-white p-6">
            <SectionHeading
              eyebrow="Technical specifications"
              title="Drawing-level clarity."
              description="The detail block is intentionally structured for engineers, buyers, and quality teams."
            />
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {Object.entries(product.specs).map(([label, value]) => (
                <div key={label} className="rounded-[1.25rem] bg-slate-50 p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-400">{label}</p>
                  <p className="mt-2 font-semibold text-slate-900">{value}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[2rem] border border-slate-200 bg-white p-6">
            <SectionHeading eyebrow="Applications" title="Built for these environments." />
            <div className="mt-6 flex flex-wrap gap-3">
              {product.applications.map((item) => (
                <span key={item} className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700">
                  {item}
                </span>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-8">
          <section className="rounded-[2rem] border border-slate-200 bg-white p-6">
            <SectionHeading eyebrow="Gallery" title="Material, finish, and detail." />
            <div className="mt-6 grid gap-3">
              {product.gallery.map((src, index) => (
                <div key={src} className="group overflow-hidden rounded-[1.25rem]">
                  <img
                    src={src}
                    alt={`${product.name} gallery ${index + 1}`}
                    loading="lazy"
                    decoding="async"
                    className={`w-full cursor-zoom-in object-cover transition duration-700 ease-out group-hover:scale-110 ${
                      index === 0 ? 'h-72' : 'h-44'
                    }`}
                  />
                </div>
              ))}
            </div>
          </section>
          <section className="rounded-[2rem] border border-slate-200 bg-white p-6">
            <SectionHeading eyebrow="Features" title="Why this product feels premium." />
            <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-600">
              {product.features.map((feature) => (
                <li key={feature} className="rounded-2xl bg-slate-50 px-4 py-3">
                  {feature}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <section className="mt-14 rounded-[2rem] border border-slate-200 bg-white p-6">
        <SectionHeading eyebrow="Related products" title="Adjacent fastener families." />
        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {related.map((item) => (
            <ProductCard key={item.slug} product={item} />
          ))}
        </div>
      </section>

      <section className="mt-14 rounded-[2rem] border border-slate-200 bg-white p-6">
        <SectionHeading eyebrow="Contact" title="Need the original Kriscel details?" />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
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
      </section>

      <CompareDrawer />
    </div>
  )
}

function MetaBox({ label, value }) {
  return (
    <div className="rounded-[1.4rem] border border-slate-200 bg-white p-4">
      <p className="text-xs uppercase tracking-[0.25em] text-slate-400">{label}</p>
      <p className="mt-2 font-semibold text-slate-900">{value}</p>
    </div>
  )
}
