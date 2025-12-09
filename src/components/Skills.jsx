import React, { useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import Counter from './Counter';

const Skills = () => {
  const { skills } = portfolioData;
  const skillsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.progress-bar');
            progressBars.forEach((bar) => {
              bar.classList.add('animate-progress');
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    skillsRef.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const getGradientColors = (gradient) => {
    const gradientMap = {
      'from-blue-500 to-cyan-500': { from: '#3b82f6', to: '#06b6d4' },
      'from-green-500 to-emerald-500': { from: '#10b981', to: '#059669' },
      'from-purple-500 to-pink-500': { from: '#a855f7', to: '#ec4899' },
      'from-orange-500 to-red-500': { from: '#f97316', to: '#ef4444' },
    };
    return gradientMap[gradient] || { from: '#64ffda', to: '#4facfe' };
  };

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 parallax-layer" data-speed="0.15">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-5" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Technical <span className="velocity-text">Skills</span>
          </h2>
          <p className="text-xl text-primary-text max-w-2xl mx-auto">
            Expertise across the full technology stack with focus on modern frameworks and agile methodologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skills.map((category, index) => {
            const colors = getGradientColors(category.gradient);
            
            return (
              <div
                key={index}
                ref={(el) => (skillsRef.current[index] = el)}
                className="scroll-reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="fluid-glass rounded-3xl p-8 h-full magnetic-hover">
                  {/* Category Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {category.category}
                    </h3>
                    <div
                      className={`h-1 w-24 rounded-full bg-gradient-to-r ${category.gradient}`}
                    />
                  </div>

                  {/* Skills List */}
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-primary-text font-medium">
                            {skill.name}
                          </span>
                          <span className="text-primary-accent font-bold">
                            <Counter end={skill.level} duration={2000} suffix="%" />
                          </span>
                        </div>
                        
                        {/* Colored Progress Bar */}
                        <div className="relative h-3 bg-primary-light rounded-full overflow-hidden">
                          <div
                            className="progress-bar h-full rounded-full transition-all duration-1000 ease-out"
                            style={{
                              width: '0%',
                              '--fill-width': `${skill.level}%`,
                              background: `linear-gradient(90deg, ${colors.from}, ${colors.to})`,
                              boxShadow: `0 0 10px ${colors.to}40`,
                            }}
                            data-width={skill.level}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .progress-bar.animate-progress {
          animation: fillBar 1.5s ease-out forwards;
        }

        @keyframes fillBar {
          to {
            width: var(--fill-width) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;