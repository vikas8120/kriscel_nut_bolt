import { motion, AnimatePresence } from 'framer-motion'
import { useCatalog } from '../context/useCatalog'
import { products } from '../data/products'

export function CompareDrawer() {
  const { compare, clearCompare, toggleCompare } = useCatalog()
  const selected = compare.map((slug) => products.find((product) => product.slug === slug)).filter(Boolean)

  return (
    <AnimatePresence>
      {selected.length ? (
        <motion.aside
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          className="sticky bottom-4 z-20 mx-auto mt-10 max-w-7xl rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_24px_70px_rgba(15,23,42,0.12)]"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                Product comparison
              </p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">
                Comparing {selected.length} product{selected.length > 1 ? 's' : ''}
              </h3>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={clearCompare}
                className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700"
              >
                Clear
              </button>
            </div>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {selected.map((product) => (
              <div key={product.slug} className="rounded-[1.2rem] bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">{product.name}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.22em] text-slate-400">
                  {product.category}
                </p>
                <p className="mt-3 text-sm text-slate-600">{product.sizeRange}</p>
                <button
                  type="button"
                  onClick={() => toggleCompare(product.slug)}
                  className="mt-4 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--orange)]"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </motion.aside>
      ) : null}
    </AnimatePresence>
  )
}
