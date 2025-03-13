// **Sidebar-Komponente**
export default function Sidebar() {
  return (
    <aside className="w-1/4 bg-gray-100 p-4 rounded">
      <h2 className="text-lg font-bold">Navigation</h2>
      <ul className="list-disc pl-4">
        <li>Home</li>
        <li>Über</li>
        <li>Kontakt</li>
      </ul>
    </aside>
  );
}

