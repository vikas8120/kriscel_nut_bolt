import { useMemo } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { CatalogContext } from './catalogContext'

function toggleItem(list, item) {
  return list.includes(item) ? list.filter((entry) => entry !== item) : [...list, item]
}

export function CatalogProvider({ children }) {
  const [favorites, setFavorites] = useLocalStorage('kriscel-favorites', [])
  const [compare, setCompare] = useLocalStorage('kriscel-compare', [])
  const [recentlyViewed, setRecentlyViewed] = useLocalStorage(
    'kriscel-recently-viewed',
    [],
  )
  const [quoteRequests, setQuoteRequests] = useLocalStorage('kriscel-quotes', [])

  const value = useMemo(
    () => ({
      favorites,
      compare,
      recentlyViewed,
      quoteRequests,
      toggleFavorite: (slug) => setFavorites((current) => toggleItem(current, slug)),
      toggleCompare: (slug) => setCompare((current) => toggleItem(current, slug)),
      clearCompare: () => setCompare([]),
      clearFavorites: () => setFavorites([]),
      recordViewed: (slug) =>
        setRecentlyViewed((current) => [slug, ...current.filter((item) => item !== slug)].slice(0, 5)),
      saveQuoteRequest: (entry) =>
        setQuoteRequests((current) => [{ ...entry, id: crypto.randomUUID() }, ...current]),
    }),
    [compare, favorites, quoteRequests, recentlyViewed, setCompare, setFavorites, setQuoteRequests, setRecentlyViewed],
  )

  return <CatalogContext.Provider value={value}>{children}</CatalogContext.Provider>
}
