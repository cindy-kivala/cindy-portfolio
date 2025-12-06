import React, { useState, useRef, useEffect } from 'react';
import { Mail, Calendar, Send, Github, Linkedin, Twitter, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const { contact } = portfolioData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const contactRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 2000);
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
            Let's discuss how I can help bring your project to life with cutting-edge technology
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Cards - Animated from left */}
          <div className="space-y-6">
            {/* Email Card */}
            <div
              ref={(el) => (contactRef.current[0] = el)}
              className="contact-card opacity-0"
              style={{ animationDelay: '0s' }}
            >
              <a
                href={`mailto:${contact.email}`}
                className="block rounded-3xl p-6 magnetic-hover group"
                style={{
                  background: 'rgba(17, 34, 64, 0.6)',
                  backdropFilter: 'blur(20px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                  border: '1px solid rgba(100, 255, 218, 0.15)',
                }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-accent to-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary-accent/30">
                    <Mail className="text-primary-dark" size={28} />
                  </div>
                  <div>
                    <div className="text-primary-text text-sm mb-1">Email</div>
                    <div className="text-white font-semibold">{contact.email}</div>
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
                className="rounded-3xl p-6 magnetic-hover"
                style={{
                  background: 'rgba(17, 34, 64, 0.6)',
                  backdropFilter: 'blur(20px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                  border: '1px solid rgba(100, 255, 218, 0.15)',
                }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/30">
                    <Calendar className="text-white" size={28} />
                  </div>
                  <div>
                    <div className="text-primary-text text-sm mb-1">Response Time</div>
                    <div className="text-white font-semibold">Within 24 hours</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div
              ref={(el) => (contactRef.current[2] = el)}
              className="contact-card opacity-0"
              style={{ animationDelay: '0.2s' }}
            >
              <div 
                className="rounded-3xl p-6"
                style={{
                  background: 'rgba(17, 34, 64, 0.6)',
                  backdropFilter: 'blur(20px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                  border: '1px solid rgba(100, 255, 218, 0.15)',
                }}
              >
                <div className="text-primary-text text-sm mb-4">Connect With Me</div>
                <div className="flex gap-3">
                  <a
                    href={`${contact.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary-light/50 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-primary-accent hover:text-primary-dark transition-all duration-300"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={`${contact.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary-light/50 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-primary-accent hover:text-primary-dark transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  {/* <a
                    href={`${contact.twitter}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary-light/50 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-primary-accent hover:text-primary-dark transition-all duration-300"
                    aria-label="Twitter"
                  >
                    <Twitter size={20} />
                  </a> */}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Animated from right */}
          <div 
            ref={(el) => (contactRef.current[3] = el)}
            className="lg:col-span-2 contact-card opacity-0"
            style={{ animationDelay: '0.3s' }}
          >
            <form 
              onSubmit={handleSubmit} 
              className="rounded-3xl p-8 space-y-6"
              style={{
                background: 'rgba(17, 34, 64, 0.6)',
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                border: '1px solid rgba(100, 255, 218, 0.15)',
              }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-primary-text text-sm mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-primary-light/50 backdrop-blur-sm border border-primary-accent/20 rounded-xl text-white focus:outline-none focus:border-primary-accent transition-colors duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-primary-text text-sm mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-primary-light/50 backdrop-blur-sm border border-primary-accent/20 rounded-xl text-white focus:outline-none focus:border-primary-accent transition-colors duration-300"
                    placeholder="youremail@gmail.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-primary-text text-sm mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-primary-light/50 backdrop-blur-sm border border-primary-accent/20 rounded-xl text-white focus:outline-none focus:border-primary-accent transition-colors duration-300"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-primary-text text-sm mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-primary-light/50 backdrop-blur-sm border border-primary-accent/20 rounded-xl text-white focus:outline-none focus:border-primary-accent transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full px-8 py-4 bg-primary-accent text-primary-dark font-semibold rounded-xl hover:shadow-lg hover:shadow-primary-accent/50 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed magnetic-hover"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-dark border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle size={20} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 scroll-reveal">
          <p className="text-primary-text">
            © 2025 Full-Stack Engineer & Scrum Master. Built with React & Tailwind CSS
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
