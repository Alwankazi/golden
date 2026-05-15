import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import MainLayout from '../layouts/MainLayout'
import { eventsCategories, eventsItems } from '../data/eventsData'
import '../styles/pages/inner-page.css'
import '../styles/pages/events.css'

export default function Events() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredItems = activeCategory === 'All' 
    ? eventsItems 
    : eventsItems.filter(item => item.category === activeCategory)

  return (
    <MainLayout>
      <main className="floral-page">
        <div className="floral-page__header-wrapper">
          <div className="container">
            <header className="floral-page__header">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                Events & Styling
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                From intimate gatherings to grand celebrations, we provide bespoke floral styling for every special occasion.
              </motion.p>
            </header>
          </div>
        </div>

        <div className="container">
          <motion.div 
            className="floral-filters"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {eventsCategories.map(category => (
              <button 
                key={category}
                className={`floral-filter-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </motion.div>

          <div className="events-grid">
            <AnimatePresence mode="popLayout">
              {filteredItems.map(item => (
                <motion.article 
                  key={item.id} 
                  className="event-card"
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="event-card__image-wrapper">
                    <img src={item.image} alt={item.name} className="event-card__image" loading="lazy" />
                  </div>
                  <div className="event-card__overlay">
                    <span className="event-card__category">{item.category}</span>
                    <h3 className="event-card__title">{item.name}</h3>
                    <p className="event-card__desc">{item.desc}</p>
                    <div className="event-card__link">View Event Gallery</div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </main>
    </MainLayout>
  )
}
