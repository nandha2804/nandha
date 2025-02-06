import { useEffect, useState } from "react";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";
import { motion } from "framer-motion";

import { child, fadeIn } from "../Utils/Motion";
import Bubble from "./Bubble BTN/Bubble";
const name = ["R", "A", "H", "U", "L", " ", "R"];

const Hero = () => {
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
    <section
      style={{
        height: isMobile ? "75vh" : "100vh",
      }}
      className={`relative w-full  mx-auto`}
    >
      <div
        className={`font absolute inset-0 top-[110px]  max-w-7xl mx-auto ${styles.paddingX} flex  flex-warp items-start gap-5`}
      >
        <motion.div
          initial={{
            opacity: 0,
            transform: "translateX(-5vw) translateY(5vw)",
          }}
          whileInView={{
            opacity: 1,
            transform: "translateX(0vw) translateY(0vw)",
          }}
          transition={{ duration: 2, type: "spring" }}
        >
          <div className="flex flex-col justify-center items-center  ">
            <div className="w-5 h-5 rounded-full bg-[#4dba87]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>
        </motion.div>

        <div className="flex flex-wrap gap-6">
          <div className="flex flex-col">
            <motion.h1
              initial={{
                opacity: 0,
                transform: "translateX(-10vw) translateY(-5vw)",
              }}
              whileInView={{
                opacity: 1,
                transform: "translateX(0vw) translateY(0vw)",
              }}
              transition={{ duration: 2, type: "spring" }}
              className={`${styles.heroHeadText} font text-white `}
            >
              Hi, I'm
            </motion.h1>
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              className={`${styles.heroHeadText}  text-white flex `}
            >
              {name.map((name, index) => (
                <motion.span
                  key={index}
                  variants={child}
                  className=" font text-[#4dba87]"
                >
                  {name === " " ? "\u00A0" : name}
                </motion.span>
              ))}
            </motion.div>

            <div className={`${styles.heroSubText}  mt-2 text-white-100`}>
              <motion.div
                initial={{
                  opacity: 0,
                  transform: "translateX(10vw) translateY(5vw)",
                }}
                whileInView={{
                  opacity: 1,
                  transform: "translateX(0vw) translateY(0vw)",
                }}
                transition={{ duration: 2, type: "spring" }}
                className="font"
              >
                I am a Full stack Web Developer,
                <br className="sm:block hidden" />
                with an emphasis on Responsive web designs
              </motion.div>
            </div>
          </div>
          <Bubble />
          <ComputersCanvas />
        </div>
      </div>
      <div
        style={{ display: isMobile ? "none" : "flex" }}
        className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center"
      >
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-2"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
