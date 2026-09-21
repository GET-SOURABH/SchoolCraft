import { Link } from 'react-router-dom';
import Reveal from './Reveal';

const footerLinks = [
  ['Home', '/'],
  ['Our Work', '/work'],
  ['Pricing', '/pricing'],
  ['How It Works', '/how-it-works'],
  ['Contact', '/contact'],
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer page-shell">
      <div className="footer-inner container">
        <div className="footer-main">
          <Reveal className="footer-message">
            <Link to="/" className="footer-brand" aria-label="SchoolCraft home">SchoolCraft<span aria-hidden="true">.</span></Link>
            <p className="footer-descriptor">An independent school digitalisation initiative.</p>
            <h2>Better school websites.<br /><em>Made simple.</em></h2>
            <p className="footer-supporting-copy">Professional websites for schools with clear pricing and a straightforward process.</p>
          </Reveal>

          <Reveal className="footer-actions" delay={70}>
            <Link to="/contact" className="footer-primary-action">Start a Project <span aria-hidden="true">↗</span></Link>
            <Link to="/pricing" className="footer-pricing-link">View Pricing</Link>
          </Reveal>
        </div>

        <Reveal className="footer-navigation-row" delay={100}>
          <p>Explore SchoolCraft</p>
          <nav aria-label="Footer navigation">
            {footerLinks.map(([label, to]) => <Link key={label} to={to}>{label}</Link>)}
          </nav>
        </Reveal>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>© {currentYear} SchoolCraft</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
