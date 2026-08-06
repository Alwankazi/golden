import { useState } from 'react'
import type { TouchEvent } from 'react'
import { featuredArrangements } from '../../data/homeData'
import QuickInquiryModal, { type QuickInquiryItem } from '../common/QuickInquiryModal'
import '../../styles/sections/featured-arrangements.css'

export default function FeaturedArrangements() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [selectedItem, setSelectedItem] = useState<QuickInquiryItem | null>(null)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const minSwipeDistance = 50

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % featuredArrangements.length)
  }

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + featuredArrangements.length) % featuredArrangements.length)
  }

  const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    if (isLeftSwipe) nextSlide()
    if (isRightSwipe) prevSlide()
  }

  return (
    <section className="featured">
      <div className="featured__container">
        <div className="featured__left">
          <div className="featured__content">
            <span className="section-label featured__label">Signature Creations</span>
            <h2 className="featured__title">FRESHNESS IN EVERY BLOOM</h2>
            <p className="featured__subtitle">EXQUISITE FLORAL ARRANGEMENTS FOR EVERY OCCASION</p>
            <button
              type="button"
              className="featured__cta"
              onClick={() => setSelectedItem(featuredArrangements[activeSlide])}
            >
              OUR BLOOM ARCHIVE
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="featured__right">
          <div className="featured__carousel">
            <div
              className="featured__carousel-track"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              {featuredArrangements.map((item, index) => (
                <div key={index} className="featured__card-wrapper">
                  <div className="featured__card" onClick={() => setSelectedItem(item)}>
                    <div className="featured__card-image-box">
                      <img src={item.image} alt={item.name} className="featured__card-img" />
                      <div className="featured__card-logo">GB</div>
                    </div>
                    <div className="featured__card-info">
                      <span className="featured__card-category">{item.category}</span>
                      <h3 className="featured__card-name">{item.name}</h3>
                      <p className="featured__card-desc">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="featured__controls">
              <div className="featured__progress" aria-hidden="true">
                <span className="featured__progress-line">
                  <span
                    className="featured__progress-fill"
                    style={{ width: `${((activeSlide + 1) / featuredArrangements.length) * 100}%` }}
                  />
                </span>
                <span className="featured__progress-label">
                  <span className="featured__count-current">
                    {(activeSlide + 1).toString().padStart(2, '0')}
                  </span>
                  <span className="featured__count-sep">/</span>
                  <span className="featured__count-total">
                    {featuredArrangements.length.toString().padStart(2, '0')}
                  </span>
                  <span className="featured__count-text">Explore Collection</span>
                </span>
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
      </div>
      <QuickInquiryModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </section>
  )
}
