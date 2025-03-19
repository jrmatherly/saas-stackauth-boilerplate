'use client';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';

export const FlipWords = ({
  words,
  duration = 3000,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentWord, setCurrentWord] = useState(words[0] ?? '');
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  // thanks for the fix Julian - https://github.com/Julian-AT
  const startAnimation = useCallback(() => {
    const word = words[words.indexOf(currentWord) + 1] ?? words[0] ?? '';
    setCurrentWord(word);
    setIsAnimating(true);
  }, [currentWord, words]);

  useEffect(() => {
    if (!isAnimating)
      setTimeout(() => {
        startAnimation();
      }, duration);
  }, [isAnimating, duration, startAnimation]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        setIsAnimating(false);
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 10,
        }}
        exit={{
          opacity: 0,
          y: -40,
          x: 40,
          filter: 'blur(8px)',
          scale: 2,
          position: 'absolute',
        }}
        className={cn(
          'relative z-10 inline-block px-2 text-left text-neutral-900 dark:text-neutral-100',
          className
        )}
        key={currentWord}
      >
        {/* edit suggested by Sajal: https://x.com/DewanganSajal */}
        {currentWord.split(' ').map(word => {
          // Create a unique ID for this word that doesn't use the index
          const wordId = `word-${word}-${Math.random().toString(36).substring(2, 9)}`;

          return (
            <motion.span
              key={wordId}
              initial={{ opacity: 0, y: 10, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{
                delay: word.length * 0.05, // Use word length instead of index for delay
                duration: 0.3,
              }}
              className="inline-block whitespace-nowrap"
            >
              {word.split('').map(letter => {
                // Create a unique ID for this letter that doesn't use the index
                const letterId = `letter-${letter}-${wordId}-${Math.random().toString(36).substring(2, 9)}`;

                return (
                  <motion.span
                    key={letterId}
                    initial={{ opacity: 0, y: 10, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{
                      delay: (letter.charCodeAt(0) % 5) * 0.05, // Use character code instead of index for delay
                      duration: 0.2,
                    }}
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                );
              })}
              <span className="inline-block">&nbsp;</span>
            </motion.span>
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
};
