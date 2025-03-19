import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    /** Node.js Configuration */
    NODE_TLS_REJECT_UNAUTHORIZED: z.string().optional(),
    NODE_ENV: z
      .enum(['development', 'test', 'production'])
      .default('development'),
    PORT: z.coerce.number().default(3000),
    IGNORE_SSL_VERIFICATION: z
      .string()
      .transform(val => val.toLowerCase() === 'true')
      .default('true'),

    /** Database Configuration */
    DATABASE_URL: z
      .string()
      .url()
      .refine(
        url =>
          url.startsWith('postgres://') ||
          url.startsWith('postgresql://') ||
          url.startsWith('mysql://') ||
          url.startsWith('sqlite://'),
        { message: 'DATABASE_URL must be a valid database connection string' }
      ),

    /** Email Configuration */
    EMAIL_USERNAME: z
      .string()
      .email({ message: 'Invalid email address format' }),
    EMAIL_APP_PASSWORD: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters long' }),
    RESEND_API_KEY: z.string().optional(),
    RESEND_AUDIENCE_ID: z.string().optional(),

    /** Authentication Configuration */
    STACK_SECRET_SERVER_KEY: z.string().min(1),

    /** Application Monitoring */
    SENTRY_ORG: z.string().optional(),
    SENTRY_PROJECT: z.string().optional(),
  },

  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  client: {
    /** Authentication Configuration */
    NEXT_PUBLIC_STACK_PROJECT_ID: z.string().min(1),
    NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY: z.string().min(1),

    /** Application Configuration */
    NEXT_PUBLIC_APP_AUTHOR: z.string().default('App Author'),
    NEXT_PUBLIC_APP_DESCRIPTION: z.string().default('App Description'),
    NEXT_PUBLIC_APP_LOGO: z.string().default('/logo.svg'),
    NEXT_PUBLIC_APP_NAME: z.string().default('App Name'),
    NEXT_PUBLIC_APP_URL: z.string().url().default('http://localhost:3000'),
    NEXT_PUBLIC_APP_CONTACT_EMAIL: z
      .string()
      .email()
      .default('website@spoonsofsalt.org'),

    /** Logging Configuration */
    NEXT_PUBLIC_LOG_LEVEL: z
      .enum(['debug', 'info', 'warn', 'error'])
      .default('info'),
    NEXT_PUBLIC_SHOW_LOGGER: z
      .string()
      .transform(val => val.toLowerCase() === 'true')
      .default('false'),

    /** Analytics Configuration */
    NEXT_PUBLIC_POSTHOG_HOST: z.string().url().optional(),
    NEXT_PUBLIC_POSTHOG_KEY: z.string().optional(),
  },

  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    /** Node.js Configuration */
    NODE_TLS_REJECT_UNAUTHORIZED: process.env.NODE_TLS_REJECT_UNAUTHORIZED,
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
    IGNORE_SSL_VERIFICATION: process.env.IGNORE_SSL_VERIFICATION,

    /** Database Configuration */
    DATABASE_URL: process.env.DATABASE_URL,

    /** Email Configuration */
    EMAIL_USERNAME: process.env.EMAIL_USERNAME,
    EMAIL_APP_PASSWORD: process.env.EMAIL_APP_PASSWORD,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    RESEND_AUDIENCE_ID: process.env.RESEND_AUDIENCE_ID,

    /** Authentication Configuration */
    STACK_SECRET_SERVER_KEY: process.env.STACK_SECRET_SERVER_KEY,
    NEXT_PUBLIC_STACK_PROJECT_ID: process.env.NEXT_PUBLIC_STACK_PROJECT_ID,
    NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY:
      process.env.NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY,

    /** Application Configuration */
    NEXT_PUBLIC_APP_AUTHOR: process.env.NEXT_PUBLIC_APP_AUTHOR,
    NEXT_PUBLIC_APP_DESCRIPTION: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
    NEXT_PUBLIC_APP_LOGO: process.env.NEXT_PUBLIC_APP_LOGO,
    NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_APP_CONTACT_EMAIL: process.env.NEXT_PUBLIC_APP_CONTACT_EMAIL,

    /** Logging Configuration */
    NEXT_PUBLIC_LOG_LEVEL: process.env.NEXT_PUBLIC_LOG_LEVEL,
    NEXT_PUBLIC_SHOW_LOGGER: process.env.NEXT_PUBLIC_SHOW_LOGGER,

    /** Application Monitoring */
    SENTRY_ORG: process.env.SENTRY_ORG,
    SENTRY_PROJECT: process.env.SENTRY_PROJECT,

    /** Analytics Configuration */
    NEXT_PUBLIC_POSTHOG_HOST: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    NEXT_PUBLIC_POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY,
  },
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially
   * useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  /**
   * Makes it so that empty strings are treated as undefined. `SOME_VAR: z.string()` and
   * `SOME_VAR=''` will throw an error.
   */
  emptyStringAsUndefined: true,
});
