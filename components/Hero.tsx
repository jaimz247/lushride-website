import React, { useState, useEffect } from 'react';
import BookingWidget from './BookingWidget';
import { X, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [showMobileBooking, setShowMobileBooking] = useState(false);
  
  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-screen w-full flex items-center overflow-hidden bg-black">
      {/* Parallax Cinematic Background */}
      <div 
        className="absolute inset-0 z-0 will-change-transform" 
        style={{ transform: `translateY(${offsetY * 0.4}px)` }}
      >
        <div className="absolute inset-0 bg-black/60 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?auto=format&fit=crop&q=80&w=2000"
          className="w-full h-full object-cover transition-opacity duration-1000 scale-105"
        >
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-car-driving-on-a-city-street-at-night-4032-large.mp4" 
            type="video/mp4" 
          />
          <img 
            src="https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?auto=format&fit=crop&q=80&w=2000" 
            alt="LushRide Premium Travel" 
            className="w-full h-full object-cover brightness-75" 
          />
        </video>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full pt-16">
        {/* Slightly shifted up to reveal more background base */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center transform lg:-translate-y-6">
          <div className="text-center lg:text-left space-y-6 sm:space-y-8 animate-[fadeIn_1s_ease-out]">
            <div className="space-y-4">
              <span className="text-[#C5A059] uppercase tracking-[0.5em] text-[10px] font-black block">The Platinum Standard</span>
              <h1 className="text-4xl sm:text-5xl md:text-8xl text-white font-bold leading-[1.05] serif">
                Business Class <br className="hidden sm:block" /> 
                <span className="italic font-normal">on the Road.</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/60 font-light max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Seamless, secure, and status-aligned mobility for Lagos' discerning elite.
              </p>
            </div>
            
            <div className="pt-2 flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-6">
              <button 
                onClick={() => setShowMobileBooking(true)} 
                className="lg:hidden gold-gradient text-white px-10 py-5 text-[10px] font-black tracking-[0.3em] uppercase shadow-2xl transition-all hover:scale-105 active:scale-95"
              >
                Reserve Your Journey
              </button>
              <button className="hidden lg:flex border border-white/20 text-white px-12 py-5 text-[10px] font-black tracking-[0.3em] uppercase hover:border-[#C5A059] hover:text-[#C5A059] bg-white/5 backdrop-blur-sm transition-all group items-center justify-center">
                <span>View Private Fleet</span>
                <ChevronRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
              </button>
            </div>
          </div>

          {/* Desktop Booking Widget - Adjusted size and position */}
          <div className="hidden lg:block animate-[fadeInRight_1.2s_ease-out] self-center">
            <BookingWidget />
          </div>
        </div>
      </div>

      {/* Mobile Booking Bottom Sheet Modal */}
      {showMobileBooking && (
        <div className="fixed inset-0 z-[120] lg:hidden flex items-end animate-[fadeIn_0.2s_ease-out]">
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-md" 
            onClick={() => setShowMobileBooking(false)} 
          />
          <div className="relative w-full bg-white rounded-t-[2.5rem] max-h-[92vh] overflow-y-auto animate-[fadeInUp_0.4s_ease-out] shadow-[0_-25px_60px_rgba(0,0,0,0.6)]">
            <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-5 border-b border-gray-50 flex justify-between items-center z-10">
              <div className="w-12 h-1.5 bg-gray-200 rounded-full absolute top-3 left-1/2 -translate-x-1/2" />
              <div className="flex flex-col text-left pt-2">
                <h3 className="text-xs font-black uppercase tracking-widest serif text-[#333333]">Elite Booking</h3>
                <span className="text-[8px] text-[#C5A059] font-black uppercase tracking-widest">Lush Private Terminal</span>
              </div>
              <button 
                onClick={() => setShowMobileBooking(false)} 
                className="p-2 bg-gray-50 rounded-full text-gray-400 hover:text-black transition-colors"
              >
                <X size={18} />
              </button>
            </div>
            <div className="px-4 pb-12 pt-4">
              <BookingWidget />
            </div>
          </div>
        </div>
      )}

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden lg:block opacity-30 hover:opacity-100 transition-opacity">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-[9px] text-white uppercase tracking-[0.5em] font-black rotate-90 translate-x-2.5 mb-10">DISCOVER</span>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
        </div>
      </div>
    </div>
  );
};

export default Hero;