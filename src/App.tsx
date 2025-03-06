import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  About,
  Experience,
  Hero,
  Tech,
  Works,
  Contact,
  Navbar,
  Footer,
} from "./Components";
import Statics from "./Components/GithunStatics/Statics";

function App() {
  const [activeSection, setActiveSection] = useState(0);
  const sections = ['hero', 'about', 'experience', 'tech', 'works', 'statics', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const currentSection = Math.floor((scrollPosition + windowHeight / 2) / windowHeight);
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    const element = document.getElementById(sections[index]);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <div className="relative bg-primary">
        {/* Fixed Navbar */}
        <div className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm">
          <Navbar />
        </div>

        {/* Scroll Indicator */}
        <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3">
          {sections.map((section, index) => (
            <button
              key={section}
              onClick={() => scrollToSection(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === index 
                  ? 'bg-[#4dba87] scale-125' 
                  : 'bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Scroll to ${section}`}
            />
          ))}
        </div>

        {/* Content with top margin for navbar */}
        <div className="pt-[80px]">
          {/* Each section is full screen */}
          <div className="snap-y snap-mandatory h-screen overflow-y-scroll scrollbar-hide">
            <div className="snap-start">
              <Hero />
            </div>
            <div className="snap-start">
              <About />
            </div>
            <div className="snap-start">
              <Experience />
            </div>
            <div className="snap-start">
              <Tech />
            </div>
            <div className="snap-start">
              <Works />
            </div>
            <div className="snap-start">
              <Statics />
            </div>
            <div className="snap-start">
              <Contact />
            </div>
          </div>

          <Footer />
        </div>

        {/* Mobile Scroll Progress Bar */}
        <div className="fixed bottom-0 left-0 right-0 h-1 bg-black/20 lg:hidden">
          <div 
            className="h-full bg-[#4dba87] transition-all duration-300"
            style={{ 
              width: `${(activeSection / (sections.length - 1)) * 100}%`
            }}
          />
        </div>
      </div>
    </Router>
  );
}

export default App;
