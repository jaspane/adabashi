import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-2">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Huntington & Ellis</h3>
            <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Your trusted partner in Las Vegas luxury real estate. With over 15 years of experience, 
              I deliver exceptional results and personalized service to discerning clients.
            </p>
            <div className="space-y-2 sm:space-y-3">
              <a href="tel:+17025551234" className="flex items-center text-gray-400 hover:text-amber-400 transition-colors duration-200">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                <span className="text-sm sm:text-base">(702) 555-1234</span>
              </a>
              <a href="mailto:alex@adabashi.com" className="flex items-center text-gray-400 hover:text-amber-400 transition-colors duration-200">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                <span className="text-sm sm:text-base break-all">info@huntingtonandellis.com</span>
              </a>
              <div className="flex items-start text-gray-400">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-2 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base">1234 Investment Blvd<br />Las Vegas, NV 89101</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-1 sm:space-y-2">
              {['About', 'Properties', 'Services', 'Market Insights', 'Testimonials', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase().replace(' ', ''));
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-400 hover:text-amber-400 transition-colors duration-200 text-sm sm:text-base"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Services</h4>
            <ul className="space-y-1 sm:space-y-2 text-gray-400 text-sm sm:text-base">
              <li>Investment Strategy</li>
              <li>Portfolio Analysis</li>
              <li>Market Research</li>
              <li>Wealth Planning</li>
              <li>Risk Assessment</li>
              <li>Concierge Services</li>
            </ul>
          </div>

          {/* Areas Served */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Areas Served</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Summerlin</li>
              <li>Henderson</li>
              <li>Las Vegas Strip</li>
              <li>Spanish Hills</li>
              <li>Red Rock Country Club</li>
              <li>The Ridges</li>
            </ul>
          </div>
        </div>

        {/* Social Media & Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
            <div className="flex items-center space-x-4 sm:space-x-6">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-200">
                <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-200">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-200">
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-200">
                <Youtube className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
            
            <div className="text-xs sm:text-sm text-gray-400 text-center sm:text-right">
              <span>© 2024 Alex Adabashi. All rights reserved.</span>
              <span>Licensed Real Estate Broker - Nevada License #123456</span>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-slate-800 text-xs text-gray-500 text-center px-4">
          <p>
            Equal Housing Opportunity. All information deemed reliable but not guaranteed. 
            Square footage and lot size are approximate. Buyers should verify all information.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;