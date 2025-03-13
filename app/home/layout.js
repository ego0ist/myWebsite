import {Header, Footer } from "../component/index";
// **Layout-Komponente für die Struktur**
export default function Layout({ children }) {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <Header />
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <main className="flex gap-4">{children}</main>
      <Footer />
    </div>
  );
}