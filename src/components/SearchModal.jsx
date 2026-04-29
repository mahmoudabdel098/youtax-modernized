import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search as SearchIcon } from 'lucide-react';

const SearchModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(255, 255, 255, 0.98)',
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: '15vh'
          }}
        >
          <button 
            onClick={onClose}
            style={{ 
              position: 'absolute', 
              top: '40px', right: '5%', 
              background: 'none', border: 'none', 
              cursor: 'pointer', color: 'var(--deep-graphite)' 
            }}
          >
            <X size={32} strokeWidth={1} />
          </button>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ width: '90%', maxWidth: '800px' }}
          >
            <p className="label-text" style={{ marginBottom: '2rem', textAlign: 'center' }}>Cerca nel Forum Youtax</p>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              borderBottom: '2px solid var(--deep-graphite)',
              paddingBottom: '16px'
            }}>
              <SearchIcon size={32} strokeWidth={1.5} style={{ marginRight: '24px', color: 'var(--primary-gold)' }} />
              <input 
                autoFocus
                placeholder="Digita per cercare articoli, video o convegni..."
                style={{
                  width: '100%',
                  border: 'none',
                  outline: 'none',
                  fontSize: '2rem',
                  fontFamily: "'Cormorant Garamond', serif",
                  background: 'transparent'
                }}
              />
            </div>

            <div style={{ marginTop: '60px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
               <div>
                  <h4 className="label-text" style={{ fontSize: '0.7rem', color: 'var(--mid-ash)', marginBottom: '16px' }}>Suggerimenti</h4>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                     {['Riforma Fiscale 2024', 'Web Tax', 'Trusts', 'Contenzioso'].map(s => (
                       <li key={s} style={{ fontSize: '1.1rem', cursor: 'pointer', color: 'var(--deep-graphite)' }}>{s}</li>
                     ))}
                  </ul>
               </div>
               <div>
                  <h4 className="label-text" style={{ fontSize: '0.7rem', color: 'var(--mid-ash)', marginBottom: '16px' }}>Ultimi Video</h4>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                     {['Economia Digitale', 'IRPEF Report'].map(s => (
                       <li key={s} style={{ fontSize: '1.1rem', cursor: 'pointer', color: 'var(--deep-graphite)' }}>{s}</li>
                     ))}
                  </ul>
               </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;
