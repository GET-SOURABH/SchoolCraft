import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToLocation() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // Run after the destination route commits; the sticky-header offset is in CSS.
    const frame = requestAnimationFrame(() => {
      if (!hash) {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        return;
      }

      let targetId;
      try {
        targetId = decodeURIComponent(hash.slice(1));
      } catch {
        return;
      }
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({
          behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
          block: 'start',
        });
      } else {
        // Contact/process are intentionally not built yet. Land at the page top.
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash, key]);

  return null;
}

export default ScrollToLocation;
