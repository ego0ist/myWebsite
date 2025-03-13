 
// **Haupt-App-Komponente**
export default function Page() {
  const [users, setUsers] = useState(["Max", "Lisa", "Alex"]);

  function addUser(name) {
    setUsers([...users, name]);
  }

}