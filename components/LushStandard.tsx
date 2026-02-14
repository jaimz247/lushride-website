import React, { useEffect, useRef, useState } from 'react';
import { LUSH_STANDARDS } from '../constants';

const StandardCard: React.FC<{ item: typeof LUSH_STANDARDS[0]; index: number }> = ({ item, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={cardRef} 
      className={`space-y-4 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="bg-white p-4 w-fit shadow-[0_10px_30px_rgba(0,0,0,0.05)] border-b-2 border-gold hover:scale-105 transition-transform duration-500">
        {item.icon}
      </div>
      <h4 className="text-xl font-bold text-[#333333] tracking-tight serif italic">{item.title}</h4>
      <p className="text-sm text-gray-500 leading-relaxed font-light">{item.description}</p>
    </div>
  );
};

const LushStandard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-12">
          <div className="space-y-6">
            <span className="text-[#C5A059] uppercase tracking-[0.4em] text-[10px] font-black">Uncompromising Safety</span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">The Lush Standard: <br className="hidden sm:block" />Built on Absolute Trust</h2>
            <p className="text-gray-500 leading-relaxed text-lg font-light">
              Navigating Lagos requires more than luxury; it requires a fortress on wheels. We've redefined mobility with a security-first approach that never compromises on your high status.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12">
            {LUSH_STANDARDS.map((item, idx) => (
              <StandardCard key={idx} item={item} index={idx} />
            ))}
          </div>

          <button className="group inline-flex items-center space-x-4 text-[#C5A059] font-bold tracking-[0.3em] uppercase text-xs hover:opacity-80 transition-all">
            <span>Read Safety Protocol</span>
            <div className="w-12 h-px bg-[#C5A059] group-hover:w-20 transition-all" />
          </button>
        </div>

        <div className="relative group hidden lg:block">
          <div className="absolute -inset-4 bg-[#C5A059]/10 rounded-none transform translate-x-8 translate-y-8 z-0 transition-transform group-hover:translate-x-4 group-hover:translate-y-4 duration-1000" />
          <div className="relative z-10 overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] bg-[#F5F5F5]">
            <img 
              src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1200" 
              alt="Lush Chauffeur Professionalism" 
              className="w-full h-[650px] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2000ms]"
            />
          </div>
          <div className="absolute top-10 left-10 z-20 bg-white p-10 shadow-2xl max-w-[220px] border-l-4 border-[#C5A059] animate-[fadeIn_1.5s_ease-out]">
            <span className="text-5xl font-bold text-[#C5A059] block mb-2 tracking-tighter">100%</span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#333333]">Vetted Elite Pilots</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LushStandard;