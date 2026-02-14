import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { SERVICE_TIERS } from '../constants';

const ServiceTiers: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="text-center mb-20 space-y-4">
        <span className="text-[#C5A059] uppercase tracking-[0.5em] text-[10px] font-black">Choose Your Standard</span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Lush Fleet Tiers</h2>
        <div className="w-16 h-[2px] gold-gradient mx-auto mt-6" />
      </div>

      <div className="grid lg:grid-cols-2 gap-16">
        {SERVICE_TIERS.map((tier) => (
          <div 
            key={tier.id} 
            className="group relative bg-white border border-gray-100 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:shadow-[0_40px_100px_-30px_rgba(0,0,0,0.15)] hover:-translate-y-3 hover:scale-[1.02] cursor-default"
          >
            <div className="relative h-[450px] overflow-hidden">
              <img 
                src={tier.image} 
                alt={tier.name} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-700 group-hover:opacity-100 opacity-90" />
              <div className="absolute bottom-12 left-12 right-12 transition-transform duration-500 group-hover:translate-y-[-10px]">
                <span className="text-[#C5A059] uppercase tracking-[0.4em] text-[9px] font-black block mb-3">{tier.category}</span>
                <h3 className="text-4xl text-white font-bold tracking-tight mb-2 italic serif">{tier.name}</h3>
                <p className="text-white/60 text-sm font-medium tracking-wide">{tier.vehicles.join('  •  ')}</p>
              </div>
            </div>

            <div className="p-12 space-y-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {tier.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3 group/feat">
                    <div className="w-5 h-5 rounded-full bg-[#C5A059]/10 flex items-center justify-center transition-colors group-hover/feat:bg-[#C5A059]">
                       <Check className="w-3 h-3 text-[#C5A059] transition-colors group-hover/feat:text-white" />
                    </div>
                    <span className="text-sm text-gray-500 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-10 border-t border-gray-50 flex items-center justify-between">
                <div>
                  <span className="text-[9px] uppercase tracking-[0.3em] text-gray-400 font-black block mb-1">Standard Rate</span>
                  <span className="text-2xl font-bold text-[#333333] tracking-tighter">{tier.priceRange}</span>
                </div>
                <button className="flex items-center space-x-4 bg-[#333333] text-white px-10 py-5 text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-[#C5A059] transition-all group/btn active:scale-95">
                  <span>SELECT</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-2" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceTiers;