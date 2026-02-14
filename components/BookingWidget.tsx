import React, { useState } from 'react';
import { MapPin, Calendar, Clock, ChevronDown, Car, Loader2, Sparkles, CheckCircle, ArrowRight, Shield } from 'lucide-react';

const BookingWidget: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [quote, setQuote] = useState<string | null>(null);
  const [tier, setTier] = useState('executive');
  const [isBooked, setIsBooked] = useState(false);

  const handleGenerateQuote = () => {
    setIsGenerating(true);
    setQuote(null);
    setTimeout(() => {
      setIsGenerating(false);
      const base = tier === 'royal' ? 550000 : 185000;
      const formatted = new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(base);
      setQuote(`${formatted} (Daily Rate)`);
    }, 1500);
  };

  const handleProceed = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setIsBooked(true);
      setTimeout(() => setIsBooked(false), 5000);
    }, 1000);
  };

  if (isBooked) {
    return (
      <div className="bg-white p-10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] min-h-[420px] flex flex-col items-center justify-center text-center border-t-4 border-green-500 animate-[fadeIn_0.5s_ease-out]">
        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-[#333333] mb-3 serif italic">Inquiry Received</h3>
        <p className="text-sm text-gray-500 max-w-[260px] leading-relaxed font-light">A Lush Travel Specialist will initiate contact momentarily to finalize your elite arrangements.</p>
        <button 
          onClick={() => setIsBooked(false)}
          className="mt-8 text-[10px] font-black uppercase tracking-[0.3em] text-[#C5A059] hover:underline"
        >
          Return to Terminal
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 sm:p-10 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.25)] space-y-6 w-full max-w-md mx-auto lg:ml-auto border-t-4 border-[#C5A059] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A059]/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="space-y-1.5 relative z-10">
        <h3 className="text-3xl font-bold text-[#333333] tracking-tight serif">Plan Your Journey</h3>
        <p className="text-[10px] text-[#C5A059] font-black uppercase tracking-[0.4em]">Elite Mobility Terminal</p>
      </div>

      <div className="space-y-5 relative z-10">
        <div className="relative group/field">
          <label className="text-[9px] uppercase font-black tracking-[0.2em] text-gray-400 absolute top-2.5 left-4 group-focus-within/field:text-[#C5A059] transition-colors">Service Tier</label>
          <div className="flex items-center border-b border-gray-100 pt-8 pb-3 px-4 focus-within:border-[#C5A059] transition-all bg-gray-50/20">
            <Car className="w-4 h-4 text-[#C5A059] mr-4 flex-shrink-0" />
            <select 
              value={tier}
              onChange={(e) => setTier(e.target.value)}
              className="w-full bg-transparent focus:outline-none text-sm appearance-none cursor-pointer font-bold text-[#333333] pr-6"
            >
              <option value="executive">Lush Executive (Daily)</option>
              <option value="royal">Lush Royal (VIP Daily)</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-gray-300 absolute right-4 pointer-events-none" />
          </div>
        </div>

        <div className="relative group/field">
          <label className="text-[9px] uppercase font-black tracking-[0.2em] text-gray-400 absolute top-2.5 left-4 group-focus-within/field:text-[#C5A059] transition-colors">Pickup Location</label>
          <div className="flex items-center border-b border-gray-100 pt-8 pb-3 px-4 focus-within:border-[#C5A059] transition-all bg-gray-50/20">
            <MapPin className="w-4 h-4 text-[#C5A059] mr-4 flex-shrink-0" />
            <input 
              type="text" 
              placeholder="E.g. Murtala Muhammed Int'l Airport" 
              className="w-full bg-transparent focus:outline-none text-sm placeholder:text-gray-300 font-semibold"
            />
          </div>
        </div>

        <div className="relative group/field">
          <label className="text-[9px] uppercase font-black tracking-[0.2em] text-gray-400 absolute top-2.5 left-4 group-focus-within/field:text-[#C5A059] transition-colors">Destination</label>
          <div className="flex items-center border-b border-gray-100 pt-8 pb-3 px-4 focus-within:border-[#C5A059] transition-all bg-gray-50/20">
            <MapPin className="w-4 h-4 text-gray-300 mr-4 flex-shrink-0" />
            <input 
              type="text" 
              placeholder="E.g. Eko Atlantic City" 
              className="w-full bg-transparent focus:outline-none text-sm placeholder:text-gray-300 font-semibold"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="relative group/field">
            <label className="text-[9px] uppercase font-black tracking-[0.2em] text-gray-400 absolute top-2.5 left-4">Start Date</label>
            <div className="flex items-center border-b border-gray-100 pt-8 pb-3 px-4 bg-gray-50/20">
              <Calendar className="w-4 h-4 text-[#C5A059] mr-3 flex-shrink-0" />
              <input type="text" placeholder="Today" className="w-full bg-transparent focus:outline-none text-sm font-semibold" />
            </div>
          </div>
          <div className="relative group/field">
            <label className="text-[9px] uppercase font-black tracking-[0.2em] text-gray-400 absolute top-2.5 left-4">Time</label>
            <div className="flex items-center border-b border-gray-100 pt-8 pb-3 px-4 bg-gray-50/20">
              <Clock className="w-4 h-4 text-[#C5A059] mr-3 flex-shrink-0" />
              <input type="text" placeholder="Now" className="w-full bg-transparent focus:outline-none text-sm font-semibold" />
            </div>
          </div>
        </div>

        <div className="space-y-4 pt-4">
          {!quote ? (
            <button 
              onClick={handleGenerateQuote}
              disabled={isGenerating}
              className="w-full gold-gradient text-white py-5 text-[11px] font-black tracking-[0.3em] uppercase hover:opacity-95 shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 flex justify-center items-center group/btn"
            >
              {isGenerating ? (
                <Loader2 className="animate-spin w-5 h-5 mr-3" />
              ) : <Sparkles className="w-4 h-4 mr-3 group-hover/btn:scale-110 transition-transform" />}
              {isGenerating ? 'Validating...' : 'Calculate Elite Quote'}
            </button>
          ) : (
            <div className="space-y-4 animate-[fadeInUp_0.4s_ease-out]">
              <div className="bg-[#333333] p-5 text-center border border-[#444] rounded-sm shadow-inner relative">
                <p className="text-[9px] uppercase font-black tracking-[0.3em] text-[#C5A059] mb-1">Guaranteed Daily Valuation</p>
                <p className="text-2xl font-bold text-white tracking-tighter serif italic">{quote}</p>
                <div className="absolute top-2 right-2 opacity-10">
                  <Shield className="text-white w-8 h-8" />
                </div>
              </div>
              <button 
                onClick={handleProceed}
                className="w-full bg-[#C5A059] text-white py-5 text-[11px] font-black tracking-[0.3em] uppercase hover:bg-[#B48F48] transition-all hover:scale-[1.02] active:scale-[0.98] flex justify-center items-center shadow-lg"
              >
                {isGenerating ? <Loader2 className="animate-spin w-4 h-4 mr-3" /> : <ArrowRight className="w-4 h-4 mr-3" />}
                {isGenerating ? 'Finalizing...' : 'Request Chauffeur'}
              </button>
              <button 
                onClick={() => setQuote(null)}
                className="w-full text-[9px] text-gray-400 font-black uppercase tracking-[0.3em] hover:text-[#333333] transition-colors text-center"
              >
                Modify Journey Details
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="pt-6 flex items-center justify-between border-t border-gray-100 opacity-40">
        <span className="text-[8px] text-gray-500 font-black uppercase tracking-[0.3em] flex items-center">
          <Shield size={10} className="mr-2" /> SSL Encrypted
        </span>
        <span className="text-[8px] text-gray-500 font-black uppercase tracking-[0.3em]">Lush Private Member</span>
      </div>
    </div>
  );
};

export default BookingWidget;