// Lightweight analytics helper — safe to call even before GA is loaded.
export function track(eventName, params = {}) {
  if (typeof window === 'undefined') return;
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, {
      ...params,
      send_to: import.meta.env.VITE_GA_ID || 'G-XXXXXXXXXX',
    });
  }
  if (import.meta.env.DEV) {
    console.debug('[analytics]', eventName, params);
  }
}

export function trackScrollDepth() {
  const marks = [25, 50, 75, 90];
  const fired = new Set();
  const onScroll = () => {
    const h = document.documentElement;
    const pct = ((h.scrollTop + window.innerHeight) / h.scrollHeight) * 100;
    marks.forEach((m) => {
      if (pct >= m && !fired.has(m)) {
        fired.add(m);
        track('scroll_depth', { percent: m });
      }
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  return () => window.removeEventListener('scroll', onScroll);
}
