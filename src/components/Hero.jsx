import React, { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import Counter from './Counter';

const Hero = () => {
  const { name, title, tagline, stats, contact } = portfolioData;
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Minimal Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1a] via-[#0c1120] to-[#080c18]" />
      
      {/* Subtle floating elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary-accent rounded-full blur-3xl opacity-5 animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-5 animate-float-slow" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 scroll-reveal">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold">
                <span className="text-white">Hi, I'm</span>
                <br />
                <span className="velocity-text curved-text inline-block">{name}</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-primary-accent">
                {title}
              </h2>
              <p className="text-lg lg:text-xl text-primary-text max-w-xl">
                {tagline}
              </p>
            </div>

            {/* Stats with Counter Animation */}
            <div className="flex flex-wrap gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="fluid-glass rounded-2xl px-6 py-4 glare-hover magnetic-hover"
                  style={{
                    background: 'linear-gradient(135deg, rgba(17, 34, 64, 0.8) 0%, rgba(8, 20, 40, 0.9) 100%)',
                  }}
                >
                  <div className="text-3xl font-bold text-primary-accent">
                    <Counter 
                      end={stat.value} 
                      duration={2000}
                    />
                  </div>
                  <div className="text-sm text-primary-text">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href={`${contact.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="fluid-glass p-4 rounded-full hover:bg-primary-accent hover:text-primary-dark transition-all duration-300 magnetic-hover"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href={`${contact.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="fluid-glass p-4 rounded-full hover:bg-primary-accent hover:text-primary-dark transition-all duration-300 magnetic-hover"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-primary-accent text-primary-dark font-semibold rounded-full hover:shadow-lg hover:shadow-primary-accent/50 transition-all duration-300 magnetic-hover"
              >
                View Projects
              </button>
              <button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 fluid-glass font-semibold rounded-full hover:border-primary-accent transition-all duration-300 magnetic-hover"
                style={{
                  background: 'linear-gradient(135deg, rgba(17, 34, 64, 0.8) 0%, rgba(8, 20, 40, 0.9) 100%)',
                }}
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Right Content - Animated Avatar */}
          <div className="relative flex justify-center scroll-reveal" style={{ animationDelay: '0.2s' }}>
            <div 
              ref={containerRef}
              className="relative w-80 h-80 lg:w-96 lg:h-96 group"
            >
              {/* Animated background rings */}
              <div className="absolute inset-0 rounded-full border-2 border-primary-accent/10 animate-spin-slow" />
              <div className="absolute inset-4 rounded-full border border-blue-500/10 animate-spin-slow-reverse" />
              
              {/* Glow effect that follows mouse */}
              <div 
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(600px circle at ${mousePosition.x * 50 + 50}% ${mousePosition.y * 50 + 50}%, 
                    rgba(100, 255, 218, 0.3), 
                    transparent 40%)`,
                }}
              />
              
              {/* Main avatar container with parallax */}
              <div 
                className="relative z-20 w-full h-full rounded-full overflow-hidden border-2 border-transparent group-hover:border-primary-accent/30 transition-all duration-500"
                style={{
                  transform: `perspective(1000px) rotateY(${mousePosition.x * 3}deg) rotateX(${-mousePosition.y * 3}deg) scale(${1 + Math.abs(mousePosition.x) * 0.02})`,
                }}
              >
                {/* Subtle float animation */}
                <div className="animate-gentle-float">
                  <img
                    src="/avataaars.png"
                    alt="Cindy - Software Engineer"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Dynamic shine overlay */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700"
                    style={{
                      background: `linear-gradient(45deg, 
                        transparent 30%, 
                        rgba(255, 255, 255, 0.15) 50%, 
                        transparent 70%)`,
                      transform: `translateX(${mousePosition.x * 15}px) translateY(${mousePosition.y * 15}px)`,
                    }}
                  />
                </div>
              </div>
              
              {/* Floating tech badges */}
              <div className="absolute -top-3 -right-3 w-14 h-14 bg-gradient-to-br from-primary-accent to-blue-500 rounded-full flex items-center justify-center shadow-lg animate-float z-30">
                <span className="text-2xl">⚛︎</span>
              </div>
              <div className="absolute -bottom-3 -left-3 w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg animate-float-slow z-30">
                <span className="text-2xl">‧₊˚ ☁️⋅♡🪐༘⋆</span>
              </div>
              
              {/* Floating code brackets */}
              <div className="absolute -top-6 left-1/4 animate-float" style={{ animationDuration: '8s' }}>
                <span className="text-3xl text-primary-accent opacity-60">{'{'}</span>
              </div>
              <div className="absolute -bottom-6 right-1/4 animate-float" style={{ animationDuration: '10s', animationDelay: '1s' }}>
                <span className="text-3xl text-blue-500 opacity-60">{'}'}</span>
              </div>
              
              {/* Floating particles */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full bg-primary-accent"
                    style={{
                      width: `${Math.random() * 3 + 1}px`,
                      height: `${Math.random() * 3 + 1}px`,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animation: `floatParticle ${Math.random() * 6 + 4}s ease-in-out infinite`,
                      animationDelay: `${Math.random() * 2}s`,
                      opacity: Math.random() * 0.5 + 0.2,
                      transform: `translate(${mousePosition.x * 8}px, ${mousePosition.y * 8}px)`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inline styles for animations */}
      <style jsx>{`
        @keyframes gentle-float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes spin-slow-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        
        @keyframes floatParticle {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0.3;
          }
          50% {
            transform: translate(15px, -15px);
            opacity: 0.7;
          }
        }
        
        .animate-gentle-float {
          animation: gentle-float 6s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 25s linear infinite;
        }
        
        .animate-float {
          animation: gentle-float 5s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: gentle-float 7s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;