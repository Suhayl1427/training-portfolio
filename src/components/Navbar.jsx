import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" }
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        <a href="#hero" className="navbar-logo" aria-label="Mohamed Suhail Home">
          <span className="logo-text">MS<span className="logo-dot">.</span></span>
        </a>

        <nav className="navbar-desktop-nav" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
        </nav>

        <div className="navbar-actions">
          <a href="#contact" className="btn-contact">
            Contact
          </a>

          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <span className={`hamburger-bar ${mobileMenuOpen ? "open" : ""}`}></span>
            <span className={`hamburger-bar ${mobileMenuOpen ? "open" : ""}`}></span>
          </button>
        </div>
      </div>

      <div className={`mobile-nav-drawer ${mobileMenuOpen ? "active" : ""}`}>
        <div className="mobile-nav-content">
          <nav className="mobile-nav-links">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="mobile-nav-link"
                onClick={handleLinkClick}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="mobile-nav-link contact-mobile-highlight"
              onClick={handleLinkClick}
            >
              Get in Touch
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
