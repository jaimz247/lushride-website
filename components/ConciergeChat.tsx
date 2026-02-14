import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Shield, Award } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const ConciergeChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: 'Good day. I am the Lush Private Concierge. How may I facilitate your travel arrangements in Lagos today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage = input;
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput('');
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: userMessage,
        config: {
          systemInstruction: `You are the "Lush Private Concierge," an elite digital representative for LushRide, the premier luxury mobility platform in Lagos, Nigeria. 

Core Brand Knowledge:
- LushRide is the "Business Class of Urban Travel."
- Service Tiers: 
  1. Lush Executive (₦185,000/day): Toyota Land Cruiser Prado, Luxury Hilux, Mercedes-Benz E-Class. Professionalism for the corporate world.
  2. Lush Royal (₦550,000/day): Range Rover Vogue, Lexus LX 600, Mercedes-Benz S-Class. Includes VIP Airport Protocol and premium hospitality.
- The Lush Standard: 
  - Vetted "Pilots" trained at the Lush Academy (2-day elite etiquette).
  - Safety tech includes Ride Check™ monitoring and real-time SOS integration.
- Corporate: We offer B2B contracts, 'The Lush Club' subscriptions, and diplomatic protocol services.

Tone & Persona:
- Sophisticated, professional, and impeccably polite.
- Use British English (e.g., 'centre', 'programme').
- Address the user as "Sir/Ma'am" or "Guest".
- Do not provide direct booking in the chat; guide users to the "Reserve Now" button on the site or our 24/7 hotline: +234 (0) 800 LUSH RIDE.
- Keep responses concise and impactful. Avoid overly casual language.`,
        },
      });

      const botText = response.text || "I apologize, Sir/Ma'am, my connection to the command centre is temporarily interrupted. Please allow me a moment to reconnect.";
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      console.error("Lush Concierge Error:", error);
      setMessages(prev => [...prev, { role: 'bot', text: "Forgive the delay. Our systems are currently undergoing a security update. May I suggest contacting our human concierge directly at +234 (0) 800 LUSH RIDE?" }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 sm:bottom-10 sm:right-10 z-[100]">
      {isOpen ? (
        <div className="w-[calc(100vw-3rem)] sm:w-80 bg-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] overflow-hidden animate-[fadeInUp_0.4s_ease-out] border border-gray-100 flex flex-col h-[35vh] sm:h-[400px] max-h-[480px] rounded-sm">
          {/* Compact Elegant Header */}
          <div className="bg-[#333333] p-4 flex justify-between items-center relative flex-shrink-0">
            <div className="absolute top-0 right-0 w-24 h-full bg-[#C5A059]/10 skew-x-[-20deg] translate-x-12" />
            <div className="flex items-center space-x-3 relative z-10">
              <div className="w-8 h-8 border border-[#C5A059] flex items-center justify-center bg-white/5">
                <Bot className="w-5 h-5 text-[#C5A059]" />
              </div>
              <div>
                <h4 className="text-white text-[10px] font-black uppercase tracking-[0.3em]">Lush Concierge</h4>
                <div className="flex items-center space-x-2">
                  <span className="w-1 h-1 bg-[#C5A059] rounded-full animate-pulse" />
                  <span className="text-[8px] text-white/50 uppercase font-bold tracking-widest">Digital Member</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-white/40 hover:text-white transition-colors relative z-10 p-1"
            >
              <X size={18} />
            </button>
          </div>

          {/* Secure Chat Interface */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#FDFDFD] scroll-smooth">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-[fadeIn_0.3s_ease-out]`}>
                <div className={`max-w-[88%] p-3 text-[13px] leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-[#333333] text-white rounded-l-md rounded-tr-md shadow-md' 
                    : 'bg-white text-[#333333] border border-gray-100 rounded-r-md rounded-tl-md shadow-sm font-light italic serif'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start animate-pulse">
                <div className="bg-white p-3 rounded-md border border-gray-100 shadow-sm flex items-center space-x-2">
                  <div className="w-1 h-1 bg-[#C5A059] rounded-full animate-bounce [animation-delay:-0.3s]" />
                  <div className="w-1 h-1 bg-[#C5A059] rounded-full animate-bounce [animation-delay:-0.15s]" />
                  <div className="w-1 h-1 bg-[#C5A059] rounded-full animate-bounce" />
                </div>
              </div>
            )}
          </div>

          {/* Luxury Input Field */}
          <div className="p-3 bg-white border-t border-gray-50 flex items-center space-x-2 flex-shrink-0">
            <input 
              type="text" 
              placeholder="Inquire..."
              className="flex-1 bg-gray-50 border-none px-4 py-3 text-[10px] font-bold tracking-widest uppercase focus:ring-1 focus:ring-[#C5A059] outline-none placeholder:text-gray-300 transition-all"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button 
              onClick={handleSend}
              disabled={isTyping || !input.trim()}
              className="p-3 bg-[#333333] text-white hover:bg-[#C5A059] transition-all active:scale-95 disabled:opacity-30 disabled:pointer-events-none"
            >
              <Send size={14} />
            </button>
          </div>
          
          <div className="bg-gray-50 px-4 py-1.5 border-t border-gray-100 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center space-x-1.5 opacity-20">
              <Shield size={8} className="text-[#333333]" />
              <span className="text-[7px] font-black uppercase tracking-widest text-[#333333]">Secure</span>
            </div>
            <div className="flex items-center space-x-1.5 opacity-20">
              <Award size={8} className="text-[#333333]" />
              <span className="text-[7px] font-black uppercase tracking-widest text-[#333333]">Verified</span>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center space-x-3 bg-white p-3 shadow-[0_20px_40px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_40px_rgba(197,160,89,0.2)] transition-all duration-500 border border-gray-100"
        >
          <div className="flex flex-col items-end pr-1">
            <span className="text-[8px] text-[#C5A059] font-black uppercase tracking-[0.3em] leading-none mb-1 opacity-60 group-hover:opacity-100 transition-opacity">Private Concierge</span>
            <span className="text-[11px] font-bold text-[#333333] uppercase tracking-widest leading-none">Inquire</span>
          </div>
          <div className="w-10 h-10 gold-gradient flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-500 relative">
            <MessageSquare className="w-5 h-5 text-white relative z-10" />
          </div>
        </button>
      )}
    </div>
  );
};

export default ConciergeChat;