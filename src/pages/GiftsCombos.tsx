import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import MainLayout from '../layouts/MainLayout'
import { giftsCategories, giftsItems } from '../data/giftsData'
import '../styles/pages/inner-page.css'
import '../styles/pages/gifts-combos.css'

export default function GiftsCombos() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredItems = activeCategory === 'All' 
    ? giftsItems 
    : giftsItems.filter(item => item.category === activeCategory)

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
                Gifts & Combos
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                Make every moment unforgettable with our perfectly paired gift sets and luxurious combos.
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
            {giftsCategories.map(category => (
              <button 
                key={category}
                className={`floral-filter-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </motion.div>

          <div className="gifts-grid">
            <AnimatePresence mode="popLayout">
              {filteredItems.map(item => (
                <motion.article 
                  key={item.id} 
                  className="gift-row"
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="gift-row__image-wrapper">
                    <img src={item.image} alt={item.name} className="gift-row__image" loading="lazy" />
                  </div>
                  <div className="gift-row__content">
                    <span className="gift-row__category">{item.category}</span>
                    <h3 className="gift-row__title">{item.name}</h3>
                    <p className="gift-row__desc">{item.desc}</p>
                    <button className="gift-row__btn">Explore Combo</button>
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
