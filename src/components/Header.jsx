import React, { useState, useEffect } from 'react';
import { Search, Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import SearchModal from './SearchModal';
import Magnetic from './Magnetic';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Chi Siamo', path: '/chi-siamo' },
    { name: 'Video', path: '/video' },
    { name: 'News', path: '/articoli' },
    { name: 'Contatti', path: '/contatti' }
  ];

  return (
    <>
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          padding: '16px 5%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 100,
          background: (scrolled || !isHome || isMobileMenuOpen) ? 'var(--crisp-paper-white)' : 'transparent',
          borderBottom: (scrolled || !isHome) ? '1px solid var(--paper-mist)' : 'none',
          transition: 'all 0.4s var(--ease-out-expo)',
          height: '80px'
        }}
      >
        {/* Magnetic Logo */}
        <Magnetic strength={0.15}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', position: 'relative', zIndex: 101 }}>
            <img src="/images/onlylogo.webp" alt="Youtax" style={{ 
              height: '32px', 
              filter: 'url(#remove-white)',
              transition: 'opacity 0.3s ease'
            }} />
          </Link>
        </Magnetic>

        {/* Desktop Nav Links */}
        <nav style={{ display: 'flex' }} className="desktop-only">
          <ul style={{ display: 'flex', listStyle: 'none', gap: '32px' }}>
            {navItems.map((item) => (
              <li key={item.name}>
                <Magnetic strength={0.1}>
                  <Link to={item.path} style={{ 
                    color: 'var(--deep-graphite)', 
                    textDecoration: 'none', 
                    fontSize: '0.8rem',
                    fontWeight: '500',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    transition: 'color 0.3s',
                    display: 'block',
                    padding: '8px'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--primary-gold)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--deep-graphite)'}
                  >
                    {item.name}
                  </Link>
                </Magnetic>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', position: 'relative', zIndex: 101 }}>
          <Magnetic strength={0.2}>
            <div 
              onClick={() => setIsSearchOpen(true)}
              style={{ cursor: 'pointer', color: 'var(--deep-graphite)', display: 'flex', padding: '8px' }}
            >
              <Search size={18} strokeWidth={1.5} />
            </div>
          </Magnetic>
          
          <Magnetic strength={0.2}>
            <a href="tel:+390248518723" style={{ cursor: 'pointer', color: 'var(--deep-graphite)', display: 'flex', alignItems: 'center', padding: '8px' }}>
              <Phone size={18} strokeWidth={1.5} />
            </a>
          </Magnetic>
          
          {/* Mobile Toggle */}
          <div 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ cursor: 'pointer', color: 'var(--deep-graphite)', display: 'flex' }}
            className="mobile-only"
          >
            {isMobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: '100%',
              height: '100vh',
              background: 'var(--crisp-paper-white)',
              zIndex: 99,
              padding: '120px 24px 40px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {navItems.map((item, i) => (
                <motion.li 
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <Link 
                    to={item.path} 
                    style={{ 
                      color: 'var(--deep-graphite)', 
                      textDecoration: 'none', 
                      fontSize: '2.5rem',
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: '500'
                    }}
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <div style={{ borderTop: '1px solid var(--paper-mist)', paddingTop: '40px' }}>
              <p className="label-text" style={{ fontSize: '0.6rem', marginBottom: '16px' }}>Contatti</p>
              <p style={{ fontWeight: '600', fontSize: '1.2rem', marginBottom: '8px' }}>+39 02 48518723</p>
              <p style={{ color: 'var(--soft-charcoal)' }}>studiodambraeassociati@gmail.com</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      
      <style>{`
        @media (min-width: 769px) {
          .mobile-only { display: none !important; }
        }
        @media (max-width: 768px) {
          .desktop-only { display: none !important; }
        }
      `}</style>
    </>
  );
};

export default Header;
