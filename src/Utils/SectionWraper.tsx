import { motion } from "framer-motion";
import { styles } from "../style";
import { staggerContainer } from "./Motion";

import { FC } from "react";

const SectionsWraper = (Component: FC, idName: string) =>
  function HOC() {
    return (
      <motion.section
        initial={{ opacity: 0, transform: "translateY(50px)" }}
        whileInView={{ opacity: 1, transform: "translateY(0px)" }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0 scroll-mt-24 flex flex-col items-center`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default SectionsWraper;
