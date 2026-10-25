import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import { getProject, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }));
}

type Props = { params: Promise<{ slug: string }> };

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return (
    <>
      <PageHeader title={project.title} subtitle={project.desc} />
      <section className="prose">
        <p>
          <Link href="/projects" className="text-link">
            Kembali ke daftar proyek
          </Link>
        </p>
      </section>
    </>
  );
}
