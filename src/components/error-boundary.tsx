'use client';

import { Button } from '@/components/ui/button';
import * as Sentry from '@sentry/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  type FallbackProps,
  ErrorBoundary as ReactErrorBoundary,
} from 'react-error-boundary';

/**
 * Fallback UI component displayed when an error occurs
 */
function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  const router = useRouter();
  const [showDetails, setShowDetails] = useState(false);

  // Log the error to console in development
  useEffect(() => {
    console.error('Error caught by ErrorBoundary:', error);
  }, [error]);

  return (
    <div className="flex w-full max-w-md flex-col items-center justify-center rounded-lg border border-red-500/20 bg-black/80 p-6 backdrop-blur-lg">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-500/20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      </div>
      <h2 className="mb-2 text-xl font-bold text-red-500">
        Something went wrong
      </h2>
      <p className="mb-4 text-center text-gray-300">
        We've encountered an unexpected error. Our team has been notified.
      </p>

      <div className="mb-4 flex w-full flex-col gap-2">
        <Button
          onClick={resetErrorBoundary}
          className="w-full bg-red-600 hover:bg-red-700"
        >
          Try again
        </Button>
        <Button
          onClick={() => router.push('/')}
          variant="outline"
          className="w-full border-red-500/30 text-red-400 hover:bg-red-950/30"
        >
          Return to home
        </Button>
      </div>

      <button
        onClick={() => setShowDetails(!showDetails)}
        className="text-sm text-gray-400 underline hover:text-gray-300"
        type="button"
      >
        {showDetails ? 'Hide' : 'Show'} error details
      </button>

      {showDetails && (
        <div className="mt-4 w-full overflow-auto rounded bg-black/50 p-4">
          <p className="font-mono text-xs text-red-400">{error.message}</p>
          {error.stack && (
            <pre className="mt-2 max-h-40 overflow-auto font-mono text-xs text-gray-400">
              {error.stack}
            </pre>
          )}
        </div>
      )}
    </div>
  );
}

/**
 * Error boundary component that catches errors in its child components
 * and reports them to Sentry
 */
export function ErrorBoundary({ children }: { children: React.ReactNode }) {
  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error, errorInfo) => {
        // Log to Sentry
        Sentry.captureException(error, {
          contexts: {
            react: {
              componentStack: errorInfo.componentStack || '',
            },
          },
        });
      }}
    >
      {children}
    </ReactErrorBoundary>
  );
}
