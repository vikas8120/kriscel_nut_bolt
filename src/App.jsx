import { lazy, Suspense, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { CatalogProvider } from './context/CatalogContext.jsx'
import { useLenis } from './hooks/useLenis'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
const Home = lazy(() => import('./pages/Home').then((module) => ({ default: module.Home })))
const Products = lazy(() => import('./pages/Products').then((module) => ({ default: module.Products })))
const ProductDetail = lazy(() =>
  import('./pages/ProductDetail').then((module) => ({ default: module.ProductDetail })),
)
const Manufacturing = lazy(() =>
  import('./pages/Manufacturing').then((module) => ({ default: module.Manufacturing })),
)
const Industries = lazy(() =>
  import('./pages/Industries').then((module) => ({ default: module.Industries })),
)
const Quality = lazy(() => import('./pages/Quality').then((module) => ({ default: module.Quality })))
const Infrastructure = lazy(() =>
  import('./pages/Infrastructure').then((module) => ({ default: module.Infrastructure })),
)
const About = lazy(() => import('./pages/About').then((module) => ({ default: module.About })))
const Contact = lazy(() => import('./pages/Contact').then((module) => ({ default: module.Contact })))
const NotFound = lazy(() => import('./pages/NotFound').then((module) => ({ default: module.NotFound })))

function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return null
}

function AppRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={null}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/manufacturing" element={<Manufacturing />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  )
}

function AppShell() {
  useLenis()

  return (
    <BrowserRouter>
      <CatalogProvider>
        <ScrollToTop />
        <div className="min-h-screen bg-[var(--bg)] text-slate-900">
          <Navbar />
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="mx-auto w-full max-w-full"
          >
            <AppRoutes />
          </motion.main>
          <Footer />
        </div>
      </CatalogProvider>
    </BrowserRouter>
  )
}

export default AppShell
