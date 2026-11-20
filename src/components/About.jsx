import { personalData } from "../data/portfolioData";

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="section-container">
        <div className="section-header">
          <span className="section-eyebrow">Biography</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-grid">
          <div className="about-image-column">
            <div className="about-image-card">
              <div className="about-visual-canvas">
                <img
                  src="/about-placeholder.svg"
                  alt="Mohamed Suhail - Developer profile presentation"
                  className="about-placeholder-img"
                  loading="lazy"
                />
              </div>
              <div className="about-quick-specs">
                <div className="spec-row">
                  <span className="spec-label">Location</span>
                  <span className="spec-val">{personalData.location}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Education</span>
                  <span className="spec-val">{personalData.education.degree}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">College</span>
                  <span className="spec-val">{personalData.education.institution}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="about-text-column">
            {personalData.bio.map((paragraph, index) => (
              <p key={index} className="about-paragraph">
                {paragraph}
              </p>
            ))}

            <div className="about-highlights-grid">
              <div className="highlight-card">
                <span className="highlight-tag">Focus</span>
                <h3 className="highlight-title">Modern Frontend</h3>
                <p className="highlight-desc">React, modern responsive layouts, state handling, and component architecture.</p>
              </div>

              <div className="highlight-card">
                <span className="highlight-tag">Craft</span>
                <h3 className="highlight-title">Clean UI / UX</h3>
                <p className="highlight-desc">Emphasis on typographic hierarchy, whitespace, accessible components, and smooth states.</p>
              </div>
            </div>

            <div className="about-resume-actions">
              <a
                href="#contact"
                className="btn-resume"
                download="Mohamed_Suhail_Resume.pdf"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download / View Resume
              </a>
              <span className="resume-note">PDF Format • Updated for 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
