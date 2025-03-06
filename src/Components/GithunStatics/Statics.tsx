import React from "react";
import { SectionWraper } from "../../Utils";
import { motion } from "framer-motion";
import { styles } from "../../style";
import GitHubCalendar from 'react-github-calendar';

const Statics = () => {
  const animation = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, ease: "easeOut" }
  };

  return (
    <div className="w-full">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div {...animation} className="text-center">
          <h2 className="text-[#4dba87] font-medium mb-2 tracking-wider">
            MY CODING ACTIVITY
          </h2>
          <h3 className={`${styles.sectionHeadText} text-white mb-6`}>
            GitHub Contributions
          </h3>

          <div className="bg-white/5 backdrop-blur-lg p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-[#4dba87]/20 transition-colors duration-300">
            <GitHubCalendar 
              username="nandha2804" 
              style={{ margin: '0 auto', maxWidth: '100%' }} 
            />
            <p className="mt-4 text-gray-400 text-sm">
              Showing contributions over the last year
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWraper(Statics, "github");
