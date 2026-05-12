import { useState, useEffect } from 'react'
import './App.css'

import goldenLogo from './assets/golden-logo.png'
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

const featuredArrangements = [
  {
    category: "Bestseller",
    name: "Classic Crimson Luxe",
    image: "/images/product_classic_red_1778579071178.png"
  },
  {
    category: "New Trends",
    name: "Sculptural Mixed Flora",
    image: "/images/rose_hero_sculptural_1778579019983.png"
  },
  {
    category: "New Products",
    name: "Golden Infinite Bloom",
    image: "/images/rose_hero_infinite_gold_1778579053174.png"
  }
]

const occasions = [
  { name: "Graduation", image: "/images/blog_studio_process_1778579181255.png" },
  { name: "Birthday", image: "/images/rose_hero_bouquet_luxury_1778579035653.png" },
  { name: "New Born", image: "/images/occasion_newborn.png" },
  { name: "Valentine", image: "/images/product_classic_red_1778579071178.png" }
]

const giftIdeas = [
  { name: "Hand Made Bouquet", price: "$120", image: "/images/rose_hero_bouquet_luxury_1778579035653.png" },
  { name: "Special Chocolates", price: "$45", image: "/images/corporate_rose_gift_1778579217711.png" },
  { name: "Flowers With Vase", price: "$180", image: "/images/lifestyle_rose_interior_1778579122104.png" },
  { name: "Customized Cakes", price: "$95", image: "/images/rose_hero_sculptural_1778579019983.png" },
  { name: "Luxury Candles", price: "$65", image: "/images/product_infinite_white_1778579086264.png" },
  { name: "Gift Card", price: "$50+", image: "/images/rose_hero_infinite_gold_1778579053174.png" }
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
        <ul className={`nav__links nav__links--left ${menuOpen ? 'nav__links--open' : ''}`}>
          {navLinks.slice(0, 3).map(link => (
            <li key={link.label}><a href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a></li>
          ))}
        </ul>

        <a href="#" className="nav__logo">
          <img src={goldenLogo} alt="Golden Bouquet" className="nav__logo-img" />
        </a>

        <ul className={`nav__links nav__links--right ${menuOpen ? 'nav__links--open' : ''}`}>
          {navLinks.slice(3).map(link => (
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

function FeaturedArrangements() {
  const [activeSlide, setActiveSlide] = useState(0)

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % featuredArrangements.length)
  }

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + featuredArrangements.length) % featuredArrangements.length)
  }

  return (
    <section className="featured">
      <div className="featured__container">
        <div className="featured__left">
          <div className="featured__content">
            <span className="section-label featured__label">Signature Creations</span>
            <h2 className="featured__title">FRESHNESS IN EVERY BLOOM</h2>
            <p className="featured__subtitle">EXQUISITE FLORAL ARRANGEMENTS FOR EVERY OCCASION</p>
            <a href="#archive" className="featured__cta">
              OUR BLOOM ARCHIVE
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="featured__right">
          <div className="featured__carousel">
            <div 
              className="featured__carousel-track" 
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {featuredArrangements.map((item, index) => (
                <div key={index} className="featured__card-wrapper">
                  <div className="featured__card">
                    <div className="featured__card-image-box">
                      <img src={item.image} alt={item.name} className="featured__card-img" />
                      <div className="featured__card-logo">GB</div>
                    </div>
                    <div className="featured__card-info">
                      <span className="featured__card-category">{item.category}</span>
                      <h3 className="featured__card-name">{item.name}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="featured__nav">
              <button 
                className="featured__nav-btn featured__nav-btn--prev" 
                onClick={prevSlide}
                aria-label="Previous arrangement"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button 
                className="featured__nav-btn featured__nav-btn--next" 
                onClick={nextSlide}
                aria-label="Next arrangement"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function OccasionsCarousel() {
  return (
    <section className="occasions">
      <div className="container">
        <header className="occasions__header">
          <span className="section-label">Celebrate</span>
          <h2>GIFTS FOR EVERY MOMENT!</h2>
        </header>
        <div className="occasions__carousel-wrapper">
          <div className="occasions__carousel">
            {occasions.map((occasion) => (
              <div key={occasion.name} className="occasion-card">
                <div className="occasion-card__image">
                  <img src={occasion.image} alt={occasion.name} loading="lazy" />
                  <div className="occasion-card__overlay">
                    <h3>{occasion.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function GiftIdeasSlider() {
  return (
    <section className="gift-ideas">
      <div className="container">
        <header className="gift-ideas__header">
          <span className="section-label">Selected for you</span>
          <h2>Explore Unique Gift Ideas</h2>
        </header>
        
        <div className="gift-ideas__stacked-container">
          {/* Top Row: First 3 items */}
          <div className="gift-ideas__row">
            {giftIdeas.slice(0, 3).map((item) => (
              <div key={item.name} className="gift-card gift-card--stacked">
                <div className="gift-card__inner">
                  <div className="gift-card__image">
                    <img src={item.image} alt={item.name} loading="lazy" />
                  </div>
                  <div className="gift-card__info">
                    <h3>{item.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row: Next 3 items */}
          <div className="gift-ideas__row">
            {giftIdeas.slice(3, 6).map((item) => (
              <div key={item.name} className="gift-card gift-card--stacked">
                <div className="gift-card__inner">
                  <div className="gift-card__image">
                    <img src={item.image} alt={item.name} loading="lazy" />
                  </div>
                  <div className="gift-card__info">
                    <h3>{item.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
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
        <FeaturedArrangements />
        <OccasionsCarousel />
        <GiftIdeasSlider />
        <SocialProof />
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