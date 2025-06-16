
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import DemoSection from '@/components/DemoSection';
import MissionSection from '@/components/MissionSection';
import TestimonialsSection from '@/components/TestimonialsSection';

const Index = () => {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');

  return (
    <div className="min-h-screen bg-white">
      <Header language={language} onLanguageChange={setLanguage} />
      <HeroSection language={language} />
      <FeaturesSection language={language} />
      <DemoSection language={language} />
      <MissionSection language={language} />
      <TestimonialsSection language={language} />
      <Footer language={language} />
    </div>
  );
};

export default Index;
