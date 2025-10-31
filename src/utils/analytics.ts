/**
 * Initialize Google Analytics
 * Loads gtag script and configures with measurement ID from environment variables
 */
export const initializeAnalytics = () => {
  const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;

  if (!gaId) {
    console.warn('Google Analytics Measurement ID not configured');
    return;
  }

  // Load gtag script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  document.head.appendChild(script);

  // Initialize dataLayer and gtag function
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    // Push arguments array to dataLayer as gtag() is called with various signatures
    window.dataLayer.push(args);
  }
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', gaId);
};

/**
 * Track page view for SPA route changes
 * Called whenever the route changes in App.tsx
 */
export const trackPageView = (path: string) => {
  if (!window.gtag) {
    return;
  }

  window.gtag('event', 'page_view', {
    page_path: path,
    page_title: document.title,
  });
};

/**
 * Track custom events (e.g., form submissions, button clicks)
 */
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (!window.gtag) {
    return;
  }

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
