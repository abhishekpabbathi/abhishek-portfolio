import { useState } from "react";
import "./Contact.css";
import { personalInfo } from "../data/portfolioData";
import { CiMail } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import emailjs from "@emailjs/browser";

export default function Contact({ visible }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  if (!form.name || !form.email || !form.message) return;

  emailjs.send(
  "service_83vvsz6",       // ✅ correct service id
  "template_syxvq28",
  {
    name: form.name,
    email: form.email,
    subject: form.subject,
    message: form.message,
  },
  "i28C-Yy4Kp2JgbcIS"
)
    .then((response) => {
      console.log("SUCCESS!", response);

      setSent(true);

      // ✅ clear form
      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => setSent(false), 4000);
    })
    .catch((error) => {
      console.error("FAILED...", error);
      alert("Email failed ❌");
    });
};


  const contactItems = [
    {
      icon: <CiMail />,
      label: "Email",
      value: personalInfo.email,
      link: `mailto:${personalInfo.email}`,
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      value: personalInfo.linkedin,
      link: personalInfo.linkedin,
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      value: personalInfo.github,
      link: personalInfo.github,
    },
    {
      icon: <GrLocation />,
      label: "Location",
      value: personalInfo.location,
      link: null,
    },
  ];

  return (
    <section className="contact-section" id="contact">
      <div className="contact-glow"></div>

      <div className="contact-container">
        <div className={`section-header fade-up ${visible ? "visible" : ""}`}>
          <p className="section-eyebrow" style={{ color: "#10b981" }}>
            Let's Connect
          </p>

          <h2 className="section-title">Get In Touch</h2>
        </div>

        <div className="contact-layout">

          {/* LEFT SIDE */}
          <div className={`contact-left fade-up d1 ${visible ? "visible" : ""}`}>
            <h3 className="contact-headline">
              Open to <span>New Opportunities</span>
            </h3>

            <p className="contact-subtext">
              Whether you have a project, job opportunity, or just want to say
              hello — I'd love to hear from you. Let's build something meaningful together.
            </p>

            {contactItems.map((item) => (
              <div key={item.label} className="contact-info-item">

                <div className="contact-info-icon">{item.icon}</div>

                <div>
                  <div className="contact-info-label">{item.label}</div>

                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-info-value"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div className="contact-info-value">{item.value}</div>
                  )}
                </div>

              </div>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className={`contact-right fade-up d2 ${visible ? "visible" : ""}`}>

            <form className="contact-form-card" onSubmit={handleSubmit}>

              <div className="form-row">

                <div className="form-group">
                  <label className="form-label">Your Name</label>

                  <input
                    className="form-input"
                    name="name"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email</label>

                  <input
                    className="form-input"
                    name="email"
                    type="email"
                    placeholder="john@email.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>

              </div>

              <div className="form-group">
                <label className="form-label">Subject</label>

                <input
                  className="form-input"
                  name="subject"
                  placeholder="Project Collaboration"
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Message</label>

                <textarea
                  className="form-input"
                  name="message"
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={handleChange}
                />
              </div>

              <button className="submit-btn" type="submit">
                Send Message →
              </button>

              {sent && (
                <div className="success-msg">
                  ✅ Message sent! I'll get back to you soon.
                </div>
              )}

            </form>

          </div>

        </div>
      </div>
    </section>
  );
}