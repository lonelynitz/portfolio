import { projects } from "../data/resume";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "5rem 1.5rem", maxWidth: 900, margin: "0 auto" }}>
      <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#f1f0ff", marginBottom: "0.5rem", letterSpacing: "-0.5px" }}>
        Projects
      </h2>
      <div style={{ width: 48, height: 3, background: "linear-gradient(90deg,#7c3aed,#06b6d4)", borderRadius: 2, marginBottom: "2.5rem" }} />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.25rem" }}>
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </section>
  );
}
