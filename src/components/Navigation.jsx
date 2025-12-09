import React, { useState, useEffect } from 'react';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { Download, FileText, Menu, X, Home, Briefcase, User, Mail, Star } from 'lucide-react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const scrollProgress = useScrollProgress();

  const navItems = [
    { id: 'home', label: 'Home', icon: <Home size={18} /> },
    { id: 'projects', label: 'Projects', icon: <Briefcase size={18} /> },
    { id: 'skills', label: 'Skills', icon: <Star size={18} /> },
    { id: 'experience', label: 'Experience', icon: <User size={18} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={18} /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleDownloadResume = async () => {
    setIsDownloading(true);
    
    try {
      const link = document.createElement('a');
      link.href = '/Kivala Cindy CV.pdf';
      link.download = 'CindyKivala_Resume.pdf';
      link.target = '_blank';
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      await new Promise(resolve => setTimeout(resolve, 800));
      
    } catch (error) {
      console.error('Failed to download resume:', error);
    } finally {
      setIsDownloading(false);
      setIsMobileMenuOpen(false); // Close menu after download
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-primary-light z-50">
        <div
          className="h-full bg-gradient-to-r from-primary-accent to-blue-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Desktop Navigation */}
      <nav
        className={`hidden lg:flex fixed top-1 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-300 ${
          isScrolled ? 'mt-4' : 'mt-8'
        }`}
      >
        <div className="fluid-glass rounded-full px-8 py-4 flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative flex items-center gap-2 text-sm font-medium transition-all duration-300 ${
                activeSection === item.id
                  ? 'text-primary-accent'
                  : 'text-primary-text hover:text-white'
              }`}
            >
              {item.icon}
              {item.label}
              {activeSection === item.id && (
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary-accent rounded-full" />
              )}
            </button>
          ))}
          
          {/* Resume Download Button - Desktop */}
          <button
            onClick={handleDownloadResume}
            disabled={isDownloading}
            className="ml-4 flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-accent to-blue-500 text-primary-dark font-semibold rounded-full hover:shadow-lg hover:shadow-primary-accent/30 transition-all duration-300 group disabled:opacity-50"
          >
            {isDownloading ? (
              <div className="w-4 h-4 border-2 border-primary-dark border-t-transparent rounded-full animate-spin" />
            ) : (
              <Download size={16} className="group-hover:animate-bounce" />
            )}
            <FileText size={16} />
            <span className="text-sm">
              {isDownloading ? 'Downloading...' : 'Resume'}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className={`lg:hidden fixed top-4 right-4 z-40 ${
        isScrolled ? 'mt-4' : 'mt-8'
      }`}>
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="fluid-glass p-3 rounded-full hover:bg-white/10 transition-all duration-300"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full right-0 mt-2 w-72 fluid-glass rounded-2xl p-4 animate-slide-in">
            <div className="space-y-3">
              {/* Mobile Menu Header */}
              <div className="text-center mb-4 pb-4 border-b border-white/10">
                <h3 className="text-lg font-bold text-white">Quick Navigation</h3>
              </div>
              
              {/* Navigation Items */}
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-primary-accent/10 text-primary-accent border border-primary-accent/20'
                      : 'text-primary-text hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <div className={`p-2 rounded-lg ${
                    activeSection === item.id ? 'bg-primary-accent/20' : 'bg-white/5'
                  }`}>
                    {item.icon}
                  </div>
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
              
              {/* Divider */}
              <div className="pt-4 border-t border-white/10">
                <p className="text-primary-text text-sm mb-3 px-2">Get my resume instantly:</p>
                
                {/* Resume Download Button - Mobile (Prominent) */}
                <button
                  onClick={handleDownloadResume}
                  disabled={isDownloading}
                  className="w-full flex items-center justify-center gap-3 px-4 py-4 bg-gradient-to-r from-primary-accent to-blue-500 text-primary-dark font-bold rounded-xl hover:shadow-lg hover:shadow-primary-accent/30 transition-all duration-300 disabled:opacity-50"
                >
                  {isDownloading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-dark border-t-transparent rounded-full animate-spin" />
                      <span>Downloading...</span>
                    </>
                  ) : (
                    <>
                      <Download size={20} />
                      <FileText size={20} />
                      <span className="text-base">Download Resume (PDF)</span>
                    </>
                  )}
                </button>
                
                {/* Email Alternative */}
                <div className="mt-4 text-center">
                  <p className="text-primary-text text-xs mb-2">Or email me directly:</p>
                  <a
                    href="mailto:cindykivala@gmail.com"
                    className="inline-flex items-center gap-2 text-sm text-primary-accent hover:text-white transition-colors"
                  >
                    <Mail size={14} />
                    cindykivala@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Navigation Background (when open) */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Bottom Navigation - ALWAYS VISIBLE */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-[#0a0f1a]/95 backdrop-blur-xl">
        <div className="flex justify-around items-center py-3 px-2">
          {/* Home */}
          <button
            onClick={() => scrollToSection('home')}
            className={`flex flex-col items-center p-2 flex-1 ${activeSection === 'home' ? 'text-primary-accent' : 'text-primary-text'}`}
          >
            <Home size={20} />
            <span className="text-xs mt-1">Home</span>
          </button>
          
          {/* Projects */}
          <button
            onClick={() => scrollToSection('projects')}
            className={`flex flex-col items-center p-2 flex-1 ${activeSection === 'projects' ? 'text-primary-accent' : 'text-primary-text'}`}
          >
            <Briefcase size={20} />
            <span className="text-xs mt-1">Projects</span>
          </button>
          
          {/* Resume - Prominent Center Button */}
          <button
            onClick={handleDownloadResume}
            disabled={isDownloading}
            className="flex flex-col items-center p-2 relative -top-6"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-primary-accent to-blue-500 rounded-full flex items-center justify-center shadow-2xl shadow-primary-accent/50 hover:scale-105 transition-transform">
              {isDownloading ? (
                <div className="w-6 h-6 border-2 border-primary-dark border-t-transparent rounded-full animate-spin" />
              ) : (
                <FileText size={24} className="text-primary-dark" />
              )}
            </div>
            <span className="text-xs text-primary-accent font-bold mt-1">RESUME</span>
          </button>
          
          {/* Experience */}
          <button
            onClick={() => scrollToSection('experience')}
            className={`flex flex-col items-center p-2 flex-1 ${activeSection === 'experience' ? 'text-primary-accent' : 'text-primary-text'}`}
          >
            <User size={20} />
            <span className="text-xs mt-1">Experience</span>
          </button>
          
          {/* Contact */}
          <button
            onClick={() => scrollToSection('contact')}
            className={`flex flex-col items-center p-2 flex-1 ${activeSection === 'contact' ? 'text-primary-accent' : 'text-primary-text'}`}
          >
            <Mail size={20} />
            <span className="text-xs mt-1">Contact</span>
          </button>
        </div>
      </nav>

      {/* Add padding to main content for bottom nav */}
      <style>{`
        main {
          padding-bottom: 80px; /* Space for bottom navigation */
        }
        
        @keyframes slide-in {
          from {
            transform: translateY(-10px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .animate-slide-in {
          animation: slide-in 0.2s ease-out;
        }
        
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        
        .group-hover\:animate-bounce:hover {
          animation: bounce 0.5s ease-in-out;
        }
      `}</style>
    </>
  );
};

export default Navigation;