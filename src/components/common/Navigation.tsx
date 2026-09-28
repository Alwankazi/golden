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

  // Auto-close menu on route changes
  const [prevPathname, setPrevPathname] = useState(location.pathname)
  if (prevPathname !== location.pathname) {
    setPrevPathname(location.pathname)
    setMenuOpen(false)
  }

  // Prevent background scrolling when menu is open & handle Escape key
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
      document.body.classList.add('menu-open')
    } else {
      document.body.style.overflow = ''
      document.body.classList.remove('menu-open')
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      document.body.classList.remove('menu-open')
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [menuOpen])

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

  const isInnerPage = ['/floral-essentials', '/cakes-and-delights', '/green-heaven', '/gifts-and-combos', '/events', '/contact', '/privacy-policy', '/terms-of-service'].includes(location.pathname)

  return (
    <>
      <nav className={`nav ${(scrolled || isInnerPage) ? 'nav--scrolled' : ''} ${menuOpen ? 'nav--menu-open' : ''}`}>
        <div className="nav__container container">
          {/* Desktop Left Nav */}
          <ul className="nav__links nav__links--left">
            {navLinks.slice(0, 3).map((link) => (
              <li key={link.label}>
                {renderLink(link)}
              </li>
            ))}
          </ul>

          {/* Logo */}
          <Link to="/" className="nav__logo" onClick={() => setMenuOpen(false)}>
            <img src={goldenLogo} alt="Golden Bouquet" className="nav__logo-img" />
          </Link>

          {/* Desktop Right Nav */}
          <ul className="nav__links nav__links--right">
            {navLinks.slice(3).map((link) => (
              <li key={link.label}>
                {renderLink(link)}
              </li>
            ))}
          </ul>

          {/* Mobile / Overlay Menu Toggle Button */}
          <button
            className={`nav__menu-btn ${menuOpen ? 'nav__menu-btn--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Full Viewport Menu Overlay covering header and full screen */}
      <div 
        className={`nav__overlay ${menuOpen ? 'nav__overlay--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <ul className="nav__overlay-links">
          {navLinks.map((link) => (
            <li key={link.label}>
              {renderLink(link)}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
