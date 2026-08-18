import Reveal from './Reveal'

const HOURS = [
  { day: 'Sunday – Tuesday', time: '09:00 AM – 10:00 PM' },
  { day: 'Friday – Saturday', time: '09:00 AM – 10:00 PM' },
]

export default function WorkingHours() {
  return (
    <section className="hours-section" id="menu">
      <div className="hours-bg" />
      <div className="container hours-inner">
        <Reveal as="div" className="hours-left">
          <span className="eyebrow">Reservation</span>
          <h2>Working Hours</h2>
          <div className="hours-left-btns">
            <button className="btn btn-primary">Book a Table</button>
            <button className="btn btn-ghost">Contact Us</button>
          </div>
        </Reveal>

        <Reveal as="div" className="hours-card" delay={1}>
          {HOURS.map((h) => (
            <div className="hours-row" key={h.day}>
              <span className="day">{h.day}</span>
              <span className="time">{h.time}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
