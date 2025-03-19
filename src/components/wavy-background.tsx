'use client';

import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';
// Don't import createNoise3D directly to avoid SSR issues

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth = 50,
  backgroundFill = 'transparent',
  blur = 10,
  speed = 'fast',
  waveOpacity = 0.5,
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: 'slow' | 'fast';
  waveOpacity?: number;
  [key: string]: unknown;
}) => {
  // Create refs for canvas, animation, and context
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  // Safari detection
  const [isSafari, setIsSafari] = useState(false);

  // Wave colors with fallback - exactly matching the original code
  const waveColors = colors ?? [
    '#38bdf8', // Light blue
    '#818cf8', // Indigo
    '#c084fc', // Purple
    '#e879f9', // Pink
    '#22d3ee', // Cyan
  ];

  // Initialize canvas and start animation
  useEffect(() => {
    // Only run on client
    if (typeof window === 'undefined') return;

    // Import noise function dynamically
    import('simplex-noise')
      .then(({ createNoise3D }) => {
        if (!canvasRef.current) return;

        const noise = createNoise3D();
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        if (!ctx) return;

        // Setup canvas
        let w = window.innerWidth;
        let h = window.innerHeight;
        canvas.width = w;
        canvas.height = h;

        let nt = 0;

        // Handle window resize
        const handleResize = () => {
          w = window.innerWidth;
          h = window.innerHeight;
          canvas.width = w;
          canvas.height = h;
        };

        window.addEventListener('resize', handleResize);

        // Animation speed - matching original
        const getSpeed = () => {
          switch (speed) {
            case 'slow':
              return 0.001;
            case 'fast':
              return 0.002;
            default:
              return 0.001;
          }
        };

        // Draw wave function - closely matching original implementation
        const drawWave = () => {
          // Clear canvas first
          ctx.clearRect(0, 0, w, h);

          // Fill background if not transparent - following original order
          if (backgroundFill !== 'transparent') {
            ctx.fillStyle = backgroundFill;
            ctx.globalAlpha = waveOpacity;
            ctx.fillRect(0, 0, w, h);
          }

          // Draw distinct wave strands exactly as in original
          const waveCount = 5;
          for (let i = 0; i < waveCount; i++) {
            ctx.beginPath();
            // Set line width as in original
            ctx.lineWidth = waveWidth;
            // Ensure we always have a valid string for strokeStyle
            const colorIndex = i % waveColors.length;
            ctx.strokeStyle = waveColors[colorIndex] || '#000000'; // Fallback to black if undefined
            ctx.globalAlpha = 1; // Full opacity for the wave lines

            // Draw wave path using original approach
            for (let x = 0; x < w; x += 5) {
              // Use same frequency and approach as original
              const y = noise(x / 800, 0.3 * i, nt) * 100;
              // Reduced vertical separation between waves (15px instead of 20px)
              const offset = h * 0.5 + (i - 2) * 15;

              if (x === 0) {
                ctx.moveTo(x, y + offset);
              } else {
                ctx.lineTo(x, y + offset);
              }
            }

            ctx.stroke();
            ctx.closePath();
          }

          // Increment noise time
          nt += getSpeed();

          // Continue animation
          animationRef.current = requestAnimationFrame(drawWave);
        };

        // Start animation
        drawWave();

        // Check for Safari
        setIsSafari(
          navigator.userAgent.includes('Safari') &&
            !navigator.userAgent.includes('Chrome')
        );

        // Cleanup
        return () => {
          window.removeEventListener('resize', handleResize);
          cancelAnimationFrame(animationRef.current);
        };
      })
      .catch(error => {
        console.error('Failed to load simplex-noise:', error);
      });
  }, [backgroundFill, waveOpacity, waveWidth, speed, waveColors]);

  return (
    <div
      className={cn(
        'relative min-h-screen flex flex-col items-center justify-center overflow-hidden',
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        style={{
          filter: `blur(${blur}px)`,
        }}
      />
      <div className={cn('relative z-10', className)} {...props}>
        {children}
      </div>
    </div>
  );
};
