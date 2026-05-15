import { useEffect, useState } from 'react'
import { products } from '../../data/homeData'
import '../../styles/sections/products.css'

export default function Products() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true)
    }, { threshold: 0.1 })
    const el = document.getElementById('products')
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="products" className={`products ${visible ? 'visible' : ''}`}>
      <div className="container">
        <header className="products__header">
          <span className="section-label">Our Collection</span>
          <h2>Curated Roses</h2>
        </header>
        <div className="products__grid">
          {products.map((p, i) => (
            <article key={p.name} className={`product-card fade-in-up stagger-${i + 1}`}>
              <div className="product-card__image">
                <img src={p.image} alt={p.name} loading="lazy" />
                <div className="product-card__badge">New</div>
              </div>
              <div className="product-card__info">
                <h3>{p.name}</h3>
                <p className="product-card__desc">{p.desc}</p>
              </div>
              <button className="product-card__btn">Quick Buy</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
