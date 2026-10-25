import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <>
      <h1>Proyek</h1>
      <div className="grid">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </>
  );
}
