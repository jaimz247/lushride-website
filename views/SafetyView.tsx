
import React from 'react';
import { Shield, Lock, Eye, Users, CheckCircle } from 'lucide-react';

const SafetyView: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Sub-Hero */}
      <div className="relative pt-48 pb-24 bg-[#333333] overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Security" />
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <span className="text-[#C5A059] uppercase tracking-[0.5em] text-[10px] font-black mb-4 block">Uncompromising Security</span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 serif italic">The Lush Standard</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto font-light">
            In Lagos, safety is the ultimate luxury. Our protocols are designed to ensure complete peace of mind from pickup to drop-off.
          </p>
        </div>
      </div>

      {/* Main Pillars */}
      <div className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold serif">01. The Lush Academy</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our "Pilots" are not just drivers. They are security-trained professionals who undergo a 72-hour vetting process and 2 days of elite etiquette training at our private academy.
              </p>
              <ul className="space-y-4">
                {['Background checked via LASG & Private Firms', 'Defensive driving certification', 'Discretion & Privacy training', 'First-aid & Emergency response'].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-sm font-bold text-[#333333]">
                    <CheckCircle className="w-5 h-5 text-[#C5A059]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="h-px bg-gray-100" />
            <div className="space-y-6">
              <h2 className="text-4xl font-bold serif">02. SafeRide™ Technology</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Every journey is monitored in real-time by our 24/7 Command Center. We use predictive AI to detect route deviations and ensure constant connectivity.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <Lock className="text-[#C5A059] mb-2" />
                  <h4 className="font-bold">Encrypted OTP</h4>
                  <p className="text-xs text-gray-500">Secure verification for every pickup.</p>
                </div>
                <div className="space-y-2">
                  <Eye className="text-[#C5A059] mb-2" />
                  <h4 className="font-bold">Real-time SOS</h4>
                  <p className="text-xs text-gray-500">Silent alarm linked to rapid response teams.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1200" alt="Training" className="w-full h-[700px] object-cover shadow-2xl grayscale" />
            <div className="absolute -bottom-10 -left-10 bg-[#C5A059] p-12 text-white shadow-2xl">
              <Shield className="w-12 h-12 mb-4" />
              <p className="text-2xl font-bold italic serif">Verified Secure</p>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Quote */}
      <div className="bg-[#333333] py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-[#C5A059] text-6xl serif italic opacity-20">"</span>
          <p className="text-3xl text-white font-light italic serif leading-relaxed mb-8">
            At LushRide, we don't just move people; we protect reputations, ensure punctuality, and guard the most precious asset of our clients: their safety.
          </p>
          <p className="text-[#C5A059] font-bold uppercase tracking-widest text-xs">— Segun Adebayo, Head of Security</p>
        </div>
      </div>
    </div>
  );
};

export default SafetyView;
