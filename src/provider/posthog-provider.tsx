"use client";

import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { useEffect } from "react";
import { env } from "@/env";

export function PosthogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (!env.NEXT_PUBLIC_POSTHOG_KEY || typeof window === 'undefined') {
      return;
    }

    try {
      posthog.init(env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host: env.NEXT_PUBLIC_POSTHOG_HOST ?? 'https://app.posthog.com',
        person_profiles: "identified_only",
        capture_pageview: false,
        capture_pageleave: true,
      });
    } catch (error) {
      console.error('Failed to initialize PostHog:', error);
    }
  }, []);

  if (!env.NEXT_PUBLIC_POSTHOG_KEY || typeof window === 'undefined') {
    return <>{children}</>;
  }

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
