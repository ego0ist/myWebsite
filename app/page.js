"use client"; // Falls Events genutzt werden (Next.js)
 
import {Header, Footer, Card, UserForm, Sidebar, UserTable} from "./component/index.js";  
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
