import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Founders from '../components/Founders';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import SEO from '../components/SEO';
import CinematicSection from '../components/CinematicSection';

const Home = () => {
  return (
    <main>
      <SEO 
        title="Home" 
        description="Benvenuti su Youtax.it, il forum indipendente di approfondimento su Diritto Tributario e delle Imprese curato dallo Studio D'Ambra e Associati." 
      />
      <Hero />
      <CinematicSection id="about"><About /></CinematicSection>
      <CinematicSection id="services"><Services /></CinematicSection>
      <CinematicSection id="founders"><Founders /></CinematicSection>
      <CinematicSection id="testimonials"><Testimonials /></CinematicSection>
      <CinematicSection id="contact"><Contact /></CinematicSection>
    </main>
  );
};

export default Home;
