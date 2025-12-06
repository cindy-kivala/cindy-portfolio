import React from 'react';

const CircularText = ({ text = "✦ CREATIVELY GIFTED • OPEN TO OPPORTUNITIES •", radius = 120 }) => {
  const characters = text.split('');
  const angleStep = 360 / characters.length;

  return (
    <div className="relative" style={{ width: radius * 2, height: radius * 2 }}>
      <svg
        viewBox={`0 0 ${radius * 2} ${radius * 2}`}
        className="animate-spin-slow opacity-70"
        style={{ animationDuration: '30s' }}
      >
        <defs>
          <path
            id="circlePath"
            d={`M ${radius},${radius} m -${radius - 10},0 a ${radius - 10},${radius - 10} 0 1,1 ${(radius - 10) * 2},0 a ${radius - 10},${radius - 10} 0 1,1 -${(radius - 10) * 2},0`}
          />
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(100, 255, 218, 0.8)" />
            <stop offset="50%" stopColor="rgba(100, 255, 218, 0.4)" />
            <stop offset="100%" stopColor="rgba(100, 255, 218, 0.2)" />
          </linearGradient>
        </defs>
        <text className="text-[11px] font-medium tracking-wide" fill="url(#textGradient)">
          <textPath href="#circlePath" startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>
      
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default CircularText;