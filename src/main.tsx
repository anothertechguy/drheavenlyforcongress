import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Platform from './pages/Platform'
import ScrollToTop from './components/ScrollToTop'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/drheavenlyforcongress/">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/platform" element={<Platform />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
