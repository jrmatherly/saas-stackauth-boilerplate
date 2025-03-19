'use client';

import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};
export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  const handleNext = useCallback(() => {
    setActive(prev => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = useCallback(() => {
    setActive(prev => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    // Set mounted state to true after component mounts to prevent hydration mismatch
    setIsMounted(true);

    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, handleNext]);

  const randomRotateY = () => {
    // Use a consistent seed for server and client
    return -10 + ((active * 5) % 20);
  };

  // Don't render animations until client-side to prevent hydration mismatches
  if (!isMounted) {
    return (
      <div className="max-w-sm md:max-w-4xl mx-auto antialiased font-sans px-4 md:px-8 lg:px-12 py-20">
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <div className="relative h-80 w-full">
              <div className="absolute inset-0 origin-bottom">
                <Image
                  src={testimonials[0]?.src || '/placeholder-image.jpg'}
                  alt={testimonials[0]?.name || 'Testimonial'}
                  width={500}
                  height={500}
                  draggable={false}
                  className="h-full w-full rounded-3xl object-cover object-center"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between flex-col py-4">
            <div>
              <div className="backdrop-blur-md bg-white/30 dark:bg-black/50 p-4 rounded-lg shadow-lg mb-4">
                <h3 className="text-2xl font-bold text-foreground dark:text-white text-shadow-xl">
                  {testimonials[0]?.name}
                </h3>
                <p className="text-sm text-foreground dark:text-white text-shadow-md">
                  {testimonials[0]?.designation}
                </p>
              </div>
              <p className="text-lg text-foreground dark:text-white mt-8 text-shadow-md backdrop-blur-sm bg-white/10 dark:bg-black/30 p-4 rounded-lg">
                {testimonials[0]?.quote}
              </p>
            </div>
            <div className="flex gap-4 pt-12 md:pt-0">
              <button
                type="button"
                onClick={handlePrev}
                className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
              >
                <IconArrowLeft className="h-5 w-5 text-black dark:text-white group-hover/button:rotate-12 transition-transform duration-300" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
              >
                <IconArrowRight className="h-5 w-5 text-black dark:text-white group-hover/button:-rotate-12 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-sm md:max-w-4xl mx-auto antialiased font-sans px-4 md:px-8 lg:px-12 py-20">
      <div className="relative grid grid-cols-1 md:grid-cols-2  gap-20">
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 999
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: 'easeInOut',
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex justify-between flex-col py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: 'easeInOut',
            }}
          >
            <div className="backdrop-blur-md bg-white/30 dark:bg-black/50 p-4 rounded-lg shadow-lg mb-4">
              <h3 className="text-2xl font-bold text-foreground dark:text-white text-shadow-xl">
                {testimonials[active]?.name}
              </h3>
              <p className="text-sm text-foreground dark:text-white text-shadow-md">
                {testimonials[active]?.designation}
              </p>
            </div>
            <motion.p className="text-lg text-foreground dark:text-white mt-8 text-shadow-md backdrop-blur-sm bg-white/10 dark:bg-black/30 p-4 rounded-lg">
              {(() => {
                // Pre-process the words to create stable identifiers
                const quote = testimonials[active]?.quote || '';
                const words = quote.split(' ');
                // Create a map of word occurrences to generate unique keys
                const wordOccurrences = new Map();

                return words.map((word, i) => {
                  // Count occurrences of this word so far
                  const count = wordOccurrences.get(word) || 0;
                  wordOccurrences.set(word, count + 1);

                  // Create a stable key that doesn't rely on array index
                  const stableKey = `testimonial-${active}-${word}-${count}`;

                  return (
                    <motion.span
                      key={stableKey}
                      initial={{
                        filter: 'blur(10px)',
                        opacity: 0,
                        y: 5,
                      }}
                      animate={{
                        filter: 'blur(0px)',
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.2,
                        ease: 'easeInOut',
                        delay: 0.02 * i, // Still use index for delay timing
                      }}
                      className="inline-block dark:text-white text-shadow-sm"
                    >
                      {word}&nbsp;
                    </motion.span>
                  );
                });
              })()}
            </motion.p>
          </motion.div>
          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              type="button"
              onClick={handlePrev}
              className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
            >
              <IconArrowLeft className="h-5 w-5 text-black dark:text-white group-hover/button:rotate-12 transition-transform duration-300" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
            >
              <IconArrowRight className="h-5 w-5 text-black dark:text-white group-hover/button:-rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
