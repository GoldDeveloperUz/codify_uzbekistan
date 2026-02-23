import { useEffect, useRef } from 'react'

export default function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let observer
    const timeout = setTimeout(() => {
      const rect = el.getBoundingClientRect()
      if (rect.top > window.innerHeight * 0.95) {
        el.classList.add('will-animate')
        if (delay === 1) el.classList.add('delay-1')
        if (delay === 2) el.classList.add('delay-2')
        if (delay === 3) el.classList.add('delay-3')

        observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              el.classList.add('in-view')
              observer.unobserve(el)
            }
          },
          { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
        )
        observer.observe(el)
      }
    }, 100)

    return () => {
      clearTimeout(timeout)
      if (observer) observer.disconnect()
    }
  }, [delay])

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  )
}
