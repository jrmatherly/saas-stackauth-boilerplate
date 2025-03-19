'use client';

import { PayPalDonateButton } from '@/components/paypal-donate-button';
import React from 'react';

interface DonateBannerProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  className?: string;
}

export const DonateBanner: React.FC<DonateBannerProps> = ({
  title = 'Support Our Mission',
  description = 'Your donation helps us advocate for those with invisible illnesses.',
  buttonText = 'Donate Now',
  buttonHref = '/donate',
  className = '',
}) => {
  return (
    <div className={`mt-12 mb-6 ${className}`}>
      <div className="bg-gradient-to-br from-cyan-300/50 via-teal-400/40 to-fuchsia-300/30 dark:from-cyan-400/40 dark:via-teal-300/35 dark:to-fuchsia-400/30 backdrop-blur-xl border border-white/40 dark:border-white/30 shadow-xl rounded-lg p-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-black dark:text-white text-shadow-lg mb-2">
              {title}
            </h3>
            <p className="text-black/90 dark:text-white/90 text-shadow-md">
              {description}
            </p>
          </div>
          <PayPalDonateButton size="lg" />
          {/* <Link
            href={buttonHref}
            className="px-8 py-3 bg-[hsl(var(--iridescent-pink))] hover:bg-[hsl(var(--iridescent-pink-light))] text-white text-shadow-lg rounded-md shadow-lg border-2 border-transparent transition-colors flex items-center gap-2 font-medium text-lg"
          >
            <Icon icon="lucide:heart" className="w-6 h-6" />
            <span>{buttonText}</span>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default DonateBanner;
