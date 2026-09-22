import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function RouteTransition({ children }) {
  const { pathname } = useLocation();
  const [transitionState, setTransitionState] = useState({ pathname, hasNavigated: false });

  if (transitionState.pathname !== pathname) {
    setTransitionState({ pathname, hasNavigated: true });
  }

  const className = transitionState.hasNavigated
    ? 'route-transition route-transition--enter'
    : 'route-transition';

  return (
    <div key={pathname} className={className}>
      {children}
    </div>
  );
}

export default RouteTransition;
