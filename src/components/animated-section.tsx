'use client';

import { cn } from '@/lib/utils';
import React, { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in' | 'fade-in-right' | 'fade-in-left' | 'scale-in';
  delay?: number;
  threshold?: number;
  id?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  animation = 'fade-in',
  delay = 0,
  threshold = 0.1,
  id,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry?.target);
        }
      },
      {
        threshold,
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={cn(
        'transition-opacity duration-700',
        isVisible ? `opacity-100 animate-${animation}` : 'opacity-0',
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </section>
  );
};

export default AnimatedSection;
