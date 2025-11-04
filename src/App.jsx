import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import SkillsCerts from './components/SkillsCerts';
import ExperiencePortfolioContact from './components/ExperiencePortfolioContact';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero />
      <About />
      <SkillsCerts />
      <ExperiencePortfolioContact />
      <footer className="mt-12 border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-slate-600">
          © {new Date().getFullYear()} Rendy Jalu Saputra — Portfolio. Designed for fast, accessible browsing by HRD and IT managers.
        </div>
      </footer>
    </div>
  );
}

export default App;
