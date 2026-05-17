import { useState } from 'react'
import MainLayout from '../layouts/MainLayout'
import { greenCategories, greenItems } from '../data/greenHeavenData'
import '../styles/pages/floral-essentials.css'

export default function GreenHeaven() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredItems = greenItems.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         item.desc.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <MainLayout>
      <main className="floral-essentials-page floral-page--no-hero">
        <section className="floral-controls-container">
          <div className="container">
            
            {/* Slim Editorial Header */}
            <div className="editorial-header-slim">
              <span className="editorial-header-slim__subtitle">Lush Living Botanicals</span>
              <h1 className="editorial-header-slim__title">Green Heaven</h1>
              <p className="editorial-header-slim__desc">Premium indoor plants, fresh succulents, and architectural greenery to breathe life into your home.</p>
            </div>
            
            {/* Combined Controls Panel in a Single Horizontal Row */}
            <div className="floral-controls-panel">
              {/* Category filters on the left as square rectangular buttons */}
              <div className="floral-categories-flat">
                {greenCategories.map(category => {
                  const isActive = activeCategory === category
                  return (
                    <button 
                      key={category}
                      className={`floral-category-square ${isActive ? 'active' : ''}`}
                      onClick={() => setActiveCategory(category)}
                    >
                      <span>{category}</span>
                    </button>
                  )
                })}
              </div>

              {/* Right side: Search input only */}
              <div className="floral-actions-right">
                <div className="floral-search-wrapper">
                  <input 
                    type="text" 
                    className="floral-search-input" 
                    placeholder="Search plants..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    aria-label="Search plants"
                  />
                  <svg className="floral-search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </div>
              </div>
            </div>

            {/* Editorial Product Grid */}
            <div key={activeCategory} className="editorial-grid">
              {filteredItems.map((item) => (
                <article 
                  key={item.id} 
                  className="editorial-card"
                >
                  {/* Image container with 4:3 landscape aspect ratio */}
                  <div className="editorial-card__image-container">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="editorial-card__image" 
                      loading="lazy" 
                    />
                    {/* Elegant double gold border visible on hover */}
                    <div className="editorial-card__frame" />
                  </div>

                  {/* Content details */}
                  <span className="editorial-card__category">{item.category}</span>
                  <h3 className="editorial-card__title">{item.name}</h3>
                  <p className="editorial-card__desc">{item.desc}</p>
                  
                  <div className="editorial-card__footer">
                    <button className="editorial-card__btn">
                      Inquire Details
                      <span className="editorial-card__btn-arrow">→</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>

          </div>
        </section>
      </main>
    </MainLayout>
  )
}
