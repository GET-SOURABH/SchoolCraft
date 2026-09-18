// Neutral, replaceable artwork for records that do not have a real screenshot yet.
// It deliberately avoids invented school branding, photography or contact details.
export function WebsiteScreenshotPlaceholder({ label = 'School website screenshot' }) {
  return (
    <div className="website-placeholder" aria-hidden="true">
      <div className="website-placeholder-nav">
        <span className="placeholder-brand" />
        <span /><span /><span />
      </div>
      <div className="website-placeholder-main">
        <div className="website-placeholder-copy">
          <span className="placeholder-kicker" />
          <span className="placeholder-heading" />
          <span className="placeholder-heading placeholder-heading--short" />
          <span className="placeholder-line" />
          <span className="placeholder-line placeholder-line--short" />
          <span className="placeholder-button" />
        </div>
        <div className="website-placeholder-image"><span>{label}</span></div>
      </div>
      <div className="website-placeholder-sections"><span /><span /><span /></div>
    </div>
  );
}

function ProjectShowcase({ number, title, location, description, image, imageAlt, url, tags, variant, previewLabel, isPlaceholder, showNumber = false }) {
  // Only non-placeholder projects with valid HTTP(S) URLs become live links.
  let liveUrl = null;
  try {
    const parsed = new URL(url);
    if (isPlaceholder === false && ['https:', 'http:'].includes(parsed.protocol)) liveUrl = parsed.href;
  } catch { /* Awaiting a live URL. */ }

  return (
    <article className={`project-card project-card--${variant}`} aria-labelledby={`project-title-${number}`}>
      <figure className="project-card-visual">
        <div className="project-browser">
          <div className="project-browser-bar" aria-hidden="true">
            <span className="project-browser-dots"><i /><i /><i /></span>
            <span>{isPlaceholder ? 'PLACEHOLDER PREVIEW' : title}</span>
            <span>↗</span>
          </div>
          {image
            ? <img className="project-screenshot" src={image} alt={imageAlt || `${title} website preview`} loading="lazy" decoding="async" />
            : <WebsiteScreenshotPlaceholder label={previewLabel} />}
        </div>
        <figcaption>{isPlaceholder ? 'Development placeholder — replace with a real project screenshot.' : `${title} — website preview`}</figcaption>
      </figure>
      <div className="project-card-info">
        <div className="project-card-meta">
          {showNumber
            ? <div className="project-card-location"><span className="project-card-number">PROJECT {number}</span><p>{location}</p></div>
            : <p>{location}</p>}
          {isPlaceholder && <span>Concept placeholder</span>}
        </div>
        <h3 id={`project-title-${number}`}>{title}</h3>
        <p className="project-description">{description}</p>
        <ul className="project-tags" aria-label="Project services">{tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
        {liveUrl
          ? <a className="project-live-link" href={liveUrl} target="_blank" rel="noopener noreferrer">View Live Website <span aria-hidden="true">↗</span></a>
          : <span className="project-live-link project-live-link--disabled">{showNumber ? 'Live website coming soon' : 'Coming Soon'}</span>}
      </div>
    </article>
  );
}

export default ProjectShowcase;
