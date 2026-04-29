import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import SEO from '../components/SEO';

const EASE = [0.16, 1, 0.3, 1];

const videos = [
  {
    title: "Economia Digitale e Web Tax: La Sfida del 2024",
    date: "15 Marzo 2024",
    category: "Convegno",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800&h=500"
  },
  {
    title: "Riforma dell'IRPEF: Analisi dei Nuovi Scaglioni",
    date: "10 Febbraio 2024",
    category: "Report Video",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800&h=500"
  },
  {
    title: "Criptovalute e Stabile Organizzazione",
    date: "22 Gennaio 2024",
    category: "Seminario",
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&q=80&w=800&h=500"
  },
  {
    title: "Il Futuro del Diritto Penale Tributario",
    date: "05 Dicembre 2023",
    category: "Intervista",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800&h=500"
  },
  {
    title: "Pianificazione Fiscale Internazionale Post-BEPS",
    date: "18 Novembre 2023",
    category: "Convegno",
    image: "https://images.unsplash.com/photo-1521791136364-758a4e394383?auto=format&fit=crop&q=80&w=800&h=500"
  },
  {
    title: "Trusts e Tutela del Patrimonio Familiare",
    date: "02 Novembre 2023",
    category: "Report Video",
    image: "https://images.unsplash.com/photo-1444653300602-86aa896173b7?auto=format&fit=crop&q=80&w=800&h=500"
  }
];

const VideoPage = () => {
  return (
    <div style={{ paddingTop: '120px', background: 'var(--crisp-paper-white)', minHeight: '100vh' }}>
      <SEO 
        title="Video Convegni" 
        description="Esplora la nostra videoteca di convegni e report tecnici su diritto tributario, web tax e fiscalità internazionale." 
      />
      <section className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          style={{ marginBottom: '80px' }}
        >
          <p className="label-text" style={{ marginBottom: '1rem' }}>Contenuti Multimediali</p>
          <h1 className="headline-text" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '2rem' }}>
            Video <span style={{ fontStyle: 'italic', color: 'var(--primary-gold)' }}>Convegni & Report</span>
          </h1>
          <p style={{ color: 'var(--mid-ash)', maxWidth: '600px' }}>
            Accedi alla nostra videoteca esclusiva dedicata all'approfondimento della normativa tributaria e delle sfide dell'economia digitale.
          </p>
        </motion.div>

        <div className="video-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
          gap: '1px', 
          background: 'var(--paper-mist)', 
          marginBottom: '120px',
          border: '1px solid var(--paper-mist)'
        }}>
          {videos.map((video, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              style={{ background: 'var(--crisp-paper-white)', padding: '32px', cursor: 'pointer' }}
              whileHover={{ background: 'var(--warm-ash-cream)' }}
            >
              <div style={{ position: 'relative', width: '100%', height: '240px', overflow: 'hidden', marginBottom: '24px', background: 'var(--paper-mist)' }}>
                <img 
                  src={video.image} 
                  alt={video.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800&h=500';
                  }}
                />
                <div style={{ 
                  position: 'absolute', 
                  top: '50%', left: '50%', 
                  transform: 'translate(-50%, -50%)',
                  width: '60px', height: '60px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.9)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--deep-graphite)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                }}>
                  <Play size={24} fill="currentColor" />
                </div>
              </div>
              <p className="label-text" style={{ fontSize: '0.65rem', color: 'var(--primary-gold)', marginBottom: '12px' }}>{video.category} • {video.date}</p>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--deep-graphite)', fontWeight: '500', fontFamily: "'Cormorant Garamond', serif", lineHeight: '1.3' }}>{video.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .video-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default VideoPage;
