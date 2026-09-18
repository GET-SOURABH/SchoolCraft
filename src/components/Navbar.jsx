import { Link, NavLink } from 'react-router-dom';

const links = [
  ['Our Work', '/#work'],
  ['Pricing', '/pricing'],
  ['How It Works', '/how-it-works'],
  ['Contact', '/contact'],
];

function NavigationLinks({ onNavigate }) {
  return links.map(([label, to]) => ['/pricing', '/how-it-works', '/contact'].includes(to)
    ? <NavLink key={to} to={to} end className={({ isActive }) => isActive ? 'navbar-link-active' : undefined} onClick={onNavigate}>{label}</NavLink>
    : <Link key={to} to={to} onClick={onNavigate}>{label}</Link>);
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
