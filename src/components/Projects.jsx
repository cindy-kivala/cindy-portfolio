import React, { useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const SpotlightCard = ({ children, className = '' }) => {
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`relative overflow-hidden rounded-3xl ${className}`}
      style={{
        background: 'rgba(17, 34, 64, 0.4)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        border: '1px solid rgba(100, 255, 218, 0.1)',
      }}
    >
      {isHovering && (
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
          style={{
            opacity: isHovering ? 0.15 : 0,
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(100, 255, 218, 0.4), transparent 40%)`,
          }}
        />
      )}
      {children}
    </div>
  );
};

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 parallax-layer" data-speed="0.2">
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-5" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured <span className="velocity-text">Projects</span>
          </h2>
          <p className="text-xl text-primary-text max-w-2xl mx-auto">
            A collection of projects showcasing full-stack development, AI integration, and modern web technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="scroll-reveal group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <SpotlightCard className="h-full">
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(17,34,64,0.95)] via-[rgba(17,34,64,0.5)] to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8 space-y-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-primary-text">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary-light/50 text-primary-accent text-sm rounded-full border border-primary-accent/20 backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-primary-accent text-primary-dark font-semibold rounded-full hover:shadow-lg hover:shadow-primary-accent/50 transition-all duration-300 magnetic-hover"
                      >
                        <ExternalLink size={18} />
                        View Live
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-primary-light/50 backdrop-blur-sm font-semibold rounded-full border border-primary-accent/20 hover:border-primary-accent transition-all duration-300 magnetic-hover"
                    >
                      <Github size={18} />
                      Code
                    </a>
                  </div>
                </div>
              </SpotlightCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;