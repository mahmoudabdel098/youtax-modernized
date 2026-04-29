import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import MagneticButton from './MagneticButton';

const EASE = [0.16, 1, 0.3, 1];

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section style={{ 
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: 'var(--spacing-3xl) 0', 
      background: 'var(--crisp-paper-white)',
      overflow: 'hidden'
    }}>
      
      {/* Background Texture (Noise) */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/felt.png")',
        opacity: 0.03,
        pointerEvents: 'none',
        zIndex: 1
      }} />
      
      {/* Background Large Text Layer */}
      <motion.div
        className="desktop-only"
        style={{
          position: 'absolute',
          top: '60%',
          left: '5%',
          transform: 'translateY(-50%)',
          fontSize: '15vw',
          fontWeight: '900',
          color: 'var(--paper-mist)',
          zIndex: 0,
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          opacity: 0.3,
          letterSpacing: '-0.05em'
        }}
        animate={{ x: [0, -15, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      >
        YOUTAX FORUM
      </motion.div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '80px', alignItems: 'center' }}>
          
          {/* Left Side: Content */}
          <div className="hero-text-container" style={{ paddingTop: '40px' }}>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: EASE }}
              style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '3rem' }}
            >
               <span style={{ width: '40px', height: '1px', background: 'var(--primary-gold)' }}></span>
               <p className="label-text" style={{ color: 'var(--soft-charcoal)', letterSpacing: '0.1em' }}>FORUM DI DIRITTO TRIBUTARIO E DELLE IMPRESE</p>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 40, filter: 'blur(15px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.2, delay: 0.1, ease: EASE }}
              className="display-text"
              style={{ 
                fontSize: 'clamp(3.5rem, 9vw, 6.5rem)',
                lineHeight: '1.05',
                marginBottom: '3.5rem', 
                color: 'var(--deep-graphite)',
                letterSpacing: '-0.04em'
              }}
            >
              L'Autorità <br />
              <span style={{ fontStyle: 'italic', color: 'var(--primary-gold)', fontWeight: '300' }}>nel Diritto</span> <br />
              Digitale.
            </motion.h1>

            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
               className="hero-stats"
               style={{ display: 'flex', gap: '64px', marginBottom: '4.5rem' }}
            >
               <div style={{ borderLeft: '1px solid var(--paper-mist)', paddingLeft: '20px' }}>
                  <p className="label-text" style={{ fontSize: '0.6rem', marginBottom: '8px', opacity: 0.6 }}>Studio Partners</p>
                  <p style={{ fontWeight: '600', fontSize: '1.1rem' }}>D'Ambra e Associati</p>
               </div>
               <div style={{ borderLeft: '1px solid var(--paper-mist)', paddingLeft: '20px' }}>
                  <p className="label-text" style={{ fontSize: '0.6rem', marginBottom: '8px', opacity: 0.6 }}>Headquarters</p>
                  <p style={{ fontWeight: '600', fontSize: '1.1rem' }}>Milano, IT</p>
               </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
              style={{ display: 'flex', alignItems: 'center', gap: '40px', flexWrap: 'wrap' }}
            >
              <Link to="/video" style={{ textDecoration: 'none' }}>
                <MagneticButton className="btn-primary" style={{ padding: '24px 64px', fontSize: '0.8rem' }}>
                  Esplora i Report
                </MagneticButton>
              </Link>
              <Link to="/chi-siamo" style={{ 
                color: 'var(--deep-graphite)', 
                textDecoration: 'none', 
                fontWeight: '600', 
                fontSize: '0.85rem',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}>
                Chi Siamo <span style={{ fontSize: '1.4rem', color: 'var(--primary-gold)' }}>↓</span>
              </Link>
            </motion.div>
          </div>

          {/* Right Side: Image Frame */}
          <motion.div 
            className="hero-image-frame"
            style={{ position: 'relative', y, opacity }}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.2, ease: EASE }}
          >
            <div style={{ 
              position: 'relative',
              width: '100%',
              height: '75vh',
              overflow: 'hidden',
              border: '1px solid var(--paper-mist)',
              boxShadow: '40px 40px 80px rgba(0,0,0,0.03)'
            }}>
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
                alt="Editorial Legal Office" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
              {/* Overlay Gradient for depth */}
              <div style={{ 
                position: 'absolute', 
                top: 0, left: 0, right: 0, bottom: 0,
                background: 'linear-gradient(25deg, rgba(20,18,15,0.1) 0%, transparent 100%)'
              }} />
            </div>
            
            {/* Subtle floating stat */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="hero-floating-box"
              style={{
                position: 'absolute',
                bottom: '40px',
                left: '-60px',
                background: 'var(--deep-graphite)',
                color: 'var(--crisp-paper-white)',
                padding: '40px',
                zIndex: 3,
                minWidth: '240px',
                boxShadow: '0 30px 60px rgba(0,0,0,0.2)'
              }}
            >
              <p className="label-text" style={{ color: 'var(--primary-gold)', fontSize: '0.6rem', marginBottom: '12px', letterSpacing: '0.2em' }}>Aggiornamento</p>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.75rem', fontStyle: 'italic', lineHeight: '1.2' }}>Riforma <br />Fiscale 2024</p>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="desktop-only"
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
          opacity: 0.3,
          zIndex: 10
        }}
      >
        <div style={{ width: '1px', height: '60px', background: 'var(--deep-graphite)' }}></div>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 60px !important; }
          .hero-text-container { padding-top: 60px !important; text-align: center; }
          .hero-text-container div:first-child { justify-content: center; }
          .hero-stats { justify-content: center; gap: 32px !important; margin-bottom: 3rem !important; }
          .hero-text-container > div:last-child { justify-content: center; gap: 20px !important; }
          .hero-image-frame { height: 50vh !important; }
          .hero-image-frame > div:first-child { height: 50vh !important; }
          .hero-floating-box { left: 50% !important; transform: translateX(-50%) !important; bottom: -20px !important; min-width: 200px !important; padding: 24px !important; }
        }
      `}</style>
    </section>
  );

};

export default Hero;
