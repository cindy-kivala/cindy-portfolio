import React from 'react';

const WaterBubbles = () => {
  const bubbles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 30 + 10, // Smaller: 10-40px
    left: Math.random() * 100,
    delay: Math.random() * 10,
    duration: Math.random() * 8 + 12, // 12-20 seconds (slower)
    opacity: Math.random() * 0.2 + 0.1, // More translucent: 0.1-0.3
    drift: (Math.random() - 0.5) * 30, // Side drift
  }));

  return (
    <>
      {/* Water source at footer */}
      <div className="fixed bottom-0 left-0 right-0 h-32 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-primary-accent/5 via-primary-accent/2 to-transparent" />
        
        {/* Subtle waves */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-accent/20 to-transparent animate-pulse" />
      </div>

      {/* Bubbles rising from footer */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className="absolute rounded-full"
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              left: `${bubble.left}%`,
              bottom: '-5%',
              opacity: bubble.opacity,
              background: `radial-gradient(circle at 35% 35%, 
                rgba(255, 255, 255, 0.15), 
                rgba(100, 255, 218, 0.08) 40%, 
                rgba(100, 255, 218, 0.03) 70%,
                transparent)`,
              boxShadow: `
                inset -3px -3px 8px rgba(100, 255, 218, 0.1),
                inset 3px 3px 8px rgba(255, 255, 255, 0.05),
                0 2px 8px rgba(100, 255, 218, 0.05)
              `,
              border: '0.5px solid rgba(255, 255, 255, 0.1)',
              animation: `floatFromBottom ${bubble.duration}s ease-in ${bubble.delay}s infinite`,
              '--drift': `${bubble.drift}px`,
            }}
          >
            {/* Subtle highlight */}
            <div
              className="absolute rounded-full bg-white/20"
              style={{
                width: '25%',
                height: '25%',
                top: '15%',
                left: '25%',
                filter: 'blur(2px)',
              }}
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes floatFromBottom {
          0% {
            transform: translateY(0) translateX(0) scale(0.8);
            opacity: 0;
          }
          5% {
            opacity: var(--opacity, 0.2);
          }
          50% {
            transform: translateY(-50vh) translateX(var(--drift)) scale(1);
          }
          95% {
            opacity: var(--opacity, 0.2);
          }
          100% {
            transform: translateY(-100vh) translateX(calc(var(--drift) * 1.5)) scale(0.6);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default WaterBubbles;