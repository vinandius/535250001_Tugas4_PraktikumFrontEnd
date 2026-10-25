import Link from "next/link";

export default function NotFound() {
  return (
    <section className="hero">
      <h1>Halaman tidak ditemukan</h1>
      <p className="lead">Alamat yang kamu buka tidak ada atau sudah dipindahkan.</p>
      <Link href="/" className="btn">
        Kembali ke beranda
      </Link>
    </section>
  );
}
