
// **Tabelle mit dynamischer Liste**
export default function UserTable({ users }) {
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