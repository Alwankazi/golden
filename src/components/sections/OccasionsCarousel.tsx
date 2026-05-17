import { useEffect, useRef } from 'react'
import { occasions } from '../../data/homeData'
import '../../styles/sections/occasions-carousel.css'

export default function OccasionsCarousel() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    let intervalId: ReturnType<typeof setInterval>

    const scroll = () => {
      if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 10) {
        carousel.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        // Move by half the width to ensure smooth progression in the snap carousel
        carousel.scrollBy({ left: carousel.clientWidth / 2, behavior: 'smooth' })
      }
    }

    const startScroll = () => {
      intervalId = setInterval(scroll, 4000)
    }

    const stopScroll = () => {
      if (intervalId) clearInterval(intervalId)
    }

    startScroll()

    const section = sectionRef.current
    if (section) {
      section.addEventListener('mouseenter', stopScroll)
      section.addEventListener('mouseleave', startScroll)
    }

    return () => {
      stopScroll()
      if (section) {
        section.removeEventListener('mouseenter', stopScroll)
        section.removeEventListener('mouseleave', startScroll)
      }
    }
  }, [])

  const handleScroll = (direction: 'left' | 'right') => {
    const carousel = carouselRef.current
    if (!carousel) return

    const card = carousel.querySelector('.occasion-card')
    const scrollAmount = card ? card.clientWidth + 24 : carousel.clientWidth / 2

    carousel.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    })
  }

  return (
    <section className="occasions" ref={sectionRef}>
      <div className="container">
        <header className="occasions__header">
          <span className="section-label">Celebrate</span>
          <h2>GIFTS FOR EVERY MOMENT!</h2>
        </header>
        <div className="occasions__carousel-wrapper">
          <div className="occasions__carousel" ref={carouselRef}>
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

        <div className="occasions__controls">
          <button 
            className="occasions__btn occasions__btn--left" 
            onClick={() => handleScroll('left')}
            aria-label="Previous slide"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>
          <button 
            className="occasions__btn occasions__btn--right" 
            onClick={() => handleScroll('right')}
            aria-label="Next slide"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
