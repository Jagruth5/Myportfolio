import { useEffect, useRef } from 'react';

type RevealDirection = 'up' | 'left' | 'right' | null;

export const useReveal = (direction: RevealDirection = null, threshold: number = 0.1) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const element = ref.current;
    if (element) {
      // Add appropriate class based on direction
      if (direction === 'up') {
        element.classList.add('reveal');
      } else if (direction === 'left') {
        element.classList.add('reveal-left');
      } else if (direction === 'right') {
        element.classList.add('reveal-right');
      } else {
        element.classList.add('reveal');
      }

      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [direction, threshold]);

  return ref;
};

export default useReveal;