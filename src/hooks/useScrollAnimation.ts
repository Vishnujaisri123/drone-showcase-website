import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type ScrollAnimationProps = {
  target: string;
  animation: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale';
  delay?: number;
  duration?: number;
  once?: boolean;
  start?: string;
};

export const useScrollAnimation = ({
  target,
  animation,
  delay = 0,
  duration = 0.8,
  once = true,
  start = 'top 80%',
}: ScrollAnimationProps) => {
  useEffect(() => {
    const elements = document.querySelectorAll(target);
    
    if (elements.length === 0) return;
    
    let initialProps = {};
    let animateProps = {};
    
    switch (animation) {
      case 'fadeIn':
        initialProps = { opacity: 0 };
        animateProps = { opacity: 1 };
        break;
      case 'slideUp':
        initialProps = { opacity: 0, y: 50 };
        animateProps = { opacity: 1, y: 0 };
        break;
      case 'slideLeft':
        initialProps = { opacity: 0, x: 50 };
        animateProps = { opacity: 1, x: 0 };
        break;
      case 'slideRight':
        initialProps = { opacity: 0, x: -50 };
        animateProps = { opacity: 1, x: 0 };
        break;
      case 'scale':
        initialProps = { opacity: 0, scale: 0.8 };
        animateProps = { opacity: 1, scale: 1 };
        break;
      default:
        initialProps = { opacity: 0 };
        animateProps = { opacity: 1 };
    }
    
    elements.forEach((element) => {
      gsap.set(element, initialProps);
      
      ScrollTrigger.create({
        trigger: element,
        start,
        onEnter: () => {
          gsap.to(element, {
            ...animateProps,
            duration,
            delay,
            ease: 'power2.out',
          });
        },
        onEnterBack: () => !once && gsap.to(element, {
          ...animateProps,
          duration,
          delay,
          ease: 'power2.out',
        }),
        onLeave: () => !once && gsap.to(element, initialProps),
        onLeaveBack: () => !once && gsap.to(element, initialProps),
      });
    });
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [target, animation, delay, duration, once, start]);
};