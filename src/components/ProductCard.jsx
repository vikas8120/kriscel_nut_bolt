import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useCatalog } from '../context/useCatalog'
import { FastenerVisual } from './FastenerVisual'

export function ProductCard({ product, onOpen }) {
  const { favorites, compare, toggleFavorite, toggleCompare } = useCatalog()
  const favorite = favorites.includes(product.slug)
  const compared = compare.includes(product.slug)

  return (
    <motion.article
      layout
      whileHover={{ y: -10, scale: 1.01 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="group overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.06)] transition-shadow duration-300 hover:shadow-[0_28px_70px_rgba(15,23,42,0.12)]"
    >
      <div className="relative h-64 overflow-hidden bg-slate-100">
        <img
          src={product.gallery[0]}
          alt={product.name}
          loading="lazy"
          className="h-full w-full cursor-zoom-in object-cover transition duration-700 ease-out group-hover:scale-[1.18]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/28 via-transparent to-transparent transition duration-500 group-hover:from-slate-950/40" />
        <div className="absolute left-4 top-4 flex gap-2 transition duration-300 group-hover:translate-y-[-2px]">
          <span className="rounded-full border border-white/30 bg-white/15 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-white backdrop-blur-md transition duration-300 group-hover:bg-white/25">
            {product.category}
          </span>
        </div>
      </div>
      <div className="space-y-4 p-6 transition duration-300 group-hover:-translate-y-1">
        <div className="transition duration-300 group-hover:scale-[1.02]">
          <h3 className="text-xl font-semibold text-slate-900">{product.name}</h3>
          <p className="mt-2 text-sm leading-7 text-slate-600">{product.short}</p>
        </div>
        <div className="grid gap-2 text-xs text-slate-500 sm:grid-cols-3">
          <span className="rounded-full bg-slate-100 px-3 py-1 text-center transition duration-300 group-hover:bg-[var(--surface-soft)]">
            {product.material}
          </span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-center transition duration-300 group-hover:bg-[var(--surface-soft)]">
            {product.finish}
          </span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-center transition duration-300 group-hover:bg-[var(--surface-soft)]">
            {product.sizeRange}
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-3 transition duration-300 group-hover:translate-y-[-1px]">
          {typeof onOpen === 'function' ? (
            <button
              type="button"
              onClick={() => onOpen(product)}
              className="rounded-full bg-[var(--blue)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-900"
            >
              View Details
            </button>
          ) : (
            <Link
              to={`/products/${product.slug}`}
              className="rounded-full bg-[var(--blue)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-900"
            >
              View Details
            </Link>
          )}
          <Link
            to={`/products/${product.slug}`}
            className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-[var(--blue)] hover:text-[var(--blue)]"
          >
            Open Page
          </Link>
          <button
            type="button"
            onClick={() => toggleFavorite(product.slug)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
              favorite
                ? 'border-[var(--gold)] bg-[var(--gold)]/10 text-slate-900'
                : 'border-slate-200 text-slate-600 hover:border-[var(--gold)]'
            }`}
          >
            {favorite ? 'Saved' : 'Favorite'}
          </button>
          <button
            type="button"
            onClick={() => toggleCompare(product.slug)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
              compared
                ? 'border-[var(--orange)] bg-[var(--orange)]/10 text-slate-900'
                : 'border-slate-200 text-slate-600 hover:border-[var(--orange)]'
            }`}
          >
            {compared ? 'Compared' : 'Compare'}
          </button>
        </div>
      </div>
    </motion.article>
  )
}
