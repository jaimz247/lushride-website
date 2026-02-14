import React, { useEffect, useRef, useState } from 'react';

const AppPreview: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1 relative h-[600px] sm:h-[700px] flex justify-center perspective-1000">
          <div className={`absolute top-0 left-0 md:left-20 w-64 sm:w-72 h-[500px] sm:h-[580px] bg-[#1a1a1a] rounded-[3.5rem] border-[12px] border-[#222] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden z-20 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? 'translate-y-0 opacity-100 rotate-0' : 'translate-y-40 opacity-0 -rotate-3'}`}>
            <div className="h-full p-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#C5A059] flex items-center justify-center mb-10">
                   <span className="text-white font-black text-xl">L</span>
                </div>
                <div className="space-y-6">
                  <div className="h-4 w-2/3 bg-white/5 rounded-full" />
                  <div className="h-24 w-full bg-white/5 rounded-2xl border border-white/10" />
                </div>
              </div>
              <div className="h-16 w-full gold-gradient flex items-center justify-center rounded-xl">
                 <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">Confirm Booking</span>
              </div>
            </div>
          </div>

          <div className={`absolute bottom-0 right-0 md:right-20 w-64 sm:w-72 h-[500px] sm:h-[580px] bg-white rounded-[3.5rem] border-[12px] border-gray-100 shadow-[0_30px_60px_-12px_rgba(0,0,0,0.2)] overflow-hidden z-10 transition-all duration-1000 delay-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? 'translate-y-0 opacity-100 rotate-0' : 'translate-y-60 opacity-0 rotate-3'}`}>
             <div className="h-full bg-gray-50 flex flex-col p-8 space-y-6">
                <div className="h-full w-full bg-white rounded-3xl shadow-inner border border-gray-100 flex items-center justify-center">
                   <div className="text-center p-6">
                      <div className="w-16 h-16 gold-gradient rounded-full mx-auto mb-4 animate-pulse" />
                      <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Pilot Arriving</p>
                   </div>
                </div>
              </div>
          </div>
        </div>

        <div className={`order-1 lg:order-2 space-y-8 transition-all duration-1000 delay-500 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
          <span className="text-[#C5A059] uppercase tracking-[0.5em] text-[10px] font-bold">Technology for the 1%</span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">Seamless Command of Your Movement</h2>
          <p className="text-gray-500 text-lg font-light leading-relaxed max-w-xl">
            The LushRide App is your private digital terminal. Control your fleet, verify your pilot with encrypted OTPs, and monitor your security via silent SOS alerts in real-time.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="flex items-center px-6 py-3 bg-black text-white rounded-xl hover:scale-105 transition-all border border-white/10 shadow-2xl group">
              <svg className="w-7 h-7 mr-3 fill-white" viewBox="0 0 384 512">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 21.8-88.5 21.8-11.4 0-51.1-20.8-82.9-20.1-41.9.8-80.8 24.5-102.4 62.1-44.1 76.6-11.3 190.4 31.1 251.7 20.8 29.9 45.4 63.3 77.3 62.1 30.6-1.1 42.2-19.8 79.1-19.8 36.8 0 47.4 19.8 79.7 19.2 33.2-.5 54.4-30.2 74.9-60.2 23.6-34.5 33.2-67.9 33.5-69.6-.8-.3-64.3-24.7-64.6-97.6zM285.4 78.4c15.1-18.3 25.4-43.9 22.6-69.3-21.8 1-48.4 14.7-64.1 33.1-14.1 16.5-26.6 42.5-23.2 67 24.3 1.9 49.3-12.4 64.7-30.8z"/>
              </svg>
              <div className="text-left">
                <div className="text-[8px] uppercase font-bold tracking-widest opacity-50">Download on the</div>
                <div className="text-base font-bold leading-none">App Store</div>
              </div>
            </button>

            <button className="flex items-center px-6 py-3 bg-black text-white rounded-xl hover:scale-105 transition-all border border-white/10 shadow-2xl group">
              <svg className="w-7 h-7 mr-3 fill-white" viewBox="0 0 512 512">
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
              </svg>
              <div className="text-left">
                <div className="text-[8px] uppercase font-bold tracking-widest opacity-50">Get it on</div>
                <div className="text-base font-bold leading-none">Google Play</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppPreview;