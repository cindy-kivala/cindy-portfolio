// components/MobileBottomNav.jsx
import React from 'react';
import { Home, Briefcase, User, FileText, Mail } from 'lucide-react';

const MobileBottomNav = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Kivala Cindy CV.pdf';
    link.download = 'CindyKivala_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#0a0f1a]/95 backdrop-blur-xl">
      <div className="flex justify-around items-center py-3">
        <button
          onClick={() => scrollToSection('home')}
          className="flex flex-col items-center p-2"
        >
          <Home size={20} className="text-primary-text" />
          <span className="text-xs text-primary-text mt-1">Home</span>
        </button>
        
        <button
          onClick={() => scrollToSection('projects')}
          className="flex flex-col items-center p-2"
        >
          <Briefcase size={20} className="text-primary-text" />
          <span className="text-xs text-primary-text mt-1">Projects</span>
        </button>
        
        {/* Resume Button - Prominent */}
        <button
          onClick={downloadResume}
          className="flex flex-col items-center p-2 relative -top-4"
        >
          <div className="w-14 h-14 bg-gradient-to-r from-primary-accent to-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-primary-accent/50">
            <FileText size={24} className="text-primary-dark" />
          </div>
          <span className="text-xs text-primary-accent font-bold mt-1">RESUME</span>
        </button>
        
        <button
          onClick={() => scrollToSection('experience')}
          className="flex flex-col items-center p-2"
        >
          <User size={20} className="text-primary-text" />
          <span className="text-xs text-primary-text mt-1">Experience</span>
        </button>
        
        <button
          onClick={() => scrollToSection('contact')}
          className="flex flex-col items-center p-2"
        >
          <Mail size={20} className="text-primary-text" />
          <span className="text-xs text-primary-text mt-1">Contact</span>
        </button>
      </div>
    </nav>
  );
};

export default MobileBottomNav;