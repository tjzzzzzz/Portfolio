import React, { useState, useEffect } from 'react';
interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
}
const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  speed = 100,
  delay = 0,
  className = '',
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  useEffect(() => {
    setDisplayText('');
    setCurrentIndex(0);
    setIsCompleted(false);
    if (delay > 0) {
      const delayTimer = setTimeout(() => {
        setCurrentIndex(0);
      }, delay);
      return () => clearTimeout(delayTimer);
    } else {
      setCurrentIndex(0);
    }
  }, [text, delay]);
  useEffect(() => {
    if (currentIndex < text.length && !isCompleted) {
      const timer = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, speed);
      return () => clearTimeout(timer);
    } else if (currentIndex >= text.length && !isCompleted) {
      setIsCompleted(true);
    }
  }, [currentIndex, text, speed, isCompleted]);
  return (
    <span className={className}>
      {displayText}
    </span>
  );
};
export default TypewriterText; 