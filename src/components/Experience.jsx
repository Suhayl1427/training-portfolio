import { personalData } from "../data/portfolioData";

export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="section-container">
        <div className="section-header">
          <span className="section-eyebrow">Career Path</span>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtext">
            Practical hands-on industry experience building modern web solutions and collaborating within development teams.
          </p>
        </div>

        <div className="experience-timeline">
          {personalData.experience.map((item, index) => (
            <div key={index} className="experience-card">
              <div className="experience-header-row">
                <div className="experience-role-group">
                  <h3 className="experience-role">{item.role}</h3>
                  <div className="experience-meta">
                    <span className="experience-company">{item.company}</span>
                    <span className="meta-separator">•</span>
                    <span className="experience-type-pill">{item.type}</span>
                  </div>
                </div>
                <div className="experience-period-badge">
                  <span>{item.period}</span>
                </div>
              </div>

              <div className="experience-responsibilities">
                <p className="responsibilities-title">Key Responsibilities &amp; Contributions:</p>
                <ul className="responsibilities-list">
                  {item.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="responsibility-item">
                      <span className="bullet-point"></span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
