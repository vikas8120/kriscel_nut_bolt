import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

export function useGSAP(effect) {
  const scopeRef = useRef(null)

  useLayoutEffect(() => {
    if (!scopeRef.current) return undefined

    const ctx = gsap.context(() => {
      effect({ gsap, scope: scopeRef.current })
    }, scopeRef)

    return () => ctx.revert()
  }, [effect])

  return scopeRef
}
