export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        © {new Date().getFullYear()} Nama Kamu. Dibuat dengan Next.js dan TypeScript.
      </div>
    </footer>
  );
}
