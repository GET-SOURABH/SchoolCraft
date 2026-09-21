import { useCallback, useLayoutEffect, useRef } from 'react';

function Reveal({
  children,
  as: Element = 'div',
  className = '',
  delay = 0,
  direction = 'up',
  duration = 650,
  style,
  ...props
}) {
  const elementRef = useRef(null);
  const setElementRef = useCallback((element) => {
    elementRef.current = element;
  }, []);

  useLayoutEffect(() => {
    const element = elementRef.current;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!element || reducedMotion || !('IntersectionObserver' in window)) return undefined;

    element.classList.add('reveal--pending');
    let completionTimer;
    let handleTransitionEnd;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;

      element.classList.add('reveal--visible');
      observer.unobserve(element);

      const finishReveal = () => {
        element.classList.remove('reveal--pending', 'reveal--visible');
        element.removeEventListener('transitionend', handleTransitionEnd);
      };

      handleTransitionEnd = (event) => {
        if (event.target === element) finishReveal();
      };

      element.addEventListener('transitionend', handleTransitionEnd);
      completionTimer = window.setTimeout(finishReveal, delay + duration + 150);
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -8% 0px',
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
      window.clearTimeout(completionTimer);
      if (handleTransitionEnd) element.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, [delay, duration]);

  const revealClassName = ['reveal', `reveal--${direction}`, className].filter(Boolean).join(' ');
  const revealStyle = {
    ...style,
    '--reveal-delay': `${delay}ms`,
    '--reveal-duration': `${duration}ms`,
  };

  return (
    <Element ref={setElementRef} className={revealClassName} style={revealStyle} {...props}>
      {children}
    </Element>
  );
}

export default Reveal;
