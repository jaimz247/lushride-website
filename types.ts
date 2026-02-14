import React from 'react';

export interface ServiceTier {
  id: string;
  name: string;
  category: string;
  vehicles: string[];
  features: string[];
  priceRange: string;
  image: string;
}

export interface BookingDetails {
  pickup: string;
  dropoff: string;
  date: string;
  time: string;
  tier: string;
}

export interface StandardItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}