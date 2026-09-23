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
          <Reveal as="h1" id="work-page-heading" delay={70}>Websites built for schools that <em>stand out.</em></Reveal>
          <Reveal as="p" delay={140}>Explore the website directions we create for schools. These concept placeholders will be replaced with real project screenshots and live links as work is completed.</Reveal>
          <Reveal className="work-hero-visual" direction="right" delay={110} duration={760}>
            <img
              className="work-hero-image"
              src={workHeroShowcase}
              alt="Modern school website design previews shown across digital devices"
            />
          </Reveal>
        </div>
      </section>

      <section id="projects" className="work-list page-shell anchor-target" aria-label="School website projects">
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
        description="Let’s build a website parents can understand, trust and use."
        primaryLabel="Start a Project"
        primaryHref="/contact"
        secondaryLabel="See Pricing"
        secondaryHref="/pricing"
      />
    </main>
  );
}

export default Work;
