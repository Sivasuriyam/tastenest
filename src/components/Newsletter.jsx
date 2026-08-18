import { useState } from 'react'
import Reveal from './Reveal'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSent(true)
    setEmail('')
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section className="newsletter-section" id="blog">
      <div className="newsletter-bg" />
      <div className="container newsletter-inner">
        <Reveal as="div">
          <span className="eyebrow center">News Letter</span>
          <h2>Subscribe Our Newsletter</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipiscing elit. Turpis egestas.</p>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Type here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">{sent ? 'Subscribed ✓' : 'Subscribe'}</button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
