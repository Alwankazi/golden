import { useState, useEffect } from 'react'
import './App.css'

import hero1 from './assets/hero-img/anthony-fomin-h7_SyoBhHF0-unsplash.jpg'
import hero2 from './assets/hero-img/christina-dahl-XBTaVeWCQ-s-unsplash.jpg'
import hero3 from './assets/hero-img/jessie-daniella-aiNU4cA4UzQ-unsplash.jpg'
import hero4 from './assets/hero-img/lizzie-BqYoSL76lGo-unsplash.jpg'

const heroSlides = [
  { 
    title: "Sculptural Rose Artistry", 
    subtitle: "Bespoke arrangements that transform space and mood.",
    image: hero1
  },
  { 
    title: "The Art of the Bouquet", 
    subtitle: "Hand-tied masterpieces from the world's finest growers.",
    image: hero2
  },
  { 
    title: "Infinite Rose Collection", 
    subtitle: "Real roses preserved to last for years in our signature cloche.",
    image: hero3
  },
  { 
    title: "Timeless Floral Design", 
    subtitle: "Curated elegance for life's most meaningful moments.",
    image: hero4
  }
]

const testimonials = [
  { text: "The most stunning roses I've ever received. They arrived under a glass dome, packaged like royalty.", author: "Victoria H.", rating: 5 },
  { text: "Three years later, my roses still look fresh. The quality is unparalleled.", author: "Elizabeth R.", rating: 5 },
  { text: "Perfect for corporate gifting. Our clients were thoroughly impressed.", author: "Jonathan M.", rating: 5 },
  { text: "The infinite roses are truly magical. A statement piece in my home.", author: "Sarah L.", rating: 5 }
]

const products = [
  { name: "Classic Red", price: "$195", desc: "24 premium Ecuadorian roses in signature wrap", image: "/images/product_classic_red_1778579071178.png" },
  { name: "Infinite White", price: "$295", desc: "Preserved roses that last for years", image: "/images/product_infinite_white_1778579086264.png" },
  { name: "Sculptural Mixed", price: "$245", desc: "Architectural rose arrangement", image: "/images/product_sculptural_mixed_1778579101127.png" },
  { name: "The Single Rose", price: "$85", desc: "Elegant long-stemmed statement piece", image: "/images/product_handheld_rose_1778579149365.png" }
]

const trendingProducts = [
  { name: "Royal Bouquet", price: "$450", image: "/images/rose_hero_bouquet_luxury_1778579035653.png" },
  { name: "Gallery Cloche", price: "$350", image: "/images/rose_hero_infinite_gold_1778579053174.png" },
  { name: "Velvet Sculpt", price: "$295", image: "/images/rose_hero_sculptural_1778579019983.png" },
  { name: "Infinite Box", price: "$385", image: "/images/product_infinite_white_1778579086264.png" }
]

const blogPosts = [
  { title: "The Anatomy of a Rose", date: "December 2024", image: "/images/blog_macro_petals_1778579165508.png" },
  { title: "In the Studio: Curating Form", date: "November 2024", image: "/images/blog_studio_process_1778579181255.png" },
  { title: "Luxury Corporate Presence", date: "October 2024", image: "/images/corporate_rose_gift_1778579217711.png" }
]

const faqs = [
  { q: "How long do Infinite Roses last?", a: "Our Infinite Roses® can last for years without any water or special care. They maintain their beauty indefinitely with proper display." },
  { q: "Do you offer same-day delivery?", a: "Yes, we offer same-day delivery for orders placed before 2pm. Our flagship store on Madison Avenue also offers in-store pickup." },
  { q: "Can I customize my order?", a: "Absolutely. We offer bespoke arrangements and can customize colors, presentation, and packaging to your specifications." },
  { q: "What makes Ecuadorian roses special?", a: "Ecuadorian roses are grown at high altitude in optimal conditions, resulting in larger blooms, longer stems, and exceptional petal texture." }
]

const trustBadges = [
  { 
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 3H1v13h15V3zM16 8h7l-3 8h-4V8zM3 16a2 2 0 100 4 2 2 0 000-4zM18 16a2 2 0 100 4 2 2 0 000-4z" />
      </svg>
    ), 
    text: "Global Concierge Shipping" 
  },
  { 
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ), 
    text: "Ecuadorian Premium Grade" 
  },
  { 
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 8V20a2 2 0 01-2 2H5a2 2 0 01-2-2V8M1 5l11-4 11 4M12 1v22M7 15h10" />
      </svg>
    ), 
    text: "Signature Gallery Packaging" 
  },
  { 
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ), 
    text: "Artisan Care Guarantee" 
  }
]

