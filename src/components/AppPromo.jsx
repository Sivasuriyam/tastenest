import Reveal from './Reveal'

const CATEGORIES = [
  {
    label: 'Main',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
  },
  {
    label: 'Combos',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="4" y="4" width="7" height="7" rx="1.5" />
        <rect x="13" y="4" width="7" height="7" rx="1.5" />
        <rect x="4" y="13" width="7" height="7" rx="1.5" />
        <rect x="13" y="13" width="7" height="7" rx="1.5" />
      </svg>
    ),
  },
  {
    label: 'Sides',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M5 3v6a3 3 0 0 0 3 3v9" />
        <path d="M9 3v6" />
        <path d="M19 3c-2 0-3 2-3 4v4h3v9" />
      </svg>
    ),
  },
  {
    label: 'Drinks',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M6 3h12l-1.2 15a2 2 0 0 1-2 1.8H9.2a2 2 0 0 1-2-1.8L6 3Z" />
        <path d="M5 8h14" />
      </svg>
    ),
  },
]

const POPULAR = [
  { name: 'Jollof Rice with 1/4 Chicken & Plantain', price: '$15', img: '/images/menu-burger.jpg' },
  { name: 'Half BBQ Chicken', price: '$12', img: '/images/menu-beet-salad.jpg' },
]

export default function AppPromo() {
  return (
    <section className="app-section" id="order">
      <div className="container app-inner">
        <Reveal as="div" className="app-left">
          <span className="eyebrow">Mobile App</span>
          <h2>Simple Way To Order Your Foods</h2>
          <div className="store-btns">
            <a className="store-btn" href="#google-play">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 2.6v18.8c0 .3.2.5.4.6l10.6-10L3.4 2c-.2.1-.4.3-.4.6Z" />
                <path d="M17.6 9.1 14.8 12l2.8 2.9 3.4-2c.6-.3.6-1.1 0-1.5l-3.4-2Z" />
              </svg>
              <span>
                <span className="store-sub">Get it on</span>
                <br />
                <span className="store-main">Google Play</span>
              </span>
            </a>
            <a className="store-btn" href="#app-store">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.4 1.9c.1 1-.3 2-1 2.7-.6.7-1.7 1.3-2.7 1.2-.1-1 .4-2 1-2.7.7-.7 1.8-1.2 2.7-1.2ZM19.9 17c-.5 1.1-.8 1.6-1.4 2.6-.9 1.4-2.2 3.1-3.7 3.1-1.4 0-1.7-.9-3.6-.9-1.9 0-2.3.9-3.6.9-1.5 0-2.7-1.6-3.6-3-2.4-3.7-2.7-8.1-1.2-10.4 1.1-1.7 2.8-2.7 4.4-2.7 1.6 0 2.6 1 3.9 1 1.3 0 2.1-1 3.9-1 1.4 0 2.9.8 3.9 2.1-3.5 1.9-2.9 6.9 1 8.3Z" />
              </svg>
              <span>
                <span className="store-sub">Get for</span>
                <br />
                <span className="store-main">Apple Store</span>
              </span>
            </a>
          </div>
        </Reveal>

        <Reveal as="div" className="app-right" delay={1}>
          {/* Phone 1 — main ordering screen */}
          <div className="phone phone-1">
            <div className="screen screen-main">
              <div className="screen-topbar">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2">
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <img className="screen-avatar" src="/images/chef-ok-sign.jpg" alt="" />
              </div>

              <h4 className="screen-heading">
                Good Chicken.
                <br />
                Fast Delivery.
              </h4>

              <div className="screen-cats">
                {CATEGORIES.map((c) => (
                  <div className="screen-cat" key={c.label}>
                    <span className="screen-cat-icon">{c.icon}</span>
                    <span>{c.label}</span>
                  </div>
                ))}
              </div>

              <div className="screen-popular-label">Popular</div>

              <div className="screen-food-row">
                {POPULAR.map((p) => (
                  <div className="screen-food-card" key={p.name}>
                    <img src={p.img} alt={p.name} />
                    <div className="screen-food-name">{p.name}</div>
                    <div className="screen-food-price">{p.price}</div>
                  </div>
                ))}
              </div>

              <div className="screen-bottombar">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.8">
                  <path d="M12 20s-7-4.4-9.5-8.8C.7 8 2 4.5 5.5 4a4.9 4.9 0 0 1 6.5 2 4.9 4.9 0 0 1 6.5-2c3.5.5 4.8 4 3 7.2C19 15.6 12 20 12 20Z" />
                </svg>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.8">
                  <circle cx="11" cy="11" r="7" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.8">
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="18" cy="21" r="1" />
                  <path d="M2 3h2l2.4 12.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L20 7H6" />
                </svg>
              </div>
            </div>
          </div>

          {/* Phone 2 — food detail screen */}
          <div className="phone phone-2">
            <div className="screen screen-detail">
              <div className="detail-topbar">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2">
                  <path d="m15 18-6-6 6-6" />
                </svg>
                <span>Food Details</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--accent)" stroke="var(--accent)">
                  <path d="M12 20.5s-7.4-4.6-9.8-9C.6 8 1.9 4 5.9 3.4a5.4 5.4 0 0 1 6.1 2.4 5.4 5.4 0 0 1 6.1-2.4c4 .6 5.3 4.6 3.7 8.1-2.4 4.4-9.8 9-9.8 9Z" />
                </svg>
              </div>

              <div className="detail-hero">
                <img src="/images/menu-pasta.jpg" alt="Jollof rice with chicken and plantain" />
              </div>

              <div className="detail-body">
                <h5>
                  Jollof Rice with
                  <br />
                  1/4 Chicken &amp; Plantain
                </h5>
                <div className="detail-stars">★★★★★ <span>5 out of 5</span></div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <div className="detail-footer">
                <div className="qty-stepper">
                  <button aria-label="Decrease quantity">–</button>
                  <span>1</span>
                  <button aria-label="Increase quantity">+</button>
                </div>
                <button className="add-cart-btn">
                  Add to Cart <span>$15</span>
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
