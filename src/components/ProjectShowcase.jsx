const concepts = {
  classic: { label: 'LEARNING WITH PURPOSE', heading: 'A strong foundation.\nA brighter tomorrow.', copy: 'An education that nurtures character, curiosity and confidence.', action: 'Explore admissions', sections: ['Our approach', 'Life on campus', 'Visit our school'] },
  modern: { label: 'OPEN MINDS. NEW POSSIBILITIES.', heading: 'The world is\nyour classroom.', copy: 'Space to question. Freedom to explore. A community to grow with.', action: 'Discover our approach', sections: ['Academics', 'Spaces to grow', 'Our community'] },
  primary: { label: 'SMALL STEPS. WONDERFUL DISCOVERIES.', heading: 'A little curiosity.\nA world of discovery.', copy: 'A happy place for young minds to learn, play and find their own way.', action: 'Come and explore', sections: ['Make & create', 'Play & discover', 'Learn together'] },
};

function ConceptPreview({ title, variant }) {
  const concept = concepts[variant];
  return (
    <div className="concept-site" aria-hidden="true">
      <div className="concept-nav"><span className="concept-wordmark">{title}</span><div><span>Our school</span><span>Learning</span><span>Admissions ↗</span></div></div>
      <div className="concept-hero">
        <div className="concept-copy"><span className="concept-kicker">{concept.label}</span><h4>{concept.heading}</h4><p>{concept.copy}</p><span className="concept-action">{concept.action} ↗</span></div>
        <div className="concept-scene"><span className="concept-scene-label">A PLACE TO GROW</span><div className="concept-building"><i /><i /><i /><i /><i /><i /></div><div className="concept-path" /></div>
      </div>
      <div className="concept-sections">{concept.sections.map((label, index) => <div key={label}><span className={`concept-tile concept-tile-${index}`} /><span>{label}</span><span>↗</span></div>)}</div>
    </div>
  );
}

function ProjectShowcase({ number, title, location, description, image, imageAlt, url, tags, variant, isPlaceholder }) {
  // Only non-placeholder projects with valid HTTP(S) URLs become live links.
  let liveUrl = null;
  try {
    const parsed = new URL(url);
    if (isPlaceholder === false && ['https:', 'http:'].includes(parsed.protocol)) liveUrl = parsed.href;
  } catch { /* Awaiting a live URL. */ }

  return (
    <article className={`project-showcase project-showcase--${variant}`} aria-labelledby={`project-title-${number}`}>
      <div className="project-info">
        <div className="project-index"><span className="project-number" aria-hidden="true">{number}</span><span className="eyebrow">PROJECT {number}</span></div>
        <h3 id={`project-title-${number}`}>{title}</h3>
        <p className="project-location">{location}</p>
        <p className="project-description">{description}</p>
        <ul className="project-tags" aria-label="Project services">{tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
        <div className="project-link-row">
          {liveUrl ? <a className="project-live-link" href={liveUrl} target="_blank" rel="noopener noreferrer">View Live Website <span aria-hidden="true">↗</span></a> : <button className="project-live-link" type="button" disabled>Project link coming soon</button>}
        </div>
      </div>
      <figure className="project-visual">
        <div className="project-browser">
          <div className="project-browser-bar" aria-hidden="true"><span className="project-browser-dots"><i /><i /><i /></span><span>{isPlaceholder ? 'DESIGN CONCEPT' : title}</span><span>↗</span></div>
          {image ? <img className="project-screenshot" src={image} alt={imageAlt || `${title} website preview`} loading="lazy" decoding="async" /> : <ConceptPreview title={title} variant={variant} />}
        </div>
        <figcaption>{isPlaceholder ? 'Illustrative design preview' : `${title} — website preview`}<span aria-hidden="true">{variant === 'modern' ? 'Built for schools ⤴' : 'Designed for every screen'}</span></figcaption>
      </figure>
    </article>
  );
}

export default ProjectShowcase;
