import { useEffect } from 'react';

const useCustomCursor = () => {
  useEffect(() => {
    // Create cursor element
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    // Track mouse position
    const updateCursorPosition = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    // Handle interactions
    const expandCursor = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
    };

    const shrinkCursor = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    };

    // Add listeners for interactive elements
    const addInteractiveListeners = () => {
      const interactiveElements = document.querySelectorAll('a, button, input, select, textarea, [role="button"]');
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', expandCursor);
        el.addEventListener('mouseleave', shrinkCursor);
      });
    };

    // Set up event listeners
    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('DOMContentLoaded', addInteractiveListeners);

    // For dynamic content changes
    const observer = new MutationObserver(addInteractiveListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    // Clean up
    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      document.body.removeChild(cursor);
      observer.disconnect();
      
      const interactiveElements = document.querySelectorAll('a, button, input, select, textarea, [role="button"]');
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', expandCursor);
        el.removeEventListener('mouseleave', shrinkCursor);
      });
    };
  }, []);
};

export default useCustomCursor;