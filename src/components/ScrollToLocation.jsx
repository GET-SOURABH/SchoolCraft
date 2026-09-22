import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToLocation() {
  const { pathname, hash, key } = useLocation();

  useLayoutEffect(() => {
    // Reset before paint so a new route never appears at the previous scroll position.
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
      // CSS owns smooth scrolling and its reduced-motion override.
      target.scrollIntoView({ block: 'start' });
    } else {
      // If an old or unknown anchor is used, land at the page top.
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [pathname, hash, key]);

  return null;
}

export default ScrollToLocation;
