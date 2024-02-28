import "./App.css";
import "./index.css";

import Navbar from "../src/components/Navbar";
import Hero from "./components/Hero";
import OurWork from "./components/OurWork";
import AboutUs from "./components/AboutUs";
import DemoRequest from "./components/DemoRequest";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <OurWork />
      <DemoRequest />
      <Footer />
    </div>
  );
}

export default App;
