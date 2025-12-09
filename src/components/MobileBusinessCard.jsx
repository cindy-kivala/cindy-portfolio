// components/MobileBusinessCard.jsx
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Download, X, Github, Linkedin, Briefcase, Code, User } from 'lucide-react';

const MobileBusinessCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  
  const contactInfo = {
    email: "cindykivala@gmail.com", 
    phone: "+254 710 745 313", 
    location: "Nairobi, Kenya",
    github: "https://github.com/cindy-kivala",
    linkedin: "https://www.linkedin.com/in/cindy-kivala-a51274382",
    resume: "/Kivala Cindy CV.pdf" 
  };

  const skills = [
    'React', 'Node.js', 'TypeScript', 'Python', 
    'AWS', 'MongoDB', 'Docker', 'Scrum', 'Flask',
    'PostgreSQL', 'Tailwind CSS', 'Git'
  ];

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = contactInfo.resume;
    link.download = 'CindyKivala_Resume.pdf'; 
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsOpen(false); // Close after download
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed bottom-6 right-6 z-50 group"
        aria-label="Open business card"
      >
        {/* Glowing outer ring */}
        {/* <div className="absolute -inset-3 bg-gradient-to-r from-primary-accent to-blue-500 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300" /> */}
        
        {/* Main button */}
        <div className="relative w-16 h-16 bg-gradient-to-br from-primary-accent to-blue-500 rounded-2xl shadow-2xl shadow-primary-accent/50 flex flex-col items-center justify-center hover:scale-110 active:scale-95 transition-transform duration-300">
          <div className="text-white font-bold text-xs mb-1">CLICK</div>
          <div className="w-5 h-0.5 bg-white/80 mb-1 rounded-full"></div>
          <div className="text-white font-bold text-xs">ME</div>
        </div>
        
        {/* Animated notification dot */}
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping" />
        )}
      </button>

      {/* Business Card Modal */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="lg:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-40 animate-fade-in"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Card Container */}
          <div className="lg:hidden fixed inset-0 z-50 flex items-center justify-center p-4">
            <div 
              className="relative w-full max-w-sm mx-auto animate-slide-up-fast"
              style={{
                background: 'linear-gradient(145deg, #0a1428 0%, #081428 100%)',
                borderRadius: '24px',
                border: '2px solid rgba(100, 255, 218, 0.4)',
                boxShadow: `
                  0 0 50px rgba(100, 255, 218, 0.3),
                  0 25px 100px rgba(0, 0, 0, 0.7),
                  inset 0 1px 0 rgba(255, 255, 255, 0.1)
                `,
                overflow: 'hidden',
              }}
            >
              {/* Glowing effects
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-primary-accent rounded-full blur-3xl opacity-20" />
              <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-blue-500 rounded-full blur-3xl opacity-20" /> */}
              
              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                aria-label="Close business card"
              >
                <X size={20} className="text-white" />
              </button>
              
              {/* Card Header */}
              <div className="relative pt-10 px-6 pb-8 border-b border-white/10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-accent to-blue-500 rounded-2xl flex items-center justify-center shadow-xl">
                    <span className="text-white font-bold text-2xl">C</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">Cindy Kivala</h3>
                    <p className="text-primary-accent font-medium">Full-Stack Developer</p>
                    <p className="text-primary-text text-sm mt-1">React • Python • Cloud</p>
                  </div>
                </div>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center p-3 rounded-xl bg-white/5 backdrop-blur-sm">
                    <div className="text-white font-bold text-lg">5+</div>
                    <div className="text-primary-text text-xs">Years</div>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-white/5 backdrop-blur-sm">
                    <div className="text-white font-bold text-lg">50+</div>
                    <div className="text-primary-text text-xs">Projects</div>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-white/5 backdrop-blur-sm">
                    <div className="text-white font-bold text-lg">24h</div>
                    <div className="text-primary-text text-xs">Response</div>
                  </div>
                </div>
              </div>
              
              {/* Card Body */}
              <div className="p-6 space-y-6 max-h-[50vh] overflow-y-auto">
                {/* Contact Information */}
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-white flex items-center gap-2">
                    <User size={18} />
                    Contact Information
                  </h4>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-primary-accent/10 flex items-center justify-center">
                        <Mail size={18} className="text-primary-accent" />
                      </div>
                      <div>
                        <div className="text-primary-text text-xs">Email</div>
                        <div className="text-white font-medium">{contactInfo.email}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                        <MapPin size={18} className="text-blue-400" />
                      </div>
                      <div>
                        <div className="text-primary-text text-xs">Location</div>
                        <div className="text-white font-medium">{contactInfo.location}</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Skills Section */}
                <div>
                  <h4 className="text-lg font-bold text-white flex items-center gap-2 mb-3">
                    <Code size={18} />
                    Top Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.slice(0, 8).map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-primary-accent/10 text-primary-accent rounded-full text-sm font-medium border border-primary-accent/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Quick Actions */}
                <div className="space-y-3">
                  <h4 className="text-lg font-bold text-white flex items-center gap-2">
                    <Briefcase size={18} />
                    Quick Actions
                  </h4>
                  
                  <button
                    onClick={handleDownloadResume}
                    className="w-full py-3.5 bg-gradient-to-r from-primary-accent to-blue-500 text-white font-bold rounded-xl flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-primary-accent/30 transition-all active:scale-95"
                  >
                    <Download size={20} />
                    Download Resume
                  </button>
                  
                  <div className="flex gap-3">
                    <a
                      href={contactInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="flex-1 py-3 bg-white/5 rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
                    >
                      <Github size={20} />
                      <span className="text-white font-medium">GitHub</span>
                    </a>
                    <a
                      href={contactInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="flex-1 py-3 bg-white/5 rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
                    >
                      <Linkedin size={20} />
                      <span className="text-white font-medium">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Card Footer */}
              <div className="px-6 py-4 border-t border-white/10 bg-black/20">
                <p className="text-center text-primary-text text-sm">
                  Available for freelance & full-time opportunities
                </p>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Inline CSS for animations */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slide-up-fast {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes ping {
          0% {
            transform: scale(0.8);
            opacity: 1;
          }
          100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
        
        .animate-slide-up-fast {
          animation: slide-up-fast 0.3s ease-out;
        }
        
        .animate-ping {
          animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </>
  );
};

export default MobileBusinessCard;