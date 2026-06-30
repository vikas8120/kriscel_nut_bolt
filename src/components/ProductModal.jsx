import { AnimatePresence, motion } from 'framer-motion'
import { useMemo } from 'react'
import { useCatalog } from '../context/useCatalog'
import { productBySlug } from '../data/products'

export function ProductModal({ product, onClose }) {
  const { favorites, compare, toggleFavorite, toggleCompare } = useCatalog()
  const favorite = product ? favorites.includes(product.slug) : false
  const compared = product ? compare.includes(product.slug) : false

  const gallery = useMemo(() => product?.gallery ?? [], [product])

  return (
    <AnimatePresence>
      {product ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/45 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 30, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.28 }}
            onClick={(event) => event.stopPropagation()}
            className="max-h-[88vh] w-full max-w-6xl overflow-y-auto rounded-[2rem] bg-white shadow-[0_40px_90px_rgba(15,23,42,0.25)]"
          >
            <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="grid gap-3 p-4 md:grid-cols-2">
                {gallery.map((src, index) => (
                  <div
                    key={src}
                    className={`group overflow-hidden rounded-[1.2rem] ${
                      index === 0 ? 'md:col-span-2' : ''
                    }`}
                  >
                    <img
                      src={src}
                      alt={`${product.name} gallery ${index + 1}`}
                      loading="lazy"
                      decoding="async"
                      className={`h-56 w-full cursor-zoom-in object-cover transition duration-700 ease-out group-hover:scale-110 ${
                        index === 0 ? 'md:h-[22rem]' : ''
                      }`}
                    />
                  </div>
                ))}
              </div>
              <div className="border-t border-slate-200 p-6 lg:border-l lg:border-t-0 lg:p-8">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-slate-600">
                    {product.category}
                  </span>
                  <span className="rounded-full bg-[var(--blue)]/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-[var(--blue)]">
                    {product.sizeRange}
                  </span>
                </div>
                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-900">
                  {product.name}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{product.description}</p>

                <div className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
                  <div className="rounded-[1.2rem] bg-slate-50 p-4">
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Material</p>
                    <p className="mt-2 font-semibold text-slate-900">{product.material}</p>
                  </div>
                  <div className="rounded-[1.2rem] bg-slate-50 p-4">
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Finish</p>
                    <p className="mt-2 font-semibold text-slate-900">{product.finish}</p>
                  </div>
                  <div className="rounded-[1.2rem] bg-slate-50 p-4">
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Thread</p>
                    <p className="mt-2 font-semibold text-slate-900">{product.thread}</p>
                  </div>
                  <div className="rounded-[1.2rem] bg-slate-50 p-4">
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Applications</p>
                    <p className="mt-2 font-semibold text-slate-900">{product.applications.join(', ')}</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => toggleFavorite(product.slug)}
                    className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-[var(--gold)]"
                  >
                    {favorite ? 'Remove Favorite' : 'Save Favorite'}
                  </button>
                  <button
                    type="button"
                    onClick={() => toggleCompare(product.slug)}
                    className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-[var(--orange)]"
                  >
                    {compared ? 'Remove Compare' : 'Add to Compare'}
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-[var(--blue)]"
                  >
                    Close
                  </button>
                </div>

                <div className="mt-8">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Specs</p>
                  <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                    {Object.entries(product.specs).map(([label, value]) => (
                      <div key={label} className="rounded-[1rem] border border-slate-200 p-4">
                        <dt className="text-xs uppercase tracking-[0.22em] text-slate-400">{label}</dt>
                        <dd className="mt-2 font-semibold text-slate-900">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export function ProductMiniDetails({ slug }) {
  const product = productBySlug[slug]
  return product ? <span>{product.name}</span> : null
}
