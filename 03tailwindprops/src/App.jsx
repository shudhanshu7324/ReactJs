import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "../components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-400 p-4 rounded">Tailwind Test</h1>
      <Card title="dear 1"/>
      <Card title="dear 2"/>
      <Card />
    </>
  );
}

export default App;
