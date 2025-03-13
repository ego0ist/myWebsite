import Link from "next/link";

// **Sidebar-Komponente**
export default function Sidebar() {
  return (
    <aside className="w-1/4 bg-gray-100 p-4 rounded">
      <h2 className="text-lg font-bold">Navigation</h2>
      <ul className="list-disc pl-4">
      <li><Link href="/">Home</Link></li>
      <li><Link href="/about">Über</Link></li>
      <li><Link href="/contact">Kontakt</Link></li>
      </ul>
    </aside>
  );
}

