import { Link } from 'react-router-dom';
import PageCTA from '../components/PageCTA';
import ProjectShowcase from '../components/ProjectShowcase';
import Reveal from '../components/Reveal';
import { projects } from '../data/projects';
import homeHeroLaptop from '../assets/images/home-hero-laptop.png';

function Home() {
  const hasPlaceholders = projects.some(project => project.isPlaceholder);

  return (
    <main id="main-content">
      <section className="hero page-shell" aria-labelledby="hero-heading">
        <div className="hero-layout container">
          <div className="hero-copy">
            <h1 id="hero-heading" className="hero-enter hero-enter--headline">
              <span>Modern</span>
              <span>websites for</span>
              <span className="hero-heading-final">modern <em>schools.</em></span>
            </h1>
            <p className="hero-description hero-enter hero-enter--description">We design professional, mobile-friendly websites for schools — making it easier for parents to discover your school, understand admissions and get in touch.</p>
            <p className="identity-microcopy hero-identity hero-enter hero-enter--identity">Aapka school. Aapki digital pehchaan.</p>
            <div className="hero-actions">
              <Link className="button button-primary hero-enter hero-enter--primary-cta" to="/work">View Our Work</Link>
              <Link className="button button-secondary hero-enter hero-enter--secondary-cta" to="/pricing">See Pricing</Link>
            </div>
            <p className="hero-trust hero-enter hero-enter--trust"><span aria-hidden="true" />Websites built for Indian schools.</p>
          </div>
          <div className="hero-visual">
            <div className="hero-annotation hero-enter hero-enter--annotation" aria-hidden="true">
              <span>Professional</span>
              <span>Affordable</span>
              <span>Impactful</span>
              <svg className="hero-annotation-arrow" viewBox="0 0 80 60">
                <path d="M8 5c4 19 23 34 57 38" />
                <path d="M55 35l11 8-11 7" />
              </svg>
            </div>
            <img
              className="hero-image hero-enter hero-enter--laptop"
              src={homeHeroLaptop}
              alt="Modern Indian school website displayed on a laptop"
            />
          </div>
        </div>
      </section>

      <section className="mission-strip" aria-labelledby="mission-heading">
        <h2 id="mission-heading" className="visually-hidden">हर स्कूल डिजिटल बनेगा। Every school deserves a strong digital presence.</h2>
        <div className="mission-marquee" aria-hidden="true">
          <div className="mission-marquee-track">
            {[0, 1].map(group => (
              <div className="mission-marquee-group" key={group}>
                <strong lang="hi">हर स्कूल डिजिटल बनेगा।</strong>
                <span className="mission-separator">✦</span>
                <span>Every school deserves a strong digital presence.</span>
                <span className="mission-separator">✦</span>
                <strong lang="hi">हर स्कूल डिजिटल बनेगा।</strong>
                <span className="mission-separator">✦</span>
                <span>Every school deserves a strong digital presence.</span>
                <span className="mission-separator">✦</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mission-reduced-motion" aria-hidden="true">
          <strong lang="hi">हर स्कूल डिजिटल बनेगा।</strong>
          <span className="mission-separator">✦</span>
          <span>Every school deserves a strong digital presence.</span>
        </div>
      </section>

      <section id="work" className="featured-work page-shell anchor-target" aria-labelledby="featured-work-heading">
        <div className="container">
          <div className="section-heading-row">
            <Reveal>
              <p className="eyebrow">OUR WORK</p>
              <h2 id="featured-work-heading">See what we can build for schools.</h2>
              <p className="identity-microcopy featured-work-identity">Dekhiye hum schools ke liye kya build karte hain.</p>
            </Reveal>
            <Reveal className="section-heading-aside" delay={90}>
              <p>{hasPlaceholders ? 'These are illustrative directions while real project screenshots are prepared.' : 'A selection of school websites designed and developed by SchoolCraft.'}</p>
              <Link to="/work" className="text-link">View All Work <span aria-hidden="true">→</span></Link>
            </Reveal>
          </div>
          <p className="project-swipe-hint" aria-hidden="true">Swipe to explore <span>→</span></p>
          <div className="project-grid project-grid--featured">
            {projects.slice(0, 3).map((project, index) => (
              <Reveal key={project.number} className="project-card-reveal" delay={index * 80}>
                <ProjectShowcase {...project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="proof-strip page-shell" aria-label="Why SchoolCraft">
        <dl className="proof-items container">
          <Reveal><dt>100%</dt><dd>Custom Designed</dd></Reveal>
          <Reveal delay={70}><dt>Mobile Friendly</dt><dd>On All Devices</dd></Reveal>
          <Reveal delay={140}><dt>From ₹20,000</dt><dd>One-Time Development</dd></Reveal>
        </dl>
      </section>

      <section className="education-quote page-shell" aria-label="Education and technology">
        <Reveal as="figure" className="container education-quote-inner" duration={620}>
          <blockquote>“Today we are empowered by technology to teach ourselves beyond classrooms and become life-long learners.”</blockquote>
          <figcaption>Dr. A. P. J. Abdul Kalam</figcaption>
        </Reveal>
      </section>

      <PageCTA
        headingId="next-school-heading"
        title={<>Your school could be <em>next.</em></>}
        description="Give parents a clearer first impression of your school online."
        primaryLabel="Start a Project"
        primaryHref="/contact"
        secondaryLabel="See Pricing"
        secondaryHref="/pricing"
      />
    </main>
  );
}

export default Home;
