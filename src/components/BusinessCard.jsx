import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Globe, Github, Linkedin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const BusinessCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const cardRef = useRef(null);
  const { name, title, contact } = portfolioData;

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGlarePosition({ x, y });
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 hidden lg:block">
      <div
        ref={cardRef}
        className="relative w-96 h-56 cursor-pointer"
        onClick={() => setIsFlipped(!isFlipped)}
        onMouseMove={handleMouseMove}
        style={{ perspective: '1000px' }}
      >
        <div
          className={`relative w-full h-full transition-transform duration-700`}
          style={{
            transformStyle: 'preserve-3d',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0)',
          }}
        >
          {/* Front Side with Glare Effect */}
          <div
            className="absolute inset-0 rounded-3xl p-8 overflow-hidden"
            style={{
              backfaceVisibility: 'hidden',
              background: 'rgba(17, 34, 64, 0.8)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              border: '1px solid rgba(100, 255, 218, 0.2)',
              boxShadow: '0 8px 32px 0 rgba(100, 255, 218, 0.15)',
            }}
          >
            {/* Glare Effect */}
            <div
              className="absolute inset-0 pointer-events-none opacity-30 transition-opacity duration-300"
              style={{
                background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(100, 255, 218, 0.4) 0%, transparent 50%)`,
              }}
            />

            {/* Animated Background */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-accent rounded-full blur-2xl animate-float" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500 rounded-full blur-2xl animate-float-slow" />
            </div>

            <div className="relative z-10 h-full flex flex-col justify-between">
              {/* Header */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-accent to-blue-500 flex items-center justify-center shadow-lg shadow-primary-accent/30">
                    <span className="text-2xl">👨‍💻</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{name}</h3>
                    <p className="text-sm text-primary-accent">{title}</p>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary-text text-sm">
                  <Mail size={16} className="text-primary-accent" />
                  <span>{contact.email}</span>
                </div>
                <div className="flex items-center gap-2 text-primary-text text-sm">
                  <MapPin size={16} className="text-primary-accent" />
                  <span>Nairobi, Kenya</span>
                </div>
              </div>

              {/* Footer Hint */}
              <div className="text-center">
                <p className="text-xs text-primary-text animate-pulse">Click to flip</p>
              </div>
            </div>

            {/* Lanyard-style hole */}
            <div className="absolute top-4 right-4 w-4 h-4 rounded-full border-2 border-primary-accent/30" />
          </div>

          {/* Back Side */}
          <div
            className="absolute inset-0 rounded-3xl p-8"
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
              background: 'rgba(17, 34, 64, 0.8)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              border: '1px solid rgba(100, 255, 218, 0.2)',
              boxShadow: '0 8px 32px 0 rgba(100, 255, 218, 0.15)',
            }}
          >
            <div className="h-full flex flex-col justify-between">
              <div>
                <h4 className="text-lg font-bold text-white mb-4">Connect With Me</h4>
                <div className="space-y-3">
                  <a
                    href={`${contact.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-primary-text hover:text-primary-accent transition-colors duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="w-8 h-8 bg-primary-light rounded-lg flex items-center justify-center">
                      <Github size={16} />
                    </div>
                    <span className="text-sm">/{contact.github}</span>
                  </a>
                  <a
                    href={`${contact.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-primary-text hover:text-primary-accent transition-colors duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="w-8 h-8 bg-primary-light rounded-lg flex items-center justify-center">
                      <Linkedin size={16} />
                    </div>
                    <span className="text-sm">/in/{contact.linkedin}</span>
                  </a>
                </div>
              </div>

              <div>
                <p className="text-xs text-primary-text mb-3">Specializing in:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs rounded-full">
                    React
                  </span>
                  <span className="px-2 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs rounded-full">
                    Node.js
                  </span>
                  <span className="px-2 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs rounded-full">
                    Python
                  </span>
                  <span className="px-2 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs rounded-full">
                    Scrum
                  </span>
                </div>
              </div>

              <div className="text-center">
                <p className="text-xs text-primary-text animate-pulse">Click to flip back</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;