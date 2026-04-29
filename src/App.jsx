import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import VideoPage from './pages/VideoPage';
import ArticlesPage from './pages/ArticlesPage';
import ContactPage from './pages/ContactPage';
import CustomCursor from './components/CustomCursor';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -15 }}
    transition={{ 
      duration: 0.7, 
      ease: [0.16, 1, 0.3, 1] 
    }}
  >
    {children}
  </motion.div>
);

function AppContent() {
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  return (
    <div className="app-container">
      {/* Global SVG Filter for Logo Transparency (Removes White) */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="remove-white" colorInterpolationFilters="sRGB">
          <feColorMatrix type="matrix" values="
            1 0 0 0 0
            0 1 0 0 0
            0 0 1 0 0
            -1.5 -1.5 -1.5 4.5 0
          " />
        </filter>
      </svg>

      <motion.div 
        style={{ 
          position: 'fixed', top: 0, left: 0, right: 0, height: '2px', 
          background: 'var(--primary-gold)', transformOrigin: '0%', zIndex: 1000,
          scaleX 
        }} 
      />
      <CustomCursor />
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/chi-siamo" element={<PageWrapper><AboutPage /></PageWrapper>} />
          <Route path="/video" element={<PageWrapper><VideoPage /></PageWrapper>} />
          <Route path="/articoli" element={<PageWrapper><ArticlesPage /></PageWrapper>} />
          <Route path="/contatti" element={<PageWrapper><ContactPage /></PageWrapper>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

export default App;
