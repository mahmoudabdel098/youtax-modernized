import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const EASE = [0.16, 1, 0.3, 1];

const team = [
  {
    name: "Avv. Vito D'Ambra",
    role: "Fondatore - Avvocato Cassazionista",
    image: "https://globaluserfiles.com/media/2796_f256271dfe2bcc1526f5376cae47fd41d788d443.jpeg/v1/w_470,h_450/vitodambra.jpg",
    bio: "Vito D’Ambra è Avvocato abilitato al patrocinio dinanzi alla Suprema Corte di Cassazione, nonché Consulente Legale tributario. Fondatore dello Studio nel 2002, ha maturato innumerevoli esperienze come Docente presso il Master Bocconi, la Business School del Sole 24 Ore e diverse Università. È ideatore ed editore del Forum Youtax, modernizzando l'informazione di approfondimento attraverso il video."
  },
  {
    name: "Avv. Marco Stangalini",
    role: "Of Counsel - Esperto Tributario & Trusts",
    image: "https://globaluserfiles.com/media/2796_d584102549b483f41466586ff131b1bc2dca4b66.jpeg/v1/w_470,h_450/marcostangalini-.jpg",
    bio: "Avvocato esperto di Diritto Tributario e Trusts con esperienza internazionale in Italia, Svizzera e San Marino. Dal 2010 è Trustee full member di STEP (The Society of Trust and Estate Practitioners). Ha contribuito attivamente alla creazione di YOUTAX, condividendo i valori di modernizzazione e approfondimento della materia."
  },
  {
    name: "Avv. Prof. Pasquale Dui",
    role: "Of Counsel - Diritto Civile & del Lavoro",
    image: "https://globaluserfiles.com/media/2796_9d45c6350d6b4a3cd376ff6509b452199e08a688.jpeg/v1/w_470,h_450/pasqualedui--.jpg",
    bio: "Avvocato in Milano dal 1982, Professore presso l'Università Milano Bicocca. Autore di 13 libri e oltre 200 monografie scientifiche. Collabora continuativamente dal 1989 con il Sole 24 Ore. Specializzato in complesse operazioni di riorganizzazione e ristrutturazione societaria."
  },
  {
    name: "Avv. Pasquale Fiorentino",
    role: "Of Counsel - Diritto Penale d'Impresa",
    image: "https://globaluserfiles.com/media/2796_cbf6e059337d9b25c1edbd7ff1f4332d6c360bb8.jpeg/v1/w_470,h_450/pasqualefiorentino3-.jpg",
    bio: "Esperto in Diritto Penale, specializzato in reati societari e tributari presso l'Università Cattolica del Sacro Cuore di Milano. Si occupa quotidianamente di attività giudiziale e stragiudiziale con particolare attenzione all'ordinamento sovranazionale e al Diritto Penale Europeo."
  },
  {
    name: "Dott. Enrico Lanzalone",
    role: "Dottore in Giurisprudenza",
    image: "https://globaluserfiles.com/media/2796_27565fda959515614a2ab18bef4939b6557fae66.jpeg/v1/w_470,h_450/enricolanzalone.jpg",
    bio: "Laureatosi nel 2018 maximo cum laude, è specializzato in profili tributari, societari e giuslaboristi. Collabora attivamente al supporto di ogni attività dello Studio. Oltre all'attività professionale, è articolista storico per riviste online e autore di romanzi fantastici-storici."
  }
];