function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: "Classic Roses", href: "#products" },
    { label: "Infinite Roses", href: "#products" },
    { label: "Fill Your Vase", href: "#products" },
    { label: "Gift Cards", href: "#products" },
    { label: "Contact", href: "#contact" }
  ]

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__container container">
        <a href="#" className="nav__logo">
          <span className="nav__logo-text">Golden Bouquet</span>
          <span className="nav__logo-accent">®</span>
        </a>
        <ul className={`nav__links ${menuOpen ? 'nav__links--open' : ''}`}>
          {navLinks.map(link => (
            <li key={link.label}><a href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a></li>
          ))}
        </ul>
        <button className="nav__menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [offset, setOffset] = useState(0)

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    
    const handleScroll = () => setOffset(window.scrollY)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      })
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      clearInterval(timer)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <section className="hero">
      <div className="hero__slider">
        {heroSlides.map((slide, i) => (
          <div key={i} className={`hero__slide ${i === currentSlide ? 'hero__slide--active' : ''}`}>
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="hero__bg" 
              style={{ transform: `scale(1.1) translateY(${offset * 0.4}px)` }}
            />
            <div className="hero__overlay"></div>
            <div className="hero__content">
              <div className="container">
                <div className="hero__content-inner">
                  <span className="section-label hero__label fade-in-up stagger-1">Signature Collection</span>
                  <h1 className="fade-in-up stagger-2">{slide.title}</h1>
                  <p className="fade-in-up stagger-3">{slide.subtitle}</p>
                  <a href="#products" className="hero__cta fade-in-up stagger-4">
                    <span className="hero__cta-text">Explore Collection</span>
                    <span className="hero__cta-shimmer"></span>
                  </a>
                  
                  <div className="hero__usps fade-in-up stagger-5">
                    <div className="hero__usp">
                      <span className="hero__usp-dot"></span>
                      <span>Ecuadorian Premium</span>
                    </div>
                    <div className="hero__usp">
                      <span className="hero__usp-dot"></span>
                      <span>Real Infinite Roses</span>
                    </div>
                    <div className="hero__usp">
                      <span className="hero__usp-dot"></span>
                      <span>Concierge Shipping</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="hero__dots">
        {heroSlides.map((_, i) => (
          <button 
            key={i} 
            className={`hero__dot ${i === currentSlide ? 'hero__dot--active' : ''}`}
            onClick={() => setCurrentSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
      
      {/* Decorative Floating Petals */}
      <div className="hero__petals">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i} 
            className={`hero__petal hero__petal--${i + 1}`}
            style={{ 
              transform: `translate(${mousePos.x * (i + 1) * 0.2}px, ${mousePos.y * (i + 1) * 0.2}px) rotate(${mousePos.x * 2}deg)`
            }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12,2C12,2 4,10 4,16C4,20.42 7.58,24 12,24C16.42,24 20,20.42 20,16C20,10 12,2 12,2Z" />
            </svg>
          </div>
        ))}
      </div>
    </section>
  )
}

function SocialProof() {
  return (
    <section className="social-proof">
      <div className="social-proof__container container">
        <div className="social-proof__stars">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="social-proof__star">★</span>
          ))}
          <span className="social-proof__rating">5.0</span>
        </div>
        <p className="social-proof__text">Trusted by discerning clients worldwide</p>
      </div>
    </section>
  )
}

function Testimonials() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    const el = document.getElementById('testimonials')
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="testimonials" className={`testimonials ${visible ? 'visible' : ''}`}>
      <div className="container">
        <h2 className="testimonials__title fade-in-up">What Our Clients Say</h2>
        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <blockquote key={i} className={`testimonial fade-in-up stagger-${i + 1}`}>
              <div className="testimonial__stars">
                {[...Array(t.rating)].map((_, j) => <span key={j}>★</span>)}
              </div>
              <p className="testimonial__text">"{t.text}"</p>
              <cite className="testimonial__author">{t.author}</cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

