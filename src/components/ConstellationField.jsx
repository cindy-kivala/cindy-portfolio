// components/SimpleBackground.jsx
const SimpleBackground = () => (
  <div className="fixed inset-0 pointer-events-none z-0">
    {/* Main gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1a] via-[#0c1120] to-[#080c18]" />
    
    {/* Subtle vignette */}
    <div 
      className="absolute inset-0"
      style={{
        background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0, 0, 0, 0.4) 70%)',
      }}
    />
    
    {/* Very few floating dots */}
    {[...Array(6)].map((_, i) => (
      <div
        key={i}
        className="absolute rounded-full"
        style={{
          width: '1px',
          height: '1px',
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          background: 'rgba(100, 255, 218, 0.3)',
          boxShadow: '0 0 10px 2px rgba(100, 255, 218, 0.2)',
          animation: `pulse ${Math.random() * 3 + 2}s ease-in-out infinite`,
          animationDelay: `${Math.random() * 5}s`,
        }}
      />
    ))}
  </div>
);

export default SimpleBackground;