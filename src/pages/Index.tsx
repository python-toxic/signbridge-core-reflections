
import React from 'react';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { PromiseSection } from '../components/PromiseSection';
import { ExperienceSection } from '../components/ExperienceSection';
import { AISection } from '../components/AISection';
import { InvitationSection } from '../components/InvitationSection';

const Index = () => {
  return (
    <div className="overflow-x-hidden scroll-smooth" style={{ scrollSnapType: 'y mandatory' }}>
      <Navbar />
      <HeroSection />
      <PromiseSection />
      <ExperienceSection />
      <AISection />
      <InvitationSection />
    </div>
  );
};

export default Index;
