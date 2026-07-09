import "./Footer.css";
import { personalInfo } from "../data/portfolioData";

export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-logo">{personalInfo.name}.</div>

      <div className="footer-links">
        {["about", "projects", "skills", "contact"].map((link) => (
          <button key={link} className="footer-link" onClick={() => scrollTo(link)}>
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </button>
        ))}
      </div>

      <p className="footer-copy">
        © {new Date().getFullYear()} <span>{personalInfo.name}</span> · Built with <span>React</span> · Crafted with purpose 
      </p>
    </footer>
  );
}