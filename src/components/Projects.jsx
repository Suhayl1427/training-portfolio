import { personalData } from "../data/portfolioData";

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="section-container">
        <div className="section-header">
          <span className="section-eyebrow">Selected Works</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtext">
            Explore key projects showcasing full-stack web applications, seamless user experiences, and blockchain security.
          </p>
        </div>

        <div className="projects-grid-cards">
          {personalData.projects.map((project) => (
            <article key={project.title} className="project-feature-card">
              <div className="project-cover-container">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="project-cover-photo"
                  loading="lazy"
                />
              </div>

              <div className="project-body-content">
                <span className="project-tag-category">{project.category}</span>

                <h3 className="project-bold-title">{project.title}</h3>

                <p className="project-description-text">{project.description}</p>

                <div className="project-pills-row">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-badge-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-action-row">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-view-live"
                    aria-label={`${project.actionText || "View Live"} for ${project.title}`}
                  >
                    <span>{project.actionText || "View Live"}</span>
                    <svg
                      className="arrow-live-icon"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
