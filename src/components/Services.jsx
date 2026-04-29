import React from 'react';
import { Building2, Briefcase, FileText, Users, Landmark, Scale } from 'lucide-react';
import { motion } from 'framer-motion';

const areas = [
  { icon: <Landmark size={20} strokeWidth={1} />, title: "Consulenza Tributaria" },
  { icon: <Scale size={20} strokeWidth={1} />, title: "Contenzioso Tributario" },
  { icon: <Building2 size={20} strokeWidth={1} />, title: "Diritto Societario" },
  { icon: <Briefcase size={20} strokeWidth={1} />, title: "Trusts & Patrimoni" },
  { icon: <FileText size={20} strokeWidth={1} />, title: "Fiscalità Internazionale" },
  { icon: <Users size={20} strokeWidth={1} />, title: "Diritti Cinema & Sport" }
];

const EASE = [0.16, 1, 0.3, 1];

const Services = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '100px', alignItems: 'center' }}>
      
      {/* Left Column */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <p className="label-text" style={{ marginBottom: '1.5rem' }}>Specializzazioni</p>
        <h2 className="headline-text" style={{ color: 'var(--deep-graphite)', marginBottom: '32px' }}>
          Competenza <br />
          <span style={{ fontStyle: 'italic', color: 'var(--primary-gold)' }}>multidisciplinare</span>
        </h2>
        <p style={{ color: 'var(--soft-charcoal)', fontSize: '1.125rem', lineHeight: '1.6', marginBottom: '48px', maxWidth: '40ch' }}>
          Lo Studio D'Ambra e Associati offre assistenza specialistica in tutte le aree del diritto tributario e societario, con una particolare attenzione alle sfide dell'economia digitale e dei mercati internazionali.
        </p>
        <button className="btn-outline">Scopri di più</button>
      </motion.div>

      {/* Right Column - Service Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--paper-mist)', border: '1px solid var(--paper-mist)' }}>
        {areas.map((area, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{ 
              background: 'var(--crisp-paper-white)', 
              padding: '48px 32px',
              cursor: 'pointer'
            }}
            whileHover={{ background: 'var(--warm-ash-cream)' }}
          >
            <div style={{ color: 'var(--primary-gold)', marginBottom: '24px' }}>
              {area.icon}
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '500', color: 'var(--deep-graphite)' }}>{area.title}</h3>
          </motion.div>
        ))}
      </div>

    </div>
  );
};

export default Services;
