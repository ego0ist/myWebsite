"use client";
 

function Button({ label, onClick }) {
    return <button onClick={onClick} className="px-4 py-2 bg-blue-500 text-white rounded">{label}</button>;
  }
  
  function App() {
    return <Button label="Klick mich" onClick={() => alert("Button geklickt!")} />;
  }
   
  export default function Button1() {
    return <button className="px-4 py-2 bg-blue-500 text-white rounded">Klick mich</button>;
  }
  