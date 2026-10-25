"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  { href: "/", label: "Beranda" },
  { href: "/about", label: "Tentang" },
  { href: "/projects", label: "Proyek" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <strong>Leonardo Firnandius</strong>
      <div className="menu">
        {menu.map((item) => {
          const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          return (
            <Link key={item.href} href={item.href} className={active ? "active" : ""}>
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
