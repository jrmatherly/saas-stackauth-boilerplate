'use client';

import { useEffect } from 'react';

/**
 * A hook that handles smooth scrolling to an element based on the URL hash
 * @param offset - The offset from the top of the element (default: 80px)
 * @param delay - The delay before scrolling (default: 100ms)
 */
export function useHashScroll(offset = 80, delay = 100) {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop - offset,
            behavior: 'smooth',
          });
        }, delay);
      }
    }
  }, [offset, delay]);
}

export default useHashScroll;
