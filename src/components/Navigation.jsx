// components/Navigation.jsx
import React, { useState, useEffect } from 'react';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { Download, FileText, Menu, X } from 'lucide-react';
import { useToast } from '../hooks/useToast';
import Toast from './Toast';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollProgress = useScrollProgress();
  const { toast, showToast } = useToast();

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
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

  const handleDownloadResume = () => {
    try {
      // Create a temporary link element
      const link = document.createElement('a');
      
      
      link.href = '/Kivala Cindy CV.pdf'; 
      link.download = 'CindyKivala_Resume.pdf'; // Custom filename
      link.target = '_blank';
      
      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      showToast('Resume download started!', 'success');
    } catch (error) {
      showToast('Failed to download resume', 'error');
    }
    
    // Optional: Add download confirmation
    console.log('Resume download started');
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
              className={`relative text-sm font-medium transition-all duration-300 ${
                activeSection === item.id
                  ? 'text-primary-accent'
                  : 'text-primary-text hover:text-white'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary-accent rounded-full" />
              )}
            </button>
          ))}
          
          {/* Resume Download Button - Desktop */}
          <button
            onClick={handleDownloadResume}
            className="ml-4 flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-accent to-blue-500 text-primary-dark font-semibold rounded-full hover:shadow-lg hover:shadow-primary-accent/30 transition-all duration-300 group"
          >
            <Download size={16} className="group-hover:animate-bounce" />
            <FileText size={16} />
            <span className="text-sm">Resume</span>
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
          <div className="absolute top-full right-0 mt-2 w-64 fluid-glass rounded-2xl p-4 animate-slide-in">
            <div className="space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-primary-accent/10 text-primary-accent border border-primary-accent/20'
                      : 'text-primary-text hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              {toast && (
                <Toast message={toast.message} type={toast.type} />
              )}
              {/* Resume Download Button - Mobile */}
              <button
                onClick={handleDownloadResume}
                className="ml-4 flex items-center gap-2 px-4 py-2 fluid-glass border border-primary-accent/30 text-primary-accent font-medium rounded-full hover:bg-primary-accent/10 hover:border-primary-accent/50 transition-all duration-300 group"
              >
                <Download size={16} className="group-hover:animate-bounce" />
                <FileText size={16} />
                <span className="text-sm">Resume</span>
              </button>
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

      <style jsx>{`
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
        
        .animate-slide-in {
          animation: slide-in 0.2s ease-out;
        }
        
        .group-hover\:animate-bounce:hover {
          animation: bounce 0.5s ease-in-out;
        }
      `}</style>
    </>
  );
};

export default Navigation;