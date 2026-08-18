import { useEffect, useState } from 'react'

const LINKS = ['Home', 'Pages', 'Menu', 'Order', 'Blog', 'Contact', 'Shop']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#home" className="logo">
          <span className="logo-mark">T</span>
          TasteNest
        </a>

        <nav>
          <ul className="nav-links">
            {LINKS.map((link, i) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className={i === 0 ? 'active' : ''}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-cta">
          <button className="btn btn-primary">Reservation</button>
          <button className="burger" onClick={() => setOpen(true)} aria-label="Open menu">
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-nav ${open ? 'open' : ''}`}>
        <button className="close-btn" onClick={() => setOpen(false)} aria-label="Close menu">
          ✕
        </button>
        {LINKS.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>
            {link}
          </a>
        ))}
        <button className="btn btn-primary" onClick={() => setOpen(false)}>
          Reservation
        </button>
      </div>
    </header>
  )
}
