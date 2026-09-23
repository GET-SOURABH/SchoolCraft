import howItWorksHeroProcess from '../assets/images/how-it-works-hero-process.png';
import PageCTA from '../components/PageCTA';
import Reveal from '../components/Reveal';

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
    <main id="main-content" className="process-page">
      <section className="page-hero page-shell process-hero" aria-labelledby="process-heading">
        <div className="container page-hero-inner process-hero-layout">
          <Reveal as="p" className="eyebrow">HOW IT WORKS</Reveal>
          <Reveal as="h1" id="process-heading" delay={70}>From school information to a <em>live website.</em></Reveal>
          <Reveal as="p" delay={140}>Four simple steps. You share the school knowledge; we handle the structure, design, development and technical setup.</Reveal>
          <Reveal as="p" className="identity-microcopy page-hero-identity" delay={190}>Aap details share kijiye. Website hum sambhal lenge.</Reveal>
          <Reveal className="process-hero-visual" direction="right" delay={110} duration={760}>
            <img
              className="process-hero-image"
              src={howItWorksHeroProcess}
              alt="School information being transformed into a professional school website"
            />
          </Reveal>
        </div>
      </section>

      <section id="process" className="process-section page-shell anchor-target" aria-labelledby="steps-heading">
        <div className="container process-layout">
          <Reveal className="process-section-intro">
            <p className="eyebrow">THE PROCESS</p>
            <h2 id="steps-heading">Simple, clear and easy to follow.</h2>
          </Reveal>
          <ol className="process-list">
            {processSteps.map((step, index) => (
              <Reveal as="li" key={step.number} delay={index * 70}>
                <span className="process-number" aria-hidden="true">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="process-support page-shell" aria-labelledby="support-heading">
        <Reveal className="container process-support-panel">
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
          <Reveal className="process-notes" delay={100} duration={600}>
            <p>Digital presence should make a school easier to discover, understand and connect with.</p>
            <blockquote>
              “Learning gives creativity, creativity leads to thinking, thinking provides knowledge, knowledge makes you great.”
              <cite>Dr. A. P. J. Abdul Kalam</cite>
            </blockquote>
          </Reveal>
        </Reveal>
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
