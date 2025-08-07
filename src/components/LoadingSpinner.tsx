import React from 'react';
interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
}
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'medium', 
  color = 'var(--primary-purple)' 
}) => {
  const sizeMap = {
    small: '20px',
    medium: '40px',
    large: '60px'
  };
  return (
    <div className="loading-spinner" style={{ width: sizeMap[size], height: sizeMap[size] }}>
      <div 
        className="spinner-ring"
        style={{ borderColor: color }}
      ></div>
    </div>
  );
};
export default LoadingSpinner; 