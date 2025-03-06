import { motion } from "framer-motion";
import { FC, useEffect, useState } from "react";

export const SectionWraper = (Component: FC, idName: string) =>
  function HOC() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        {
          threshold: 0.1,
          rootMargin: "-10% 0px"
        }
      );

      const section = document.getElementById(idName);
      if (section) observer.observe(section);

      return () => {
        if (section) observer.unobserve(section);
      };
    }, []);

    return (
      <motion.section
        initial="initial"
        animate={isVisible ? "animate" : "initial"}
        exit="exit"
        variants={{
          initial: {
            opacity: 0,
            y: 20
          },
          animate: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1]
            }
          },
          exit: {
            opacity: 0,
            y: -20,
            transition: {
              duration: 0.5
            }
          }
        }}
        className="w-full min-h-screen flex items-center justify-center relative section-transition"
      >
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <span className="hash-span" id={idName}>
            &nbsp;
          </span>
          {/* Fade in children elements when section is visible */}
          <motion.div
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { 
                opacity: 1, 
                y: 0,
                transition: {
                  delay: 0.2,
                  duration: 0.5
                }
              }
            }}
          >
            <Component />
          </motion.div>
        </div>
      </motion.section>
    );
  };

export default SectionWraper;
