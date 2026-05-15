import { Suspense } from 'react'
import AppRoutes from './routes/routes'

export default function App() {
  return (
    <Suspense fallback={<div className="route-loader">Loading...</div>}>
      <AppRoutes />
    </Suspense>
  )
}