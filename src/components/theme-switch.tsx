'use client';

import { MoonFilledIcon, SunFilledIcon } from '@/components/icons/svg-icons';
import { useTheme } from 'next-themes';
import { FC, useEffect, useState } from 'react';

interface ThemeSwitchProps {
  className?: string;
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({ className }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className={`flex items-center justify-center p-2 transition-all hover:scale-110 active:scale-95 outline-none focus:outline-none focus-visible:outline-none focus-visible:ring-0 border-none ${className}`}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      type="button"
    >
      {theme === 'dark' ? (
        <SunFilledIcon
          size={30}
          className="text-yellow-400 drop-shadow-lg"
          style={{
            filter:
              'drop-shadow(0 2px 4px rgba(0,0,0,0.7)) drop-shadow(0 0 8px rgba(250,204,21,0.5))',
            stroke: 'currentColor',
            strokeWidth: 1,
          }}
        />
      ) : (
        <MoonFilledIcon
          size={30}
          className="text-indigo-500 drop-shadow-lg"
          style={{
            filter:
              'drop-shadow(0 2px 4px rgba(0,0,0,0.7)) drop-shadow(0 0 8px rgba(99,102,241,0.5))',
            stroke: 'currentColor',
            strokeWidth: 1,
          }}
        />
      )}
    </button>
  );
};
