import React, { useEffect, useState } from 'react';

const CursorEffects = () => {
  const [sparks, setSparks] = useState([]);
  const [splashes, setSplashes] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      // Create sparks
      const newSparks = Array.from({ length: 8 }, (_, i) => ({
        id: Date.now() + i,
        x: e.clientX,
        y: e.clientY,
        angle: (i * 360) / 8,
      }));
      setSparks((prev) => [...prev, ...newSparks]);

      // Create splash
      const newSplash = {
        id: Date.now() + 1000,
        x: e.clientX,
        y: e.clientY,
      };
      setSplashes((prev) => [...prev, newSplash]);

      // Clean up after animation
      setTimeout(() => {
        setSparks((prev) => prev.filter((spark) => !newSparks.includes(spark)));
        setSplashes((prev) => prev.filter((splash) => splash.id !== newSplash.id));
      }, 600);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <>
      {/* Click Sparks */}
      {sparks.map((spark) => (
        <div
          key={spark.id}
          className="fixed pointer-events-none z-[9999]"
          style={{
            left: spark.x,
            top: spark.y,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div
            className="absolute w-1 h-8 bg-primary-accent rounded-full"
            style={{
              animation: 'sparkFly 0.6s ease-out forwards',
              transform: `rotate(${spark.angle}deg)`,
              transformOrigin: 'center top',
            }}
          />
        </div>
      ))}

      {/* Splash Effect */}
      {splashes.map((splash) => (
        <div
          key={splash.id}
          className="fixed pointer-events-none z-[9999]"
          style={{
            left: splash.x,
            top: splash.y,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="relative">
            {/* Outer ring */}
            <div
              className="absolute w-16 h-16 border-2 border-primary-accent rounded-full"
              style={{
                animation: 'splashExpand 0.6s ease-out forwards',
                left: '-32px',
                top: '-32px',
              }}
            />
            {/* Middle ring */}
            <div
              className="absolute w-12 h-12 border-2 border-blue-400 rounded-full"
              style={{
                animation: 'splashExpand 0.6s ease-out 0.1s forwards',
                left: '-24px',
                top: '-24px',
              }}
            />
            {/* Inner ring */}
            <div
              className="absolute w-8 h-8 border-2 border-purple-400 rounded-full"
              style={{
                animation: 'splashExpand 0.6s ease-out 0.2s forwards',
                left: '-16px',
                top: '-16px',
              }}
            />
          </div>
        </div>
      ))}

      <style jsx>{`
        @keyframes sparkFly {
          0% {
            transform: translateY(0) scale(1) rotate(var(--angle));
            opacity: 1;
          }
          100% {
            transform: translateY(-50px) scale(0) rotate(var(--angle));
            opacity: 0;
          }
        }

        @keyframes splashExpand {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default CursorEffects;