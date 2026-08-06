import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import '../../styles/pages/floral-essentials.css'
import '../../styles/pages/contact.css'

export interface QuickInquiryItem {
  name: string
  category?: string
  desc: string
  image: string
}

interface QuickInquiryModalProps {
  item: QuickInquiryItem | null
  onClose: () => void
}

export default function QuickInquiryModal({ item, onClose }: QuickInquiryModalProps) {
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [reference, setReference] = useState('')

  const handleClose = () => {
    onClose()
    setMessage('')
    setSubmitted(false)
    setReference('')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!item) return
    const randomRef = `GLD-QCK-${Math.floor(1000 + Math.random() * 9000)}`
    setSubmitted(true)
    setReference(randomRef)

    const subject = encodeURIComponent(`Quick Inquiry: ${item.name} (${randomRef})`)
    const body = encodeURIComponent(
      `Hello Golden Bouquet Concierge,\n\n` +
      `I would like to inquire about the following arrangement:\n` +
      `- Item: ${item.name}\n` +
      `- Inquiry Reference: ${randomRef}\n\n` +
      `Notes:\n"${message || 'None provided'}"\n\n` +
      `Thank you.`
    )

    setTimeout(() => {
      window.location.href = `mailto:info@golden-bouquet.com?subject=${subject}&body=${body}`
    }, 800)
  }

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="floral-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <motion.div
            className="floral-modal"
            initial={{ scale: 0.9, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 50, opacity: 0 }}
            transition={{ type: 'spring', duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="floral-modal__close-btn" onClick={handleClose} aria-label="Close modal">
              ✕
            </button>

            <div className="floral-modal__left">
              <img src={item.image} alt={item.name} className="floral-modal__image" />
            </div>

            <div className="floral-modal__right">
              {item.category && <span className="floral-modal__category">{item.category}</span>}
              <h2 className="floral-modal__title">{item.name}</h2>
              <p className="floral-modal__desc">{item.desc}</p>

              <div className="floral-booking-panel">
                <h3 className="floral-booking-title">Inquire About This Piece</h3>

                {!submitted ? (
                  <form className="floral-booking-form" onSubmit={handleSubmit}>
                    <div className="floral-form-group">
                      <label className="floral-form-label" htmlFor="quick-inquiry-message">Special Requests</label>
                      <input
                        id="quick-inquiry-message"
                        type="text"
                        className="floral-form-input"
                        placeholder="Add any notes (e.g. delivery date, custom colors...)"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </div>

                    <button type="submit" className="floral-submit-btn">
                      Submit Concierge Inquiry
                    </button>
                  </form>
                ) : (
                  <motion.div className="floral-booking-success" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <h4>Inquiry Received</h4>
                    <p>
                      Thank you for choosing Golden. Our concierge has logged your request for the <strong>{item.name}</strong>.
                    </p>
                    <p style={{ marginTop: '12px', fontWeight: 600, fontSize: '0.8125rem' }}>
                      Inquiry Reference: {reference}
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
