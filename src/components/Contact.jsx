import { useState } from "react";
import { personalData } from "../data/portfolioData";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="section-container">
        <div className="contact-card-wrapper">
          <div className="contact-grid">
            <div className="contact-meta-col">
              <span className="section-eyebrow">Get In Touch</span>
              <h2 className="contact-heading">Let&apos;s build something exceptional together.</h2>
              <p className="contact-lead">
                Whether you have an upcoming project, an internship opportunity, or simply want to connect, my inbox is always open.
              </p>

              <div className="contact-details-list">
                <div className="contact-detail-item">
                  <span className="detail-label">Location</span>
                  <span className="detail-value">{personalData.location}</span>
                </div>
                <div className="contact-detail-item">
                  <span className="detail-label">Availability</span>
                  <span className="detail-value">{personalData.status}</span>
                </div>
              </div>

              <div className="contact-social-bar">
                <a
                  href={personalData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-button"
                  aria-label="GitHub Profile"
                >
                  GitHub
                </a>
                <a
                  href={personalData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-button"
                  aria-label="LinkedIn Profile"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="contact-form-col">
              {submitted ? (
                <div className="form-success-box" role="alert">
                  <div className="success-icon-bubble">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <h3 className="success-title">Message Sent!</h3>
                  <p className="success-message">
                    Thank you for reaching out. I will review your note and respond promptly.
                  </p>
                  <button
                    type="button"
                    className="btn-reset-form"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group-row">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Alex Morgan"
                        className="form-input"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@example.com"
                        className="form-input"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry / Opportunity"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your idea or project..."
                      className="form-textarea"
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-submit">
                    <span>Send Message</span>
                    <svg
                      className="btn-icon"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
