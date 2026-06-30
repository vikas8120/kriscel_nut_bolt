import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ProductCard } from '../components/ProductCard'
import { ProductModal } from '../components/ProductModal'
import { CompareDrawer } from '../components/CompareDrawer'
import { SectionHeading } from '../components/SectionHeading'
import { useCatalog } from '../context/useCatalog'
import {
  boltSizeGuide,
  catalogHighlights,
  finishOptions,
  materialOptions,
  productCategories,
  products,
  threadGuide,
} from '../data/products'
import { downloadBrochure } from '../utils/brochure'

export function Products() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const [material, setMaterial] = useState('All')
  const [finish, setFinish] = useState('All')
  const [activeProduct, setActiveProduct] = useState(null)
  const { recentlyViewed, favorites, compare, recordViewed } = useCatalog()

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesQuery =
        `${product.name} ${product.short} ${product.material} ${product.finish}`
          .toLowerCase()
          .includes(query.toLowerCase())
      const matchesCategory = category === 'All' || product.category === category
      const matchesMaterial = material === 'All' || product.material.includes(material)
      const matchesFinish = finish === 'All' || product.finish.includes(finish)
      return matchesQuery && matchesCategory && matchesMaterial && matchesFinish
    })
  }, [category, finish, material, query])

  const openProduct = (product) => {
    recordViewed(product.slug)
    setActiveProduct(product)
  }

  return (
    <div className="page-shell mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Products"
        title="Search, filter, compare, and specify."
        description="This page does the heavy lifting for local product discovery without sacrificing the premium visual tone."
      />

      <div className="mt-10 grid gap-6 xl:grid-cols-[0.68fr_0.32fr]">
        <div>
          <div className="grid gap-4 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_18px_50px_rgba(15,23,42,0.05)] md:grid-cols-2 xl:grid-cols-4">
            <label className="block md:col-span-2 xl:col-span-2">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
                Search
              </span>
              <input
                className="input"
                placeholder="Search by product, material, or finish"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
                Category
              </span>
              <select className="input" value={category} onChange={(event) => setCategory(event.target.value)}>
                {productCategories.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
                Material
              </span>
              <select className="input" value={material} onChange={(event) => setMaterial(event.target.value)}>
                <option value="All">All</option>
                {materialOptions.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
                Finish
              </span>
              <select className="input" value={finish} onChange={(event) => setFinish(event.target.value)}>
                <option value="All">All</option>
                {finishOptions.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} onOpen={openProduct} />
            ))}
          </div>
        </div>

        <aside className="space-y-4">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              Quick tools
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={downloadBrochure}
                className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-[var(--blue)]"
              >
                Download Catalog
              </button>
              <Link
                to="/contact"
                className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-[var(--blue)]"
              >
                Request Quote
              </Link>
            </div>
          </div>

          <ToolCard title="Bolt size finder demo">
            <div className="grid gap-2 text-sm text-slate-600">
              {boltSizeGuide.map((item) => (
                <div key={item.size} className="rounded-2xl bg-slate-50 px-4 py-3">
                  <strong className="block text-slate-900">{item.size}</strong>
                  <span>{item.use}</span>
                </div>
              ))}
            </div>
          </ToolCard>

          <ToolCard title="Thread guide">
            <div className="grid gap-2 text-sm text-slate-600">
              {threadGuide.map((item) => (
                <div key={item.heading} className="rounded-2xl bg-slate-50 px-4 py-3">
                  <strong className="block text-slate-900">{item.heading}</strong>
                  <span>{item.note}</span>
                </div>
              ))}
            </div>
          </ToolCard>

          <ToolCard title="Favorites and compare">
            <div className="grid gap-3 text-sm">
              <div className="rounded-2xl bg-slate-50 px-4 py-3">
                Favorites saved: <strong>{favorites.length}</strong>
              </div>
              <div className="rounded-2xl bg-slate-50 px-4 py-3">
                Compare list: <strong>{compare.length}</strong>
              </div>
              <div className="rounded-2xl bg-slate-50 px-4 py-3">
                Recently viewed: <strong>{recentlyViewed.length}</strong>
              </div>
            </div>
          </ToolCard>

          <ToolCard title="Material selector">
            <div className="grid gap-2 text-sm text-slate-600">
              {materialOptions.map((item) => (
                <div key={item} className="rounded-2xl bg-slate-50 px-4 py-3">
                  {item}
                </div>
              ))}
            </div>
          </ToolCard>

          <ToolCard title="Finish selector">
            <div className="flex flex-wrap gap-2">
              {finishOptions.map((item) => (
                <span key={item} className="rounded-full bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-600">
                  {item}
                </span>
              ))}
            </div>
          </ToolCard>

          <ToolCard title="Recently viewed">
            <div className="grid gap-2 text-sm text-slate-600">
              {recentlyViewed.length ? (
                recentlyViewed.map((slug) => {
                  const product = products.find((item) => item.slug === slug)
                  return (
                    <button
                      key={slug}
                      type="button"
                      className="rounded-2xl bg-slate-50 px-4 py-3 text-left text-slate-700"
                      onClick={() => product && openProduct(product)}
                    >
                      {product?.name ?? slug}
                    </button>
                  )
                })
              ) : (
                <p className="text-slate-500">Open a product to populate this list.</p>
              )}
            </div>
          </ToolCard>

          <ToolCard title="Catalog highlights">
            <ul className="space-y-3 text-sm leading-7 text-slate-600">
              {catalogHighlights.map((item) => (
                <li key={item} className="rounded-2xl bg-slate-50 px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </ToolCard>
        </aside>
      </div>

      <div className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
          Product modal and comparison
        </p>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
          Tap a card to inspect details, save favorites, or add items to the comparison drawer.
          Every interaction is local and fully functional.
        </p>
      </div>

      <CompareDrawer />
      <ProductModal product={activeProduct} onClose={() => setActiveProduct(null)} />
    </div>
  )
}

function ToolCard({ title, children }) {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">{title}</p>
      <div className="mt-4">{children}</div>
    </div>
  )
}
