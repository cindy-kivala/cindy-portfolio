import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import BusinessCard from './components/BusinessCard';
//import Footer from './components/Footer';

// Background Options - Choose ONE:
//import ConstellationBackground from './components/ConstellationField';
import SimpleBackground from './components/ConstellationField';
//import BillboardLights from './components/FooterLights';

//import WaterBubbles from './components/WaterBubbles';

import CursorEffects from './components/CursorEffects';
import { useScrollReveal, useParallax } from './hooks/useScrollProgress';
import './App.css';
//import FooterLights from './components/FooterLights';

function App() {
  const [loading, setLoading] = useState(true);

  useScrollReveal();
  useParallax();

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loading Screen */}
      {loading && (
        <div className="loading-screen">
          <div className="text-center">
            <div className="w-20 h-20 border-4 border-primary-accent border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-primary-accent text-lg font-semibold">Loading Portfolio...</p>
          </div>
        </div>
      )}

      {/* Main App */}
      <div className={`App ${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
        {/* Background Effect - Choose ONE */}
        {/* Option 1: Hover-Reactive Constellation */}
        {/* <ConstellationBackground /> */}
      {/* <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden"> */}
        <SimpleBackground />
  
        {/* Billboard Lights Effect */}
        {/* <BillboardLights /> */}
      {/* </section>
               */}
        {/* Option 2: Water Bubbles from Footer */}
        {/* <WaterBubbles /> */}
        
        {/* Cursor Effects */}
        <CursorEffects />

        {/* Navigation */}
        <Navigation />

        {/* Main Content */}
        <main>
          <Hero />
          <Projects />
          <Skills />
          <Timeline />
          <Contact />
        </main>


        {/* <Footer /> */}

        {/* Business Card */}
        <BusinessCard />
      </div>
    </>
  );
}

export default App;