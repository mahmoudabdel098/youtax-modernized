import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import Contact from '../components/Contact';
import SEO from '../components/SEO';

const EASE = [0.16, 1, 0.3, 1];

const ContactPage = () => {
  return (
    <div style={{ background: 'var(--crisp-paper-white)', minHeight: '100vh' }}>
      <SEO 
        title="Contatti" 
        description="Contatta lo Studio D'Ambra e Associati per consulenze tributarie, legali e societarie." 
      />
      
      {/* Page Hero */}
      <section style={{ paddingTop: '180px', paddingBottom: 'var(--spacing-3xl)', borderBottom: '1px solid var(--paper-mist)' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE }}
          >
            <p className="label-text" style={{ marginBottom: '1.5rem' }}>Informazioni</p>
            <h1 className="display-text" style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', marginBottom: '3rem' }}>
              Parliamo del tuo <br />
              <span style={{ fontStyle: 'italic', color: 'var(--primary-gold)' }}>prossimo passo</span>.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section style={{ padding: 'var(--spacing-3xl) 0' }}>
        <Contact />
      </section>

      {/* Info Cards Section */}
      <section style={{ background: 'var(--warm-ash-cream)', padding: 'var(--spacing-3xl) 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'var(--paper-mist)' }}>
            
            {[
              { icon: <MapPin size={20} />, label: "Sede Centrale", value: "Via Roma 10, Milano" },
              { icon: <Mail size={20} />, label: "Email", value: "studiodambraeassociati@gmail.com" },
              { icon: <Phone size={20} />, label: "Telefono", value: "+39 02 1234 5678" },
              { icon: <Clock size={20} />, label: "Orari", value: "Lun-Ven: 09:00 - 18:00" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ background: 'var(--crisp-paper-white)', padding: '48px 32px' }}
              >
                <div style={{ color: 'var(--primary-gold)', marginBottom: '24px' }}>{item.icon}</div>
                <p className="label-text" style={{ fontSize: '0.65rem', color: 'var(--mid-ash)', marginBottom: '8px' }}>{item.label}</p>
                <p style={{ fontWeight: '600', color: 'var(--deep-graphite)' }}>{item.value}</p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;
