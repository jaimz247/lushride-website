import React from 'react';
import { Check, ShieldCheck, MapPin, Clock, Star } from 'lucide-react';
import { SERVICE_TIERS } from '../constants';

const ServicesView: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Sub-Hero */}
      <div className="relative pt-48 pb-24 bg-[#333333] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Fleet" />
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <span className="text-[#C5A059] uppercase tracking-[0.5em] text-[10px] font-black mb-4 block">World-Class Fleet</span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 serif italic">Our Luxury Tiers</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto font-light">
            Meticulously curated vehicles for the discerning traveler. From bulletproof SUVs to whisper-quiet executive sedans.
          </p>
        </div>
      </div>

      {/* Fleet Deep Dive */}
      <div className="py-24 max-w-7xl mx-auto px-6 md:px-12 space-y-32">
        {SERVICE_TIERS.map((tier, idx) => (
          <div key={tier.id} className={`flex flex-col lg:flex-row items-center gap-16 ${idx % 1 === 0 ? '' : 'lg:flex-row-reverse'}`}>
            <div className="lg:w-1/2 relative group overflow-hidden shadow-2xl">
              <img src={tier.image} alt={tier.name} className="w-full h-[500px] object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                <span className="text-[#C5A059] font-bold text-xs tracking-widest uppercase">{tier.category}</span>
              </div>
            </div>
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-4xl font-bold serif">{tier.name}</h2>
              <p className="text-gray-600 text-lg leading-relaxed">{tier.features.join(' • ')}</p>
              
              <div className="space-y-4">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-[#C5A059]">Included in this tier</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {tier.vehicles.map((v, i) => (
                    <div key={i} className="flex items-center space-x-3 text-sm font-medium text-[#333333]">
                      <Star className="w-4 h-4 text-[#C5A059]" />
                      <span>{v}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-gray-100 flex items-center justify-between">
                <div>
                   <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Standard Daily Rate</p>
                   <p className="text-3xl font-bold text-[#333333] tracking-tight">{tier.priceRange}</p>
                </div>
                <button className="gold-gradient text-white px-10 py-5 text-[10px] font-black tracking-widest uppercase shadow-xl hover:opacity-90 transition-all">
                  Request Quote
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Special Services */}
      <div className="bg-[#F5F5F5] py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16 space-y-4">
            <span className="text-[#C5A059] uppercase tracking-[0.4em] text-[10px] font-black">Beyond Transport</span>
            <h2 className="text-4xl font-bold">Premium Protocol Offerings</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Airport Protocol', desc: 'VIP lounge access and expedited immigration clearing at MMIA.', icon: <MapPin className="text-[#C5A059]" /> },
              { title: 'Secure Dispatch', desc: 'Secure transport for high-value assets and sensitive documents.', icon: <ShieldCheck className="text-[#C5A059]" /> },
              { title: 'Full Day Charter', desc: 'Dedicated pilot and vehicle for complete Lagos command and movement.', icon: <Clock className="text-[#C5A059]" /> }
            ].map((s, i) => (
              <div key={i} className="bg-white p-12 shadow-sm border-b-4 border-transparent hover:border-[#C5A059] transition-all group">
                <div className="mb-6 group-hover:scale-110 transition-transform">{s.icon}</div>
                <h3 className="text-xl font-bold mb-4">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesView;