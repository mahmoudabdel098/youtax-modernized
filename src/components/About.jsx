import React from 'react';
import { motion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1];

const About = () => {
  return (
    <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
      
      {/* Left Column - Featured Image Frame */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: EASE }}
        style={{ position: 'relative' }}
      >
        <div style={{ 
          position: 'absolute', 
          top: '-20px', 
          left: '-20px', 
          zIndex: 2, 
          background: 'var(--crisp-paper-white)', 
          padding: '32px', 
          boxShadow: '0 20px 40px rgba(0,0,0,0.05)'
        }} className="floating-badge">
          <h3 className="display-text" style={{ fontSize: '2.5rem', color: 'var(--primary-gold)', marginBottom: '8px' }}>24/7</h3>
          <p style={{ color: 'var(--soft-charcoal)', fontSize: '0.875rem', maxWidth: '160px', lineHeight: '1.4' }}>
            Video convegni pronti ad aggiornarti in ogni momento.
          </p>
        </div>
        <div style={{ overflow: 'hidden', border: '1px solid var(--paper-mist)' }}>
          <motion.img 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: EASE }}
            src="https://globaluserfiles.com/media/2796_e09e73f2493338f6922478f85c889f7f5c228633.jpeg/v1/w_0,h_737/chess-27300341920.jpg" 
            alt="Strategic Legal Planning" 
            style={{ width: '100%', height: '500px', objectFit: 'cover' }} 
          />
        </div>
      </motion.div>

      {/* Right Column - Text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
        className="about-content"
      >
        <p className="label-text" style={{ marginBottom: '1.5rem' }}>La Nostra Storia</p>
        <h2 className="headline-text" style={{ marginBottom: '2.5rem', color: 'var(--deep-graphite)', fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
          Eccellenza legale <br />
          <span style={{ fontStyle: 'italic', color: 'var(--primary-gold)' }}>dal 2002</span>
        </h2>
        <p style={{ fontSize: '1.125rem', color: 'var(--soft-charcoal)', lineHeight: '1.7', marginBottom: '1.5rem', maxWidth: '60ch', fontWeight: '300' }}>
          Lo studio legale D’Ambra e Associati fu fondato nel 2002 da Vito D’Ambra. In questi anni lo studio si è progressivamente ampliato, dedicandosi non soltanto al contenzioso e alla consulenza tributaria e penale societaria, ma altresì al diritto degli investimenti esteri, trusts e tutela dei diritti cinematografici e dello sport.
        </p>
        <p style={{ fontSize: '1.125rem', color: 'var(--soft-charcoal)', lineHeight: '1.7', marginBottom: '3rem', maxWidth: '60ch', fontWeight: '300', fontStyle: 'italic', borderLeft: '2px solid var(--primary-gold)', paddingLeft: '24px' }}>
          "Non ci limitiamo a un’asettica disamina dei problemi giuridici, ma intendiamo comprenderli attraverso un’immersione totale nella realtà vivace dell'impresa."
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
          <div style={{ borderTop: '1px solid var(--paper-mist)', paddingTop: '24px' }}>
            <span className="label-text" style={{ fontSize: '0.65rem', color: 'var(--mid-ash)', display: 'block', marginBottom: '8px' }}>Visione</span>
            <h4 style={{ fontSize: '1.25rem', fontWeight: '500' }}>Insieme al Cliente</h4>
          </div>
          <div style={{ borderTop: '1px solid var(--paper-mist)', paddingTop: '24px' }}>
            <span className="label-text" style={{ fontSize: '0.65rem', color: 'var(--mid-ash)', display: 'block', marginBottom: '8px' }}>Asset</span>
            <h4 style={{ fontSize: '1.25rem', fontWeight: '500' }}>Rete Of Counsel</h4>
          </div>
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 60px !important; }
          .about-content { text-align: center; }
          .about-content div { text-align: left; }
          .floating-badge { left: 50% !important; transform: translateX(-50%) !important; top: -40px !important; text-align: center; width: 80%; }
          .floating-badge p { max-width: 100% !important; }
        }
      `}</style>
    </div>
  );
};

export default About;
