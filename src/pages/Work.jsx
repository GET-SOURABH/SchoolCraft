import PageCTA from '../components/PageCTA';
import ProjectShowcase from '../components/ProjectShowcase';
import { projects } from '../data/projects';

function Work() {
  return (
    <main id="main-content" className="work-page">
      <section className="page-hero page-shell work-hero" aria-labelledby="work-page-heading">
        <div className="container page-hero-inner">
          <p className="eyebrow">OUR WORK</p>
          <h1 id="work-page-heading">Real schools.<br />Real websites.<br /><em>Live online.</em></h1>
          <p>Explore school websites we’ve designed and developed. Real project screenshots and live links will be added as projects are completed.</p>
        </div>
      </section>

      <section className="work-list page-shell" aria-label="School website projects">
        <div className="container project-grid project-grid--work">
          {projects.map(project => <ProjectShowcase key={project.number} {...project} showNumber />)}
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
