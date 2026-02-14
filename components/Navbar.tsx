import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
  currentView: string;
  onNavigate: (view: any) => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled, currentView, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Safety', id: 'safety' },
    { name: 'Corporate', id: 'corporate' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled || isMenuOpen
          ? 'bg-white shadow-sm py-4' 
          : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center cursor-pointer" onClick={() => handleNavClick('home')}>
          <span className={`text-2xl font-bold tracking-[0.2em] uppercase serif ${scrolled || isMenuOpen ? 'text-[#333333]' : 'text-white'}`}>
            Lush<span className="text-[#C5A059]">Ride</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-12">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-[10px] font-black tracking-[0.3em] uppercase transition-all duration-300 border-b-2 ${
                currentView === link.id 
                  ? 'border-[#C5A059] text-[#C5A059]' 
                  : `border-transparent ${scrolled ? 'text-[#333333] hover:text-[#C5A059]' : 'text-white/80 hover:text-white'}`
              }`}
            >
              {link.name}
            </button>
          ))}
          <div className="w-px h-6 bg-gray-200 mx-4 opacity-30" />
          <button 
            onClick={() => handleNavClick('home')}
            className="gold-gradient text-white px-8 py-4 rounded-none text-[9px] font-black tracking-[0.3em] uppercase transition-all duration-300 hover:opacity-90 hover:scale-105 active:scale-95 shadow-xl"
          >
            RESERVE NOW
          </button>
        </div>

        {/* Mobile items */}
        <div className="lg:hidden flex items-center space-x-6">
          <a href="tel:+234800LUSHRIDE" className={`${scrolled || isMenuOpen ? 'text-[#C5A059]' : 'text-white'} transition-colors`}>
            <Phone size={20} />
          </a>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="z-[60] p-2"
          >
            {isMenuOpen 
              ? <X size={28} className="text-[#333333]" /> 
              : <Menu size={28} className={scrolled ? 'text-[#333333]' : 'text-white'} />
            }
          </button>
        </div>
      </div>

      {/* Refined Mobile Dropdown */}
      <div 
        className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-[0_30px_60px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${isMenuOpen ? 'max-h-[500px] opacity-100 border-t border-gray-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="flex flex-col p-8 space-y-2">
          {navLinks.map((link, idx) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-left py-4 text-sm font-black tracking-[0.2em] uppercase transition-all duration-500 transform ${isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'} ${currentView === link.id ? 'text-[#C5A059]' : 'text-[#333333] hover:text-[#C5A059]'}`}
              style={{ transitionDelay: `${idx * 75}ms` }}
            >
              {link.name}
            </button>
          ))}
          <div className="pt-8 mt-4 border-t border-gray-50">
            <button 
              onClick={() => handleNavClick('home')} 
              className={`gold-gradient text-white w-full py-6 text-[11px] font-black tracking-[0.3em] uppercase shadow-2xl transition-all duration-700 transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
              style={{ transitionDelay: '300ms' }}
            >
              RESERVE YOUR JOURNEY
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
