import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Halo, saya Leonardo Firnandius</h1>
      <p>Seorang mahasiswa Teknologi Informasi Teknik Informatika di Universitas Tarumanagara yang lagi belajar next js.</p>
      <div id="butcont">
        <Link href="/about" className="button">Tentang saya</Link>
        <Link href="/projects" className="button">Lihat proyek</Link>
      </div>
    </>
  );
}
