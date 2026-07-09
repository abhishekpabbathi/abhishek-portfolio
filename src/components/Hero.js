import { useState, useEffect } from "react";
import "./Hero.css";
import { personalInfo } from "../data/portfolioData";

import { FaReact, FaNodeJs, FaPython, FaGit, FaGithub, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiMongodb, SiJavascript, SiExpress, SiFastapi, SiPostman, SiExpo } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { BsDatabase } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { MdFavorite } from "react-icons/md";

const ROLES = ["Full-Stack Developer", "MERN Stack Engineer", "React Native Builder", "Problem Solver"];

// All tech icons with their brand colors
const TECH_ICONS = [
  { icon: FaReact,            color: "#61dafb", label: "React"         },
  { icon: SiJavascript,       color: "#f7df1e", label: "JavaScript"    },
  { icon: FaNodeJs,           color: "#339933", label: "Node.js"       },
  { icon: SiMongodb,          color: "#47a248", label: "MongoDB"       },
  { icon: TbBrandReactNative, color: "#61dafb", label: "React Native"  },
  { icon: FaPython,           color: "#3776ab", label: "Python"        },
{ icon: SiExpress, color: "#888888", label: "Express" },

  { icon: FaHtml5,            color: "#e34f26", label: "HTML5"         },
  { icon: FaCss3Alt,          color: "#1572b6", label: "CSS3"          },
  { icon: SiFastapi,          color: "#009688", label: "FastAPI"       },
  { icon: FaGithub,           color: "#ffffff", label: "GitHub"        },
  { icon: VscVscode,          color: "#007acc", label: "VS Code"       },
  { icon: SiPostman,          color: "#ff6c37", label: "Postman"       },
  { icon: SiExpo,             color: "#8b5cf6", label: "Expo"          },
  { icon: FaGit,              color: "#f05032", label: "Git"           },
  { icon: BsDatabase,         color: "#f59e0b", label: "SQL"           },
];

export default function Hero({ visible }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const [iconIndex, setIconIndex] = useState(0);
  const [iconFading, setIconFading] = useState(false);

  // Typing animation
  useEffect(() => {
    const current = ROLES[roleIndex];
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((i) => (i + 1) % ROLES.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  // Icon cycling with fade
  useEffect(() => {
    const interval = setInterval(() => {
      setIconFading(true);
      setTimeout(() => {
        setIconIndex((i) => (i + 1) % TECH_ICONS.length);
        setIconFading(false);
      }, 300);
    }, 900);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const currentIcon = TECH_ICONS[iconIndex];
  const IconComponent = currentIcon.icon;

  const infoRows = [
    { icon: <SiMongodb />,          color: "#47a248", label: "MERN Stack Dev"   },
    { icon: <TbBrandReactNative />, color: "#61dafb", label: "React Native"     },
    { icon: <MdFavorite />,         color: "#ec4899", label: "Faith-Driven"     },
    { icon: <HiLocationMarker />,   color: "#f59e0b", label: "Hyderabad, India" },
  ];

  return (
    <section className="hero-section" id="about">
      <div className="hero-bg" />
      <div className="hero-grid-lines" />

      <div className="hero-container">

        {/* LEFT */}
        <div className="hero-left">
          <div className={`fade-up ${visible ? "visible" : ""}`}>
            <div className="hero-badge">
              <div className="hero-badge-dot" />
              Available for Opportunities
            </div>
          </div>

          <h1 className={`hero-name fade-up d1 ${visible ? "visible" : ""}`}>
            Hi, I'm <span>{personalInfo.name}</span>
          </h1>

          <div className={`hero-role fade-up d2 ${visible ? "visible" : ""}`}>
            {displayed}
            <span className="hero-cursor" />
          </div>

          <p className={`hero-bio fade-up d3 ${visible ? "visible" : ""}`}>
            {personalInfo.bio}
          </p>

          <div className={`hero-buttons fade-up d4 ${visible ? "visible" : ""}`}>
            <button className="btn-primary" onClick={() => scrollTo("projects")}>
              View My Work →
            </button>
            <button className="btn-outline" onClick={() => scrollTo("contact")}>
              Contact Me
            </button>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className={`hero-right fade-up d3 ${visible ? "visible" : ""}`}>
          <div className="hero-card">

            {/* Cycling icon avatar */}
            <div className="avatar-ring">
              <div className="avatar-inner">
                <div className={`avatar-icon-wrap ${iconFading ? "fading" : ""}`}>
                  <IconComponent style={{ fontSize: "2.2rem", color: currentIcon.color }} />
                </div>
              </div>
            </div>

            {/* Icon label */}
            <div className={`avatar-label ${iconFading ? "fading" : ""}`}>
              {currentIcon.label}
            </div>

            {/* Dot indicators */}
            <div className="icon-dots">
              {TECH_ICONS.map((_, i) => (
                <div
                  key={i}
                  className={`icon-dot ${i === iconIndex ? "active" : ""}`}
                />
              ))}
            </div>

            {infoRows.map((row) => (
              <div key={row.label} className="info-row">
                <span className="info-icon" style={{ color: row.color }}>
                  {row.icon}
                </span>
                <span>{row.label}</span>
              </div>
            ))}

            <div className="stat-row">
              <div className="stat-box">
                <div className="stat-num">3+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-box">
                <div className="stat-num">5+</div>
                <div className="stat-label">Tech Stack</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}