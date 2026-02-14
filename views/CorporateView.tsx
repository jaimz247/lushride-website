import React, { useState } from 'react';
import { Building2, ArrowRight, CheckCircle2, Loader2, Mail, User, Car, Sparkles, Shield } from 'lucide-react';

const CorporateView: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [tier, setTier] = useState('executive');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }, 2000);
  };

  return (
    <div className="bg-white">
      {/* Sub-Hero */}
      <div className="relative pt-48 pb-24 bg-[#F5F5F5] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl">
            <span className="text-[#C5A059] uppercase tracking-[0.5em] text-[10px] font-black mb-4 block">Institutional Mobility</span>
            <h1 className="text-5xl md:text-7xl font-bold text-[#333333] mb-6 serif italic">Corporate Solutions</h1>
            <p className="text-gray-500 text-lg font-light leading-relaxed">
              Consolidate your executive travel with LushRide's institutional tier. Preferred rates, dedicated fleets, and centralized administrative control for Lagos' leading firms.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#C5A059]/5 -skew-x-12 transform translate-x-1/2" />
      </div>

      {/* Main Section */}
      <div className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-12">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold serif leading-tight">Elite B2B <br />Institutional Standards</h2>
              <p className="text-gray-500 font-light leading-relaxed text-lg">
                We provide end-to-end mobility management for Nigeria's leading corporations and diplomatic missions. Our partners enjoy priority allocation and dedicated concierge support.
              </p>
            </div>

            <div className="grid gap-8">
              {/* Lush Club */}
              <div className="bg-[#333333] p-12 text-white space-y-6 relative overflow-hidden group border-l-4 border-[#C5A059]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 transition-transform group-hover:scale-150" />
                <h3 className="text-2xl font-bold serif italic">The Lush Club</h3>
                <ul className="space-y-4">
                  {['Priority fleet allocation 24/7', 'Dedicated Account Concierge', 'Monthly centralized billing'].map((item, i) => (
                    <li key={i} className="flex items-center space-x-4 text-xs font-bold text-white/80 uppercase tracking-widest">
                      <Shield className="w-4 h-4 text-[#C5A059]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Institutional Fleet */}
              <div className="bg-white border border-gray-100 p-12 space-y-6 shadow-sm border-l-4 border-gray-100">
                <h3 className="text-2xl font-bold serif italic text-[#333333]">Fleet Integrity</h3>
                <ul className="space-y-4">
                  {['Dedicated on-site dispatchers', 'White-labeled guest experiences', 'Fixed annual rate cards'].map((item, i) => (
                    <li key={i} className="flex items-center space-x-4 text-xs font-bold text-[#333333] uppercase tracking-widest">
                      <Building2 className="w-4 h-4 text-[#C5A059]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Platinum Corporate Booking Terminal */}
          <div className="bg-white p-8 sm:p-12 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border-t-4 border-[#C5A059] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#C5A059]/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="mb-10 relative z-10">
              <h3 className="text-3xl font-bold text-[#333333] serif">Institutional Inquiry</h3>
              <p className="text-[10px] text-[#C5A059] font-black uppercase tracking-[0.3em] mt-2">B2B Priority Partnership Request</p>
            </div>

            {submitted ? (
              <div className="text-center py-24 space-y-6 animate-[fadeIn_0.5s_ease-out]">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto">
                   <CheckCircle2 className="w-8 h-8 text-green-500" />
                </div>
                <h4 className="text-2xl font-bold serif">Inquiry Logged</h4>
                <p className="text-sm text-gray-500 font-light max-w-xs mx-auto">A Corporate Relations Manager will initiate contact within one business day to discuss your requirements.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="space-y-4">
                  <div className="relative group/field">
                    <label className="text-[9px] uppercase font-bold tracking-widest text-gray-400 absolute top-3 left-4 transition-colors group-focus-within/field:text-[#C5A059]">Organization Name</label>
                    <div className="flex items-center border-b border-gray-100 pt-8 pb-3 px-4 focus-within:border-[#C5A059] transition-colors bg-gray-50/20">
                      <Building2 className="w-4 h-4 text-[#C5A059] mr-3" />
                      <input required type="text" placeholder="E.g. Sterling Trust Nigeria" className="w-full bg-transparent focus:outline-none text-sm font-medium" />
                    </div>
                  </div>

                  <div className="relative group/field">
                    <label className="text-[9px] uppercase font-bold tracking-widest text-gray-400 absolute top-3 left-4 transition-colors group-focus-within/field:text-[#C5A059]">Contact Person</label>
                    <div className="flex items-center border-b border-gray-100 pt-8 pb-3 px-4 focus-within:border-[#C5A059] transition-colors bg-gray-50/20">
                      <User className="w-4 h-4 text-[#C5A059] mr-3" />
                      <input required type="text" placeholder="Full Name & Position" className="w-full bg-transparent focus:outline-none text-sm font-medium" />
                    </div>
                  </div>

                  <div className="relative group/field">
                    <label className="text-[9px] uppercase font-bold tracking-widest text-gray-400 absolute top-3 left-4 transition-colors group-focus-within/field:text-[#C5A059]">Official Email</label>
                    <div className="flex items-center border-b border-gray-100 pt-8 pb-3 px-4 focus-within:border-[#C5A059] transition-colors bg-gray-50/20">
                      <Mail className="w-4 h-4 text-[#C5A059] mr-3" />
                      <input required type="email" placeholder="executive@organization.com" className="w-full bg-transparent focus:outline-none text-sm font-medium" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative group/field">
                      <label className="text-[9px] uppercase font-bold tracking-widest text-gray-400 absolute top-3 left-4">Est. Monthly Rides</label>
                      <div className="flex items-center border-b border-gray-100 pt-8 pb-3 px-4 bg-gray-50/20">
                        <select className="w-full bg-transparent focus:outline-none text-sm font-medium appearance-none cursor-pointer">
                          <option>10 - 50 journeys</option>
                          <option>51 - 200 journeys</option>
                          <option>200+ journeys</option>
                        </select>
                      </div>
                    </div>
                    <div className="relative group/field">
                      <label className="text-[9px] uppercase font-bold tracking-widest text-gray-400 absolute top-3 left-4">Service Tier</label>
                      <div className="flex items-center border-b border-gray-100 pt-8 pb-3 px-4 bg-gray-50/20">
                        <Car className="w-4 h-4 text-[#C5A059] mr-2" />
                        <select 
                          value={tier}
                          onChange={(e) => setTier(e.target.value)}
                          className="w-full bg-transparent focus:outline-none text-sm font-medium appearance-none cursor-pointer"
                        >
                          <option value="executive">Executive</option>
                          <option value="royal">Royal VIP</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gold-gradient text-white py-6 text-[10px] sm:text-[11px] font-black tracking-[0.3em] uppercase shadow-2xl hover:opacity-90 hover:scale-[1.01] transition-all active:scale-[0.98] flex justify-center items-center group"
                >
                  {isSubmitting ? (
                    <Loader2 className="animate-spin w-5 h-5 mr-3" />
                  ) : <Sparkles className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />}
                  {isSubmitting ? 'Processing Inquiry...' : 'Request Formal Proposal'}
                </button>
              </form>
            )}
            
            <div className="mt-8 pt-6 border-t border-gray-50 flex items-center justify-between opacity-40">
               <span className="text-[8px] font-black uppercase tracking-widest flex items-center">
                 <Shield size={10} className="mr-1.5" /> Data Encrypted
               </span>
               <span className="text-[8px] font-black uppercase tracking-widest">Priority Handling</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateView;