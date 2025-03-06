import React from "react";
import { SectionWraper } from "../../Utils";
import { motion } from "framer-motion";
import { styles } from "../../style";
import GitHubCalendar from 'react-github-calendar';
import BgParticals from "../canvas/BgParticals";

const Statics = () => {
  const animation = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, ease: "easeOut" }
  };

  return (
    <div className="relative w-full h-screen">
      <BgParticals />
      <div className="absolute inset-0 top-[120px]">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div {...animation} className="text-center">
            <h2 className="text-[#4dba87] font-medium mb-2 tracking-wider">
              MY CODING ACTIVITY
            </h2>
            <h3 className={`${styles.sectionHeadText} text-white mb-12`}>
              GitHub Contributions
            </h3>

            <div className="bg-tertiary/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-card">
              <GitHubCalendar 
                username="nandha2804" 
                style={{ margin: '0 auto', maxWidth: '100%' }} 
              />
              <p className="mt-6 text-gray-400 text-sm">
                Showing contributions over the last year
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SectionWraper(Statics, "github");
