import React, { useEffect, useRef, useState } from 'react';

const Counter = ({ end, duration = 2000, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCount();
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCount = () => {
    const startTime = Date.now();
    const startValue = 0;
    
    // Parse end value (remove % or + signs)
    const endValue = parseFloat(end.toString().replace(/[^0-9.]/g, ''));

    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = startValue + (endValue - startValue) * easeOutQuart;

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(animate);
  };

  const displayValue = () => {
    if (end.toString().includes('.')) {
      return count.toFixed(1);
    }
    return Math.floor(count);
  };

  return (
    <span ref={counterRef}>
      {prefix}
      {displayValue()}
      {suffix}
    </span>
  );
};

export default Counter;