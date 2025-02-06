import { BrowserRouter as Router } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Footer,
} from "./Components";
import BgParticals from "./Components/canvas/BgParticals";
import { useEffect } from "react";
import Statics from "./Components/GithunStatics/Statics";

function App() {
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Router>
      <div className="relative overflow-hidden  z-0 bg-primary">
        <BgParticals />
        <Navbar />
        <Hero />
        <About />
        <Statics />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
