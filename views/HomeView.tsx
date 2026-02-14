
import React from 'react';
import Hero from '../components/Hero';
import ServiceTiers from '../components/ServiceTiers';
import LushStandard from '../components/LushStandard';
import Partnerships from '../components/Partnerships';
import AppPreview from '../components/AppPreview';
import Testimonials from '../components/Testimonials';

const HomeView: React.FC = () => {
  return (
    <>
      <Hero />
      <section id="services" className="py-24 bg-white">
        <ServiceTiers />
      </section>
      <section id="standard" className="py-24 bg-[#F5F5F5]">
        <LushStandard />
      </section>
      <section id="corporate" className="py-24 bg-white">
        <Partnerships />
      </section>
      <section id="app" className="py-24 bg-[#F5F5F5] overflow-hidden">
        <AppPreview />
      </section>
      <section id="testimonials" className="py-24 bg-white">
        <Testimonials />
      </section>
    </>
  );
};

export default HomeView;
