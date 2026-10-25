export type Project = { id: string; title: string; desc: string };

export const projects: Project[] = [
  { id: "personal-profile", title: "Personal Profile", desc: "Website pribadi dengan beberapa halaman." },
  { id: "web-tax", title: "Web Tax", desc: "Website untuk menghitung pajak karyawan dan perusahaan." },
];

export function getProject(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}
