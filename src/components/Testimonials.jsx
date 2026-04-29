import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "La precisione e l'approfondimento dei loro video report non hanno eguali nel panorama italiano. Uno strumento indispensabile per la nostra azienda.",
    author: "Dott. Roberto Bianchi",
    role: "CFO, Tech Ventures Italy"
  },
  {
    quote: "Lo Studio D'Ambra ha saputo interpretare le complessità della Web Tax con una chiarezza disarmante. Partner affidabili e sempre all'avanguardia.",
    author: "Avv. Elena Rossi",
    role: "Legal Counsel, Global Media Group"
  }
];

const EASE = [0.16, 1, 0.3, 1];

const Testimonials = () => {
  return (
    <div style={{ width: '100%' }}>
      <p className="label-text" style={{ marginBottom: '4rem', textAlign: 'center' }}>Testimonianze</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
        {testimonials.map((t, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.2, ease: EASE }}
            style={{ position: 'relative', padding: '40px', borderLeft: '1px solid var(--primary-gold)' }}
          >
            <p style={{ 
              fontSize: '1.75rem', 
              fontFamily: "'Cormorant Garamond', serif", 
              fontStyle: 'italic', 
              color: 'var(--deep-graphite)', 
              lineHeight: '1.5',
              marginBottom: '32px'
            }}>
              "{t.quote}"
            </p>
            <div>
              <h4 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--deep-graphite)' }}>{t.author}</h4>
              <p className="label-text" style={{ fontSize: '0.7rem', color: 'var(--mid-ash)' }}>{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
