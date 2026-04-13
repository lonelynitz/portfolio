import { useState, useEffect } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        background: scrolled ? "rgba(10,10,15,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #1e1e2e" : "1px solid transparent",
        transition: "all 0.3s ease",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 1.5rem", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Brand */}
        <a href="#hero" style={{ fontWeight: 800, fontSize: "1.1rem", background: "linear-gradient(135deg,#7c3aed,#06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", letterSpacing: "-0.5px", textDecoration: "none" }}>
          VM
        </a>

        {/* Desktop links */}
        <ul style={{ display: "flex", gap: "2rem", listStyle: "none", margin: 0, padding: 0 }} className="hidden md:flex">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a href={href} style={{ color: "#a09ec0", fontSize: "0.875rem", fontWeight: 500, textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => e.target.style.color = "#f1f0ff"}
                onMouseLeave={e => e.target.style.color = "#a09ec0"}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(p => !p)}
          aria-label="Toggle menu"
          style={{ background: "none", border: "none", cursor: "pointer", color: "#a09ec0", fontSize: "1.4rem", lineHeight: 1 }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <ul style={{ background: "rgba(10,10,15,0.97)", borderTop: "1px solid #1e1e2e", padding: "0.75rem 1.5rem", listStyle: "none", margin: 0, display: "flex", flexDirection: "column", gap: "0.25rem" }} className="md:hidden">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a href={href} onClick={() => setMenuOpen(false)}
                style={{ display: "block", padding: "0.6rem 0", color: "#a09ec0", fontSize: "0.9rem", fontWeight: 500, textDecoration: "none" }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
