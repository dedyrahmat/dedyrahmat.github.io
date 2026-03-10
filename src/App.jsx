import "./App.css";
import Navigation from "./components/navigation";
import Hero from "./pages/hero";
import About from "./pages/about";
import Experience from "./pages/experience";
import Contact from "./pages/contact";

function App() {
  return (
    <div className="w-full min-h-screen bg-background text-foreground overflow-hidden">
      <Navigation />
      <main className="w-full mx-auto container">
        <Hero />
        <About />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;
