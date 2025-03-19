'use client';

import AnimatedSection from '@/components/animated-section';
import { env } from '@/env';
import { cn } from '@/lib/utils';
import { Mail, MessageSquare, Send } from 'lucide-react';
// biome-ignore lint/correctness/noUnusedImports: not used directly
import React from 'react';

const Contact = () => {
  return (
    <AnimatedSection
      id="contact"
      className="section-padding pt-16 border-t border-divider dark:border-[hsl(var(--iridescent-pink-dark)/0.2)]"
    >
      <div className="container-narrow">
        <div className="text-center mb-16 backdrop-blur-lg bg-white/40 dark:bg-black/60 py-8 px-4 rounded-xl shadow-lg border border-white/30 dark:border-white/10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground dark:text-white text-shadow-xl">
            Get Involved
          </h2>
          <p className="text-lg text-foreground dark:text-white max-w-2xl mx-auto text-shadow-lg">
            Join our community, share your story, or support our mission to make
            invisible illnesses visible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedSection animation="fade-in-left">
            <div className="space-y-6 backdrop-blur-md bg-white/40 dark:bg-black/50 p-8 rounded-xl shadow-lg border border-white/30 dark:border-white/10">
              <h3 className="text-2xl font-bold text-foreground dark:text-white text-shadow-lg">
                Contact Us
              </h3>
              <p className="text-foreground dark:text-white text-shadow-md">
                Have questions or want to learn more about how you can get
                involved? Reach out to us using the form or through our contact
                information.
              </p>

              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full bg-white/70 dark:bg-black/70 text-iridescent-pink flex items-center justify-center mr-5 shadow-lg border-2 border-white/50 dark:border-white/20">
                  <Mail
                    size={28}
                    strokeWidth={2.5}
                    className="drop-shadow-lg"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-foreground dark:text-white text-shadow-md">
                    Email Us
                  </h4>
                  <p className="text-foreground dark:text-gray-100 text-shadow-sm">
                    {env.NEXT_PUBLIC_APP_CONTACT_EMAIL}
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full bg-white/70 dark:bg-black/70 text-iridescent-pink flex items-center justify-center mr-5 shadow-lg border-2 border-white/50 dark:border-white/20">
                  <MessageSquare
                    size={28}
                    strokeWidth={2.5}
                    className="drop-shadow-lg"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-foreground dark:text-white text-shadow-md">
                    Join Our Community
                  </h4>
                  <p className="text-foreground dark:text-gray-100 text-shadow-sm">
                    Connect with others who understand
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-right">
            <div className="glass-card rounded-2xl p-8 shadow-lg backdrop-blur-md bg-white/50 dark:bg-black/60 border border-white/40 dark:border-white/20">
              <form className="space-y-5">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-md font-semibold text-foreground dark:text-white text-shadow-sm"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border-2 border-white/30 dark:border-white/20 focus:border-iridescent-pink focus:ring-2 focus:ring-iridescent-pink/30 bg-white/80 dark:bg-black/50 focus:outline-none transition text-foreground dark:text-white"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-md font-semibold text-foreground dark:text-white text-shadow-sm"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border-2 border-white/30 dark:border-white/20 focus:border-iridescent-pink focus:ring-2 focus:ring-iridescent-pink/30 bg-white/80 dark:bg-black/50 focus:outline-none transition text-foreground dark:text-white"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-md font-semibold text-foreground dark:text-white text-shadow-sm"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border-2 border-white/30 dark:border-white/20 focus:border-iridescent-pink focus:ring-2 focus:ring-iridescent-pink/30 bg-white/80 dark:bg-black/50 focus:outline-none transition resize-none text-foreground dark:text-white"
                    placeholder="How would you like to get involved?"
                  />
                </div>

                <button
                  type="submit"
                  className={cn(
                    'w-full py-3 px-6 rounded-lg',
                    'bg-iridescent-pink text-white font-semibold',
                    'hover:bg-iridescent-pink/90 focus:ring-2 focus:ring-iridescent-pink/50 focus:outline-none',
                    'transition-all flex items-center justify-center gap-2 shadow-lg text-shadow-sm'
                  )}
                >
                  <span>Send Message</span>
                  <Send
                    size={18}
                    strokeWidth={2.5}
                    className="drop-shadow-sm"
                  />
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
