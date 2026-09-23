import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import homeHeroLaptop from '../assets/images/home-hero-laptop.png';
import processVisual from '../assets/images/how-it-works-hero-process.png';
import schoolLeaders from '../assets/images/pricing-hero-decision-makers.png';

const capabilities = [
  {
    number: '01',
    title: 'Clear school storytelling',
    copy: 'We turn your school’s values, academics and facilities into a story parents can understand at a glance.',
    tone: 'pink',
  },
  {
    number: '02',
    title: 'Admissions made simpler',
    copy: 'Thoughtful page journeys help families find key information and take the next step without confusion.',
    tone: 'orange',
  },
  {
    number: '03',
    title: 'Built for every screen',
    copy: 'Fast, responsive experiences that feel considered on mobile, tablet and desktop.',
    tone: 'blue',
  },
  {
    number: '04',
    title: 'Designed around you',
    copy: 'Every website is shaped around your school’s identity — never dropped into a generic template.',
    tone: 'cream',
  },
];

const steps = [
  ['Share', 'Send us your school information, identity and photographs.'],
  ['Shape', 'We organise the content and design a clear digital experience.'],
  ['Review', 'Your team reviews the website and shares focused feedback.'],
  ['Launch', 'We connect the essentials and take your new website live.'],
];

const stats = [
  ['100%', 'custom designed'],
  ['All', 'screen sizes'],
  ['₹20K', 'starting price'],
  ['4', 'simple steps'],
];

function Home() {
  return (
    <main id="main-content" className="hd-home">
      <section className="hd-hero page-shell" aria-labelledby="home-heading">
        <div className="container hd-hero-grid">
          <div className="hd-hero-copy">
            <p className="hd-kicker hero-enter hero-enter--headline"><span /> School websites, reimagined</p>
            <h1 id="home-heading" className="hero-enter hero-enter--description">
              Digital presence<br />
              <em>built for schools.</em>
            </h1>
            <p className="hd-hero-description hero-enter hero-enter--identity">
              We design clear, credible and distinctly modern websites that help Indian schools earn trust and grow.
            </p>
            <div className="hd-hero-actions hero-enter hero-enter--primary-cta">
              <Link className="hd-pill hd-pill--light" to="/work">Explore our work <span aria-hidden="true">↗</span></Link>
              <Link className="hd-text-link" to="/contact">Start a project <span aria-hidden="true">→</span></Link>
            </div>
          </div>

          <div className="hd-hero-art hero-enter hero-enter--laptop">
            <div className="hd-orbit hd-orbit--one" aria-hidden="true" />
            <div className="hd-orbit hd-orbit--two" aria-hidden="true" />
            <span className="hd-art-label hd-art-label--top">Professional</span>
            <span className="hd-art-label hd-art-label--bottom">Purposeful</span>
            <img src={homeHeroLaptop} alt="A premium school website presented on a laptop" />
          </div>
        </div>

        <div className="container hd-hero-foot">
          <p>Aapka school. Aapki digital pehchaan.</p>
          <p>Strategy · Design · Development · Launch</p>
        </div>
      </section>

      <section className="hd-marquee" aria-label="SchoolCraft promise">
        <div className="hd-marquee-track" aria-hidden="true">
          <span>MODERN SCHOOL WEBSITES</span><i>✦</i><span>BUILT WITH PURPOSE</span><i>✦</i>
          <span>MODERN SCHOOL WEBSITES</span><i>✦</i><span>BUILT WITH PURPOSE</span><i>✦</i>
        </div>
      </section>

      <section className="hd-approach page-shell" aria-labelledby="approach-heading">
        <div className="container">
          <Reveal className="hd-section-intro">
            <p className="hd-kicker hd-kicker--dark"><span /> Our approach</p>
            <h2 id="approach-heading">A better school website starts with <em>clarity.</em></h2>
            <p>We combine strong storytelling, thoughtful structure and polished design to make your school easier to discover, understand and trust.</p>
          </Reveal>

          <div className="hd-capability-grid">
            {capabilities.map((item, index) => (
              <Reveal key={item.number} as="article" className={`hd-capability hd-capability--${item.tone}`} delay={index * 70}>
                <div className="hd-card-top"><span>{item.number}</span><span aria-hidden="true">↗</span></div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="hd-process page-shell" aria-labelledby="process-heading">
        <div className="container hd-process-grid">
          <Reveal className="hd-process-copy">
            <p className="hd-kicker"><span /> Simple by design</p>
            <h2 id="process-heading">From school information to a live website.</h2>
            <p>Our process removes the usual complexity. You bring the school knowledge; we shape it into a confident digital home.</p>
            <Link to="/how-it-works" className="hd-pill hd-pill--pink">See how it works <span aria-hidden="true">↗</span></Link>
          </Reveal>

          <Reveal className="hd-process-visual" direction="right" delay={100}>
            <img src={processVisual} alt="School content being transformed into a modern website" />
          </Reveal>
        </div>

        <ol className="container hd-step-list">
          {steps.map(([title, copy], index) => (
            <Reveal as="li" key={title} delay={index * 60}>
              <span className="hd-step-number">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="hd-impact page-shell" aria-labelledby="impact-heading">
        <div className="container">
          <Reveal className="hd-impact-heading">
            <p className="hd-kicker"><span /> What stays simple</p>
            <h2 id="impact-heading">Clear scope.<br /><em>Real outcomes.</em></h2>
            <p>Professional school websites without bloated processes or confusing pricing.</p>
          </Reveal>

          <dl className="hd-stats">
            {stats.map(([value, label], index) => (
              <Reveal key={label} as="div" delay={index * 60}>
                <dt>{value}</dt>
                <dd>{label}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <section className="hd-vision page-shell" aria-labelledby="vision-heading">
        <div className="container hd-vision-card">
          <Reveal className="hd-vision-copy">
            <p className="hd-kicker hd-kicker--dark"><span /> Built for school leaders</p>
            <h2 id="vision-heading">A website your school can be <em>proud of.</em></h2>
            <p>Make the right first impression with a digital presence that reflects the care you put into education every day.</p>
            <div className="hd-vision-actions">
              <Link className="hd-pill hd-pill--dark" to="/contact">Let’s build yours <span aria-hidden="true">↗</span></Link>
              <Link className="hd-text-link hd-text-link--dark" to="/pricing">View pricing <span aria-hidden="true">→</span></Link>
            </div>
          </Reveal>
          <Reveal className="hd-vision-art" direction="right" delay={90}>
            <div className="hd-vision-shape" aria-hidden="true" />
            <img src={schoolLeaders} alt="School leaders reviewing a digital school experience" />
          </Reveal>
        </div>
      </section>
    </main>
  );
}

export default Home;
