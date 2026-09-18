import PageCTA from '../components/PageCTA';

const processSteps = [
  {
    number: '01',
    title: 'Share your school details',
    description: 'Send us your logo, photographs, school information, admissions details and contact information.',
  },
  {
    number: '02',
    title: 'We design & build',
    description: 'We organise your content and develop the complete website around your school’s needs.',
  },
  {
    number: '03',
    title: 'You review it',
    description: 'Your school reviews the website and requests the agreed revisions before launch.',
  },
  {
    number: '04',
    title: 'Your website goes live',
    description: 'We complete the setup, connect the domain and make the approved website live.',
  },
];

const schoolProvides = [
  'Logo and school identity',
  'Core school information',
  'School photographs',
  'Admissions details',
  'Academics and facilities',
  'Relevant package content',
];

const schoolCraftHandles = [
  'Website structure',
  'Custom design and development',
  'Responsive layout',
  'Maps and contact integration',
  'Basic SEO setup',
  'Domain, hosting and launch assistance',
];

function HowItWorks() {
  return (
    <main id="main-content">
      <section className="page-hero page-shell" aria-labelledby="process-heading">
        <div className="container page-hero-inner">
          <p className="eyebrow">HOW IT WORKS</p>
          <h1 id="process-heading">From your school information<br />to a live website in <em>four steps.</em></h1>
          <p>You share the information about your school. We handle the structure, design, development and technical setup.</p>
        </div>
      </section>

      <section className="process-section page-shell" aria-labelledby="steps-heading">
        <div className="container process-layout">
          <div className="process-section-intro">
            <p className="eyebrow">THE PROCESS</p>
            <h2 id="steps-heading">Simple, clear and easy to follow.</h2>
          </div>
          <ol className="process-list">
            {processSteps.map(step => (
              <li key={step.number}>
                <span className="process-number" aria-hidden="true">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="process-support page-shell" aria-labelledby="support-heading">
        <div className="container process-support-panel">
          <div className="process-support-heading">
            <p className="eyebrow">A SHARED EFFORT</p>
            <h2 id="support-heading">Your content.<br />Our web expertise.</h2>
          </div>
          <div className="process-support-grid">
            <section aria-labelledby="provide-heading">
              <h3 id="provide-heading">You provide</h3>
              <ul>{schoolProvides.map(item => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}</ul>
            </section>
            <section aria-labelledby="handle-heading">
              <h3 id="handle-heading">We handle</h3>
              <ul>{schoolCraftHandles.map(item => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}</ul>
            </section>
          </div>
          <div className="process-notes">
            <p>Digital presence should make a school easier to discover, understand and connect with.</p>
            <blockquote>
              “Learning gives creativity, creativity leads to thinking, thinking provides knowledge, knowledge makes you great.”
              <cite>Dr. A. P. J. Abdul Kalam</cite>
            </blockquote>
          </div>
        </div>
      </section>

      <PageCTA
        headingId="process-cta-heading"
        title="Ready to get your school online?"
        description="Choose a package or tell us what your school needs."
        primaryLabel="Start a Project"
        primaryHref="/contact"
        secondaryLabel="View Pricing"
        secondaryHref="/pricing"
      />
    </main>
  );
}

export default HowItWorks;
