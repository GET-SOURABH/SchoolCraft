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
  return (
    <footer className="site-footer page-shell">
      <div className="footer-inner container">
        <Reveal className="footer-main">
          <div className="footer-message">
            <Link to="/" className="footer-brand"><span aria-hidden="true">S</span>SchoolCraft</Link>
            <h2>Better school websites.<br /><em>Made simple.</em></h2>
          </div>
          <div className="footer-actions">
            <p>Ready to give your school a digital presence that feels as considered as the education you provide?</p>
            <Link to="/contact" className="footer-primary-action">Start a project <span aria-hidden="true">↗</span></Link>
          </div>
        </Reveal>

        <div className="footer-navigation-row">
          <p>SchoolCraft · India</p>
          <nav aria-label="Footer navigation">
            {footerLinks.map(([label, to]) => <Link key={label} to={to}>{label}</Link>)}
          </nav>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} SchoolCraft. All rights reserved.</p>
          <p>Strategy · Design · Development</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
