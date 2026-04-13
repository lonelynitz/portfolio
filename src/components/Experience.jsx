import { experience } from "../data/resume";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "5rem 1.5rem", maxWidth: 900, margin: "0 auto" }}>
      <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#f1f0ff", marginBottom: "0.5rem", letterSpacing: "-0.5px" }}>
        Experience
      </h2>
      <div style={{ width: 48, height: 3, background: "linear-gradient(90deg,#7c3aed,#06b6d4)", borderRadius: 2, marginBottom: "2.5rem" }} />

      <div>
        {experience.map((entry, i) => (
          <ExperienceCard key={i} {...entry} isLast={i === experience.length - 1} />
        ))}
      </div>
    </section>
  );
}
