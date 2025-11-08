/**
 * Initialize Google Analytics
 * Defers loading gtag script until after page load to avoid blocking critical rendering
 * Loads gtag script and configures with measurement ID from environment variables
 */
export const initializeAnalytics = () => {
  const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;

  if (!gaId) {
    console.warn('Google Analytics Measurement ID not configured');
    return;
  }

  // Initialize dataLayer and gtag function immediately (doesn't load script yet)
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    // Push arguments array to dataLayer as gtag() is called with various signatures
    window.dataLayer.push(args);
  }
  window.gtag = gtag;

  // Defer GTM script loading until after page load
  if (document.readyState === 'loading') {
    // Page still loading, wait for load event
    window.addEventListener('load', () => {
      // Additional delay to ensure page is fully interactive
      setTimeout(() => {
        loadGTMScript(gaId);
      }, 2000);
    });
  } else {
    // Page already loaded, queue for next idle time
    setTimeout(() => {
      loadGTMScript(gaId);
    }, 2000);
  }
};

/**
 * Load GTM script - separated for deferred loading
 */
function loadGTMScript(gaId: string) {
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  document.head.appendChild(script);

  // Call gtag after script loads
  script.onload = () => {
    window.gtag?.('js', new Date());
    window.gtag?.('config', gaId);
  };
}

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
