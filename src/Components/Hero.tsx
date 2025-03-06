import { motion } from "framer-motion";
import Bubble from "./Bubble BTN/Bubble";
import manImage from "../Assets/man.png";

const name: string[] = ["N", "A", "N", "D", "A", " ", "K", "U", "M", "A", "R", " ", " ", " ", "C", "H", "I", "N", "N", "A", "S", "A", "M", "Y"];

const Hero = () => {
  return (
    <div className="w-full min-h-screen pt-28 pb-8 sm:pt-32 sm:pb-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="text-center md:text-left">
                <motion.h1
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
                >
                  Hi, I'm
                </motion.h1>
                <div className="flex justify-center md:justify-start">
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {name.map((letter, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.3 + index * 0.05,
                          ease: "easeOut"
                        }}
                        whileHover={{
                          scale: 1.2,
                          color: "#4dba87",
                          transition: { duration: 0.2 }
                        }}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white cursor-default"
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="mt-4"
              >
                <motion.p
                  className="text-base sm:text-lg text-gray-300 text-center md:text-left leading-relaxed"
                >
                  I am a Software Developer{" "}
                  <span className="text-[#4dba87]">crafting digital experiences</span>
                  {" "} specializing in Responsive Web Design & Development
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  className="flex justify-center md:justify-start mt-6"
                >
                  <Bubble />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex items-center justify-center"
          >
            <div className="w-full max-w-[400px]">
              <img
                src={manImage}
                alt="Developer"
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
