
import { useEffect, useCallback } from 'react';

export const useScrollAnimation = (selector: string) => {
  const handleScroll = useCallback(() => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
      const htmlElement = el as HTMLElement; // Type assertion
      const elementTop = htmlElement.getBoundingClientRect().top;
      const elementBottom = htmlElement.getBoundingClientRect().bottom;
      // Check if element is partially in view
      const isVisible = elementTop < window.innerHeight && elementBottom > 0;

      if (isVisible) {
        if (htmlElement.dataset.animationDelay) {
            setTimeout(() => {
                htmlElement.classList.add('is-visible');
            }, parseFloat(htmlElement.dataset.animationDelay!) * 1000);
        } else {
            htmlElement.classList.add('is-visible');
        }
      }
      // Optional: remove 'is-visible' when scrolling out of view - not in original spec
      // else {
      //   htmlElement.classList.remove('is-visible');
      // }
    });
  }, [selector]);

  useEffect(() => {
    // Initial check in case elements are already in view
    handleScroll(); 

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll); // Re-check on resize

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [handleScroll]);
};
