import { useEffect, useRef, useState, type ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  className?: string
}

// Fades and slides its content up the first time it scrolls into view.
// With "reduce motion" turned on, the content is simply shown (motion-safe: only).
export default function Reveal({ children, className = '' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect() // animate once only
        }
      },
      // Trigger as soon as any part is 10% above the bottom of the screen. (A ratio threshold
      // could never be reached by a very tall section on a short screen, leaving it hidden.)
      { rootMargin: '0px 0px -10% 0px', threshold: 0 },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`motion-safe:transition-[opacity,translate] motion-safe:duration-700 motion-safe:ease-out ${
        visible ? '' : 'motion-safe:translate-y-8 motion-safe:opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  )
}
