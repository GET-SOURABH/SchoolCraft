import { Link } from 'react-router-dom';

function PageCTA({ headingId, title, description, primaryLabel, primaryHref, secondaryLabel, secondaryHref }) {
  return (
    <section className="page-cta page-shell" aria-labelledby={headingId}>
      <div className="container page-cta-inner">
        <div>
          <h2 id={headingId}>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="page-cta-actions">
          <Link to={secondaryHref} className="button button-secondary">{secondaryLabel}</Link>
          <Link to={primaryHref} className="button button-primary">{primaryLabel} <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </section>
  );
}

export default PageCTA;
