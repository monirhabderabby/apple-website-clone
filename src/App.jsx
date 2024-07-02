import "./App.css";
import Features from "./components/features";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Highlight from "./components/highlight";
import HowItWorks from "./components/how-it-works";
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
      <HowItWorks />
      <Footer />
    </main>
  );
}

export default App;
