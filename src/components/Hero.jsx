import { personal } from "../data/resume";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "0 1.5rem",
      }}
    >
      {/* Background orbs */}
      <div style={{
        position: "absolute", top: "15%", left: "10%", width: 400, height: 400,
        background: "radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)",
        borderRadius: "50%", filter: "blur(40px)", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "20%", right: "8%", width: 350, height: 350,
        background: "radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)",
        borderRadius: "50%", filter: "blur(40px)", pointerEvents: "none",
      }} />

      {/* Grid pattern */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "linear-gradient(rgba(124,58,237,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.04) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      <div style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: 700, margin: "0 auto" }}>
        {/* Badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "0.5rem",
          background: "rgba(124,58,237,0.12)", border: "1px solid rgba(124,58,237,0.3)",
          borderRadius: 999, padding: "0.35rem 1rem", marginBottom: "1.5rem",
          fontSize: "0.8rem", color: "#a78bfa",
        }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#7c3aed", display: "inline-block", boxShadow: "0 0 8px #7c3aed" }} />
          Available for opportunities
        </div>

        <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: "1rem", letterSpacing: "-1px" }}>
          <span style={{ color: "#f1f0ff" }}>Hi, I'm </span>
          <span style={{ background: "linear-gradient(135deg,#7c3aed,#06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Vasanth
          </span>
        </h1>

        <p style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)", color: "#a09ec0", marginBottom: "0.75rem", fontWeight: 500 }}>
          {personal.title}
        </p>

        <p style={{ fontSize: "1rem", color: "#5c5a7a", maxWidth: 520, margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
          {personal.tagline}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.75rem" }}>
          <a href="#contact" style={{
            padding: "0.7rem 1.75rem", borderRadius: 8, fontWeight: 600, fontSize: "0.9rem",
            background: "linear-gradient(135deg,#7c3aed,#5b21b6)", color: "#fff",
            textDecoration: "none", boxShadow: "0 4px 20px rgba(124,58,237,0.4)",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(124,58,237,0.5)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(124,58,237,0.4)"; }}
          >
            Get in Touch
          </a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" style={{
            padding: "0.7rem 1.75rem", borderRadius: 8, fontWeight: 600, fontSize: "0.9rem",
            background: "transparent", color: "#a09ec0",
            border: "1px solid #1e1e2e", textDecoration: "none",
            transition: "border-color 0.2s, color 0.2s, transform 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#7c3aed"; e.currentTarget.style.color = "#f1f0ff"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "#1e1e2e"; e.currentTarget.style.color = "#a09ec0"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            LinkedIn ↗
          </a>
        </div>

        {/* Scroll hint */}
        <div style={{ marginTop: "4rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem", color: "#5c5a7a", fontSize: "0.75rem" }}>
          <span>scroll</span>
          <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, #5c5a7a, transparent)" }} />
        </div>
      </div>
    </section>
  );
}
