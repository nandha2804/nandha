import { motion } from "framer-motion";
import Bubble from "./Bubble BTN/Bubble";
import manImage from "../Assets/man.png";

const name: string[] = ["N", "A", "N", "D", "A", " ", "K", "U", "M", "A", "R", " ", "C", "H", "I", "N", "N", "A", "S", "A", "M", "Y"];

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">

      {/* Main content */}
      <div className="absolute inset-0 top-[60px] md:top-[120px] max-w-7xl mx-auto px-2 sm:px-8 md:px-16 flex flex-col md:flex-row items-start justify-center gap-8 md:gap-16">
        <div className="flex-1 z-10 text-center md:text-left pt-4 md:pt-16 relative w-full">
          {/* Background glow effect */}
          <div className="absolute -left-20 -top-20 w-[350px] h-[350px] bg-[#2563eb]/20 rounded-full filter blur-3xl opacity-20 animate-pulse" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8 relative"
          >
            <div className="absolute left-0 top-0 hidden md:flex flex-col items-center">
              <div className="w-5 h-5 rounded-full bg-[#2563eb] shadow-lg" />
              <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#2563eb] to-transparent" />
            </div>
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.h1
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
                >
                  Hi, I'm
                </motion.h1>
                <div className="flex whitespace-nowrap overflow-x-auto md:overflow-x-hidden justify-center md:justify-start relative px-4 md:px-0 -mx-4 md:mx-0">
                  <div className="inline-flex min-w-fit">
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
                        className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mr-0.5 md:mr-1
                                 cursor-default"
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-xl mt-6 md:mt-8 mb-8 md:mb-12 leading-relaxed px-2 md:px-0"
              >
                I am a Software Developer{" "}
                <span className="text-[#4dba87]">crafting digital experiences</span>
                {" "} specializing in Responsive Web Design & Development
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="flex justify-center md:justify-start"
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
          className="flex-1 relative h-[250px] sm:h-[350px] md:h-[500px] w-full max-w-[400px] sm:max-w-[500px] mx-auto md:mx-0 overflow-hidden
                    rounded-lg md:rounded-xl group mt-4 md:mt-16"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#2563eb]/20 to-transparent z-10
                        group-hover:from-[#2563eb]/30 transition-all duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] via-transparent to-transparent z-10" />
          {/* Background glow for image */}
          <div className="absolute -right-20 -bottom-20 w-[350px] h-[350px] bg-[#2563eb]/10 rounded-full filter blur-3xl opacity-20 animate-pulse" />
          <img
            src={manImage}
            alt="Developer"
            className="absolute inset-0 w-full h-full object-cover
                     shadow-[0_0_20px_rgba(37,99,235,0.2)]
                     group-hover:scale-105 transition-all duration-700 ease-out
                     group-hover:shadow-[0_0_30px_rgba(37,99,235,0.3)]"
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-10 w-full flex justify-center items-center">
        <a href="#about" className="hover:transform hover:scale-110 transition-transform duration-300">
          <div className="w-[30px] h-[54px] sm:w-[35px] sm:h-[64px] rounded-3xl border-4 border-[#2563eb] flex justify-center items-start p-2 backdrop-blur-sm bg-black/10">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="w-3 h-3 rounded-full bg-[#2563eb] shadow-[#2563eb]/50 shadow-lg mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
