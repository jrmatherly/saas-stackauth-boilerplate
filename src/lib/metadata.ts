import env from '@/config/env';
import { APP_AUTHOR, APP_LOGO, APP_NAME } from '@/config/settings';
import type { Metadata } from 'next/types';

/*
 * Define Application Metadata
 */
export function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    openGraph: {
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      url: env.NEXT_PUBLIC_APP_URL,
      images: APP_LOGO,
      siteName: APP_NAME,
      ...override.openGraph,
    },
    twitter: {
      card: 'summary_large_image',
      creator: APP_AUTHOR,
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      images: APP_LOGO,
      ...override.twitter,
    },
    metadataBase: override.metadataBase ?? new URL(env.NEXT_PUBLIC_APP_URL),
  };
}
