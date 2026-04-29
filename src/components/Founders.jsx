import React from 'react';
import { motion } from 'framer-motion';

const team = [
  {
    name: "Vito D'Ambra",
    role: "Avvocato Cassazionista - Fondatore",
    description: "Fondatore dello studio nel 2002. Esperto in Diritto Tributario e Penale Societario. Docente per oltre dieci anni presso il Master Bocconi e la Business School del Sole 24 Ore. Membro della Tax Commission U.I.A.",
    image: "https://globaluserfiles.com/media/2796_f256271dfe2bcc1526f5376cae47fd41d788d443.jpeg/v1/w_470,h_450/vitodambra.jpg"
  },
  {
    name: "Marco Stangalini",
    role: "Avvocato - Of Counsel",
    description: "Esperto di Diritto Tributario e Trusts con esperienza in Svizzera e San Marino. Trustee full member STEP. Ha contribuito alla creazione di YOUTAX come forum indipendente di approfondimento legale.",
    image: "https://globaluserfiles.com/media/2796_d584102549b483f41466586ff131b1bc2dca4b66.jpeg/v1/w_470,h_450/marcostangalini-.jpg"
  },
  {
    name: "Pasquale Dui",
    role: "Avvocato - Of Counsel",
    description: "Opera dal 1982 in ambito civile e del lavoro. Professore presso l'Università Milano Bicocca. Collaboratore continuativo del Sole 24 Ore dal 1989 e autore di oltre 13 libri specialistici.",
    image: "https://globaluserfiles.com/media/2796_9d45c6350d6b4a3cd376ff6509b452199e08a688.jpeg/v1/w_470,h_450/pasqualedui--.jpg"
  },
  {
    name: "Pasquale Fiorentino",
    role: "Avvocato - Of Counsel",
    description: "Esperto in Diritto Penale dell'Impresa. Specializzato in reati societari e tributari presso l'Università Cattolica del Sacro Cuore di Milano. Membro attivo della Camera Penale.",
    image: "https://globaluserfiles.com/media/2796_cbf6e059337d9b25c1edbd7ff1f4332d6c360bb8.jpeg/v1/w_470,h_450/pasqualefiorentino3-.jpg"
  },
  {
    name: "Enrico Lanzalone",
    role: "Dottore in Giurisprudenza",
    description: "Specializzato in profili tributari e societari. Collabora attivamente al supporto di ogni attività dello studio. È inoltre autore di romanzi fantastici-storici e articolista per riviste online.",
    image: "https://globaluserfiles.com/media/2796_27565fda959515614a2ab18bef4939b6557fae66.jpeg/v1/w_470,h_450/enricolanzalone.jpg"
  }
];

const EASE = [0.16, 1, 0.3, 1];

const Founders = () => {
  return (
    <div style={{ width: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '4rem' }}>
        <span style={{ width: '40px', height: '1px', background: 'var(--primary-gold)' }}></span>
        <p className="label-text">Il Team & Of Counsel</p>
      </div>

      <div className="founders-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '80px' }}>
        {team.map((member, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: i * 0.1, ease: EASE }}
            style={{ position: 'relative' }}
          >
            {/* Image Frame with Editorial Filter */}
            <div style={{ 
              position: 'relative', 
              aspectRatio: '1/1', 
              overflow: 'hidden', 
              marginBottom: '32px',
              background: 'var(--paper-mist)',
              border: '1px solid var(--paper-mist)'
            }}>
              <motion.img 
                src={member.image} 
                alt={member.name} 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  filter: 'grayscale(100%) contrast(1.1) brightness(0.9)'
                }} 
                whileHover={{ 
                  filter: 'grayscale(0%) contrast(1) brightness(1)',
                  scale: 1.05
                }}
                transition={{ duration: 0.8, ease: EASE }}
              />
              <div style={{ 
                position: 'absolute', 
                bottom: 0, left: 0, right: 0, 
                height: '60px', 
                background: 'linear-gradient(to top, rgba(0,0,0,0.3), transparent)',
                pointerEvents: 'none'
              }} />
            </div>

            {/* Content */}
            <div style={{ paddingRight: '20px' }}>
              <h3 style={{ 
                fontSize: '1.75rem', 
                color: 'var(--deep-graphite)', 
                marginBottom: '8px', 
                fontFamily: "'Cormorant Garamond', serif" 
              }}>
                {member.name}
              </h3>
              <p className="label-text" style={{ color: 'var(--primary-gold)', marginBottom: '20px', fontSize: '0.65rem', textTransform: 'uppercase' }}>
                {member.role}
              </p>
              <p style={{ 
                color: 'var(--soft-charcoal)', 
                fontSize: '0.95rem', 
                lineHeight: '1.6',
                fontWeight: '300'
              }}>
                {member.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .founders-grid { grid-template-columns: 1fr !important; gap: 60px !important; }
        }
      `}</style>
    </div>
  );
};

export default Founders;
