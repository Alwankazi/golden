import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import goldenLogo from '../../assets/golden-logo.png'
import { navLinks } from '../../data/siteData'
import '../../styles/components/navigation.css'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    // Trigger once on mount to handle initial scroll position
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Helper to determine if the link is an anchor link or a route
  const renderLink = (link: { label: string; href: string }) => {
    const isAnchor = link.href.startsWith('#')
    const to = isAnchor ? `/${link.href}` : link.href
    
    const isActive = isAnchor 
      ? location.pathname === '/' && location.hash === link.href 
      : location.pathname === to

    return (
      <Link 
        to={to} 
        onClick={() => setMenuOpen(false)}
        className={isActive ? 'active' : ''}
      >
        {link.label}
      </Link>
    )
  }

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__container container">
        <ul className={`nav__links nav__links--left ${menuOpen ? 'nav__links--open' : ''}`}>
          {navLinks.slice(0, 3).map((link) => (
            <li key={link.label}>
              {renderLink(link)}
            </li>
          ))}
        </ul>

        <Link to="/" className="nav__logo">
          <img src={goldenLogo} alt="Golden Bouquet" className="nav__logo-img" />
        </Link>

        <ul className={`nav__links nav__links--right ${menuOpen ? 'nav__links--open' : ''}`}>
          {navLinks.slice(3).map((link) => (
            <li key={link.label}>
              {renderLink(link)}
            </li>
          ))}
        </ul>

        <ul className={`nav__links nav__links--mobile ${menuOpen ? 'nav__links--open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.label}>
              {renderLink(link)}
            </li>
          ))}
        </ul>

        <button
          className="nav__menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}
