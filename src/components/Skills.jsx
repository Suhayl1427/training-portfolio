import { personalData } from "../data/portfolioData";

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="section-container">
        <div className="section-header">
          <span className="section-eyebrow">Expertise &amp; Toolkit</span>
          <h2 className="section-title">Skills &amp; Capabilities</h2>
          <p className="section-subtext">
            A breakdown of technologies, methodologies, and creative tools I utilize to craft robust digital products.
          </p>
        </div>

        <div className="skills-grid">
          {personalData.skillCategories.map((category) => (
            <div key={category.title} className="skill-category-card">
              <div className="category-header">
                <span className="category-accent-dot"></span>
                <h3 className="category-title">{category.title}</h3>
              </div>
              <ul className="skills-tag-list">
                {category.skills.map((skill) => (
                  <li key={skill} className="skill-pill">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
