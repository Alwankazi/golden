import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import MainLayout from '../layouts/MainLayout'
import { floralCategories, floralItems } from '../data/floralData'
import '../styles/pages/inner-page.css'

export default function FloralEssentials() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredItems = activeCategory === 'All' 
    ? floralItems 
    : floralItems.filter(item => item.category === activeCategory)

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
                Floral Essentials
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                Discover our curated selection of fresh blooms, elegant arrangements, and luxurious accessories to elevate any space.
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
            {floralCategories.map(category => (
              <button 
                key={category}
                className={`floral-filter-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </motion.div>

          <motion.div layout className="floral-grid">
            <AnimatePresence mode="popLayout">
              {filteredItems.map(item => (
                <motion.article 
                  key={item.id} 
                  className="floral-card"
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="floral-card__image-wrapper">
                    <img src={item.image} alt={item.name} className="floral-card__image" loading="lazy" />
                  </div>
                  <span className="floral-card__category">{item.category}</span>
                  <h3 className="floral-card__title">{item.name}</h3>
                  <p className="floral-card__desc">{item.desc}</p>
                  <button className="floral-card__btn">View Details</button>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>
    </MainLayout>
  )
}
