import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-slate-800' : 'text-white'
            }`}>
              Alex Adabashi
            </h1>
            <span className={`ml-3 text-sm transition-colors duration-300 ${
              isScrolled ? 'text-amber-600' : 'text-amber-400'
            }`}>
              Luxury Real Estate
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {['About', 'Properties', 'Services', 'Market', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm font-medium transition-colors duration-300 hover:text-amber-500 ${
                  isScrolled ? 'text-slate-700' : 'text-white'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+17025551234" className={`flex items-center space-x-1 text-sm transition-colors duration-300 ${
              isScrolled ? 'text-slate-700 hover:text-amber-600' : 'text-white hover:text-amber-400'
            }`}>
              <Phone size={16} />
              <span>(702) 555-1234</span>
            </a>
            <a href="mailto:alex@adabashi.com" className={`flex items-center space-x-1 text-sm transition-colors duration-300 ${
              isScrolled ? 'text-slate-700 hover:text-amber-600' : 'text-white hover:text-amber-400'
            }`}>
              <Mail size={16} />
              <span>alex@adabashi.com</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 transition-colors duration-300 ${
              isScrolled ? 'text-slate-700' : 'text-white'
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-sm border-t border-slate-200">
            <nav className="py-4 space-y-3">
              {['About', 'Properties', 'Services', 'Market', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-2 text-slate-700 hover:text-amber-600 hover:bg-amber-50 transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
              <div className="px-4 pt-3 border-t border-slate-200 space-y-2">
                <a href="tel:+17025551234" className="flex items-center space-x-2 text-slate-600 hover:text-amber-600">
                  <Phone size={16} />
                  <span>(702) 555-1234</span>
                </a>
                <a href="mailto:alex@adabashi.com" className="flex items-center space-x-2 text-slate-600 hover:text-amber-600">
                  <Mail size={16} />
                  <span>alex@adabashi.com</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;