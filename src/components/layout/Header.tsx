import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('English');
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages = ['English', 'हिन्दी', 'தமிழ்', 'বাংলা'];
  
  const navLinks = [
    { id: 'dashboard', label: 'Live Tracker' },
    { id: 'precautions', label: 'Precautions' },
    { id: 'risk', label: 'Risk Analyzer' },
    { id: 'treatments', label: 'Treatments' },
    { id: 'factors', label: 'Driving Factors' },
    { id: 'recommendations', label: 'Your Action Plan' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md text-[#1A5276]' : 'bg-transparent text-white'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold">COVID-19 Action Hub</a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map(link => (
              <a 
                key={link.id}
                href={`#${link.id}`}
                className="hover:text-[#F1C40F] transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            
            {/* Language Selector */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-[#F1C40F]">
                <Globe size={18} />
                <span>{currentLanguage}</span>
              </button>
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg overflow-hidden z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                {languages.map(lang => (
                  <button
                    key={lang}
                    onClick={() => setCurrentLanguage(lang)}
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white text-[#1A5276] shadow-md">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map(link => (
                <a 
                  key={link.id}
                  href={`#${link.id}`}
                  className="hover:text-[#2E86C1] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="border-t border-gray-200 pt-4 mt-2">
                <p className="text-sm font-medium mb-2">Select Language</p>
                <div className="flex flex-wrap gap-2">
                  {languages.map(lang => (
                    <button
                      key={lang}
                      onClick={() => {
                        setCurrentLanguage(lang);
                        setMobileMenuOpen(false);
                      }}
                      className={`px-3 py-1 text-sm rounded-full ${
                        currentLanguage === lang 
                          ? 'bg-[#1A5276] text-white' 
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;