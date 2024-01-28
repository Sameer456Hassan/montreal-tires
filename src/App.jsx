import Navbar from "./components/Navbar.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JavaScript
import Hero from "./components/Hero.jsx";
import Support from "./components/support_line.jsx";
import Type from "./components/Type.jsx";
import About from "./components/About.jsx";
import Counter from "./components/Counter.jsx";
import Dealer from "./components/Dealer.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Support />
      <Type />
      <About />
      <Counter />
      <Dealer />
      <Footer />
    </>
  );
}

export default App;
