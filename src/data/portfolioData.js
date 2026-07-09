export const personalInfo = {
  name: "Abhishek",
  fullName: "Abhishek Pabbathi",
  title: "Full-Stack Developer",
  bio: "I'm a passionate MERN stack developer who builds meaningful digital experiences — from full-stack web apps to faith-driven mobile applications.",
  email: "abhishekpabbathi07@gmail.com",
  github: "https://github.com/abhishekpabbathi",
  linkedin: "https://www.linkedin.com/in/abhishekpabbathi/",
  location: "Hyderabad, India",
};

export const projects = [
  {
    id: 1,
    title: "LibrarySpace",
    status: "Completed",
    description:
      "A full-stack Library Management System that enables students to browse, borrow, and return books while allowing librarians to manage inventory, users, and borrowing records through a secure digital platform.",
    tech: ["React", "Node.js", "Express", "SQLite", "JWT"],
    type: "Full Stack",
    color: "#6366f1",
    github: "https://github.com/abhishekpabbathi/LibrarySpace",
    live: "https://library-space-five.vercel.app/",
    icon: "train",
  },
  {
    id: 2,
    title: "Train Booking App",
    description:
      "A full-stack MERN application for booking train tickets. Features user authentication with JWT, seat selection, booking management, and REST APIs built with Express.",
    tech: [ "MongoDB", "Express", "React", "Node.js", "JWT"],
    type: "Mobile App",
    color: "#f59e0b",
    github: "https://github.com/abhishekpabbathi/GatherFlow",
    live: "..........",
    icon: "mobile",
  },
  {
    id: 3,
    title: "GatherFlow",
    description:
      "A full-stack church event management platform that streamlines attendee registration, digital event pass generation, and event check-in through a centralized system.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Nodemailer"],
    type: "MERN Stack",
    status: "Completed",
    color: "#10b981",
    github: "https://github.com/abhishekpabbathi/GatherFlow",
    live: "https://gather-flow.vercel.app/",
    icon: "ai",
  },
];

export const skills = [
  {
    category: "Frontend",
    color: "#6366f1",
    items: [
      { name: "React",        icon: "FaReact" },
      { name: "React Native", icon: "TbBrandReactNative" },
      { name: "JavaScript",   icon: "SiJavascript" },
      { name: "HTML5",        icon: "FaHtml5" },
      { name: "CSS3",         icon: "FaCss3Alt" },
    ],
  },
  {
    category: "Backend",
    color: "#f59e0b",
    items: [
      { name: "Node.js",   icon: "FaNodeJs" },
      { name: "Express",   icon: "SiExpress" },
      { name: "REST APIs", icon: "TbApi" },
      { name: "FastAPI",   icon: "SiFastapi" },
      { name: "Python",    icon: "FaPython" },
    ],
  },
  {
    category: "Database",
    color: "#10b981",
    items: [
      { name: "MongoDB",  icon: "SiMongodb" },
      { name: "Mongoose", icon: "SiMongoose" },
      { name: "SQL",      icon: "BsDatabase" },
    ],
  },
  {
    category: "Tools",
    color: "#ec4899",
    items: [
      { name: "Git",     icon: "FaGit" },
      { name: "GitHub",  icon: "FaGithub" },
      { name: "VS Code", icon: "VscVscode" },
      { name: "Expo",    icon: "SiExpo" },
      { name: "Postman", icon: "SiPostman" },
    ],
  },
];