import React from 'react';
import Hero from './components/Hero';
import AboutSkills from './components/AboutSkills';
import CertsExperience from './components/CertsExperience';
import PortfolioContact from './components/PortfolioContact';

function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-white font-sans">
      {/* HERO: Tech-inspired Spline scene with headline and quick actions */}
      <Hero />

      {/* ABOUT + SKILLS: Professional overview with categorized skills */}
      <AboutSkills />

      {/* CERTIFICATIONS + EXPERIENCE: HRD-friendly highlights */}
      <CertsExperience />

      {/* PORTFOLIO + CONTACT: Case studies and clear call-to-action */}
      <PortfolioContact />
    </div>
  );
}

export default App;
