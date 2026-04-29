import React from 'react';
import { Link } from 'react-router-dom';

const footerLinkStyle = { 
  color: 'rgba(255,255,255,0.6)', 
  textDecoration: 'none', 
  fontSize: '0.9rem', 
  transition: 'color 0.3s' 
};

const Footer = () => {
  return (
    <footer style={{ 
      background: 'var(--deep-graphite)', 
      color: 'var(--crisp-paper-white)',
      padding: '100px 0 40px',
      position: 'relative'
    }}>
      <div className="container">
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr 1fr', gap: '80px' }}>
          
          {/* Logo & Contact Info */}
          <div className="footer-info">
            <div style={{ marginBottom: '32px' }}>
              <img src="/images/onlylogo.webp" alt="Youtax" style={{ 
                height: '48px', 
                filter: 'url(#remove-white) invert(1)'
              }} />
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '500', marginBottom: '16px', fontFamily: "'Cormorant Garamond', serif" }}>Tel. +39 02 48518723</h3>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', lineHeight: '1.8' }}>
              Via Ippodromo 7, 20151 Milano (MI)<br />
              Telefax: +39 02 49920864<br />
              studiodambraeassociati@gmail.com
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4 className="label-text" style={{ color: 'var(--primary-gold)', marginBottom: '32px', fontSize: '0.7rem' }}>Esplora</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li><Link to="/" style={footerLinkStyle}>Home</Link></li>
              <li><Link to="/chi-siamo" style={footerLinkStyle}>Chi Siamo</Link></li>
              <li><Link to="/video" style={footerLinkStyle}>Video Convegni</Link></li>
              <li><Link to="/articoli" style={footerLinkStyle}>Articoli & News</Link></li>
              <li><Link to="/contatti" style={footerLinkStyle}>Contatti</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="footer-support">
            <h4 className="label-text" style={{ color: 'var(--primary-gold)', marginBottom: '32px', fontSize: '0.7rem' }}>Legale</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li><Link to="/privacy" style={footerLinkStyle}>Privacy Policy</Link></li>
              <li><Link to="/cookie" style={footerLinkStyle}>Cookie Policy</Link></li>
              <li><Link to="/terms" style={footerLinkStyle}>Termini di Servizio</Link></li>
            </ul>
          </div>

        </div>

        <div style={{ 
          marginTop: '80px', 
          paddingTop: '40px', 
          borderTop: '1px solid rgba(255,255,255,0.05)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: 'rgba(255,255,255,0.3)',
          fontSize: '0.75rem'
        }} className="footer-bottom">
          <p>© Studio D’Ambra e Associati - All Rights Reserved 2024</p>
          <div style={{ display: 'flex', gap: '32px' }}>
            <span style={{ cursor: 'pointer' }}>LinkedIn</span>
            <span style={{ cursor: 'pointer' }}>Twitter</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 60px !important; text-align: center; }
          .footer-info div { display: flex; justify-content: center; }
          .footer-bottom { flex-direction: column; gap: 24px; text-align: center; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
