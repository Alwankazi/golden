import { Link } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import '../styles/pages/not-found.css'

export default function NotFound() {
  return (
    <MainLayout>
      <main className="not-found">
        <div className="container not-found__content">
          <span className="section-label">Error 404</span>
          <h1>This Bloom Has Wilted</h1>
          <p>The page you're looking for doesn't exist or may have been moved.</p>
          <Link to="/" className="not-found__cta">Return to Home</Link>
        </div>
      </main>
    </MainLayout>
  )
}
