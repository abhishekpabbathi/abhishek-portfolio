import "./Skills.css";
import { skills } from "../data/portfolioData";

import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaGit, FaGithub, FaPaintBrush, FaCogs, FaServer, FaTools } from "react-icons/fa";
import { SiJavascript, SiExpress, SiFastapi, SiMongodb, SiPostman, SiExpo, SiMongoose } from "react-icons/si";
import { TbBrandReactNative, TbApi } from "react-icons/tb";
import { BsDatabase } from "react-icons/bs";
import { VscVscode } from "react-icons/vsc";

// Each icon mapped to its real brand color
const ICON_MAP = {
  FaReact:            { component: FaReact,            color: "#61dafb" },
  TbBrandReactNative: { component: TbBrandReactNative, color: "#61dafb" },
  SiJavascript:       { component: SiJavascript,       color: "#f7df1e" },
  FaHtml5:            { component: FaHtml5,            color: "#e34f26" },
  FaCss3Alt:          { component: FaCss3Alt,          color: "#1572b6" },
  FaNodeJs:           { component: FaNodeJs,           color: "#339933" },
SiExpress: { component: SiExpress, color: "#888888" },
  TbApi:              { component: TbApi,              color: "#a78bfa" },
  SiFastapi:          { component: SiFastapi,          color: "#009688" },
  FaPython:           { component: FaPython,           color: "#3776ab" },
  SiMongodb:          { component: SiMongodb,          color: "#47a248" },
  SiMongoose:         { component: SiMongoose,         color: "#880000" },
  BsDatabase:         { component: BsDatabase,         color: "#f59e0b" },
  FaGit:              { component: FaGit,              color: "#f05032" },
  FaGithub:           { component: FaGithub,           color: "#ffffff" },
  VscVscode:          { component: VscVscode,          color: "#007acc" },
  SiExpo:             { component: SiExpo,             color: "#8b5cf6" },
  SiPostman:          { component: SiPostman,          color: "#ff6c37" },
};

const CAT_ICONS = {
  Frontend: <FaPaintBrush />,
  Backend:  <FaCogs />,
  Database: <FaServer />,
  Tools:    <FaTools />,
};

export default function Skills({ visible }) {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">

        <div className={`section-header fade-up ${visible ? "visible" : ""}`}>
          <p className="section-eyebrow" style={{ color: "#ec4899" }}>My Arsenal</p>
          <h2 className="section-title">Skills & Tech Stack</h2>
        </div>

        <div className={`orbit-wrap fade-up d2 ${visible ? "visible" : ""}`}>
          <div className="orbit-ring-outer">
            <div className="orbit-1">
              <div className="orbit-dot" style={{ background: "#6366f1" }} />
            </div>
            <div className="orbit-2">
              <div className="orbit-dot" style={{ background: "#ec4899" }} />
            </div>
            <div className="orbit-center">Dev</div>
          </div>
        </div>

        <div className="skills-grid">
          {skills.map((cat, index) => (
            <div
              key={cat.category}
              className={`skill-card fade-up d${index + 1} ${visible ? "visible" : ""}`}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${cat.color}40`;
                e.currentTarget.style.boxShadow = `0 8px 30px ${cat.color}20`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div className="skill-card-header">
                <div className="skill-icon" style={{ background: `${cat.color}18`, color: cat.color }}>
                  {CAT_ICONS[cat.category]}
                </div>
                <span className="skill-category-name">{cat.category}</span>
              </div>

              <div className="skill-tags">
                {cat.items.map((item) => {
                  const entry = ICON_MAP[item.icon];
                  const IconComponent = entry?.component;
                  const iconColor = entry?.color || cat.color;

                  return (
                    <span
                      key={item.name}
                      className="skill-tag"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = `${iconColor}18`;
                        e.currentTarget.style.borderColor = `${iconColor}50`;
                        e.currentTarget.style.color = iconColor;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                        e.currentTarget.style.color = "#94a3b8";
                      }}
                    >
                      {IconComponent && (
                        <IconComponent style={{ fontSize: "1rem", color: iconColor, flexShrink: 0 }} />
                      )}
                      {item.name}
                    </span>
                  );
                })}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}