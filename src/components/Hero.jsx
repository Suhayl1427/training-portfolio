import { personalData } from "../data/portfolioData";

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="availability-pill">
              <span className="pulsing-dot"></span>
              <span className="availability-text">{personalData.status}</span>
            </div>

            <p className="hero-greeting">
              Hello, I&apos;m <span className="highlight-name">{personalData.name}</span>.
            </p>

            <h1 className="hero-headline">{personalData.headline}</h1>

            <p className="hero-role-badge">{personalData.role}</p>

            <p className="hero-intro">{personalData.introduction}</p>

            <div className="hero-actions">
              <a href="#projects" className="btn-primary">
                Explore My Work
                <svg
                  className="btn-icon"
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
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>

              <a href="#contact" className="btn-secondary">
                Contact Me
              </a>
            </div>

            <div className="hero-social-links">
              <span className="social-label">Connect:</span>
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-anchor"
                aria-label="Mohamed Suhail on GitHub"
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                <span>GitHub</span>
              </a>

              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-anchor"
                aria-label="Mohamed Suhail on LinkedIn"
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="profile-image-card">
              <div className="profile-image-inner">
                <div className="avatar-frame">
                  <div className="avatar-monogram">MS</div>
                  <div className="avatar-details">
                    <span className="avatar-name">Mohamed Suhail</span>
                    <span className="avatar-title">Frontend &amp; Creative Designer</span>
                  </div>
                </div>
                <div className="profile-stat-box">
                  <span className="stat-number">2024–2028</span>
                  <span className="stat-label">BE CSE Undergrad</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
