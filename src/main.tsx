import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ScrollToTop from './components/ScrollToTop'
import './index.css'

// Code-split About and Platform and Events — only download when user navigates there
const About = lazy(() => import('./pages/About'))
const Platform = lazy(() => import('./pages/Platform'))
const Events = lazy(() => import('./pages/Events'))
const Endorsements = lazy(() => import('./pages/Endorsements'))
const DigitalEconomy = lazy(() => import('./pages/DigitalEconomy'))
const Veterans = lazy(() => import('./pages/Veterans'))

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Suspense><About /></Suspense>} />
        <Route path="/platform" element={<Suspense><Platform /></Suspense>} />
        <Route path="/events" element={<Suspense><Events /></Suspense>} />
        <Route path="/endorsements" element={<Suspense><Endorsements /></Suspense>} />
        <Route path="/digital-economy" element={<Suspense><DigitalEconomy /></Suspense>} />
        <Route path="/veterans" element={<Suspense><Veterans /></Suspense>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
