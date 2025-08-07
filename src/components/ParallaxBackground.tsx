import React, { useEffect, useRef } from 'react';
interface ParallaxBackgroundProps {
  speed?: number;
  children?: React.ReactNode;
}
const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({ 
  speed = 0.5, 
  children 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * speed;
      container.style.transform = `translateY(${rate}px)`;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);
  return (
    <div 
      ref={containerRef}
      className="parallax-background"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        willChange: 'transform'
      }}
    >
      {children}
    </div>
  );
};
export default ParallaxBackground; 