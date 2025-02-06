import { useEffect, useState } from "react";
import "./Bubble.css";
import { motion } from "framer-motion";
import { resume } from "../../Assets";
const Bubble = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:450px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <div
      style={{
        // position: isMobile ? "relative" : "absolute",
        padding: isMobile ? "5vw 0vw 0vw 10vw" : "5vw 0vw 0vw 0vw",
        display: "flex",
        flexDirection: "row",
        gap: isMobile ? "8vh" : "5vw",
        // top: isMobile ? "20vh" : "",
        // left: isMobile ? "vw" : "",
      }}
    >
      <motion.div
        initial={{ opacity: 0, transform: "translateY(-8vw)" }}
        whileInView={{ opacity: 1, transform: "translateY(0vw)" }}
        transition={{
          duration: 2,
          type: "spring",
          stiffness: 150,
          dumping: 15,
          delay: 1,
        }}
      >
        <motion.a
          initial={{
            opacity: 1,
          }}
          animate={{
            y: [0, 20, 0],
            scale: [1, 0.9, 1],
            transition: {
              type: "spring",
              duration: 3,
              stiffness: 100,
              damping: 12,
              repeat: Infinity,
            },
          }}
          style={{
            //   position: isMobile ? "relative" : "absolute",
            //   top: isMobile ? "13vh" : "",
            //   left: isMobile ? "10vh" : "",
            textAlign: 'center',
            width: isMobile ? "13vw" : "",
            height: isMobile ? "13vw" : "",
            fontSize: isMobile ? "3vw" : "1vw",
          }}
          href="https://www.linkedin.com/in/nandakumar-chinnasamy-835ba9286/"
          target="_blank"
          className="btn font"
        >
          Reach Me
        </motion.a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, transform: "translateY(-5vw)" }}
        whileInView={{ opacity: 1, transform: "translateY(0vw)" }}
        transition={{
          duration: 2,
          type: "spring",
          stiffness: 150,
          dumping: 15,
          delay: 1.5,
        }}
      >
        <motion.a
          initial={{
            opacity: 1,
          }}
          animate={{
            y: [0, 20, 0],
            scale: [1, 0.9, 1],
            transition: {
              type: "spring",
              duration: 3,
              stiffness: 100,
              damping: 12,
              repeat: Infinity,
            },
          }}
          style={{
            width: isMobile ? "20vw" : "",
            height: isMobile ? "20vw" : "",
            fontSize: isMobile ? "3vw" : "",
          }}
          href="https://docs.google.com/document/d/16CmUamzH6pcTC9ehYbb4cLyvYyJbe_5TmbvRQ6AbKfQ/edit?tab=t.0"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-1 font"
        >
          Resume
        </motion.a>
      </motion.div>
    </div >
  );
};

export default Bubble;
