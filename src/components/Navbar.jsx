import { Link, NavLink } from 'react-router-dom';

const links = [
  ['Home', '/'],
  ['Our Work', '/work'],
  ['Pricing', '/pricing'],
  ['How It Works', '/how-it-works'],
  ['Contact', '/contact'],
];

function NavigationLinks({ onNavigate }) {
  return links.map(([label, to]) => (
    <NavLink
      key={to}
      to={to}
      end={to === '/'}
      className={({ isActive }) => isActive ? 'navbar-link-active' : undefined}
      onClick={onNavigate}
    >
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
      <Link to="/" className="navbar-brand">SchoolCraft<span aria-hidden="true">.</span></Link>
      <div className="navbar-links"><NavigationLinks /></div>
      <Link to="/contact" className="navbar-cta">Get Started <span aria-hidden="true">↗</span></Link>
      <details className="mobile-menu">
        <summary aria-label="Open navigation menu"><span>Menu</span><span className="menu-lines" aria-hidden="true" /></summary>
        <div className="mobile-menu-links"><NavigationLinks onNavigate={closeMobileMenu} /><Link to="/contact" onClick={closeMobileMenu}>Get Started ↗</Link></div>
      </details>
    </nav>
  </header>
);

export default Navbar;
