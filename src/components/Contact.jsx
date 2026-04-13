import { personal } from "../data/resume.js";
import ContactForm from "./ContactForm.jsx";

const contactItems = (p) => [
  { icon: "✉️", label: "Email", value: p.email, href: `mailto:${p.email}` },
  { icon: "📞", label: "Phone", value: p.phone, href: `tel:${p.phone}` },
  { icon: "💼", label: "LinkedIn", value: "vasanth-murugesan-m", href: p.linkedin, external: true },
];

export default function Contact() {
  return (
    <section id="contact" style={{ padding: "5rem 1.5rem", maxWidth: 900, margin: "0 auto" }}>
      <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#f1f0ff", marginBottom: "0.5rem", letterSpacing: "-0.5px" }}>
        Get in Touch
      </h2>
      <div style={{ width: 48, height: 3, background: "linear-gradient(90deg,#7c3aed,#06b6d4)", borderRadius: 2, marginBottom: "0.75rem" }} />
      <p style={{ color: "#5c5a7a", fontSize: "0.95rem", marginBottom: "2.5rem" }}>
        Open to new opportunities — feel free to reach out.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
        {/* Contact info */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {contactItems(personal).map(({ icon, label, value, href, external }) => (
            <a key={label} href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              style={{
                display: "flex", alignItems: "center", gap: "1rem",
                background: "#111118", border: "1px solid #1e1e2e", borderRadius: 10,
                padding: "1rem 1.25rem", textDecoration: "none",
                transition: "border-color 0.3s, transform 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#7c3aed"; e.currentTarget.style.transform = "translateX(4px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#1e1e2e"; e.currentTarget.style.transform = "translateX(0)"; }}
            >
              <span style={{ fontSize: "1.2rem" }}>{icon}</span>
              <div>
                <p style={{ color: "#5c5a7a", fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.15rem" }}>{label}</p>
                <p style={{ color: "#a09ec0", fontSize: "0.875rem", fontWeight: 500 }}>{value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Form */}
        <ContactForm />
      </div>
    </section>
  );
}
