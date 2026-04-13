import { skills } from "../data/resume";
import SkillBadge from "./SkillBadge";

const categories = [
  { label: "Primary Skills",          key: "primary",                 variant: "default", icon: "⚡" },
  { label: "Libraries & Frameworks",  key: "librariesAndFrameworks",  variant: "cyan",    icon: "📦" },
  { label: "Tools & Cloud",           key: "toolsAndCloud",           variant: "gray",    icon: "☁️" },
];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "5rem 1.5rem", maxWidth: 900, margin: "0 auto" }}>
      <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#f1f0ff", marginBottom: "0.5rem", letterSpacing: "-0.5px" }}>
        Skills
      </h2>
      <div style={{ width: 48, height: 3, background: "linear-gradient(90deg,#7c3aed,#06b6d4)", borderRadius: 2, marginBottom: "2.5rem" }} />

      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        {categories.map(({ label, key, variant, icon }) => (
          <div key={key} style={{
            background: "#111118", border: "1px solid #1e1e2e", borderRadius: 12,
            padding: "1.5rem", transition: "border-color 0.3s",
          }}
            onMouseEnter={e => e.currentTarget.style.borderColor = variant === "cyan" ? "#06b6d4" : "#7c3aed"}
            onMouseLeave={e => e.currentTarget.style.borderColor = "#1e1e2e"}
          >
            <h3 style={{ color: "#f1f0ff", fontWeight: 600, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span>{icon}</span> {label}
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {skills[key].map((skill) => (
                <SkillBadge key={skill} label={skill} variant={variant} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
