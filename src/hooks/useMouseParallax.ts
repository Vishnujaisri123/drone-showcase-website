import { useEffect, useState, RefObject } from 'react';

type ParallaxOptions = {
  sensitivity?: number;
  elementRef: RefObject<HTMLElement>;
  reverse?: boolean;
};

export const useMouseParallax = ({
  sensitivity = 0.05,
  elementRef,
  reverse = false,
}: ParallaxOptions) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    const rect = element.getBoundingClientRect();

    const handleMouseMove = (e: MouseEvent) => {
      // Get the mouse position relative to the center of the element
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate the difference between mouse position and center
      let moveX = (e.clientX - centerX) * sensitivity;
      let moveY = (e.clientY - centerY) * sensitivity;
      
      if (reverse) {
        moveX = -moveX;
        moveY = -moveY;
      }
      
      setPosition({ x: moveX, y: moveY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [elementRef, sensitivity, reverse]);

  return position;
};