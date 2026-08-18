import Reveal from './Reveal'

const COPY = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis egestas
maecenas pharetra convallis posuere morbi leo urna molestie.`

export default function About() {
  return (
    <section className="about-section" id="pages">
      <div className="container">
        <div className="story-row">
          <Reveal as="div" className="story-text">
            <span className="eyebrow">About Us</span>
            <h2>We Invite You to Visit Our Coffee House</h2>
            <p>{COPY}</p>
            <button className="btn btn-primary">Read More</button>
          </Reveal>
          <Reveal as="div" className="story-media" delay={1}>
            <img
              src="/images/chef-plating-smile.jpg"
              alt="Chef plating a dish in the kitchen"
            />
          </Reveal>
        </div>

        <div className="story-row reverse">
          <Reveal as="div" className="story-media">
            <img
              src="/images/chef-plating-tweezers.jpg"
              alt="Chef plating a dish with precision"
            />
          </Reveal>
          <Reveal as="div" className="story-text" delay={1}>
            <span className="eyebrow">Coffee Menu</span>
            <h2>Quality Kava Beans</h2>
            <p>{COPY}</p>
            <button className="btn btn-primary">Read More</button>
          </Reveal>
        </div>

        <div className="story-row">
          <Reveal as="div" className="story-text">
            <span className="eyebrow">Our Team</span>
            <h2>Use the Tips &amp; Recipes of Our Barista</h2>
            <p>{COPY}</p>
            <button className="btn btn-primary">Read More</button>
          </Reveal>
          <Reveal as="div" className="story-media" delay={1}>
            <img
              src="/images/chef-ok-sign.jpg"
              alt="Chef giving an OK sign in the kitchen"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
