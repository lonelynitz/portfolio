import { useState } from "react";
import SkillBadge from "./SkillBadge";

export default function ProjectCard({ name, description, technologies, liveUrl, repoUrl }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#111118",
        border: `1px solid ${hovered ? "#7c3aed" : "#1e1e2e"}`,
        borderRadius: 12,
        padding: "1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        transition: "border-color 0.3s, box-shadow 0.3s, transform 0.3s",
        boxShadow: hovered ? "0 8px 32px rgba(124,58,237,0.15)" : "none",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top gradient accent bar */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 2,
        background: "linear-gradient(90deg,#7c3aed,#06b6d4)",
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.3s",
      }} />

      <div>
        <h3 style={{ color: "#f1f0ff", fontWeight: 700, fontSize: "1rem", marginBottom: "0.5rem" }}>{name}</h3>
        <p style={{ color: "#a09ec0", fontSize: "0.875rem", lineHeight: 1.7 }}>{description}</p>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
        {technologies.map((tech) => (
          <SkillBadge key={tech} label={tech} variant="default" />
        ))}
      </div>

      {(liveUrl || repoUrl) && (
        <div style={{ display: "flex", gap: "1rem", paddingTop: "0.25rem" }}>
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer"
              style={{ color: "#a78bfa", fontSize: "0.85rem", textDecoration: "none", fontWeight: 500 }}
              onMouseEnter={e => e.currentTarget.style.color = "#f1f0ff"}
              onMouseLeave={e => e.currentTarget.style.color = "#a78bfa"}
            >
              Live ↗
            </a>
          )}
          {repoUrl && (
            <a href={repoUrl} target="_blank" rel="noopener noreferrer"
              style={{ color: "#a78bfa", fontSize: "0.85rem", textDecoration: "none", fontWeight: 500 }}
              onMouseEnter={e => e.currentTarget.style.color = "#f1f0ff"}
              onMouseLeave={e => e.currentTarget.style.color = "#a78bfa"}
            >
              Repo ↗
            </a>
          )}
        </div>
      )}
    </div>
  );
}
