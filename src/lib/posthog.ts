import { PostHog } from "posthog-node";
import { env } from "@/env";

// use this client for server side
export default function PostHogClient(): PostHog | undefined {
  if (!env.NEXT_PUBLIC_POSTHOG_KEY) {
    return undefined;
  }

  try {
    return new PostHog(env.NEXT_PUBLIC_POSTHOG_KEY, {
      host: env.NEXT_PUBLIC_POSTHOG_HOST,
      flushAt: 1,
      flushInterval: 0,
    });
  } catch (error) {
    console.error("Failed to initialize PostHog client:", error);
    return undefined;
  }
}
