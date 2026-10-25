import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = { title: "Personal Profile" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
