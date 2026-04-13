export default function SkillBadge({ label, variant = "default" }) {
  const styles = {
    default: { background: "rgba(124,58,237,0.1)", color: "#a78bfa", border: "1px solid rgba(124,58,237,0.2)" },
    cyan:    { background: "rgba(6,182,212,0.1)",  color: "#67e8f9", border: "1px solid rgba(6,182,212,0.2)" },
    gray:    { background: "rgba(255,255,255,0.05)", color: "#a09ec0", border: "1px solid rgba(255,255,255,0.08)" },
  };
  const s = styles[variant] || styles.default;
  return (
    <span style={{
      display: "inline-block",
      padding: "0.3rem 0.75rem",
      borderRadius: 999,
      fontSize: "0.75rem",
      fontWeight: 500,
      letterSpacing: "0.01em",
      transition: "transform 0.15s",
      cursor: "default",
      ...s,
    }}
      onMouseEnter={e => e.currentTarget.style.transform = "translateY(-1px)"}
      onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
    >
      {label}
    </span>
  );
}
