import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HomePage from './pages/Home'
import ProjectsPage from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import ServicesPage from './pages/Services'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-surface text-pearl flex flex-col">
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/projekter" element={<ProjectsPage />} />
              <Route path="/projekter/:slug" element={<ProjectDetail />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/om" element={<AboutPage />} />
              <Route path="/kontakt" element={<ContactPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}

export default App
