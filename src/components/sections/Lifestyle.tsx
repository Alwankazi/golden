import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/sections/lifestyle.css'

export default function Lifestyle() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true)
    }, { threshold: 0.1 })
    const el = document.getElementById('lifestyle')
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="lifestyle" className={`lifestyle ${visible ? 'visible' : ''}`}>
      <div className="container">
        <div className="lifestyle__grid">
          <div className="lifestyle__image fade-in">
            <img src="/images/floral/tulip-harmony.png" alt="Luxury rose arrangement in interior" />
            <div className="lifestyle__badge">Signature Presence</div>
          </div>
          <div className="lifestyle__content">
            <span className="section-label">Elevate Your Space</span>
            <h2>Luxury Roses for Your Home</h2>
            <p>
              Transform any room with our sculptural arrangements. Each piece is crafted to become a focal point, a
              conversation starter, a lasting work of art.
            </p>
            <p>
              From glass dome presentations to signature black boxes with gold branding, every detail is designed to
              impress.
            </p>
            <Link to="/floral-essentials" className="lifestyle__cta">
              View Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
