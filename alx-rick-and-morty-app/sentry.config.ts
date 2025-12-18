import * as Sentry from '@sentry/nextjs';

export const initSentry = () => {
  Sentry.init({
    // Use a placeholder DSN - replace with your actual Sentry DSN
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN || 'https://examplePublicKey@o0.ingest.sentry.io/0',
    // Set the environment
    environment: process.env.NODE_ENV,
    // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring
    tracesSampleRate: 1.0,
    // Set sample rate for error events
    sampleRate: 1.0,
  });
};