function Products() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setVisible(true) }, { threshold: 0.1 })
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
                <span className="product-card__price">{p.price}</span>
              </div>
              <button className="product-card__btn">Quick Buy</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Lifestyle() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    const el = document.getElementById('lifestyle')
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="lifestyle" className={`lifestyle ${visible ? 'visible' : ''}`}>
      <div className="container">
        <div className="lifestyle__grid">
          <div className="lifestyle__image fade-in">
            <img src="/images/lifestyle_rose_interior_1778579122104.png" alt="Luxury rose arrangement in interior" />
            <div className="lifestyle__badge">Signature Presence</div>
          </div>
          <div className="lifestyle__content">
            <span className="section-label">Elevate Your Space</span>
            <h2>Luxury Roses for Your Home</h2>
            <p>
              Transform any room with our sculptural arrangements. Each piece is crafted 
              to become a focal point, a conversation starter, a lasting work of art.
            </p>
            <p>
              From glass dome presentations to signature black boxes with gold branding, 
              every detail is designed to impress.
            </p>
            <a href="#products" className="lifestyle__cta">View Collection</a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter__content">
          <span className="section-label">Stay Connected</span>
          <h2>Join Our World</h2>
          <p>Be the first to discover new collections, exclusive offers, and styling inspiration.</p>
          {submitted ? (
            <p className="newsletter__success">Thank you for subscribing.</p>
          ) : (
            <form className="newsletter__form" onSubmit={handleSubmit}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
              <button type="submit">Subscribe</button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Trending() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setVisible(true) }, { threshold: 0.1 })
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
                <span>{p.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Blog() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    const el = document.getElementById('blog')
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="blog" className={`blog ${visible ? 'visible' : ''}`}>
      <div className="container">
        <header className="blog__header">
          <span className="section-label">Stories</span>
          <h2>Petals & Press</h2>
        </header>
        <div className="blog__grid">
          {blogPosts.map((post, i) => (
            <article key={post.title} className={`blog__post fade-in-up stagger-${i + 1}`}>
              <img src={post.image} alt={post.title} loading="lazy" />
              <span className="blog__date">{post.date}</span>
              <h4>{post.title}</h4>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    const el = document.getElementById('faq')
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="faq" className={`faq ${visible ? 'visible' : ''}`}>
      <div className="container">
        <header className="faq__header">
          <span className="section-label">Help</span>
          <h2>Frequently Asked Questions</h2>
        </header>
        <div className="faq__list">
          {faqs.map((item, i) => (
            <div key={i} className={`faq__item ${openIndex === i ? 'faq__item--open' : ''}`}>
              <button className="faq__question" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
                {item.q}
                <span className="faq__icon">{openIndex === i ? '−' : '+'}</span>
              </button>
              <div className="faq__answer">{item.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TrustBadges() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    const el = document.getElementById('trust-badges')
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="trust-badges" className={`trust-badges ${visible ? 'visible' : ''}`}>
      <div className="container">
        <div className="trust-badges__grid">
          {trustBadges.map((badge, i) => (
            <div key={i} className={`trust-badge fade-in-up stagger-${i + 1}`}>
              <div className="trust-badge__icon-container">
                {badge.icon}
              </div>
              <span className="trust-badge__text">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  const footerLinks = {
    shop: [
      { label: "Classic Roses", href: "#" },
      { label: "Infinite Roses", href: "#" },
      { label: "Fill Your Vase", href: "#" },
      { label: "Gift Cards", href: "#" }
    ],
    about: [
      { label: "What We Do", href: "#" },
      { label: "Our Story", href: "#" },
      { label: "Flagship Store", href: "#" },
      { label: "Corporate Gifting", href: "#" }
    ],
    support: [
      { label: "Rose Care Guide", href: "#" },
      { label: "FAQs", href: "#faq" },
      { label: "Shipping Info", href: "#" },
      { label: "Returns", href: "#" }
    ],
    contact: [
      { label: "Contact Us", href: "#contact" },
      { label: "WhatsApp", href: "#" },
      { label: "hello@onlyroses.com", href: "mailto:hello@onlyroses.com" }
    ]
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__logo">
              <span>Golden Bouquet</span><sup>®</sup>
            </div>
            <p>The world's most sculptural roses, elegantly curated for life's meaningful moments.</p>
            <div className="footer__social">
              <a href="#" aria-label="Instagram">IG</a>
              <a href="#" aria-label="Facebook">FB</a>
              <a href="#" aria-label="Pinterest">PI</a>
            </div>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="footer__col">
              <h4>{title.charAt(0).toUpperCase() + title.slice(1)}</h4>
              <ul>
                {links.map(link => (
                  <li key={link.label}><a href={link.href}>{link.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Golden Bouquet. All rights reserved.</p>
          <div className="footer__legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function WhatsAppFloat() {
  return (
    <a href="https://wa.me/1234567890" className="whatsapp-float" aria-label="Contact via WhatsApp">
      💬
    </a>
  )
}

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <SocialProof />
        <Testimonials />
        <Products />
        <Lifestyle />
        <Newsletter />
        <Trending />
        <Blog />
        <FAQ />
        <TrustBadges />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}

export default App