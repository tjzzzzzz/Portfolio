import React, { useEffect, useRef, useState } from 'react';
interface TiltCardProps {
  children: React.ReactNode;
  maxTilt?: number;
  perspective?: number;
  scale?: number;
  speed?: number;
  className?: string;
}
const TiltCard: React.FC<TiltCardProps> = ({
  children,
  maxTilt = 15,
  perspective = 1000,
  scale = 1.05,
  speed = 500,
  className = ''
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const handleMouseMove = (e: MouseEvent) => {
      if (!isHovering) return;
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;
      const rotateX = (mouseY / (rect.height / 2)) * -maxTilt;
      const rotateY = (mouseX / (rect.width / 2)) * maxTilt;
      card.style.transform = `
        perspective(${perspective}px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(${scale})
      `;
    };
    const handleMouseEnter = () => {
      setIsHovering(true);
      card.style.transition = 'transform 0.1s ease';
    };
    const handleMouseLeave = () => {
      setIsHovering(false);
      card.style.transition = `transform ${speed}ms ease`;
      card.style.transform = `
        perspective(${perspective}px)
        rotateX(0deg)
        rotateY(0deg)
        scale(1)
      `;
    };
    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isHovering, maxTilt, perspective, scale, speed]);
  return (
    <div
      ref={cardRef}
      className={`tilt-card ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        transition: `transform ${speed}ms ease`
      }}
    >
      {children}
    </div>
  );
};
export default TiltCard; 