const AboutPage = () => {
  return (
    <div style={{ paddingTop: '120px', background: 'var(--crisp-paper-white)', minHeight: '100vh' }}>
      <SEO 
        title="Chi Siamo" 
        description="Scopri la storia e il team di Studio D'Ambra e Associati - Youtax. Eccellenza nel diritto tributario e societario dal 2002." 
      />
      
      {/* Hero Section */}
      <section className="container" style={{ marginBottom: '120px' }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '2rem' }}>
            <span style={{ width: '40px', height: '1px', background: 'var(--primary-gold)' }}></span>
            <p className="label-text">Il Nostro Studio</p>
          </div>
          <h1 className="display-text" style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', marginBottom: '3rem', color: 'var(--deep-graphite)' }}>
            Per noi i vostri problemi <br />
            <span style={{ fontStyle: 'italic', color: 'var(--primary-gold)', fontWeight: '300' }}>sono sfide.</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--soft-charcoal)', lineHeight: '1.7', maxWidth: '80ch', fontWeight: '300' }}>
            I nostri clienti sono per noi delle persone con aziende e lavoratori, con famiglie e patrimoni da tutelare e difendere e non aridi fascicoli. Interpretiamo la legge sempre nel rispetto dei principi costituzionali e internazionali.
          </p>
        </motion.div>
      </section>

      {/* History & Philosophy */}
      <section style={{ background: 'var(--warm-ash-cream)', padding: '120px 0' }}>
        <div className="container">
          <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '100px' }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: EASE }}
            >
              <h2 className="headline-text" style={{ marginBottom: '2rem' }}>La Nostra <span style={{ color: 'var(--primary-gold)' }}>Storia</span></h2>
              <p style={{ color: 'var(--soft-charcoal)', lineHeight: '1.8', marginBottom: '24px' }}>
                Lo studio legale D’Ambra e Associati fu fondato nel 2002 da Vito D’Ambra allorquando egli lasciò lo Studio Uckmar Magnani Marongiu. In questi anni lo studio si è progressivamente ampliato, dedicandosi al contenzioso, alla consulenza tributaria e penale, nonché al diritto societario, trusts e tutela dei diritti cinematografici e dello sport.
              </p>
              <p style={{ color: 'var(--soft-charcoal)', lineHeight: '1.8' }}>
                D’Ambra e Associati è divenuto Editor di YOUTAX, forum indipendente online di Diritto Tributario e della Impresa. Un progetto nato per modernizzare l'informazione di approfondimento attraverso video, trovando nell'Avv. Stangalini una condivisione totale dei valori del progetto.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: EASE }}
              style={{ background: 'var(--crisp-paper-white)', padding: '60px', border: '1px solid var(--paper-mist)', boxShadow: '40px 40px 80px rgba(0,0,0,0.02)' }}
            >
              <h3 style={{ fontSize: '1.5rem', fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', color: 'var(--primary-gold)', marginBottom: '2rem' }}>La nostra Filosofia Professionale</h3>
              <p style={{ color: 'var(--soft-charcoal)', lineHeight: '1.8', marginBottom: '24px' }}>
                Non ci limitiamo a un’asettica disamina dei problemi giuridici, ma intendiamo comprenderli attraverso un’ “immersione” nella impresa e nella sua realtà vivace.
              </p>
              <p style={{ color: 'var(--soft-charcoal)', lineHeight: '1.8' }}>
                Perseguiamo questo fine posizionandoci “a lato” - e non “di fronte” - ai giuristi d’impresa e ai manager, con la totale disponibilità ad affrontare le questioni “insieme”.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container" style={{ padding: '120px 0' }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '80px', textAlign: 'center' }}
        >
          <p className="label-text" style={{ marginBottom: '1rem' }}>Expertise</p>
          <h2 className="headline-text">Il Team & <span style={{ fontStyle: 'italic', color: 'var(--primary-gold)' }}>Of Counsel</span></h2>
        </motion.div>

        <div className="team-list" style={{ display: 'flex', flexDirection: 'column', gap: '120px' }}>
          {team.map((member, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              style={{ 
                display: 'grid', 
                gridTemplateColumns: idx % 2 === 0 ? '1fr 1.5fr' : '1.5fr 1fr', 
                gap: '80px', 
                alignItems: 'center' 
              }}
              className="team-member-row"
            >
              {idx % 2 === 0 ? (
                <>
                  <div style={{ position: 'relative', aspectRatio: '1/1', overflow: 'hidden' }}>
                    <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)' }} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '2.5rem', fontFamily: "'Cormorant Garamond', serif", marginBottom: '8px' }}>{member.name}</h3>
                    <p className="label-text" style={{ color: 'var(--primary-gold)', marginBottom: '32px' }}>{member.role}</p>
                    <p style={{ color: 'var(--soft-charcoal)', lineHeight: '1.8', fontSize: '1.1rem', fontWeight: '300' }}>{member.bio}</p>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <h3 style={{ fontSize: '2.5rem', fontFamily: "'Cormorant Garamond', serif", marginBottom: '8px' }}>{member.name}</h3>
                    <p className="label-text" style={{ color: 'var(--primary-gold)', marginBottom: '32px' }}>{member.role}</p>
                    <p style={{ color: 'var(--soft-charcoal)', lineHeight: '1.8', fontSize: '1.1rem', fontWeight: '300' }}>{member.bio}</p>
                  </div>
                  <div style={{ position: 'relative', aspectRatio: '1/1', overflow: 'hidden' }}>
                    <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)' }} />
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ background: 'var(--deep-graphite)', color: 'var(--crisp-paper-white)', padding: '100px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="display-text" style={{ color: 'var(--crisp-paper-white)', marginBottom: '3rem', fontSize: '3rem' }}>Hai bisogno di consulenza specialistica?</h2>
          <Link to="/contatti" style={{ textDecoration: 'none' }}>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary" 
              style={{ background: 'var(--primary-gold)', padding: '24px 64px' }}
            >
              Parla con un esperto
            </motion.button>
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 60px !important; }
          .team-member-row { grid-template-columns: 1fr !important; gap: 40px !important; text-align: center; }
          .team-member-row > div:first-child { order: 1; }
          .team-member-row > div:last-child { order: 2; }
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
