import { useState } from "react";
import "./App.css";

const projects = [
  {
    title: "Personal Portfolio",
    description: "A responsive website introducing me and showing my work.",
    technologies: ["React", "CSS", "JavaScript"],
    link: "https://github.com/",
  },
  {
    title: "Weather App",
    description: "A simple weather dashboard concept for checking conditions.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/",
  },
  {
    title: "Task Tracker",
    description: "A small app concept for organizing everyday tasks.",
    technologies: ["React", "CSS"],
    link: "https://github.com/",
  },
];

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((currentForm) => ({ ...currentForm, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setStatus(`Thanks, ${form.name}! Your message is ready.`);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <>
      <header className="site-header">
        <a className="logo" href="#home">MS</a>

        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <p className="eyebrow">Hello, I’m</p>
          <h1>Mohamed Suhail</h1>
          <p className="hero-subtitle">Aspiring Full-Stack Developer</p>
          <p className="hero-description">
            I’m learning to build useful, accessible websites with React,
            JavaScript, and CSS.
          </p>
          <a className="button" href="#projects">See my projects</a>
        </section>

        <section className="section about-section" id="about">
          <p className="eyebrow">A little about me</p>
          <h2>About Me</h2>
          <p className="section-intro">
            I enjoy turning ideas into simple web experiences. I’m currently
            learning frontend development and building projects to practice
            what I learn.
          </p>
        </section>

        <section className="section" id="skills">
          <p className="eyebrow">What I’m learning</p>
          <h2>My Skills</h2>
          <div className="skills-list">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Git</span>
            <span>Responsive Design</span>
          </div>
        </section>

        <section className="section" id="projects">
          <p className="eyebrow">A few things I’ve made</p>
          <h2>My Projects</h2>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="technology-list">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noreferrer">
                  View project <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <p className="eyebrow">Let’s talk</p>
          <h2>Contact Me</h2>
          <p className="section-intro">
            Have a question or want to say hello? Send me a message.
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Your name
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Your email
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Your message
              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
              />
            </label>

            <button className="button" type="submit">Send message</button>
          </form>

          {status && <p className="form-status" role="status">{status}</p>}
          <p className="form-note">
            This demo form shows a confirmation on this page; it does not send
            email yet.
          </p>
        </section>
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Mohamed Suhail</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  );
}

export default App;