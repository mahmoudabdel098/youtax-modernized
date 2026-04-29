import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from './MagneticButton';

const EASE = [0.16, 1, 0.3, 1];

const inputStyle = {
  width: '100%',
  background: 'transparent',
  border: 'none',
  outline: 'none',
  padding: '16px 0',
  fontSize: '1.25rem',
  fontFamily: "'Cormorant Garamond', serif",
  color: 'var(--deep-graphite)',
  transition: 'border-color 0.3s'
};

const Contact = () => {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      
      {/* Background Large "CONTACT" text for cinematic feel */}
      <div style={{ 
        position: 'absolute', 
        top: '-10%', 
        right: '0', 
        fontSize: '12vw', 
        fontWeight: '900', 
        color: 'var(--paper-mist)', 
        opacity: 0.2, 
        zIndex: 0,
        pointerEvents: 'none',
        letterSpacing: '-0.05em'
      }}>
        CONTACT
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '100px', alignItems: 'flex-start' }}>
          
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
            className="contact-info"
            style={{ paddingTop: '40px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '2rem' }}>
              <span style={{ width: '30px', height: '1px', background: 'var(--primary-gold)' }}></span>
              <p className="label-text" style={{ color: 'var(--primary-gold)' }}>Contatti</p>
            </div>
            
            <h2 className="display-text" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.1', color: 'var(--deep-graphite)', marginBottom: '32px' }}>
              Parla con un <br />
              <span style={{ fontStyle: 'italic', color: 'var(--primary-gold)', fontWeight: '300' }}>esperto</span> oggi.
            </h2>
            
            <p style={{ color: 'var(--soft-charcoal)', fontSize: '1.25rem', lineHeight: '1.6', marginBottom: '60px', maxWidth: '40ch', fontWeight: '300' }}>
              Hai domande sui nostri report o desideri accedere ai video dei convegni? Compila il modulo e un nostro consulente ti contatterà al più presto.
            </p>
            
            <div className="contact-details" style={{ marginTop: '80px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
               <div>
                  <p className="label-text" style={{ fontSize: '0.6rem', color: 'var(--mid-ash)', marginBottom: '12px', letterSpacing: '0.2em' }}>Ufficio Milano</p>
                  <p style={{ fontSize: '1rem', fontWeight: '600' }}>Via Roma 10, 20121 Milano (MI)</p>
               </div>
               <div>
                  <p className="label-text" style={{ fontSize: '0.6rem', color: 'var(--mid-ash)', marginBottom: '12px', letterSpacing: '0.2em' }}>Inviaci un'Email</p>
                  <p style={{ fontSize: '1rem', fontWeight: '600' }}>studiodambrae@gmail.com</p>
               </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <div className="contact-form-container" style={{ position: 'relative' }}>
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onSubmit={handleSubmit}
                  className="contact-form"
                  style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '48px',
                    background: 'var(--crisp-paper-white)',
                    padding: '80px',
                    border: '1px solid var(--paper-mist)',
                    boxShadow: '40px 40px 100px rgba(0,0,0,0.02)',
                    position: 'relative'
                  }}
                >
                  {/* Noise overlay for form */}
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'url("https://www.transparenttextures.com/patterns/felt.png")', opacity: 0.02, pointerEvents: 'none' }} />

                  <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>
                    <div style={{ borderBottom: '1px solid var(--paper-mist)', paddingBottom: '8px', position: 'relative' }}>
                      <span className="label-text" style={{ fontSize: '0.6rem', color: 'var(--mid-ash)', letterSpacing: '0.1em' }}>Nome</span>
                      <input type="text" required style={inputStyle} />
                    </div>
                    <div style={{ borderBottom: '1px solid var(--paper-mist)', paddingBottom: '8px', position: 'relative' }}>
                      <span className="label-text" style={{ fontSize: '0.6rem', color: 'var(--mid-ash)', letterSpacing: '0.1em' }}>Cognome</span>
                      <input type="text" required style={inputStyle} />
                    </div>
                  </div>
                  
                  <div style={{ borderBottom: '1px solid var(--paper-mist)', paddingBottom: '8px', position: 'relative' }}>
                    <span className="label-text" style={{ fontSize: '0.6rem', color: 'var(--mid-ash)', letterSpacing: '0.1em' }}>Email Aziendale</span>
                    <input type="email" required style={inputStyle} />
                  </div>
                  
                  <div style={{ borderBottom: '1px solid var(--paper-mist)', paddingBottom: '8px', position: 'relative' }}>
                    <span className="label-text" style={{ fontSize: '0.6rem', color: 'var(--mid-ash)', letterSpacing: '0.1em' }}>Messaggio</span>
                    <textarea rows="3" required style={{ ...inputStyle, resize: 'none', paddingTop: '12px' }}></textarea>
                  </div>
                  
                  <div style={{ marginTop: '20px' }}>
                    <MagneticButton 
                      type="submit" 
                      className="btn-primary"
                      style={{ width: '100%', padding: '24px' }}
                    >
                      Invia Richiesta
                    </MagneticButton>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ 
                    background: 'var(--crisp-paper-white)',
                    padding: '120px 80px',
                    border: '1px solid var(--primary-gold)',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '600px'
                  }}
                >
                  <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--primary-gold)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '40px' }}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <h3 className="display-text" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Ricevuto.</h3>
                  <p style={{ color: 'var(--soft-charcoal)', fontSize: '1.1rem' }}>Il nostro team ti contatterà nelle prossime 24 ore lavorative.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 60px !important; }
          .contact-info { text-align: center; padding-top: 0 !important; }
          .contact-info div:first-child { justify-content: center; }
          .contact-info p:nth-child(3) { margin: 0 auto 40px !important; }
          .contact-details { margin-top: 40px !important; gap: 32px !important; }
          .contact-form { padding: 40px 24px !important; gap: 32px !important; }
          .form-row { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </div>
  );
};

export default Contact;
