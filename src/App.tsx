import { BrowserRouter as Router } from "react-router-dom";
import {
  About,
  Experience,
  Hero,
  Tech,
  Works,
  Contact,
  Navbar,
  Footer,
  StarsCanvas,
} from "./Components";
import BgParticals from "./Components/canvas/BgParticals";
import Statics from "./Components/GithunStatics/Statics";

function App() {
  return (
    <Router>
      <div className="relative z-0 bg-primary">
        {/* Background Effects */}
        <div className="fixed inset-0 z-[-2]">
          <BgParticals />
        </div>
        <div className="fixed inset-0 z-[-1]">
          <StarsCanvas />
        </div>

        {/* Main Content */}
        <div className="relative z-0">
          <Navbar />
          
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Hero />
          </div>

          <div className="relative z-0">
            <About />
            <Experience />
            <Tech />
            <Works />
            <Statics />
            <div className="relative z-0">
              <Contact />
              <StarsCanvas />
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
