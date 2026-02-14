import React from 'react';
import { Shield, Award, Calendar, CheckCircle2 } from 'lucide-react';
import { StandardItem, ServiceTier } from './types';

export const COLORS = {
  primary: '#FFFFFF',
  secondary: '#F5F5F5',
  accent: '#C5A059',
  charcoal: '#333333',
};

export const SERVICE_TIERS: ServiceTier[] = [
  {
    id: 'executive',
    name: 'Lush Executive',
    category: 'Corporate Excellence',
    vehicles: ['Lexus GX 460', 'Toyota Land Cruiser Prado', 'Luxury Edition Hilux'],
    features: ['Wi-Fi Enabled', 'Mineral Water', 'Professional Chauffeur', 'Standard Support'],
    priceRange: 'Starting from ₦185,000 / day',
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&q=80&w=1200' // Dark Professional Lexus
  },
  {
    id: 'royal',
    name: 'Lush Royal',
    category: 'The VIP Experience',
    vehicles: ['Mercedes-Benz S-Class (W223)', 'Range Rover Vogue', 'Lexus LX 600'],
    features: ['VIP Airport Protocol', 'Premium Refreshments', 'Luxury Fragrance', 'Priority Support', 'Full Day Hire'],
    priceRange: 'Starting from ₦550,000 / day',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=1200' // Cinematic Mercedes S-Class
  }
];

export const LUSH_STANDARDS: StandardItem[] = [
  {
    title: 'The Lush Academy',
    description: 'Our Pilots undergo rigorous 2-day elite etiquette and defensive driving training.',
    icon: <Award className="w-8 h-8 text-[#C5A059]" />
  },
  {
    title: 'Safety Tech',
    description: 'Ride Check™ monitoring, real-time SOS integration, and secure OTP verification.',
    icon: <Shield className="w-8 h-8 text-[#C5A059]" />
  },
  {
    title: 'Fleet Integrity',
    description: 'Bi-weekly multi-point vehicle inspections ensuring factory-grade performance.',
    icon: <Calendar className="w-8 h-8 text-[#C5A059]" />
  },
  {
    title: 'Seamless Protocol',
    description: 'End-to-end discrete handling for diplomats, executives, and high-profile guests.',
    icon: <CheckCircle2 className="w-8 h-8 text-[#C5A059]" />
  }
];

export const TESTIMONIALS = [
  {
    quote: "LushRide is the only service that understands the punctuality and discretion required for our board-level executives in Lagos.",
    author: "Tunde Williams",
    title: "Chief Executive Officer, TechCorp Nigeria"
  },
  {
    quote: "The VIP Airport Protocol is a game changer. From the moment I land at MMIA, I feel completely secure and well-attended to.",
    author: "Claire Dubois",
    title: "Regional Director, Expat Energy Group"
  },
  {
    quote: "Impeccable vehicles and truly professional pilots. It's the first-class travel experience extended to the road.",
    author: "Ahmed Musa",
    title: "Principal Partner, AM Law Chambers"
  }
];