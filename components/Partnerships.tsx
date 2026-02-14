import React, { useEffect, useRef, useState } from 'react';

const Partnerships: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const logos = [
    'EKO HOTEL', 'MARRIOTT', 'RADISSON BLU', 'THE WHEATBAKER', 'TRANSCORE'
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="max-w-7xl mx-auto px-6 md:px-12 text-center overflow-hidden">
      <div className="space-y-16">
        <div className="space-y-4">
          <span className="text-[#C5A059] uppercase tracking-[0.4em] text-xs font-bold">Trusted by Industry Leaders</span>
          <h2 className="text-3xl md:text-4xl font-bold">Preferred Luxury Partners</h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
          {logos.map((logo, idx) => (
            <span 
              key={logo} 
              className={`text-2xl font-black tracking-tighter text-[#333333] hover:text-[#C5A059] cursor-default transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isVisible ? 'opacity-30 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {logo}
            </span>
          ))}
        </div>

        <div className={`pt-12 transition-all duration-[1500ms] delay-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-[#333333] p-12 md:p-20 text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 transition-transform duration-1000 group-hover:scale-125" />
            
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center text-left">
              <div className="space-y-6">
                <h3 className="text-4xl font-bold italic serif">Corporate Accounts & <br /> Diplomatic Protocol</h3>
                <p className="text-white/60 text-lg leading-relaxed font-light">
                  Join the Lush Club for preferred rates, centralized billing, and dedicated account management for your entire executive fleet.
                </p>
              </div>
              <div className="md:text-right">
                <button className="gold-gradient text-white px-12 py-5 text-[10px] font-black tracking-[0.3em] uppercase hover:opacity-95 shadow-xl transition-all active:scale-95">
                  Inquire About Corporate Accounts
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partnerships;