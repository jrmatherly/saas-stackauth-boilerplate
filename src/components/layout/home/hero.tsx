'use client';

import { cn } from '@/lib/utils';
import { ArrowDown } from 'lucide-react';
// biome-ignore lint/correctness/noUnusedImports: not used directly
import React from 'react';

const Hero = () => {
  const scrollToMission = () => {
    const missionSection = document.getElementById('mission');
    if (missionSection) {
      window.scrollTo({
        top: missionSection.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="min-h-[85vh] flex flex-col justify-start items-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      {/* <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-accent/5 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-80 h-80 rounded-full bg-primary/5 animate-float" style={{ animationDelay: '2s' }} />
      </div> */}

      <div className="container mx-auto px-6 md:px-12 py-8 text-center">
        <div className="animate-fade-in">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-background/40 text-foreground font-medium text-sm dark:text-white text-shadow-md">
            Advocating for the chronically ill
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 tracking-tight text-balance dark:text-white text-shadow-xl">
            Making the <span className="text-gradient">Invisible</span> Visible
          </h1>

          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 text-foreground text-balance dark:text-white text-shadow-lg">
            We're dedicated to raising awareness, providing resources, and
            building a community for those affected by invisible illnesses.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={scrollToMission}
              className="px-8 py-3 rounded-lg bg-accent text-foreground font-medium transition-all hover:shadow-lg hover:bg-accent/90 focus:ring-2 focus:ring-accent/50 focus:outline-none dark:text-white text-shadow-md"
            >
              Learn More
            </button>

            <button
              type="button"
              onClick={() =>
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="px-8 py-3 rounded-lg bg-secondary text-foreground font-medium transition-all hover:bg-secondary/80 focus:ring-2 focus:ring-secondary/50 focus:outline-none dark:text-white text-shadow-md"
            >
              Get Involved
            </button>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={scrollToMission}
        className={cn(
          'absolute bottom-10 left-1/2 transform -translate-x-1/2',
          'w-10 h-10 flex items-center justify-center rounded-full',
          'text-muted-foreground hover:text-foreground dark:text-white dark:hover:text-iridescent-pink',
          'border border-border hover:border-accent',
          'transition-all animate-fade-in',
          'focus:outline-none focus:ring-2 focus:ring-accent/50'
        )}
        style={{ animationDelay: '1000ms' }}
      >
        <ArrowDown
          size={20}
          className="animate-bounce drop-shadow-lg"
          strokeWidth={2.5}
        />
      </button>
    </section>
  );
};

export default Hero;
