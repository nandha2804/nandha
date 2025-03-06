import { motion } from "framer-motion";
import { FC, useEffect, useState } from "react";

const fadeInVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.8,
    },
  },
};

export const SectionWraper = (Component: FC, idName: string) =>
  function HOC() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        {
          threshold: 0.15,
          rootMargin: "-100px",
        }
      );

      const section = document.getElementById(idName);
      if (section) {
        observer.observe(section);
      }

      return () => {
        if (section) {
          observer.unobserve(section);
        }
      };
    }, []);

    return (
      <motion.section
        variants={fadeInVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        viewport={{ once: true }}
        className="w-full min-h-screen flex items-center relative pt-24 pb-12"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <span className="hash-span" id={idName}>
            &nbsp;
          </span>
          <Component />
        </div>
      </motion.section>
    );
  };

export default SectionWraper;
