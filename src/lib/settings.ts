import { env } from '@/env';
import type { Viewport } from 'next';

/*
 * Define process.environment Mode - use NEXT_PUBLIC prefix for client-side access
 */
export const isProd = env.NODE_ENV === 'production';
export const isDev = env.NODE_ENV === 'development';

/*
 * Show logger in local development or when explicitly enabled
 */
export const loggerConfig = {
  enabled: isDev ? true : env.NEXT_PUBLIC_SHOW_LOGGER,
  level: env.NEXT_PUBLIC_LOG_LEVEL,
} as const;

export const showLogger = loggerConfig.enabled;

/*
 * Define Application Constants - use NEXT_PUBLIC prefix for client-side access
 */
export const APP_AUTHOR = env.NEXT_PUBLIC_APP_AUTHOR || 'App Author';
export const APP_DESCRIPTION =
  env.NEXT_PUBLIC_APP_DESCRIPTION || 'App Description';
export const APP_LOGO = env.NEXT_PUBLIC_APP_LOGO || '/logo.png';
export const APP_NAME =
  env.NODE_ENV === 'development'
    ? `DEV - ${env.NEXT_PUBLIC_APP_NAME}`
    : env.NEXT_PUBLIC_APP_NAME;

/*
 * Define default viewport settings
 */
export const defaultViewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
};

/*
 * Define Site Config and export as type
 */
export type SiteConfig = typeof siteConfig;
export const siteConfig = {
  name: APP_NAME,
  description: APP_DESCRIPTION,
  author: APP_AUTHOR,
  logo: APP_LOGO,
};
