import { Link } from 'react-router-dom';
import PageCTA from './PageCTA';

const essentialFeatures = [
  'Professional Home Page',
  'About the School',
  'Academics / Classes Offered',
  'Admissions',
  'Facilities',
  'Photo Gallery',
  'Contact Page',
  'Google Maps Integration',
  'Mobile Responsive Design',
  'Social Media Links',
  'Basic SEO Setup',
  'Domain & Hosting Setup Assistance',
];

const completeExtras = [
  'Principal / Director Message',
  'Fee Structure',
  'Teachers / Faculty',
  'Achievements',
  'News & Events',
  'Enquiry Form',
  'Expanded page & content capacity',
];

function FeatureList({ features }) {
  return (
    <ul className="pricing-feature-list">
      {features.map(feature => (
        <li key={feature}><span aria-hidden="true">✓</span><span>{feature}</span></li>
      ))}
    </ul>
  );
}

function PricingSection() {
  return (
    <>
      <section id="pricing" className="pricing-section page-shell" aria-labelledby="pricing-heading">
        <div className="container">
        <div className="pricing-intro">
          <div>
            <p className="eyebrow">PRICING</p>
            <h2 id="pricing-heading">Simple pricing.<br /><em>Choose what your school needs.</em></h2>
          </div>
          <p className="pricing-intro-copy">Two straightforward options for schools that want a professional online presence.</p>
        </div>

        <div className="pricing-packages">
          <article className="pricing-package pricing-package--essential" aria-labelledby="essential-package-heading">
            <div className="pricing-package-offer">
              <p className="pricing-package-index">01 <span>ESSENTIAL</span></p>
              <p className="pricing-amount">₹20,000</p>
              <h3 id="essential-package-heading">Essential School Website</h3>
              <p className="pricing-payment-note">One-time website development</p>
              <p className="pricing-package-description">For schools that need a clean, professional website with the essential information parents look for.</p>
              <div className="pricing-package-footer">
                <div className="pricing-scope-copy">
                  <p className="pricing-scope">Up to 7 core pages</p>
                  <p className="pricing-scope-note">Some features may be combined as sections within a page.</p>
                </div>
                <Link to="/contact" className="button pricing-package-cta">Choose Essential <span aria-hidden="true">↗</span></Link>
              </div>
            </div>
            <div className="pricing-inclusions">
              <h4>Essential pages and setup</h4>
              <FeatureList features={essentialFeatures} />
            </div>
          </article>

          <article className="pricing-package pricing-package--complete" aria-labelledby="complete-package-heading">
            <div className="pricing-package-offer">
              <p className="pricing-package-index">02 <span>COMPLETE</span></p>
              <p className="pricing-amount">₹30,000</p>
              <h3 id="complete-package-heading">Complete School Website</h3>
              <p className="pricing-payment-note">One-time website development</p>
              <p className="pricing-package-description">For schools that want a more detailed website with additional information, updates and enquiry features.</p>
              <div className="pricing-package-footer">
                <div className="pricing-scope-copy">
                  <p className="pricing-scope">Up to 12–15 pages / sections</p>
                  <p className="pricing-scope-note">Final page structure depends on your school’s content.</p>
                </div>
                <Link to="/contact" className="button pricing-package-cta">Choose Complete <span aria-hidden="true">↗</span></Link>
              </div>
            </div>
            <div className="pricing-inclusions">
              <p className="pricing-inclusions-kicker">Everything in Essential, plus</p>
              <FeatureList features={completeExtras} />
            </div>
          </article>
        </div>

        <p className="pricing-hosting-note">Domain and hosting charges, where applicable, are separate. We’ll help you choose and set them up.</p>

        <aside className="pricing-custom" aria-labelledby="pricing-custom-heading">
          <div>
            <h3 id="pricing-custom-heading">Need something custom?</h3>
            <p>If your school needs additional features or a different scope, we can discuss a custom quote.</p>
          </div>
          <Link to="/contact" className="pricing-custom-link">Talk to Us <span aria-hidden="true">↗</span></Link>
        </aside>

        </div>
      </section>
      <PageCTA
        headingId="pricing-cta-heading"
        title="Ready to build your school website?"
        description="Choose the option that fits your school, or tell us what you need."
        primaryLabel="Start a Project"
        primaryHref="/contact"
        secondaryLabel="How It Works"
        secondaryHref="/how-it-works"
      />
    </>
  );
}

export default PricingSection;
