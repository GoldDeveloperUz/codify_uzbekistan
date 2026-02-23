import { useEffect, useRef } from 'react'

export default function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const timeout = setTimeout(() => {
      const rect = el.getBoundingClientRect()
      if (rect.top > window.innerHeight * 0.95) {
        el.classList.add('will-animate')

        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              el.classList.add('in-view')
              observer.unobserve(el)
            }
          },
          { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
        )
        observer.observe(el)

        return () => observer.disconnect()
      }
    }, 100)

    return () => clearTimeout(timeout)
  }, [])

  return ref
}
