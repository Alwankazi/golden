import { Suspense } from 'react'
import AppRoutes from './routes/routes'
import ScrollToTop from './components/common/ScrollToTop'

export default function App() {
  return (
    <Suspense fallback={<div className="route-loader">Loading...</div>}>
      <ScrollToTop />
      <AppRoutes />
    </Suspense>
  )
}