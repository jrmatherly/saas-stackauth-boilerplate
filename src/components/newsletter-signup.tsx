'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import confetti from 'canvas-confetti';
import { AnimatePresence, motion } from 'framer-motion';
import { Send } from 'lucide-react';
import React, { useState } from 'react';

export interface NewsletterSignupProps {
  onSubmitAction: (email: string) => Promise<void>;
  className?: string;
}

export const NewsletterSignup: React.FC<NewsletterSignupProps> = ({
  onSubmitAction,
  className = '',
}) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Email is required');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      await onSubmitAction(email);
      setIsSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`bg-gradient-to-br from-cyan-300/50 via-teal-400/40 to-fuchsia-300/30 dark:from-cyan-400/40 dark:via-teal-300/35 dark:to-fuchsia-400/30 backdrop-blur-xl border border-white/40 dark:border-white/30 shadow-xl rounded-lg p-6 ${className}`}
    >
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div className="flex items-start justify-center gap-1 flex-col overflow-y-hidden">
              <motion.h2
                className="text-2xl font-bold text-black dark:text-white text-shadow-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Subscribe to our newsletter
              </motion.h2>
              <motion.p
                className="text-black/90 dark:text-white/90 text-shadow-md text-sm"
                initial={{ opacity: 0, y: 10, filter: 'blur(3px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ delay: 0.4 }}
              >
                Stay up to date with our latest Salty News and updates.
              </motion.p>
            </div>
            <div className="space-y-2">
              <motion.label
                initial={{ opacity: 0, filter: 'blur(3px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                transition={{ delay: 0.6 }}
                className="font-medium text-sm text-black dark:text-white text-shadow-md"
                htmlFor="email"
              >
                Email address
              </motion.label>
              <motion.div
                className="flex gap-3"
                initial={{ opacity: 0, filter: 'blur(3px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                transition={{ delay: 0.7 }}
              >
                <Input
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-white/30 bg-white/20 dark:bg-black/20 backdrop-blur-sm text-black dark:text-white placeholder:text-black/60 dark:placeholder:text-white/60 rounded-md focus-visible:ring-0 focus-within:ring-0 focus:outline-white/30"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative overflow-hidden px-5 py-2 min-w-[130px] bg-[hsl(var(--iridescent-pink))] hover:bg-[hsl(var(--iridescent-pink-dark))] text-white font-black tracking-wide rounded-md shadow-xl border border-white/50 transition-colors after:absolute after:inset-0 after:rounded-md after:shadow-[inset_0_0_6px_rgba(0,0,0,0.3)] after:pointer-events-none"
                >
                  <motion.div
                    key="default"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center justify-center gap-3"
                  >
                    <Send className="h-5 w-5" strokeWidth={2.5} />
                    <span
                      className="font-medium text-base whitespace-nowrap"
                      style={{
                        textShadow:
                          '0 1px 3px rgba(0,0,0,0.9), 0 0 6px rgba(0,0,0,0.6), 0 0 1px rgba(0,0,0,1)',
                        WebkitTextStroke: '0.5px rgba(0,0,0,0.5)',
                      }}
                    >
                      Get Salty
                    </span>
                  </motion.div>
                </Button>
              </motion.div>
            </div>
            <AnimatePresence>
              {error && (
                <motion.p
                  className="text-red-600 dark:text-red-300 text-shadow-sm text-sm"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                >
                  {error}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-black dark:text-white text-shadow-lg mb-2">
              Thank you for subscribing, stay Salty!
            </h2>
            <p className="text-black/90 dark:text-white/90 text-shadow-md">
              We've sent a Salty confirmation email to your inbox.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
