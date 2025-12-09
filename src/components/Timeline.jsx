import React, { useEffect, useRef } from 'react';
import { Briefcase, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Timeline = () => {
  const { experience, education } = portfolioData;
  const timelineRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in');
          }
        });
      },
      { threshold: 0.2 }
    );

    timelineRef.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 parallax-layer" data-speed="0.25">
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-green-500 rounded-full blur-3xl opacity-5" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Experience Section */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Work <span className="velocity-text">Experience</span>
          </h2>
          <p className="text-xl text-primary-text max-w-2xl mx-auto">
            Leading agile teams and delivering enterprise solutions across diverse industries
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-accent via-blue-500 to-purple-500 hidden lg:block" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experience.map((job, index) => (
              <div
                key={job.id}
                ref={(el) => (timelineRef.current[index] = el)}
                className={`timeline-item relative flex items-center opacity-0 ${
                  index % 2 === 0 ? 'lg:flex-row slide-from-left' : 'lg:flex-row-reverse slide-from-right'
                }`}
              >
                {/* Content Card */}
                <div className="w-full lg:w-5/12">
                  <div 
                    className="fluid-glass rounded-3xl p-8 magnetic-hover transition-all duration-300"
                    style={{
                      background: 'linear-gradient(135deg, rgba(17, 34, 64, 0.85) 0%, rgba(8, 20, 40, 0.9) 100%)',
                      backdropFilter: 'blur(20px) saturate(180%)',
                      WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                      border: '1px solid rgba(100, 255, 218, 0.2)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                    }}
                  >
                    {/* Company Icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-accent to-blue-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-primary-accent/30">
                      <Briefcase className="text-primary-dark" size={32} />
                    </div>

                    {/* Job Details */}
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-white">
                        {job.position}
                      </h3>
                      <div className="text-primary-accent font-semibold">
                        {job.company}
                      </div>
                      <div className="flex items-center gap-2 text-primary-text text-sm">
                        <span>{job.period}</span>
                        <span>•</span>
                        <span>{job.location}</span>
                      </div>

                      {/* Achievements with bigger bullets */}
                      <div className="space-y-3 pt-4">
                        {job.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className="mt-1 flex-shrink-0">
                              <div className="w-2 h-2 bg-primary-accent rounded-full shadow-lg shadow-primary-accent/50" />
                            </div>
                            <span className="text-primary-text text-sm leading-relaxed">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center Dot - Bigger */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary-accent rounded-full border-4 border-primary-dark z-10 shadow-lg shadow-primary-accent/50" />
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-32 scroll-reveal">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Education & <span className="velocity-text">Certifications</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {education.map((edu, index) => (
              <div
                key={index}
                className="fluid-glass rounded-2xl p-6 text-center magnetic-hover"
                style={{
                  background: 'linear-gradient(135deg, rgba(17, 34, 64, 0.85) 0%, rgba(8, 20, 40, 0.9) 100%)',
                  backdropFilter: 'blur(20px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                  border: '1px solid rgba(100, 255, 218, 0.2)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-accent to-blue-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🎓</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">
                  {edu.degree}
                </h4>
                <p className="text-primary-text text-sm mb-1">
                  {edu.institution}
                </p>
                <p className="text-primary-accent text-sm font-semibold">
                  {edu.year}
                  {edu.honors && ` • ${edu.honors}`}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .timeline-item.slide-from-left {
          transform: translateX(-100px);
        }
        
        .timeline-item.slide-from-right {
          transform: translateX(100px);
        }

        .timeline-item.animate-slide-in {
          animation: slideIn 0.8s ease-out forwards;
          opacity: 1;
        }

        @keyframes slideIn {
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default Timeline;