import { Link } from 'react-router-dom'
import goldenLogo from '../../assets/golden-logo.png'
import { footerLinks } from '../../data/siteData'
import '../../styles/components/footer.css'

export default function Footer() {
  const renderLink = (link: { label: string; href: string }) => {
    const isAnchor = link.href.startsWith('#')
    const isExternal = link.href.startsWith('http') || link.href.startsWith('mailto:') || link.href.startsWith('tel:')
    
    if (isExternal) {
      return <a href={link.href}>{link.label}</a>
    }

    const to = isAnchor && link.href !== '#' ? `/${link.href}` : link.href

    return <Link to={to}>{link.label}</Link>
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__logo">
              <img src={goldenLogo} alt="Golden Bouquet" className="footer__logo-img" />
              <span className="footer__brand-text">Golden Bouquet</span>
              <sup>®</sup>
            </div>
            <p>The world's most sculptural roses, elegantly curated for life's meaningful moments.</p>
            <div className="footer__social">
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17" cy="7" r="1" />
                </svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M15 3h-3a4 4 0 00-4 4v3H5v4h3v7h4v-7h3l1-4h-4V7a1 1 0 011-1h3" />
                </svg>
              </a>
              <a href="#" aria-label="Pinterest">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M12 3a9 9 0 00-3.2 17.4l1.2-4.4a4.7 4.7 0 111.8 1" />
                  <path d="M12 9.2c-1.7 0-2.8 1.6-2.4 3.1.4 1.5 1.2 2.6 1 3.9" />
                </svg>
              </a>
            </div>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="footer__col">
              <h4>{title.charAt(0).toUpperCase() + title.slice(1)}</h4>
              <ul>
                {links.map((link) => (
                  <li key={link.label}>
                    {renderLink(link)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} <span className="footer__brand-text--small">Golden Bouquet</span>. All rights reserved.</p>
          <div className="footer__legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
          </div>
          <p className="footer__credit">Designed and developed by <a href="https://qadmastechnologies.com/" target="_blank" rel="noopener noreferrer">Qadmas Technologies</a></p>
        </div>
      </div>
    </footer>
  )
}
