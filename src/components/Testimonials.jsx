import { useState } from 'react'
import Reveal from './Reveal'

const REVIEWS = [
  {
    text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tellus adipiscing condimentum donec blandit. Dignissim varius lectus duis."',
    name: 'John',
    role: 'Business Man',
    stars: 4,
  },
  {
    text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tellus adipiscing condimentum donec blandit. Dignissim varius lectus duis."',
    name: 'John',
    role: 'Business Man',
    stars: 4,
  },
  {
    text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tellus adipiscing condimentum donec blandit. Dignissim varius lectus duis."',
    name: 'John',
    role: 'Business Man',
    stars: 4,
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <section className="testimonials-section">
      <div className="container">
        <Reveal as="div" className="section-head">
          <span className="eyebrow center">Features</span>
          <h2>Why people choose us?</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipiscing elit. Facilisis eget cras semper sit amet.</p>
        </Reveal>

        <div className="testimonial-grid">
          {REVIEWS.map((r, i) => (
            <Reveal as="article" className="testimonial-card" delay={(i % 3) + 1} key={i}>
              <span className="quote-mark">&ldquo;</span>
              <p className="quote-text">{r.text}</p>
              <div className="stars">{'★'.repeat(r.stars)}{'☆'.repeat(5 - r.stars)}</div>
              <div className="testimonial-person">
                <img
                  className="avatar"
                  src={`https://i.pravatar.cc/80?img=${i + 12}`}
                  alt={r.name}
                />
                <div>
                  <div className="name">{r.name}</div>
                  <div className="role">{r.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="dots">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              className={`dot ${active === i ? 'active' : ''}`}
              onClick={() => setActive(i)}
              aria-label={`Show testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
