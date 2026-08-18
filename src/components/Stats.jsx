import { useEffect, useRef, useState } from 'react'

const STATS = [
  { value: 1287, suffix: '+', label: 'Visitors Daily' },
  { value: 578, suffix: '+', label: 'Deliveries Monthly' },
  { value: 1440, suffix: '+', label: 'Positive Feedback' },
  { value: 40, suffix: '+', label: 'Awards and Honors' },
]

function useCountUp(target, start) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) return
    let frame
    const duration = 1400
    const t0 = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - t0) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(target * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [start, target])

  return value
}

function Stat({ value, suffix, label }) {
  const ref = useRef(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const count = useCountUp(value, started)

  return (
    <div className="stat" ref={ref}>
      <span className="num">
        {count}
        {suffix}
      </span>
      <span className="label">{label}</span>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {STATS.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
