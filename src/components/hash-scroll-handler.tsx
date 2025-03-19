'use client';

import { useHashScroll } from '@/hooks/use-hash-scroll';

/**
 * A client component that handles hash-based scrolling
 * This can be imported into server components without making them client components
 */
export default function HashScrollHandler() {
  // Use the custom hook with default values
  useHashScroll();

  // This component doesn't render anything
  return null;
}
