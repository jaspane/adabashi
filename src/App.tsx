import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedProperties from './components/FeaturedProperties';
import Services from './components/Services';
import MarketInsights from './components/MarketInsights';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <FeaturedProperties />
      <Services />
      <MarketInsights />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;