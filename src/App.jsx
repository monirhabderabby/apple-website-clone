import "./App.css";
import Features from "./components/features";
import Hero from "./components/hero";
import Highlight from "./components/highlight";
import Modal from "./components/modal";
import Navbar from "./components/navbar";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Highlight />
      <Modal />
      <Features />
    </main>
  );
}

export default App;
