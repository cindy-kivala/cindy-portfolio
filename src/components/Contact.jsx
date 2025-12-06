import React, { useRef, useEffect, useState } from 'react';
import { Mail, Calendar, Github, Linkedin, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const { contact } = portfolioData;
  const [copied, setCopied] = useState(false);
  const contactRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          }
        });
      },
      { threshold: 0.2 }
    );

    contactRef.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const copyEmailTemplate = () => {
    const template = `Subject: Portfolio Inquiry\n\nHello Cindy,\n\nI saw your portfolio and was impressed by your work.\nI'd like to discuss [project/opportunity].\n\nBest regards,\n[Your Name]`;
    navigator.clipboard.writeText(template);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 parallax-layer" data-speed="0.1">
        <div className="absolute top-40 right-40 w-96 h-96 bg-primary-accent rounded-full blur-3xl opacity-5" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Get In <span className="velocity-text">Touch</span>
          </h2>
          <p className="text-xl text-primary-text max-w-2xl mx-auto">
            Let's discuss how I can help bring your project to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Cards - Left Side */}
          <div className="space-y-6">
            {/* Email Card */}
            <div
              ref={(el) => (contactRef.current[0] = el)}
              className="contact-card opacity-0"
              style={{ animationDelay: '0s' }}
            >
              <a
                href={`mailto:${contact.email}?subject=Portfolio Inquiry&body=Hello Cindy,%0D%0A%0D%0AI saw your portfolio and wanted to connect...`}
                className="block rounded-3xl p-8 magnetic-hover group h-full"
                style={{
                  background: 'rgba(17, 34, 64, 0.6)',
                  backdropFilter: 'blur(20px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                  border: '1px solid rgba(100, 255, 218, 0.15)',
                }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-accent to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary-accent/30">
                    <Mail className="text-primary-dark" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Email Me</h3>
                  <p className="text-primary-text mb-4">Click to open your email client</p>
                  <div className="text-primary-accent font-semibold text-lg">{contact.email}</div>
                  <div className="mt-4 text-sm text-primary-text">
                    I respond within 24 hours
                  </div>
                </div>
              </a>
            </div>

            {/* Calendar Card */}
            <div
              ref={(el) => (contactRef.current[1] = el)}
              className="contact-card opacity-0"
              style={{ animationDelay: '0.1s' }}
            >
              <div 
                className="rounded-3xl p-8 magnetic-hover h-full"
                style={{
                  background: 'rgba(17, 34, 64, 0.6)',
                  backdropFilter: 'blur(20px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                  border: '1px solid rgba(100, 255, 218, 0.15)',
                }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/30">
                    <Calendar className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Response Time</h3>
                  <p className="text-primary-text mb-4">I typically respond within</p>
                  <div className="text-white font-bold text-3xl mb-2">24 hours</div>
                  <p className="text-primary-text text-sm">
                    Monday - Friday, 9 AM - 5 PM EAT
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Email Tools & Social */}
          <div className="space-y-6">
            {/* Email Tools Card */}
            <div
              ref={(el) => (contactRef.current[2] = el)}
              className="contact-card opacity-0"
              style={{ animationDelay: '0.2s' }}
            >
              <div 
                className="rounded-3xl p-8 h-full"
                style={{
                  background: 'rgba(17, 34, 64, 0.6)',
                  backdropFilter: 'blur(20px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                  border: '1px solid rgba(100, 255, 218, 0.15)',
                }}
              >
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  Quick Contact Tools
                </h3>
                
                {/* Copy Email */}
                <div className="mb-8">
                  <div className="text-primary-text text-sm mb-2">Copy my email:</div>
                  <div className="flex gap-2">
                    <code className="flex-1 px-4 py-3 bg-primary-light/30 rounded-xl text-white font-mono truncate">
                      {contact.email}
                    </code>
                    <button
                      onClick={copyEmail}
                      className="px-4 py-3 bg-primary-accent/20 text-primary-accent rounded-xl hover:bg-primary-accent/30 transition-colors duration-300 flex items-center gap-2"
                    >
                      {copied ? (
                        <>
                          <CheckCircle size={16} />
                          Copied!
                        </>
                      ) : (
                        'Copy'
                      )}
                    </button>
                  </div>
                </div>

                {/* Email Template */}
                <div>
                  <div className="text-primary-text text-sm mb-2">Email template:</div>
                  <div className="bg-primary-light/30 rounded-xl p-4 mb-4">
                    <div className="text-white font-mono text-sm leading-relaxed">
                      Subject: Portfolio Inquiry<br/><br/>
                      Hello Cindy,<br/><br/>
                      I saw your portfolio and was impressed by your work.<br/>
                      I'd like to discuss [project/opportunity].<br/><br/>
                      Best regards,<br/>
                      [Your Name]
                    </div>
                  </div>
                  <button
                    onClick={copyEmailTemplate}
                    className="w-full px-4 py-3 bg-primary-accent/20 text-primary-accent rounded-xl hover:bg-primary-accent/30 transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    {copied ? (
                      <>
                        <CheckCircle size={16} />
                        Template Copied!
                      </>
                    ) : (
                      'Copy Email Template'
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Social Links Card */}
            <div
              ref={(el) => (contactRef.current[3] = el)}
              className="contact-card opacity-0"
              style={{ animationDelay: '0.3s' }}
            >
              <div 
                className="rounded-3xl p-8"
                style={{
                  background: 'rgba(17, 34, 64, 0.6)',
                  backdropFilter: 'blur(20px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                  border: '1px solid rgba(100, 255, 218, 0.15)',
                }}
              >
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  Connect With Me
                </h3>
                <div className="flex justify-center gap-6">
                  <a
                    href={`${contact.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 bg-primary-light/50 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-primary-accent hover:text-primary-dark transition-all duration-300 group"
                    aria-label="GitHub"
                  >
                    <Github size={28} className="group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href={`${contact.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 bg-primary-light/50 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-primary-accent hover:text-primary-dark transition-all duration-300 group"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={28} className="group-hover:scale-110 transition-transform" />
                  </a>
                </div>
                <p className="text-center text-primary-text mt-6">
                  Let's connect and build something amazing together
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 scroll-reveal">
          <p className="text-primary-text">
            © {new Date().getFullYear()} Cindy - Full-Stack Engineer & Scrum Master. Built with React & Tailwind CSS
          </p>
        </div>
      </div>

      <style jsx>{`
        .contact-card {
          transform: translateY(50px);
        }

        .contact-card.animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
        }

        @keyframes slideUp {
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;