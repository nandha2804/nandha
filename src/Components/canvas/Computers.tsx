import { useEffect, useState } from "react";
import { pc } from "../../Assets";
import { motion } from "framer-motion";
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:450px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addListener(handleMediaQueryChange);
    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);
  return (
    <motion.div
      initial={{
        opacity: 0,
        // transform: "scale(0)",
      }}
      whileInView={{
        opacity: 1,
        // transform: "scale(1)",
        transition: {
          type: "spring",
           
          delay: 1,
          duration: 2.5,
        },
      }}
      style={{
        // transform: isMobile ? "scale(6)" : "",
        //   marginTop: isMobile ? "4vh" : "2vw",
        //   marginLeft: isMobile ? "0vh" : "7vw",
        display: isMobile ? "content" : "flex",
        width: isMobile ? "100%" : "",
        left: isMobile ? "-.5rem" : "",
      }}
    >
      <motion.img
        initial={{
          opacity: 1,
        }}
        animate={{
          // opacity: 1,
          y: [0, 5, 0],
          scale: [1, 0.99, 1],
          transition: {
            type: "spring",
            duration: 4,
            stiffness: 100,
            damping: 12,
            repeat: Infinity,
          },
        }}
        alt="pc"
        style={{
          //   transform: isMobile ? "scale(6)" : "",
          //   marginTop: isMobile ? "4vh" : "2vw",
          marginLeft: isMobile ? "0vh" : "3vw",
          position: isMobile ? "absolute" : "relative",
          width: isMobile ? "100%" : "80%",
          left: isMobile ? "0rem" : "2rem",
        }}
        src={pc}
      />
    </motion.div>
  );
};

export default ComputersCanvas;
