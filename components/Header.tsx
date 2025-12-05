import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onNavigate: (id: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', value: 'partnerships' },
    { name: 'Process', value: 'process' },
    { name: 'Portfolio', value: 'portfolio' },
    { name: 'Philosophy', value: 'philosophy' },
    { name: 'Consultation', value: 'consultation' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-paper-cream/95 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button 
          onClick={() => handleNavClick('home')} 
          className="font-serif text-2xl font-black tracking-tight text-paper-black hover:text-paper-gold transition-colors"
        >
          Paperly Studio
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => handleNavClick(link.value)}
              className="relative group text-sm font-serif font-bold tracking-widest uppercase text-paper-black hover:text-paper-secondary transition-colors"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-paper-secondary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-paper-black p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-paper-cream border-b border-gray-200 py-4 px-6 md:hidden shadow-xl animate-fade-in-down">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={() => handleNavClick(link.value)}
                className="text-left text-lg font-serif font-bold text-paper-black hover:text-paper-gold transition-colors"
              >
                {link.name}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};