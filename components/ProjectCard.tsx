import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="card">
      <h3>{project.title}</h3>
      <p>{project.desc}</p>
      <Link href={`/projects/${project.id}`}>Lihat detail</Link>
    </div>
  );
}
