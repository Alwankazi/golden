import { Link } from 'react-router-dom'
import goldenLogo from '../../assets/golden-logo.png'
import { footerLinks } from '../../data/siteData'
import '../../styles/components/footer.css'

export default function Footer() {
  const renderLink = (link: { label: string; href: string }) => {
    const isAnchor = link.href.startsWith('#')
    const isExternal = link.href.startsWith('http') || link.href.startsWith('mailto:') || link.href.startsWith('tel:')
    
    if (isExternal) {
      return <a href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>
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
          <div className="footer__col">
            <h4>Socials</h4>
            <div className="footer__social">
              <a href="https://www.instagram.com/goldenbouquetqtr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17" cy="7" r="1" />
                </svg>
                <span>@goldenbouquetqtr</span>
              </a>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} <span className="footer__brand-text--small">Golden Bouquet</span>. All rights reserved.</p>
          <p className="footer__credit">Designed and developed by <a href="https://qadmastechnologies.com/" target="_blank" rel="noopener noreferrer">Qadmas Technologies</a></p>
          <div className="footer__legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
