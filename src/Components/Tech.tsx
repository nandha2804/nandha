import { motion } from "framer-motion";
import { technologies } from "../Constants";
import { SectionWraper } from "../Utils";

const Tech = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h3 className="text-[#4dba87] font-medium text-lg sm:text-xl mb-2">
          Technologies I work with
        </h3>
        <h2 className="text-4xl sm:text-5xl font-bold text-white">
          Skills & Tools
        </h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-8 sm:gap-10">
        {technologies.map((technology, index) => (
          <motion.div
            key={technology.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5,
              delay: index * 0.1,
              type: "spring",
              stiffness: 100
            }}
            className="w-24 h-24 sm:w-28 sm:h-28"
          >
            <div className="relative w-full h-full group">
              {/* Background glow effect */}
              <div className="absolute inset-0 rounded-full bg-[#4dba87]/10 blur-md
                           group-hover:bg-[#4dba87]/20 transition-all duration-300" />
              
              {/* Tech icon container */}
              <div className="relative w-full h-full bg-white/5 rounded-full p-3 sm:p-4
                           backdrop-blur-sm border border-white/10 hover:border-[#4dba87]/50
                           transition-all duration-300 group-hover:scale-110">
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="w-full h-full object-contain filter grayscale-[30%] group-hover:grayscale-0
                           transition-all duration-300"
                />
              </div>

              {/* Tech name tooltip */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100
                           transition-opacity duration-300 whitespace-nowrap text-sm text-white/80">
                {technology.name}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWraper(Tech, "tech");
