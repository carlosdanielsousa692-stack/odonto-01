// Cal.com official embed utilities, attributes and fallback handler

declare global {
  interface Window {
    __CAL_EMBED_READY__?: boolean;
    __CAL_EMBED_FAILED__?: boolean;
    Cal?: {
      (action: string, ...args: any[]): void;
      ns?: Record<string, any>;
      loaded?: boolean;
      q?: any[];
      config?: {
        forwardQueryParams?: boolean;
        [key: string]: any;
      };
    };
  }
}

export const CAL_EVENT_LINK = 'carlos-uehebs-cauefz/doutor';
export const CAL_NAMESPACE = 'doutor';
export const CAL_ORIGIN = 'https://app.cal.com';
export const CAL_PUBLIC_URL = 'https://cal.com/carlos-uehebs-cauefz/doutor';

/**
 * Standard data attributes required by Cal.com official element-click embed.
 * When embed.js is active, clicking an element with these attributes intercepts
 * the event and launches the Cal modal iframe directly.
 */
export const calButtonAttributes = {
  'data-cal-link': CAL_EVENT_LINK,
  'data-cal-namespace': CAL_NAMESPACE,
  'data-cal-origin': CAL_ORIGIN,
  'data-cal-config': '{"layout":"month_view"}',
} as const;

/**
 * Fallback handler: checks if Cal.com is unavailable in this environment.
 * Executes synchronously within the user's click gesture to avoid browser popup blockers.
 * Does not use asynchronous setTimeout, guaranteeing compliance with popup blocker policies.
 */
export function handleCalFallback(e?: React.MouseEvent) {
  if (typeof window === 'undefined') return;

  // If the script failed to load or Cal is unavailable
  const isEmbedUnavailable = window.__CAL_EMBED_FAILED__ || typeof window.Cal === 'undefined';

  if (isEmbedUnavailable) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    window.open(CAL_PUBLIC_URL, '_blank', 'noopener,noreferrer');
  }
}

/**
 * Programmatically opens the Cal.com embed modal if invoked directly (e.g. from callbacks).
 * If the embed namespace is not available, opens the public link immediately in the user gesture.
 */
export function openCalModal(customLink?: string) {
  const link = customLink || CAL_EVENT_LINK;

  if (typeof window === 'undefined') return;

  try {
    if (window.Cal && window.Cal.ns && typeof window.Cal.ns[CAL_NAMESPACE] === 'function') {
      window.Cal.ns[CAL_NAMESPACE]('modal', {
        calLink: link,
        config: { layout: 'month_view' },
      });
      return;
    }

    if (typeof window.Cal === 'function') {
      window.Cal('modal', {
        calLink: link,
        config: { layout: 'month_view' },
      });
      return;
    }

    // Direct synchronous fallback if embed is missing
    window.open(CAL_PUBLIC_URL, '_blank', 'noopener,noreferrer');
  } catch (err) {
    console.warn('Cal.com modal trigger fallback:', err);
    window.open(CAL_PUBLIC_URL, '_blank', 'noopener,noreferrer');
  }
}
