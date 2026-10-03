import { useState, useEffect } from 'react'
import type { FormEvent } from 'react'
import MainLayout from '../layouts/MainLayout'
import '../styles/pages/contact.css'

const options = [
  { value: 'General Inquiries', label: 'General inquiries' },
  { value: 'Customized Floral', label: 'Customized floral requirements' },
  { value: 'Specialized Cakes', label: 'Specialized/pre order cakes' },
  { value: 'Corporate & Event', label: 'Corporate & event' }
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest('.contact-custom-dropdown-container')) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)

    const subject = encodeURIComponent(`Contact Inquiry: ${formData.inquiryType || 'General Inquiries'} from ${formData.name}`)
    const body = encodeURIComponent(
      `Hello Golden Bouquet Concierge,\n\n` +
      `You have received a new inquiry from the contact form:\n` +
      `- Client Name: ${formData.name}\n` +
      `- Email Address: ${formData.email}\n` +
      `- Phone Number: ${formData.phone || 'Not provided'}\n` +
      `- Inquiry Type: ${formData.inquiryType || 'General Inquiries'}\n\n` +
      `Message Details:\n` +
      `"${formData.message}"\n\n` +
      `--- Additional Customer Notes ---\n` +
      `[Write your additional comments here]\n\n` +
      `Thank you.`
    )

    setTimeout(() => {
      window.location.href = `mailto:info@golden-bouquet.com?subject=${subject}&body=${body}`
    }, 800)
  }

  return (
    <MainLayout>
      <main className="contact-page contact-page--no-hero">
        <div className="container">
          
          {/* Editorial Header */}
          <div className="editorial-header-slim fade-in-up">
            <span className="editorial-header-slim__subtitle">Get in Touch</span>
            <h1 className="editorial-header-slim__title">Contact Us</h1>
            <p className="editorial-header-slim__desc">
              Have questions about custom floral commissions, bespoke celebratory cakes, or corporate event styling? Reach out to our design concierge team.
            </p>
          </div>

          <div className="contact-grid">
            
            {/* Left Column: Direct Info Cards */}
            <div className="contact-info-section fade-in-up stagger-1">
              
              {/* Call Us Card */}
              <a href="tel:+97470768555" className="contact-card">
                <div className="contact-card__icon-wrapper">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="contact-card__content">
                  <span className="contact-card__label">Direct Line</span>
                  <h3 className="contact-card__title">Call or WhatsApp</h3>
                  <p className="contact-card__value">+974 7076 8555</p>
                </div>
                <div className="contact-card__action">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </a>

              {/* Email Us Card */}
              <a href="mailto:info@golden-bouquet.com" className="contact-card">
                <div className="contact-card__icon-wrapper">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="contact-card__content">
                  <span className="contact-card__label">Digital Concierge</span>
                  <h3 className="contact-card__title">Email Address</h3>
                  <p className="contact-card__value">info@golden-bouquet.com</p>
                </div>
                <div className="contact-card__action">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </a>

              {/* Location Card */}
              <a href="https://maps.app.goo.gl/vixkvhPxCAJqAm2n6?g_st=iwb" target="_blank" rel="noopener noreferrer" className="contact-card">
                <div className="contact-card__icon-wrapper">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="contact-card__content">
                  <span className="contact-card__label">Flagship Store</span>
                  <h3 className="contact-card__title">Our Location</h3>
                  <p className="contact-card__value">Al Mamoura Plaza, Abu Hamor, Doha, Qatar</p>
                </div>
                <div className="contact-card__action">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </a>

            </div>

            {/* Right Column: Inquiry Form */}
            <div className="contact-form-section fade-in-up stagger-2">
              {isSubmitted ? (
                <div className="contact-form-success">
                  <div className="contact-form-success__icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="contact-form-success__title">Inquiry Sent</h3>
                  <p className="contact-form-success__desc">
                    Thank you, {formData.name}. Our concierge team has received your inquiry regarding <strong>{formData.inquiryType || 'General Inquiry'}</strong> and will respond within 24 hours.
                  </p>
                </div>
              ) : (
                <div className="contact-form-wrapper">
                  <h2 className="contact-form-title">Send a Message</h2>
                  <p className="contact-form-desc">Complete the fields below and our styling team will be in touch shortly.</p>
                  
                  <form className="contact-form" onSubmit={handleSubmit}>
                    
                    <div className="contact-form-row">
                      <div className="contact-input-group">
                        <input 
                          type="text" 
                          name="name"
                          required 
                          className="contact-input-field" 
                          placeholder=" "
                          value={formData.name}
                          onChange={handleInputChange}
                        />
                        <label className="contact-input-label">Full Name</label>
                        <span className="contact-input-focus-line"></span>
                      </div>

                      <div className="contact-input-group">
                        <input 
                          type="email" 
                          name="email"
                          required 
                          className="contact-input-field" 
                          placeholder=" "
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                        <label className="contact-input-label">Email Address</label>
                        <span className="contact-input-focus-line"></span>
                      </div>
                    </div>

                    <div className="contact-form-row">
                      <div className="contact-input-group">
                        <input 
                          type="tel" 
                          name="phone"
                          className="contact-input-field" 
                          placeholder=" "
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                        <label className="contact-input-label">Phone Number (Optional)</label>
                        <span className="contact-input-focus-line"></span>
                      </div>

                      <div className="contact-input-group contact-custom-dropdown-container">
                        <div 
                          className={`contact-custom-dropdown-trigger ${formData.inquiryType ? 'has-value' : ''} ${isDropdownOpen ? 'is-active' : ''}`}
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                          <span className="contact-custom-dropdown-selected">
                            {options.find(opt => opt.value === formData.inquiryType)?.label || ''}
                          </span>
                          <span className="contact-custom-dropdown-chevron">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                          </span>
                        </div>
                        <label className="contact-input-label">Inquiry Type</label>
                        <span className="contact-input-focus-line"></span>

                        {isDropdownOpen && (
                          <ul className="contact-custom-dropdown-list">
                            {options.map(option => (
                              <li 
                                key={option.value}
                                className={`contact-custom-dropdown-option ${formData.inquiryType === option.value ? 'selected' : ''}`}
                                onClick={() => {
                                  setFormData(prev => ({ ...prev, inquiryType: option.value }))
                                  setIsDropdownOpen(false)
                                }}
                              >
                                {option.label}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>

                    <div className="contact-input-group">
                      <textarea 
                        name="message"
                        required 
                        rows={4}
                        className="contact-input-field" 
                        placeholder=" "
                        style={{ resize: 'none' }}
                        value={formData.message}
                        onChange={handleInputChange}
                      />
                      <label className="contact-input-label">Write your message...</label>
                      <span className="contact-input-focus-line"></span>
                    </div>

                    <button type="submit" className="contact-submit-btn">
                      Send Inquiry
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </button>

                  </form>
                </div>
              )}
            </div>

          </div>

          {/* Map Preview Frame */}
          <section className="contact-map-section fade-in-up stagger-3">
            <div className="contact-map-container">
              <div className="contact-map-iframe-wrapper">
                <iframe 
                  title="Golden Bouquet Location - Al Mamoura Plaza, Abu Hamor"
                  className="contact-map-iframe"
                  src="https://maps.google.com/maps?q=Al%20Mamoura%20Plaza,%20Abu%20Hamor,%20Doha,%20Qatar&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              
              <div className="contact-map-overlay">
                <div className="contact-map-card">
                  <h3 className="contact-map-card__title">Doha Showroom</h3>
                  <p className="contact-map-card__text">
                    Al Mamoura Plaza, Abu Hamor<br />
                    Doha, Qatar<br />
                    Open Daily: 9:00 AM – 10:00 PM
                  </p>
                  <a 
                    href="https://maps.app.goo.gl/vixkvhPxCAJqAm2n6?g_st=iwb" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="contact-map-card__btn"
                  >
                    Get Directions
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>
    </MainLayout>
  )
}
