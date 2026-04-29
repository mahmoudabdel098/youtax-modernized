import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const EASE = [0.16, 1, 0.3, 1];

const articles = [
  {
    title: "La Riforma Fiscale 2024: Cosa cambia per le Imprese",
    author: "Vito D'Ambra",
    date: "20 Marzo 2024",
    excerpt: "Un'analisi dettagliata dei nuovi decreti legislativi attuativi della delega fiscale e l'impatto sulla gestione aziendale."
  },
  {
    title: "Web Tax e stabile organizzazione nell'era digitale",
    author: "Marco Stangalini",
    date: "12 Marzo 2024",
    excerpt: "Come la normativa nazionale si sta adattando alle linee guida OCSE sulla tassazione dei giganti del tech."
  },
  {
    title: "Il Superbonus e la disciplina dei crediti d'imposta",
    author: "Redazione Youtax",
    date: "05 Marzo 2024",
    excerpt: "Le ultime novità normative sul blocco delle cessioni e le prospettive per i contribuenti nel 2024."
  },
  {
    title: "Trust e segregazione patrimoniale: profili tributari",
    author: "Marco Stangalini",
    date: "25 Febbraio 2024",
    excerpt: "Un approfondimento sulla recente giurisprudenza in materia di imposta di successione e donazione applicata ai trust."
  },
  {
    title: "Responsabilità penale-tributaria degli amministratori",
    author: "Vito D'Ambra",
    date: "15 Febbraio 2024",
    excerpt: "L'estensione della responsabilità ex D.Lgs. 231/01 ai reati tributari e i modelli di organizzazione necessari."
  },
  {
    title: "Interpelli e ruling: strumenti di certezza fiscale",
    author: "Redazione Youtax",
    date: "01 Febbraio 2024",
    excerpt: "Come utilizzare al meglio gli strumenti di interlocuzione con l'Agenzia delle Entrate per prevenire il contenzioso."
  }
];

const ArticlesPage = () => {
  return (
    <div style={{ paddingTop: '120px', background: 'var(--warm-ash-cream)', minHeight: '100vh' }}>
      <SEO 
        title="Articoli" 
        description="Leggi i nostri approfondimenti sulle evoluzioni del diritto tributario, societario e delle nuove tecnologie." 
      />
      <section className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          style={{ marginBottom: '80px' }}
        >
          <p className="label-text" style={{ marginBottom: '1rem' }}>Pubblicazioni</p>
          <h1 className="headline-text" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '2rem' }}>
            Articoli di <span style={{ fontStyle: 'italic', color: 'var(--primary-gold)' }}>Approfondimento</span>
          </h1>
          <p style={{ color: 'var(--mid-ash)', maxWidth: '600px' }}>
            Le analisi dei nostri esperti sulle evoluzioni del diritto tributario e societario, per una visione chiara e strategica.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '32px', marginBottom: '120px' }}>
          {articles.map((article, index) => (
            <motion.article 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="article-card"
              style={{ 
                background: 'var(--crisp-paper-white)', 
                padding: '48px', 
                border: '1px solid var(--paper-mist)',
                display: 'grid',
                gridTemplateColumns: '1fr 2.5fr',
                gap: '48px',
                alignItems: 'start'
              }}
              whileHover={{ borderColor: 'var(--primary-gold)', y: -5 }}
            >
              <div className="article-meta">
                 <p className="label-text" style={{ fontSize: '0.65rem', color: 'var(--primary-gold)', marginBottom: '12px' }}>{article.date}</p>
                 <p style={{ fontSize: '0.85rem', color: 'var(--mid-ash)', fontWeight: '500' }}>Autore: <span style={{ color: 'var(--deep-graphite)' }}>{article.author}</span></p>
              </div>
              <div className="article-content">
                <h3 style={{ fontSize: '1.75rem', color: 'var(--deep-graphite)', fontWeight: '500', marginBottom: '16px', fontFamily: "'Cormorant Garamond', serif", lineHeight: '1.2' }}>{article.title}</h3>
                <p style={{ color: 'var(--soft-charcoal)', lineHeight: '1.7', marginBottom: '24px', fontSize: '1.05rem' }}>{article.excerpt}</p>
                <a href="#" style={{ color: 'var(--primary-gold)', fontWeight: '600', textDecoration: 'none', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  Leggi l'articolo <span style={{ fontSize: '1.2rem' }}>→</span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
        {/* Publications Archive Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ marginTop: '120px', borderTop: '1px solid var(--paper-mist)', paddingTop: '80px' }}
        >
          <p className="label-text" style={{ marginBottom: '2rem', color: 'var(--primary-gold)' }}>Archivio Pubblicazioni</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '40px' }}>
            {[
              { year: "2018", title: "Cenni Introduttivi sul Trust", source: "Rivista di Diritto Tributario on line" },
              { year: "2008", title: "Profilo Fiscale del Trust Svizzero", source: "Quaderni Trust Ipsoa" },
              { year: "2008", title: "Trusts in Svizzera", source: "Business and Tax" },
              { year: "2008", title: "Taxation of Trust in Italy", source: "Business and Tax" },
              { year: "2007", title: "Orientamenti Giurisprudenziali recenti", source: "Business and Tax" }
            ].map((pub, idx) => (
              <div key={idx} style={{ paddingBottom: '24px', borderBottom: '1px solid var(--paper-mist)' }}>
                <span style={{ fontSize: '0.7rem', color: 'var(--mid-ash)', display: 'block', marginBottom: '8px' }}>{pub.year}</span>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--deep-graphite)', marginBottom: '4px', fontFamily: "'Cormorant Garamond', serif" }}>{pub.title}</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--soft-charcoal)', fontStyle: 'italic' }}>{pub.source}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .article-card { grid-template-columns: 1fr !important; gap: 24px !important; padding: 32px 24px !important; }
          .article-meta { border-bottom: 1px solid var(--paper-mist); padding-bottom: 16px; }
        }
      `}</style>
    </div>
  );
};

export default ArticlesPage;
