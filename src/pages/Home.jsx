import { Link } from 'react-router-dom';
import PageCTA from '../components/PageCTA';
import ProjectShowcase from '../components/ProjectShowcase';
import { projects } from '../data/projects';
import homeHeroLaptop from '../assets/images/home-hero-laptop.png';

function Home() {
  const hasPlaceholders = projects.some(project => project.isPlaceholder);

  return (
    <main id="main-content">
      <section className="hero page-shell" aria-labelledby="hero-heading">
        <div className="hero-layout container">
          <div className="hero-copy">
            <h1 id="hero-heading">
              <span>Modern</span>
              <span>websites for</span>
              <span className="hero-heading-final">modern <em>schools.</em></span>
            </h1>
            <p className="hero-description">We design professional, mobile-friendly websites for schools — making it easier for parents to discover your school, understand admissions and get in touch.</p>
            <p className="identity-microcopy hero-identity">Aapka school. Aapki digital pehchaan.</p>
            <div className="hero-actions">
              <Link className="button button-primary" to="/work">View Our Work</Link>
              <Link className="button button-secondary" to="/pricing">See Pricing</Link>
            </div>
            <p className="hero-trust"><span aria-hidden="true" />Websites built for Indian schools.</p>
          </div>
          <div className="hero-visual">
            <div className="hero-annotation" aria-hidden="true">
              <span>Professional</span>
              <span>Affordable</span>
              <span>Impactful</span>
              <svg className="hero-annotation-arrow" viewBox="0 0 80 60">
                <path d="M8 5c4 19 23 34 57 38" />
                <path d="M55 35l11 8-11 7" />
              </svg>
            </div>
            <img
              className="hero-image"
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

      <section id="work" className="featured-work page-shell" aria-labelledby="featured-work-heading">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">OUR WORK</p>
              <h2 id="featured-work-heading">See what we can build for schools.</h2>
              <p className="identity-microcopy featured-work-identity">Dekhiye hum schools ke liye kya build karte hain.</p>
            </div>
            <div className="section-heading-aside">
              <p>{hasPlaceholders ? 'These are illustrative directions while real project screenshots are prepared.' : 'A selection of school websites designed and developed by SchoolCraft.'}</p>
              <Link to="/work" className="text-link">View All Work <span aria-hidden="true">→</span></Link>
            </div>
          </div>
          <p className="project-swipe-hint" aria-hidden="true">Swipe to explore <span>→</span></p>
          <div className="project-grid project-grid--featured">
            {projects.slice(0, 3).map(project => <ProjectShowcase key={project.number} {...project} />)}
          </div>
        </div>
      </section>

      <section className="proof-strip page-shell" aria-label="Why SchoolCraft">
        <dl className="proof-items container">
          <div><dt>100%</dt><dd>Custom Designed</dd></div>
          <div><dt>Mobile Friendly</dt><dd>On All Devices</dd></div>
          <div><dt>From ₹20,000</dt><dd>One-Time Development</dd></div>
        </dl>
      </section>

      <section className="education-quote page-shell" aria-label="Education and technology">
        <figure className="container education-quote-inner">
          <blockquote>“Today we are empowered by technology to teach ourselves beyond classrooms and become life-long learners.”</blockquote>
          <figcaption>Dr. A. P. J. Abdul Kalam</figcaption>
        </figure>
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
