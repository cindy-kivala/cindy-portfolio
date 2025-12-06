// components/Footer.jsx
import React from 'react';
import FooterLights from './FooterLights';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-auto">
      {/* Billboard Lights at the very bottom */}
      <FooterLights />
      
      {/* Footer content above the lights */}
      <div className="relative z-10 bg-gradient-to-t from-[#081428] via-[#081428cc] to-transparent pt-12 pb-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Logo/Name */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Your Name
              </h3>
              <p className="text-primary-text text-sm">
                Full Stack Developer & Creative Technologist
              </p>
            </div>
            
            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#home" className="text-primary-text hover:text-primary-accent transition-colors">
                Home
              </a>
              <a href="#projects" className="text-primary-text hover:text-primary-accent transition-colors">
                Projects
              </a>
              <a href="#experience" className="text-primary-text hover:text-primary-accent transition-colors">
                Experience
              </a>
              <a href="#contact" className="text-primary-text hover:text-primary-accent transition-colors">
                Contact
              </a>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-end gap-4">
              <a
                href="mailto:your.email@example.com"
                className="p-2 rounded-full bg-[#0a1428] border border-[#1a2c4a] hover:border-primary-accent hover:bg-primary-accent/10 transition-all"
                aria-label="Email"
              >
                <Mail size={20} className="text-primary-text" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#0a1428] border border-[#1a2c4a] hover:border-primary-accent hover:bg-primary-accent/10 transition-all"
                aria-label="GitHub"
              >
                <Github size={20} className="text-primary-text" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#0a1428] border border-[#1a2c4a] hover:border-primary-accent hover:bg-primary-accent/10 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="text-primary-text" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#0a1428] border border-[#1a2c4a] hover:border-primary-accent hover:bg-primary-accent/10 transition-all"
                aria-label="Twitter"
              >
                <Twitter size={20} className="text-primary-text" />
              </a>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-[#1a2c4a] text-center">
            <p className="text-primary-text text-sm">
              © {currentYear} Your Name. All rights reserved.
            </p>
            <p className="text-primary-text/60 text-xs mt-2">
              Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;