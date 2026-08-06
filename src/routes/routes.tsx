import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const HomePage = lazy(() => import('../pages/HomePage'))
const FloralEssentials = lazy(() => import('../pages/FloralEssentials'))
const CakesDelights = lazy(() => import('../pages/CakesDelights'))
const GreenHeaven = lazy(() => import('../pages/GreenHeaven'))
const GiftsCombos = lazy(() => import('../pages/GiftsCombos'))
const Events = lazy(() => import('../pages/Events'))
const Contact = lazy(() => import('../pages/Contact'))
const PrivacyPolicy = lazy(() => import('../pages/PrivacyPolicy'))
const TermsOfService = lazy(() => import('../pages/TermsOfService'))
const NotFound = lazy(() => import('../pages/NotFound'))

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/floral-essentials" element={<FloralEssentials />} />
      <Route path="/cakes-and-delights" element={<CakesDelights />} />
      <Route path="/green-heaven" element={<GreenHeaven />} />
      <Route path="/gifts-and-combos" element={<GiftsCombos />} />
      <Route path="/events" element={<Events />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
