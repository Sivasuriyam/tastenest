const SOCIALS = [
  { label: 'Facebook', path: 'M13.5 21v-7.5H16l.4-3H13.5V8.4c0-.9.3-1.5 1.6-1.5H16.5V4.3C16.2 4.3 15.2 4.2 14 4.2c-2.4 0-4 1.5-4 4.1V10.5H7.5v3H10V21h3.5Z' },
  { label: 'Twitter', path: 'M22 5.9c-.7.3-1.4.5-2.2.6.8-.5 1.4-1.2 1.7-2.2-.7.5-1.6.8-2.4 1a3.8 3.8 0 0 0-6.5 3.5A10.8 10.8 0 0 1 4.6 4.9a3.8 3.8 0 0 0 1.2 5.1c-.6 0-1.2-.2-1.7-.5v.1c0 1.9 1.3 3.4 3.1 3.8-.6.1-1.2.2-1.8 0 .5 1.5 2 2.7 3.7 2.7A7.6 7.6 0 0 1 3 17.6a10.8 10.8 0 0 0 5.8 1.7c7 0 10.8-5.8 10.8-10.8v-.5c.8-.5 1.4-1.2 1.9-2.1Z' },
  { label: 'Instagram', path: 'M12 8.4a3.6 3.6 0 1 0 0 7.2 3.6 3.6 0 0 0 0-7.2Zm0 5.9a2.3 2.3 0 1 1 0-4.6 2.3 2.3 0 0 1 0 4.6ZM17.5 4h-11A2.5 2.5 0 0 0 4 6.5v11A2.5 2.5 0 0 0 6.5 20h11a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 17.5 4Zm1.2 13.5c0 .7-.5 1.2-1.2 1.2h-11c-.7 0-1.2-.5-1.2-1.2v-11c0-.7.5-1.2 1.2-1.2h11c.7 0 1.2.5 1.2 1.2v11ZM16.7 7a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8Z' },
  { label: 'LinkedIn', path: 'M6.9 8.4H4.1V19h2.8V8.4ZM5.5 4.2a1.6 1.6 0 1 0 0 3.3 1.6 1.6 0 0 0 0-3.3ZM19.9 19h-2.8v-5.2c0-1.2 0-2.9-1.8-2.9s-2 1.4-2 2.8V19H10.5V8.4h2.7v1.4h.1c.4-.7 1.4-1.6 2.9-1.6 3 0 3.7 2 3.7 4.7V19Z' },
]

const LINK_COLS = [
  { title: 'User Link', links: ['About Us', 'Contact Us', 'Order Delivery', 'Payment & Tax', 'Terms of Service'] },
]

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <a href="#home" className="logo" style={{ marginBottom: 18, display: 'inline-flex' }}>
              <span className="logo-mark">T</span>
              TasteNest
            </a>
            <p>
              Proin eget tortor risus. Nulla porttitor accumsan tincidunt. Curabitur non nulla sit amet nisl
              tempus convallis quis ac lectus.
            </p>
            <div className="social-row">
              {SOCIALS.map((s) => (
                <a key={s.label} className="social-icon" href={`#${s.label.toLowerCase()}`} aria-label={s.label}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h4>Opening Restaurant</h4>
            <ul className="footer-links">
              <li>Sat – Mon: 09:00 – 10:00pm</li>
              <li>Tue – Wed: 09:00 – 10:00pm</li>
              <li>Friday: Closed</li>
            </ul>
          </div>

          {LINK_COLS.map((col) => (
            <div className="footer-col" key={col.title}>
              <h4>{col.title}</h4>
              <ul className="footer-links">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href={`#${l.toLowerCase().replace(/\s+/g, '-')}`}>{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="footer-col">
            <h4>Contact Us</h4>
            <p style={{ marginBottom: 8 }}>943 Country Club Area, LA 37567, London</p>
            <p style={{ marginBottom: 22 }}>+057 8154350</p>
            <form className="footer-subscribe" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} TasteNest. All rights reserved.</span>
          <span>
            Crafted with care by <a href="#home">TasteNest Studio</a>
          </span>
        </div>
      </div>
    </footer>
  )
}
