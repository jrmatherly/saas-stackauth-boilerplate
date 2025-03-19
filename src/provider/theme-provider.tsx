'use client';

import { HeroUIProvider, ToastProvider } from '@heroui/react';
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes';
import { useRouter } from 'next/navigation';
import * as React from 'react';

export interface ThemeProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

declare module '@react-types/shared' {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>['push']>[1]
    >;
  }
}

export function Theme({ children, themeProps }: ThemeProps) {
  const router = useRouter();

  return (
    <HeroUIProvider navigate={router.push} spinnerVariant="wave">
      <ToastProvider
        placement="top-right"
        toastOffset={60}
        toastProps={{
          radius: 'md',
          color: 'secondary',
          variant: 'bordered',
          timeout: 3000,
        }}
      />
      <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
    </HeroUIProvider>
  );
}
