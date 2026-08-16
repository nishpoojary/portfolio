const ITEMS = ['React', 'Python', 'Django', 'FastAPI', 'Cybersecurity', 'Java', 'SQL', 'Git']

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS]
  return (
    <div className="marquee">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  )
}
