import '@/styles/globals.css';

import { stackServerApp } from '@/stack';
import { StackProvider, StackTheme } from '@stackframe/stack';
import { GeistSans } from 'geist/font/sans';
import { type Metadata } from 'next';

import { PosthogProvider } from '@/provider/posthog-provider';
import { TRPCReactProvider } from '@/trpc/react';

export const metadata: Metadata = {
  title: 'AppName',
  description: 'App description',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.className} antialiased dark`}>
      <body
        className={
          'min-h-screen bg-background font-sans text-foreground antialiased'
        }
      >
        <PosthogProvider>
          <StackProvider app={stackServerApp}>
            <StackTheme>
              <TRPCReactProvider>{children}</TRPCReactProvider>
            </StackTheme>
          </StackProvider>
        </PosthogProvider>
      </body>
    </html>
  );
}
