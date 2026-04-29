import React from 'react';
import { motion } from 'framer-motion';

const CinematicSection = ({ children, id, showLine = true }) => {
  return (
    <section 
      id={id} 
      className="cinematic-section"
      style={{ 
        minHeight: '80vh', 
        display: 'flex', 
        alignItems: 'center', 
        position: 'relative',
        padding: 'var(--spacing-2xl) 0' // Using the new compact spacing scale
      }}
    >
      {/* Left Vertical Line */}
      {/* Vertical Connection Line */}
      {showLine && (
        <div 
          className="desktop-only"
          style={{
            position: 'absolute',
            top: 0,
            left: '5%',
            width: '1px',
            height: '100%',
            background: 'linear-gradient(to bottom, transparent, var(--paper-mist) 20%, var(--paper-mist) 80%, transparent)',
            zIndex: 1
          }}
        />
      )}

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {children}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .cinematic-section { padding: 60px 0 !important; min-height: auto !important; }
        }
      `}</style>
    </section>
  );
};

export default CinematicSection;
