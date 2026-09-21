import { Link } from 'react-router-dom';
import PageCTA from './PageCTA';
import Reveal from './Reveal';

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
      {features.map(feature => <li key={feature}><span aria-hidden="true">✓</span><span>{feature}</span></li>)}
    </ul>
  );
}

function PricingSection() {
  return (
    <>
      <section id="pricing" className="pricing-section page-shell" aria-labelledby="pricing-heading">
        <div className="container">
          <div className="pricing-intro">
            <Reveal as="p" className="eyebrow">PRICING</Reveal>
            <Reveal as="h1" id="pricing-heading" delay={70}>Simple pricing.<br /><em>Choose what your school needs.</em></Reveal>
            <Reveal as="p" className="pricing-description" delay={140}>Two clear, one-time development options for a professional school website.</Reveal>
            <Reveal as="p" className="identity-microcopy pricing-identity" delay={190}>Seedhi pricing. No confusion.</Reveal>
          </div>

          <div className="pricing-cards">
            <Reveal className="pricing-card-reveal">
              <article className="pricing-card pricing-card--essential" aria-labelledby="essential-package-heading">
                <p className="pricing-label">ESSENTIAL</p>
                <p className="pricing-amount">₹20,000</p>
                <h2 id="essential-package-heading">Essential School Website</h2>
                <p className="pricing-scope">Up to 7 core pages</p>
                <p className="pricing-card-description">A focused website with the essential information parents look for.</p>
                <FeatureList features={essentialFeatures} />
                <p className="pricing-scope-note">Some features may be combined as sections within a page.</p>
                <Link to="/contact" className="button button-secondary pricing-card-cta">Choose Essential <span aria-hidden="true">→</span></Link>
              </article>
            </Reveal>

            <Reveal className="pricing-card-reveal" delay={90}>
              <article className="pricing-card pricing-card--complete" aria-labelledby="complete-package-heading">
                <p className="pricing-label">COMPLETE</p>
                <p className="pricing-amount">₹30,000</p>
                <h2 id="complete-package-heading">Complete School Website</h2>
                <p className="pricing-scope">Up to 12–15 pages / sections</p>
                <p className="pricing-card-description">Everything in Essential, plus more room for your school’s people, updates and achievements.</p>
                <FeatureList features={completeExtras} />
                <p className="pricing-scope-note">Final page structure depends on your school’s content.</p>
                <Link to="/contact" className="button pricing-card-cta">Choose Complete <span aria-hidden="true">→</span></Link>
              </article>
            </Reveal>
          </div>

          <div className="pricing-info-grid">
            <Reveal as="article">
              <span aria-hidden="true">01</span>
              <h2>No hidden charges</h2>
              <p>Straightforward one-time development pricing.</p>
            </Reveal>
            <Reveal as="article" delay={70}>
              <span aria-hidden="true">02</span>
              <h2>Domain &amp; Hosting</h2>
              <p>Domain and hosting charges, where applicable, are separate. We’ll help you choose and set them up.</p>
            </Reveal>
            <Reveal as="article" delay={140}>
              <span aria-hidden="true">03</span>
              <h2>Need something custom?</h2>
              <p>If your school needs additional features or a different scope, we can discuss a custom quote.</p>
            </Reveal>
          </div>
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
