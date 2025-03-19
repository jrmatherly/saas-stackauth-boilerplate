'use client';

import { WavyBackground } from './wavy-background';

interface WavyBackgroundWrapperProps {
  children: React.ReactNode;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: 'slow' | 'fast';
  waveOpacity?: number;
  className?: string;
}

export default function WavyBackgroundWrapper({
  children,
  colors,
  waveWidth = 50,
  backgroundFill = 'transparent',
  blur = 10,
  speed = 'fast',
  waveOpacity = 0.5,
  className,
}: WavyBackgroundWrapperProps) {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <WavyBackground
        containerClassName="absolute inset-0 w-full h-full"
        className={className}
        colors={colors}
        waveWidth={waveWidth}
        backgroundFill={backgroundFill}
        blur={blur}
        speed={speed}
        waveOpacity={waveOpacity}
      />
      <div className="relative z-10 dark:text-white text-shadow-md">
        {children}
      </div>
    </div>
  );
}
