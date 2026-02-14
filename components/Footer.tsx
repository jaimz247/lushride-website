
import React from 'react';

interface FooterProps {
  onNavigate: (view: any) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#333333] text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-16 mb-24">
          <div className="md:col-span-1 space-y-8">
            <span 
              className="text-2xl font-bold tracking-widest uppercase serif cursor-pointer"
              onClick={() => onNavigate('home')}
            >
              Lush<span className="text-[#C5A059]">Ride</span>
            </span>
            <p className="text-white/40 text-sm leading-relaxed">
              Nigeria's premier luxury mobility platform. Defining the intersection of safety, status, and service in Lagos.
            </p>
            <div className="flex space-x-6 text-xs font-bold tracking-widest uppercase text-white/40">
              <a href="#" className="hover:text-[#C5A059] transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-[#C5A059] transition-colors">Instagram</a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-8 text-[#C5A059]">Services</h4>
            <ul className="space-y-4 text-[10px] font-bold uppercase tracking-widest text-white/40">
              <li><button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">Lush Executive</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">Lush Royal</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">Airport Protocol</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">Hourly Charter</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-8 text-[#C5A059]">Company</h4>
            <ul className="space-y-4 text-[10px] font-bold uppercase tracking-widest text-white/40">
              <li><button onClick={() => onNavigate('safety')} className="hover:text-white transition-colors">Safety Standard</button></li>
              <li><button onClick={() => onNavigate('corporate')} className="hover:text-white transition-colors">Corporate Club</button></li>
              <li><button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">About Lush</button></li>
              <li><button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">Contact</button></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-4 text-[#C5A059]">Headquarters</h4>
            <address className="not-italic text-sm text-white/60 leading-relaxed font-light">
              LushRide Tower,<br />
              Phase 1, Lekki,<br />
              Lagos, Nigeria
            </address>
            <div className="text-[10px] font-bold tracking-widest uppercase text-white/40">
              <p className="mb-2">concierge@lushride.com</p>
              <p className="text-white text-lg font-bold tracking-tight">+234 (0) 800 LUSH RIDE</p>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] uppercase font-bold tracking-[0.2em] text-white/20">
            © 2024 LushRide Global. All Rights Reserved.
          </p>
          <div className="flex space-x-8 text-[9px] uppercase font-bold tracking-[0.2em] text-white/20">
            <a href="#" className="hover:text-[#C5A059] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#C5A059] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#C5A059] transition-colors">LASG Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
