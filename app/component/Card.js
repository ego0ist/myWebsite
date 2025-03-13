
// **Card-Komponente mit Props & Children**
export default function Card({ title, children }) {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{children}</p>
    </div>
  );
}
