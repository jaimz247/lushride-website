import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="text-center mb-20 space-y-4">
        <span className="text-[#C5A059] uppercase tracking-[0.4em] text-[10px] font-black">Distinguished Voices</span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Client Perspectives</h2>
        <div className="w-16 h-[2px] gold-gradient mx-auto mt-6" />
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        {TESTIMONIALS.map((t, idx) => (
          <div 
            key={idx} 
            className="bg-white p-10 shadow-[0_20px_40px_rgba(0,0,0,0.03)] border-t-2 border-transparent hover:border-[#C5A059] transition-all duration-500 group"
          >
            <Quote className="w-10 h-10 text-[#C5A059] opacity-20 mb-8 group-hover:opacity-40 transition-opacity" />
            <p className="text-[#333333] italic serif text-lg leading-relaxed mb-8">
              "{t.quote}"
            </p>
            <div className="pt-6 border-t border-gray-50">
              <h4 className="font-bold text-[#333333] tracking-tight">{t.author}</h4>
              <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest mt-1">{t.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
