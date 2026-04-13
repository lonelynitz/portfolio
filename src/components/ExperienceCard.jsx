import { useState } from "react";

export default function ExperienceCard({ title, company, location, dateRange, bullets, isLast }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div style={{ display: "flex", gap: "1.5rem", position: "relative" }}>
      {/* Timeline spine */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
        <div style={{
          width: 12, height: 12, borderRadius: "50%", flexShrink: 0, marginTop: 6,
          background: hovered ? "linear-gradient(135deg,#7c3aed,#06b6d4)" : "#1e1e2e",
          border: "2px solid",
          borderColor: hovered ? "#7c3aed" : "#2e2e3e",
          boxShadow: hovered ? "0 0 12px rgba(124,58,237,0.6)" : "none",
          transition: "all 0.3s",
        }} />
        {!isLast && (
          <div style={{ width: 1, flexGrow: 1, background: "linear-gradient(to bottom, #2e2e3e, transparent)", marginTop: 4 }} />
        )}
      </div>

      {/* Card */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          flex: 1, background: "#111118",
          border: `1px solid ${hovered ? "#7c3aed" : "#1e1e2e"}`,
          borderRadius: 12, padding: "1.5rem",
          marginBottom: isLast ? 0 : "1.5rem",
          transition: "border-color 0.3s, box-shadow 0.3s",
          boxShadow: hovered ? "0 4px 24px rgba(124,58,237,0.12)" : "none",
        }}
      >
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: "0.5rem", marginBottom: "0.75rem" }}>
          <div>
            <h3 style={{ color: "#f1f0ff", fontWeight: 700, fontSize: "1rem", marginBottom: "0.2rem" }}>{title}</h3>
            <p style={{ color: "#a09ec0", fontSize: "0.875rem" }}>
              {company}
              <span style={{ color: "#5c5a7a", margin: "0 0.4rem" }}>·</span>
              {location}
            </p>
          </div>
          <span style={{
            background: "rgba(124,58,237,0.1)", color: "#a78bfa",
            border: "1px solid rgba(124,58,237,0.2)",
            borderRadius: 999, padding: "0.25rem 0.75rem",
            fontSize: "0.75rem", fontWeight: 500, whiteSpace: "nowrap",
          }}>
            {dateRange}
          </span>
        </div>

        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {bullets.map((bullet, i) => (
            <li key={i} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
              <span style={{ color: "#7c3aed", flexShrink: 0, marginTop: "0.2rem", fontSize: "0.7rem" }}>▸</span>
              <span style={{ color: "#a09ec0", fontSize: "0.875rem", lineHeight: 1.65 }}>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
