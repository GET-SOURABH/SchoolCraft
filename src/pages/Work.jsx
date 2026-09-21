import PageCTA from '../components/PageCTA';
import ProjectShowcase from '../components/ProjectShowcase';
import Reveal from '../components/Reveal';
import workHeroShowcase from '../assets/images/work-hero-showcase.png';
import { projects } from '../data/projects';

function Work() {
  return (
    <main id="main-content" className="work-page">
      <section className="page-hero page-shell work-hero" aria-labelledby="work-page-heading">
        <div className="container page-hero-inner work-hero-layout">
          <Reveal as="p" className="eyebrow">OUR WORK</Reveal>
          <Reveal as="h1" id="work-page-heading" delay={70}>Real schools.<br />Real websites.<br /><em>Live online.</em></Reveal>
          <Reveal as="p" delay={140}>Explore school websites we’ve designed and developed. Real project screenshots and live links will be added as projects are completed.</Reveal>
          <Reveal className="work-hero-visual" direction="right" delay={110} duration={760}>
            <img
              className="work-hero-image"
              src={workHeroShowcase}
              alt="Modern school website design previews shown across digital devices"
            />
          </Reveal>
        </div>
      </section>

      <section className="work-list page-shell" aria-label="School website projects">
        <div className="container project-grid project-grid--work">
          {projects.map((project, index) => (
            <Reveal key={project.number} className="project-card-reveal" delay={index * 70}>
              <ProjectShowcase {...project} showNumber />
            </Reveal>
          ))}
        </div>
      </section>

      <PageCTA
        headingId="work-cta-heading"
        title="Your school could be next."
        description="Give parents a clearer first impression of your school online."
        primaryLabel="Start a Project"
        primaryHref="/contact"
        secondaryLabel="See Pricing"
        secondaryHref="/pricing"
      />
    </main>
  );
}

export default Work;
