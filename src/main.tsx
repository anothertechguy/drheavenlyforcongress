import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ScrollToTop from './components/ScrollToTop'
import './index.css'

// Code-split About and Platform — only download when user navigates there
const About = lazy(() => import('./pages/About'))
const Platform = lazy(() => import('./pages/Platform'))

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Suspense><About /></Suspense>} />
        <Route path="/platform" element={<Suspense><Platform /></Suspense>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
