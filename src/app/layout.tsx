import "@/styles/globals.css";

import { StackProvider, StackTheme } from "@stackframe/stack";
import { stackServerApp } from "@/stack";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "@/trpc/react";
import { PosthogProvider } from "@/provider/posthog-provider";

export const metadata: Metadata = {
  title: "SaaS Template",
  description: "Created by Robin Faraj",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body
        className={
          "min-h-screen bg-background font-sans text-foreground antialiased"
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
