import { useState, useEffect } from "react";
import "./styles/global.css";

import { ThemeProvider } from "./context/ThemeContext";
import Navbar   from "./components/Navbar";
import Hero     from "./components/Hero";
import Projects from "./components/Projects";
import Skills   from "./components/Skills";
import Contact  from "./components/Contact";
import Footer   from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("about");
  const [visible, setVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            setVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.2 }
    );

    const sections = ["about", "projects", "skills", "contact"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <ThemeProvider>
      <Navbar   activeSection={activeSection} />
      <Hero     visible={visible.about}    />
      <Projects visible={visible.projects} />
      <Skills   visible={visible.skills}   />
      <Contact  visible={visible.contact}  />
      <Footer />
    </ThemeProvider>
  );
}