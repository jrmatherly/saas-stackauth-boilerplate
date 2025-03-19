'use client';

import { cn } from '@/lib/utils';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import React from 'react';

interface DonateButtonProps {
  text?: string;
  href?: string;
  icon?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

export const DonateButton: React.FC<DonateButtonProps> = ({
  text = 'Donate Now',
  href = '/donate',
  icon = 'lucide:heart',
  size = 'sm',
  className = '',
  onClick,
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

  const buttonClasses = cn(
    'bg-[hsl(var(--iridescent-pink))] hover:bg-[hsl(var(--iridescent-pink-dark))]',
    'text-white font-black tracking-wide rounded-md shadow-xl',
    'border border-white/50 transition-colors',
    'flex items-center justify-center relative',
    'after:absolute after:inset-0 after:rounded-md after:shadow-[inset_0_0_6px_rgba(0,0,0,0.3)] after:pointer-events-none',
    sizeClasses[size],
    className
  );

  // Custom text style with enhanced visibility
  const textStyle = {
    textShadow:
      '0 1px 3px rgba(0,0,0,0.9), 0 0 6px rgba(0,0,0,0.6), 0 0 1px rgba(0,0,0,1)',
    WebkitTextStroke: '0.5px rgba(0,0,0,0.5)',
  };

  // If onClick is provided, render a button element
  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={buttonClasses}>
        <Icon icon={icon} className={iconSizes[size]} style={textStyle} />
        <span style={textStyle}>{text}</span>
      </button>
    );
  }

  // Otherwise render a Link
  return (
    <Link href={href} className={buttonClasses}>
      <Icon icon={icon} className={iconSizes[size]} style={textStyle} />
      <span style={textStyle}>{text}</span>
    </Link>
  );
};

export default DonateButton;
