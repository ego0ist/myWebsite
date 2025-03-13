"use client"; // Falls Events genutzt werden (Next.js)

import { useState } from "react";

// **Layout-Komponente für die Struktur**
function Layout({ children }) {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <Header />
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <main className="flex gap-4">{children}</main>
      <Footer />
    </div>
  );
}

// **Header-Komponente**
function Header() {
  return (
    <header className="bg-blue-500 text-white p-4 text-center rounded">
      <h1 className="text-3xl">Meine Lernseite 🚀</h1>
    </header>
  );
}

// **Sidebar-Komponente**
function Sidebar() {
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

// **Card-Komponente mit Props & Children**
function Card({ title, children }) {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{children}</p>
    </div>
  );
}

// **Formular-Komponente mit State**
function UserForm({ onUserAdd }) {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (name.trim()) {
      onUserAdd(name);
      setName(""); // Eingabe zurücksetzen
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded">
      <label className="block mb-2">Neuen Nutzer hinzufügen:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name eingeben"
        className="border p-2 w-full"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
        Hinzufügen
      </button>
    </form>
  );
}

// **Tabelle mit dynamischer Liste**
function UserTable({ users }) {
  return (
    <table className="border-collapse border border-gray-400 w-full mt-4">
      <thead>
        <tr>
          <th className="border p-2 bg-gray-200">#</th>
          <th className="border p-2 bg-gray-200">Name</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td className="border p-2">{index + 1}</td>
            <td className="border p-2">{user}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// **Haupt-App-Komponente**
export default function Page() {
  const [users, setUsers] = useState(["Max", "Lisa", "Alex"]);

  function addUser(name) {
    setUsers([...users, name]);
  }

  return (
    <Layout>
      <Sidebar />
      <section className="w-3/4">
        <Card title="Willkommen!">
          Dies ist eine Lernseite für React & Next.js. Hier kannst du Container, Komponenten, Props, Listen und Formulare üben.
        </Card>

        <UserForm onUserAdd={addUser} />
        <UserTable users={users} />

        <Card title="Bild hinzufügen">
          <img src="https://source.unsplash.com/400x200/?nature" alt="Zufallsbild" className="rounded shadow" />
        </Card>
      </section>
    </Layout>
  );
}

// **Footer-Komponente**
function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-4 text-center mt-6 rounded">
      <p>© 2025 Lernseite</p>
    </footer>
  );
}
