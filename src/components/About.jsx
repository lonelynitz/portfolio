import { about } from "../data/resume";

const sectionStyle = {
  padding: "5rem 1.5rem",
  maxWidth: 900,
  margin: "0 auto",
};

const headingStyle = {
  fontSize: "2rem",
  fontWeight: 800,
  color: "#f1f0ff",
  marginBottom: "0.5rem",
  letterSpacing: "-0.5px",
};

const accentLineStyle = {
  width: 48,
  height: 3,
  background: "linear-gradient(90deg,#7c3aed,#06b6d4)",
  borderRadius: 2,
  marginBottom: "2.5rem",
};

export default function About() {
  return (
    <section id="about" style={sectionStyle}>
      <h2 style={headingStyle}>About Me</h2>
      <div style={accentLineStyle} />

      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem" }}>
        {/* Summary */}
        <p style={{ color: "#a09ec0", lineHeight: 1.85, fontSize: "1.05rem", borderLeft: "3px solid #7c3aed", paddingLeft: "1.25rem" }}>
          {about.summary}
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
          {/* Education */}
          <div style={{
            background: "#111118", border: "1px solid #1e1e2e", borderRadius: 12,
            padding: "1.5rem", transition: "border-color 0.3s",
          }}
            onMouseEnter={e => e.currentTarget.style.borderColor = "#7c3aed"}
            onMouseLeave={e => e.currentTarget.style.borderColor = "#1e1e2e"}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem" }}>
              <span style={{ fontSize: "1.2rem" }}>🎓</span>
              <h3 style={{ color: "#f1f0ff", fontWeight: 700, fontSize: "0.95rem" }}>Education</h3>
            </div>
            <p style={{ color: "#f1f0ff", fontWeight: 600, fontSize: "0.95rem", marginBottom: "0.25rem" }}>{about.education.degree}</p>
            <p style={{ color: "#a09ec0", fontSize: "0.85rem", marginBottom: "0.2rem" }}>{about.education.institution}</p>
            <p style={{ color: "#5c5a7a", fontSize: "0.8rem" }}>{about.education.years}</p>
          </div>

          {/* Certifications */}
          <div style={{
            background: "#111118", border: "1px solid #1e1e2e", borderRadius: 12,
            padding: "1.5rem", transition: "border-color 0.3s",
          }}
            onMouseEnter={e => e.currentTarget.style.borderColor = "#06b6d4"}
            onMouseLeave={e => e.currentTarget.style.borderColor = "#1e1e2e"}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem" }}>
              <span style={{ fontSize: "1.2rem" }}>🏆</span>
              <h3 style={{ color: "#f1f0ff", fontWeight: 700, fontSize: "0.95rem" }}>Certifications</h3>
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {about.certifications.map((cert) => (
                <li key={cert.name} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                  <span style={{ color: "#06b6d4", marginTop: 2, flexShrink: 0 }}>▸</span>
                  <div>
                    <p style={{ color: "#f1f0ff", fontSize: "0.875rem", fontWeight: 600 }}>{cert.name}</p>
                    <p style={{ color: "#5c5a7a", fontSize: "0.78rem" }}>{cert.issuer} · {cert.year}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
