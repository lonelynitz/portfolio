import { useState } from "react";

const inputStyle = {
  width: "100%", padding: "0.65rem 1rem",
  background: "#0a0a0f", border: "1px solid #1e1e2e", borderRadius: 8,
  color: "#f1f0ff", fontSize: "0.9rem", outline: "none",
  transition: "border-color 0.2s",
  boxSizing: "border-box",
};

const labelStyle = {
  display: "block", color: "#a09ec0", fontSize: "0.8rem",
  fontWeight: 500, marginBottom: "0.4rem", textTransform: "uppercase", letterSpacing: "0.06em",
};

const errorStyle = { color: "#f87171", fontSize: "0.78rem", marginTop: "0.3rem" };

export default function ContactForm() {
  const [fields, setFields] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const e = {};
    if (!fields.name.trim()) e.name = "Name is required";
    if (!fields.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) e.email = "Please enter a valid email address";
    if (!fields.message.trim()) e.message = "Message is required";
    return e;
  }

  function handleChange(ev) {
    setFields({ ...fields, [ev.target.name]: ev.target.value });
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div style={{
        background: "rgba(6,182,212,0.08)", border: "1px solid rgba(6,182,212,0.25)",
        borderRadius: 12, padding: "2rem", textAlign: "center",
      }}>
        <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>✅</div>
        <p style={{ color: "#67e8f9", fontWeight: 700, fontSize: "1rem", marginBottom: "0.4rem" }}>Message sent!</p>
        <p style={{ color: "#5c5a7a", fontSize: "0.875rem" }}>I'll get back to you as soon as possible.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div>
        <label htmlFor="name" style={labelStyle}>Name</label>
        <input id="name" name="name" type="text" value={fields.name} onChange={handleChange}
          style={inputStyle}
          onFocus={e => e.target.style.borderColor = "#7c3aed"}
          onBlur={e => e.target.style.borderColor = errors.name ? "#f87171" : "#1e1e2e"}
        />
        {errors.name && <p style={errorStyle}>{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" style={labelStyle}>Email</label>
        <input id="email" name="email" type="email" value={fields.email} onChange={handleChange}
          style={inputStyle}
          onFocus={e => e.target.style.borderColor = "#7c3aed"}
          onBlur={e => e.target.style.borderColor = errors.email ? "#f87171" : "#1e1e2e"}
        />
        {errors.email && <p style={errorStyle}>{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="message" style={labelStyle}>Message</label>
        <textarea id="message" name="message" rows={5} value={fields.message} onChange={handleChange}
          style={{ ...inputStyle, resize: "none" }}
          onFocus={e => e.target.style.borderColor = "#7c3aed"}
          onBlur={e => e.target.style.borderColor = errors.message ? "#f87171" : "#1e1e2e"}
        />
        {errors.message && <p style={errorStyle}>{errors.message}</p>}
      </div>

      <button type="submit" style={{
        padding: "0.75rem 1.5rem", borderRadius: 8, fontWeight: 600, fontSize: "0.9rem",
        background: "linear-gradient(135deg,#7c3aed,#5b21b6)", color: "#fff", border: "none",
        cursor: "pointer", boxShadow: "0 4px 16px rgba(124,58,237,0.35)",
        transition: "transform 0.2s, box-shadow 0.2s",
      }}
        onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(124,58,237,0.5)"; }}
        onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(124,58,237,0.35)"; }}
      >
        Send Message →
      </button>
    </form>
  );
}
