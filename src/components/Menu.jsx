import Reveal from './Reveal'

const DISHES = [
  {
    name: 'Penne Arrabbiata',
    time: '15 – 20 Minutes',
    serves: 1,
    price: '$12.50',
    old: '$13.20',
    img: '/images/menu-pasta.jpg',
  },
  {
    name: 'Classic Beef Burger',
    time: '15 – 20 Minutes',
    serves: 1,
    price: '$12.50',
    old: '$13.20',
    img: '/images/menu-burger.jpg',
  },
  {
    name: 'Roasted Beet & Chickpea Bowl',
    time: '20 – 25 Minutes',
    serves: 1,
    price: '$12.50',
    old: '$13.20',
    img: '/images/menu-beet-salad.jpg',
  },
]

export default function Menu() {
  return (
    <section className="menu-section" id="foods">
      <div className="container">
        <Reveal as="div" className="section-head">
          <span className="eyebrow center">Menu</span>
          <h2>Explore Our Foods</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipiscing elit. Facilisis eget cras semper sit amet.</p>
        </Reveal>

        <div className="menu-grid">
          {DISHES.map((d, i) => (
            <Reveal as="article" className="menu-card" delay={(i % 3) + 1} key={d.name}>
              <div className="menu-media">
                <img src={d.img} alt={d.name} />
              </div>
              <div className="menu-body">
                <h3>{d.name}</h3>
                <div className="menu-meta">
                  Time: {d.time} | Serves: {d.serves}
                </div>
                <div className="menu-footer">
                  <span className="price">
                    {d.price}
                    <span className="old">{d.old}</span>
                  </span>
                  <button className="menu-order-btn">Order Now</button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
