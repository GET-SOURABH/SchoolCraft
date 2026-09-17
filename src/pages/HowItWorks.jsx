import { Link } from 'react-router-dom';

const processSteps = [
  {
    number: '01',
    title: 'Share your school details',
    description: 'Send us your logo, photographs, school information, facilities, admissions details and contact information.',
  },
  {
    number: '02',
    title: 'We design & build',
    description: 'We organise your content, design the website and develop it around your school’s requirements.',
  },
  {
    number: '03',
    title: 'You review it',
    description: 'Your school reviews the website and shares the agreed changes before launch.',
  },
  {
    number: '04',
    title: 'Your website goes live',
    description: 'We complete the final setup, connect the domain and launch the website for parents to visit.',
  },
];

const schoolProvides = [
  'School logo',
  'School name and basic information',
  'About the school',
  'Principal / Director message, if included in the chosen package',
  'Academics / classes offered',
  'Admissions information',
  'Facilities',
  'Contact details',
  'School photographs',
  'Social media links, if applicable',
  'Fee information, if included in the chosen package',
  'Faculty / achievements / events content, where included',
];

const schoolCraftHandles = [
  'Website structure',
  'Visual design',
  'Responsive development',
  'Page layout',
  'Content placement',
  'Contact / enquiry setup where included',
  'Google Maps integration',
  'Social links',
  'Basic SEO setup',
  'Domain connection assistance',
  'Hosting setup assistance',
  'Final launch',
];

const reviewChecks = [
  'Check school information',
  'Review images and page content',
  'Request agreed corrections / revisions',
];

function ProcessTimeline() {
  return (
    <ol className="process-timeline">
      {processSteps.map(step => (
        <li className="process-step" key={step.number}>
          <span className="process-step-number" aria-hidden="true">{step.number}</span>
          <div className="process-step-copy">
            <h2>{step.title}</h2>
            <p>{step.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

function HowItWorks() {
  return (
    <main id="main-content" className="how-it-works-page">
      <section className="process-hero page-shell" aria-labelledby="process-heading">
        <div className="container process-hero-layout">
          <div>
            <p className="eyebrow">HOW IT WORKS</p>
            <h1 id="process-heading">From your school details<br />to a <em>live website.</em></h1>
          </div>
          <div className="process-hero-aside">
            <p>You share the information about your school. We handle the design, development and technical setup.</p>
            <span className="process-annotation">Simple from start to finish <span aria-hidden="true">↘</span></span>
          </div>
        </div>
      </section>

      <section className="process-journey page-shell" aria-label="The SchoolCraft website process">
        <div className="container">
          <ProcessTimeline />
        </div>
      </section>

      <section className="process-provides page-shell" aria-labelledby="provides-heading">
        <div className="container process-section-layout">
          <div className="process-section-heading">
            <p className="eyebrow">FROM YOUR SCHOOL</p>
            <h2 id="provides-heading">What do we need<br />from <em>your school?</em></h2>
          </div>
          <div>
            <ul className="process-checklist process-checklist--light">
              {schoolProvides.map(item => <li key={item}><span aria-hidden="true">✓</span><span>{item}</span></li>)}
            </ul>
            <p className="process-assurance">Don’t have everything organised? That’s fine — send us what you have and we’ll help structure it for the website.</p>
          </div>
        </div>
      </section>

      <section className="process-handles page-shell" aria-labelledby="handles-heading">
        <div className="container process-handles-inner">
          <div className="process-handles-intro">
            <p className="eyebrow">FROM SCHOOLCRAFT</p>
            <h2 id="handles-heading">What we <em>handle.</em></h2>
            <p>The school provides its information.<br />SchoolCraft handles the web work.</p>
          </div>
          <ul className="process-checklist process-checklist--dark">
            {schoolCraftHandles.map(item => <li key={item}><span aria-hidden="true">✓</span><span>{item}</span></li>)}
          </ul>
        </div>
      </section>

      <section className="process-review page-shell" aria-labelledby="review-heading">
        <div className="container process-review-layout">
          <div>
            <p className="eyebrow">BEFORE LAUNCH</p>
            <h2 id="review-heading">You see it before<br />it goes <em>live.</em></h2>
            <p className="process-review-copy">We share the completed website for review before launch. Your school can check the content, pages and presentation and request the agreed revisions.</p>
          </div>
          <ol className="process-review-list">
            {reviewChecks.map((item, index) => (
              <li key={item}><span>{String(index + 1).padStart(2, '0')}</span><p>{item}</p></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="process-launch page-shell" aria-labelledby="launch-heading">
        <div className="container process-launch-inner">
          <div>
            <p className="eyebrow">FINAL STEP</p>
            <h2 id="launch-heading">Then we put your<br />school <em>online.</em></h2>
          </div>
          <div className="process-launch-copy">
            <p>Once the website is approved, we complete the final setup, connect the domain and make the website live.</p>
            <p className="process-launch-line" aria-label="Approved, then domain connected, then live">
              <span>Approved</span><span aria-hidden="true">→</span><span>Domain connected</span><span aria-hidden="true">→</span><span>Live</span>
            </p>
          </div>
        </div>
        <p className="container process-domain-note">If your school does not already have a domain or hosting, we can help you choose and set them up. Any applicable third-party charges are separate.</p>
      </section>

      <section className="process-final-cta page-shell" aria-labelledby="process-cta-heading">
        <div className="container process-final-cta-inner">
          <div>
            <h2 id="process-cta-heading">Ready to get your school online?</h2>
            <p>Choose a package or tell us what your school needs.</p>
          </div>
          <div className="process-final-actions">
            <Link to="/pricing" className="button button-secondary">View Pricing</Link>
            <Link to="/#contact" className="button button-primary">Start a Project <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HowItWorks;
