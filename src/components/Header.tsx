import React, { useState, useEffect } from 'react';
import { Scale, Phone, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer transform hover:scale-105 transition-transform duration-300">
            <div className="relative">
              <Scale className={`h-8 w-8 transform transition-all duration-300 ${
                isScrolled ? 'text-blue-800' : 'text-white'
              } group-hover:rotate-12`} />
              <div className="absolute inset-0 scale-150 opacity-20 bg-gradient-to-r from-blue-600 to-amber-500 rounded-full blur-md group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>
            <span className={`text-xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              СемейноеПраво
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {['services', 'advantages', 'team', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`relative px-4 py-2 font-medium transition-all duration-300 group ${
                  isScrolled ? 'text-gray-700 hover:text-blue-800' : 'text-white hover:text-amber-400'
                }`}
              >
                {item === 'services' && 'Услуги'}
                {item === 'advantages' && 'Преимущества'}
                {item === 'team' && 'Команда'}
                {item === 'contact' && 'Контакты'}
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </button>
            ))}
          </nav>

          {/* Phone */}
          <div className="hidden lg:flex items-center space-x-2">
            <Phone className={`h-5 w-5 ${isScrolled ? 'text-blue-800' : 'text-white'}`} />
            <span className={`font-semibold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              +7 (495) 123-45-67
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="py-4 space-y-4 bg-white/95 backdrop-blur-md rounded-lg mt-2 border border-gray-200">
            {['services', 'advantages', 'team', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-800 hover:bg-blue-50 transition-colors duration-300"
              >
                {item === 'services' && 'Услуги'}
                {item === 'advantages' && 'Преимущества'}
                {item === 'team' && 'Команда'}
                {item === 'contact' && 'Контакты'}
              </button>
            ))}
            <div className="px-4 py-2 border-t border-gray-200">
              <div className="flex items-center space-x-2 text-blue-800">
                <Phone className="h-5 w-5" />
                <span className="font-semibold">+7 (495) 123-45-67</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;