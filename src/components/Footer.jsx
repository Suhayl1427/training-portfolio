import { personalData } from "../data/portfolioData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="section-container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="footer-logo">MS<span className="dot">.</span></span>
            <span className="footer-copy">
              &copy; {currentYear} {personalData.name}. All rights reserved.
            </span>
          </div>

          <div className="footer-links">
            <a href="#about" className="footer-nav-link">About</a>
            <a href="#skills" className="footer-nav-link">Skills</a>
            <a href="#projects" className="footer-nav-link">Projects</a>
            <a href="#experience" className="footer-nav-link">Experience</a>
            <a href="#education" className="footer-nav-link">Education</a>
          </div>

          <div className="footer-top">
            <a href="#hero" className="btn-back-to-top" aria-label="Back to top">
              <span>Back to Top</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="19" x2="12" y2="5"></line>
                <polyline points="5 12 12 5 19 12"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
