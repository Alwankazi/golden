import { useEffect, useState } from 'react'
import { trendingProducts } from '../../data/homeData'
import '../../styles/sections/trending.css'

export default function Trending() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true)
    }, { threshold: 0.1 })
    const el = document.getElementById('trending')
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="trending" className={`trending ${visible ? 'visible' : ''}`}>
      <div className="container">
        <header className="trending__header">
          <span className="section-label">Most Popular</span>
          <h2>Trending Now</h2>
        </header>
        <div className="trending__grid">
          {trendingProducts.map((p, i) => (
            <div key={p.name} className={`trending__item fade-in-up stagger-${i + 1}`}>
              <img src={p.image} alt={p.name} loading="lazy" />
              <div className="trending__info">
                <h4>{p.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
