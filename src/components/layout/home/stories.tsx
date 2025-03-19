'use client';

import AnimatedSection from '@/components/animated-section';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
// biome-ignore lint/correctness/noUnusedImports: not used directly
import React, { useState } from 'react';

// Testimonial data
const testimonials = [
  {
    quote:
      "Having an invisible illness means constantly explaining myself. This organization helped me find my voice and taught me I don't owe anyone an explanation.",
    name: 'Alex Morgan',
    illness: 'Fibromyalgia',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80',
  },
  {
    quote:
      'The resources here helped me explain my condition to my employer, and I finally received the accommodations I needed to continue working.',
    name: 'James Chen',
    illness: 'Multiple Sclerosis',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80',
  },
  {
    quote:
      'For years, I felt alone in my struggle. Finding this community of people who understand invisible pain changed everything for me.',
    name: 'Sarah Johnson',
    illness: 'Chronic Fatigue Syndrome',
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80',
  },
];

const Stories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <AnimatedSection
      id="stories"
      className="section-padding pt-16 pb-16 relative overflow-hidden"
    >
      <div className="container-narrow relative z-10">
        <div className="text-center mb-16 backdrop-blur-lg bg-white/40 dark:bg-black/60 py-8 px-4 rounded-xl shadow-lg border border-white/30 dark:border-white/10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground dark:text-white text-shadow-xl">
            Real Stories
          </h2>
          <p className="text-lg text-foreground dark:text-white max-w-2xl mx-auto text-shadow-lg">
            Hear from people living with invisible illnesses about their
            experiences, challenges, and triumphs.
          </p>
        </div>

        <div className="relative">
          <div className="glass-card rounded-2xl p-8 md:p-12 shadow-lg overflow-hidden backdrop-blur-md bg-white/50 dark:bg-black/60 border border-white/40 dark:border-white/20">
            <div className="absolute top-6 left-8 text-iridescent-pink dark:text-iridescent-pink opacity-30">
              <Quote size={80} strokeWidth={2.5} className="drop-shadow-lg" />
            </div>

            <div className="relative z-10">
              <AnimatedSection
                key={currentIndex}
                animation="fade-in"
                className="flex flex-col items-center"
              >
                <p className="text-xl md:text-2xl mb-8 text-center relative italic text-balance text-foreground dark:text-white text-shadow-lg font-medium">
                  "{testimonials[currentIndex]?.quote}"
                </p>

                <div className="flex items-center mt-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden mr-5 border-3 border-white/70 dark:border-white/30 shadow-lg">
                    <img
                      src={testimonials[currentIndex]?.image}
                      alt={testimonials[currentIndex]?.name || 'Testimonial author'}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-lg text-foreground dark:text-white text-shadow-md">
                      {testimonials[currentIndex]?.name}
                    </h4>
                    <p className="text-sm text-foreground dark:text-gray-100 text-shadow-sm">
                      {testimonials[currentIndex]?.illness}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-6">
            <button
              type="button"
              onClick={handlePrev}
              className={cn(
                'w-12 h-12 rounded-full flex items-center justify-center',
                'bg-white/60 dark:bg-black/60 backdrop-blur-md',
                'border-2 border-white/50 dark:border-white/20',
                'text-foreground dark:text-white hover:text-iridescent-pink dark:hover:text-iridescent-pink',
                'shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-accent/50'
              )}
            >
              <ChevronLeft size={24} className="drop-shadow-md" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className={cn(
                'w-12 h-12 rounded-full flex items-center justify-center',
                'bg-white/60 dark:bg-black/60 backdrop-blur-md',
                'border-2 border-white/50 dark:border-white/20',
                'text-foreground dark:text-white hover:text-iridescent-pink dark:hover:text-iridescent-pink',
                'shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-accent/50'
              )}
            >
              <ChevronRight size={24} className="drop-shadow-md" />
            </button>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Stories;
