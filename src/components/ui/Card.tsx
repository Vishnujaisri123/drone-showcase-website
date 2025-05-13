import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glassEffect?: boolean;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  glassEffect = false,
  hoverEffect = false,
}) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [scale, setScale] = useState(1);
  
  const cardRef = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!hoverEffect || !cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Calculate mouse position relative to card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate rotation based on mouse position
    // The rotation is most extreme at the edges
    const rotX = ((y - rect.height / 2) / rect.height) * 10; // -5 to 5 degrees
    const rotY = ((rect.width / 2 - x) / rect.width) * 10; // -5 to 5 degrees
    
    setRotateX(rotX);
    setRotateY(rotY);
  };
  
  const resetStyles = () => {
    if (!hoverEffect) return;
    setRotateX(0);
    setRotateY(0);
    setScale(1);
  };
  
  const enhanceHover = () => {
    if (!hoverEffect) return;
    setScale(1.02);
  };
  
  // Base style classes
  const baseClasses = 'rounded-xl p-6 transition-all duration-300';
  
  // Apply glass effect if requested
  const glassClasses = glassEffect 
    ? 'backdrop-blur-md bg-white/10 dark:bg-dark-800/30 shadow-lg border border-white/20 dark:border-dark-700/40' 
    : 'bg-white dark:bg-dark-800 shadow-md';
  
  return (
    <motion.div
      ref={cardRef}
      className={`${baseClasses} ${glassClasses} ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        transform: hoverEffect ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})` : undefined,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={enhanceHover}
      onMouseLeave={resetStyles}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      {children}
    </motion.div>
  );
};