import Reveal from './Reveal'

const FEATURES = [
  {
    title: 'Menu For Every Taste',
    text: 'Hella biscuit amet salvia carles quinoa umami street art.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 10.5 12 4l9 6.5" />
        <path d="M5 9.5V20h14V9.5" />
        <path d="M9 20v-6h6v6" />
      </svg>
    ),
  },
  {
    title: 'Always Quality Beans',
    text: 'Hella biscuit amet salvia carles quinoa umami street art.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 21c4-2.5 7-6 7-10.5A7 7 0 0 0 5 10.5C5 15 8 18.5 12 21Z" />
        <path d="M12 14c1.5 0 3-1.2 3-3.4C15 8.6 12 6 12 6s-3 2.6-3 4.6c0 2.2 1.5 3.4 3 3.4Z" />
      </svg>
    ),
  },
  {
    title: 'Experienced Barista',
    text: 'Hella biscuit amet salvia carles quinoa umami street art.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="8" r="3.4" />
        <path d="M5.5 20c1.1-3.6 3.7-5.5 6.5-5.5s5.4 1.9 6.5 5.5" />
      </svg>
    ),
  },
]

export default function Features() {
  return (
    <section className="features-section">
      <div className="container">
        <Reveal as="div" className="section-head">
          <span className="eyebrow center">Features</span>
          <h2>Why people choose us?</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipiscing elit. Facilisis eget cras semper sit amet.</p>
        </Reveal>

        <div className="features-grid">
          {FEATURES.map((f, i) => (
            <Reveal as="div" className="feature-card" delay={(i % 3) + 1} key={f.title}>
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
