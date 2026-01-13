import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Navigation } from "./components/navigation";
import { Hero } from "./components/hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
    </main>
  );
}

export default App;
