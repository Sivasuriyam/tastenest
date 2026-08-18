import { useEffect, useRef } from 'react'

/**
 * Adds an 'in-view' class to the element once it scrolls into the viewport.
 * Pair with the `.reveal` CSS class for a fade + rise-in animation.
 */
export default function useReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('in-view')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in-view')
          observer.unobserve(el)
        }
      },
      { threshold: 0.15, ...options }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}
