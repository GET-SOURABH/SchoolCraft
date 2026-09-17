import { Link } from 'react-router-dom';

const includedFeatures = [
  'Professional Home Page',
  'About the School',
  'Principal / Director Message',
  'Academics / Classes Offered',
  'Admissions',
  'Fee Structure',
  'Facilities',
  'Teachers / Faculty',
  'Achievements',
  'Photo Gallery',
  'News & Events',
  'Contact Page',
  'Enquiry Form',
  'Google Maps Integration',
  'Mobile Responsive Design',
  'Social Media Links',
  'Basic SEO Setup',
  'Domain & Hosting Setup Assistance',
];

function PricingSection() {
  return (
    <section id="pricing" className="pricing-section page-shell" aria-labelledby="pricing-heading">
      <div className="container">
        <div className="pricing-intro">
          <div>
            <p className="eyebrow">PRICING</p>
            <h2 id="pricing-heading">A complete school website<br />for <em>₹30,000.</em></h2>
          </div>
          <p className="pricing-intro-copy">One straightforward price for a professional school website — designed, developed and ready to launch.</p>
        </div>

        <div className="pricing-composition">
          <div className="pricing-offer">
            <p className="pricing-annotation" aria-hidden="true">one clear price <span>⤵</span></p>
            <div className="pricing-offer-content">
              <p className="pricing-amount">₹30,000</p>
              <h3>Complete School Website</h3>
              <p className="pricing-payment-note">One-time website development</p>
            </div>
            <p className="pricing-offer-footer">Designed for your school.<br />Ready for its next chapter.</p>
          </div>
          <div className="pricing-inclusions">
            <h3>Everything included</h3>
            <ul className="pricing-feature-list">
              {includedFeatures.map(feature => (
                <li key={feature}><span aria-hidden="true">✓</span><span>{feature}</span></li>
              ))}
            </ul>
            <p className="pricing-hosting-note">Domain and hosting charges, where applicable, are separate. We’ll help you choose and set them up.</p>
          </div>
        </div>

        <aside className="pricing-custom" aria-labelledby="pricing-custom-heading">
          <div>
            <h3 id="pricing-custom-heading">Need something custom?</h3>
            <p>If your school needs additional features or a different scope, we can discuss a custom quote.</p>
          </div>
          <Link to="/#contact" className="pricing-custom-link">Talk to Us <span aria-hidden="true">↗</span></Link>
        </aside>

        <div className="pricing-next-step">
          <h3>Ready to build your school website?</h3>
          <div className="pricing-actions">
            <Link to="/#contact" className="button button-primary">Start a Project <span aria-hidden="true">↗</span></Link>
            <Link to="/#process" className="button button-secondary">How It Works</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
