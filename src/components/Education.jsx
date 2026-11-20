import { personalData } from "../data/portfolioData";

export default function Education() {
  const { education, achievements } = personalData;

  return (
    <section className="education-section" id="education">
      <div className="section-container">
        <div className="section-header">
          <span className="section-eyebrow">Academic &amp; Accolades</span>
          <h2 className="section-title">Education &amp; Achievements</h2>
          <p className="section-subtext">
            My academic foundation in computer engineering alongside competitive hackathon achievements.
          </p>
        </div>

        <div className="edu-achieve-grid">
          <div className="edu-card">
            <div className="card-top-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
              <span className="card-eyebrow">Education</span>
            </div>

            <div className="edu-body">
              <span className="edu-period">{education.period}</span>
              <h3 className="edu-degree">{education.degree}</h3>
              <p className="edu-institution">{education.institution}</p>
              <div className="edu-status-badge">
                <span className="status-indicator"></span>
                <span>{education.status}</span>
              </div>
            </div>
          </div>

          <div className="achieve-card">
            <div className="card-top-icon award-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="8" r="7"></circle>
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
              </svg>
              <span className="card-eyebrow">Milestone Achievement</span>
            </div>

            {achievements.map((item, index) => (
              <div key={index} className="achieve-body">
                <span className="achieve-badge">{item.category}</span>
                <h3 className="achieve-title">{item.title}</h3>
                <p className="achieve-focus">{item.project}</p>
                <p className="achieve-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
