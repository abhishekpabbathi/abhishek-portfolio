import { useState, useEffect } from "react";
import "./Navbar.css";
import { personalInfo } from "../data/portfolioData";
import ThemeSwitcher from "./ThemeSwitcher";

const NAV_LINKS = ["About", "Projects", "Skills", "Contact"];

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-inner">

        <span className="navbar-logo" onClick={() => scrollTo("about")}>
          {personalInfo.name}.
        </span>

        <div className="navbar-links">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              className={`nav-btn ${activeSection === link.toLowerCase() ? "active" : ""}`}
              onClick={() => scrollTo(link)}
            >
              {link}
            </button>
          ))}
          <button className="nav-resume-btn">Resume ↗</button>
          <ThemeSwitcher />
        </div>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>

      </div>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <button
            key={link}
            className="mobile-nav-btn"
            onClick={() => scrollTo(link)}
          >
            {link}
          </button>
        ))}
        <div style={{ paddingTop: "12px" }}>
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
}