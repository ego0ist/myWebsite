"use client"; // Falls Events genutzt werden (Next.js)

import { useState } from "react";
// **Formular-Komponente mit State**
export default function UserForm({ onUserAdd }) {
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
