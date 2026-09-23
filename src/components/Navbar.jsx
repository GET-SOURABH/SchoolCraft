import { Link, NavLink, useLocation } from 'react-router-dom';

const links = [
  ['Home', '/'],
  ['Work', '/work'],
  ['Pricing', '/pricing'],
  ['Process', '/how-it-works'],
];

function NavigationLinks({ onNavigate }) {
  const { pathname } = useLocation();

  const handleNavigate = (event, destination) => {
    if (pathname === destination) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    }
    onNavigate?.(event);
  };

  return links.map(([label, to]) => (
    <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => isActive ? 'navbar-link-active' : undefined} onClick={(event) => handleNavigate(event, to)}>
      {label}
    </NavLink>
  ));
}

const closeMobileMenu = (event) => {
  event.currentTarget.closest('details').open = false;
};

const Navbar = () => (
  <header className="site-header">
    <a className="skip-link" href="#main-content">Skip to content</a>
    <nav className="navbar container" aria-label="Main navigation">
      <Link to="/" className="navbar-brand" aria-label="SchoolCraft home">
        <span className="navbar-mark" aria-hidden="true">S</span>
        <span className="navbar-wordmark">SchoolCraft</span>
      </Link>
      <div className="navbar-links"><NavigationLinks /></div>
      <Link to="/contact" className="navbar-cta">Let’s talk <span aria-hidden="true">↗</span></Link>
      <details className="mobile-menu">
        <summary aria-label="Open navigation menu"><span>Menu</span><span className="menu-lines" aria-hidden="true" /></summary>
        <div className="mobile-menu-links">
          <NavigationLinks onNavigate={closeMobileMenu} />
          <Link to="/contact" className="mobile-menu-cta" onClick={closeMobileMenu}>Let’s talk <span aria-hidden="true">↗</span></Link>
        </div>
      </details>
    </nav>
  </header>
);

export default Navbar;
