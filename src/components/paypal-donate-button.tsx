'use client';

import { DonateModal } from '@/components/donate-modal';
import React from 'react';

interface PayPalDonateButtonProps {
  hostedButtonId?: string;
  text?: string;
  icon?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  className?: string;
  sandboxMode?: boolean;
}

export const PayPalDonateButton: React.FC<PayPalDonateButtonProps> = ({
  hostedButtonId = 'NTUN845ZNPZHN',
  text = 'Donate Now',
  icon = 'lucide:heart',
  size = 'sm',
  className = '',
  sandboxMode = true,
}) => {
  const sizeClasses = {
    xs: 'px-3 py-1.5 text-xs gap-1',
    sm: 'px-4 py-1.5 text-sm gap-1.5',
    md: 'px-6 py-2 text-base gap-2',
    lg: 'px-8 py-3 text-lg gap-2.5',
  };

  const iconSizes = {
    xs: 'w-3.5 h-3.5',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  const buttonClasses = `
    bg-[hsl(var(--iridescent-pink))] hover:bg-[hsl(var(--iridescent-pink-dark))]
    text-white font-black tracking-wide rounded-md shadow-xl
    border border-white/50 transition-colors
    flex items-center justify-center relative
    after:absolute after:inset-0 after:rounded-md after:shadow-[inset_0_0_6px_rgba(0,0,0,0.3)] after:pointer-events-none
    ${sizeClasses[size]}
    ${className}
  `
    .trim()
    .replace(/\s+/g, ' ');

  // Custom text style with enhanced visibility
  const textStyle = {
    textShadow:
      '0 1px 3px rgba(0,0,0,0.9), 0 0 6px rgba(0,0,0,0.6), 0 0 1px rgba(0,0,0,1)',
    WebkitTextStroke: '0.5px rgba(0,0,0,0.5)',
  };

  return (
    <DonateModal
      hostedButtonId={hostedButtonId}
      sandboxMode={sandboxMode}
      buttonProps={{
        className: buttonClasses,
        icon: icon,
        iconSize: iconSizes[size],
        text: text,
        textStyle: textStyle,
      }}
    />
  );
};

export default PayPalDonateButton;
