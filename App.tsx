
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ConciergeChat from './components/ConciergeChat';

// Views
import HomeView from './views/HomeView';
import ServicesView from './views/ServicesView';
import SafetyView from './views/SafetyView';
import CorporateView from './views/CorporateView';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'services' | 'safety' | 'corporate'>('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const renderView = () => {
    switch (currentView) {
      case 'services': return <ServicesView />;
      case 'safety': return <SafetyView />;
      case 'corporate': return <CorporateView />;
      default: return <HomeView />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#333333]">
      <Navbar 
        scrolled={scrolled} 
        currentView={currentView} 
        onNavigate={setCurrentView} 
      />
      
      <main className="pt-0">
        {renderView()}
      </main>

      <Footer onNavigate={setCurrentView} />
      
      <ConciergeChat />
    </div>
  );
};

export default App;
