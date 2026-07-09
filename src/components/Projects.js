import "./Projects.css";
import { projects } from "../data/portfolioData";

import { FaGithub, FaExternalLinkAlt, FaTrain, FaMobileAlt } from "react-icons/fa";

import { BsRobot } from "react-icons/bs";


// Map icon key → React Icon component with color
const PROJECT_ICONS = {
  train:  { component: FaTrain,        color: "#6366f1" },
  mobile: { component: FaMobileAlt,    color: "#f59e0b" },
  ai:     { component: BsRobot,        color: "#10b981" },
};

export default function Projects({ visible }) {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">

        <div className={`section-header fade-up ${visible ? "visible" : ""}`}>
          <p className="section-eyebrow" style={{ color: "var(--accent)" }}>What I've Built</p>
          <h2 className="section-title">Featured Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => {
            const iconEntry = PROJECT_ICONS[project.icon];
            const IconComponent = iconEntry?.component;
            const iconColor = iconEntry?.color || project.color;

            return (
              <div
                key={project.id}
                className={`project-card fade-up d${index + 1} ${visible ? "visible" : ""}`}
              >
                {/* Top color bar */}
                <div
                  style={{
                    position: "absolute", top: 0, left: 0, right: 0,
                    height: 3, borderRadius: "20px 20px 0 0",
                    background: `linear-gradient(90deg, ${project.color}, transparent)`,
                  }}
                />

                <div className="project-top">
                  {/* Real icon in colored box */}
                  <div
                    className="project-icon-box"
                    style={{ background: `${project.color}20`, color: iconColor }}
                  >
                    {IconComponent && <IconComponent />}
                  </div>

                  <div className="project-status">
                    <div className="project-status-dot" />
                    {project.status}
                  </div>
                </div>

                <span
                  className="project-type-badge"
                  style={{
                    background: `${project.color}18`,
                    color: project.color,
                    border: `1px solid ${project.color}30`,
                  }}
                >
                  {project.type}
                </span>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="tech-badge"
                      style={{
                        background: `${project.color}12`,
                        color: project.color,
                        border: `1px solid ${project.color}28`,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-github"
                  >
                    <FaGithub /> GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-live"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}