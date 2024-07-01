import "./App.css";
import Hero from "./components/hero";
import Highlight from "./components/highlight";
import Navbar from "./components/navbar";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Highlight />
    </main>
  );
}

export default App;
