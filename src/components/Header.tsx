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
        <div className="flex justify-between items-center py-3 sm:py-4">
          <div className="flex items-center">
            <h1 className={`text-lg sm:text-xl lg:text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-slate-800' : 'text-white'
            }`}>
              Alex Adabashi
            </h1>
            <span className={`ml-2 sm:ml-3 text-xs sm:text-sm transition-colors duration-300 ${
              isScrolled ? 'text-amber-600' : 'text-amber-400'
            }`}>
              <span className="hidden sm:inline">Investment Advisors</span>
              <span className="sm:hidden">Advisors</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {['About', 'Properties', 'Services', 'Market', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm lg:text-base font-medium transition-colors duration-300 hover:text-amber-500 ${
                  isScrolled ? 'text-slate-700' : 'text-white'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            <a href="tel:+17025551234" className={`flex items-center space-x-1 text-sm transition-colors duration-300 ${
              isScrolled ? 'text-slate-700 hover:text-amber-600' : 'text-white hover:text-amber-400'
            }`}>
              <Phone className="w-3 h-3 lg:w-4 lg:h-4" />
              <span>(702) 555-1234</span>
            </a>
            <a href="mailto:alex@adabashi.com" className={`flex items-center space-x-1 text-sm transition-colors duration-300 ${
              isScrolled ? 'text-slate-700 hover:text-amber-600' : 'text-white hover:text-amber-400'
            }`}>
              <Mail className="w-3 h-3 lg:w-4 lg:h-4" />
              <span className="hidden xl:inline">info@huntingtonandellis.com</span>
              <span className="xl:hidden">Contact</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-1 sm:p-2 transition-colors duration-300 ${
              isScrolled ? 'text-slate-700' : 'text-white'
            }`}
          >
            {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-slate-200">
            <nav className="py-3 sm:py-4 space-y-2 sm:space-y-3">
              {['About', 'Properties', 'Services', 'Market', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-2 text-sm sm:text-base text-slate-700 hover:text-amber-600 hover:bg-amber-50 transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
              <div className="px-4 pt-2 sm:pt-3 border-t border-slate-200 space-y-2">
                <a href="tel:+17025551234" className="flex items-center space-x-2 text-slate-600 hover:text-amber-600">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm sm:text-base">(702) 555-1234</span>
                </a>
                <a href="mailto:alex@adabashi.com" className="flex items-center space-x-2 text-slate-600 hover:text-amber-600">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm sm:text-base">info@huntingtonandellis.com</span>
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