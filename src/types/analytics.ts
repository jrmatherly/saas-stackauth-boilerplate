/**
 * Type definition for analytics TrackingOptions
 */
export interface TrackingOptions {
  userAgent?: string;
  sessionId: string;
  language?: string;
  clientIp?: string; // Add client IP option
}

/**
 * Type definition for analytics user SessionData
 */
export interface SessionData {
  userId?: string;
  email?: string;
  role?: string;
  isAuthenticated?: boolean;
  lastActive?: string;
}

/**
 * Type definition for custom analytics events
 */
export interface CustomEventData {
  category: string;
  action: string;
  label?: string;
  value?: number;
  nonInteraction?: boolean;
  metadata?: Record<string, unknown>;
}
