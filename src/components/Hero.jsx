import React, { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Mail, Twitter, Download, FileText } from 'lucide-react';
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

          <div className="lg:hidden">
            <button
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/Kivala Cindy CV.pdf';
                link.download = 'CindyKivala_Resume.pdf';
                link.target = '_blank';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-primary-accent to-blue-500 text-primary-dark font-bold rounded-full hover:shadow-lg hover:shadow-primary-accent/50 transition-all"
            >
              <Download size={20} />
              <FileText size={20} />
              Download My Resume
            </button>
            <p className="text-center text-primary-text text-sm mt-2">
              View my qualifications immediately
            </p>
          </div>

          {/* Right Content - Animated Avatar */}
          <div className="relative flex justify-center scroll-reveal" style={{ animationDelay: '0.2s' }}>
            <div 
              ref={containerRef}
              className="relative w-80 h-80 lg:w-96 lg:h-96 group"
            >
              {/* Animated background rings - NO SPINNING */}
              <div className="absolute inset-0 rounded-full border-2 border-primary-accent/10 animate-pulse-ring" />
              <div className="absolute inset-4 rounded-full border border-blue-500/10 animate-pulse-ring-slow" />
              
              {/* Glow effect that follows mouse */}
              <div 
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(600px circle at ${mousePosition.x * 50 + 50}% ${mousePosition.y * 50 + 50}%, 
                    rgba(100, 255, 218, 0.3), 
                    transparent 40%)`,
                }}
              />
              
              {/* Main avatar container with controlled hover */}
              <div 
                className="relative z-20 w-full h-full rounded-full overflow-hidden border-2 border-transparent group-hover:border-primary-accent/30 transition-all duration-500"
                style={{
                  transform: `scale(${1 + Math.abs(mousePosition.x) * 0.01})`,
                }}
              >
                {/* Subtle bounce animation */}
                <div className="animate-soft-bounce">
                  <img
                    src="/PinkTheme.jpg"
                    alt="Cindy - Software Engineer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Dynamic shine overlay */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700"
                    style={{
                      background: `linear-gradient(45deg, 
                        transparent 30%, 
                        rgba(255, 255, 255, 0.15) 50%, 
                        transparent 70%)`,
                      transform: `translateX(${mousePosition.x * 10}px) translateY(${mousePosition.y * 10}px)`,
                    }}
                  />
                </div>
              </div>
              
              {/* Floating tech badges */}
              <div className="absolute -top-3 -right-3 w-14 h-14 bg-gradient-to-br from-primary-accent to-blue-500 rounded-full flex items-center justify-center shadow-lg animate-orbital-1 z-30">
                <span className="text-2xl">⚛</span>
              </div>
              <div className="absolute -bottom-3 -left-3 w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg animate-orbital-2 z-30">
                <span className="text-2xl">‧₊˚ ☁️⋅♡🪐༘⋆  </span>
              </div>
              
              {/* Floating code brackets */}
              <div className="absolute -top-6 left-1/4 animate-float" style={{ animationDuration: '8s' }}>
                <span className="text-3xl text-primary-accent opacity-60">{'{'}</span>
              </div>
              <div className="absolute -bottom-6 right-1/4 animate-float" style={{ animationDuration: '10s', animationDelay: '1s' }}>
                <span className="text-3xl text-blue-500 opacity-60">{'}'}</span>
              </div>
              
              {/* Floating particles - Keep these! */}
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
      <style>{`
        @keyframes soft-bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes pulse-ring {
          0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(100, 255, 218, 0.3);
          }
          70% {
            transform: scale(1);
            box-shadow: 0 0 0 20px rgba(100, 255, 218, 0);
          }
          100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(100, 255, 218, 0);
          }
        }

        @keyframes pulse-ring-slow {
          0% {
            transform: scale(0.98);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.02);
            opacity: 0.5;
          }
          100% {
            transform: scale(0.98);
            opacity: 0.3;
          }
        }

        @keyframes orbital-1 {
          0% {
            transform: rotate(0deg) translateX(30px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(30px) rotate(-360deg);
          }
        }

        @keyframes orbital-2 {
          0% {
            transform: rotate(0deg) translateX(25px) rotate(0deg);
          }
          100% {
            transform: rotate(-360deg) translateX(25px) rotate(360deg);
          }
        }

        @keyframes morph-border {
          0%, 100% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          50% {
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
          }
        }

        @keyframes soft-pulse {
          0%, 100% {
            transform: scale(1);
            filter: brightness(1);
          }
          50% {
            transform: scale(1.02);
            filter: brightness(1.05);
          }
        }

        @keyframes shine {
          0% {
            background-position: -100% -100%;
          }
          100% {
            background-position: 200% 200%;
          }
        }

        @keyframes floatParticle {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.2;
          }
          33% {
            transform: translate(10px, -15px) scale(1.1);
            opacity: 0.4;
          }
          66% {
            transform: translate(-5px, 10px) scale(0.9);
            opacity: 0.3;
          }
        }

        /* Animation classes */
        .animate-soft-bounce {
          animation: soft-bounce 4s ease-in-out infinite;
        }

        .animate-pulse-ring {
          animation: pulse-ring 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animate-pulse-ring-slow {
          animation: pulse-ring-slow 5s ease-in-out infinite;
        }

        .animate-orbital-1 {
          animation: orbital-1 10s linear infinite;
        }

        .animate-orbital-2 {
          animation: orbital-2 15s linear infinite;
        }

        .animate-morph-border {
          animation: morph-border 8s ease-in-out infinite;
        }

        .animate-soft-pulse {
          animation: soft-pulse 4s ease-in-out infinite;
        }

        .animate-shine {
          animation: shine 3s linear infinite;
          background-size: 200% 200%;
        }

        .animate-float {
          animation: soft-bounce 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;