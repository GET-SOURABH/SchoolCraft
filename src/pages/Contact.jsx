import { useRef, useState } from 'react';
import PageCTA from '../components/PageCTA';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mkjnpavb';

const submissionMessages = {
  success: 'Thanks — your enquiry has been sent. We’ll get back to you soon.',
  error: 'Something went wrong while sending your enquiry. Please try again.',
};

const nextSteps = [
  {
    number: '01',
    title: 'We read your enquiry',
    description: 'We review your school details and requirements.',
  },
  {
    number: '02',
    title: 'We discuss the scope',
    description: 'We confirm the right package or discuss anything custom your school needs.',
  },
  {
    number: '03',
    title: 'We begin with your content',
    description: 'Once the project is agreed, we collect the school information needed to start.',
  },
];

const helpfulDetails = [
  'Whether your school already has a website',
  'Which package you are considering',
  'Approximate number of pages / sections you need',
  'Any specific features you need',
  'Whether you already own a domain',
];

function Contact() {
  const [submissionStatus, setSubmissionStatus] = useState('idle');
  const submissionInProgress = useRef(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (submissionInProgress.current) return;

    form.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], textarea').forEach(field => {
      field.value = field.value.trim();
    });

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);
    if (formData.get('_gotcha')) {
      setSubmissionStatus('error');
      return;
    }

    submissionInProgress.current = true;
    setSubmissionStatus('submitting');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });
      const responseData = await response.json().catch(() => null);

      if (!response.ok) {
        console.error('Formspree submission error:', responseData);
        setSubmissionStatus('error');
        return;
      }

      form.reset();
      setSubmissionStatus('success');
    } catch (error) {
      console.error('Formspree request failed:', error);
      setSubmissionStatus('error');
    } finally {
      submissionInProgress.current = false;
    }
  };

  const statusMessage = submissionMessages[submissionStatus] || '';

  return (
    <main id="main-content" className="contact-page">
      <section className="contact-hero page-shell" aria-labelledby="contact-heading">
        <div className="container contact-hero-layout">
          <div>
            <p className="eyebrow">CONTACT</p>
            <h1 id="contact-heading">Let’s put your school<br /><em>online.</em></h1>
          </div>
          <div className="contact-hero-aside">
            <p>Tell us about your school and what you need. We’ll use the details to understand the project and discuss the right next step.</p>
            <span className="contact-annotation">Start with the basics. <span aria-hidden="true">↘</span></span>
          </div>
        </div>
      </section>

      <section className="contact-content page-shell" aria-label="SchoolCraft enquiry">
        <div className="container contact-content-grid">
          <form
            className="contact-form"
            onSubmit={handleSubmit}
            aria-busy={submissionStatus === 'submitting'}
            aria-describedby="contact-privacy-note contact-form-status"
          >
            <input type="hidden" name="_source" defaultValue="SchoolCraft Website" />
            <input type="hidden" name="_subject" defaultValue="New SchoolCraft enquiry" />
            <input type="hidden" name="_page" defaultValue="/contact" />
            <div className="contact-honeypot" aria-hidden="true">
              <label htmlFor="contact-company-website">Leave this field empty</label>
              <input id="contact-company-website" name="_gotcha" type="text" autoComplete="off" tabIndex="-1" />
            </div>

            <div className="contact-form-heading">
              <p className="eyebrow">YOUR SCHOOL</p>
              <h2>Tell us what you need.</h2>
              <p>A few clear details are enough to begin.</p>
            </div>

            <div className="contact-form-grid">
              <div className="contact-field">
                <label htmlFor="contact-name">Your Name <span>Required</span></label>
                <input id="contact-name" name="name" type="text" autoComplete="name" required />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-school">School Name <span>Required</span></label>
                <input id="contact-school" name="school" type="text" autoComplete="organization" required />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-email">Email Address <span>Required</span></label>
                <input id="contact-email" name="email" type="email" autoComplete="email" required />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-phone">Phone Number <span>Optional</span></label>
                <input id="contact-phone" name="phone" type="tel" autoComplete="tel" />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-location">City / State <span>Optional</span></label>
                <input id="contact-location" name="location" type="text" autoComplete="address-level2" />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-package">Package Interested In <span>Optional</span></label>
                <select id="contact-package" name="package" defaultValue="not-sure">
                  <option value="not-sure">Not sure yet</option>
                  <option value="essential">₹20,000 — Essential School Website</option>
                  <option value="complete">₹30,000 — Complete School Website</option>
                  <option value="custom">Custom Requirement</option>
                </select>
              </div>

              <div className="contact-field contact-field--full">
                <label htmlFor="contact-requirements">What does your school need? <span>Required</span></label>
                <textarea
                  id="contact-requirements"
                  name="message"
                  rows="7"
                  placeholder="Tell us a little about your school, whether you already have a website, and anything specific you’d like included."
                  required
                />
              </div>
            </div>

            <div className="contact-form-footer">
              <p id="contact-privacy-note">We’ll only use these details to respond to your enquiry.</p>
              <button className="button button-primary contact-submit" type="submit" disabled={submissionStatus === 'submitting'}>
                {submissionStatus === 'submitting' ? 'Sending...' : <>Send Enquiry <span aria-hidden="true">↗</span></>}
              </button>
            </div>
            <p
              id="contact-form-status"
              className={`contact-form-status contact-form-status--${submissionStatus}`}
              role={submissionStatus === 'error' ? 'alert' : 'status'}
              aria-live={submissionStatus === 'error' ? 'assertive' : 'polite'}
            >
              {statusMessage}
            </p>
          </form>

          <section className="contact-next" aria-labelledby="contact-next-heading">
            <p className="eyebrow">THE NEXT STEP</p>
            <h2 id="contact-next-heading">What happens next?</h2>
            <ol className="contact-next-list">
              {nextSteps.map(step => (
                <li key={step.number}>
                  <span aria-hidden="true">{step.number}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <aside className="contact-helpful" aria-labelledby="contact-helpful-heading">
            <h2 id="contact-helpful-heading">Helpful to mention</h2>
            <ul>
              {helpfulDetails.map(item => <li key={item}>{item}</li>)}
            </ul>
          </aside>

        </div>
      </section>

      <PageCTA
        headingId="contact-shortcuts-heading"
        title="Not sure which package you need?"
        description="Compare the Essential and Complete website options before enquiring."
        primaryLabel="View Pricing"
        primaryHref="/pricing"
        secondaryLabel="See how the process works"
        secondaryHref="/how-it-works"
      />

    </main>
  );
}

export default Contact;
