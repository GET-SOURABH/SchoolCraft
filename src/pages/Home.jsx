import { Link } from 'react-router-dom';
import ProjectShowcase from '../components/ProjectShowcase';
import { projects } from '../data/projects';

function SchoolPreview() {
  return (
    <figure className="preview-composition" aria-label="Illustrative school website concept for Bright Future Public School">
      <span className="preview-note preview-note-top" aria-hidden="true">Built for schools <span>⤵</span></span>
      <div className="browser-preview" aria-hidden="true">
        <div className="browser-toolbar">
          <div className="browser-dots"><i /><i /><i /></div>
          <span className="browser-address">brightfuture.school</span>
          <span className="browser-more">···</span>
        </div>
        <div className="school-nav">
          <div className="school-brand"><span className="school-monogram">bf.</span><span>Bright Future<small>PUBLIC SCHOOL</small></span></div>
          <div className="school-links"><span>Our school</span><span>Academics</span><span className="school-nav-cta">Admissions ↗</span></div>
        </div>
        <div className="school-hero">
          <div className="school-hero-copy">
            <span className="school-eyebrow">A PLACE TO LEARN. A SPACE TO GROW.</span>
            <h2>Shaping<br />Brighter<br /><em>Futures.</em></h2>
            <p>Big dreams begin with a little curiosity.</p>
            <span className="school-button">Discover our school <span>↗</span></span>
          </div>
          <div className="school-art">
            <span className="campus-caption">THE CAMPUS</span>
            <div className="campus-building campus-building-back"><span /><span /><span /><span /></div>
            <div className="campus-building campus-building-front"><span /><span /><span /><span /><span /><span /></div>
            <div className="campus-entrance"><span /></div>
            <div className="campus-courtyard" />
            <span className="art-caption">Space to learn. Room to grow.</span>
          </div>
        </div>
        <div className="school-bottom"><span>A world of possibilities.</span><div><i /><i /><i /></div><span>Learning beyond the classroom ↗</span></div>
      </div>
      <figcaption className="preview-caption"><span>AN EXAMPLE OF WHAT’S POSSIBLE</span><span className="preview-note">Professional. Personal. Yours.</span></figcaption>
    </figure>
  );
}

function Home() {
  // Restore the live-work copy automatically once all concepts are replaced.
  const workIntroCopy = projects.some(project => project.isPlaceholder)
    ? 'Explore a few directions for how a modern school website can look and feel.'
    : 'Explore school websites we’ve designed and developed. Each one is fully functional and live.';

  return (
      <main id="main-content">
        <section className="hero page-shell" aria-labelledby="hero-heading">
          <div className="hero-layout container">
            <div className="hero-copy">
              <p className="eyebrow hero-eyebrow"><span /> SMALL SCHOOLS. BIG FIRST IMPRESSIONS.</p>
              <h1 id="hero-heading">Modern websites<br />for modern<br /><em>schools.</em></h1>
              <p className="hero-description">We design professional, mobile-friendly websites for schools — helping parents discover your school, understand admissions and get in touch.</p>
              <div className="hero-actions"><Link className="button button-primary" to="/#work">View Our Work <span aria-hidden="true">↗</span></Link><Link className="button button-secondary" to="/pricing">See Pricing <span aria-hidden="true">↗</span></Link></div>
            </div>
            <SchoolPreview />
          </div>
        </section>
        <section className="proof-strip page-shell" aria-label="Why SchoolCraft">
          <dl className="proof-items container">
            <div><dt>100%</dt><dd>Custom Designed</dd></div>
            <div><dt>Mobile Friendly</dt><dd>On All Devices</dd></div>
            <div><dt>₹30,000</dt><dd>One-Time Development</dd></div>
          </dl>
        </section>
        <section id="work" className="portfolio-intro page-shell" aria-labelledby="work-heading">
          <div className="container portfolio-layout">
            <div><p className="eyebrow">OUR WORK</p><h2 id="work-heading">Real schools.<br />Real websites.<br /><em>Live online.</em></h2></div>
            <p className="portfolio-description">{workIntroCopy}</p>
          </div>
        </section>
        <section className="portfolio-projects page-shell" aria-label="School website project previews">
          <div className="container">
            {projects.map(project => <ProjectShowcase key={project.number} {...project} />)}
          </div>
        </section>
        <section className="portfolio-transition page-shell" aria-labelledby="next-school-heading">
          <div className="container portfolio-transition-inner">
            <div><h2 id="next-school-heading">Your school could be <em>next.</em></h2><p>Let’s build a website that gives parents a better first impression of your school.</p></div>
            <div className="portfolio-transition-actions"><Link to="/pricing" className="button button-secondary">See Pricing</Link><Link to="/#contact" className="button button-primary">Start a Project <span aria-hidden="true">↗</span></Link></div>
          </div>
        </section>
      </main>
  );
}

export default Home;
