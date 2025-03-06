import { useEffect, useState } from "react";
import "./Bubble.css";
import { motion } from "framer-motion";

interface MediaQueryEvent {
  matches: boolean;
}

const Bubble = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event: MediaQueryEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const buttonVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-8">
      <motion.a
        href="https://www.linkedin.com/in/nandakumar-chinnasamy-835ba9286/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn"
        variants={buttonVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
      >
        Reach Me
      </motion.a>

      <motion.a
        href="https://docs.google.com/document/d/16CmUamzH6pcTC9ehYbb4cLyvYyJbe_5TmbvRQ6AbKfQ/edit?tab=t.0"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-1"
        variants={buttonVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
      >
        Resume
      </motion.a>
    </div>
  );
};

export default Bubble;
