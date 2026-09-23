import { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const links = [
  ['Home', '/'],
  ['Work', '/work'],
  ['Pricing', '/pricing'],
  ['Process', '/how-it-works'],
];

function NavigationLinks({ onNavigate, registerLink }) {
  const { pathname } = useLocation();

  const handleNavigate = (event, destination) => {
    if (pathname === destination) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    }
    onNavigate?.(event);
  };

  return links.map(([label, to]) => (
    <NavLink
      key={to}
      ref={(element) => registerLink?.(to, element)}
      to={to}
      end={to === '/'}
      className={({ isActive }) => isActive ? 'navbar-link-active' : undefined}
      onClick={(event) => handleNavigate(event, to)}
    >
      {label}
    </NavLink>
  ));
}

function DesktopNavigation() {
  const { pathname } = useLocation();
  const wrapperRef = useRef(null);
  const linkRefs = useRef(new Map());
  const hasPositioned = useRef(false);
  const observedSize = useRef(null);
  const measureRef = useRef(null);
  const [indicator, setIndicator] = useState({ x: 0, width: 0, ready: false, animated: false });

  const registerLink = useCallback((destination, element) => {
    if (element) linkRefs.current.set(destination, element);
    else linkRefs.current.delete(destination);
  }, []);

  const measureIndicator = useCallback((animated) => {
    const activeLink = linkRefs.current.get(pathname);

    if (!activeLink) {
      hasPositioned.current = false;
      setIndicator(previous => previous.ready ? { ...previous, ready: false, animated: false } : previous);
      return;
    }

    const next = {
      x: activeLink.offsetLeft,
      width: activeLink.offsetWidth,
      ready: true,
      animated,
    };

    setIndicator(previous => (
      previous.x === next.x
      && previous.width === next.width
      && previous.ready === next.ready
      && previous.animated === next.animated
        ? previous
        : next
    ));
  }, [pathname]);

  useLayoutEffect(() => {
    measureRef.current = measureIndicator;
  }, [measureIndicator]);

  useLayoutEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    measureIndicator(hasPositioned.current && !reducedMotion);
    hasPositioned.current = Boolean(linkRefs.current.get(pathname));
  }, [measureIndicator, pathname]);

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper || !('ResizeObserver' in window)) return undefined;

    let animationFrame;
    const observer = new ResizeObserver(([entry]) => {
      const nextSize = `${entry.contentRect.width}:${entry.contentRect.height}`;
      if (observedSize.current === null) {
        observedSize.current = nextSize;
        return;
      }
      if (observedSize.current === nextSize) return;

      observedSize.current = nextSize;
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(() => measureRef.current?.(false));
    });

    observer.observe(wrapper);
    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="navbar-links">
      <span
        className={`navbar-active-indicator${indicator.ready ? ' navbar-active-indicator--ready' : ''}${indicator.animated ? ' navbar-active-indicator--animated' : ''}`}
        style={{ width: `${indicator.width}px`, transform: `translate3d(${indicator.x}px, 0, 0)` }}
        aria-hidden="true"
      />
      <NavigationLinks registerLink={registerLink} />
    </div>
  );
}

const closeMobileMenu = (event) => {
  event.currentTarget.closest('details').open = false;
};

const Navbar = () => (
  <header className="site-header">
    <a className="skip-link" href="#main-content">Skip to content</a>
    <nav className="navbar container" aria-label="Main navigation">
      <Link to="/" className="navbar-brand" aria-label="SchoolCraft home">
        <span className="navbar-wordmark">SchoolCraft</span>
      </Link>
      <DesktopNavigation />
      <Link to="/contact" className="navbar-cta">Start a project <span aria-hidden="true">↗</span></Link>
      <details className="mobile-menu">
        <summary aria-label="Open navigation menu"><span>Menu</span><span className="menu-lines" aria-hidden="true" /></summary>
        <div className="mobile-menu-links">
          <NavigationLinks onNavigate={closeMobileMenu} />
          <Link to="/contact" className="mobile-menu-cta" onClick={closeMobileMenu}>Start a project <span aria-hidden="true">↗</span></Link>
        </div>
      </details>
    </nav>
  </header>
);

export default Navbar;
