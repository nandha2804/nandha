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
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center">
          <motion.div {...animation} className="text-center mb-4 w-full">
            <h2 className="text-[#4dba87] font-medium mb-2 tracking-wider">
              MY CODING ACTIVITY
            </h2>
            <h3 className={`${styles.sectionHeadText} text-white mb-4`}>
              GitHub Contributions
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
           <div className="min-h-[400px] lg:min-h-[480px] flex flex-col gap-2">
              <motion.div
                {...animation}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="flex-1 bg-white/5 backdrop-blur-lg p-4 rounded-2xl border border-white/10 hover:border-[#4dba87]/20 transition-colors duration-300 hover:shadow-lg hover:shadow-[#4dba87]/5"
              >
                <h4 className="text-xl font-semibold text-white mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-[#4dba87]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                  </svg>
                  Contribution Calendar
                </h4>
                <GitHubCalendar
                  username="nandha2804"
                  style={{ margin: '0 auto', maxWidth: '100%' }}
                />
                <p className="mt-2 text-gray-400 text-sm">
                  Showing contributions over the last year
                </p>
              </motion.div>

              <motion.div
                {...animation}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex-1 bg-white/5 backdrop-blur-lg p-4 rounded-2xl border border-white/10 hover:border-[#4dba87]/20 transition-colors duration-300 hover:shadow-lg hover:shadow-[#4dba87]/5"
              >
                <h4 className="text-xl font-semibold text-white mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-[#4dba87]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zm6-4a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zm6-3a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                  GitHub Stats
                </h4>
                <iframe
                  src="https://github-readme-stats.vercel.app/api?username=nandha2804&show_icons=true&theme=github_dark&hide_border=true&count_private=true"
                  frameBorder="0"
                  className="w-full h-[220px]"
                  style={{
                    margin: '0 auto',
                    maxWidth: '100%',
                    background: 'transparent',
                  }}
                  title="GitHub Stats"
                />
              </motion.div>
            </div>

            <motion.div
              {...animation}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="min-h-[400px] lg:min-h-[480px] bg-white/5 backdrop-blur-lg p-2 rounded-2xl border border-white/10 hover:border-[#4dba87]/20 transition-colors duration-300 hover:shadow-lg hover:shadow-[#4dba87]/5 flex flex-col overflow-hidden"
            >
              <h4 className="text-xl font-semibold text-white px-2 mb-1 flex items-center">
                <svg className="w-5 h-5 mr-2 text-[#4dba87]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 3a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V3zm2-1a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1V3a1 1 0 00-1-1H7z" />
                </svg>
                GitHub Trophies
              </h4>
              <div className="flex-1 overflow-hidden flex items-start justify-center">
               <iframe
                 src="https://github-profile-trophy.vercel.app/?username=nandha2804&theme=nord&column=3&margin-w=15&margin-h=15&no-frame=true&no-bg=true"
                 frameBorder="0"
                 className="w-full h-full"
                 style={{
                   transform: 'scale(0.8)',
                   transformOrigin: 'center center',
                   maxWidth: '150%',
                   width: '150%',
                   marginLeft: '-25%',
                   marginRight: '-25%',
                   background: 'transparent'
                 }}
                  title="GitHub Trophies"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWraper(Statics, "github");
