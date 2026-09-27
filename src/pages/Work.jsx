import { useCallback, useEffect, useRef, useState } from 'react';
import PageCTA from '../components/PageCTA';
import ProjectShowcase from '../components/ProjectShowcase';
import Reveal from '../components/Reveal';
import workHeroShowcase from '../assets/images/work-hero-showcase.png';
import { projects } from '../data/projects';

function Work() {
  const projectTrackRef = useRef(null);
  const [canScrollPrevious, setCanScrollPrevious] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const updateCarouselControls = useCallback(() => {
    const track = projectTrackRef.current;
    if (!track) return;

    const maxScroll = track.scrollWidth - track.clientWidth;
    setCanScrollPrevious(track.scrollLeft > 2);
    setCanScrollNext(track.scrollLeft < maxScroll - 2);
  }, []);

  useEffect(() => {
    const track = projectTrackRef.current;
    if (!track) return undefined;

    updateCarouselControls();
    const resizeObserver = new ResizeObserver(updateCarouselControls);
    resizeObserver.observe(track);
    return () => resizeObserver.disconnect();
  }, [updateCarouselControls]);

  const scrollProjects = (direction) => {
    const track = projectTrackRef.current;
    const card = track?.querySelector('.project-card-reveal');
    if (!track || !card) return;

    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    track.scrollBy({
      left: direction * (card.getBoundingClientRect().width + gap),
      behavior: reduceMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <main id="main-content" className="work-page">
      <section className="page-hero page-shell work-hero" aria-labelledby="work-page-heading">
        <div className="container page-hero-inner inner-page-hero-frame work-hero-layout">
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

      <section id="projects" className="work-list page-shell anchor-target" aria-labelledby="work-showcase-heading">
        <div className="container work-showcase-panel">
          <header className="work-showcase-header">
            <div className="work-showcase-heading">
              <p className="eyebrow">OUR WORK</p>
              <h2 id="work-showcase-heading">Selected school websites</h2>
              <p>Explore the website directions we create for schools.</p>
            </div>
            <div className="work-showcase-controls" aria-label="Project carousel controls">
              <button
                type="button"
                className="work-showcase-control"
                aria-label="Show previous project"
                disabled={!canScrollPrevious}
                onClick={() => scrollProjects(-1)}
              >
                <span aria-hidden="true">←</span>
              </button>
              <button
                type="button"
                className="work-showcase-control"
                aria-label="Show next project"
                disabled={!canScrollNext}
                onClick={() => scrollProjects(1)}
              >
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </header>

          <div
            ref={projectTrackRef}
            className="project-grid project-grid--work"
            role="region"
            aria-label="Project carousel. Scroll horizontally to explore all six projects."
            tabIndex="0"
            onScroll={updateCarouselControls}
          >
            {projects.map((project, index) => (
              <Reveal key={project.number} className="project-card-reveal" delay={index * 70}>
                <ProjectShowcase {...project} showNumber />
              </Reveal>
            ))}
          </div>
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
